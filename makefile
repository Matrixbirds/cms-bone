clear:
	pm2 delete cms-app
start:
	nf start
default: start
