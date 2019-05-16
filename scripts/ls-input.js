// keuze kleur
document.querySelector(".white .bg").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerColor", "kleur1");
}

document.querySelector(".blonde .bg").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerColor", "kleur2");
}

document.querySelector(".amber .bg").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerColor", "kleur3");
}

document.querySelector(".red .bg").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerColor", "kleur4");
}

document.querySelector(".brown .bg").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerColor", "kleur5");
}

document.querySelector(".black .bg").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerColor", "kleur6");
}

//keuze soort
document.querySelector(".soort-1").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "soort1");
}

document.querySelector(".soort-2").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "soort2");
}

document.querySelector(".soort-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "soort3");
}

//keuze gulpener bier (wordt niet getoond op etiket pagina!)

// TODO: deze gegevens worden niet getoond enkel opgeslagen, nog niet gebruikt!
document.querySelector(".beer-1").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("gulpenerBier", "bier1");
}

document.querySelector(".beer-2").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("gulpenerBier", "bier2");
}

document.querySelector(".beer-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("gulpenerBier", "bier3");
}

//keuze ingredient
document.querySelector(".ingredient-1").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("extraIngredient", "ingredient1");
}

 document.querySelector(".ingredient-2").onclick = function() {
     this.classList.toggle('clicked-border');
     localStorage.setItem("extraIngredient", "ingredient2");
 }

document.querySelector(".ingredient-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("extraIngredient", "ingredient3");
}

//opmerking
document.querySelector(".start-brouwen").addEventListener("click", function (){
        var user = document.getElementById("textarea").value ;
        localStorage.setItem("opmerking", user) ;
})

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

// var colorSelected = localStorage.getItem("beerColor");
// console.log(colorSelected);

// document.querySelector(".ingredient-2").addEventListener("touchstart" , function() {
//     this.classList.toggle('clicked-border');
//     localStorage.setItem("extraIngredient", "ingredient2");
// })

// first try shizzles
// Checking what beer color is selected
// function whiteBeer() {
//     localStorage.setItem("beerColor", "wit");
//     document.querySelector(".white .bg").style.border = ".5vw solid black";
//     document.querySelector(".white .bg").style.animationPlayState = "running";
//     // resetting colors
//     document.querySelector(".blonde .bg").style.border = ".5vw solid white";
//     document.querySelector(".amber .bg").style.border = ".5vw solid white";
//     document.querySelector(".red .bg").style.border = ".5vw solid white";
//     document.querySelector(".brown .bg").style.border = ".5vw solid white";
//     document.querySelector(".black .bg").style.border = ".5vw solid white";
//     //resetting animation
//     document.querySelector(".blonde .bg").style.animationPlayState = "paused";
//     document.querySelector(".amber .bg").style.animationPlayState = "paused";
//     document.querySelector(".red .bg").style.animationPlayState = "paused";
//     document.querySelector(".brown .bg").style.animationPlayState = "paused";
//     document.querySelector(".black .bg").style.animationPlayState = "paused";
// }

// function blondeBeer() {
//     localStorage.setItem("beerColor", "blond");
//     document.querySelector(".blonde .bg").style.border = ".5vw solid black";
//     document.querySelector(".blonde .bg").style.animationPlayState = "running";
//     // resetting colors
//     document.querySelector(".white .bg").style.border = ".5vw solid white";
//     document.querySelector(".amber .bg").style.border = ".5vw solid white";
//     document.querySelector(".red .bg").style.border = ".5vw solid white";
//     document.querySelector(".brown .bg").style.border = ".5vw solid white";
//     document.querySelector(".black .bg").style.border = ".5vw solid white";
//     //resetting animation
//     document.querySelector(".white .bg").style.animationPlayState = "paused";
//     document.querySelector(".amber .bg").style.animationPlayState = "paused";
//     document.querySelector(".red .bg").style.animationPlayState = "paused";
//     document.querySelector(".brown .bg").style.animationPlayState = "paused";
//     document.querySelector(".black .bg").style.animationPlayState = "paused";
// }

