
    let todosLosContenidos = [
        {
            "Titulo": "Prisioners",
            "Formato": "Pelicula",
            "Genero": "Thriller",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/Prisoners-peli.jpg"
        },
        {
            "Titulo": "Oppemheimer",
            "Formato": "Pelicula",
            "Genero": "Suspenso",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/openheimer_16x9_spa.jpg"
        },
        {
            "Titulo": "Wonka",
            "Formato": "Pelicula",
            "Genero": "Infantil",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/wonka_16x9.jpg"
        },
        {
            "Titulo": "El régimen",
            "Formato": "Serie",
            "Genero": "Drama",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/the_regime_16x9_spa.jpg"
        },
        {
            "Titulo": "Breaking Bad",
            "Formato": "Serie",
            "Genero": "Drama",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/Breaking-Bad-serie.jpg"
        },
        {
            "Titulo": "X-men Apocalypse",
            "Formato": "Pelicula",
            "Genero": "Fantasia",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/x-men-apocalypse-banner-poster-wallpaper-preview.jpg"
        },
        {
            "Titulo": "The Lorax",
            "Formato": "Pelicula",
            "Genero": "Infantil",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/lorax.jpg"
        },
        {
            "Titulo": "John Wick Chapter 4",
            "Formato": "Pelicula",
            "Genero": "Accion",
            "Imagen": "../tp_web_final_2/assets/images/movies-principal/p17843098_v_h8_as.jpg"
        },
    ];
    
    let seccionContenido = document.querySelector("#contenido");
    
    
    
    
    
    function aplicarFiltro() {
        seccionContenido.innerHTML = "";
    
        let formato = document.querySelector("#formato").value;
        let genero = document.querySelector("#genero").value;
    
        let contenidoFiltrado;
    
        if (formato !== "Todos") {
            contenidoFiltrado = todosLosContenidos.filter(contenido => contenido.Formato === formato);
        } else {
            contenidoFiltrado = todosLosContenidos;
        }
    
        if (genero !== "Todos") {
            contenidoFiltrado = contenidoFiltrado.filter(contenido => contenido.Genero === genero);
        }
    
        contenidoFiltrado.forEach((itemContenidoFiltrado) => {
            let enlace;
            if (itemContenidoFiltrado.Formato === "Serie") {
                enlace = "./pages/DetalleSeries.html";
            } else {
                enlace = "./pages/DetallePeliculas.html";
            }
    
            seccionContenido.innerHTML += `
                <div class="pelicula-principal">
                    <a href="${enlace}">
                        <img src="${itemContenidoFiltrado.Imagen}" alt="${itemContenidoFiltrado.Titulo}" class="img">
                    </a>
                </div>
            `;
        });
    }
    
    function quitarFiltro() {
        document.getElementById("formato").value = "Todos";
        document.getElementById("genero").value = "Todos";
        document.querySelector("#contenido").innerHTML = "";
    
        todosLosContenidos.forEach((itemContenido) => {
            document.querySelector("#contenido").innerHTML += `
                <div class="pelicula-principal">
                    <a href="./pages/DetallePeliculas.html">
                        <img src="${itemContenido.Imagen}" alt="${itemContenido.Titulo}" class="img">
                    </a>
                </div>
            `;
        });
    }
    
    function buscar() {
        seccionContenido.innerHTML = "";
    
        let valorBusqueda = document.querySelector("#search-bar").value.toLowerCase().trim();
    
        if (valorBusqueda.length !== 0) {
            let contenidoBuscado = todosLosContenidos.filter(contenido => contenido.Titulo.toLowerCase().includes(valorBusqueda));
    
            contenidoBuscado.forEach((itemContenidoBuscado) => {
                seccionContenido.innerHTML += `
                    <div class="pelicula-principal">
                        <a href="./pages/DetallePeliculas.html">
                            <img src="${itemContenidoBuscado.Imagen}" alt="${itemContenidoBuscado.Titulo}" class="img">
                        </a>
                    </div>
                `;
            });
        } else {
            todosLosContenidos.forEach((itemContenido) => {
                seccionContenido.innerHTML += `
                    <div class="pelicula-principal">
                        <a href="./pages/DetallePeliculas.html">
                            <img src="${itemContenido.Imagen}" alt="${itemContenido.Titulo}" class="img">
                        </a>
                    </div>
                `;
            });
        }
    }
    
    function limpiarBusqueda() {
        document.querySelector("#search-bar").value = "";
    }
    
    
    function mostrarFiltros() {
        document.getElementById("filtro").style.display = "inline-block";
        document.querySelector("#search-bar").value = "";
    }
    
    function aplicarFiltroPeliculas() {
        document.getElementById("formato").value = "Pelicula";
        document.getElementById("genero").value = "Todos";
        aplicarFiltro();
    }
    
    function aplicarFiltroSeries() {
        document.getElementById("formato").value = "Serie";
        document.getElementById("genero").value = "Todos";
        aplicarFiltro();
    }

document.addEventListener('DOMContentLoaded', function() {
    const cerrarSesionBtn = document.getElementById('cerrar-sesion');

    cerrarSesionBtn.addEventListener('click', function(event) {
        event.preventDefault();

        localStorage.clear();

        
        window.location.href = './index.html'; 
    });
});
