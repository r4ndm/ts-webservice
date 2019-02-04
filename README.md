# ts-webservice
Webservice, typescript, node, express

Starter pack for webservices with node, typescript

Steps to build from scratch:
   * git setup, clone etc.
   * create .gitignore
   * node, npm is installed
   * mkdir <dir>; cd <dir>
   * npm init -y
   * npm install --save-dev typescript 
      * vscode has typescript or may be globally installed
      * if you have typescript globally installed, tslint local will complain about missing typescript
         * either install both globall or both locally, or set NODE_PATH to /usr/lib/node_modules
   * npm install tslint --save-dev
   * npm install express
   * npm install --save-dev @types/node @types/express
   * tsc --init
      * update tsconfig.json
      * add include and exclude sections
   * update package.json to:
      * add main pointing to dist/index.js
      * scripts for build, run, lint
   * mkdir src and create index.ts
   * npm run build
   * npm start

