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
addMovie( document.getElementById("btn-formulario").addEventListener("click",addMovie));

function addMovie() {
    let newMovie= {
        title: "Amor en Chipiona",
        coverImage: "http://www.turismodechipiona.com/wp-content/uploads/2018/05/faro-2.jpg",
        director: "Francisco Dominguez",
        year: 2022,
        synopsis: "Una chica pacense se enamora de su entrenador personal, su arhienemiga Celia le pondra muchos obstaculos, pero sus amigos Fran Er servillano y Jesus El gallegiño le ayudaran",
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
