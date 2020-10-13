#!/bin/bash

read -p 'NODE_ENV: ' NODE_ENV
read -p 'USER: ' USER
read -p 'HOST: ' HOST
read -sp 'PASSWORD: ' PASSWORD
read -p 'DATABASE: ' DATABASE

# read -p 'AWS_ACCESS_KEY: ' AWS_ACCESS_KEY
# read -sp 'AWS_SECRET_KEY: ' AWS_SECRET_KEY
# read -p 'S3_BUCKET: ' S3_BUCKET

echo NODE_ENV=\"$NODE_ENV\" > .env
echo USER=\"$USER\" >> .env 
echo HOST=\"$HOST\" >> .env
echo PASSWORD=\"$PASSWORD\" >> .env 
echo DATABASE=\"$DATABASE\" >> .env

# echo AWS_ACCESS_KEY=\"$AWS_ACCESS_KEY\" >> .env
# echo AWS_SECRET_KEY=\"$AWS_SECRET_KEY\" >> .env
# echo S3_BUCKET=\"$S3_BUCKET\" >> .env