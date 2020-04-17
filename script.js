$(document).ready(function(){
  $('#getWeatherForcast').click(function(){
    var zipcode = $('#zip').val();
    var key = 'c65692185192c2852cfc0a2ec9095d2a'

    $.ajax({
      url:'https://api.openweathermap.org/data/2.5/weather',
      dataType:'json',
      type:'GET',
      data:{zip:zipcode, appid:key, units:'imperial'},

      success: function(data){
        var wf = '';
        $.each(data.weather,function(index, val){
          wf += '<p><b>'+data.name+'</b></p>'+data.main.temp+ '&deg;F '+' | '+ val.main+", "+val.description
        });
        $('#showWeatherForcast').html(wf);
      }
    })
  })
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
})




// (function(){
  
//   var NowMoment = moment(); // instantiate a moment object
  
  
//   var NowDate = new Date();  // instantiate a JS Date object
  
//   // display value of moment object in #displayMoment div
//   var eDisplayMoment = document.getElementById('displayMoment');
//   eDisplayMoment.innerHTML = NowMoment;
  
//   // display value of Date object in #displayJsDate div
//   var eDisplayDate = document.getElementById('displayJsDate');
//   eDisplayDate.innerHTML = NowDate;
// })();