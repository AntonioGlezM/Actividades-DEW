interface ISesion {
    agregarProducto(precio: number): void;
    aplicarDescuento(): void;
    mostrarResumen(): void;
}

class CarritoSesion implements ISesion {

    private static instancia: CarritoSesion;

    private idSesion: string;
    private totalPagar: number;
    private cantidadProductos: number;
    private cuponAplicado: boolean;

    private constructor() {
        this.idSesion = "SES-9901";
        this.totalPagar = 0.0;
        this.cantidadProductos = 0;
        this.cuponAplicado = false;
    }

    public static obtenerInstancia(): CarritoSesion {
        if (!CarritoSesion.instancia) {
            CarritoSesion.instancia = new CarritoSesion();
        }
        return CarritoSesion.instancia;
    }

    public agregarProducto(precio: number): void {
        this.cantidadProductos += 1;
        this.totalPagar += precio;
    }

    public aplicarDescuento(): void {
        if (!this.cuponAplicado) {
            this.totalPagar = Math.round(this.totalPagar * 0.9 * 100) / 100;
            this.cuponAplicado = true;
        }
    }

    public mostrarResumen(): void {
        console.log("Sesión: " + this.idSesion + " | Productos: " + this.cantidadProductos +
            " | Total a pagar: " + this.totalPagar.toFixed(2) + " € | Cupón aplicado: " + this.cuponAplicado);
    }
}

class ModuloNavegacion {
    private carrito: ISesion;

    constructor(carrito: ISesion) {
        this.carrito = carrito;
    }

    public ejecutar(): void {
        this.carrito.agregarProducto(5);
        this.carrito.agregarProducto(10);
        this.carrito.aplicarDescuento();
    }
}

class ModuloCheckout {
    private carrito: ISesion;

    constructor(carrito: ISesion) {
        this.carrito = carrito;
    }

    public ejecutar(): void {
        this.carrito.mostrarResumen();
    }
}

const cart1 = CarritoSesion.obtenerInstancia();
const cart2 = CarritoSesion.obtenerInstancia();
console.log("Son la misma instancia:", cart1 === cart2);

const checkout = new ModuloCheckout(cart1);
const navegacion = new ModuloNavegacion(cart1);

console.log("Estado inicial:");
checkout.ejecutar();

navegacion.ejecutar();

console.log("Estado tras las compras:");
checkout.ejecutar();