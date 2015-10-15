$(function() {  
    var header = $("header");

    // obtenemos el height + padding de la sección 1
    var altoSeccion1 = $("#about_us").outerHeight();

    // obtenemos el height + padding de la sección 2
    // y le sumamos el de la sección 1
    var altoSeccion2 = $("#join_skandha").outerHeight() + altoSeccion1;

    var altoSeccion3 = $("#join_skandha").outerHeight() + altoSeccion;

    var altoSeccion4 = $("#join_skandha").outerHeight() + altoSeccion1;

    // cada vez que se produzca scroll en la ventana
    $(window).scroll(function(event) {

        // scrollTop la posición del elemento
        height = $(event.target).scrollTop();

        // dependiendo el lugar de la pantalla
        // modificamos la clase del header
        // par cambiar su color de fondo
        if (height > 10 && height < altoSeccion1) {
            header.addClass("detector").removeClass("detector");
        } else if (height > altoSeccion1 && height < altoSeccion2) {
            header.addClass("detector").removeClass("detector");
        } else if (height > altoSeccion2) {
            header.addClass("detector").removeClass("detector");
        } else {
            header.removeClass("detector");
        }
    });