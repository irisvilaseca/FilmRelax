
getMovies();

function getMovies() {
    fetch("http://localhost:8080/movies")
    .then(response => response.json())
    .then(data =>  {
        console.log(data);
        printMovies(data);

    });
}

function printMovies(data) {
    // Capturar el elemento HTML div con el id miLista
    let moviesListUlElement = document.getElementById("main");

    // Crear un elemnto HTML ul en JavaScript
    let ulElement = document.createElement("div");

    // Añadimos el elemento creado ul al elemento div (miLista)
    moviesListUlElement.appendChild(ulElement);

    data.forEach(movie => {
        // crear el HTML necesario para imprimir una peli
        let listaHtml = '<h1 class="ejemplo" style="color: red;">'+movie.title+'</h1>';
        let directoHtml = '<h2 class="ejemplo" style="color: blue;">'+movie.director+'</h2>';
        let scoreHtml = '<h2 class="ejemplo" style="color: black;">'+movie.score+'</h2>';
        let synopsisHtml = '<h2 class="ejemplo" style="color: black;">'+movie.synopsis+'</h2>';
        let coverImage =   '<img src='+movie.coverImage+' class="img-fluid" alt="">'

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

