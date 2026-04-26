const movies = [
  {
    title: "Inception",
    year: "2010",
    poster: "https://via.placeholder.com/300x400?text=Inception"
  },
  {
    title: "Interstellar",
    year: "2014",
    poster: "https://via.placeholder.com/300x400?text=Interstellar"
  },
  {
    title: "Avatar",
    year: "2009",
    poster: "https://via.placeholder.com/300x400?text=Avatar"
  },
  {
    title: "Titanic",
    year: "1997",
    poster: "https://via.placeholder.com/300x400?text=Titanic"
  },
  {
    title: "The Dark Knight",
    year: "2008",
    poster: "https://via.placeholder.com/300x400?text=Dark+Knight"
  }
];

const container = document.getElementById("movieContainer");
const searchInput = document.getElementById("search");

function displayMovies(data) {
  container.innerHTML = "";

  data.forEach(movie => {
    const div = document.createElement("div");
    div.classList.add("movie");

    div.innerHTML = `
      <img src="${movie.poster}" />
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
    `;

    container.appendChild(div);
  });
}

// Initial load
displayMovies(movies);

// Search functionality
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filtered = movies.filter(movie =>
    movie.title.toLowerCase().includes(value)
  );

  displayMovies(filtered);
});
