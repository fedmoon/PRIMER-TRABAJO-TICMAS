
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}

function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}

let ejem1 = document.getElementById("ejem1");
crearBarra(ejem1); 
let ejem2 = document.getElementById("ejem2");
crearBarra(ejem2); 
let ejem3 = document.getElementById("ejem3");
crearBarra(ejem3); 
let ejem4 = document.getElementById("ejem4");
crearBarra(ejem4);
let ejem5 = document.getElementById("ejem5");
crearBarra(ejem5); 
let ejem6 = document.getElementById("ejem6");
crearBarra(ejem6);

let contadores = [-1,-1,-1,-1,-1,-1];

let entro = false;

function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalEjem1 = setInterval(function(){
            pintarBarra(ejem1, 16, 0, intervalEjem1);
        },100);
        const intervalEjem2 = setInterval(function(){
            pintarBarra(ejem2, 11, 1, intervalEjem2);
        },100);
        const intervalEjem3 = setInterval(function(){
            pintarBarra(ejem3, 14, 2, intervalEjem3);
        },100);
        const intervalEjem4 = setInterval(function(){
            pintarBarra(ejem4, 12, 3, intervalEjem4);
        },100);
        const intervalEjem5 = setInterval(function(){
            pintarBarra(ejem5, 16, 4, intervalEjem5);
        },100);
        const intervalEjem6 = setInterval(function(){
            pintarBarra(ejem6, 11, 5, intervalEjem6);
        },100);
    }
}

function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}

window.onscroll = function(){
    efectoHabilidades();
}