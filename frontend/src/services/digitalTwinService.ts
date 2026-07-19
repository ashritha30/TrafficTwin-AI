import api from "./api";

export const getDigitalTwin = async (location: string) => {
  const response = await api.get(`/digital-twin/${location}`);
  return response.data;
};