// Slider
function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
    //console.log(val)
    localStorage.setItem("sliderValue", val); //slider value set in localStorage
}

document.getElementById('slider').value = 4;

// TODO: If slider value is set in localStorage make the border black