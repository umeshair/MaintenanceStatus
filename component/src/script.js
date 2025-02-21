    // Set the countdown time (10 minutes from page load)
    var countDownDate = new Date();
    countDownDate.setMinutes(countDownDate.getMinutes() + 10);

    // Update countdown every second
    var countdownFunction = setInterval(function() {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      // Calculate minutes and seconds
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the countdown
      document.getElementById("countdown").innerHTML = "Time Remaining: " + minutes + "m " + seconds + "s";

      // When countdown is over
      if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("countdown").innerHTML = "We are back online!";
      }
    }, 1000);