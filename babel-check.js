const babel = require('@babel/core');
const fs = require('fs');

const code = fs.readFileSync('./App.js', 'utf8');
const result = babel.transformSync(code, {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['@babel/plugin-syntax-jsx'],
});

console.log(result.code);
