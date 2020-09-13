import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-efe6b.cloudfunctions.net/api", // the API (cloud function) URL
});

export default instance;

//http://localhost:5001/clone-efe6b/us-central1/api
