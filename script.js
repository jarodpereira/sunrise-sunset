let request = new XMLHttpRequest();
let url = "https://api.sunrise-sunset.org/json?lat=40.725867&lng=-74.005079";
request.open("GET", url, true);
request.onload = function() {
    //Begin accessing JSON data here. Data stored in request.response
    let data = JSON.parse(this.response);
    
    let sunrise = document.getElementById('sunrise');
    let sunset = document.getElementById('sunset');
    
    if(request.status >= 200 && request.status < 400) {
        sunrise.textContent = convertToEST(data.results.sunrise);
        sunset.textContent = convertToEST(data.results.sunset);
        
        
    }
};

request.send();

function convertToEST(utc) {
    //est = utc - 5hrs
    let utcHours = utc.substr(0, utc.indexOf(":"));
    let utcMinSec = utc.substr(utc.indexOf(":")+1);
    
    let est = parseInt(utcHours, 10) - 5;
    est += ":" + utcMinSec;
    
    return est;
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
