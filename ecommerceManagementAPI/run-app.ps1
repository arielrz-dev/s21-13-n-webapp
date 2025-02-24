param (
    [string]$profile = "dev"
)

# Establecer el perfil activo
$env:SPRING_PROFILES_ACTIVE = $profile

# Seleccionar el archivo .env correcto
if ($profile -eq "prod") {
    $envFile = ".env.production"
} else {
    $envFile = ".env.development"
}

# Verificar si el archivo .env existe
if (-Not (Test-Path $envFile)) {
    Write-Error "El archivo $envFile no existe."
    exit 1
}

# Cargar las variables de entorno desde el archivo .env
Get-Content $envFile | ForEach-Object {
    if ($_ -match "^\s*([^#][^=]*)\s*=\s*(.*)\s*$") {
        $name = $matches[1]
        $value = $matches[2]
        [System.Environment]::SetEnvironmentVariable($name, $value)
    }
}

# Verificar que las variables de entorno necesarias estén configuradas
$requiredVars = @("DB_TYPE", "DB_NAME", "DB_USER", "DB_PASSWORD", "DB_HOST", "DB_PORT", "SPRING_PROFILES_ACTIVE")
foreach ($var in $requiredVars) {
    if (-Not [System.Environment]::GetEnvironmentVariable($var)) {
        Write-Error "La variable de entorno $var no está configurada."
        exit 1
    }
}

# Ejecutar la aplicación
./mvnw spring-boot:run