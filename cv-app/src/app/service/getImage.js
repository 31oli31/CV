import docker from"../assets/swiperSvg/docker.png";
import express from"../assets/swiperSvg/Express.png";
import git from"../assets/swiperSvg/GitLogo.png";
import three from"../assets/swiperSvg/ThreejsLogo.png";
import htmlLogo from"../assets/swiperSvg/HtmlLogo.png";
import jsLogo from"../assets/swiperSvg/javascript.png";
import mongo from"../assets/swiperSvg/MongoDBLogo.png";
import node from"../assets/swiperSvg/NodeLogo.png";
import react from"../assets/swiperSvg/ReactLogo.png";
import redux from"../assets/swiperSvg/ReduxLogo.png";
import sass from"../assets/swiperSvg/SassLogo.png";
import bootstrapImg from"../assets/swiperSvg/Bootstrap.png";

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
  bootstrapImg,
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
