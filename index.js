// DISPLAYING THE TIME TO LEON
setInterval (function(){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var prepand;
  if(h>= 12) {
    prepand = "PM";
    h = h - 12;
  }
  else{
    prepand = "AM";
  }
  
  if(m<10) {
    m = "0" + m;
  }
  
  if(s<10) {
   s = "0" + s; 
  }

  if( h === 0 && prepand === "AM"){
    document.getElementById("displaying_Text").innerHTML = "IT IS LATE, YOU SHOULD GO TO SLEEP";
  }else{
    document.getElementById("displaying_Text").innerHTML = " ";
  }
  
  var weekend = new Array(7);
  weekend[0] = "Sunday";
  weekend[1] = "Monday";
  weekend[2] = "Tuesday";
  weekend[3] = "Wednesday";
  weekend[4] = "Thursday";
  weekend[5] = "Friday";
  weekend[6] = "Saturday";
  var n = weekend[d.getDay()];
  document.getElementById("diaplaying_Time").innerHTML = (h + " " + " : " + m + " " + ": " + s + " " + prepand);
  document.getElementById("displaying_Date").innerHTML = (n);
  }, 1000);
