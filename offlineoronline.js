let status = document.getElementById("online_Status");
			
    window.addEventListener('load', function(e) {
        if (navigator.onLine) {
            status.innerHTML = "ONLINE";
            status.classList.add("success");
            status.style.color = "#90ee90";
        } else {
            status.innerHTML = "OFFLINE";
            status.classList.remove("success");
            status.classList.add("error");
            status.style.color = "red";
            }
        }, false);
            
    window.addEventListener('online', function(e) {
        status.innerHTML = "BACK ONLINE";
        status.classList.remove("error");
        status.classList.add("success");
        status.style.color = "#90ee90";
    }, false);
            
    window.addEventListener('offline', function(e) {
        status.innerHTML = "WENT OFFLINE";
        status.classList.remove("success");
        status.classList.add("error");
        status.style.color = "red";
    }, false);