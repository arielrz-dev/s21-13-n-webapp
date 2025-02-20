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

1. **Construir las imagenes de Docker:**
    En la raiz del proyecto donde se ubica el archivo de docker-compose.yml ejecutar: 
    ```bash
    docker-compose up -d
    ```

2. **Salida**
    Al ejecutar docker-compose up, Docker descarga la imagen de PostgreSQL, crea y configura un contenedor con la base de datos, y asegura la persistencia y accesibilidad de los datos
    ``` [+] Running 15/1
        ✔ login-register-database Pulled                                                                                                                                                                                  14.4s 
        [+] Running 3/3
        ✔ Network ecommercemanagementapi_backend                      Created                                                                                                                                              0.1s 
        ✔ Volume "ecommercemanagementapi_db_data"                     Created                                                                                                                                              0.0s 
        ✔ Container ecommercemanagementapi-login-register-database-1  Started       
    ```
3. **Correr el siguiente comando de maven y correr el proyecto**
    ```bash
    mvn clean
    ```
***

## Configuración con variables de entorno para producción/desarrollo

### 1. Verificar las variables de entorno en el archivo `.env`

```bash
DB_TYPE=<postgresql>
DB_NAME=<loginregister>
DB_USER=<pepouser>
MYSQL_ROOT_PASSWORD=<peporoot>
DB_PASSWORD=<pepopass123>
DB_HOST=<localhost>
DB_PORT=<3306>
SPRING_PROFILES_ACTIVE=<prod>
```

### 2. Ejecutar el siguiente comando en la ruta principal del proyecto

```bash
docker-compose -f docker-compose.development.yml --env-file .env.development up
```

Al ejecutar este comando, Docker descarga la imagen de PostgreSQL, crea y configura un contenedor con la base de datos, y asegura la persistencia y accesibilidad de los datos. Verás algo como esto en la terminal:

```
docker-compose -f docker-compose.development.yml --env-file .env.development up
[+] Running 3/3
 ✔ Network ecommercemanagementapi_backend-development          Created                                                                                                                                                                                           0.0s 
 ✔ Volume "ecommercemanagementapi_db_data_dev"                 Created                                                                                                                                                                                           0.0s 
 ✔ Container ecommercemanagementapi-login-register-database-1  Created                                                                                                                                                                                           0.1s 
Attaching to login-register-database-1
```

#### 2.1 Remover el contenedor y la red creados

```bash
docker-compose -f docker-compose.development.yml --env-file .env.development down
```

#### 2.2 Borrar los volúmenes que contienen los datos

Primero, listamos los volúmenes:

```bash
docker volume ls

DRIVER    VOLUME NAME
local     ecommercemanagementapi_db_data_dev
```

Luego, tomamos el nombre del volumen y lo eliminamos con el siguiente comando:

```bash
docker volume rm -f ecommercemanagementapi_db_data
```

---

## Configuración de comandos para levantar el proyecto

### 3. Exponer el perfil a utilizar

#### A) Para desarrollo

```bash
$env:SPRING_PROFILES_ACTIVE="dev"
```

#### B) Para producción

```bash
$env:SPRING_PROFILES_ACTIVE="prod"
```

### 3.1 Ejecutar el siguiente comando

```bash
./mvnw spring-boot:run
```
