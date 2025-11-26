# Testing Navigation Between Sites

## ⚠️ Important: Development vs Production

### In Development (Local)
- **Main site**: `http://localhost:3000`
- **Boot2RootBandits**: `http://localhost:3001` (separate server)
- **The link `/boot2root-bandits` won't work locally** - you need to run both servers

### In Production (Vercel)
- **Main site**: `https://yourdomain.com/`
- **Boot2RootBandits**: `https://yourdomain.com/boot2root-bandits`
- **The link will work perfectly!** ✅

## How to Test Locally

### Method 1: Run Both Servers

**Terminal 1:**
```bash
npm run dev
# Main site at http://localhost:3000
```

**Terminal 2:**
```bash
cd boot2root-bandits
npm run dev
# Boot2RootBandits at http://localhost:3001
```

Then manually open `http://localhost:3001` to see Boot2RootBandits.

### Method 2: Test Production Build

```bash
# Build both sites
npm run vercel-build

# Preview
npm run preview
# Opens http://localhost:4173

# Now navigate to: http://localhost:4173/boot2root-bandits
```

## Verify Build Works

```bash
# Run build
npm run vercel-build

# Check if Boot2RootBandits was built
ls -la dist/boot2root-bandits

# Should see:
# - index.html
# - assets/
```

## Why It Doesn't Work in Dev

In development, Vite runs separate servers:
- Main site: Port 3000
- Boot2RootBandits: Port 3001

When you click `/boot2root-bandits` on the main site (port 3000), it tries to find that route on the same server, but it doesn't exist there.

**Solution:** The routing is configured in `vercel.json` for production. It will work perfectly when deployed!

## Quick Fix for Local Testing

If you want to test navigation locally, you can temporarily change the link in development:

```javascript
// In src/components/Navbar.jsx - for local testing only
const b2rUrl = process.env.NODE_ENV === 'development' 
  ? 'http://localhost:3001' 
  : '/boot2root-bandits'
```

But this is not necessary - **it will work in production on Vercel!**

