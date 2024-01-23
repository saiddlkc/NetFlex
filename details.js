const id = new URLSearchParams(window.location.search).get("id");

const renderDetails = async () => {
  const res = await fetch("http://localhost:3000/Movies/" + id);
  const movie = await res.json();
  console.log(movie);
  const container = document.getElementById("container");
  const imgcontainer = document.getElementById("img");
  const template = `
    <h1>${movie.Title}</h1>
    <p>Actors
    : ${movie.Actors}</p>
    <p>Awards: ${movie.Awards}</p>
    <p>Director
    :${movie.Director}</p>
    <p>Released
    : 
    ${movie.Title}</p>
    <p>Released:${movie.Released}</p>
    <p>Runtime
    :${movie.Runtime}</p>
    <p>Story: ${movie.Plot}</p>
    <p>BoxOffice: ${movie.BoxOffice}</p>
    <p style="text-decoration: underline;">Critics and Ratings</p>
    <p>${movie.Ratings[0].Source} Rating: ${movie.Ratings[0].Value}</p>
    <p>${movie.Ratings[1].Source} Rating: ${movie.Ratings[1].Value}</p>
    <p>${movie.Ratings[2].Source} Rating: ${movie.Ratings[2].Value}</p>
    `;

  const imgtemp = `
  <img src="${movie.Poster}" alt="">
    
    `;
  imgcontainer.innerHTML = imgtemp;
  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderDetails());
