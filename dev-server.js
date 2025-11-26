// Simple development server to test both sites locally
import express from 'express'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import { createServer as createViteServer } from 'vite'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function createServer() {
  const app = express()

  // Create Vite server for main site
  const mainVite = await createViteServer({
    server: { middlewareMode: true },
    root: __dirname,
    appType: 'spa'
  })
  app.use(mainVite.ssrLoadModule)

  // Create Vite server for Boot2RootBandits
  const b2rVite = await createViteServer({
    server: { middlewareMode: true },
    root: join(__dirname, 'boot2root-bandits'),
    appType: 'spa',
    base: '/boot2root-bandits/'
  })

  // Serve Boot2RootBandits
  app.use('/boot2root-bandits', b2rVite.middlewares)

  // Serve main site
  app.use(mainVite.middlewares)

  app.listen(3000, () => {
    console.log('🚀 Server running at http://localhost:3000')
    console.log('📱 Main site: http://localhost:3000')
    console.log('🎯 Boot2RootBandits: http://localhost:3000/boot2root-bandits')
  })
}

createServer().catch(console.error)

