module.exports = {
  apps: [
    {
      name: "navaksh-hr",
      cwd: "/root/navaksh-hr",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "production",
        PORT: 7011
      },
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "800M",
      error_file: "/root/.pm2/logs/navaksh-hr-error.log",
      out_file: "/root/.pm2/logs/navaksh-hr-out.log",
      log_date_format: "DD/MM/YYYY HH:mm:ss"
    }
  ]
};
