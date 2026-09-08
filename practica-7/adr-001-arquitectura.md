ADR-001: Arquitectura para la cooperativa de buses

Contexto

La cooperativa de buses espera tener aproximadamente 50,000 usuarios y la mayor demanda de ventas ocurre alrededor de las 5:00 AM.

Los principales atributos de calidad son:

- Disponibilidad: el sistema debe estar disponible durante los períodos de mayor demanda.
- Escalabilidad: debe soportar aumentos de usuarios y ventas.
- Mantenibilidad: debe ser fácil de modificar y mantener.
- Rendimiento: las operaciones deben responder rápidamente.

El gerente propone utilizar microservicios porque es una tecnología moderna, pero la decisión debe basarse en las necesidades del sistema y no solamente en la tecnología de moda.

Opciones consideradas

1. Monolito modular

Un solo sistema dividido en módulos como usuarios, ventas, buses, horarios y pagos.

Ventajas: menor complejidad, desarrollo más sencillo y fácil mantenimiento.

Desventajas: el sistema completo debe escalar y una falla general podría afectar todos los módulos.

2. Microservicios

Dividir el sistema en servicios independientes, como usuarios, ventas, pagos y horarios.

Ventajas: cada servicio puede escalarse por separado y permite mayor independencia entre componentes.

Desventajas: aumenta la complejidad de desarrollo, despliegue, comunicación y monitoreo.

3. Serverless

Utilizar servicios de nube que ejecutan funciones bajo demanda.

Ventajas: escalamiento automático y menor administración de servidores.

Desventajas: dependencia del proveedor de nube y mayor complejidad si el sistema crece mucho.

Decisión

Se decide utilizar un **monolito modular con escalamiento horizontal**.

Esta opción permite mantener el sistema sencillo y fácil de mantener, pero también permite responder a los períodos de alta demanda mediante réplicas, balanceo de carga y caché.

No se considera necesario utilizar microservicios desde el inicio. Si en el futuro algún módulo necesita escalar de manera independiente, podría separarse posteriormente.

Consecuencias

Positivas:
- Menor complejidad inicial.
- Más fácil de desarrollar y mantener.
- Permite escalar agregando réplicas.
- Los módulos mantienen responsabilidades separadas.

Negativas:
- El escalamiento inicial se realiza sobre toda la aplicación.
- Una falla general puede afectar todo el sistema.
- En el futuro podría ser necesario separar algún módulo.

Estrategia de escalamiento

```mermaid
flowchart LR
    U[Usuarios] --> LB[Load Balancer]
    LB --> A1[Instancia 1]
    LB --> A2[Instancia 2]
    LB --> A3[Instancia 3]
    A1 --> C[Cache]
    A2 --> C
    A3 --> C
    A1 --> DB[(Base de Datos)]
    A2 --> DB
    A3 --> DB
