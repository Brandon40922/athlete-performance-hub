
import { useState } from 'react';
import { Plus, Dumbbell } from 'lucide-react';
import WorkoutCard from '../components/WorkoutCard';
import { useWorkouts } from '../contexts/WorkoutContext';

function Workouts() {
  const { workouts, addWorkout } = useWorkouts();

  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('All');

  const [form, setForm] = useState({
    name: '',
    type: 'Strength',
    duration: 45,
    date: '',
    exercises: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setForm(previous => ({
      ...previous,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.date) {
      return;
    }

    addWorkout({
      ...form,
      name: form.name.trim(),
      duration: Number(form.duration),
    });

    setForm({
      name: '',
      type: 'Strength',
      duration: 45,
      date: '',
      exercises: '',
    });

    setShowForm(false);
  }

  const filteredWorkouts = workouts.filter(workout => {
    if (filter === 'Completed') return workout.completed;
    if (filter === 'Upcoming') return !workout.completed;
    return true;
  });

  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">TRAINING MANAGEMENT</p>
          <h1>My Workouts</h1>
          <p>Create, organize, and track your training sessions.</p>
        </div>

        <button
          className="btn btn-primary"
          onClick={() => setShowForm(!showForm)}
        >
          <Plus size={19} />
          {showForm ? 'Close Form' : 'Add Workout'}
        </button>
      </div>

      {showForm && (
        <section className="form-card">
          <h2>Create a New Workout</h2>

          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <label>
                Workout Name
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Example: Leg Day"
                  required
                />
              </label>

              <label>
                Workout Type
                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option>Strength</option>
                  <option>Speed</option>
                  <option>Conditioning</option>
                  <option>Recovery</option>
                </select>
              </label>

              <label>
                Duration (minutes)
                <input
                  type="number"
                  name="duration"
                  min="1"
                  value={form.duration}
                  onChange={handleChange}
                  required
                />
              </label>

              <label>
                Workout Date
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>

            <label>
              Exercises / Notes
              <textarea
                name="exercises"
                value={form.exercises}
                onChange={handleChange}
                placeholder="Example: Squats, Bench Press, Sprints"
                rows="4"
              />
            </label>

            <button className="btn btn-primary" type="submit">
              Save Workout
            </button>
          </form>
        </section>
      )}

      <div className="filter-bar">
        {['All', 'Upcoming', 'Completed'].map(option => (
          <button
            key={option}
            className={filter === option ? 'filter active' : 'filter'}
            onClick={() => setFilter(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {filteredWorkouts.length > 0 ? (
        <div className="workout-grid">
          {filteredWorkouts.map(workout => (
            <WorkoutCard key={workout.id} workout={workout} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Dumbbell size={42} />
          <h2>No Workouts Found</h2>
          <p>Try another filter or create a new workout.</p>
        </div>
      )}
    </div>
  );
}

export default Workouts;
