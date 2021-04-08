document.addEventListener("DOMContentLoaded", () => {
    fetchDogsImage()
    fetchBreeds()
    // console.log ("Hello World")

})

function fetchDogsImage () {
    fetch ('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    //a key with images inside called [message]
    .then(dogs => {
        dogs.message.forEach(image => {
          renderDogs(image) 
        })
    })

    const renderDogs = (image) => {
    const imageContainer = document.querySelector("#dog-image-container")

    const dogImage = document.createElement('img')
    dogImage.src = image

    imageContainer.append(dogImage)
    }}



function fetchBreeds (){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(breedData => {
        const breeds = Object.keys(breedData.message)
        //object keys >> definition 
        breeds.forEach(string => {
        renderBreeds(string)
        })
    })
}


 const renderBreeds = (string) => {
    const stringContainer = document.querySelector("#dog-breeds")

    const dogString = document.createElement('li')
    dogString.innerText = string

    stringContainer.append(dogString)

    dogString.addEventListener('click', event => {
    event.target.style.color = 'blue'
    })
}

    // function selectDogs () {
    //     //filter breeds by letter {filter}
    //     //create an event where I can select a letter {change}
    //     //display only the breeds that start with that specific letter

    // fetchBreeds(breeds.filter(breed => breed.startsWith.(letter)
    // )


    //     //find where

