const textService = require("../../services/text/textService");
var Text = require("../../db/text/text");

module.exports = (api) => {
  api.get("/get/:language", async (req, res) => {
    try {
      const language = req.params["language"];
      const text = await textService.getText(language);
      return res.json(text);
    } catch (err) {
      res.json({ error: err.message || err.toString() });
    }
  });
  api.get("/db/:language", async (req, res) => {
    const language = req.params["language"];
    try {
      const files = await Text.findOne(
        { type: `${language}` },
        (err, result) => {
          if (err) {
            console.error(err);
          }
          return result;
        }
      );
      return res.json(files);
    } catch (err) {
      console.log("fallback");
      try {
        const text = await textService.getText(language);
        return res.json(text);
      } catch (err) {
        res.json({ error: err.message || err.toString() });
      }
      res.json({ error: err.message || err.toString() });
    }
  });

  return api;
};
