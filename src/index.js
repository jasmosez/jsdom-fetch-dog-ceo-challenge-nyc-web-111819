console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = 'https://dog.ceo/api/breeds/list/all'


function challengeFour(event) {
  switch (event.target.value) {
    case 'all':
      filterBreeds('all')
      break;
    case 'a':
      filterBreeds('a')
      break;
    case 'b':
      filterBreeds('b')
      break;
    case 'c':
      filterBreeds('c')
      break;
    case 'd':
      filterBreeds('d')
      break;
  }
}

function filterBreeds(char) {
  console.log(char)
  const liList = [...ul.getElementsByTagName('li')]
  for (i in liList) {
    if (char === 'all') {
      liList[i].style.display = "block"
    } else {
      if (liList[i].dataset.id.slice(0, 1) !== char) {
        liList[i].style.display = "none"
      } else {
        liList[i].style.display = "block"
      }
    }
  } 
}

function challengeThree(event) {
  console.log("Click")
  console.log(event)
  if (!!event.target.dataset.id) {
    event.target.style.color = getRandomColor();
  }
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function challengeTwo(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      // ul = document.getElementById('dog-breeds')
      let array = Object.keys(json.message);
      
      array.forEach(function (element) {
        li = document.createElement('li')
        li.innerText = element
        li.dataset.id = element
        
        ul.appendChild(li)
      })
    });
}


function challengeOne(url) {
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
      let container = document.getElementById('dog-image-container')

      let array = json.message
      array.forEach(function (element) {
        img = document.createElement('img')
        img.src = element
        div = document.createElement('div')
        div.className = 'photo'
        div.appendChild(img)
        container.appendChild(div)
      })
    });
}




const ul = document.getElementById('dog-breeds')

document.addEventListener('DOMContentLoaded', function () {
  challengeOne(imgUrl);
  challengeTwo(breedUrl);
  ul.addEventListener('click', challengeThree)
  document.getElementById('breed-dropdown').addEventListener('change', challengeFour)

});

