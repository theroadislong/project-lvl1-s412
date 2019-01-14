install: 
				npm i --save-dev @babel/core  @babel/cli @babel/node @babel/preset-env readline-sync

start: 
				npx babel-node -- src/bin/brain-games.js

publish:
				npm prepublishOnly