
# **Intro Section with Dropdown Navigation**

Este proyecto es una solución al reto **"Intro Section with Dropdown Navigation"** de [Frontend Mentor](https://www.frontendmentor.io). Consiste en la implementación de una sección de introducción con navegación de menú desplegable, diseñada para ser responsiva y funcional en diferentes dispositivos. Aquí se utilizan tecnologías modernas como HTML, CSS y TypeScript.

## **Demo**

Puedes ver el proyecto funcionando aquí:  
[🔗 Demo en vivo](https://juserdev.github.io/Landing-challenge-FM/retos-js-ts/retos/reto-16/index.html)

---

## **Descripción**

Este proyecto incluye:  
- Un encabezado con navegación desplegable, tanto para "Features" como para "Company".  
- Un diseño responsivo que se adapta a dispositivos móviles y pantallas más grandes.  
- Interacciones dinámicas para menús desplegables y un menú de navegación que se abre y cierra en vista móvil.  
- Uso de **TypeScript** para añadir tipado y mayor robustez en el manejo del DOM.

---

## **Tecnologías utilizadas**

- **HTML5**: Para la estructura semántica del contenido.  
- **CSS3**: Para el diseño y estilos responsivos.  
- **TypeScript**: Para la lógica interactiva con tipado seguro.  

---

## **Características principales**

1. **Navegación con menús desplegables**:
   - Los menús de "Features" y "Company" se abren y cierran al hacer clic.  
   - Las flechas cambian de orientación indicando el estado del menú (abierto/cerrado).

2. **Menú responsivo para dispositivos móviles**:
   - Un botón "hamburguesa" abre el menú en dispositivos móviles.  
   - Un botón "cerrar" lo oculta nuevamente.

3. **Diseño adaptativo**:
   - Se utilizan media queries para garantizar una experiencia fluida en dispositivos pequeños y grandes.

---

## **Estructura del código**

### **HTML**
El archivo HTML define la estructura principal, incluyendo:  
- Un encabezado con navegación desplegable.  
- Un contenido principal con un título, texto descriptivo y una sección de clientes.  

### **CSS**
El archivo CSS proporciona:  
- Estilos generales para colores, fuentes y espaciados.  
- Transiciones suaves para animaciones (como las flechas giratorias).  
- Estilos específicos para la vista móvil y desktop.

### **TypeScript**
El archivo TypeScript incluye la lógica para:  
- Alternar las clases de los menús desplegables.  
- Gestionar el menú de navegación en vista móvil.  
- Garantizar un código seguro y sin errores con tipado de elementos del DOM.

---

## **Estructura de carpetas**

```
intro-section-with-dropdown-navigation/
├── images/                  # Imágenes del proyecto
├── index.html               # Archivo principal HTML
├── style.css                # Archivo de estilos CSS
├── app.ts                   # Archivo de TypeScript
├── app.js                   # Archivo compilado de JavaScript
└── README.md                # Documento de descripción
```

---

## **Cómo usar este proyecto**

1. Clona el repositorio:  
   ```bash
   git clone https://github.com/JuSeRDev/Landing-challenge-FM.git
   ```

2. Ve al directorio del proyecto:  
   ```bash
   cd intro-section-with-dropdown-navigation
   ```

3. Abre el archivo `index.html` en tu navegador para ver el proyecto.

4. Si deseas realizar cambios en el código TypeScript:
   - Instala **TypeScript** si no lo tienes instalado:  
     ```bash
     npm install -g typescript
     ```
   - Compila el archivo TypeScript:  
     ```bash
     tsc app.ts
     ```

---

## **Lecciones aprendidas**

Durante este proyecto, se fortalecieron las habilidades en:  
- Manipulación del DOM con TypeScript.  
- Implementación de menús desplegables dinámicos.  
- Creación de diseños responsivos utilizando **CSS Grid** y **Flexbox**.  
- Uso de transiciones CSS para mejorar la experiencia del usuario.  

---

## **Créditos**

- **Desafío por**: [Frontend Mentor](https://www.frontendmentor.io).  
- **Desarrollado por**: [JuSeRDev](https://github.com/JuSeRDev).  
