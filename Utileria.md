## Configuracion del npx create-next-app@latest ./

TypeScript No
Tailwind Yes
Alias Yes, defeault @
Src No

## Dependencias instaladas

npx create-next-app@latest ./
npm install bcrypt mongodb mongoose next-auth

## Archivos/carpetas necesarias

- Carpetas
  /
  models
  components
  public
  styles

archivos
/
.env

---

- Se copio la carpeta assets dentro de public con los recursos
- Se copio el archivo styles/globals.css con el css y classes de tailwind
- Se modificaron algunos styles porque no aparecian

- se modifico el jsconfig.json para el alias import:
  {
  "compilerOptions": {
  "paths": {
  "@_": ["./_"]
  }
  }
  }

---

- Se modifico el archivo tailwind.config.js

/** @type {import('tailwindcss').Config} \*/
module.exports = {
content: [
'./pages/**/_.{js,ts,jsx,tsx,mdx}',
'./components/\*\*/_.{js,ts,jsx,tsx,mdx}',
'./app/\*_/_.{js,ts,jsx,tsx,mdx}',
],
theme: {
extend: {
fontFamily: {
satoshi: ['Satoshi', 'sans-serif'],
inter: ['Inter', 'sans-serif'],
},
colors: {
'primary-orange': '#FF5722',
}
},
},
plugins: [],
}

---

- Componentes:

Se importaron en el index de la carpeta components y se exportaron todos juntos para ser llamados asi import {...} from "@components":

import Feed from "@components/Feed"
import Form from "@components/Form"
import Nav from "@components/Nav"
import Profile from "@components/Profile"
import PromptCard from "@components/PromptCard"
import Provider from "@components/Provider"

export { Feed, Form, Profile, PromptCard, Nav, Provider }
