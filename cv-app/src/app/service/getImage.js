const docker = require("../assets/swiperSvg/docker.png");
const express = require("../assets/swiperSvg/Express.png");
const git = require("../assets/swiperSvg/GitLogo.png");
const three = require("../assets/swiperSvg/ThreejsLogo.png");
const htmlLogo = require("../assets/swiperSvg/HtmlLogo.png");
const jsLogo = require("../assets/swiperSvg/javascript.png");
const mongo = require("../assets/swiperSvg/MongoDBLogo.png");
const node = require("../assets/swiperSvg/NodeLogo.png");
const react = require("../assets/swiperSvg/ReactLogo.png");
const redux = require("../assets/swiperSvg/ReduxLogo.png");
const sass = require("../assets/swiperSvg/SassLogo.png");
const bootstrap = require("../assets/swiperSvg/Bootstrap.png");

const vendorImages = {
  docker,
  express,
  git,

  mongo,
  node,
  react,
  redux,
  sass,
  three,
  htmlLogo,
  jsLogo,
  bootstrap,
};
const cardBackground = {};
const imageGroup = { swiper: vendorImages, cardBackground: cardBackground };
const images = {
  ...vendorImages,
  ...cardBackground,
};
const getImage = (img) => {
  return images[img];
};

const getImageGroup = (group) => {
  return imageGroup[group];
};

export { getImage, getImageGroup };
