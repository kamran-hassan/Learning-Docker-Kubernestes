Running an Nginx Container

Pull and Run Nginx server

docker run -d -p 8080:80 --name webserver nginx

List the container

docker ps

Attaching to container 

docker container exec -it webserver bash

Stopping container

docker stop webserver

remove from memory [ to ensure if it is there docker ps -a]

docker rm webser

See list of image 

docker images

# Build Docker Image 

Dockerfile is file consist of the process required to build and image
for Example 
FROM nginx:alpine
COPY . /usr/share/nginx/html

# Build 

docker build -t webserver-image:v1 . [. is the location for docker file]
