```markdown
# Dockerizar una Aplicación de Spring Boot y Subirla a Docker Hub

## Prerrequisitos
- Docker instalado en tu máquina
- Cuenta en Docker Hub
- Maven instalado

## Pasos

1. **Construir el paquete de la aplicación**
   ```sh
   mvn clean package
   ```

2. **Crear un archivo Dockerfile**
   Crea un archivo llamado `Dockerfile` en el directorio raíz de tu proyecto con el siguiente contenido:
   ```dockerfile
   FROM openjdk:17-jdk-alpine
   VOLUME /tmp
   ARG JAR_FILE=target/*.jar
   COPY ${JAR_FILE} app.jar
   ENTRYPOINT ["java","-jar","/app.jar"]
   ```

3. **Construir la imagen Docker**
   ```sh
   docker build -t tu-usuario-dockerhub/nombre-de-tu-imagen .
   ```

4. **Iniciar sesión en Docker Hub**
   ```sh
   docker login
   ```

5. **Subir la imagen a Docker Hub**
   ```sh
   docker push tu-usuario-dockerhub/nombre-de-tu-imagen
   ```

6. **Ejecutar la imagen Docker localmente (opcional)**
   ```sh
   docker run -p 8080:8080 tu-usuario-dockerhub/nombre-de-tu-imagen
   ```

## Notas
- Asegúrate de reemplazar `tu-usuario-dockerhub` y `nombre-de-tu-imagen` con tus propios valores.
- Puedes cambiar el puerto `8080` si tu aplicación usa un puerto diferente.

