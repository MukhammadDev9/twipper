import axios from "axios";
import { AxiosI } from "./types";

export const Axios: AxiosI = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
});