# Newsletter Sign-Up Form with Success Message

## Demo
Puedes ver una demo del proyecto aquí: [Enlace de la demo](https://tu-enlace-demo.com)

![Vista del formulario](https://res.cloudinary.com/dz209s6jk/image/upload/v1685103838/Challenges/rnhx0ccfuqrdx3udhhr8.jpg)

---

## Descripción del Proyecto
Este proyecto es un formulario de suscripción a un boletín informativo. Los usuarios pueden ingresar su correo electrónico para recibir actualizaciones mensuales sobre productos y otros temas relacionados. El formulario incluye validaciones en tiempo real para verificar la validez del correo electrónico y proporciona un mensaje de éxito una vez que el usuario se ha suscrito correctamente. Es una forma simple y eficaz de mejorar la interacción del usuario en un sitio web.

---

## Estructura del Proyecto
- `index.html` - Contiene la estructura del formulario de suscripción y el mensaje de confirmación.
- `style.css` - Estilos para el formulario, la validación, y el mensaje de éxito.
- `script.js` - Maneja la lógica de validación del correo electrónico y el control del mensaje de confirmación.

---

## Características
- **Validación en tiempo real**: El formulario valida la dirección de correo electrónico usando expresiones regulares para asegurar que el formato del correo sea correcto antes de enviar el formulario.
- **Interacción visual**: Si el correo electrónico ingresado no es válido, el formulario muestra un mensaje de error debajo del campo y cambia el estilo del input para indicar que el valor es incorrecto.
- **Mensaje de éxito**: Después de una validación exitosa, se muestra un mensaje de confirmación informando al usuario que se ha enviado un correo de confirmación.
- **Diseño adaptable**: El formulario está diseñado para adaptarse tanto a pantallas de escritorio como móviles, con imágenes e interacciones que mejoran la experiencia del usuario.

---

## Imágenes del Proyecto
Aquí tienes algunas imágenes de cómo se ve el proyecto en acción:

<div style="display: flex; justify-content: space-between;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1685103838/Challenges/rnhx0ccfuqrdx3udhhr8.jpg" alt="Formulario en móvil" style="height: 300px; width: auto; margin: 10px;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1685103968/Challenges/oyutcn434w63q3vhs38z.jpg" alt="Formulario en escritorio" style="height: 300px; width: auto; margin: 10px;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1685103968/Challenges/ar4f8wjb3zi0mrirpcve.jpg" alt="Formulario de confirmación" style="height: 300px; width: auto; margin: 10px;">
    <img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1685104000/Challenges/s1nccdhto3gigyx7p4c2.jpg" alt="Confirmación completada" style="height: 300px; width: auto; margin: 10px;">
</div>

---

## Agradecimientos
Este proyecto fue desarrollado como parte de un desafío de Frontend Mentor. ¡Gracias por el reto!

---

## Desarrollo del Challenge
Para el desarrollo de este formulario, se implementaron varias funcionalidades clave en JavaScript:

1. **Validación del Correo Electrónico**: Utilicé una expresión regular para validar el formato del correo electrónico ingresado en el campo de texto. Si el correo es válido, el formulario muestra un mensaje de confirmación, y si no lo es, muestra un mensaje de error.
  
2. **Manejo de Mensajes de Error y Confirmación**: En caso de un correo inválido, el campo de entrada se marca con un borde rojo y se muestra un mensaje de error debajo del campo. Si el correo es válido, el mensaje de confirmación aparece en el centro de la pantalla.

3. **Feedback al Usuario**: Tras la suscripción, un mensaje de confirmación informa al usuario que un correo de confirmación ha sido enviado. Este mensaje contiene el correo ingresado y le da instrucciones al usuario para confirmar su suscripción.

4. **Adaptabilidad y Diseño Visual**: El formulario se adapta tanto a dispositivos móviles como de escritorio, cambiando su disposición para una mejor experiencia de usuario.

---

## Cómo Contribuir
1. Haz un fork del proyecto.
2. Clona tu fork localmente.
3. Crea una rama para tu contribución: `git checkout -b nombre-rama`.
4. Realiza los cambios necesarios y confirma los commits.
5. Envía un pull request describiendo tus mejoras.

---

## Repositorio
Puedes acceder al repositorio del proyecto en GitHub [aquí](https://github.com/JuSeRDev/10-JS-Challenge.git).

---

## Enlace del Desafío
Este reto fue proporcionado por [Frontend Mentor](https://www.frontendmentor.io).
