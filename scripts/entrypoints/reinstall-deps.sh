# !/bin/bash
# reinstall project dependencies

cd /home/node/app;

echo ===== [1/3] remove dependencies;
rm -rf node_modules;
rm -rf package-lock.json;

echo ===== [2/3] install dependencies;
npm install;

echo ===== [3/3] audit dependencies;
npm audit fix;
