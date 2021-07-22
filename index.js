const redLight = document.getElementById("redLight");
const orangeLight = document.getElementById("orangeLight");
const greenLight = document.getElementById("greenLight");
const switchButton = document.getElementById("switchBtn");

let counter = 3;

switchButton.addEventListener("click", function () {
    if (counter === 3) {
        greenLight.style.background = "white";
        redLight.style.background = "red";
    } else if (counter === 2) {
        redLight.style.background = "white";
        orangeLight.style.background = "orange";
    } else if (counter === 1) {
        orangeLight.style.background = "white";
        greenLight.style.background = "green";
        counter = 4;
    }
    counter -= 1;
});
