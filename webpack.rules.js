module.exports = [
  // 注：项目当前无原生（.node）依赖，已移除 asset-relocator-loader，
  // 因为它会在 bundle 中注入 __dirname（沙盒 preload 中不可用）。
  // 将来引入原生模块时，需重新加回：
  //   {
  //     test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
  //     parser: { amd: false },
  //     use: {
  //       loader: '@vercel/webpack-asset-relocator-loader',
  //       options: { outputAssetBase: 'native_modules' },
  //     },
  //   }
  // React JSX 编译（babel）
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: [
          // modules: 'commonjs' 兼容 package.json 的 "type": "commonjs"
          ['@babel/preset-env', { modules: 'commonjs' }],
          '@babel/preset-react',
        ],
      },
    },
  },
  // Put your webpack loader rules in this array.  This is where you would put
  // your ts-loader configuration for instance:
  /**
   * Typescript Example:
   *
   * {
   *   test: /\.tsx?$/,
   *   exclude: /(node_modules|.webpack)/,
   *   loaders: [{
   *     loader: 'ts-loader',
   *     options: {
   *       transpileOnly: true
   *     }
   *   }]
   * }
   */
];
