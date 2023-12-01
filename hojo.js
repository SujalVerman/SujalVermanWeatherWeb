// time.js
function showTime() {
    // get the current date and time
    let date = new Date();
    // format the time with am and pm
    let time = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second:"numeric",
      hour12: true
    });
    // display the time in the div element
    document.getElementById("time-div").innerHTML = time;
    // update the time every second
    setInterval(showTime, 1000);
  }
  
  // call the function when the window loads
  window.onload = showTime;
  