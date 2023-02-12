const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');




let upcEve = "1 Jan 2024";


function timeLeft() {
  var dateTod = new Date();
  var dateUpc = new Date(upcEve);
   
  var seconds = Math.floor((dateUpc - dateTod) / 1000);
  var days = Math.floor((seconds/3600)/24);
  var hours = Math.floor(seconds/3600) % 24;
  var mins = Math.floor(seconds / 60) % 60;
  var secs = Math.floor(seconds) % 60 ;
    
  console.log(dateTod);
  console.log(dateUpc - dateTod);
  console.log(days);
  console.log(hours);
  console.log(mins);
  console.log(secs);


  daysEl.innerHTML = days;
  hoursEl.innerHTML = formTime(hours);
  minsEl.innerHTML = formTime(mins);
  secsEl.innerHTML = formTime(secs);


  function formTime(time){
    if(time<10){
        return (`0${time}`);
    }
    else{
        return time;
    }
  }
}; 


timeLeft();

setInterval(timeLeft, 1000);