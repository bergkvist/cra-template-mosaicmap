### STAGE 1: Build ###
FROM node:12-alpine as build
WORKDIR /home/app/
COPY package.json ./
COPY yarn.lock ./
RUN yarn 
COPY . .
RUN yarn build

### STAGE 2: Production Environment ###
FROM nginx:1.13.12-alpine
COPY --from=build /home/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
