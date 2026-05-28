# Estudio Jurídico Galeazzo

Landing page institucional para Estudio Jurídico Galeazzo — sitio estático, responsive y orientado a conversión por WhatsApp.

## Estructura

```
estudio juridico/
├── index.html       # Estructura de la página
├── styles.css       # Estilos (paleta azul marino + dorado)
├── script.js        # Menú mobile, animaciones, formulario
└── images/
    └── hero.png     # Imagen de fondo del hero
```

## Tecnologías

- HTML5
- CSS3 (custom properties, grid, flexbox, animaciones)
- JavaScript (vanilla, sin dependencias)
- Tipografías: Cormorant Garamond + Inter (Google Fonts)

## Personalización rápida

Antes de publicar, reemplazar los siguientes placeholders:

| Placeholder | Dónde | Reemplazar por |
|---|---|---|
| `549XXXXXXXXXX` | `index.html` (5 lugares) | Número de WhatsApp real |
| `contacto@estudiogaleazzo.com` | `index.html` (3 lugares) | Email real |
| `Dirección del estudio` | `index.html` sección `#contacto` | Dirección real |

## Cómo usar

Abrir `index.html` en cualquier navegador moderno. No requiere build ni servidor.

Para desarrollo local con live reload, se puede usar cualquier servidor estático:

```bash
# Con Python
python -m http.server 8000

# Con Node (si tenés http-server instalado)
npx http-server
```

## Secciones

1. Header sticky con menú responsive
2. Hero con imagen de fondo
3. Áreas de práctica (8 tarjetas)
4. Sobre el estudio
5. Por qué elegirnos
6. Proceso de trabajo (4 pasos)
7. CTA destacado
8. Formulario de contacto + información
9. Footer

## Licencia

Uso exclusivo de Estudio Jurídico Galeazzo.
