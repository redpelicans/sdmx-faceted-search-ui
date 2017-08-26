FROM node:latest

RUN apt-get update && apt-get install -y git vim-tiny

RUN npm cache clear

ENV HOME /root

RUN git clone https://github.com/redpelicans/sdmx-faceted-search-ui.git
WORKDIR /sdmx-faceted-search-ui
RUN yarn 
RUN yarn build
RUN yarn global add serve

EXPOSE 80
CMD serve -p 80 -s build
