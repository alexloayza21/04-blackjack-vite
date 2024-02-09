import { acumularPunto } from "./acumular-punto";
import { crearCarta } from "./crear-carta"; 
import { pedirCarta } from "./pedir-carta";

//* Turno de la computadora
export const turnoComputadora = (puntosMinimos, puntosHTML, divCartasJugadores, deck, puntosJugadores) => {
    let puntosComputadora = 0;
    do {

        const carta = pedirCarta(deck);
        puntosComputadora = acumularPunto(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}

const determinarGanador = (puntosJugadores) => {

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {

        if (puntosComputadora === puntosMinimos) {
            alert('Nadie Gana');
        } else if (puntosMinimos > 21) {    
            alert('Computadora Gana');
        } else if (puntosComputadora > 21) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana');
        }

    }, 100); //* tiempo out
}