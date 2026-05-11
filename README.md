# paullorosa.github.io

Portfolio pessoal — site estático, sem build, deploy directo via GitHub Pages.

## Stack

- HTML + CSS + JS puro
- Fonts: Inter + JetBrains Mono (Google Fonts)
- Background: SVG procedural (grelha + glyphs) gerado em runtime
- i18n PT/EN via `data-i18n` + `localStorage`
- Form de contacto via `mailto:` (sem backend)

## Estrutura

```
.
├── index.html
├── _config.yml
├── assets/
│   ├── css/style.css
│   └── js/main.js
└── ficheiros/
    └── NomeTerra.apk
```

## Dev local

Abre `index.html` no browser, ou serve a pasta:

```sh
python -m http.server 8000
```

## Deploy

Push para `main` — GitHub Pages publica em `https://paullorosa.github.io`.
