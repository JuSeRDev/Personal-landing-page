# Proyecto de Barras Interactivas

## Descripción

Este proyecto crea un sistema interactivo donde las barras muestran información adicional al pasar el cursor sobre ellas. Además, al hacer clic, se puede fijar o liberar la visibilidad de la información, lo que permite una interacción dinámica y persistente.

## Funcionalidades

- **Hover dinámico**: Al pasar el cursor sobre una barra, se muestra la información correspondiente.
- **Fijación con clic**: Permite fijar la visibilidad de la información con un clic, y desactivarla con otro clic.
- **Interactividad fluida**: Los cambios en el estado de las barras responden de manera inmediata a las acciones del usuario.

## Tecnologías Utilizadas

- **HTML**: Estructura de las barras y la información asociada.
- **CSS**: Estilos, incluyendo la clase `amount-active` para resaltar la información visible.
- **TypeScript**: Maneja los eventos de interacción (`mouseover`, `mouseout`, `click`) y la actualización dinámica del DOM.

## Uso

1. **Pasa el cursor sobre las barras** para activar la información adicional.
2. **Haz clic en una barra** para fijar su estado activo.
3. **Haz clic nuevamente** para desactivar la fijación.

## Detalles Técnicos

### Estructura del Código

- **Eventos de mouse:**
  - `mouseover` y `mouseout` controlan la visibilidad temporal de la información.
  - `click` alterna entre fijar o liberar la visibilidad.
  
- **Variable de control (`isClicked`)**:  
  Controla el estado de fijación de la información. Si es `true`, la información permanece visible, de lo contrario, se oculta.

### Lógica Principal

El sistema maneja tres eventos principales: `mouseover`, `mouseout` y `click`. Al pasar el cursor sobre una barra, se activa la clase `amount-active` en el elemento hermano correspondiente, mostrando la información. Al salir de la barra, la clase se elimina, a menos que el estado haya sido fijado.

Con un clic en la barra, el sistema alterna el estado de fijación. Si el estado no está fijado, la clase `amount-active` se mantiene; si ya está fijado, la clase se elimina. Esto es controlado mediante la variable booleana `isClicked`, que alterna entre `true` y `false`.

## Contribuciones

Si deseas contribuir al proyecto, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama para tus cambios.
3. Realiza tus modificaciones y haz commit.
4. Sube tus cambios a tu fork.
5. Crea un pull request describiendo tus cambios.