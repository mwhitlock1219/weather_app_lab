$(document).ready(function(){
  $('#getWeatherForcast').click(function(){
    var zipcode = $('#zip').val();
    var key = 'c65692185192c2852cfc0a2ec9095d2a';
    
    $.ajax({
      url:'https://api.openweathermap.org/data/2.5/weather',
      dataType:'json',
      type:'GET',
      data:{zip:zipcode, appid:key, units:'imperial',  },

      success: function(data){
        var weatherfunction = '';
        $.each(data.weather,function(index, val){
          weatherfunction += '<p><b>'+data.name+'</b></p>'+data.main.temp+ '&deg;F '+' | '+ val.main+", "+val.description 
      
      });
        $('#showWeatherForcast').html(weatherfunction);

        let timeZone = data.timezone // pulled from api 
        console.log(timeZone)

        let time = moment().unix(); // pulls current tiime from my server
        let zip2time = time + (timeZone - (-14400)); // taking your current time and adding in the timezone from the zipcode

        let offset = moment.unix(zip2time).format('LT'); //takes time from zipcode and makes it readable/standard
        console.log(offset);//just checking

        let zone = '';

        if (timeZone == -14400){// cycles trough timezones
          zone = 'EDT';
        } else if (timeZone == -18000){
          zone = 'CDT';
        } else if (timeZone == -21600){
          zone = 'MDT';
        } else if (timeZone == -25200){
          zone = 'PDT';
        } else if (timeZone == -28800){
          zone = 'AKDT';
        } else if (timeZone == -36000){
          zone = 'HST';
        }

        console.log (zone);
        var finalTimeZone = offset + " " + zone // combines time and timezone

        $('#time').html(finalTimeZone)// appends to html
      }

    })
    
  })
})


