#!/bin/bash

if [ $NODE_ENV == testing ];then
  echo "clearing test db"
  mongo node_starter_testing --eval "db.dropDatabase()";

elif [ $NODE_ENV == development ];then
  echo "clearing development db"
  mongo node_starter --eval "db.dropDatabase()";

fi
