import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b1e02d1e214540989909e53fec289f08",
  },
});
