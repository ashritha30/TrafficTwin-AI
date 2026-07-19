import api from "./api";

export const getTrafficStatus = async () => {
  const response = await api.get("/traffic/status");
  return response.data;
};