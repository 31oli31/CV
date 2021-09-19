# pull official base image
FROM node:14.17.5-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV production

# install app dependencies
COPY package.json ./
RUN npm install 
COPY . ./
RUN npm run build

EXPOSE 2000

# start app
CMD ["npm", "start"]
