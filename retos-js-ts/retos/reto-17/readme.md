
# Time Tracking Dashboard

Este proyecto es una solución al [Time Tracking Dashboard Challenge](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw) de **Frontend Mentor**. Es una página dinámica que muestra el seguimiento del tiempo en diferentes actividades, con opciones para visualizar datos diarios, semanales y mensuales.

## Preview

<img src="https://res.cloudinary.com/dz209s6jk/image/upload/v1631270212/Challenges/va9khukabo1wlmpzsbgi.jpg" alt="image" style="border-radius: 30px" ></img>

---

## 🛠️ Tecnologías utilizadas

- **HTML**: para estructurar la página.
- **CSS**: para estilizar el diseño con un enfoque responsive.
- **TypeScript**: para gestionar la lógica del proyecto y generar dinámicamente los elementos.
- **JSON**: para almacenar y cargar los datos de actividades.
- **Fetch API**: para obtener los datos del archivo JSON.

---

## 📂 Estructura del proyecto

```
📁 time-tracking-dashboard
├── 📁 images
│   ├── favicon-32x32.png
│   ├── image-jeremy.png
│   ├── icon-work.svg
│   ├── icon-play.svg
│   ├── icon-study.svg
│   ├── icon-exercise.svg
│   ├── icon-social.svg
│   ├── icon-self-care.svg
├── index.html
├── style.css
├── app.ts
├── data.json
├── README.md
```

---

## ⚙️ Configuración y ejecución

### Requisitos previos
1. Tener un navegador moderno instalado.
2. Un servidor local como [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) (opcional para cargar el JSON).

### Instrucciones
1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio
   ```
2. Abre `index.html` directamente en tu navegador **o** ejecuta un servidor local:
   ```bash
   # Si usas Live Server, ejecuta:
   live-server
   ```
3. Visualiza la página interactiva.

---

## 🌟 Características

- **Datos dinámicos**: Las tarjetas de actividades se generan automáticamente desde un archivo JSON.
- **Interactividad**: Cambia entre vistas diarias, semanales y mensuales con un solo clic.
- **Diseño responsive**: Totalmente optimizado para dispositivos móviles y de escritorio.

---

## 🔧 Personalización

Si deseas añadir o modificar las actividades:
1. Ve al archivo `data.json`.
2. Agrega un nuevo objeto con el formato:
   ```json
   {
     "title": "Nueva Actividad",
     "class": "nueva-clase",
     "timeframes": {
       "daily": { "current": 0, "previous": 0 },
       "weekly": { "current": 0, "previous": 0 },
       "monthly": { "current": 0, "previous": 0 }
     }
   }
   ```

Asegúrate de incluir una clase CSS para estilizar la nueva actividad.

---

## 🚀 Próximos pasos

- Mejorar las animaciones al cambiar entre vistas.
- Implementar un backend para cargar datos desde una base de datos en lugar de un archivo JSON.

---

## 🖋️ Autor

- **Frontend Mentor**: [Perfil del desafío](https://www.frontendmentor.io/profile/JuSeRDev)
- **GitHub**: [JuSeRDev](https://github.com/JuSeRDev)

---

## 📄 Licencia

Este proyecto es parte de un reto práctico y no tiene licencia explícita. 
