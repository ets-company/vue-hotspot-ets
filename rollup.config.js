/**
 * @file rollup.config.js
 * @author James Wang <github.com/cn-wx>
 */

const vue = require('rollup-plugin-vue')
const buble = require('rollup-plugin-buble')
const { terser } = require('rollup-plugin-terser')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const url = require('rollup-plugin-url')

export default {
  input: 'src/components/VueHotspotEts.vue',
  output: {
    file: 'dist/vue-hotspot-ets.js',
    name: 'VueHotspotEts',
    format: 'umd',
    globals: {
      'vue': 'Vue',
      '@vue/composition-api': 'VueCompositionApi'
    }
  },
  external: [
    'vue',
    '@vue/composition-api'
  ],
  plugins: [
    url({
      limit: 10 * 1024, // inline files < 10k, copy files > 10k
      include: ["**/*.png"], // defaults to .svg, .png, .jpg and .gif files
      emitFiles: true // defaults to true
    }),
    resolve(),
    commonjs(),
    vue({
      compileTemplate: true,
      css: true
    }),
    buble({
      objectAssign: 'Object.assign'
    }),
    terser({
      compress: {
        global_defs: {
          __DEV__: process.env.NODE_ENV !== 'production'
        }
      }
    })
  ]
}
