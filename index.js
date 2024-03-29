import { Dogs } from "./dogclass.js"
import dogData from "./data.js"

const dogIndexesArray = dogData.map((dog, index) => index)

function getCurrentDogIndex(){
    const currentDogIndex = dogIndexesArray.shift()
    return currentDogIndex
}

function getCurrentDogObject(){
    return dogData[getCurrentDogIndex()]
}

let currentDog = new Dogs(getCurrentDogObject())

function getNewDog(){
    if (dogIndexesArray.length){
        currentDog = new Dogs(getCurrentDogObject())
    }
}

function like(){
    currentDog.hasBeenLiked = true
    renderAsset(currentDog.hasBeenLiked)
    setTimeout(() => {
        currentDog.hasBeenSwiped = true
        getNewDog()
        render()            
    }, 750);
}

function disLike(){
    renderAsset(currentDog.hasBeenLiked)
    setTimeout(() => {
        currentDog.hasBeenSwiped = true
        getNewDog()
        render()            
    }, 750);
}

function render(){
        document.getElementById("pic-container-el").innerHTML = currentDog.getDogHtml()
        document.getElementById("like-container-el").
        addEventListener("click", like)
        document.getElementById("dis-like-container-el").
        addEventListener("click", disLike)
}

function renderAsset(state){
    if (state === true){
        document.getElementById("pic-container-el").
        innerHTML += currentDog.getLikeAssetHtml()
    }
    else {
        document.getElementById("pic-container-el").
        innerHTML += currentDog.getDislikeAssetHtml() 
    }   
}
render()
