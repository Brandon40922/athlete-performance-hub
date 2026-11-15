
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, CheckCircle2, Clock } from 'lucide-react';
import { useWorkouts } from '../contexts/WorkoutContext';
import WeatherCard from '../components/WeatherCard';
import WorkoutCard from '../components/WorkoutCard';

function Dashboard() {
  const { workouts } = useWorkouts();

  const completed = workouts.filter(workout => workout.completed);
  const upcoming = workouts.filter(workout => !workout.completed);

  const totalMinutes = completed.reduce(
    (total, workout) => total + Number(workout.duration),
    0
  );

  const stats = [
    {
      title: 'Total Workouts',
      value: workouts.length,
      icon: <Dumbbell size={26} />,
    },
    {
      title: 'Completed Workouts',
      value: completed.length,
      icon: <CheckCircle2 size={26} />,
    },
    {
      title: 'Training Minutes',
      value: totalMinutes,
      icon: <Clock size={26} />,
    },
  ];

  return (
    <div className="page-container">
      <section className="hero">
        <div>
          <p className="eyebrow">ATHLETE PERFORMANCE HUB</p>
          <h1>Train Smarter. Perform Better.</h1>
          <p>
            Stay on top of your workouts, track your progress,
            and keep working toward your athletic goals.
          </p>
          <Link to="/workouts" className="btn btn-light">
            Manage Workouts
          </Link>
        </div>
        <Activity className="hero-icon" size={110} />
      </section>

      <section className="section">
        <h2>Your Training Overview</h2>
        <div className="stats-grid">
          {stats.map(stat => (
            <div className="stat-card" key={stat.title}>
              <div className="stat-icon">{stat.icon}</div>
              <p>{stat.title}</p>
              <strong>{stat.value}</strong>
            </div>
          ))}
        </div>
      </section>

      <section className="dashboard-grid">
        <div>
          <div className="section-heading">
            <h2>Upcoming Workouts</h2>
            <Link to="/workouts">View All</Link>
          </div>

          <div className="workout-grid">
            {upcoming.length > 0 ? (
              upcoming.slice(0, 2).map(workout => (
                <WorkoutCard key={workout.id} workout={workout} />
              ))
            ) : (
              <div className="empty-state">
                <p>No upcoming workouts. Add a new workout to get started!</p>
              </div>
            )}
          </div>
        </div>

        <WeatherCard />
      </section>
    </div>
  );
}

export default Dashboard;
