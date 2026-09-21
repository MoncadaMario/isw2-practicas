function calcularMoraConAbono(monto, abono, diasVencidos) {
  const saldo = monto - abono;

  if (diasVencidos <= 0 || saldo <= 0) {
    return 0;
  }

  return saldo * 0.05;
}

module.exports = { calcularMoraConAbono };
