
import { NavLink } from 'react-router-dom';
import { Activity, LayoutDashboard, Dumbbell, Users } from 'lucide-react';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <NavLink to="/" className="brand">
          <Activity size={28} />
          <span>Athlete Performance Hub</span>
        </NavLink>

        <nav className="navigation" aria-label="Main navigation">
          <NavLink to="/" end>
            <LayoutDashboard size={18} />
            Dashboard
          </NavLink>

          <NavLink to="/workouts">
            <Dumbbell size={18} />
            Workouts
          </NavLink>

          <NavLink to="/team">
            <Users size={18} />
            Team
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
