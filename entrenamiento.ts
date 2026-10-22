// Contrato que deben cumplir todos los entrenamientos
interface IEntrenamiento {
    intensidad: string;
    calentar(): void;
    ejecutarRutina(duracionMinutos: number): void;
}

// "public intensidad" en el constructor declara y asigna la propiedad a la vez
class EntrenamientoCarrera implements IEntrenamiento {
    constructor(public intensidad: string) { }

    calentar(): void {
        console.log("Carrera: estiramientos en pista.");
    }

    ejecutarRutina(duracionMinutos: number): void {
        console.log(`Carrera: ${duracionMinutos} min de running a intensidad ${this.intensidad}.`);
    }
}

class EntrenamientoCiclismo implements IEntrenamiento {
    constructor(public intensidad: string) { }

    calentar(): void {
        console.log("Ciclismo: revisar la presión de los neumáticos.");
    }

    ejecutarRutina(duracionMinutos: number): void {
        console.log(`Ciclismo: ${duracionMinutos} min de recorrido en bicicleta a intensidad ${this.intensidad}.`);
    }
}

class EntrenamientoNatacion implements IEntrenamiento {
    constructor(public intensidad: string) { }

    calentar(): void {
        console.log("Natación: movilidad articular en seco.");
    }

    ejecutarRutina(duracionMinutos: number): void {
        console.log(`Natación: ${duracionMinutos} min de series en la piscina a intensidad ${this.intensidad}.`);
    }
}

// Recibe cualquier objeto que cumpla la interfaz (polimorfismo)
class AtletaManager {
    constructor(private entrenamiento: IEntrenamiento) { }

    // No sabe qué deporte es: solo llama a los métodos del contrato
    iniciarSesion(minutos: number): void {
        this.entrenamiento.calentar();
        this.entrenamiento.ejecutarRutina(minutos);
    }
}

// Prueba final: cada entrenamiento funciona de forma independiente
const sesionCarrera = new EntrenamientoCarrera("Alta");
const managerCarrera = new AtletaManager(sesionCarrera);
managerCarrera.iniciarSesion(45);

const sesionCiclismo = new EntrenamientoCiclismo("Media");
const managerCiclismo = new AtletaManager(sesionCiclismo);
managerCiclismo.iniciarSesion(90);

const sesionNatacion = new EntrenamientoNatacion("Alta");
const managerNatacion = new AtletaManager(sesionNatacion);
managerNatacion.iniciarSesion(60);
