const movieTitle = document.getElementById('titleInput');
const movieProdYear = document.getElementById('yearInput');
const movieDuration = document.getElementById('durationInput');
const movieRating = document.getElementById('ratingInput');
const movieDescription = document.getElementById('descriptionInput');
const movieDirector = document.getElementById('directorInput');
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
		});
}

readMovie();

saveBtn.addEventListener('click', () => {
    // validacija
    if (!titleInput.value ||
        !yearInput.value ||
        !durationInput.value ||
        !ratingInput.value ||
        !descriptionInput.value ||
        !directorInput.value) {
        alert('Morate popuniti sva polja!');
        return;
    }

    const movie = {
        title: titleInput.value,
        year: parseInt(yearInput.value),
        duration: parseInt(durationInput.value),
        rating: parseInt(ratingInput.value),
        description: descriptionInput.value,
        director: directorInput.value,
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