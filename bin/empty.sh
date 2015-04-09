#!/bin/bash

if [ $NODE_ENV == testing ];then
  echo "clearing test db"
  mongo door_of_clubs_testing --eval "db.dropDatabase()";

elif [ $NODE_ENV == development ];then
  echo "clearing development db"
  mongo door_of_clubs --eval "db.dropDatabase()";

fi
