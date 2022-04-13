getMovies();

function getMovies() {
    fetch("http://localhost:8090/movies")
        .then(response => response.json())
        .then(data => {
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
        let coverImage =   '<img src='+movie.coverImage+' class="card-img-top" alt="">';

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
//addMovie();

function addMovie() {
    let newMovie= {
        title: "Jurassic Pig",
        coverImage: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
        director: "Steven Spielberg",
        year: 1993,
        synopsis: "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA.",
        renter: null,
        booked: false,
        score: 0
    }
    fetch('http://localhost:8090/movies', {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data))
}
