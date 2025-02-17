# Proyecto: [ecommerce-management-API]

Este documento proporciona instrucciones paso a paso para configurar y ejecutar el proyecto [ecommerce-management-API] en tu entorno local utilizando Docker Compose.

## Prerrequisitos

Antes de comenzar, asegúrate de tener instalado lo siguiente:

* **Docker Desktop**: [https://www.docker.com/get-started/]
* **JDK (Java Development Kit)**: Versión [17].
* **IDE (Entorno de Desarrollo Integrado)**: Recomendamos [IntelliJ IDEA] (IntelliJ IDEA, Eclipse, etc.)

## Configuración del Entorno

1. **Clonar el Repositorio:** 
    ```bash
    git clone https://github.com/No-Country-simulation/s21-13-n-webapp
    cd [ecommerceManagementAPI]

    ```
2. **Editar el archivo .env:**
    Renombrar el archivo example.env a .env: 
    ```bash
    DB_NAME=<database_name>
    DB_USER=<user>
    DB_PASSWORD=<password>
    ```
___

3. #### ***IMPORTANTE***: *Habilitar el soporte para archivos .env en el IDE*
___ 

4. **Construir las imagenes de Docker:**
    En la raiz del proyecto donde se ubica el archivo de docker-compose.yml ejecutar: 
    ```bash
    docker-compose up -d
    ```

5. **Salida**
    Al ejecutar docker-compose up, Docker descarga la imagen de PostgreSQL, crea y configura un contenedor con la base de datos, y asegura la persistencia y accesibilidad de los datos
    ``` [+] Running 15/1
        ✔ login-register-database Pulled                                                                                                                                                                                  14.4s 
        [+] Running 3/3
        ✔ Network ecommercemanagementapi_backend                      Created                                                                                                                                              0.1s 
        ✔ Volume "ecommercemanagementapi_db_data"                     Created                                                                                                                                              0.0s 
        ✔ Container ecommercemanagementapi-login-register-database-1  Started       
    ```
6. **Correr el siguiente comando de maven y correr el proyecto**
    ```bash
    mvn clean
    ```
