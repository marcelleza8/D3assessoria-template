// https://stackoverflow.com/questions/66389043/how-can-i-use-vite-env-variables-in-vite-config-js
import { resolve } from "path";
import handlebars from "vite-plugin-handlebars";
import { defineConfig, loadEnv } from "vite";

import PageData from "./src/data";

const pageData = PageData;

const root = resolve(__dirname, "src");
const partialDirectory = resolve(root, "partials");
const outDir = resolve(__dirname, "dist");

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    root,
    server: {
      host: true,
      port: 8080,
    },
    build: {
      outDir,
      emptyOutDir: true,
      rollupOptions: {
        input: {
          main: resolve(root, "index.html"),
          about: resolve(root, "about", "index.html"),
        },
      },
    },
    plugins: [
      handlebars({
        partialDirectory,
        context(pagePath) {
          return { ...pageData.pages[pagePath], ...pageData.extra };
        },
        helpers: {
          or: (v1, v2) => v1 || v2,
          isTrue: (v) => {
            console.log(v);
            return v !== undefined && v;
          },
          isActiveOrUndefined: (value) => value === undefined || value,
        },
      }),
    ],
    css: {
      postcss: "./postcss.config.js",
    },
    base: process.env.VITE_BASE_URL,
  });
};

console.log(import.meta.env);
