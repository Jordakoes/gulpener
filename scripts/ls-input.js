//TODO: there is probably a cleaner way to remove the 'active' class by looping 
//trough the nodeList of '.bg' but for now, i'll keep it as is...
var x = document.querySelectorAll(".bg");
console.log(x);

// keuze kleur
document.querySelector(".white .bg").onclick = function() {
    this.classList.toggle('active'); //add border on click
    localStorage.setItem("beerColor", "wit");

    x[1].classList.remove('active');
    x[2].classList.remove('active');
    x[3].classList.remove('active');
    x[4].classList.remove('active');
    x[5].classList.remove('active');
}

document.querySelector(".blonde .bg").onclick = function() {
    this.classList.toggle('active');
    localStorage.setItem("beerColor", "blond");

    x[0].classList.remove('active');
    x[2].classList.remove('active');
    x[3].classList.remove('active');
    x[4].classList.remove('active');
    x[5].classList.remove('active');
}

document.querySelector(".amber .bg").onclick = function() {
    this.classList.toggle('active');
    localStorage.setItem("beerColor", "amber");

    x[0].classList.remove('active');
    x[1].classList.remove('active');
    x[3].classList.remove('active');
    x[4].classList.remove('active');
    x[5].classList.remove('active');
}

document.querySelector(".red .bg").onclick = function() {
    this.classList.toggle('active');
    localStorage.setItem("beerColor", "rood");

    x[0].classList.remove('active');
    x[1].classList.remove('active');
    x[2].classList.remove('active');
    x[4].classList.remove('active');
    x[5].classList.remove('active');
}

document.querySelector(".brown .bg").onclick = function() {
    this.classList.toggle('active');
    localStorage.setItem("beerColor", "bruin");

    x[0].classList.remove('active');
    x[1].classList.remove('active');
    x[2].classList.remove('active');
    x[3].classList.remove('active');
    x[5].classList.remove('active');
}

document.querySelector(".black .bg").onclick = function() {
    this.classList.toggle('active');
    localStorage.setItem("beerColor", "zwart");

    x[0].classList.remove('active');
    x[1].classList.remove('active');
    x[2].classList.remove('active');
    x[3].classList.remove('active');
    x[4].classList.remove('active');
}

//keuze soort
document.querySelector(".soort-1").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "fris en fruitig");
    //removing border
    document.querySelector(".soort-2").classList.remove('clicked-border');
    document.querySelector(".soort-3").classList.remove('clicked-border');
}

document.querySelector(".soort-2").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "licht en bitter");
    //removing border
    document.querySelector(".soort-1").classList.remove('clicked-border');
    document.querySelector(".soort-3").classList.remove('clicked-border');
}

document.querySelector(".soort-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "rijk en zwaar");
    //removing border
    document.querySelector(".soort-1").classList.remove('clicked-border');
    document.querySelector(".soort-2").classList.remove('clicked-border');
}

//keuze gulpener bier (wordt niet getoond op etiket pagina!)

// TODO: deze gegevens worden niet getoond enkel opgeslagen, nog niet gebruikt!
document.querySelector(".beer-1").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("gulpenerBier", "bier1");
    //removing border
    document.querySelector(".beer-2").classList.remove('clicked-border');
    document.querySelector(".beer-3").classList.remove('clicked-border');
}

document.querySelector(".beer-2").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("gulpenerBier", "bier2");
    //removing border
    document.querySelector(".beer-1").classList.remove('clicked-border');
    document.querySelector(".beer-3").classList.remove('clicked-border');
}

document.querySelector(".beer-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("gulpenerBier", "bier3");
    //removing border
    document.querySelector(".beer-1").classList.remove('clicked-border');
    document.querySelector(".beer-2").classList.remove('clicked-border');
}

//keuze ingredient
document.querySelector(".ingredient-1").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("extraIngredient", "ingredient1");
    //removing border
    document.querySelector(".ingredient-2").classList.remove('clicked-border');
    document.querySelector(".ingredient-3").classList.remove('clicked-border');
}

 document.querySelector(".ingredient-2").onclick = function() {
     this.classList.toggle('clicked-border');
     localStorage.setItem("extraIngredient", "ingredient2");
     //removing border
     document.querySelector(".ingredient-1").classList.remove('clicked-border');
     document.querySelector(".ingredient-3").classList.remove('clicked-border');
 }

document.querySelector(".ingredient-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("extraIngredient", "ingredient3");
    //removing border
    document.querySelector(".ingredient-1").classList.remove('clicked-border');
    document.querySelector(".ingredient-2").classList.remove('clicked-border');
}

//opmerking
document.querySelector(".start-brouwen").addEventListener("click", function() {
    var user = document.getElementById("textarea").value;
    localStorage.setItem("opmerking", user);
})

function openPopup() {
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

    //check if all fields are filled
    if(colorSelected === null || alcoholSelected === null || soortSelected === null || ingredientSelected === null) {
        //if not, display a popup message
        document.querySelector('#overlay').style.display = "block";
    } else {
        //if they are filled in, send the user to the next page
        document.querySelector(".start-brouwen").href="/pages/yourbeer.html"; 
    }
}

//close the popup when the user agrees the message
function closePopup() {
    document.querySelector('#overlay').style.display = "none";
}

//close popup on esc key
document.addEventListener('keyup', function (event) {
    if (event.defaultPrevented) {
        return;
    }

    var key = event.key || event.keyCode;

    if (key === 'Escape' || key === 'Esc' || key === 27) {
        document.querySelector('#overlay').style.display = "none";
    }
});