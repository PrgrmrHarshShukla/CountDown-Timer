const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl  = document.getElementById('mins');
const secsEl  = document.getElementById('secs');


let upcomingEvent = '1 Jan 2026';


function timeLeft() {
  var dateToday    = new Date();
  var dateUpcoming = new Date(upcomingEvent);
   
  var seconds= Math.floor((dateUpcoming - dateToday) / 1000);
  var days   = Math.floor(seconds / 3600 / 24);
  var hours  = Math.floor(seconds / 3600) % 24;
  var mins   = Math.floor(seconds / 60) % 60;
  var secs   = Math.floor(seconds) % 60 ;

  daysEl.innerHTML  = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML  = formatTime(mins);
  secsEl.innerHTML  = formatTime(secs);


  function formatTime(time){
   return (time<10) ? `0${time}` : time;
  }
}; 


timeLeft();

setInterval(timeLeft, 1000);