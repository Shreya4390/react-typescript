import logo from "../logo.svg";
import '../App.css';

function Dashboard() {
  return (
    <div className="Dashboard">

      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" />
        <p>
          React Assignment
        </p>
        <a
          className="Dashboard-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default Dashboard;