setInterval(showTime, 1000);

function showTime() {
  var time = new Date();

  var days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  var Hrs = time.getHours();
  var Min = time.getMinutes();
  var Sec = time.getSeconds();
  var am = 'AM';

  if (Hrs > 12) {
    Hrs - Hrs - 12;
    var am = 'PM';
  } else {
    var am = 'AM';
  }
  Hrs = Hrs < 10 ? '0' + Hrs : Hrs;
  Min = Min < 10 ? '0' + Min : Min;
  Sec = Sec < 10 ? '0' + Sec : Sec;

  document.getElementById('Day').innerHTML = days[time.getDay()];
  document.getElementById('hours').innerHTML = Hrs;
  document.getElementById('Minutes').innerHTML = Min;
  document.getElementById('Seconds').innerHTML = Sec;
  document.getElementById('ampm').innerHTML = am;
}

//Option 2
setInterval(function () {
  var time = new Date();
  var fullTime = time.toLocaleTimeString(); //1 line on code
  document.querySelector('.digital-clock').innerHTML = fullTime;
}, 1000);
