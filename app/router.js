/**
 * 路由
 */

module.exports = (app) => {
  app.get('/', 'home.index');
  app.post('/api/upload', 'api.upload');
};
