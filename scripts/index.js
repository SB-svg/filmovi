const tableBody=document.getElementById('tableBody');

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
    });

    fetch();