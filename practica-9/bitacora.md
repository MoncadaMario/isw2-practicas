# Bitácora - Práctica 9

## Feature desarrollada

Se agregó el cálculo de mora considerando abonos parciales. El abono reduce el saldo pendiente antes de calcular el 5% de mora.

## Tests escritos antes de implementar

Primero se crearon 4 tests para definir el comportamiento esperado:

- Un abono parcial reduce la base de cálculo de la mora.
- Si el abono cubre toda la deuda, la mora es 0.
- Sin abono, la mora se calcula sobre el monto completo.
- Sin días vencidos, no se cobra mora.

Los tests fueron creados antes de implementar `abonos.js`, dejando evidencia de esta decisión en el historial de Git.

## Prompt principal utilizado

> Estoy trabajando en una calculadora de fiados en JavaScript.
>
> Ya escribí los tests ANTES de implementar la feature. Los tests están en `practica-9/abonos.test.js`.
>
> La nueva feature es: abonos parciales que reducen el saldo antes de calcular la mora.
>
> Los tests esperan una función `calcularMoraConAbono(monto, abono, diasVencidos)`.
>
> Implementa solamente la función necesaria en `practica-9/abonos.js`. No modifiques mis tests. No agregues frameworks ni dependencias. Mantén la solución simple y alineada con KISS y YAGNI.

## Primera propuesta de la IA

La IA propuso calcular primero el saldo restando el abono al monto y después aplicar el 5% de mora cuando existen días vencidos y queda saldo.

La propuesta fue aceptada porque resolvía directamente los casos definidos en los tests y no agregaba funcionalidades innecesarias.

## Segunda propuesta

Se pidió a la IA una alternativa para comparar las soluciones.

La segunda propuesta utilizó `Math.max(monto - abono, 0)` para evitar que el saldo pendiente fuera negativo.

## Crítica de las propuestas

1. **KISS:** acepté la primera propuesta porque mantiene una lógica sencilla y fácil de leer. La segunda agrega `Math.max()`, que no es necesario para los casos definidos actualmente.

2. **YAGNI:** rechacé agregar validaciones o funcionalidades adicionales para abonos mayores al monto porque ese comportamiento no forma parte del contrato definido en nuestros tests.

3. **Responsabilidad única:** la función solamente calcula la mora considerando el abono. No guarda información, no modifica datos externos ni realiza otras tareas, por lo que mantiene una responsabilidad clara.

4. **Tests como contrato:** mantuve los tests originales sin modificarlos después de recibir la propuesta de la IA. La implementación tuvo que adaptarse al comportamiento que ya habíamos definido.

## Decisión final

Se aceptó la primera propuesta de la IA porque cumplía los tests, era sencilla y no agregaba complejidad innecesaria.

La suite terminó ejecutándose correctamente en GitHub Actions.

## Resultado

Los tests de la feature pasaron correctamente y la implementación quedó preparada para integrarse mediante un Pull Request.
