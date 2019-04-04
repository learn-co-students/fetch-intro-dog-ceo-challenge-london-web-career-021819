console.log('%c HI', 'color: firebrick')
const dogContainer = document.getElementById("dog-image-container");
const breeds = document.getElementById("dog-breeds")
const dropDown = document.getElementById("breed-dropdown");

window.addEventListener("DOMContentLoaded", function()
{
    getDogPics()
    getDogBreeds()
});

document.addEventListener('click', function(event)
{
    colourWheel = [
      "#4A91AF",
      "#9E0000",
      "#1F870F",
      "#FDCC2B",
      "#2BF6FD",
      "#B02BB0",
      "#591F3A",
      "#84A25B",
      "#FEED01"
    ];
    if(event.target.className === "dogBreed")
    {
        event.target.style.color = colourWheel[Math.floor(Math.random() * colourWheel.length)];
    }
})

dropDown.addEventListener('change', function()
{
    const allBreedsHTML = document.getElementsByClassName("dogBreed")
    const allBreeds = [...allBreedsHTML];
    const selected = dropDown.options[dropDown.selectedIndex].value
    allBreeds.forEach(function(breed)
    {
        if (breed.innerText[0] == selected) {
            breed.style.display = "block";
        }else
        {
            breed.style.display = "none";
        }
    })

})

function getDogPics() {
    fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(json)
    {
        json.message.forEach(function(url)
        {
            let dogPic = document.createElement('img')
            dogPic.src = url
            dogPic.height = 200
            dogContainer.appendChild(dogPic);
        })
    })

}

function getDogBreeds()
{
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(function(response)
    {
        return response.json()
    })
    .then(function(json){
        // debugger
        for(const key in json.message)
        {
            let listEl = document.createElement('li')
            listEl.innerText = key
            listEl.className = "dogBreed"
            breeds.appendChild(listEl)
        }
    })
}

