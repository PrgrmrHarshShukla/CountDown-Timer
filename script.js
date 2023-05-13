let userEvent = prompt("Enter any event Date to CountDown to in the same format (dd Mmm yyyy)", '1 Jan 2025');
let userEventName = prompt("Enter your event's name", 'Year 2025');


const eventNameEl  = document.getElementById('bigText');
const daysEl  = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl  = document.getElementById('mins');
const secsEl  = document.getElementById('secs');


let upcomingEvent = userEvent;


function timeLeft() {
  let dateToday    = new Date();
  let dateUpcoming = new Date(upcomingEvent);
   
  let seconds= Math.floor((dateUpcoming - dateToday) / 1000);
  let days   = Math.floor(seconds / 3600 / 24);
  let hours  = Math.floor(seconds / 3600) % 24;
  let mins   = Math.floor(seconds / 60) % 60;
  let secs   = Math.floor(seconds) % 60 ;
  let eventName = `Your event '${userEventName}' is in`

  eventNameEl.innerHTML  = eventName;
  daysEl.innerHTML  = days;
  hoursEl.innerHTML = formatTime(hours);
  minsEl.innerHTML  = formatTime(mins);
  secsEl.innerHTML  = formatTime(secs);
}; 


function formatTime(time){
 return (time<10) ? `0${time}` : time;
};


timeLeft();

setInterval(timeLeft, 1000);