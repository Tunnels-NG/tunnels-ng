import { existsSync, readFileSync } from "node:fs";
import path from "path";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { componentTagger } from "lovable-tagger";

/**
 * `vite preview` falls back to `dist/index.html` for clean URLs like `/about`
 * before noticing `dist/about/index.html`. Production hosts resolve the
 * directory index first, so serve it here too and keep local checks honest.
 * Build and dev are unaffected.
 */
const prerenderedPages = (): Plugin => ({
  name: "prerendered-pages",
  configurePreviewServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.method !== "GET" && req.method !== "HEAD") return next();

      const pathname = decodeURIComponent((req.url || "/").split("?")[0]);
      if (pathname === "/" || !/^\/[^.]*[^/]$/.test(pathname)) return next();

      const file = path.join(__dirname, "dist", pathname.slice(1), "index.html");
      if (!existsSync(file)) return next();

      res.setHeader("Content-Type", "text/html; charset=utf-8");
      res.end(req.method === "HEAD" ? undefined : readFileSync(file));
    });
  },
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    prerenderedPages(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
