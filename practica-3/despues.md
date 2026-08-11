class ValidadorStock {
  validar(productos) {
    for (const producto of productos) {
      if (producto.stock <= 0) {
        return false;
      }
    }

    return true;
  }
}

class CalculadoraPedido {
  calcular(productos) {
    let subtotal = 0;

    for (const producto of productos) {
      subtotal += producto.precio * producto.cantidad;
    }

    const isv = subtotal * 0.15;

    return subtotal + isv;
  }
}

class PedidoRepository {
  guardar(pedido) {
    console.log("Guardando pedido en la base de datos...");
  }
}

class NotificadorWhatsApp {
  enviar(cliente, mensaje) {
    console.log("Enviando WhatsApp a " + cliente.telefono);
  }
}

class Pedido {
  constructor(repository, notificador) {
    this.repository = repository;
    this.notificador = notificador;
  }

  procesar(productos, cliente) {
    const validador = new ValidadorStock();

    if (!validador.validar(productos)) {
      return;
    }

    const calculadora = new CalculadoraPedido();
    const total = calculadora.calcular(productos);

    this.repository.guardar(productos, cliente, total);
    this.notificador.enviar(
      cliente,
      "Su pedido fue procesado por un total de " + total
    );
  }
}
