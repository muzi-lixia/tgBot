import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default {
    plugins: [react(), basicSsl()],
    build: {
        outDir: './docs',
        chunkSizeWarningLimit: 1600,
        assetsInlineLimit: 8192
    }
}
