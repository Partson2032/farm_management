# base image
FROM node:10
#set working directory

WORKDIR /app

#add /app/node_modules/.bin to $PATH

ENV PATH /app/node_modules/.bin:$PATH

#install and cache app dependencies

#COPY package.json /app/package.json
COPY . /app

RUN npm install --silent

RUN npm install @vue/cli@4.5.15 -g
# generate build
#RUN npm run build

EXPOSE 8044
#start app

CMD ["npm", "run", "serve"]
