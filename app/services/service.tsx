import axios, { AxiosResponse } from "axios";

const baseUrl = "http://opaluwa-project.onrender.com/"; // live server

interface Response {
  blood_oxygen: number;
  heart_rate: number;
  temperature: number;
}
export const api = {
  getVitals: async (): Promise<AxiosResponse<Response>> => {
    const response = await axios.get<Response>(`${baseUrl}data_to_app`);
    return response;
  },
};
