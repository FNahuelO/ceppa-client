import React from 'react'
import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    port: 3001,
  },
  plugins: [React()],
})
