install: 
				npm i --save-dev @babel/core  @babel/cli @babel/node @babel/preset-env

start: 
				npx babel-node -- src/bin/brain-games.js
