
      var div  = document.getElementById("cordinates");
      function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
        } else {
          div.innerHTML = "The Browser Does not Support Geolocation";
        }
      }

      function showPosition(position) {
        div.innerHTML = position.coords.latitude + " " + position.coords.longitude;
        document.getElementById("displayDot").style.display = "block";
      }
      getLocation();
