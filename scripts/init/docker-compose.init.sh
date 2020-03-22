#!/bin/sh

# Initialize docker volume
printf "\n$white> Initializing docker containers...$escape\n"
docker volume create --name=pg-knexer

# Initialize docker containers
printf "\n$white> Initializing docker containers...$escape\n"


# pull docker images
docker-compose pull
showResponses $?

# build docker containers
docker-compose build
showResponses $?

printf "\n$white- Docker containers$green pulled $white and$green built $white. Use $blue'docker-compose'$white to interact with them.$escape\n"
