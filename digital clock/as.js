let runningClock = () => {
  let clock = document.querySelector(".clock");

  let time = new Date();
  time = time.toLocaleTimeString();
  clock.innerText = time;
};

runningClock();

setInterval(runningClock, 1000);
