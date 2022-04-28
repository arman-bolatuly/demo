import axios from "axios";

export const expressService = axios.createInstanse({
  baseUrl: "http://localhost:3001",
});

  