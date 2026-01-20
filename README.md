# Vamos Salud - Next.js

Página web para el programa de financiamiento y empleabilidad para enfermeros mexicanos en Estados Unidos.

## Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Iconify** - Iconos SVG

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Estructura del Proyecto

```
htom/
├── app/
│   ├── layout.tsx      # Layout principal
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globales
├── components/
│   ├── navbar.tsx
│   ├── hero-section.tsx
│   ├── beneficios-section.tsx
│   ├── proceso-section.tsx
│   ├── financiamiento-section.tsx
│   ├── elegibilidad-section.tsx
│   ├── registro-section.tsx
│   └── footer.tsx
└── public/              # Archivos estáticos
```

## Build

```bash
npm run build
```

## Producción

```bash
npm start
```
