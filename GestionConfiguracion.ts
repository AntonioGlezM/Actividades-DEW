interface IConfiguracion {
    setTema(nuevoTema: string): void;
    setIdioma(nuevoIdioma: string): void;
    mostrarEstado(): void;
}

class GestorConfiguracion implements IConfiguracion {

    private static instancia: GestorConfiguracion;

    private tema: string;
    private idioma: string;
    private version: string;
    private maxIntentosLogin: number;

    private constructor() {
        this.tema = "claro";
        this.idioma = "es";
        this.version = "1.0.0";
        this.maxIntentosLogin = 3;
    }

    public static obtenerInstancia(): GestorConfiguracion {
        if (!GestorConfiguracion.instancia) {
            GestorConfiguracion.instancia = new GestorConfiguracion();
        }
        return GestorConfiguracion.instancia;
    }
    public setTema(nuevoTema: string): void {
        this.tema = nuevoTema;
    }

    public setIdioma(nuevoIdioma: string): void {
        this.idioma = nuevoIdioma;
    }

    public mostrarEstado(): void {
        console.log("Tema: " + this.tema + " | Idioma: " + this.idioma +
            " | Versión: " + this.version + " | Máx. intentos: " + this.maxIntentosLogin);
    }
}

class ModuloAjustes {
    private config: IConfiguracion;

    constructor(configuracion: IConfiguracion) {
        this.config = configuracion;
    }

    public cambiarPreferencias(nuevoTema: string, nuevoIdioma: string): void {
        this.config.setTema(nuevoTema);
        this.config.setIdioma(nuevoIdioma);
    }
}

class ModuloInterfaz {
    private config: IConfiguracion;

    constructor(configuracion: IConfiguracion) {
        this.config = configuracion;
    }

    public renderizar(): void {
        this.config.mostrarEstado();
    }
}

const config1 = GestorConfiguracion.obtenerInstancia();
const config2 = GestorConfiguracion.obtenerInstancia();
console.log("¿Son la misma instancia?:", config1 === config2);

const ajustes = new ModuloAjustes(config1);
const interfaz = new ModuloInterfaz(config1);

console.log("Estado inicial:");
interfaz.renderizar();

ajustes.cambiarPreferencias("oscuro", "en");

console.log("Estado después de cambiar preferencias:");
interfaz.renderizar()
