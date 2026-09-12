import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev
export default defineConfig({
  base: '/EugeGallegosElectricidad/', // <-- Asegúrate de escribirlo exactamente igual que tu repositorio
  plugins: [react()],
})
