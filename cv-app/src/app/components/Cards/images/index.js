const students = require("./students.png");
const sstudents = require("./sstudents.png");

const getImage = (img) => {
  const images = {
    students,
    sstudents,
  };

  return images[img];
};

export default getImage;
