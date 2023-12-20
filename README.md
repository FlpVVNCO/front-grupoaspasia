# Proyecto Frontend para GrupoAspasia

Proyecto desarrollado con React + Tailwind + React-router-dom + React-tables + HeadlessUI.

1. Entra al link: [Visitar la aplicación desplegada](https://front-aspasia.netlify.app/)
2. Navega por las páginas.
3. Pincha un libro de la tabla para ver sus detalles.
4. Añadelo a tus favoritos y visualizalo en Favorites
5. Ordena los resultados de la tabla de manera asc y desc
6. Utiliza el buscador para filtrar por nombre de los libros.

La aplicación es responsive en todos los dispositivos.

## Comenzando a desplegar 🚀

Estas instrucciones te ayudarán a clonar y configurar el proyecto en tu máquina local para desarrollo y pruebas.

### Prerrequisitos

Antes de comenzar, asegúrate de tener instalado [Node.js](https://nodejs.org/) en tu sistema. Necesitarás una cuenta de [GitHub](https://github.com/) para clonar el repositorio.

### Instalación 🔧

1. Clona este repositorio a tu máquina local:

   ```
    git clone https://github.com/FlpVVNCO/front-grupoaspasia/
   ```
   
2. Ve al directorio del proyecto:

   ```
    cd front-grupoaspasia
   ```
3. Instala las dependencias utilizando npm:

   ```
    npm install
   ```

4. Inicia el servidor de desarrollo:

   ```
    npm run dev
   ```

_El proyecto se ejecutará en `http://localhost:5173`. Puedes acceder a él desde tu navegador._

## Dependencias y Tecnologías

A continuación, se enumeran las principales dependencias utilizadas en este proyecto:

- [React.js](https://react.dev/): React es una librería Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página.

- [TailwindCSS](https://tailwindcss.com/): Tailwind CSS es un framework de CSS de código abierto​ para el diseño de páginas web.

- [HeadlessUI](https://headlessui.com/): Es una biblioteca de componentes sin estilo para React. js o Vue. js de la misma gente que creó Tailwind CSS.

- [React-Tables](https://react-table.tanstack.com/): Es una biblioteca de React diseñada para ayudar en la creación de tablas interactivas y dinámicas en aplicaciones web.

- [React-Rounter](https://reactrouter.com/en/main): Es una librería que permite agregar enrutamiento a una aplicación web de React.

- [Vite](https://es.vitejs.dev/): Vite es un servidor de desarrollo local con plantillas de react.

## Historias de usuario

- ¿Cómo decidiste las opciones técnicas y arquitectónicas utilizadas como parte de su solución?
- R: Para decidir las opciones técnicas y arquitectónicas, realicé una investigación exhaustiva sobre las bibliotecas y herramientas necesarias para el proyecto. Opté por una estructura de directorios que se basa en las mejores prácticas de modularización y reutilización de código en proyectos React. La elección de bibliotecas, como react-table para las tablas, se basó en la necesidad de funcionalidades específicas y en su popularidad en la comunidad de desarrollo.
- ¿Hay alguna mejora que dejaste pendiente de hacer en su envío?
- R: Aunque el envío actual cumple con algunos de los requisitos del proyecto, identifiqué algunas áreas de mejora pendientes. Podría refactorizar y optimizar ciertas partes del código para mejorar la legibilidad y el rendimiento. Además, consideraría la implementación de pruebas unitarias y de integración para garantizar la estabilidad y calidad del código, ya que no manejo al 100% jest, lo estoy estudiando para poder realizar pruebas unitarias. Por otra parte, me hubiese gustado documentar los componentes en storybook y la falta de tiempo no me lo permitió. Como también con typescript, de hecho el proyecto lo estuve realizando con typescript y por falta de tiempo no pude seguir, ya que tuve problemas de tipeo y con las interfaces. Lo que iba a retrasar esta entrega, prefiero cumplir con el tiempo acordado. 
- ¿Qué harías de manera diferente si se le asignara más tiempo?
- R: Optaría por desarrollar el proyecto utilizando TypeScript con el objetivo de hacer el código más escalable y facilitar la detección temprana de errores. Asimismo, propondría mejoras significativas en la experiencia del usuario (UX). En la versión actual, algunas áreas han sido abordadas de manera apresurada, particularmente la carga inicial de los libros y la falta de transiciones entre páginas. Para lograr una experiencia más pulida, implementaría una transición fluida en cada página y trabajaríamos en una paleta de colores mejorada.
Además, me enfocaría en perfeccionar el manejo de errores para brindar a los usuarios una experiencia más agradable y libre de contratiempos. Al abordar estos aspectos, el proyecto no solo ganaría en funcionalidad, sino que también se destacaría por su usabilidad y estética mejorada, ofreciendo así una aplicación más robusta y atractiva para los usuarios finales.

## Comentarios

- Alguna duda/error que se presente pueden contactarme a mi correo: felipevivanco05@gmail.com
