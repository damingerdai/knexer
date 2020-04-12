#!/bin/sh

start_time=$SECONDS # Start the timer
SCRIPT_DIR=$(pwd)/scripts/init

. $SCRIPT_DIR/vars.sh
. $SCRIPT_DIR/dep.check.sh
. $SCRIPT_DIR/docker-compose.init.sh
. $SCRIPT_DIR/db.init.sh

# Nothing went wrong, exit cleanly
elapsed_time=$(($SECONDS - $start_time)) # Calculate how long the script took
printf "$white\nDocker Init was completed$green successfully$white in $blue$elapsed_time seconds$white!$escape\n"
exit 0
