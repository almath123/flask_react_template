#! /bin/sh
npm run build
sudo docker build --rm -t flask-react -f ./docker/Dockerfile .
