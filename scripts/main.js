const input = document.getElementById('input');
let h2 = document.getElementById('h2');

function resultChecker() {
    const textoLimpio = input.value.toLowerCase().replace(/\s+/g, '');
    const texto = textoLimpio.length;

    let esPalindromo = true;

    for (let i = 0; i < texto; i++) {
        if (textoLimpio[i] !== textoLimpio[texto - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    if (esPalindromo) {
        h2.innerHTML = `${input.value} es palíndromo`;
    }
    
    else {
        h2.innerHTML = `${input.value} no es palíndromo`;
    }
}