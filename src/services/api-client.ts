import axios from "axios";

export default axios.create({
  baseURL: "https://shopia-api-django-production.up.railway.app/store/",
});
