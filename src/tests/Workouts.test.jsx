
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { WorkoutProvider } from '../contexts/WorkoutContext';
import Workouts from '../pages/Workouts';

function renderWorkouts() {
  return render(
    <MemoryRouter>
      <WorkoutProvider>
        <Workouts />
      </WorkoutProvider>
    </MemoryRouter>
  );
}

describe('Workouts Page', () => {
  it('renders the page heading', () => {
    renderWorkouts();

    expect(
      screen.getByRole('heading', { name: 'My Workouts' })
    ).toBeInTheDocument();
  });

  it('displays sample workouts', () => {
    renderWorkouts();

    expect(screen.getByText('Lower Body Strength')).toBeInTheDocument();
    expect(screen.getByText('Speed and Agility')).toBeInTheDocument();
    expect(screen.getByText('Upper Body Strength')).toBeInTheDocument();
  });

  it('opens the Add Workout form', () => {
    renderWorkouts();

    fireEvent.click(screen.getByRole('button', {
      name: /add workout/i,
    }));

    expect(
      screen.getByRole('heading', { name: 'Create a New Workout' })
    ).toBeInTheDocument();
  });

  it('filters completed workouts', () => {
    renderWorkouts();

    fireEvent.click(screen.getByRole('button', {
      name: 'Completed',
    }));

    expect(screen.getByText('No Workouts Found')).toBeInTheDocument();
  });
});
