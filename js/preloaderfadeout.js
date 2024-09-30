$(document).ready(inicio);

function inicio() {
    cerrarPreloader();
}


function  cerrarPreloader() {
    setTimeout(function () {
        $("#conpre").fadeOut();
    }, 3900);
}

