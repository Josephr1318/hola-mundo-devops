FROM nginx:alpine
LABEL maintainer="Tu Nombre"
COPY index.html /usr/share/nginx/html/
# Copia la lógica JS si la separaste
COPY app.js /usr/share/nginx/html/ 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]