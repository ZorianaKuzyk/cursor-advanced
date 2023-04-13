const page = `
    <header>
        <h1 class="main_title">Homework 12</h1>
        <nav>
            <div class="buttons">
                <button id="films" class="btn">Films</button>
                <button id="people" class="btn">Persons</button>
                <button id="planets" class="btn">Planets</button>
            </div>
            <div class="search">
                <input type="text" placeholder="Enter the name of the movie" id="myInput">
                <button type="submit" class="btn" id="submit-btn">Get info</button>  
            </div>
        </nav>
    </header>
    <main>
        <div class="cards" id="cards"></div>
    </main>
`;
document.body.innerHTML = page;

const cards = document.querySelector("#cards");

async function getCatalogue(catalogue) {
  const res = await fetch(`https://swapi.dev/api/${catalogue}/`);
  const data = await res.json();
  showCatalogue(data, catalogue);
}

let persons = [];
let i = 0;

function showCatalogue(data, catalogue) {
  let info = "";
  if (catalogue === "films") {
    data.results.forEach((elem) => {
      persons[i] = elem.characters;
      info =
        info +
        `
            <div class="card card_film">
                <div class="card_image">
                    <img src="./img/${elem.title
                      .toLowerCase()
                      .replaceAll(" ", "")}.jpg" alt="${elem.title}">
                </div>
                <div class="card_text">
                    <h2 class="title">${elem.title}</h2>
                    <h5>Episode No: ${elem.episode_id}</h5>
                    <h5>Release date: ${elem.release_date}</h5>
                </div>
                <div class="card_wrap" id="film${i}"></div>
            </div>
            `;
      i++;
    });
  } else if (catalogue === "people") {
    data.results.forEach((elem) => {
      info =
        info +
        `
            <div class="card">
                <div class="card_image">
                    <img src="./img/${elem.name
                      .toLowerCase()
                      .replaceAll(" ", "")}.webp" alt="${elem.name}">
                </div>
                <div class="card_text">
                    <h2 class="title">${elem.name}</h2>
                    <h5>Birth year: ${elem.birth_year}</h5>
                    <h5>Gender: ${elem.gender}</h5>
                </div>
            </div>
            `;
    });
  } else if (catalogue === "planets") {
    data.results.forEach((elem) => {
      info =
        info +
        `
            <div class="card">
                <div class="card_image">
                <img src="./img/${elem.name
                  .toLowerCase()
                  .replaceAll(" ", "")}.webp" alt="${elem.name}">
                </div>
                <div class="card_text">
                    <h2 class="title">${elem.name}</h2>
                    <h5>Diameter: ${elem.diameter} km</h5>
                    <h5>Population: ${elem.population}</h5>
                </div>
            </div>
            `;
    });
  }
  cards.innerHTML = info;
}

document.querySelector(".buttons").addEventListener("click", (event) => {
  getCatalogue(event.target.id);
});

let information;

async function getCharacter(url) {
  const res = await fetch(url);
  const data = await res.json();
  showCharacter(data);
}

function showCharacter(data) {
  information =
    information +
    `
        <div class="card">
            <div class="card_image">
                <img src="./img/${data.name
                  .toLowerCase()
                  .replaceAll(" ", "")}.webp" alt="${data.name}">
            </div>
            <div class="card_text">
                <h2 class="title">${data.name}</h2>
                <h5>Birth year: ${data.birth_year}</h5>
                <h5>Gender: ${data.gender}</h5>
            </div>
        </div>
        `;
  cards.innerHTML = information;
}

document.querySelector(".cards").addEventListener("click", (event) => {
  information = "";
  for (i = 0; i < persons.length; i++) {
    if (Number(event.target.id.replaceAll("film", "")) === i) {
      for (j = 0; j < persons[i].length; j++) {
        getCharacter(persons[i][j]);
      }
    }
  }
});

async function getFilm(number) {
  const res = await fetch(`https://swapi.dev/api/films/${number}/`);
  const data = await res.json();
  showFilm(data);
}

function showFilm(data) {
  information =
    information +
    `
        <div class="card">
            <div class="card_image">
                <img src="./img/${data.title
                  .toLowerCase()
                  .replaceAll(" ", "")}.jpg" alt="${data.title}">
            </div>
            <div class="card_text">
                <h2 class="title">${data.title}</h2>
                <h5>Episode No: ${data.episode_id}</h5>
                <h5>Release date: ${data.release_date}</h5>
                <h5>Director: ${data.director}</h5>
            </div>
            <div class="card_wrap" id="film${i}"></div>
        </div>
        `;
  cards.innerHTML = information;
}

document.querySelector("#submit-btn").addEventListener("click", (e) => {
  let inputVal = document.getElementById("myInput").value;
  while (i < 1) {
    if (
      Boolean(Number(inputVal)) == true &&
      Number(inputVal) >= 1 &&
      Number(inputVal) <= 6
    ) {
      information = "";
      cards.innerHTML = information;
      getFilm(Number(inputVal));
      inputVal = "";
      document.querySelector("#submit-btn").reset();
      i++;
    } else {
      inputVal = prompt(
        "Введені дані невірні. \n Введіть число - номер фільму (від 1 до 6)"
      );
    }
  }
});
