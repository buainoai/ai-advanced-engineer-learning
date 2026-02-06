import { useState, useEffect } from "react";

export interface ProgressState {
  completedStages: string[];
  completedProjects: string[];
}

const STORAGE_KEY = "ai-learning-progress";

export function useProgress() {
  const [progress, setProgress] = useState<ProgressState>({ completedStages: [], completedProjects: [] });
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setProgress(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse progress from localStorage", e);
      }
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }
  }, [progress, isInitialized]);

  const toggleStage = (stageId: string) => {
    setProgress((prev) => {
      const isCompleted = prev.completedStages.includes(stageId);
      return {
        ...prev,
        completedStages: isCompleted
          ? prev.completedStages.filter((id) => id !== stageId)
          : [...prev.completedStages, stageId],
      };
    });
  };

  const toggleProject = (projectId: string) => {
    setProgress((prev) => {
      const isCompleted = prev.completedProjects.includes(projectId);
      return {
        ...prev,
        completedProjects: isCompleted
          ? prev.completedProjects.filter((id) => id !== projectId)
          : [...prev.completedProjects, projectId],
      };
    });
  };

  return {
    progress,
    toggleStage,
    toggleProject,
  };
}
