import key from "/key.js";
const apiKey = key.key;
const btn = document.querySelector(".searchbtn");
const inputValue = document.querySelector(".searchbar");
const startLog = document.querySelector("#startLog");
const h = document.getElementById("header");

async function fetchData() {
  const inputValue = document.querySelector(".searchbar").value;
  const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${inputValue}`; // Use HTTPS

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);

    if (data.Response === "False") {
      console.error(data.Error);
      return;
    }

    data.Search.forEach((movie) => {
      console.log(movie);
      const contentDiv = document.querySelector(".showContent");

      const movieContainer = document.createElement("DIV");
      const titleP = document.createElement("P");
      const newImg = document.createElement("IMG");
      const yearP = document.createElement("P");

      newImg.setAttribute("src", movie.Poster);
      titleP.innerText = movie.Title;
      yearP.innerText = movie.Year;
      movieContainer.classList.add("movieContainer");
      contentDiv.classList.add("contentDiv");

      movieContainer.appendChild(newImg);
      movieContainer.appendChild(titleP);
      movieContainer.appendChild(yearP);
      contentDiv.appendChild(movieContainer);
    });
  } catch (error) {
    console.error("Fetch error: ", error);
  }
}

btn.addEventListener("click", fetchData);
inputValue.addEventListener("keydown", function (e) {
  const contentDiv = document.querySelector(".showContent");
  if (e.key === "Enter") {
    contentDiv.innerHTML = "";
    fetchData();
    setTimeout(clearInput, 500);
  }
});

function clearInput() {
  inputValue.value = "";
}
startLog.addEventListener("click", () => {
  window.location = "login.html";
});

const renderMovies = async () => {
  const databaseMovie = "http://localhost:3000/Movies"; // Assuming this is your local dev server
  try {
    const Moviedata = await fetch(databaseMovie);
    if (!Moviedata.ok) {
      throw new Error(`HTTP error! status: ${Moviedata.status}`);
    }
    const Movies = await Moviedata.json();
    console.log(Movies);
    let template = ` `;

    Movies.forEach((crack) => {
      template += `
      <div class="cracky">
      <h4>${crack.Title}</h4>
      <span>${crack.IMDbRating}</span>
      <p>${crack.Plot.slice(
        0,
        100
      )}<br><a style="color:darkgrey; text-decoration: none;font-size: larger;" href="details.html?id=${
        crack.id
      }">read more...</a></p>
      </div>
      `;
    });

    const contentDiv = document.querySelector(".showContent");
    contentDiv.innerHTML = template;
  } catch (error) {
    console.error("Fetch error: ", error);
  }
};

window.addEventListener("DOMContentLoaded", () => renderMovies());
