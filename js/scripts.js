// Escuchar evento scroll
$(window).on('scroll', () => {
    //rotacion de logo
    const scrollRealizado = $(window).scrollTop();
    const giraRuedita = `${scrollRealizado * 0.1}deg`;
    $('#logo').css('transform', `rotate(${giraRuedita})`);

    //aparicion de imagenes

    $('.reveal').each(function() {
        const altura = $(this).offset().top; //offset me dice en que posicion absoluta esta dentro de la pagina
        const diferencia = window.innerHeight * 0.7;
        if (scrollRealizado >= altura - diferencia) {
            $(this).addClass('visible');
        }
    });
});

// Trazado de SVG
function trazar() {
    new Vivus(
        'heroSvg',
        {
            duration: 250,
            type: 'oneByOne',
            pathTimingFunction: Vivus.EASE_OUT,
        },
        () => {
            $('#heroSvg').addClass('terminado');
        },
    );
}

// Tipeo de palabras
function tipear() {
    new TypeIt('#escritura', {
        strings: [ 'ELEGANTES', 'MODERNAS', 'RESPONSIVE' ],
        speed: 100,
        deleteSpeed: 50,
        loop: true,
        breakLines: false,
    });
}

// Carrusel 2 (sección intro)
function carrusel2() {
    $('#carruselClientes2').owlCarousel({
        items: 3,
        margin: 30,
        autoplay: true,
        autoplayTimeout: 2000,
        loop: true,
        autoplayHoverPause: true,
    });
}

// quitar spinner
function quitarSpinner() {
    $('.spinner').fadeOut(1000, () => {
        $('h1').animate({ 'letter-spacing': '20px' }, 800);
    });
}

// Cuando la página esté lista
window.onload = () => {
    trazar();
    tipear();
    carrusel2();
    quitarSpinner();
};

// Controles video - sección intro
// Play
$('#playVid, #iconoPlayVid').on('click', () => {
    $('#videoPresentacion').get(0).play();
    $('#iconoPlayVid').css('opacity', 0);
});

// Pause
$('#pauseVid').on('click', () => {
    $('#videoPresentacion').get(0).pause();
    $('#iconoPlayVid').css('opacity', 1);
});

// Stop
$('#stopVid').on('click', () => {
    $('#videoPresentacion').get(0).load();
    $('#iconoPlayVid').css('opacity', 1);
});

// Smooth Scroll menu navegación
$('.nav-link, button-link').on('click', function() {
    const destino = $(this).attr('href');
    $('html').animate({ scrollTop: $(destino).offset().top }, 1000);
});
