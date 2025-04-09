# Contact Form

## Demo
Puedes ver una demo del proyecto aquí: [Enlace de la demo](https://juserdev.github.io/09-JS-Challenge/)

![Formulario de contacto](https://res.cloudinary.com/dz209s6jk/image/upload/v1715865267/Challenges/ianldfh3rogt7m3kbzml.jpg)

---

## Descripción del Proyecto
Este proyecto es un formulario de contacto diseñado para recopilar información básica del usuario, como nombre, apellido, correo electrónico y mensaje. Además, el formulario permite al usuario seleccionar el tipo de consulta y otorga la opción de aceptar el consentimiento para ser contactado. El proyecto incluye validaciones avanzadas en cada campo, brindando una experiencia de usuario limpia y eficiente, además de mensajes de error específicos cuando el formato de los datos no es correcto.

---

## Estructura del Proyecto
- `index.html` - Estructura del formulario en HTML.
- `styles.css` - Estilos del formulario y mensajes de error.
- `script.js` - Validaciones y funcionalidad del formulario en JavaScript.

---

## Características
- **Validación de Campos**: Cada campo del formulario cuenta con validaciones específicas, asegurando que el formato de los datos ingresados sea correcto. Utiliza expresiones regulares para validar:
  - Nombre y apellido
  - Correo electrónico
  - Mensaje
- **Mensajes de Error**: Se muestran mensajes de error específicos debajo de cada campo cuando los datos ingresados no cumplen con los requisitos.
- **Confirmación de Envío**: Al enviar el formulario con éxito, aparece un mensaje de confirmación.
- **Interacción Visual**: Los mensajes de error se gestionan mediante manipulación de `overflow` en CSS, haciendo el formulario visualmente limpio.

---

## Imágenes del Proyecto
Aquí tienes algunas imágenes de cómo se ve el proyecto en acción:

<div style="display: flex; justify-content: space-between;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1715865267/Challenges/itjgreesah1li10afwll.jpg" alt="Vista 2" style="height: 300px; width: auto; margin: 10px;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1715865267/Challenges/ianldfh3rogt7m3kbzml.jpg" alt="Vista 1" style="height: 300px; width: auto; margin: 10px;">
</div>


---

## Agradecimientos
Este proyecto fue desarrollado como parte de un desafío de Frontend Mentor. ¡Gracias por el reto!

---

## Desarrollo del Challenge
Para el desarrollo de este formulario, se implementaron varias funcionalidades clave en JavaScript:

1. **Validación de los Campos**: Utilicé expresiones regulares para verificar los datos ingresados en los campos de texto, como el nombre y el correo electrónico. Las funciones de validación revisan si los datos ingresados cumplen con el formato esperado antes de enviar el formulario.
  
2. **Manejo de Mensajes de Error y Confirmación**: Cuando un campo contiene datos no válidos, se muestra un mensaje de error específico debajo de dicho campo. Estos mensajes aparecen usando `overflow: visible` y desaparecen con `overflow: hidden`, manteniendo el diseño ordenado y claro.
  
3. **Feedback al Usuario**: Al enviar el formulario con éxito, un mensaje de confirmación informa al usuario que los datos se han enviado correctamente. Esto se logra manipulando elementos en el DOM con JavaScript.

---

## Cómo Contribuir
1. Haz un fork del proyecto.
2. Clona tu fork localmente.
3. Crea una rama para tu contribución: `git checkout -b nombre-rama`.
4. Haz tus cambios y confirma los commits.
5. Envía un pull request con una descripción de tus mejoras.