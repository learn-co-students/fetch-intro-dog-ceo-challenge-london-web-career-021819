const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const dogImgEl = document.getElementById("dog-image-container");
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const dogBreedEl = document.getElementById("dog-breeds");

function getDogImg() {
  fetch(imgUrl)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      json.message.forEach(picUrl => {
        const pic = document.createElement("IMG");
        pic.src = picUrl;
        pic.height = 200;
        dogImgEl.appendChild(pic);
      });
    });
}
function getDogBreeds() {
  return fetch(breedUrl)
    .then(function(response) {
      return response.json();
    })
}

function appendDogs(getDogBreeds) {
  getDogBreeds.forEach(dog => {
    const breedsEl = document.createElement("li");
    breedsEl.className = "breeds";
    breedsEl.innerHTML = `${dog}`;
    dogBreedEl.appendChild(breedsEl);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getDogImg();
  getDogBreeds()
  .then( json => {
      const dog_breeds = Object.keys(json.message);
      appendDogs(dog_breeds);
    });
});
