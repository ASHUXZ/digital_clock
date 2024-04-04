function updateclock() {
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  var timeString = hours + ":" + minutes + ":" + seconds;
  document.getElementById("time").innerText = timeString;
}
setInterval(updateclock, 1000);
updateclock();
