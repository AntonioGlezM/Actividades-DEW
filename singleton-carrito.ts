class CarritoSesion {
  private static instancia: CarritoSesion | null = null;

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
    if (CarritoSesion.instancia === null) {
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

  public obtenerResumen(): string {
    return `Sesión: ${this.idSesion} | Productos: ${this.cantidadProductos} | Total a pagar: ${this.totalPagar.toFixed(2)} € | Cupón aplicado: ${this.cuponAplicado}`;
  }
}

class ModuloNavegacion {
  public ejecutar(): void {
    const carrito = CarritoSesion.obtenerInstancia();
    carrito.agregarProducto(5);
    carrito.agregarProducto(10);
    carrito.aplicarDescuento();
  }
}

class ModuloCheckout {
  public ejecutar(): void {
    const carrito = CarritoSesion.obtenerInstancia();
    console.log(carrito.obtenerResumen());
  }
}

const cart1 = CarritoSesion.obtenerInstancia();
const cart2 = CarritoSesion.obtenerInstancia();
console.log(`Coincide: ${cart1 === cart2}`);

const checkout = new ModuloCheckout();
const navegacion = new ModuloNavegacion();

console.log("Estado inicial (ModuloCheckout):");
checkout.ejecutar();

navegacion.ejecutar();

console.log("Estado tras las compras (ModuloCheckout):");
checkout.ejecutar();
