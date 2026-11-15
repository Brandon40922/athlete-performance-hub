
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { WorkoutProvider, useWorkouts } from '../contexts/WorkoutContext';

function TestComponent() {
  const { workouts, addWorkout, toggleWorkout, deleteWorkout } = useWorkouts();

  return (
    <div>
      <p>Workout Count: {workouts.length}</p>
      <p>
        Completed: {workouts.filter(workout => workout.completed).length}
      </p>

      <button onClick={() => addWorkout({
        name: 'Test Workout',
        type: 'Strength',
        duration: 30,
        date: '2026-11-20',
        exercises: 'Pushups',
      })}>
        Add Test Workout
      </button>

      <button onClick={() => toggleWorkout('1')}>
        Toggle First Workout
      </button>

      <button onClick={() => deleteWorkout('1')}>
        Delete First Workout
      </button>
    </div>
  );
}

describe('WorkoutContext', () => {
  it('provides the initial workouts', () => {
    render(
      <WorkoutProvider>
        <TestComponent />
      </WorkoutProvider>
    );

    expect(screen.getByText('Workout Count: 3')).toBeInTheDocument();
  });

  it('adds a new workout', () => {
    render(
      <WorkoutProvider>
        <TestComponent />
      </WorkoutProvider>
    );

    fireEvent.click(screen.getByText('Add Test Workout'));

    expect(screen.getByText('Workout Count: 4')).toBeInTheDocument();
  });

  it('marks a workout as completed', () => {
    render(
      <WorkoutProvider>
        <TestComponent />
      </WorkoutProvider>
    );

    fireEvent.click(screen.getByText('Toggle First Workout'));

    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
  });

  it('deletes a workout', () => {
    render(
      <WorkoutProvider>
        <TestComponent />
      </WorkoutProvider>
    );

    fireEvent.click(screen.getByText('Delete First Workout'));

    expect(screen.getByText('Workout Count: 2')).toBeInTheDocument();
  });
});
