import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  base: '/EugeGallegosElectricidad/', // <-- Asegúrate de que este sea el nombre exacto de tu repositorio en GitHub, respetando mayúsculas y minúsculas
  plugins: [react()],
})
