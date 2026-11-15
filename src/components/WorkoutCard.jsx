
import { Link } from 'react-router-dom';
import { CalendarDays, Clock, CheckCircle2 } from 'lucide-react';
import { useWorkouts } from '../contexts/WorkoutContext';

function WorkoutCard({ workout }) {
  const { toggleWorkout, deleteWorkout } = useWorkouts();

  return (
    <article className="workout-card">
      <div className="card-top">
        <span className="type-badge">{workout.type}</span>
        <span className={workout.completed ? 'status done' : 'status'}>
          {workout.completed ? 'Completed' : 'Upcoming'}
        </span>
      </div>

      <h3>{workout.name}</h3>

      <div className="workout-meta">
        <span>
          <CalendarDays size={17} />
          {workout.date}
        </span>
        <span>
          <Clock size={17} />
          {workout.duration} minutes
        </span>
      </div>

      <div className="card-actions">
        <Link className="btn btn-secondary" to={`/workouts/${workout.id}`}>
          View Details
        </Link>

        <button
          className="btn btn-primary"
          onClick={() => toggleWorkout(workout.id)}
        >
          <CheckCircle2 size={17} />
          {workout.completed ? 'Undo' : 'Complete'}
        </button>

        <button
          className="btn btn-danger"
          onClick={() => deleteWorkout(workout.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default WorkoutCard;
