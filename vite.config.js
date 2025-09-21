import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/R_Praneeth_Portfolio/',  // ✅ must match your GitHub repo name
})
