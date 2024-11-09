import axios from "axios";
export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "46c7a67e923947279a8e23326ad3dff2",
  },
});
