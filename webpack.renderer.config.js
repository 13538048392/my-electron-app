const rules = require('./webpack.rules');

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

module.exports = {
  // Put your normal webpack config below here
  // 使用非 eval 的 source map：webpack 开发模式默认 devtool 为 'eval'，
  // 会被 index.html 的 CSP (script-src 'self') 拦截导致白屏
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: {
    rules,
  },
};
