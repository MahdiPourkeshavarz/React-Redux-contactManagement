import axios from "axios";
import { BASE_URL } from "../constants/url";

export const httpRequest = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
