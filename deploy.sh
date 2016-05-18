#!/bin/bash

# Create /dist folder
mkdir dist

# Copy index.html into /dist
cp index.html dist

# Copy styles.css into /dist
cp styles.css dist

# Copy bundle.js into /dist
cp bundle.js dist

# Copy kitty.png into /dist
cp kitty.png dist

aws s3 cp dist s3://memory-game-react/dist --recursive

# Delete /dist folder
rm -rf dist