import resolve from '@rollup/plugin-node-resolve';

export default {
  input: './lib/index.js',
  output: {
    file: './lib/fastdev-tool.umd.js',
    format: 'umd',
    name: 'fastdev-tool',
    exports: 'named',
  },
  external: ['vue', 'vue-class-component', 'ant-design-vue'],
  plugins:[
      resolve(),
  ]
}
