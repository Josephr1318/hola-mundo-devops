FROM nginx:alpine

# Etiquetas informativas
LABEL maintainer="Tu Nombre <tu.email@ejemplo.com>"
LABEL description="Aplicación web Hola Mundo para práctica DevOps"
LABEL version="1.0"

# Copiar los archivos de la aplicación al contenedor
COPY index.html /usr/share/nginx/html/

# Exponer el puerto 80
EXPOSE 80

# Comando para ejecutar Nginx
CMD ["nginx", "-g", "daemon off;"]
