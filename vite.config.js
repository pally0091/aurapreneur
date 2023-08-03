import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // Use '0.0.0.0' to bind to all available interfaces.
    port: 3000,
  },
  plugins: [react()],
})
