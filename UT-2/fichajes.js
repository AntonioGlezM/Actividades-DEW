class ClubFutbol {
    // Campo privado: solo se puede usar dentro de la clase
    #presupuesto;

    constructor(nombre, presupuestoInicial) {
        this.nombre = nombre;
        // Validación inicial: si es negativo, se queda en 0
        this.#presupuesto = presupuestoInicial < 0 ? 0 : presupuestoInicial;
    }

    get presupuesto() {
        return this.#presupuesto;
    }

    set presupuesto(valor) {
        if (valor < 0) {
            console.error("El presupuesto no puede ser negativo. Cambio denegado.");
            return;
        }
        this.#presupuesto = valor;
    }

    consultarEstado() {
        console.log(`Club: ${this.nombre} | Presupuesto: ${this.#presupuesto.toLocaleString("es-ES")} €`);
    }

    ingresarDinero(cantidad) {
        if (cantidad > 0) {
            this.#presupuesto += cantidad;
        }
    }

    // Devuelve true si se pudo retirar y false si no hay fondos
    retirarDinero(cantidad) {
        if (cantidad > 0 && cantidad <= this.#presupuesto) {
            this.#presupuesto -= cantidad;
            return true;
        }
        return false;
    }

    // Método estático: se llama sobre la clase, no sobre un club concreto
    static ficharJugador(clubComprador, clubVendedor, nombreJugador, costoFichaje) {
        if (clubComprador === clubVendedor) {
            console.log("Fichaje rechazado: los dos clubes deben ser diferentes.");
            return false;
        }
        // Primero se cobra al comprador; solo si pudo pagar se ingresa al vendedor
        if (clubComprador.retirarDinero(costoFichaje)) {
            clubVendedor.ingresarDinero(costoFichaje);
            console.log(`Fichaje cerrado: ${nombreJugador} pasa de ${clubVendedor.nombre} a ${clubComprador.nombre}.`);
            return true;
        }
        console.log(`Fichaje fallido: ${clubComprador.nombre} no tiene fondos para fichar a ${nombreJugador}.`);
        return false;
    }
}

// Pruebas
const clubA = new ClubFutbol("UD Las Palmas", 5000000);
const clubB = new ClubFutbol("CD Tenerife", 2000000);
const clubC = new ClubFutbol("Club Quebrado", -300); // se queda en 0

clubA.consultarEstado();
clubB.consultarEstado();
clubC.consultarEstado();

// Setter con valor negativo: se bloquea
clubA.presupuesto = -1000;
console.log(`Presupuesto tras intento negativo: ${clubA.presupuesto}`);

// miClub.#presupuesto = 999999; // SyntaxError: el campo es privado

// Fichaje con fondos suficientes
ClubFutbol.ficharJugador(clubA, clubB, "Jugador Estrella", 3000000);
// Fichaje sin fondos suficientes
ClubFutbol.ficharJugador(clubC, clubA, "Jugador Caro", 1000000);

clubA.consultarEstado();
clubB.consultarEstado();
clubC.consultarEstado();
