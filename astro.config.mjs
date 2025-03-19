// @ts-check
// @ts-ignore
import { defineConfig } from 'astro/config';

// @ts-ignore
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jpiedra181.github.io',
  base: "/ToDo-App/",
  vite: {
    plugins: [tailwindcss()]
  }
});