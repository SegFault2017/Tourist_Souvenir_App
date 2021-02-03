const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/analyze",
    createProxyMiddleware({
      target: `http://backend:1337`,
      changeOrigin: true,
    })
  );
};
