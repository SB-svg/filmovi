const movieImg = document.getElementById('image');
const movieTitle = document.getElementById('title');
const movieProdYear = document.getElementById('year');
const movieDuration = document.getElementById('duration');
const movieRating = document.getElementById('rating');
const movieDescription = document.getElementById('description');
const movieDirector = document.getElementById('director');
const confirmButton = document.getElementById('confirmButton');

const movieId = getQueryStringParameterByName('id');

function presentMovie() {
	fetch('http://localhost:3000' + '/films/' + movieId)
		.then(function (resp) {
			return resp.json();
		}).then(function (movie) {
			movieImg.src = movie.logo;
			movieTitle.innerText = movie.title;
			movieProdYear.innerText = movie.year;
			movieDuration.innerText = movie.duration + ' min';
			movieRating.innerText = movie.rating;
			movieDescription.innerText = movie.description;
			movieDirector.innerText = movie.director;
		});
}

presentMovie();

confirmButton.addEventListener('click', function () {

	fetch("http://localhost:3000/films/" + movieId, {
		method: "DELETE",
		body: JSON.stringify({
			id: movieId
		}),
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
	}).then(() => {
		location.href = 'index.html';
	})
})