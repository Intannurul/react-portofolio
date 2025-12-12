import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ← ini penting!

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // ← ini juga penting!
  ],
});
