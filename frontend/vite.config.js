import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    // Usamos una ruta relativa directa sin __dirname, compatible con módulos ES
    setupFiles: "src/setupTests.js", 
    globals: true,
    css: false,
    mockReset: true,
    restoreMocks: true,
    clearMocks: true,
  }
})