import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist"  // Указывает, что билд идёт в папку dist (можно изменить)
  },
  server: {
    port: 5173,
  },
});
