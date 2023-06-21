import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://Luke-McMahon.github.io',
  plugins: [vue()],
});
