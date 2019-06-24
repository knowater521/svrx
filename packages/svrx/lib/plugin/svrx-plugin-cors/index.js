const cors = require('koa2-cors');

module.exports = {
  hooks: {
    async onRoute(ctx, next, { config }) {
      const corsConfig = config.get('cors');
      if (corsConfig === false) {
        await next();
        return;
      }

      const corsMiddleware = cors(corsConfig === true ? {} : corsConfig);
      corsMiddleware(ctx, next);
    },
  },
};
