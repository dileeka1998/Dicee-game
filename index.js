randomNumber1 = Math.floor(Math.random() *6)+1
randomNumber2 = Math.floor(Math.random() *6)+1

let diceImage = "dice" + randomNumber1+".png"
let imageSrcOne = "./images/" +diceImage
let imageSrcTwo = "./images/dice" + randomNumber2+".png"

    let imageOne= document.querySelectorAll('img')[0]
    imageOne.src = imageSrcOne
    let imageTwo= document.querySelectorAll('img')[1].setAttribute("src", imageSrcTwo)

    if(randomNumber1>randomNumber2){
        document.querySelector('h1').innerText = "Player One Won!"
    }else if(randomNumber1<randomNumber2) {
        document.querySelector('h1').innerText = "Player Two Won!"
    }else {
        document.querySelector('h1').innerText = "Tie!"
    }