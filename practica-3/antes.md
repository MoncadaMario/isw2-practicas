class Pedido {
  procesarPedido(productos, cliente) {
    console.log("Validando stock...");

    for (const producto of productos) {
      if (producto.stock <= 0) {
        console.log("Producto sin stock: " + producto.nombre);
        return;
      }
    }

    let subtotal = 0;

    for (const producto of productos) {
      subtotal += producto.precio * producto.cantidad;
    }

    const isv = subtotal * 0.15;
    const total = subtotal + isv;

    console.log("Subtotal: " + subtotal);
    console.log("ISV: " + isv);
    console.log("Total: " + total);

    console.log("Guardando pedido en la base de datos...");
    guardarPedido(productos, cliente, total);

    console.log("Imprimiendo ticket...");
    console.log("Cliente: " + cliente.nombre);
    console.log("Total a pagar: " + total);

    console.log("Enviando WhatsApp...");
    enviarWhatsApp(cliente.telefono, "Su pedido fue procesado");

    console.log("Pedido completado");
  }
}
