/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./*.html", "./html/*.html",
  "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [[
  require("tw-elements/dist/plugin.cjs"),
  require('flowbite/plugin')
  ]],
}

