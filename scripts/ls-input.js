// Checking what beer color is selected

function whiteBeer() {
    localStorage.setItem("beerColor", "white");
    document.querySelector(".white .bg").style.border = ".5vw solid black";
    // resetting previous selection
    document.querySelector(".blonde .bg").style.border = ".5vw solid white";
    document.querySelector(".amber .bg").style.border = ".5vw solid white";
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