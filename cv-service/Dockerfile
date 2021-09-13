# pull official base image
FROM node:14.17.5-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV NODE_ENV=production


# install app dependencies
COPY package.json ./
RUN npm install 

# add app
COPY . ./

EXPOSE 2002

# start app
CMD ["npm", "start"]
