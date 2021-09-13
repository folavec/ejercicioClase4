const carta = document.getElementById('carta');
const precioDolares = document.getElementById('precioDolares');
const precioConvertido = document.getElementById('precioConvertido');
const transformarCLP = document.getElementById('transformarCLP');
const transformarARG = document.getElementById('transformarARG');
const tipoMoneda = document.getElementById('tipoMoneda');
const imagenCarta = document.getElementById('imagenCarta');
var precio = 0;

const asignarPrecio = c => {
    switch (c) {
        case 'pikachu':
            precio = 3.45;
            imagenCarta.src = 'https://cdn2.bulbagarden.net/upload/7/78/PikachuBaseSet58.png';
            break;
        case 'venusaur':
            precio = 99.48;
            imagenCarta.src = 'https://cdn2.bulbagarden.net/upload/a/a4/VenusaurBaseSet15.jpg';
            break;
        case 'blastoise':
            precio = 143.15;
            imagenCarta.src = 'https://cdn2.bulbagarden.net/upload/a/a5/BlastoiseBaseSet2.jpg';
            break;
        case 'charizard':
            precio = 353.11;
            imagenCarta.src = 'https://cdn2.bulbagarden.net/upload/4/4e/CharizardBaseSet4.jpg';
            break;
        default:
            break;
    }
};

const aCLP = x => x * 781.96;
const aARG = x => x * 98.21;

carta.addEventListener('change', (event) => {
    var nombreCarta = event.target.value;
    asignarPrecio(nombreCarta);
    precioDolares.value = precio;
});

transformarCLP.addEventListener('click', (transformar) => {
    var precioCLP = aCLP(precioDolares.value);
    precioConvertido.value = precioCLP.toFixed(2);
    tipoMoneda.textContent = 'pesos Chilenos';
});

transformarARG.addEventListener('click', (transformar) => {
    var precioARG = aARG(precioDolares.value);
    precioConvertido.value = precioARG.toFixed(2);
    tipoMoneda.textContent = 'pesos Argentinos';
});