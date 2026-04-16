# GYTC - Grúas y Transportes de Colombia

Sitio web oficial de **GYTC – Grúas y Transportes de Colombia**, especialistas en izaje de cargas extrapesadas y sobredimensionadas, alquiler de maquinaria, transporte especializado y servicios combinados con cobertura nacional.

✨ **Diseñado con [Lovable](https://lovable.dev/) y Antigravity** ✨

---

## 🏗 Tecnologías Principales

Este proyecto está construido con un stack moderno y escalable:

- **React 18** (Vite)
- **TypeScript**
- **Tailwind CSS** (shadcn-ui para componentes)
- **EmailJS** (Para la radicación de PQRS)
- **Lucide React** (Iconografía)
- **IntersectionObserver** (Animaciones de scroll personalizadas)

## 🚀 Características Destacadas

- **PWA (Progressive Web App):** Optimizado para carga rápida y funcionamiento offline.
- **Formulario PQRS:** Flujo paso a paso con validaciones sólidas y Responsive UI, totalmente conectado a EmailJS.
- **Widget Inteligente de WhatsApp:** Menú desplegable animado para conectar clientes directamente por área (Gerencia y Dirección Operativa).
- **Smooth Animations:** Componentes que detectan el viewport para animaciones en primera carga y en scroll largo.
- **Gestión SEO:** Configurado con metadatos específicos y URLs amigables (React Router).

## 🛠️ Ejecución Local

Para correr este entorno en tu máquina local:

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPO>

# 2. Ir a la carpeta
cd gytc-v3

# 3. Instalar las dependencias
npm install

# 4. Correr servidor de desarrollo
npm run dev
```

## 🌐 Despliegue en Producción

Para compilar y obtener los archivos listos para servidores como DreamHost o Apache:

```bash
npm run build
```

Generará la carpeta `dist/`, sobre la cual ya hemos integrado en `public/.htaccess` la configuración obligatoria para el funcionamiento de *React Router DOM* sin errores de recarga (errores 404).

---

© 2026 GYTC. Grúas y Transportes de Colombia S.A.S.
