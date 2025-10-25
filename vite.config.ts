import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'   // <-- add this
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),          // <-- required for .jsx/.tsx support
    tailwindcss(),
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],  // <-- ensures .tsx is resolved
    alias: {
      '@': path.resolve(__dirname, './src'),      // optional, if using @ for imports
    },
  },
})
