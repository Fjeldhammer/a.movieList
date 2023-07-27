const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOGJiOWUzYTc3OTQxMmJlNjlkNzBlNzZjOGQ3ZjgxNCIsInN1YiI6IjY0YzE2YTQ1ZGY4NmE4MDEyNTgyODkzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MO5hOqxWBxw_oWz9eMDX58JLcsBwbV-eZLk6dnDqPS8'

async function getMovies() {
    try {

        let response = await fetch('https://api.themoviedb.org/3/movie/popular', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        let data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}

async function displayMovies() {
    const movieListDiv = document.getElementById('movie-list');
    const moviePosterTemplate = document.getElementById('movie-card-template');

    let data = await getMovies();

    let movies = data.results; // movies is an array of objects

    movies.forEach(movie => {   
        let movieCard = moviePosterTemplate.content.cloneNode(true);

        let titleElement = movieCard.querySelector('.card-body > h5');
        titleElement.textContent = movie.title;

        let movieParagraphElement = movieCard.querySelector('.card-text');
        movieParagraphElement.textContent = movie.overview;

        let movieImageElement = movieCard.querySelector('.card img');
        movieImageElement.setAttribute('src', `https://image.tmdb.org/t/p/w500${movie.poster_path}`);

        let infoButton = movieCard.querySelector('button.btn');
        infoButton.setAttribute('data-movieId', movie.id);

        movieListDiv.appendChild(movieCard);
    });
    
}

// function showMovieDetails(btn) {

//     let movieId = btn.getAttribute('data-movieId');

//     let modalParagraph = document.getElementById('movie-modal-paragraph');
//     modalParagraph.textContent = movieId;

// }

async function getMovie() {
    try {

        let response = await fetch('https://api.themoviedb.org/3/movie/{movie_id}', {
            headers: {
                'Authorization': `Bearer ${API_KEY}`
            }
        });

        let data = await response.json();
        return data;

    } catch (error) {
        console.error(error);
    }
}

async function showMovieDetails(btn) {

    let movieId = btn.getAttribute('data-movieId');
    
    let modalParagraph = document.getElementById('movie-modal-paragraph');
    modalParagraph.textContent = movieId;

    const movieModal = document.getElementById('movie-modal');

    let data = await getMovie();

    let movDetails = data.results; // movDetails is an array of objects

    movDetails.forEach(detail => {



        

    });

}
























// ***** lines 39-50 = lines 27-35 ***** */
    // for (let i = 0; i < movies.length; i++ ) {

    //     let movie = movies[i];

    //     let paragraphTag = document.createElement('p');
    //     //<p></p>

    //     paragraphTag.innerText = movie.title;
    //     // paragraphTag = <p>Barbie</p>

    //     movieListDiv.appendChild(paragraphTag);
    // }


//***** lines 54-64 = lines 39-50 ***** */
// function (movie) {
//     const movieListDiv = document.getElementById('movie-list');

//     let paragraphTag = document.createElement('p');
//     // <p></p>

//     paragraphTag.innerText = movie.title;
//     // paragraphTag = <p>Barbie</p>

//     movieListDiv.appendChild(paragraphTag);
// }