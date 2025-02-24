#FROM ubuntu:latest
#LABEL authors="Home"
#
#ENTRYPOINT ["top", "-b"]

FROM openjdk:17-jdk-alpine
VOLUME /tmp
COPY target/ecommerceManagementAPI-0.0.1-SNAPSHOT.jar app.jar
#COPY .env.production .env
ENTRYPOINT ["java","-jar","/app.jar"]

#Contruir la imagen de docker
#docker build -t tu-usuario/tu-aplicacion:latest .

#publicar la imagen de docker
#docker push tu-usuario/tu-aplicacion:latest