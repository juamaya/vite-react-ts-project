# Proyecto: 
## Vite + React + TypeScript + Tailwindcss
  [VITE JS](https://vite.dev/guide/) 
   
   ![VITE JS](./public/favicon.svg )    ![REACT JS](./src/assets/react.svg ) 

  [TAILWINDCSS](https://tailwindcss.com/docs/installation/using-vite)  

 

 
 

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```

You can also install [eslint-plugin-react-x](https://npmx.dev/package/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://npmx.dev/package/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```


# Publicarlo en github pages


Para publicar tu proyecto React + TypeScript + Vite + Tailwind CSS en GitHub Pages, puedes hacerlo gratuitamente y conseguir una dirección pública como:

https://TU_USUARIO.github.io/vite-react-ts-project/

## Te explico cómo hacerlo paso a paso desde VS Code o la terminal de Windows.

1. > ### Sube tu proyecto a GitHub
    - Primero, crea un repositorio en GitHub:

    - Entra en GitHub – New repository .

    - Nombre: vite-react-ts-project.

    - Selecciona Public.

    - Pulsa Create repository.

    - Después, abre la terminal en la carpeta de tu proyecto y ejecuta: 


 ```bash
git init
git add .
git commit -m "Primer commit"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/vite-react-ts-project.git
git push -u origin main
 
 ```   
Sustituye TU_USUARIO por tu nombre de usuario de GitHub.



2. > ### Configura Vite
   - Abre el archivo vite.config.ts.

   - Debes añadir la propiedad base con el nombre de tu repositorio:

```ts

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vite-react-ts-project/',
})

```

Importante: el valor de base debe coincidir exactamente con el nombre de tu repositorio.

3. > ### Crea el workflow de GitHub Actions
   - Esta parte es la que permite que GitHub compile y publique automáticamente tu proyecto.

   - En la raíz del proyecto crea esta estructura:

```text

vite-react-ts-project/
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── public/
├── src/
├── package.json
├── package-lock.json
├── vite.config.ts
└── index.html

```

  - Abre deploy.yml y pega lo siguiente:


```yml

name: Deploy React App to GitHub Pages

on:
  push:
    branches:
      - main

  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}

    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

Este workflow hará lo siguiente:

    - Detectará cuando subas cambios a main.

    - Instalará las dependencias.

    - Ejecutará npm run build.

    - Generará la carpeta dist.

    - Publicará automáticamente la web.


4. > ### Activa GitHub Pages

    - Entra en tu repositorio de GitHub:

    - Abre Settings.

    - En el menú lateral selecciona Pages.

    - Busca Build and deployment.

    - En Source selecciona GitHub Actions.


5. > ### Publica tu proyecto
   - Vuelve a la terminal de VS Code y ejecuta:


```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```
   - Ahora entra en tu repositorio y abre la pestaña Actions.
   - Verás el proceso de publicación. Cuando aparezca el indicador verde, tu web estará publicada.

6. > ## Importante: React Router y los errores 404 

   - Como tu proyecto utiliza react-router-dom, hay un detalle importante: GitHub Pages no gestiona automáticamente las rutas de React cuando alguien actualiza una página como /servicios.

   - Para evitarlo, te recomiendo utilizar HashRouter.

   - En tu App.tsx, cambia:

```tsx
import { BrowserRouter } from "react-router-dom";
```
Por:


```tsx
import { HashRouter } from "react-router-dom";
```
Y sustituye el componente:


```tsx
<HashRouter>
  <div className="min-h-screen bg-slate-950 text-white">
    <Navbar />
    <main className="min-h-screen pt-24">
      <AnimatedRoutes />
    </main>
    <Footer />
  </div>
</HashRouter>
```
> Tus direcciones quedarán así:

   - Inicio: https://TU_USUARIO.github.io/vite-react-ts-project/#/

   - Servicios: https://TU_USUARIO.github.io/vite-react-ts-project/#/servicios

   - Proyectos: https://TU_USUARIO.github.io/vite-react-ts-project/#/proyectos

Así evitarás los errores 404 al actualizar las páginas.