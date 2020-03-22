#!/bin/sh

GREEN='\033[0;32m'
NC='\033[0m'

info () {
    printf "${GREEN}${1}${NC}...\n"
}

set -e

info 'init database'
yarn seed:run
