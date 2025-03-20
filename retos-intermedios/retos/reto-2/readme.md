# Rating Component

Este repositorio contiene un **Rating Component** que permite a los usuarios calificar un servicio o producto. Incluye interactividad mediante botones y una presentación visual moderna. 

## Descripción

El **Rating Component** permite a los usuarios seleccionar una calificación mediante botones, que se resaltan al hacer clic. Una vez seleccionada la calificación y presionado el botón de envío, se muestra un mensaje de agradecimiento. La interfaz es responsiva y cuenta con un diseño atractivo.

## Características

- Interacción intuitiva con botones de calificación.
- Visualización de un mensaje de agradecimiento tras la selección.
- Diseño moderno y responsivo que se adapta a diferentes dispositivos.

## Tecnologías utilizadas

- **HTML5**: Para la estructura básica del componente.
- **CSS3**: Para el diseño y la estilización del componente.
- **JavaScript**: Para la interactividad y la gestión de eventos.

## Vista del proyecto

<div style="display: flex; justify-content: center; flex-wrap: wrap;">
  <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1715956054/Challenges/qfqisz7khlp5zhq7yscj.jpg" alt="Desktop Preview 1" style="margin: 5px; height: 200px; width: auto;">
  <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1715956054/Challenges/kzept4j0asgsm2ohdoqk.jpg" alt="Desktop Preview 2" style="margin: 5px; height: 200px; width: auto;">
  <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1715956054/Challenges/desckqwzsixdbm1pmtgo.jpg" alt="Mobile Preview 1" style="margin: 5px; height: 200px; width: auto;">
  <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1715956054/Challenges/czo3u7ajzp1tu8r4gpg9.jpg" alt="Mobile Preview 2" style="margin: 5px; height: 200px; width: auto;">
</div>

## Estructura del proyecto

- `index.html`: Contiene la estructura HTML del componente.
- `style.css`: Incluye los estilos CSS del componente.
- `code.js`: Archivo JavaScript encargado de la funcionalidad y la interactividad.

## Explicación del código

Este código crea un componente de calificación interactivo. Primero, se seleccionan los elementos del DOM necesarios, como los botones de calificación y el botón de envío. Cada vez que se hace clic en un botón de calificación, se actualiza el estado visual del botón y se muestra la calificación seleccionada en un área designada. Si no se selecciona ninguna calificación, el contenedor original no se oculta al hacer clic en el botón de envío, asegurando que el usuario deba elegir un valor antes de proceder. Al seleccionar una calificación válida y hacer clic en enviar, se oculta el contenedor original y se muestra uno nuevo que agradece al usuario por su participación. Este enfoque garantiza una experiencia de usuario fluida y una validación adecuada de la interacción.

## Créditos

El diseño de este componente fue inspirado en retos de la comunidad de desarrollo web. El desarrollo e implementación fue realizado por **Sebastián Rodríguez**.

## Agradecimientos

Agradezco a la comunidad de desarrolladores y recursos en línea que proporcionan retos y aprendizaje continuo, ayudándome a mejorar mis habilidades en desarrollo web.