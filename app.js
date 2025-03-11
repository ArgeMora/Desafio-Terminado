let amigo = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo');
    let nombreAmigo = nombre.value;

    if (nombreAmigo === '') {
        alert('Ingresa un nombre');
        return;
    }

    amigo.push(nombreAmigo);
    nombre.value = '';
    console.log(amigo);
    nombre.focus();
    mostrarAmigos();
}

function mostrarAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (let i = 0; i < amigo.length; i++) {
        let item = document.createElement('li');
        item.textContent = amigo[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigo.length === 0){
        alert('No hay amigos para sortear');
        return;
    } 

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = amigoSorteado;

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    }

    