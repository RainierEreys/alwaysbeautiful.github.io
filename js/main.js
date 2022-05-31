$(function() {

    /*-------------------------------------------------------
    Despliegue de menu en w < 580
    --------------------------------------------------------*/
    $('nav li').on('click', function(e) {
        var w = $(window).width();
        if (w < 580) {
            menu.slideToggle();
        }
    });

    $('.open-menu').height($(window).height());


    /*--------------------------------------------------------
    Despliegue de menu
    ---------------------------------------------------------*/
    menu = $('.lista');

    $("#logo").click(function(e) {
        e.preventDefault();
        menu.slideToggle();

    });


    /*----------------------------------------------------------
    Letras automáticas(Banner)
    -----------------------------------------------------------*/
    const app = document.getElementById("typewriter");

    const typewriter = new Typewriter(app, {
        loop: true,
        delay: 60
    });

    typewriter.typeString('Tu tienda de tecnología por excelencia').pauseFor(200).start();


    /*------------------------------------------------------------
    Carrusel automático
    --------------------------------------------------------------*/
    const carrusel = document.querySelector(".carrusel-items");

    let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
    let intervalo = null;
    let step = 1;

    const start = () => {
        intervalo = setInterval(function() {
            carrusel.scrollLeft = carrusel.scrollLeft + step;

            if (carrusel.scrollLeft === maxScrollLeft) {
                step = step * -1;

            } else if (carrusel.scrollLeft === 0) {
                step = step * 1;
            }
        }, 10);

    }

    const stop = () => {
        clearInterval(intervalo);
    }

    carrusel.addEventListener('mouseover', () => {
        stop();
    });

    carrusel.addEventListener('mouseout', () => {
        start();
    });

    start();


    /*------------------------------------------------------
    Letras automáticas(Mapa)
    -------------------------------------------------------*/
    const app2 = document.getElementById("typewriter2");

    const typewriter2 = new Typewriter(app2, {
        loop: true,
        delay: 60
    });

    typewriter2.typeString('La capital de las buenas oportunidades').pauseFor(200).start();


    /*--------------------------------------------------------
    Carrusel#2(Lo más vendido)
    ---------------------------------------------------------*/
    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                }
            }
        ]
    });


    /*-------------------------------------------------
    Boton de ir hacia arriba
    ---------------------------------------------------*/

    jQuery('document').ready(function($) {

        var subir = $("#boton-arriba");

        subir.click(function(e) {
            e.preventDefault();

            $('html, body').animate({ scrollTop: 0 }, 500)
        })

        subir.hide();

        $(window).scroll(function() {

            if ($(this).scrollTop() > 500) {
                subir.fadeIn();
            } else {
                subir.fadeOut();
            }
        })
    });
});