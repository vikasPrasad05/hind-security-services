import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://securityservices.com.au',
  server: {
    port: 4321,
    host: true
  }
});
