install:
	cd server && npm i && cd - && npm i
clear:
	pm2 delete cms-app
start:
	nf start
default: start
