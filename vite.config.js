import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contacto: resolve(__dirname, 'contacto.html'),
                oficinas: resolve(__dirname, 'limpieza-oficinas.html'),
                hogar: resolve(__dirname, 'limpieza-hogar.html'),
                edificios: resolve(__dirname, 'limpieza-edificios.html'),
                pre_entrega: resolve(__dirname, 'pre-entrega.html'),
                sanitizacion: resolve(__dirname, 'sanitizacion.html'),
                reemplazo: resolve(__dirname, 'reemplazo-personal.html'),
                gracias: resolve(__dirname, 'gracias.html'),
            },
        },
    },
});
