const titleInput = document.getElementById('titleInput');
const yearInput = document.getElementById('yearInput');
const durationInput = document.getElementById('durationInput');
const ratingInput = document.getElementById('ratingInput');
const descriptionInput = document.getElementById('descriptionInput');
const directorInput = document.getElementById('directorInput');
const saveBtn = document.getElementById('saveBtn');

const id = getQueryStringParameterByName('id');

if (id) {
    // izmena -> "dovucemo" podatke o filmu
    fetch(baseUrl + '/films/' + id)
        .then(response => response.json())
        .then(movie => {
            titleInput.value = movie.title;
            yearInput.value = movie.year;
            durationInput.value = movie.duration;
            ratingInput.value = movie.rating;
            descriptionInput.value = movie.description;
            directorInput.value = movie.director;
        });
}

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

    // POST se koristi za dodavanje
    // PUT se koristi za izmenu

    let httpMethod = 'POST';
    let url = baseUrl + '/films';

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