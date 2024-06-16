import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Directory di output per i file buildati
    assetsDir: '', // Percorso relativo alla radice del progetto
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias per importare file relativi alla cartella src
    },
  },
  server: {
    open: true, // Apri il browser automaticamente
    port: 3000, // Porta del server locale
  },
});
