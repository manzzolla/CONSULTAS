


const precoEtanol = 5.79;
const precoGasolina = 7.50;
const kmPorLitros = 10;
const distanciaEmKm = 100;
const tipoDeCombustivel = 'Gasolina';

const litrosConsumidos = distanciaEmKm / kmPorLitros;

if (tipoDeCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));

} else { 
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));

}



