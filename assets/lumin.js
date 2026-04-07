// Set the target date for the countdown (YYYY-MM-DD format)
    const targetDate = new Date('{{section.settings.date}}T23:59:59');

  
  // Function to update the countdown
  function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById('days-{{ section.id }}').innerHTML = `${days}`;
      document.getElementById('hours-{{ section.id }}').innerHTML = `${hours}`;
      document.getElementById('minutes-{{ section.id }}').innerHTML = `${minutes}`;
      document.getElementById('seconds-{{ section.id }}').innerHTML = `${seconds}`;
      
         // Update every second
      setTimeout(updateCountdown, 1000);
    } else {
      // If the target date has passed, hide the countdown
      document.getElementById("countdown-{{ section.id }}").style.display = "none";
        document.getElementById("expired-{{ section.id }}").style.display = "block";
    }
  }

  // Initial call to start the countdown
  updateCountdown();