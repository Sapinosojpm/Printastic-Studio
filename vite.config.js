import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// ✅ TailwindCSS is configured via postcss.config.js, not here
export default defineConfig({
  plugins: [
    react(),
      tailwindcss(),

  ],
})
