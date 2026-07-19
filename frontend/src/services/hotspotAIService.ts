import api from "./api";

export const analyzeHotspot = async (location: string) => {
  const response = await api.post("/hotspot/analyze", {
    location,
  });

  return response.data;
};