# Docker Volumes

Usually we don't store data in the docker so we prefer saving it in a store inside vitual machine even volume can be connected to the Main machine file system but it is not prefered at the time of production

# Creating a Volume

docker volume create myvol

# list the volums 

docker volume ls

# Run an enginx container that will use a volume

docker run -d --name voltest -v myvol:/app nginx:latest

# Connect to instance 

docker exec -it voltest bash

root@16124082cd79:/# ls
app  bin  boot  dev  docker-entrypoint.d  docker-entrypoint.sh  etc  home  lib  lib32  lib64  libx32  media  mnt  opt  proc  root  run 
sbin  srv  sys   tmp  usr  var

app - shown is volum connected.

create a file inside app 

# Exit and stop and Remove it from the memory.

docker stop voltest 

docker rm voltest

# create a new one 

docker run -d --name voltest2 -v myvol:/app nginx:latest

Now we can to app folder and we can see the volume Data