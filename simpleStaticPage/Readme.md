# Build Image 

docker build -t webserver-image:v1 .

# Run 

docker run -d -p 8080:80 --name mycontainer webserver-image:v1