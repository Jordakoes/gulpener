document.getElementById("result").innerHTML = 'Kleur: ' + localStorage.getItem("beerColor");
document.getElementById("alcohol").innerHTML = 'Alcoholpercentage: ' + localStorage.getItem("sliderValue") + '%';

document.querySelector("#soort").innerHTML = "Soort: " + localStorage.getItem("beerSoort");
document.querySelector("#extra-ingredient").innerHTML = "Gekozen ingredient: " + localStorage.getItem("extraIngredient");



localStorage.clear();

// var header = document.querySelector('.heading-edit'), siteName;

// localStorage.setItem('siteName', 'Edited heading');

// siteName = localStorage.getItem('siteName');
// header.innerHTML = siteName;