document.querySelector("#kleur").innerHTML = 'Kleur: ' + localStorage.getItem("beerColor");
document.querySelector("#alcohol").innerHTML = 'Alcoholpercentage: ' + localStorage.getItem("sliderValue") + '%';
document.querySelector("#soort").innerHTML = "Soort: " + localStorage.getItem("beerSoort");
document.querySelector("#extra-ingredient").innerHTML = "Gekozen ingredient: " + localStorage.getItem("extraIngredient");
document.querySelector("#opmerking").innerHTML = "Opmerking: " + localStorage.getItem("opmerking");

//making variables for the values that are being displayed (eg: kleur, alcoholpercentage, soort, gekozen ingredient and opmerking)
var colorSelected = localStorage.getItem("beerColor");
var alcoholSelected = localStorage.getItem("sliderValue"); 
var soortSelected = localStorage.getItem("beerSoort");
var ingredientSelected = localStorage.getItem("extraIngredient");

//console logging all values
console.log(colorSelected);
console.log(alcoholSelected);
console.log(soortSelected);
console.log(ingredientSelected);

localStorage.clear();