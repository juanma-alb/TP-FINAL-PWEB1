$(document).ready(function(){
    $('.peliculas-lista').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    
    const peliculas = {
        "pelicula-1": {
            titulo: "Contratiempo",
            anio: "2022",
            duracion: "120 minutos",
            genero: "Acción, Aventura",
            actores: [
                { nombre: "Mario Casas", link: "https://es.wikipedia.org/wiki/Mario_Casas" },
                { nombre: "Bárbara Lennie", link: "https://es.wikipedia.org/wiki/Barbara_Lennie" },
                { nombre: "Ana Wagener", link: "https://es.wikipedia.org/wiki/Ana_Wagener" }
            ],
            resumen: "Un joven empresario despierta en un hotel junto al cadáver de su amante. Para demostrar su inocencia, contrata a la mejor abogada criminalista del país. Ambos tienen una noche para preparar su defensa y evitar que sea declarado culpable.",
            trailer: "https://www.youtube.com/embed/Fo6-sfYjn1s",
            ver_pelicula: "https://www.youtube.com/watch?v=7QkLBBbSjHw"
        },
        "pelicula-2": {
            titulo: "The Little Things",
            anio: "2021",
            duracion: "110 minutos",
            genero: "Drama",
            actores: [
                { nombre: "Denzel Washington", link: "https://es.wikipedia.org/wiki/Denzel_Washington" },
                { nombre: "Rami Malek", link: "https://es.wikipedia.org/wiki/Rami_Malek" },
                { nombre: "Jared Leto", link: "https://es.wikipedia.org/wiki/Jared_Leto" }
            ],
            resumen: "Un sheriff y un detective de homicidios colaboran para dar caza a un astuto asesino en Los Ángeles. Mientras rastrean al culpable, el pasado de uno de ellos comienza a salir a la luz y puede poner en peligro la investigación.",
            trailer: "https://www.youtube.com/embed/1HZAnkxdYuA",
            ver_pelicula: "https://www.youtube.com/watch?v=SJ3qirTGAvI"
        
        },
        "pelicula-3": {
            titulo: "El Último Paciente",
            anio: "2022",
            duracion: "140 minutos",
            genero: "Thriller | Asesinos en serie. Crimen",
            actores: [
                { nombre: "Signe Egholm", link: "https://es.wikipedia.org/wiki/Signe_Egholm" }, 
                { nombre: "Anton Hjejle", link: "https://es.wikipedia.org/wiki/Anton_Hjejle" },
                { nombre: "Dan Zahle", link: "https://es.wikipedia.org/wiki/Dan_Zahle" }
            ],
            resumen: "Susanne, una experimentada terapeuta, recibe a su último paciente del día. Se trata, sin que ella lo supiera, de un asesino en serie que advierte a Susanne que la matará si no logra curarlo.",
            trailer: "https://www.youtube.com/embed/fX02H_g3Zso",
            ver_pelicula: "https://www.youtube.com/watch?v=ri2bBBlCDP8"
        },
        "pelicula-4": {
            titulo: "Círculo De Mentiras",
            anio: "2018",
            duracion: "155 minutos",
            genero: "Drama, Intriga",
            actores: [
                { nombre: "Guy Pearce", link: "https://es.wikipedia.org/wiki/Guy_Pearce" },
                { nombre: "Minnie Driver", link: "https://es.wikipedia.org/wiki/Minnie_Driver" },
                { nombre: "Pierce Brosnan", link: "https://es.wikipedia.org/wiki/Pierce_Brosnan" }
            ],
            resumen: "Evan Birch es un padre de familia y un profesor querido en la universidad, donde su clase de filosofía es muy popular. Cuando una joven estudiante desaparece, los coqueteos de Evan fuera del campus hacen que su mujer sospeche de él.",
            trailer: "https://www.youtube.com/embed/OjL50rXr-KM",
            ver_pelicula: "https://www.youtube.com/watch?v=6ZHyd364J64"
        },

        "pelicula-5": {
            titulo: "Shrek 2",
            anio: "2004",
            duracion: "93 minutos",
            genero: "Comedia, Animación, Aventura",
            actores: [
                { nombre: "Mike Myers (Shrek)", link: "https://es.wikipedia.org/wiki/Mike_Myers" },
                { nombre: "Cameron Diaz (Fiona)", link: "https://es.wikipedia.org/wiki/Cameron_Diaz" },
                { nombre: "Eddie Murphy (Burro)", link: "https://es.wikipedia.org/wiki/Eddie_Murphy" }
            ],
            resumen: "En esta ocasión, Shrek debe enfrentarse al mayor de los problemas que se podía imaginar: conocer a sus suegros.",
            trailer: "https://www.youtube.com/embed/oW-vf54cUes",
            ver_pelicula: "https://www.youtube.com/watch?v=T8PcBTvdxPs"
        }
    };

    
    function actualizarDetalle(peliculaId) {
        const pelicula = peliculas[peliculaId];

        $('#titulo-pelicula').html(`${pelicula.titulo} <span style="color: lightgray;">(${pelicula.anio})</span>`);
        $('#detalles-pelicula').html(`
            <h1 style="color: #e50914;" id="titulo-pelicula">${pelicula.titulo} <span style="color: lightgray;">(${pelicula.anio})</span></h1>
            <p><strong style="margin-top: 10px;">Duración</strong> ${pelicula.duracion}.</p>
            <p><strong>Género</strong> ${pelicula.genero}.</p>
            <p><strong>Actores</strong> ${pelicula.actores.map(actor => `<a href="${actor.link}" target="_blank">${actor.nombre}</a>`).join(', ')}</p>
            <p><strong style="margin-top: 10px;">Resumen:</strong> ${pelicula.resumen}</p>
            <button onclick="window.open('${pelicula.ver_pelicula}')">Ver Película</button>
        `);

        $('.imagen-pelicula iframe').attr('src', pelicula.trailer);
    }

    
    $('.pelicula').on('click', function() {
        const peliculaId = $(this).attr('id');
        actualizarDetalle(peliculaId);
    });
});
