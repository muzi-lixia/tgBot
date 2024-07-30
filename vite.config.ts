import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'
import dotenv from 'dotenv'
import path from 'path'

const env = dotenv.config().parsed
const baseUrl = {
    dev: './',
    test: '/terpollyGameBot/',
    prod: '/terpollyGameBot/'
}
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [react(), basicSsl()],
        build: {
            outDir: './docs',
            chunkSizeWarningLimit: 1600,
            assetsInlineLimit: 8192
        },
        base: baseUrl[mode as 'dev' | 'test' | 'prod'],
        define: {
            'process.env': env
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
})
