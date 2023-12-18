import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleX from "vite-plugin-stylex";
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [react(), styleX(),svgLoader()],
});