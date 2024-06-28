
    $(document).ready(function(){
        $('.series-lista').slick({
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

        
        const series = {
            "serie-1": {
                titulo: "Supernatural",
                anio: "2005-2020",
                
                genero: "Drama, Fantasía, Terror",
                actores: [
                    { nombre: "Robert Singer", link: "https://es.wikipedia.org/wiki/Robert_Singer" },
                    { nombre: "Philip Sgriccia", link: "https://es.wikipedia.org/wiki/Philip_Sgriccia" },
                    { nombre: "John F. Showalter", link: "https://es.wikipedia.org/wiki/John_Showalter" }
                ],
                resumen: "Cuando el cielo y el infierno dejan caos luego de una serie de eventos apocalípticos recientemente ocurridos, monstruos, ángeles y demonios deambulan el territorio caótico. Sam escapa del infierno y convence a Dean de regresar a su antigua vida de cazador. Pero los hermanos se dan cuenta que ya no son los mismo y su relación cambia.",
                trailer: "https://www.youtube.com/embed/0L30y8ern3M",
                ver_serie: "https://www.youtube.com/watch?v=dPCO6WNvO78"
            },
            "serie-2": {
                titulo: "Vivir Sin Permiso",
                anio: "2018-2020",
                genero: "Crimen, Drama",
                actores: [
                    { nombre: "José Coronado", link: "https://es.wikipedia.org/wiki/José_Coronado" },
                    { nombre: "Alex González", link: "https://es.wikipedia.org/wiki/Alex_González" },
                    { nombre: "Claudia Traisac", link: "https://es.wikipedia.org/wiki/Claudia_Traisac" }
                ],
                resumen: "La vida del poderoso empresario gallego Nemo Bandeira cambiará para siempre cuando un diagnóstico de Alzheimer le ponga fecha de caducidad a su reinado en Oeste, el lugar que lo vio nacer.",
                trailer: "https://www.youtube.com/embed/4Apr_Ce4eag",
                ver_serie: "https://www.youtube.com/watch?v=HYERX3brzUg"
            
            },
            "serie-3": {
                titulo: "Los Soprano",
                anio: "1999-2007",
                genero: "Drama",                      
                actores: [
                    { nombre: "James Gandolfini", link: "https://es.wikipedia.org/wiki/James_Gandolfini" },
                    { nombre: "Edie Falco", link: "https://es.wikipedia.org/wiki/Edie_Falco" },
                    { nombre: "Lorraine Bracco", link: "https://es.wikipedia.org/wiki/Lorraine_Bracco" }
                ],
                resumen: "Tony Soprano intenta equilibrar los problemas de su familia disfuncional con su otra familia muy diferente - la mafia.",
                trailer: "https://www.youtube.com/embed/KMx4iFcozK0",
                ver_serie: "https://www.youtube.com/watch?v=wZFLB1EGkbE"
            
            },

            "serie-4": {
                titulo: "Better Call Saul",
                anio: "2015-2022",
                genero: "Crimen, Drama, Judicial",         
                actores: [
                    { nombre: "Bob Odenkirk", link: "https://es.wikipedia.org/wiki/Bob_Odenkirk" },
                    { nombre: "Jonathan Banks", link: "https://es.wikipedia.org/wiki/Jonathan_Banks" },
                    { nombre: "Rhea Seehorn", link: "https://es.wikipedia.org/wiki/Rhea_Seehorn" }
                ],
                resumen: "Seis años antes de conocer a Walter White, el cuestionable abogado Jimmy McGill asume el alias de Saul Goodman, mientras intenta labrarse un nombre propio en Albuquerque.",
                trailer: "https://www.youtube.com/embed/Ylv21uNzW4k",
                ver_serie: "https://www.youtube.com/watch?v=VuerBCIIEEI"
            
            },

            "serie-5": {
                titulo: "Silicon Valley",    
                anio: "2014-2019",
                genero: "Comedia",
                actores: [
                    { nombre: "Thomas Middleditch", link: "https://es.wikipedia.org/wiki/Thomas_Middleditch" },
                    { nombre: "Josh Brener", link: "https://es.wikipedia.org/wiki/Josh_Brener" },
                    { nombre: "Martin Starr", link: "https://es.wikipedia.org/wiki/Martin_Starr" }
                ],
                resumen: "Richard es un tímido programador que vive con sus tres únicos amigos y descubren un importante algoritmo que supondrá una batalla con intereses y falsas amistades. Además, una chica se cruza por primera vez en la vida de Richard.",
                trailer: "https://www.youtube.com/embed/dGs_0b2SeX0",
                ver_serie: "https://www.youtube.com/watch?v=7e48Atqc23c"
            
            }

        };


        
        
        function actualizarDetalle(serieId) {
            const serie = series[serieId];

            $('#titulo-serie').html(`${serie.titulo} <span style="color: lightgray;">(${serie.anio})</span>`);
            $('#detalles-serie').html(`
                <h1 style="color: #e50914;" id="titulo-serie">${serie.titulo} <span style="color: lightgray;">(${serie.anio})</span></h1>
                <p><strong>Género</strong> ${serie.genero}.</p>
                <p><strong>Actores</strong> ${serie.actores.map(actor => `<a href="${actor.link}" target="_blank">${actor.nombre}</a>`).join(', ')}</p>
                <p><strong style="margin-top: 10px;">Resumen:</strong> ${serie.resumen}</p>
                <button onclick="window.open('${serie.ver_serie}')">Ver Serie</button>
            `);

            $('.imagen-serie iframe').attr('src', serie.trailer);
        }

        
        $('.serie').on('click', function() {
            const serieId = $(this).attr('id');
            actualizarDetalle(serieId);
        });
    });
