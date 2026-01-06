import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "hooks": path.resolve(__dirname, "./src/hooks"),
      "servicios": path.resolve(__dirname, "./src/servicios"),
      "utilidades": path.resolve(__dirname, "./src/utilidades"),
      "componentes": path.resolve(__dirname, "./src/componentes"),
      "assets": path.resolve(__dirname, "./src/assets"),
    }
  }
})
