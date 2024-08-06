const { createProxyMiddleware } = require('http-proxy-middleware');
 
module.exports = function(app) {
  app.use(
    '/api', // Ruta que deseas redirigir
    createProxyMiddleware({
      target: 'http://localhost:4700', // URL del servidor externo
      changeOrigin: true,
    })
  );
};