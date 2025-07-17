import axios, { AxiosResponse } from "axios";
import uuid from 'react-native-uuid';
import { useVitals, Vitals } from "../context/vitalsContext";

const baseUrl = "http://opaluwa-project.onrender.com/"; // live server
const botUrl = "https://doctor-chatbot-api.onrender.com/api/doctor";
interface Response {
  blood_oxygen: string;
  heart_rate: string;
  temperature: string;
}
export const api = {
  getVitals: async (): Promise<AxiosResponse<Response>> => {
    try {
      const response = await axios.get<Response>(`${baseUrl}data_to_app`);
      // console.log(response)
      return response;
    } catch (error: any) {
      console.error(
        "Failed to get vitals:",
        error.response?.data || error.message
      );
      throw error;
    }
  },
  sendMessage: async (vitals: Vitals | null, messageText: string, sessionId:string) => {
    const payload = {
      chat_id: sessionId, // generates unique ID
      message: messageText,
      ...(vitals?.heart_rate && { heart_rate: vitals.heart_rate }),
      ...(vitals?.sugar_level && { sugar_level: vitals.sugar_level }),
      ...(vitals?.blood_oxygen && { blood_pressure: vitals.blood_oxygen }),
      ...(vitals?.temperature && { temperature: vitals.temperature }),
    };

    try {
      const response = await axios.post(botUrl, payload);
      // console.log("Bot response:", response);
      return response.data;
    } catch (err) {
      console.error("Error sending message:", err);
    }
  },
};
