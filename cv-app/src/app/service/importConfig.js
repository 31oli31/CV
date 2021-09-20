import development from "../../../config/default.json";
import production from "../../../config/production.json";

export default () => {
    console.log(process.env.NODE_ENV)
    return process.env.NODE_ENV ==="production" ? production :development; 
};
