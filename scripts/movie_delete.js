const movieImg = document.getElementById('image');
const movieTitle = document.getElementById('title');
const movieProdYear = document.getElementById('year');
const movieDuration = document.getElementById('duration');
const movieRating = document.getElementById('rating');
const movieDescription = document.getElementById('description');
const movieDirector = document.getElementById('director');
const confirmButton = document.getElementById('confirmButton');
const question = document.getElementById('question');

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
	question.innerHTML = "Brišem, molim za strpljenje";
	confirmButton.innerHTML = '<span class="spinner-border spinner-border-sm"></span>'
	setTimeout(() => (movieImg.parentElement.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => (movieTitle.parentElement.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => (movieProdYear.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => (movieDuration.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => (movieRating.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => (movieDescription.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => (movieDirector.classList.add("deleteAnimation")), Math.random() * 1000)
	setTimeout(() => {

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
	}, 2000)
})