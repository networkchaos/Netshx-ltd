# Debugging Guide - Boot2RootBandits Navigation

## Issue: Can't navigate to Boot2RootBandits website

### Local Development Testing

#### Option 1: Run Both Servers Separately

**Terminal 1 - Main Site:**
```bash
npm run dev
# Runs on http://localhost:3000
```

**Terminal 2 - Boot2RootBandits:**
```bash
cd boot2root-bandits
npm run dev
# Runs on http://localhost:3001
```

Then manually navigate to `http://localhost:3001` to test Boot2RootBandits.

#### Option 2: Test Production Build Locally

```bash
# Build both sites
npm run vercel-build

# Preview main site
npm run preview
# Runs on http://localhost:4173

# In another terminal, test the Boot2RootBandits route
# Navigate to: http://localhost:4173/boot2root-bandits
```

### Common Issues & Fixes

#### 1. 404 Error on `/boot2root-bandits`

**Problem:** The route doesn't exist in development.

**Solution:** 
- In development, Boot2RootBandits runs on port 3001
- In production (Vercel), it's served from `/boot2root-bandits`
- The link will work after deployment to Vercel

#### 2. Assets Not Loading

**Problem:** CSS/JS files return 404.

**Solution:** Check that `base: '/boot2root-bandits/'` is set in `boot2root-bandits/vite.config.js`

#### 3. Build Not Working

**Problem:** `vercel-build` script fails.

**Solution:**
```bash
# Make sure both have node_modules
npm install
cd boot2root-bandits && npm install && cd ..

# Test build
npm run vercel-build

# Check if dist/boot2root-bandits exists
ls -la dist/boot2root-bandits
```

### Testing Before Deployment

1. **Build both sites:**
   ```bash
   npm run vercel-build
   ```

2. **Check build output:**
   ```bash
   # Should see:
   dist/
   ├── index.html          # Main site
   ├── assets/             # Main site assets
   └── boot2root-bandits/  # Boot2RootBandits site
       ├── index.html
       └── assets/
   ```

3. **Test locally with preview:**
   ```bash
   npm run preview
   # Then visit: http://localhost:4173/boot2root-bandits
   ```

### Vercel Deployment Checklist

- [ ] Both sites build successfully (`npm run vercel-build`)
- [ ] `dist/boot2root-bandits/` folder exists with files
- [ ] `vercel.json` is in root directory
- [ ] Links use `/boot2root-bandits` (not `http://...`)
- [ ] Base path is set in `boot2root-bandits/vite.config.js`

### Quick Test Script

```bash
# Test if everything is set up correctly
echo "Testing build..."
npm run vercel-build

echo "Checking dist structure..."
if [ -d "dist/boot2root-bandits" ]; then
  echo "✅ Boot2RootBandits build exists"
  ls -la dist/boot2root-bandits
else
  echo "❌ Boot2RootBandits build missing!"
fi
```

