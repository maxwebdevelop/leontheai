window.onload = function fetchRandomAdvice(){
// Replace ./data.json with your JSON feed
fetch('	https://api.adviceslip.com/advice')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    // Work with JSON data here
    document.getElementById("randomadvice").innerHTML = data.slip.advice;
    console.log(data)
  })
  .catch((err) => {
    // Do something for an error here
  })

  setInterval(fetchRandomAdvice, 6000);
}
