let noBorder = `border: .5vw solid white;`

// Checking what beer color is selected
function whiteBeer() {
    localStorage.setItem("beerColor", "white");
    document.querySelector(".white .bg").style.border = ".5vw solid black";
    // resetting previous selection
    document.querySelector(".blonde .bg").style.border = ".5vw solid white";
    document.querySelector(".amber .bg").style.border = ".5vw solid white";

    //TODO: Misschien querySelectorAll(".bg").style.border = ".5vw solid white";
    // inplaats van alle andere borders resetten? 
}

function blondeBeer() {
    localStorage.setItem("beerColor", "blonde");
    document.querySelector(".blonde .bg").style.border = ".5vw solid black";
    // resetting prev selection
    document.querySelector(".white .bg").style.border = ".5vw solid white";
    document.querySelector(".amber .bg").style.border = ".5vw solid white";
}

function amberBeer () {
    localStorage.setItem("beerColor", "amber");
    document.querySelector(".amber .bg").style.border = ".5vw solid black";

    document.querySelector(".white .bg").style.border = ".5vw solid white";
    document.querySelector(".blonde .bg").style.border = ".5vw solid white";
}

function redBeer() {
    localStorage.setItem("beerColor", "red");
    document.querySelector(".red .bg").style.border = ".5vw solid black";
}

function brownBeer() {
    localStorage.setItem("beerColor", "brown");
    document.querySelector(".brown .bg").style.border = ".5vw solid black";
}

function blackBeer() {
    localStorage.setItem("beerColor", "black");
    document.querySelector(".black .bg").style.border = ".5vw solid black";
}