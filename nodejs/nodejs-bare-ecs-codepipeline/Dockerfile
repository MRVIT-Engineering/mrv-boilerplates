FROM node:lts-alpine3.18

ENV HOMEDIR=/app
ENV NODE_PATH=/usr/local/lib/node_modules

WORKDIR $HOMEDIR

RUN npm install -g pm2 yargs

# JavaScript dependencies
COPY package*.json $HOMEDIR

# Install dependencies without optional packages
RUN npm cache clean --force && \
    rm -rf node_modules && \
    npm install --no-optional

COPY . $HOMEDIR

EXPOSE 5001

ENTRYPOINT ["npm", "run", "dev"]
