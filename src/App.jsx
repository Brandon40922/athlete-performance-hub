
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Workouts from './pages/Workouts';
import WorkoutDetails from './pages/WorkoutDetails';
import Team from './pages/Team';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="/workouts/:workoutId" element={<WorkoutDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <p>
          Athlete Performance Hub © {new Date().getFullYear()}
        </p>
        <p>Train Smarter. Perform Better.</p>
      </footer>
    </div>
  );
}

export default App;
