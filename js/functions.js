function circulo() {//creamos una variable para para capturar la case "figura" 
    var figura = document.getElementById("figura");
    figura.classList="";
    //la clase "circulo" es llamada o traida por medio de wl siguiente codigo
    figura.classList.toggle("circulo")
}

function rombo() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("rombo")
}

function triangulo() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("triangulo")
}

function rectanguloH() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("rectanguloH")
}

function rectanguloV() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("rectanguloV")
}

function arriba() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("arriba")
}



function abajo() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("abajo")
}


function izquierda() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("izquierda")
}

function derecha() {
    var figura = document.getElementById("figura")
    figura.classList="";
    figura.classList.toggle("derecha");
}


function diagonal() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("diagonal");
}

function imagen() {
    var figura = document.getElementById("figura");
    figura.classList.toggle("imagen");
}

function circulo4() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("circulo4");
}

function pacman() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("pacman");
}

function paralelogramo() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("paralelogramo");
}

function trapecio() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("trapecio");
}

function ribbon() {
    var figura = document.getElementById("figura");
    figura.classList="";
    figura.classList.toggle("ribbon");
}



//capturar datos 

function capturarDatos() {
    //Capturamos los datos de los campos de formulario
    var nombre = document.getElementById("nombres").value;
    var edad = document.getElementById("edad").value;
    var fecha = document.getElementById("fecha").value;
    var genero = document.getElementById("genero").value;
    var email = document.getElementById("email").value;
    var descripcion = document.getElementById("descripcion").value;
    var color = document.getElementById("color").value;

    // Capturamos los elementos de los cuales les asignamos los valores

    var img = document.getElementById("img");
    var mNombre = document.getElementById("mNombre");
    var mEdad = document.getElementById("mEdad");
    var mFechaNacimiento = document.getElementById("mFechaNacimiento");
    var mGenero = document.getElementById("mGenero");
    var mEmail = document.getElementById("mEmail");
    var mDescripcion = document.getElementById("mDescripcion");

    var contAvatar = document.getElementById("contAvatar");
    mNombre.textContent = nombre;
    mEdad.textContent = edad;
    mFechaNacimiento.textContent = fecha;
    mGenero.textContent = genero;
    mEmail.textContent = email;
    mDescripcion.textContent = descripcion;


    if (genero == "masculino"){
        img.src = "img/man.png"
    } else if (genero == "femenino"){
        img.src = "img/woman.png"
    } else{
        img.src = "img/group.png"
    }

    switch (color) {
        case "amarillo":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("amarillo")
            break;
        case "azul":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("azul")
            break;
        case "rojo":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("rojo")
            break;
        case "rosado":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("rosado")
            break;
        case "verde":
            var contenedor = document.getElementById("contAvatar")
            contenedor.classList.add("verde")
    }
}


