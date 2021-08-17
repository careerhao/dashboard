module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins: [
    [
      "component",
      {
        // Based on the requirements to import element-ui components
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ],
  ]
}
