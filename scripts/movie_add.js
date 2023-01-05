const titleInput = document.getElementById('titleInput');
const yearInput = document.getElementById('yearInput');
const durationInput = document.getElementById('durationInput');
const ratingInput = document.getElementById('ratingInput');
const descriptionInput = document.getElementById('descriptionInput');
const directorInput = document.getElementById('directorInput');
const logoInput = document.getElementById('logoInput');
const saveBtn = document.getElementById('saveBtn');

const id = getQueryStringParameterByName('id');


saveBtn.addEventListener('click', () => {
    // validacija
    if (!titleInput.value ||
        !yearInput.value ||
        !durationInput.value ||
        !ratingInput.value ||
        !descriptionInput.value ||
        !directorInput.value || isValidURL(logoInput.value) !== true)
    {        
        alert('Morate popuniti sva polja!');
        return;
    }



    const movie = {
        title: titleInput.value,
        year: parseInt(yearInput.value),
        duration: parseInt(durationInput.value),
        rating: parseFloat(ratingInput.value),
        description: descriptionInput.value,
        director: directorInput.value,
        logo: logoInput.value,
    };

    // POST se koristi za dodavanje
    // PUT se koristi za izmenu

    let httpMethod = 'POST';
    let url = baseUrl + '/films';
    if (id) {
        httpMethod = 'PUT';
        url += '/films' + id;
    }

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

