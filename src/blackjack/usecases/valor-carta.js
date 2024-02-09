
/**
 * Obtener el valor de la carta
 * @param {String} carta 
 * @returns {Number} valor de la carta
 */
export const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length - 1); //* para obviar la ultima letra del string

    return (isNaN(valor)) ? //* devuelve true si no es un numero
        (valor === 'A') ? 11 : 10
        : valor * 1; //* * 1 es una forma de convertir el valor (String) a un número
}