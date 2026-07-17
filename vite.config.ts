import vikeSolid from "vike-solid/vite";
import vike from "vike/plugin";
import { defineConfig } from "vite";
import tailwindcss from '@tailwindcss/vite';
import type { Plugin } from "vite";

const admin = (): Plugin => ({
  name: 'serve-admin',
  configureServer: server => {
    server.middlewares.use((req, _res, next) => {
      const pathname = req.url?.split('?')[0];

      if (pathname === '/admin' || pathname === '/admin/') {
        req.url = '/admin/index.html';
      }

      next()
    })
  }
});

export default defineConfig({
  plugins: [admin(), vike(), vikeSolid(), tailwindcss()],
});
