#!/bin/sh

checkDependancies() {
  printf "$white> Checking dependancies...\n$escape"
	printf "Checking that $blue'docker'$escape is installed..."
  docker -v &> /dev/null
  showResponses $?

  printf "$escape"
  printf "Checking that $blue'docker-compose'$escape is installed..."
  docker-compose -v &> /dev/null
  showResponses $?
}

# Ensure commands are available
checkDependancies
