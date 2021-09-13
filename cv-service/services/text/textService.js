const fs = require("fs");
var path = require("path");

const getText = async (language) => {
  try {
    const jsonPath = path.join(__dirname, `${language}.json`);
    const data = await fs.readFileSync(jsonPath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getText };
