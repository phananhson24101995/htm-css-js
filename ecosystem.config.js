module.exports = {
  apps : [{
    name: "React Vite",
    script: "serve",
    env: {
      PM2_SERVE_PATH: '.',
      PM2_SERVE_PORT: 8080
    }
  }]
}
