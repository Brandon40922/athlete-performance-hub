
import { createContext, useContext, useState } from 'react';

const WorkoutContext = createContext(null);

const starterWorkouts = [
  {
    id: '1',
    name: 'Lower Body Strength',
    type: 'Strength',
    duration: 60,
    date: '2026-11-16',
    exercises: 'Squats, Romanian Deadlifts, Lunges',
    completed: false,
  },
  {
    id: '2',
    name: 'Speed and Agility',
    type: 'Speed',
    duration: 45,
    date: '2026-11-17',
    exercises: 'Sprints, Cone Drills, Ladder Drills',
    completed: false,
  },
  {
    id: '3',
    name: 'Upper Body Strength',
    type: 'Strength',
    duration: 60,
    date: '2026-11-18',
    exercises: 'Bench Press, Rows, Shoulder Press',
    completed: false,
  },
];

export function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState(() => {
    try {
      const saved = localStorage.getItem('athlete-workouts');
      return saved ? JSON.parse(saved) : starterWorkouts;
    } catch {
      return starterWorkouts;
    }
  });

  function updateWorkouts(updater) {
    setWorkouts(previous => {
      const updated = updater(previous);
      localStorage.setItem('athlete-workouts', JSON.stringify(updated));
      return updated;
    });
  }

  function addWorkout(workout) {
    updateWorkouts(previous => [
      ...previous,
      {
        ...workout,
        id: crypto.randomUUID(),
        completed: false,
      },
    ]);
  }

  function toggleWorkout(id) {
    updateWorkouts(previous =>
      previous.map(workout =>
        workout.id === id
          ? { ...workout, completed: !workout.completed }
          : workout
      )
    );
  }

  function deleteWorkout(id) {
    updateWorkouts(previous =>
      previous.filter(workout => workout.id !== id)
    );
  }

  return (
    <WorkoutContext.Provider
      value={{ workouts, addWorkout, toggleWorkout, deleteWorkout }}
    >
      {children}
    </WorkoutContext.Provider>
  );
}

export function useWorkouts() {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw new Error('useWorkouts must be used inside WorkoutProvider');
  }

  return context;
}
