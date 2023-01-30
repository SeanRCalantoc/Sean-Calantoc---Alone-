let titleCard = document.querySelector(".titlescreen")
let startButton = document.querySelector(".playbutton")
let screenOne = document.querySelector(".promptone")

/* play */
startButton.onclick = function() {
  screenOne.style.display = "block";
  titleCard.style.display = "none";
}

/* Exit aisle */
let exitAisle = document.querySelector(".exitAisle")
let buttonOne = document.querySelector(".optionone")

buttonOne.onclick = function() {
  exitAisle.style.display = "block";
  screenOne.style.display = "none";
}

/* Lights turn off */
let offLights = document.querySelector(".lightsOff")
let buttonLight = document.querySelector(".optiontwo")

buttonLight.onclick = function() {
  screenOne.style.display="none";
  offLights.style.display="block";
}

let restartButton = document.querySelector(".restart")
restartButton.onclick = function() {
  screenOne.style.display="block";
  offLights.style.display="none";

let scream = document.querySelector(".scream")
  scream.onclick = function () {
    offLights.style.display="block";
    exitAisle.style.display="none";
  }
  
}

let openDoor = document.querySelector(".openDoor")
let enterHall = document.querySelector(".enterHall")
 openDoor.onclick = function() {
   enterHall.style.display="block";
   exitAisle.style.display="none";
 }
let restart1 = document.querySelector(".restart1")
restart1.onclick = function (){
  screenOne.style.dispplay="block";
  acceptscreen.style.display="none";
  
}