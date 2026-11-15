
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="page-container empty-state">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="btn btn-primary">
        Return to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;
