import axios from "axios";
const instance = axios.create({
  baseURL: "https://thawing-castle-70547.herokuapp.com",
});
export default instance;
