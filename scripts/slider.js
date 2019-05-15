// Slider

//Oude slider code
// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//     output.innerHTML = this.value + '%';
// }

//Nieuwe slider code met localStorage
function sliderChange(val) {
    document.getElementById('output').innerHTML = val;
    //console.log(val)
    localStorage.setItem("sliderValue", val); //slider value set in localStorage
}

document.getElementById('slider').value = 4;