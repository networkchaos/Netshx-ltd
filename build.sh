#!/bin/bash

# Build script for Vercel deployment
echo "Building main NETSHX website..."
npm install
npm run build

echo "Building Boot2RootBandits website..."
cd boot2root-bandits
npm install
npm run build
cd ..

echo "Copying Boot2RootBandits build to main dist..."
mkdir -p dist/boot2root-bandits
cp -r boot2root-bandits/dist/* dist/boot2root-bandits/

echo "Build complete!"

