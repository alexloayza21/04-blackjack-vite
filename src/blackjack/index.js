import _, { min } from 'underscore'; //* tomar todo el paquete underscore y renombrarlo como _
// import { crearDeck as crearNuevoDeck} from './usecases/crear-deck';
// import cualquierNombreParaCrearUnNuevoDeck from './usecases/crear-deck'; //* importación por defecto
import { crearDeck, pedirCarta, turnoComputadora, acumularPunto, crearCarta } from './usecases/index'; //* importacion mas ordenada

//* Patrón módulo
const miModulo = (() => { 
    'use strict' 


    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
        especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0;
        // puntosComputadora = 0;

    let puntosJugadores = [];

    // Referencia del HTML
    const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugadores = document.querySelectorAll('.divCartas'),
        puntosHTML = document.querySelectorAll('small');


    //* esta función inicializa el juego
    const inicializarJuego = (numJugadores = 2) => { //* por defecto el num de jugadores sera 2
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for (let i = 0; i < numJugadores; i++) {
            puntosJugadores.push(0);
        }

        puntosHTML.forEach(elem => elem.innerText = 0); //* resetear puntos
        divCartasJugadores.forEach(elem => elem.innerHTML = '');

        btnPedir.disabled = false;
        btnDetener.disabled = false;

        pedirCarta(deck);
    }


    //* EVENTOS
    
    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        crearCarta(carta, 0, divCartasJugadores);
        puntosJugador = acumularPunto(carta, 0, puntosJugadores, puntosHTML);

        if (puntosJugador > 21) {
            console.warn('Lo siento mucho, perdiste');
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML, divCartasJugadores, deck, puntosJugadores);
        } else if (puntosJugador === 21) {
            console.warn('21, genial!');
            btnDetener.disabled = true;
            btnPedir.disabled = true;
            turnoComputadora(puntosJugador, puntosHTML,divCartasJugadores, deck, puntosJugadores);
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador, puntosHTML, divCartasJugadores, deck, puntosJugadores);
    });

    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    return {
        nuevoJuego: inicializarJuego
    }; //* esto es lo único que va a ser público

})();
