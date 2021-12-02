const tailwindcss = require('tailwindcss')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/vue3',
  plugins: [
    require('postcss-import')(),
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
  ],
}
