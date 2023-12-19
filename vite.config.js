import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from "vite-plugin-html";
import styleX from "vite-plugin-stylex";

const BASE_PATH = process.env.BASE_PATH;

const base = path.join(...["/", BASE_PATH].filter(Boolean));
const origin = process.env.ORIGIN || base;

export default defineConfig({
  base,
  plugins: [
    react(), 
    styleX(),
    createHtmlPlugin({
      inject: {
        data: {
          title: "Тренды 2024",
          desc: "Итоги 2023 года",
          origin,
          snippetImage: path.join(origin, "img/1200_snippet.png"),
          vkSnippetImage: path.join(origin, "img/1530_snippet.png"),
        },
      },
    }),
  ],
  build: {
    outDir: "build",
  },
});