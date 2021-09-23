import students from "./students.png";
import sstudents from "./sstudents.png";

const getImage = (img) => {
  const images = {
    students,
    sstudents,
  };

  return images[img];
};

export default getImage;
