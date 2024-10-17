const input = document.getElementById('input');

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
        alert("Es palíndromo");
    }
    
    else {
        alert("No es palíndromo");
    }
}