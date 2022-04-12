
getMovies();

function getMovies() {
    fetch("http://localhost:8090/movies")
    .then(response => response.json())
    .then(data =>  {
        console.log(data);
        printMovies(data);

    });
}

function printMovies(data) {

    data.forEach(movie => {
      // Capturar el elemento HTML div con el id miLista
    let moviesListUlElement = document.getElementById("main");

    // Crear un elemnto HTML ul en JavaScript
    let ulElement = document.createElement("div");
    ulElement.setAttribute('class', 'card');

    // Añadimos el elemento creado ul al elemento div (miLista)
    moviesListUlElement.appendChild(ulElement);
        // crear el HTML necesario para imprimir una peli
        let listaHtml = '<h1 class="card-title">'+movie.title+'</h1>';
        let directoHtml = '<h5 class="ejemplo" style="color: blue;">'+movie.director+'</h5>';
        let scoreHtml = '<h5 class="ejemplo" style="color: black;">'+movie.score+'</h5>';
        let synopsisHtml = '<p class="card-text" style="color: black;">'+movie.synopsis+'</p>';
        let coverImage =   '<img src='+movie.coverImage+' class="card-img-top" alt="">'

        //li.appendChild(document.createTextNode(movie.title));
        //moviesListUlElement.appendChild(listaHtml);
        
        // Añadimos el elemento creado (li) al elemento ul
        ulElement.innerHTML += coverImage;
        ulElement.innerHTML += listaHtml;
        ulElement.innerHTML += directoHtml;
        ulElement.innerHTML += scoreHtml;
        ulElement.innerHTML += synopsisHtml;
    });
}

