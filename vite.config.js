import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: '0.0.0.0',     // allow external access (DevTunnel/ngrok)
    port: 5173,           // your local port
    strictPort: true,     // ensures this port is used, else fail
  },
})
