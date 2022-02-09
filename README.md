# Command executor

This repo contains a simple project that lets people execute shell commands remotely on the server using a simple rest endpoint.

Every executed command and the answer returned by the entered command is stored in MongoDB witch timestamps.

## How to run this project?
Change the name of "executer-mongo.env-template" to "executer-mongo.env" and setup your mongo credensials e.t.c in that file. Then follow one of two launch paths.
### First
Run your local mongo server and then type following commands:
``` bash
npm install --only=development
npm install -g @nestjs/cli
```
Next set in NODE_ENV to development and then run:
``` bash
node dist/main
```
### Second
Just run the command:
``` bash
docker-compose up
``` 
And that's it! If docker container is had some echoes to build then build it by yourself using 
``` bash
docker build -t executor .
```