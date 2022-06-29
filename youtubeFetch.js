function fetchspotify(){
var leonsinput = document.getElementById("Leonrequests").value;
console.log(leonsinput);
fetch(`https://v1.nocodeapi.com/maximfedorets/spotify/xcJsWsUAkUAtaoND/search?q= ${leonsinput}`)
    .then((response) => {
      return response.json()
    }
    )
    .then((data) => {
      document.getElementById("Leonrequests").value = '';
      console.log(data)
      //play the album in the spotify div
      document.getElementById('spotify').innerHTML = `<iframe src="https://open.spotify.com/embed/album/${data.albums.items[0].id}" width="300" height="100" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>`
    }
    )
    .catch((error) => {
      document.getElementById("error").innerHTML = error;
      setTimeout(function(){
        document.getElementById("error").style.display = 'none';}
        , 5000);
    }
    )

  }
