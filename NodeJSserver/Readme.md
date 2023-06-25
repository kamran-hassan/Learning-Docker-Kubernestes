# Build The Image 

docker build -t timeserver-image:v1 .

# Running the image as Container

docker run -d -p 90:9090 --name Time_container timeserver-image:v1