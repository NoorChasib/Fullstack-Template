import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config();
const frontendHost = process.env.FRONTEND_HOST;
const frontendPort = Number(process.env.FRONTEND_PORT);
const backendUrl = process.env.BACKEND_URL;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: frontendHost,
    port: frontendPort,
    proxy: {
      '/api': {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
