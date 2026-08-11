Notas de la refactorización

Principio 2 — Single Responsibility

- La clase Pedido original tenía varias razones para cambiar.
- Se separaron las responsabilidades en piezas diferentes.
- La validación, el cálculo y el guardado ahora están separados.
- Cada pieza tiene una función más clara y fácil de entender.
- Esto permite mantener y modificar una parte sin afectar las demás.

Principio 9 — Dependency Inversion

- El código de Pedido no depende directamente de los detalles de guardado.
- El repositorio y el notificador se reciben como dependencias.
- Esto reduce el acoplamiento entre las piezas del sistema.
- En el futuro se puede cambiar la implementación sin modificar Pedido.
- El diseño queda más preparado para cambios y pruebas.
