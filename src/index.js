const dogEl = document.getElementById("dog-image-container");
const breedEl = document.getElementById("dog-breeds");
const dropDownEl = document.getElementById("breed-dropdown");

function getDogImages() {
  fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(resp => resp.json())
    .then(json =>
      json.message.forEach(pic => {
        const img = document.createElement("img");
        img.src = pic;
        dogEl.appendChild(img);
      })
    );
}

function getDogBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then(resp => resp.json())
    .then(function(json) {
      for (const key in json.message) {
        const li = document.createElement("li");
        li.className = "dog-breed";
        li.innerText = key;
        breedEl.appendChild(li);
      }
    });
}

// change breed li colour on click
breedEl.addEventListener("click", event => {
  event.target.style.color = "red";
});

// implement dropdown menu
dropDownEl.addEventListener("change", event => {
  // get an array of all the breeds
  const breeds = document.getElementsByClassName("dog-breed");
  const breedsArr = [...breeds];
  //store clicked on letter
  const chosen = event.target.value;
  // iterate breeds arr
  // check whether the breed first letter matches the clicked on letter
  breedsArr.forEach(dog => {
    if (chosen == dog.innerText[0]) {
      // display the breed
      dog.style.display = "block";
    } else {
      // display nothing
      dog.style.display = "none";
    }
  });
});

function init() {
  getDogImages();
  getDogBreeds();
}

init();
