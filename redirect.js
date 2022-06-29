function isMobileDevice() {
    if(screen.width <= 760) {
        console.log("Phone resolution")
        window.location.href = "https://www.google.com/";
    }
}
setInterval(isMobileDevice, 300)