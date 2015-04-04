var clock = document.getElementById("clock");

function zeroPad (num) {
  return (num < 10) ? "0"+num: num;
}

function timeIs () {
  var now = new Date();
  var hours = now.getHours();
  var mins = now.getMinutes();
  var secs = now.getSeconds();

  clock.innerHTML = zeroPad(hours)+(":")+zeroPad(mins)+(":")+zeroPad(secs);
}

setInterval("timeIs()", 1000);

/*
an immediately invoked function expression cannot work here for one reason only: it will make just one call and render the time once.

(function () {
  "use strict";

  var clock = document.getElementById("clock");

  function zeroPad (num) {
    return (num < 10) ? "0"+num: num;
  }

  function timeIs () {
    var now = new Date();
    var hours = now.getHours();
    var mins = now.getMinutes();
    var secs = now.getSeconds();

    clock.innerHTML = zeroPad(hours)+(":")+zeroPad(mins)+(":")+zeroPad(secs);
  }

  setInterval(timeIs(), 1000);
})();

*/
