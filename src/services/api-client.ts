import axios from "axios";

axios.defaults.withCredentials = true;
export default axios.create({
  baseURL: "https://shopia-api-django-production.up.railway.app/store/",
});

