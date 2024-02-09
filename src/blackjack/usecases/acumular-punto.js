import { valorCarta } from "./valor-carta";


//* Turno: 0 = primer jugador y el último sería la computadora
export const acumularPunto = (carta, turno, puntosJugadores, puntosHTML) => {
    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}