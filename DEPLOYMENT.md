# Deployment Guide for NETSHX LTD + Boot2RootBandits

This guide explains how to deploy both websites together on Vercel.

## Project Structure

```
.
├── src/                    # Main NETSHX LTD website
├── boot2root-bandits/     # Boot2RootBandits subdomain website
├── vercel.json            # Vercel configuration
└── package.json           # Main package.json
```

## Deployment Steps

### 1. Install Dependencies

```bash
# Install main site dependencies
npm install

# Install Boot2RootBandits dependencies
cd boot2root-bandits
npm install
cd ..
```

### 2. Build Both Sites

```bash
# Build main site
npm run build

# Build Boot2RootBandits site
cd boot2root-bandits
npm run build
cd ..
```

Or use the combined build command:
```bash
npm run build:all
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI

```bash
# Install Vercel CLI if not installed
npm i -g vercel

# Deploy
vercel
```

#### Option B: Using GitHub Integration

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will automatically detect the configuration

### 4. Vercel Configuration

The `vercel.json` file is already configured to:
- Build both sites separately
- Route `/boot2root-bandits` to the Boot2RootBandits site
- Serve the main site at the root `/`

## URL Structure

After deployment:
- **Main Site**: `https://yourdomain.com/`
- **Boot2RootBandits**: `https://yourdomain.com/boot2root-bandits`

## Alternative: Subdomain Setup

If you prefer a subdomain (e.g., `boot2root.yourdomain.com`):

1. Create a separate Vercel project for Boot2RootBandits
2. Configure the subdomain in Vercel project settings
3. Update links in both sites to use the subdomain URL

## Troubleshooting

### Links Not Working

If links between sites don't work:
- Check that both sites are built correctly
- Verify `vercel.json` routing configuration
- Ensure base paths are correct in `vite.config.js`

### Build Errors

- Make sure all dependencies are installed in both directories
- Check that both `package.json` files have correct build scripts
- Verify Node.js version compatibility (Vercel uses Node 18+ by default)

## Development

### Run Main Site
```bash
npm run dev
# Runs on http://localhost:3000
```

### Run Boot2RootBandits Site
```bash
cd boot2root-bandits
npm run dev
# Runs on http://localhost:3001
```

## Notes

- Both sites share the same domain but are separate React applications
- The Boot2RootBandits site uses base path `/boot2root-bandits/` for routing
- All internal links are relative paths that work in production

