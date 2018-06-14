function refresh() {
  document.getElementById('display').textContent = `${hour} : ${min} : ${sec}`;
}

let hour = 99;
let min = 59;
let sec = 57;

refresh();

setInterval(function() {
	sec++;
  if (sec > 59) { // This placement is really important
  	sec = 0;
    min++;
  }
  if (min > 59) { //if this is on top, it doesn't work
  	min = 0;
    hour++;
  }
  if (sec < 10) {
  	sec = "0" + sec;
  }
  if (min < 10) {
  	min = "0" + min;
    min = min.toString();
    min = min.substring(min.length - 2);
  }
  if (hour < 10) {
  	hour = "0" + hour;
    hour = hour.toString();
    hour = hour.substring(hour.length - 2);
  }
  refresh();
  
}, 1000);