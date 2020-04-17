(function(){
  
  var NowMoment = moment(); // instantiate a moment object
  
  
  var NowDate = new Date();  // instantiate a JS Date object
  
  // display value of moment object in #displayMoment div
  var eDisplayMoment = document.getElementById('displayMoment');
  eDisplayMoment.innerHTML = NowMoment;
  
  // display value of Date object in #displayJsDate div
  var eDisplayDate = document.getElementById('displayJsDate');
  eDisplayDate.innerHTML = NowDate;
})();