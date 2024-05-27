module.exports = {
    apps : [{
      name   : "sky.trade.radar",
      script: 'dist/src/main.js',
      autorestart: true,
      watch: false,
      max_memory_restart: '350M',
      env_dev: {
        NODE_ENV: "development"
      },
      env_prod: {
        NODE_ENV: "production"
      }
    }]
  }