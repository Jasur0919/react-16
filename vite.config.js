import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {find: "@", replacement: "/src/*"},
      {find: "@page", replacement: "/src/page/index.jsx"},
      {find: "@modal", replacement: "/src/components/modal/index.jsx"},
      {find: "@service", replacement: "/src/service/index.js"},
      {find: "@service", replacement: "/src/service/auth.js"}
      
    ]
  }
})
