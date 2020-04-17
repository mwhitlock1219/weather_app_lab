$(document).ready(function() {
  var weatherApiUrl="https://api.openweathermap.org/data/2.5/weather";
  var apiKey = "c65692185192c2852cfc0a2ec9095d2a"; //<weather-api-keys>
  getLocation(); 
});

function getLocation(){

}

(function()
{
  // instantiate a moment object
  var NowMoment = moment();
  
  // instantiate a JavaScript Date object
  var NowDate = new Date();
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
  // display value of Date object in #displayJsDate div
  var eDisplayDate = document.getElementById('displayJsDate');
  eDisplayDate.innerHTML = NowDate;
})();