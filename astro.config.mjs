import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: 'https://renderart.github.io',
  base: '/renderart/',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
});
