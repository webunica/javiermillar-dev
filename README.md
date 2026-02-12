# Javier Millar - Portfolio Moderno

Esta es una versión modernizada del portafolio personal, migrado de HTML estático a **React + TypeScript + Vite**.

## Estructura del Proyecto

El código ha sido dividido en componentes reutilizables para facilitar la mantención y escalabilidad:

- **src/components/**: Contiene todas las secciones de la página (Header, Hero, Services, etc.).
- **src/App.tsx**: Componente principal que orquesta la estructura.
- **src/index.css**: Estilos globales y variables CSS.

## Comandos Disponibles

1.  **Instalar dependencias**:
    ```bash
    npm install
    ```

2.  **Iniciar servidor de desarrollo**:
    ```bash
    npm run dev
    ```

3.  **Construir para producción**:
    ```bash
    npm run build
    ```

## Despliegue en Vercel

Para desplegar este proyecto en Vercel:

1.  Instala Vercel CLI: `npm i -g vercel`
2.  Ejecuta `vercel` en la raíz del proyecto y sigue las instrucciones.
3.  O conecta tu repositorio de GitHub directamente en el dashboard de Vercel.

## Conexión a GitHub

1.  Crea un nuevo repositorio en GitHub.
2.  Ejecuta:
    ```bash
    git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
    git branch -M main
    git push -u origin main
    ```
