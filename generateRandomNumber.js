// Function to generate random number 
function rnadomNumber(){   
  document.getElementById("rnadomNumber").innerHTML = (Math.floor((Math.random()*1000)+1)); 
}

setInterval(rnadomNumber, 5000);