import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { api } from "../services/service"; // adjust import path as needed

export interface Vitals {
  heart_rate?: string;
  sugar_level?: string;
  blood_oxygen?: string;
  temperature?: string;
}

interface VitalsContextProps {
  vitals: Vitals | null;
  refreshing: boolean;
  refreshVitals: () => Promise<void>;
}

const VitalsContext = createContext<VitalsContextProps | undefined>(undefined);

export const VitalsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [vitals, setVitals] = useState<Vitals | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchVitals = async () => {
    try {
      const response = await api.getVitals();
      setVitals(response.data);
    } catch (error) {
      console.error("Error fetching vitals:", error);
    }
  };

  const refreshVitals = useCallback(async () => {
    setRefreshing(true);
    await fetchVitals();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    fetchVitals(); // Auto-fetch on mount
  }, []);

  return (
    <VitalsContext.Provider value={{ vitals, refreshing, refreshVitals }}>
      {children}
    </VitalsContext.Provider>
  );
};

export const useVitals = () => {
  const context = useContext(VitalsContext);
  if (!context) throw new Error("useVitals must be used within a VitalsProvider");
  return context;
};
