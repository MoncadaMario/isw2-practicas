const { calcularMoraConAbono } = require('./abonos');

function test(nombre, fn) {
  try {
    fn();
    console.log(`✓ ${nombre}`);
  } catch (error) {
    console.error(`✗ ${nombre}`);
    console.error(error.message);
    process.exitCode = 1;
  }
}

function assertEqual(actual, esperado) {
  if (actual !== esperado) {
    throw new Error(`Esperado: ${esperado}, recibido: ${actual}`);
  }
}

test('calcula la mora sobre el saldo después del abono', () => {
  const resultado = calcularMoraConAbono(1000, 400, 10);

  assertEqual(resultado, 30);
});

test('no cobra mora cuando el saldo queda en cero', () => {
  const resultado = calcularMoraConAbono(1000, 1000, 10);

  assertEqual(resultado, 0);
});

test('sin abono calcula la mora sobre el monto completo', () => {
  const resultado = calcularMoraConAbono(1000, 0, 10);

  assertEqual(resultado, 50);
});

test('no cobra mora si no hay días vencidos aunque exista saldo', () => {
  const resultado = calcularMoraConAbono(1000, 400, 0);

  assertEqual(resultado, 0);
});
