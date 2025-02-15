import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Env } from "@/constants/Env";

const api = axios.create({
  baseURL: Env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem("token");
  if (token) {
    config.headers["auth-token"] = token;
  }
  return config;
});

export default api;
