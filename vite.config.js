import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import ViteRSW from 'vite-plugin-rsw';
import UnoCSS from 'unocss/vite';

export default defineConfig({
  plugins: [
    vue({ reactivityTransform: true }),
    ViteRSW(),
    UnoCSS()
  ],
});
