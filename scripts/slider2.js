// Slider
function sliderChangeFlessen(val) {
    document.getElementById('output-flessen').innerHTML = val;
    //console.log(val)
    localStorage.setItem("sliderValueFlessen", val); //slider value set in localStorage
}

document.getElementById('slider-flessen').value = 120;

console.log(document.getElementById('slider-flessen').value);

// Slider
function sliderChangeFusten(val) {
    document.getElementById('output-fusten').innerHTML = val;
    //console.log(val)
    
    localStorage.setItem("sliderValueFusten", val); //slider value set in localStorage
}

document.getElementById('slider-fusten').value = 0;

//tonen van de totaalprijs door...
//document.querySelector("#output-totaalprijs").innerHTML = val + val;

document.querySelector("#output-totaalprijs").innerHTML = "hellep";
console.log(document.querySelector("#output-flessen").value);