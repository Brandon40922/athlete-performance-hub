
import { Users, Dumbbell, Award } from 'lucide-react';

const athletes = [
  {
    id: 1,
    name: 'Marcus Johnson',
    position: 'Running Back',
    workouts: 12,
    status: 'Active',
  },
  {
    id: 2,
    name: 'David Williams',
    position: 'Defensive Tackle',
    workouts: 15,
    status: 'Active',
  },
  {
    id: 3,
    name: 'Chris Brown',
    position: 'Wide Receiver',
    workouts: 10,
    status: 'Active',
  },
  {
    id: 4,
    name: 'James Carter',
    position: 'Linebacker',
    workouts: 14,
    status: 'Active',
  },
];

function Team() {
  return (
    <div className="page-container">
      <div className="page-heading">
        <div>
          <p className="eyebrow">TEAM MANAGEMENT</p>
          <h1>Team Overview</h1>
          <p>View athlete profiles and sample training statistics.</p>
        </div>
      </div>

      <div className="team-summary">
        <Users size={28} />
        <div>
          <h2>Football Training Team</h2>
          <p>{athletes.length} athletes in the sample roster</p>
        </div>
      </div>

      <div className="team-grid">
        {athletes.map(athlete => (
          <article className="athlete-card" key={athlete.id}>
            <div className="avatar">
              {athlete.name.split(' ').map(name => name[0]).join('')}
            </div>

            <h2>{athlete.name}</h2>
            <p className="position">{athlete.position}</p>

            <span className="status done">{athlete.status}</span>

            <div className="athlete-stats">
              <span>
                <Dumbbell size={19} />
                {athlete.workouts} workouts
              </span>
              <span>
                <Award size={19} />
                Team Athlete
              </span>
            </div>
          </article>
        ))}
      </div>

      <p className="sample-note">
        This page uses demonstration data for the MVP.
        Coach accounts and live team management are planned for a future version.
      </p>
    </div>
  );
}

export default Team;
