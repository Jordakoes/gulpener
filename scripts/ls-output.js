document.getElementById("result").innerHTML = 'Kleur: ' + localStorage.getItem("beerColor");
document.getElementById("alcohol").innerHTML = 'Alcoholpercentage: ' + localStorage.getItem("sliderValue") + '%';

document.querySelector("#soort").innerHTML = "Soort: " + localStorage.getItem("beerSoort");
document.querySelector("#extra-ingredient").innerHTML = "Gekozen ingredient: " + localStorage.getItem("extraIngredient");

document.querySelector("#opmerking").innerHTML = "Opmerking: " + localStorage.getItem("opmerking");

localStorage.clear();