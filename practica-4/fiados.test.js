const { calcularMora } = require('./fiados');

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

function assertThrows(fn) {
  let lanzoError = false;

  try {
    fn();
  } catch (error) {
    lanzoError = true;
  }

  if (!lanzoError) {
    throw new Error('Se esperaba un error');
  }
}

test('calcula 5% de mora cuando hay días vencidos', () => {
  const monto = 1000;
  const diasVencidos = 10;

  const resultado = calcularMora(monto, diasVencidos);

  assertEqual(resultado, 50);
});

test('no cobra mora cuando los días vencidos son 0', () => {
  const monto = 1000;
  const diasVencidos = 0;

  const resultado = calcularMora(monto, diasVencidos);

  assertEqual(resultado, 0);
});

test('no cobra mora con monto 0', () => {
  const monto = 0;
  const diasVencidos = 10;

  const resultado = calcularMora(monto, diasVencidos);

  assertEqual(resultado, 0);
});

test('calcula correctamente otro monto vencido', () => {
  const monto = 500;
  const diasVencidos = 5;

  const resultado = calcularMora(monto, diasVencidos);

  assertEqual(resultado, 25);
});

test('rechaza un monto negativo', () => {
  const monto = -100;
  const diasVencidos = 5;

  assertThrows(() => calcularMora(monto, diasVencidos));
});

test('rechaza días que no son un número', () => {
  const monto = 1000;
  const diasVencidos = 'cinco';

  assertThrows(() => calcularMora(monto, diasVencidos));
});
