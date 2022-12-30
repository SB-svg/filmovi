const tableBody=document.getElementById('tableBody');

function loadIndex(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
        .then(films => {
            films.forEach(film => {
            tableBody.innerHTML += `
                    <tr>
                        <td><a href="${film.logo}" target="_blanc"><img src="${film.logo}" style="height:50px"></a></td>
                        <td>${film.title}</td>
                        <td>${film.year}</td>
                        <td>${film.rating}</td>
                        <td>
                            <a href="movie_view.html?id=${film.id}"><button type="button" class="btn btn-primary">Info</button>
                            </a>
                        </td>
                    </tr>     
                `;
            });
        })
    .catch(function(){
        tableBody.innerText = "Error";
    });
}

loadIndex();

//export {tableBody, loadIndex};