import { CommonTypes } from "@types";
import API from "./API";

export const getBanners = () => API.get<{ banners: CommonTypes.Banner[] }>;
