
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CalendarDays, Clock, Dumbbell } from 'lucide-react';
import { useWorkouts } from '../contexts/WorkoutContext';

function WorkoutDetails() {
  const { workoutId } = useParams();
  const { workouts, toggleWorkout } = useWorkouts();

  const workout = workouts.find(item => item.id === workoutId);

  if (!workout) {
    return (
      <div className="page-container empty-state">
        <h1>Workout Not Found</h1>
        <p>This workout does not exist or has been deleted.</p>
        <Link to="/workouts" className="btn btn-primary">
          Back to Workouts
        </Link>
      </div>
    );
  }

  return (
    <div className="page-container">
      <Link to="/workouts" className="back-link">
        <ArrowLeft size={18} />
        Back to Workouts
      </Link>

      <div className="detail-card">
        <span className="type-badge">{workout.type}</span>
        <h1>{workout.name}</h1>

        <p className={workout.completed ? 'status done' : 'status'}>
          {workout.completed ? 'Completed' : 'Upcoming'}
        </p>

        <div className="detail-info">
          <div>
            <CalendarDays size={22} />
            <div>
              <strong>Workout Date</strong>
              <p>{workout.date}</p>
            </div>
          </div>

          <div>
            <Clock size={22} />
            <div>
              <strong>Duration</strong>
              <p>{workout.duration} minutes</p>
            </div>
          </div>

          <div>
            <Dumbbell size={22} />
            <div>
              <strong>Workout Type</strong>
              <p>{workout.type}</p>
            </div>
          </div>
        </div>

        <h2>Exercises and Notes</h2>
        <p className="exercise-notes">
          {workout.exercises || 'No exercises added yet.'}
        </p>

        <button
          className="btn btn-primary"
          onClick={() => toggleWorkout(workout.id)}
        >
          {workout.completed ? 'Mark as Upcoming' : 'Mark as Completed'}
        </button>
      </div>
    </div>
  );
}

export default WorkoutDetails;
