(function () {
  var body = document.querySelector('.he-article__body');
  if (!body) return;

  function isLabeled(p) {
    if (!p || p.tagName !== 'P') return false;
    var first = p.firstElementChild;
    if (!first || first.tagName !== 'STRONG') return false;
    var text = first.textContent.trim();
    return text.length > 0 && text.length < 48 && /[:.]$/.test(text);
  }

  function wrapNodes(nodes, className) {
    if (!nodes.length) return;
    var wrap = document.createElement('div');
    wrap.className = className;
    nodes[0].parentNode.insertBefore(wrap, nodes[0]);
    nodes.forEach(function (node) {
      wrap.appendChild(node);
    });
  }

  Array.prototype.forEach.call(body.querySelectorAll('h2'), function (heading) {
    if (!/short version/i.test(heading.textContent || '')) return;
    var nodes = [heading];
    var next = heading.nextElementSibling;
    while (next && next.tagName === 'P') {
      nodes.push(next);
      next = next.nextElementSibling;
    }
    wrapNodes(nodes, 'he-article__rules');
  });

  var labeled = Array.prototype.filter.call(body.querySelectorAll('p'), function (p) {
    return isLabeled(p) && !p.closest('.he-article__rules');
  });

  var i = 0;
  while (i < labeled.length) {
    var group = [labeled[i]];
    var j = i + 1;
    while (j < labeled.length && labeled[j].previousElementSibling === group[group.length - 1]) {
      group.push(labeled[j]);
      j += 1;
    }
    if (group.length >= 3) wrapNodes(group, 'he-article__facts');
    i = j;
  }
})();
