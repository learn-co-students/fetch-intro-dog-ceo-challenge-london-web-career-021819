const imgAPI = "https://dog.ceo/api/breeds/image/random/4"

/// GET IMAGES
function fetchImages(){
  return fetch(imgAPI)
  .then(response => response.json())
  // .then(json => console.log(json))
}

/// CREATE IMAGE
function addImages (imageSRC){
  let imagecontainer = document.getElementById('dog-image-container')
  let imageEl = document.createElement('img')
      imageEl.src = imageSRC
      imageEl.style = "height: 150px"
      imagecontainer.appendChild(imageEl)
}

/// POST IMAGES
function postImages(){
  fetchImages()
  .then(objects => objects.message.forEach (object => {
    addImages(object) } ) )
}

////////////////////////////////////////////////////////////////////////////////
const breedAPI = 'https://dog.ceo/api/breeds/list/all'

/// GET BREEDS LIST
function fetchBreeds(){
  return fetch(breedAPI)
  .then(response => response.json() )
}

/// CREATE BREEDS LIST
function addList (breedSRC) {
  let breedList = document.getElementById('dog-breeds')
  let breedEl = document.createElement('li')
      breedEl.innerText = breedSRC
      breedList.appendChild(breedEl)
}

/// POST BREEDS LIST
function postBreeds(){
  fetchBreeds()
  .then(breeds => Object.keys(breeds.message).forEach(breed => {
    addList(breed)
  } ) )
}

///////////////////////////////////////////////////////////////////////////////
const dogbreeds = document.getElementById('dog-breeds')
const dropdown = document.getElementById('breed-dropdown')
const breedArray = []

/// PUSH INTO BREED ARRAY
function fetchBreedsList(){
  fetch(breedAPI)
  .then(response => response.json()
  .then(breeds => Object.keys(breeds.message).forEach(dog => {
    breedArray.push(dog) } ) ) )
}

/// FILTER DOGS FOR DROPDOWN
function filterDogs(letter) {
  return breedArray.filter(dog => dog[0] === letter)
}

/// DROPDOWN MENU
function findByDropdownMenu() {
    dropdown.addEventListener('change', function(event){
        dogbreeds.innerHTML = ""
        let variable = filterDogs(dropdown.value)
        .map(dog =>`<li>${dog}</li>`).join('')
        dogbreeds.innerHTML += variable } )
}

//////////////////////////////////////////////////////////////////////////////

/// CHANGE TEXT COLOR
function changeTextColor() {
  document.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
	     event.target.style.color = 'blue'; } } )
}

/// ACTION
document.addEventListener('DOMContentLoaded', function(){
    fetchImages()
    addImages()
    postImages()
    fetchBreeds()
    addList()
    postBreeds()
    fetchBreedsList()
    findByDropdownMenu()
    changeTextColor()
})
