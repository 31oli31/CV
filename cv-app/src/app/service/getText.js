import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:2000/api",
});

const cachedLanguage = null;

const fetchText = async (language) => {
  const response = await api
    .get(`/text/get/${language}`)
    .then((response) => response.data);
  /*const response = api
    .get(`/db/${language}`)
    .then((response) => response.json());*/
  return response;
};

const getText = async (language = "cached") => {
  if (cachedLanguage === null && language == "cached") {
    return await fetchText("german");
  }
  if (language === "cached") {
    return cachedLanguage;
  }
  if (cachedLanguage && cachedLanguage.type === language) {
    return cachedLanguage;
  }
  return await fetchText(language);
};

export default getText;
