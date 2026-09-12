# Eugenio Gallegos Electricidad - Sitio Web Oficial

Sitio web corporativo de alta conversión para **Eugenio Gallegos Electricidad**, Instalador Eléctrico Autorizado (Nº 48/CCBT/-6418) con sede en Barakaldo y cobertura en Gran Bilbao y Bizkaia.

---

## 🚀 Despliegue en Vercel (Recomendado)

1. Sube este repositorio a tu cuenta de **GitHub**.
2. Entra en [vercel.com](https://vercel.com) e inicia sesión con tu cuenta de GitHub.
3. Haz clic en **"Add New..."** > **"Project"** y selecciona este repositorio.
4. Vercel detectará automáticamente la configuración gracias al archivo `vercel.json`:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Haz clic en **Deploy**. ¡Tu web estará online con certificado SSL gratuito y dominio `.vercel.app` en menos de 1 minuto!

---

## 🐙 Despliegue en GitHub Pages

El proyecto ya incluye la configuración automática mediante **GitHub Actions** (`.github/workflows/deploy.yml`) y rutas relativas (`base: './'`).

1. Sube tu código a un repositorio en **GitHub**.
2. En tu repositorio, entra en la pestaña **Settings** (Configuración) > **Pages** (en el menú lateral izquierdo).
3. En la sección **Build and deployment**:
   - En **Source**, selecciona **GitHub Actions**.
4. Haz cualquier `push` a la rama `main` o ejecuta el workflow manualmente desde la pestaña **Actions**.
5. GitHub Actions construirá el proyecto y lo publicará automáticamente en `https://<tu-usuario>.github.io/<tu-repositorio>/`.

---

## 🛠️ Tecnologías Utilizadas

- **React 19** con TypeScript
- **Vite 6** con empaquetado optimizado
- **Tailwind CSS v4**
- **Lucide React** (iconos SVG optimizados)
- **Motion** (animaciones fluidas)
- **FormSubmit AJAX** para recepción directa de consultas en el email de la empresa

---

## 💻 Desarrollo Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Previsualizar compilación local
npm run preview
```
