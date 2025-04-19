
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { componentTagger } from "lovable-tagger"

export default defineConfig(({ mode }) => ({
  plugins: [
    react({
      include: "**/*.{jsx,tsx}",
    }),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  css: {
    postcss: './postcss.config.cjs',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    host: "::",
    port: 8080,
  }
}))
