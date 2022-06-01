function cambiarimagen(dire){
    let imagenes = document.getElementsByClassName("cimg");
    let border = document.getElementsByClassName("border");
    let imagen_active;
    let border_active;
    let i =0;

    while (i < imagenes.length) {
        let imagen_actual = imagenes[i];
        if (imagen_actual.classList.value.includes('active')) {
            imagen_active = imagen_actual;
        }
        let border_actual = border[i];
        if (border_actual.classList.value.includes('img-active')) {
            border_active = border_actual;
        }
        i++
    }

    let nueva_imagen_actual;   
    nueva_imagen_actual = document.getElementById("img"+(dire));
    imagen_active.classList.remove("active");
    imagen_active.classList.add("hide");
    nueva_imagen_actual.classList.remove("hide");
    nueva_imagen_actual.classList.add("active");

    let nuevo_border_actual;
    nuevo_border_actual = document.getElementById(dire);
    border_active.classList.remove("img-active");
    nuevo_border_actual.classList.add("img-active");

}

function cambiarplataforma(dire){
    let platform = document.getElementsByClassName("plataforma");
    let platform_active;
    let i =0;

    while (i < platform.length) {
        let platform_actual = platform[i];
        if (platform_actual.classList.value.includes('img-active')) {
            platform_active = platform_actual;
        }
        i++
    }

    let nueva_platform_actual;   
    nueva_platform_actual = document.getElementById("p"+(dire));
    platform_active.classList.remove("img-active");
    nueva_platform_actual.classList.add("img-active");
}