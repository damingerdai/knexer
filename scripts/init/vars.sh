#!/bin/sh

# Define variables for script
PROJECT_ROOT=$(pwd)

#get args
if [ "$1" = "--screen" ]; then
  no_screen=false
else
  no_screen=true
fi

#color codes, ALWAYS END WITH ESCAPE
red='\x1B[0;31m'
green='\x1B[0;32m'
blue='\x1B[0;34m'
white='\x1B[0;37m'
escape='\x1B[0m'

#show responses for commands
showResponses() {
  #check if it exited cleanly or threw errors
  if [[ "$1" -eq 0 ]]; then
    printf "$green done $escape \n"
  else
    printf "$red failed $escape \n"
    #something went wrong, exit with error
    exit 1
  fi
}

# Stop the script moving forward if we hit an error
set -e
