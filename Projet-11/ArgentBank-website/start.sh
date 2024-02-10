#!/bin/bash

sudo mongod &
yarn run dev:server &
cd frontend/ &
yarn start &


