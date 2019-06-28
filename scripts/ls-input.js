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
document.querySelector(".blond").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "blond");
    //removing border
    document.querySelector(".soort-2").classList.remove('clicked-border');
}

document.querySelector(".dubbel").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "dubbel");
    //removing border
}

document.querySelector(".tripel").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "tripel");
    //removing border
}

document.querySelector(".quadrupel_gerstenwijn").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "quadrupel");
    //removing border
}

document.querySelector(".porter_stout").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "porter");
    //removing border
}

document.querySelector(".ipa").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "ipa");
    //removing border
}

document.querySelector(".witbier").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "witbier");
    //removing border
}

document.querySelector(".weizen").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "weizen");
    //removing border
}

document.querySelector(".bockbier").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("beerSoort", "bockbier");
    //removing border
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
    localStorage.setItem("extraIngredient", "fruitig");
    //removing border
    document.querySelector(".ingredient-2").classList.remove('clicked-border');
    document.querySelector(".ingredient-3").classList.remove('clicked-border');
}

 document.querySelector(".ingredient-2").onclick = function() {
     this.classList.toggle('clicked-border');
     localStorage.setItem("extraIngredient", "kruidig");
     //removing border
     document.querySelector(".ingredient-1").classList.remove('clicked-border');
     document.querySelector(".ingredient-3").classList.remove('clicked-border');
 }

document.querySelector(".ingredient-3").onclick = function() {
    this.classList.toggle('clicked-border');
    localStorage.setItem("extraIngredient", "complex");
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
        //TODO: Zorg dat niet ingevulde keuzes een rode border krijgen
        // if(colorSelected === null) {
        //     document.querySelector(".grid-container-kleur").style.border = "5px solid red";
        // } else if(alcoholSelected === null) {
        //     document.querySelector(".slider").style.border = "5px solid red";
        // } else if (soortSelected === null) {
        //     document.querySelector(".grid-container-soort").style.border = "5px solid red";
        // } else if (ingredientSelected === null) {
        //     document.querySelector(".grid-container-ingredient").style.border = "5px solid red"; 
        // }

        //if not, display a popup message
        document.querySelector('#overlay').style.display = "block";        
    } else {
        //if they are filled in, send the user to the next page
        document.querySelector(".start-brouwen").href="/pages/jouwbier.html"; 
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