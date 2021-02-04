# !/bin/bash

SCOPE=$1
ACTION=$2
PORT=${3:-3000}

if test $SCOPE = common; then
  echo Error: this script is not fit for common scope;
  exit -1;
fi

if test ! -d ./scopes/$SCOPE; then
  echo there is no scope \"$SCOPE\";
  exit -1;
fi

if test -e ./scopes/$SCOPE/configs/docker-compose.develop.yml; then
  CONFIG_PATH="./scopes/$SCOPE/configs/docker-compose.develop.yml"
else
  CONFIG_PATH="./configs/docker-compose.develop.yml"
fi

SCOPE=$SCOPE \
ACTION=$ACTION \
PORT=$PORT \
docker-compose \
  -p chatra-test_$1 \
  -f $CONFIG_PATH \
  up;
