mkdir -p ~/mongodb/M102/hw4/1
mkdir -p ~/mongodb/M102/hw4/2
mkdir -p ~/mongodb/M102/hw4/3

mongod --dbpath ~/mongodb/M102/hw4/1 --port 27001 --smallfiles --oplogSize 50 --logpath ~/mongodb/M102/hw4/1.log --logappend --fork
