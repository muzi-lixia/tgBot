import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react(), basicSsl()],
    build: {
        outDir: './docs',
        chunkSizeWarningLimit: 1600
    },
    base: '/bot/',
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
})
