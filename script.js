$(document).ready(function(){


    $("button").click(function(){
      return getWeather();

    });
});

function getWeather(){

  var city = $("#submitcity").val();

  if(city != ''){
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + "&APPID=2dacb6406f3fff1faa1612f018938fe5",
      type: "GET",
        datatype:"json",
      success: function(data){
        console.log(data);
        var results =  showResults(data)
        $("#showWeather").html(results);
      }

    });

  }else {

      $("#error").html("<div> City field cannot be empty </div>");
  }


}

function showResults(data){
  return '<h3>Current Weather for '+data.name +', ' +data.sys.country + '</h3>'+
          '<p> Weather : ' + data.weather[0].main  + '</p>' +
          '<p> Wind Speed : ' + data.wind.deg + '</p>' ;

}

function activatePlaceSearch(){
  var input =  document.getElementById("submitcity");
  var autocomplete = new google.maps.places.Autocomplete(input);


}
