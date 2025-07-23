import { defineConfig } from 'vite'
import tailwindcss from "@tailwindcss/vite";
import react from '@vitejs/plugin-react'
import { VitePWA } from "vite-plugin-pwa";


const manifestForPlugIn = {
  registerType:'prompt',
  includeAssests:['favicon.ico', "apple-touc-icon.png", "masked-icon.svg"],
  manifest:{
    name:"Note-App-React",
    short_name:"note-app-react",
    description:"app for creating new notes...",
    icons:[{
      src: '/src/assets/icons/favicon-16x16.png',
      sizes:'192x192',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/src/assets/icons/favicon-32x32.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'favicon'
    },
    {
      src: '/src/assets/icons/apple-touch-icon.png',
      sizes:'180x180',
      type:'image/png',
      purpose:'apple touch icon',
    },
    {
      src: '/src/assets/icons/favicon-16x16.png',
      sizes:'512x512',
      type:'image/png',
      purpose:'any maskable',
    }
  ],
  theme_color:'#432DD7',
  background_color:'#EBEBED',
  display:"standalone",
  scope:'/',
  start_url:"/",
  orientation:'portrait'
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA(manifestForPlugIn)
  ],
    test: {
    globals : true ,
    environment: 'jsdom',
    setupFiles: ['./src/tests/setup.js'],
  },
})