var tema = 'claro';

function ratonEntra() {
    const miDado = document.getElementById('dado');
    miDado.style.fill = 'red';
}

function ratonSale() {
    const miDado = document.getElementById('dado');
    miDado.style.fill = 'white';
}

function cambioColor(miCarita) {
    let rojo = numeroAleatorio(0, 255);
    let verde = numeroAleatorio(0, 255);
    let azul = numeroAleatorio(0, 255);
    let miColor = 'rgb(' + rojo + ', ' + verde + ', ' + azul + ')';
    miCarita.style.fill = miColor;
}

function numeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cambioDeTema() {
    const miCabecera = document.getElementsByTagName('header')[0];
    const miPieDePagina = document.getElementsByTagName('footer')[0];
    const miTitulo = document.getElementsByTagName('h1')[0];

    console.log("El valor de la variable tema es: " + tema);

    if (tema == 'claro') {
        miCabecera.style.backgroundColor = '#08243e';
        miCabecera.style.color = 'white';
        miPieDePagina.style.backgroundColor = '#08243e';
        miPieDePagina.style.color = 'white';
        miTitulo.style.color = 'white';

        tema = 'oscuro';
    }

    if (tema == 'oscuro') {
        miCabecera.style.backgroundColor = 'white';
        miCabecera.style.color = 'black';
        miPieDePagina.style.backgroundColor = 'white';
        miPieDePagina.style.color = 'black';
        miTitulo.style.color = 'black';

        tema = 'claro';
    }

}