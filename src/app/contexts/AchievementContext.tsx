import React, { createContext, useContext, useState, ReactNode } from "react";
import { Achievement } from "../types";
import { initialAchievements } from "../data/achievements";

interface AchievementContextType {
  achievements: Achievement[];
  addAchievement: (achievement: Omit<Achievement, "id">) => void;
  updateAchievement: (id: string, achievement: Omit<Achievement, "id">) => void;
  deleteAchievement: (id: string) => void;
}

const AchievementContext = createContext<AchievementContextType | undefined>(undefined);

export function AchievementProvider({ children }: { children: ReactNode }) {
  const [achievements, setAchievements] = useState<Achievement[]>(initialAchievements);

  const addAchievement = (achievement: Omit<Achievement, "id">) => {
    const newAchievement: Achievement = {
      ...achievement,
      id: Date.now().toString(),
    };
    setAchievements([newAchievement, ...achievements]);
  };

  const updateAchievement = (id: string, achievement: Omit<Achievement, "id">) => {
    setAchievements(
      achievements.map((item) =>
        item.id === id ? { ...achievement, id } : item
      )
    );
  };

  const deleteAchievement = (id: string) => {
    setAchievements(achievements.filter((item) => item.id !== id));
  };

  return (
    <AchievementContext.Provider
      value={{ achievements, addAchievement, updateAchievement, deleteAchievement }}
    >
      {children}
    </AchievementContext.Provider>
  );
}

export function useAchievements() {
  const context = useContext(AchievementContext);
  if (!context) {
    throw new Error("useAchievements must be used within AchievementProvider");
  }
  return context;
}
