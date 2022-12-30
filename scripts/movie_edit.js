const movieTitle = document.getElementById('titleInput');
const movieProdYear = document.getElementById('yearInput');
const movieDuration = document.getElementById('durationInput');
const movieRating = document.getElementById('ratingInput');
const movieDescription = document.getElementById('descriptionInput');
const movieDirector = document.getElementById('directorInput');
const movieLogo = document.getElementById('logoInput');
const imagePath = document.getElementById('imagePath');
const saveBtn = document.getElementById('saveBtn');

const movieId = getQueryStringParameterByName('id');

function readMovie() {
    fetch('http://localhost:3000' + '/films/' + movieId)
        .then(function (resp) {
            return resp.json();
        }).then(function (movie) {
            movieTitle.setAttribute('value', movie.title)
            movieProdYear.setAttribute('value', movie.year)
            movieDuration.setAttribute('value', movie.duration)
            movieRating.setAttribute('value', movie.rating)
            movieDescription.setAttribute('value', movie.description)
            movieDirector.setAttribute('value', movie.director)
            movieLogo.setAttribute('value', movie.logo)
            imagePath.setAttribute('src', movie.logo)
        });
}

readMovie();

movieLogo.addEventListener('change', () => {
    imagePath.setAttribute('src', movieLogo.value)
})

saveBtn.addEventListener('click', () => {
    // validacija
    if (!movieTitle.value ||
        !movieProdYear.value ||
        !movieDuration.value ||
        !movieRating.value ||
        !movieDescription.value ||
        !movieDirector.value
    ) {
        alert('Morate popuniti sva polja osim polja za sliku!');
        return;
    }

    const movie = {
        title: movieTitle.value,
        year: parseInt(movieProdYear.value),
        duration: parseInt(movieDuration.value),
        rating: parseFloat(movieRating.value),
        description: movieDescription.value,
        director: movieDirector.value,
        logo: movieLogo.value,
    };

    let httpMethod = 'PUT';
    let url = baseUrl + '/films/' + movieId;

    fetch(url, {
        method: httpMethod,
        body: JSON.stringify(movie),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }).then(() => {
        location.href = 'index.html';
    })
});