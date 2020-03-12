const { createProxyMiddleware } = require('http-proxy-middleware');

const GITHUB_API_PREFIX = 'api.github';

module.exports = function(app) {
  app.use(
    `/${GITHUB_API_PREFIX}`,
    createProxyMiddleware({
      target: 'https://api.github.com',
      changeOrigin: true,
      pathRewrite: {
        [`^/${GITHUB_API_PREFIX}`]: '/'
      }
    })
  )
};
