const apiKey = '321615efa3cea8aab5cea36ea9107b6f';

function getMovies() {
    const apiUrl = 'https://api.themoviedb.org/3/discover/movie';
    const params = {
        api_key: apiKey,
        language: 'en-US',
        sort_by: 'popularity.desc',
    };

    $.get(apiUrl, params, function (data) {
        displayMovies(data.results);
    });
}


function displayMovies(movies) {
    const app = $('#app');

    movies.forEach(movie => {
        const movieCard = `
  <div class="movie-card">
    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    <h2>${movie.title}</h2>
    <p>${movie.overview}</p>
  </div>
`;
        app.append(movieCard);
    });
}

function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }


getMovies();