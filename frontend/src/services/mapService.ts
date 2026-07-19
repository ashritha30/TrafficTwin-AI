import api from "./api";

export const getHotspots = async () => {
  const response = await api.get("/map/hotspots");
  return response.data;
};