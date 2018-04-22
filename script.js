// SET UP DOM VARIABLES
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var colorInputs = document.querySelectorAll(".input-color");
var gradientDirection = document.querySelector("#gradient-direction");
var gradientDisplay = document.querySelector("h3");
var body = document.querySelector("body");
var randomColorButton = document.querySelector("button");


// LOCAL VARIABLES
var currDirection = "to right";

// INIT
setGradientColors();

//ADD EVENT LISTENERS
colorInputs.forEach(el => el.addEventListener('input', setGradientColors));
randomColorButton.addEventListener('click', setRandomColors);
gradientDirection.addEventListener('input', setDirection);

//FUNCTIONS
function setGradientColors() {
    gradientDisplay.textContent = 
        body.style.backgroundImage = 
            "linear-gradient(" +
            currDirection + ", " + 
            color1.value + ", " + 
            color2.value + ")";
}

function setRandomColors() {
    colorInputs.forEach(el => el.value = randomColor());
    setGradientColors();
}

function randomColor() {
    randColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    return randColor;
}

function setDirection() {
    currDirection = gradientDirection.value;
    setGradientColors();
}