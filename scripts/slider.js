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
    console.log(val)
    localStorage.setItem("sliderValue", val); //hier wordt de waarde van de slider naar localStorage gestuurd
}

document.getElementById('slider').value = 4;