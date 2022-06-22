// APP DATA
const weather = {}
weather.temperature = {
  unit: 'fahrenheit'
}

// CONST AND VARIABLES
const KELVIN = 273;
const key = '6ac59c4213ca2c7c4a2e9516f52c2afa'

//CHECK IF THE BROWSER SUPPORTS IT OR ALLOWS IT
if ('geolocation' in navigator){
  navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
  notificationElement.style.display = "block";
  notificationElement.innerHTML = `<p> Browser dosn't support Geolocation`;
}

//SET USERS POSITION 
function setPosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;

  getWeather(latitude, longitude);
}


//SHOW ERROR
function showError(error){
  notificationElement.style.display = "block"
  notificationElement.innerHTML = `<p> ${error.message}`;
}


function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;
      
    fetch(api).then(function(responce){
      let data = responce.json();
      console.log(data)
      return data;
    })
    .then(function(data){
      weather.temperature.value = Math.floor(data.main.temp - KELVIN)
      weather.description = data.weather[0].description;
      weather.city = data.name;
      weather.country = data.sys.country;
    })
    .then(function(){
      displayWeather()
    })
  }
  
  
  //DISPLAYING WEATHER TO THE USER 
  function displayWeather(){
    if(weather.id == 202 ||weather.id == 211 || weather.id == 212 ||weather.id ==  232){
        document.getElementById('danger_WIdget').style.display = "block";
        document.getElementById('extreme').style.display = "block";
        document.getElementById('city').innerHTML = `${weather.city}`;
        document.getElementById('discription').innerHTML = `${weather.description}`;
        document.getElementById("top_widget").style.opacity = "0.2";
        document.getElementById("middle_widget").style.opacity = "0.2";
    }else if(weather.id == 602 ||weather.id ==  616 ||weather.id ==  622){
        document.getElementById('danger_WIdget').style.display = "block";
        document.getElementById('extreme').style.display = "block";
        document.getElementById('city').innerHTML = `${weather.city}`;
        document.getElementById('discription').innerHTML = `${weather.description}`;
        document.getElementById("top_widget").style.opacity = "0.2";
        document.getElementById("middle_widget").style.opacity = "0.2";
    }else if(weather.id == 502 ||weather.id ==  522 ||weather.id ==  503){
        document.getElementById('danger_WIdget').style.display = "block";
        document.getElementById('extreme').style.display = "block";
        document.getElementById('city').innerHTML = `${weather.city}`;
        document.getElementById('discription').innerHTML = `${weather.description}`;
        document.getElementById("top_widget").style.opacity = "0.2";
        document.getElementById("middle_widget").style.opacity = "0.2";
    }else{
        document.getElementById('danger_WIdget').style.display = "none";
        document.getElementById("top_widget").style.opacity = "1";
        document.getElementById("middle_widget").style.opacity = "1";
    }
    // console.log(`${weather.temperature.value} &#x2103`);
    // console.log( weather.description);
    // console.log(`${weather.city.toUpperCase()}, ${weather.country.toUpperCase()}`);
  
    setInterval(displayWeather, 50000);
  }
