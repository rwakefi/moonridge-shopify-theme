class Fsb {
    constructor(fsb = { selector: '#fsb', events: [], placeholder: '(x)' }) {
      if (fsb.selector && typeof fsb.selector == 'string' && fsb.selector !== '') {
        this.selector = fsb.selector;
      } else {
        throw new TypeError("Please pass a valid selector");
      }
      
      this.fsbElement = document.querySelector(this.selector);
      if(!this.fsbElement) {
        throw new TypeError("Freeshipping Bar Element Not Found");
      }
      
      this.events = fsb.events;
      this.placeholder = fsb.placeholder;
      
      this.goal = parseInt(this.fsbElement.dataset.goal);
      this.startHeadline = this.fsbElement.dataset.headlineStart;
      this.middleHeadline = this.fsbElement.dataset.headlineMiddle;
      this.endHeadline = this.fsbElement.dataset.headlineEnd;
    }
    
    getCart() {
      return fetch('/cart.js')
      .then(res=>res.json())
    }
  
    update(cart) {
      let shipping = {
        difference: this.goal - cart.total_price,
        progress: Math.round((cart.total_price * 100) / this.goal) 
      }
      
      if(cart.total_price <= 0) {
        this.fsbElement.style.setProperty('--progress', `${shipping.progress}%`);
        this.fsbElement.querySelector('.fsb-paragraph').innerHTML = this.startHeadline.replace(this.placeholder, `<span class="fsb--number">${this.formatMoney(this.goal)}</span>`);
      } else if(cart.total_price > 0 && cart.total_price < this.goal) {
        this.fsbElement.style.setProperty('--progress', `${shipping.progress}%`);
        this.fsbElement.querySelector('.fsb-paragraph').innerHTML = this.middleHeadline.replace(this.placeholder, `<span class="fsb--number">${this.formatMoney(shipping.difference)}</span>`);
      } else if(cart.total_price >= this.goal) {
        this.fsbElement.style.setProperty('--progress', `${shipping.progress}%`);
        this.fsbElement.querySelector('.fsb-paragraph').innerHTML = this.endHeadline.replace(this.placeholder, `<span class="fsb--number">${this.formatMoney(this.goal)}</span>`);
      } 
    }
    
    attachEvents() {
      if(this.events.length > 0) {
        this.events.forEach(event => {
          document.addEventListener(event, e => this.getCart().then(cart => this.update(cart)), true);
        })
      }
    }
  
    formatMoney(cents, format) {
      if (typeof cents == 'string') { cents = cents.replace('.',''); }
      var value = '';
      var placeholderRegex = /\{\{\s*(\w+)\s*\}\}/;
      var formatString = (format || "${{amount_no_decimals}}");
  
      function defaultOption(opt, def) {
        return (typeof opt == 'undefined' ? def : opt);
      }
  
      function formatWithDelimiters(number, precision, thousands, decimal) {
        precision = defaultOption(precision, 2);
        thousands = defaultOption(thousands, ',');
        decimal   = defaultOption(decimal, '.');
  
        if (isNaN(number) || number == null) { return 0; }
  
        number = (number/100.0).toFixed(precision);
  
        var parts   = number.split('.'),
            dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
            cents   = parts[1] ? (decimal + parts[1]) : '';
  
        return dollars + cents;
      }
  
      switch(formatString.match(placeholderRegex)[1]) {
        case 'amount':
          value = formatWithDelimiters(cents, 2);
          break;
        case 'amount_no_decimals':
          value = formatWithDelimiters(cents, 0);
          break;
        case 'amount_with_comma_separator':
          value = formatWithDelimiters(cents, 2, '.', ',');
          break;
        case 'amount_no_decimals_with_comma_separator':
          value = formatWithDelimiters(cents, 0, '.', ',');
          break;
      }
  
      return formatString.replace(placeholderRegex, value);
    }
  }