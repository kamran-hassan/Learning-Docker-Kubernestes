# Docker Compose [ Multi Container Application ]

Sometimes we may have multiple containers runnning. For example our application Is running one front end one back end and one Redis queue container.

so in this case we can run our application using docker compose by a single YAML file.

compose-spec.io

Docker Compose V1 - docker-compose [ seprate tool devloped on python and it shold be installed seprately ]
Docker Compose V2 [ Automatically install with docker CLI , written in GO ] [bit faster version ]

# Good for
It is good for small project for lager project full orchestrator can be used like Kubernetes

Devlopment and Test but for production standard orchestartor should be used.

use of service that can run Docker Compose Files
Azure App Services
AWS ECS
Virtual Machines

# Dokcer commands

docker compose build
docker compose start
docker compose stop
docker compose up -d [ Build and start ]
docker compose ps
docker compose rm
docker compose down
docker compose logs
docker compose exec [container] bash

docker compose --project-name test1 up -d [Run an instance as a project]
docker compose -p test2 up -d [shortcut of the upper one]
docker compose ls
docker compose cp [containerId]:[SRC_PATH] [DEST_PATH]
docker compose cp [SRC_PATH] [containerID]:[DES_PATH]


