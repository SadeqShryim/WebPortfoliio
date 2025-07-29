export default {
  plugins: {
    '@tailwindcss/postcss': {},  // ← use the PostCSS‐only Tailwind plugin
    autoprefixer: {}             // ← no need to import it, just reference by name
  }
}