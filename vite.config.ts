import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@widgets': path.resolve(__dirname, './src/widgets'),
      '@images': path.resolve(__dirname, './src/app/assets/images'),
      '@hooks': path.resolve(__dirname, './src/shared/hooks'),
      '@types': path.resolve(__dirname, './src/shared/types'),
      '@ui': path.resolve(__dirname, './src/shared/ui'),
      '@fonts': path.resolve(__dirname, './src/app/assets/fonts'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name?.split('.').at(1) as string;
          if (/css/i.test(extType)) {
            return `[name]-[hash][extname]`;
          } else if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            return `assets/images/[name]-[hash][extname]`;
          } else if (/woff(2)?|eot|ttf|otf/i.test(extType)) {
            return `assets/fonts/[name]-[hash][extname]`;
          } else {
            return `assets/[name]-[hash][extname]`;
          }
        },
        chunkFileNames: '[name]-[hash].js',
        entryFileNames: '[name]-[hash].js',
      },
    },
  },
  assetsInclude: ['**/*.jpg'],
  base: './',
});
