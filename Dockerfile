FROM node:latest

# Crear directorio para la aplicacion
WORKDIR /usr/src/app

# copiar archivo de depencias para instalar
COPY package*.json ./

# instalar librerias
RUN npm install

# copiar la aplicacion al contenedor
COPY . .

EXPOSE 3000

CMD [ "node", "./bin/www" ]