// function amberBeer() {
//     localStorage.setItem("beerColor", "amber");
//     document.querySelector(".amber .bg").style.border = ".5vw solid black";
//     document.querySelector(".amber .bg").style.animationPlayState = "running";
//     // resetting colors
//     document.querySelector(".white .bg").style.border = ".5vw solid white";
//     document.querySelector(".blonde .bg").style.border = ".5vw solid white";    
//     document.querySelector(".red .bg").style.border = ".5vw solid white";
//     document.querySelector(".brown .bg").style.border = ".5vw solid white";
//     document.querySelector(".black .bg").style.border = ".5vw solid white";
//     //resetting animation
//     document.querySelector(".white .bg").style.animationPlayState = "paused";
//     document.querySelector(".blonde .bg").style.animationPlayState = "paused";
//     document.querySelector(".red .bg").style.animationPlayState = "paused";
//     document.querySelector(".brown .bg").style.animationPlayState = "paused";
//     document.querySelector(".black .bg").style.animationPlayState = "paused";
// }

// // red brown black
// function redBeer() {
//     localStorage.setItem("beerColor", "rood");
//     document.querySelector(".red .bg").style.border = ".5vw solid black";
//     document.querySelector(".red .bg").style.animationPlayState = "running";
//     //resetting colors
//     document.querySelector(".white .bg").style.border = ".5vw solid white";
//     document.querySelector(".blonde .bg").style.border = ".5vw solid white";
//     document.querySelector(".amber .bg").style.border = ".5vw solid white";
//     document.querySelector(".brown .bg").style.border = ".5vw solid white";
//     document.querySelector(".black .bg").style.border = ".5vw solid white";
//     //resetting animation
//     document.querySelector(".white .bg").style.animationPlayState = "paused";
//     document.querySelector(".blonde .bg").style.animationPlayState = "paused";
//     document.querySelector(".amber .bg").style.animationPlayState = "paused";
//     document.querySelector(".brown .bg").style.animationPlayState = "paused";
//     document.querySelector(".black .bg").style.animationPlayState = "paused";
// }

// function brownBeer() {
//     localStorage.setItem("beerColor", "bruin");
//     document.querySelector(".brown .bg").style.border = ".5vw solid black";
//     document.querySelector(".brown .bg").style.animationPlayState = "running";
//     //resetting colors
//     document.querySelector(".white .bg").style.border = ".5vw solid white";
//     document.querySelector(".blonde .bg").style.border = ".5vw solid white";
//     document.querySelector(".amber .bg").style.border = ".5vw solid white";
//     document.querySelector(".red .bg").style.border = ".5vw solid white";
//     document.querySelector(".black .bg").style.border = ".5vw solid white";
//     //resetting animation
//     document.querySelector(".white .bg").style.animationPlayState = "paused";
//     document.querySelector(".blonde .bg").style.animationPlayState = "paused";
//     document.querySelector(".amber .bg").style.animationPlayState = "paused";
//     document.querySelector(".red .bg").style.animationPlayState = "paused";
//     document.querySelector(".black .bg").style.animationPlayState = "paused";
// }

// function blackBeer() {
//     localStorage.setItem("beerColor", "zwart");
//     document.querySelector(".black .bg").style.border = ".5vw solid black";
//     document.querySelector(".black .bg").style.animationPlayState = "running";
//     //resetting colors
//     document.querySelector(".white .bg").style.border = ".5vw solid white";
//     document.querySelector(".blonde .bg").style.border = ".5vw solid white";
//     document.querySelector(".amber .bg").style.border = ".5vw solid white";
//     document.querySelector(".red .bg").style.border = ".5vw solid white";
//     document.querySelector(".brown .bg").style.border = ".5vw solid white";
//     //resetting animation
//     document.querySelector(".white .bg").style.animationPlayState = "paused";
//     document.querySelector(".blonde .bg").style.animationPlayState = "paused";
//     document.querySelector(".amber .bg").style.animationPlayState = "paused";
//     document.querySelector(".red .bg").style.animationPlayState = "paused";
//     document.querySelector(".brown .bg").style.animationPlayState = "paused";
// }

// //soort
// function frisFruitig() {
//     localStorage.setItem("beerSoort", "fris en fruitig");
// }

// function lichtBitter() {
//     localStorage.setItem("beerSoort", "licht en bitter");
// }

// function rijkZwaar() {
//     // localStorage.setItem("beerSoort", "rijk en zwaar");
// }
