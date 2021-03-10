// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  optimize: {
    minify: isProd
  },
  mount: {
    "src": "/"
  },
  plugins: [
    [
      '@snowpack/plugin-sass',
      {
        style: isDev ? "expanded" : "compressed",
        sourceMap: false,
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    watch: isDev,
    clean: true,
    sourcemap: isDev,
    out: "./dist/"
  },
};
