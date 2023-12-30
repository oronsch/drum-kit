"use strict";
let qAll = document.querySelectorAll(".drum").length;

for (let i = 0; i < qAll; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        playSound(this.innerHTML);
        animateByClick(this.innerHTML)
    })
}

document.addEventListener("keypress", function (event) {
    playSound(event.key);
    animateByClick(event.key)
});

function playSound(key) {
    
    switch (key) {
        case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;
      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;
      case "s":
        let tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;
      case "d":
        let tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
      case "j":
        let snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;
      case "k":
        let crash = new Audio(`sounds/crash.mp3`);
        crash.play();
        break;
      case "l":
        let kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      default:
        console.log(key);
    } 
}

function animateByClick(currentKey) {
    let activateButton = document.querySelector('.' + currentKey);
    activateButton.classList.add("pressed")
    setTimeout(function () {
        activateButton.classList.remove("pressed")
    },100)
}
