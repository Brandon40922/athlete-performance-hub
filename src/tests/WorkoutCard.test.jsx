
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import WorkoutCard from '../components/WorkoutCard';

const mockToggleWorkout = vi.fn();
const mockDeleteWorkout = vi.fn();

vi.mock('../contexts/WorkoutContext', () => ({
  useWorkouts: () => ({
    toggleWorkout: mockToggleWorkout,
    deleteWorkout: mockDeleteWorkout,
  }),
}));

const sampleWorkout = {
  id: '1',
  name: 'Lower Body Strength',
  type: 'Strength',
  duration: 60,
  date: '2026-11-16',
  exercises: 'Squats and Lunges',
  completed: false,
};

describe('WorkoutCard Component', () => {
  it('renders the workout name', () => {
    render(
      <MemoryRouter>
        <WorkoutCard workout={sampleWorkout} />
      </MemoryRouter>
    );

    expect(
      screen.getByText('Lower Body Strength')
    ).toBeInTheDocument();
  });

  it('displays workout duration', () => {
    render(
      <MemoryRouter>
        <WorkoutCard workout={sampleWorkout} />
      </MemoryRouter>
    );

    expect(screen.getByText('60 minutes')).toBeInTheDocument();
  });

  it('calls toggleWorkout when Complete is clicked', () => {
    mockToggleWorkout.mockClear();

    render(
      <MemoryRouter>
        <WorkoutCard workout={sampleWorkout} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', {
      name: /complete/i,
    }));

    expect(mockToggleWorkout).toHaveBeenCalledWith('1');
  });

  it('calls deleteWorkout when Delete is clicked', () => {
    mockDeleteWorkout.mockClear();

    render(
      <MemoryRouter>
        <WorkoutCard workout={sampleWorkout} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByRole('button', {
      name: /delete/i,
    }));

    expect(mockDeleteWorkout).toHaveBeenCalledWith('1');
  });
});
