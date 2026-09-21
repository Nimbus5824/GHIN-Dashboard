import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  plugins: [react(), vuetify({ autoImport: true })],
})
