module.exports = {
  plugins: [
    require('tailwindcss')('./tailwind.config.js'),
    ...(process.env.NODE_ENV === 'production'
      ? [
          require('@fullhuman/postcss-purgecss')({
            content: ['./src/**/*.vue', './public/**/*.html', './index.html'],
            defaultExtractor: content => {
              return content.match(/[a-zA-Z0-9-:_/]+/g) || []
            }
          })
        ]
      : [])
  ]
}