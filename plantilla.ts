// Clase padre: datos comunes de cualquier futbolista
class Futbolista {
    public nombre: string;
    public edad: number;
    protected dorsal: number; // solo accesible desde esta clase y sus hijas

    constructor(nombre: string, edad: number, dorsal: number) {
        this.nombre = nombre;
        this.edad = edad;
        this.dorsal = dorsal;
    }

    obtenerFicha(): string {
        return `Jugador: ${this.nombre} | Edad: ${this.edad} | Dorsal: ${this.dorsal}`;
    }

    // Salario base de cualquier futbolista
    calcularSalario(): number {
        return 2000;
    }
}

// Clase hija: el delantero cobra extra por goles
class Delantero extends Futbolista {
    public golesTemporada: number;

    constructor(nombre: string, edad: number, dorsal: number, golesTemporada: number) {
        super(nombre, edad, dorsal); // inicializa lo heredado
        this.golesTemporada = golesTemporada;
    }

    // Sobrescribe el método del padre: base + 100 € por gol
    calcularSalario(): number {
        return super.calcularSalario() + this.golesTemporada * 100;
    }

    celebrarGol(): string {
        return `${this.nombre} (dorsal ${this.dorsal}) celebra el gol deslizándose de rodillas.`;
    }
}

// Clase hija: el portero cobra extra por paradas clave
class Portero extends Futbolista {
    public paradasClave: number;

    constructor(nombre: string, edad: number, dorsal: number, paradasClave: number) {
        super(nombre, edad, dorsal);
        this.paradasClave = paradasClave;
    }

    // Sobrescribe el método del padre: base + 150 € por parada clave
    calcularSalario(): number {
        return super.calcularSalario() + this.paradasClave * 150;
    }

    pararPenalti(): string {
        return `${this.nombre} (dorsal ${this.dorsal}) se lanza y detiene el penalti.`;
    }
}

// Prueba final
const delanteroEstrella = new Delantero("Carlos 'El Rayo' Martínez", 24, 9, 15);
const porteroTitular = new Portero("David 'Muro' Silvestre", 31, 1, 12);

console.log(delanteroEstrella.obtenerFicha());
console.log(delanteroEstrella.celebrarGol());
console.log(`Sueldo mensual: ${delanteroEstrella.calcularSalario()} €\n`);

console.log(porteroTitular.obtenerFicha());
console.log(porteroTitular.pararPenalti());
console.log(`Sueldo mensual: ${porteroTitular.calcularSalario()} €`);
