const tableBody=document.getElementById('tableBody');

function loadIndex(){
    fetch('http://localhost:3000/films')
    .then(response => response.json())
        .then(films => {
            films.forEach(film => {
            tableBody.innerHTML += `
                    <tr>
                        <td>${film.title}</td>
                        <td>${film.year}</td>
                        <td>${film.rating}</td>
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