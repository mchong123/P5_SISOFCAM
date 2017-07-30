$(document).ready(main);

var contador1 = 1;
var contador = 0;
function main() {
    reducirLogoScroll();
    barraInformativa();
    agregandoNombreImage();
    Iterador();
    atrasAdelante();
    clickImagen();
    //colocar imagenNav
    insertarImagenNav();
    //modales
    mostrarModalUbicanos();

}
;
function barraInformativa() {

    $('#main-page-a-menu').click(function () {

        if (contador1 == 1) {
            $('#main-page-ul-datosSisofcam').animate({
                left: '0'
            })
            contador1 = 0;
        } else {
            $('#main-page-ul-datosSisofcam').animate({
                left: '-100%'
            });
            contador1 = 1;
        }
        ;
    });
    $('.icon-menu').mouseover(function () {

        $('.icon-menu').css({
            transition: 'all 1s ease',
            transform: 'rotate(180deg)'
        });

    });

    $('.icon-menu').mouseleave(function () {
        $('.icon-menu').css({
            transform: 'rotate(0deg)'
        });
    });

    $('.main-page-boton-arriba').click(function () {

        $('body ,html').animate({
            scrollTop: '0px'
        }, 300);
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {
            $('.main-page-boton-arriba').slideDown(300);
        } else {
            $('.main-page-boton-arriba').slideUp(300);
        }


    });

}
;
function agregandoNombreImage() {


    armandoImagen();

    $('#contenedor-imagenes-chicas img').css({
        opacity: '0.5'
    });
    $('#contenedor-descripcion-imagenes p').animate({
        left: '-100%'

    }, {duration: 500});

    if (contador == 0) {
        $('#contenedor-descripcion-imagenes p').text('Venta e instalacion de biometricos');
        $('#imagen-0').css({
            opacity: '1'
        });

        $('#contenedor-descripcion-imagenes p').animate({
            left: '0%'

        }, {duration: 200});


        $('#contenedor-imagen img').animate({
            width: '300px',
            height: '291px',
            opacity: '1'
        }, {duration: 500});

    }
    if (contador == 1) {
        $('#contenedor-descripcion-imagenes p').text('Venta e instalacion de PTZ');
        $('#imagen-1').css({
            opacity: '1'
        });
        $('#contenedor-descripcion-imagenes p').animate({
            left: '0%'

        }, {duration: 200});

        $('#contenedor-imagen img').animate({
            width: '178px',
            height: '200px',
            opacity: '1'


        }, {duration: 500});
    }

    if (contador == 2) {
        $('#contenedor-descripcion-imagenes p').text('Venta e instalacion de Camaras de seguridad');
        $('#imagen-2').css({
            opacity: '1'
        });
        $('#contenedor-descripcion-imagenes p').animate({
            left: '0%'

        }, {duration: 200});

        $('#contenedor-imagen img').animate({
            width: '686px',
            height: '350px',
            opacity: '1'


        }, {duration: 500});
    }

    contador++;

    if (contador >= 3) {
        clearInterval(intervalo);
        contador = 0;
        Iterador();
    }
}
;
function Iterador() {

    intervalo = setInterval(agregandoNombreImage, 3000);

}
;
function atrasAdelante() {

    $('#listUl li:first-child span').click(function () {
        clearInterval(intervalo);

        if (contador > 1) {
            contador = contador - 2;
        } else {
            if (contador == 0) {
                contador = $('#listUl img').length - 2;
            } else {
                contador = 2;
            }
        }
        ;

        setTimeout(agregandoNombreImage, 50);

        if (contador >= 3) {

        } else {
            Iterador();
        }

    });

    $('#listUl li:last-child span').click(function () {
        clearInterval(intervalo);
        setTimeout(agregandoNombreImage, 50);
        Iterador();


    });

}
;
function clickImagen() {

    $('#listUl img').each(function (index, elemento) {

        $(elemento).click(function () {

            contador = index;
            clearInterval(intervalo);
            setTimeout(agregandoNombreImage, 50);
            Iterador();
        });
    });
}
;
function armandoImagen() {
    //src="#{resource['images/image0.jpg']}"

    var newNameImage = "/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/image" + contador + ".jpg";

    $('#contenedor-imagen>img').attr('src', newNameImage);
}
;
function insertarImagenNav() {

// inicio primer li
    $('#mp-cam-analogicas').mouseover(function () {
        $('#main-page-div2-imagenNav').css({
            backgroundImage: "url('/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/navImages/domo720px.jpg')"
        });
        $('#main-page-div2-descripcionImage h3').text('CÁMARAS ANALÓGICAS');
        $('#main-page-div2-descripcionImage p').text('Buena elección!! ... Cámaras realmente económicas, ideal para ambientes no tan amplios, como una sala, un salon comercial, un garaje, almacen, y muchos otros lugares mas.');
    });
    $('#mp-cam-IP').mouseover(function () {
        $('#main-page-div2-imagenNav').css({
            backgroundImage: "url('/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/navImages/12_IPdomo.jpg')"
        });
        $('#main-page-div2-descripcionImage h3').text('CÁMARAS IP');
        $('#main-page-div2-descripcionImage p').text('Muy buena elección!! ... Estos tipos de cámaras presentan una mayor calidad de imagen en comparación con las analógicas, presentan un muy buen Zoom de imagen que permite una eficiente detección de rostros, placas, a la hora de visualizar las grabaciones en busca de alguna acción delictiva. ');
    });

    $('#mp-cam-varifocal').mouseover(function () {
        $('#main-page-div2-imagenNav').css({
            backgroundImage: "url('/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/navImages/CAMARA_VERIFOCAL.jpg')"
        });
        $('#main-page-div2-descripcionImage h3').text('CÁMARAS VARIFOCALES');
        $('#main-page-div2-descripcionImage p').text('Interesante opción... Ideal para proteger el exterior de su domicilio, negocio, empresa. Son cámaras que pueden graduarse manualmente para aumentar o disminuir su ángulo de visualización.');
    });

    $('#mp-cam-ptz1').mouseover(function () {
        $('#main-page-div2-imagenNav').css({
            backgroundImage: "url('/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/navImages/PTZ_20X.jpg')"
        });
        $('#main-page-div2-descripcionImage h3').text('CÁMARAS PTZ');
        $('#main-page-div2-descripcionImage p').text('Realmente las mejores en el rubro ... Con este tipo de cámaras simplemente lo veras todo, presentan movimiento en 360°, zoom de 20X a mas, alta resolución, lo tienen todo. "Solo falta que caminen"');
    });

    $('#mp-cam-espia1').mouseover(function () {
        $('#main-page-div2-imagenNav').css({
            backgroundImage: "url('/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/navImages/2.RelogEspia8GB.jpg')"
        });
        $('#main-page-div2-descripcionImage h3').text('CÁMARAS ESPIAS');
        $('#main-page-div2-descripcionImage p').text('Quieres grabar alguna conversacion?, o vigilar a la niñera? nadie lo sospechara, con los diferentes modelos de camaras espías. ');
    });

    $('#mp-cam-falsas').mouseover(function () {
        $('#main-page-div2-imagenNav').css({
            backgroundImage: "url('/Web_Sisofcam/jsf/main-web/main-page.xhtml/faces/javax.faces.resource/images/navImages/domo720px.jpg')"
        });
        $('#main-page-div2-descripcionImage h3').text('CÁMARAS FALSAS');
        $('#main-page-div2-descripcionImage p').text('Una solución psicológica y realmente económica, fisicamente es idéntica a una cámara real, mas no lo es. Esta es una solución práctica si solo se desea simular que se esta grabando. ');
    });

    //falta complementos y ver todas
    //fin primer li e inicio del segundo li


}
;
function mostrarModalUbicanos() {

    $('#main-page-li-ubicanos').click(function () {
        $('#main-page-div-modal').addClass('mostrarModal');
        $('#cerrar + label').css({
            display: 'inline-block'
        });
        $('#main-page-iframe-map').css({
            display: 'block'
        });
        $('body').toggleClass('ocultarScroll');
    });
    $('#btn-cerrar').click(function () {
        $('#main-page-div-modal').removeClass('mostrarModal');
        $('#cerrar + label').css({
            display: 'none'
        });
        $('#main-page-iframe-map').css({
            display: 'none'
        });
        $('body').removeClass('ocultarScroll');
    });
}
;
function reducirLogoScroll(){
    
    var flag = false;
    var scroll;
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
       if(scroll > 30){
           if(!flag){
               $('#main-page-header-div1 img').css({
                   width: '150px',
                   heigth:'48px',
                   position: 'fixed',
                   top: '-8px',
                   marginTop:'0px'
                    
               });
               $('#main-page-datosSisofcam').css({
                   background : '#000'
               });
               $('#main-page-datosSisofcam').css({
                   opacity: '0.5'
               });
               
               flag = true;
           }
       } else{
           if(flag){
               $('#main-page-header-div1 img').css({
                   width: '311px',
                   heigth:'100px',
                   marginTop:'40px',
                   position:'static'
               });
               $('#main-page-datosSisofcam').css({
                   background : '#024959'
               });
               $('#main-page-datosSisofcam').css({
                   opacity: '1'
               });
               flag = false;
           }
       }
    });
};

