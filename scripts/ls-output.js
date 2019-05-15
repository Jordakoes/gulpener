document.getElementById("result").innerHTML = 'Kleur: ' + localStorage.getItem("beerColor");

document.getElementById("alcohol").innerHTML = 'Alcoholpercentage: ' + localStorage.getItem("sliderValue") + '%';

localStorage.clear();

// var header = document.querySelector('.heading-edit'), siteName;

// localStorage.setItem('siteName', 'Edited heading');

// siteName = localStorage.getItem('siteName');
// header.innerHTML = siteName;