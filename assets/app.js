// Si fetch es para hacer lo mismo que postman, mandar requests a la API
// Por defecto si no le pasamos el método, hace request con el método GET

// Hay que pasarle la ruta : http://localhost:8070/movies/
// Hay que tener el servidor de Tomcat en el intelliJ encendido

fetch("http://localhost:8070/movies/") // Manda el request
.then(respuesta =>{ // La API retorna una respuesta, parse response as JSON
  // console.log(respuesta.json());
 return respuesta.json() 
})
.then(data => {
  console.log(data)
  // document.querySelector('img').src = data.coverImage
  // document.querySelector('h1').innerHTML = data.director
})
.catch(err => {
    console.log(`error ${err}`)
})
