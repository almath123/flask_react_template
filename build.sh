#! /bin/sh
npm run build
sudo docker build -t flask-react .
