import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function ParlayPerfecter() {
  return (
    <div className="container">
      <Navbar />
      <div className="main-content">
  <div className="my-bets-container">
    <h2>My Bets</h2>
    <ul>
      <li>Team A to win the Super Bowl</li>
      <li>Player B to score the first goal in the soccer match</li>
      <li>Team C to win the World Series</li>
    </ul>
  </div>
  <div className="signup-container">
  <h1 className="title">Parlay Perfecter</h1>
  <p className="description">Find the perfect parlay for you!</p>
  <Link to="/signup" className="signup-btn">Sign Up</Link>
</div>
  <div className="info-board-container">
    <h2>Info Board</h2>
    <ul>
      <li>Latest news: Team X has signed a new star player</li>
      <li>Upcoming events: NBA playoffs start next week</li>
      <li>Statistics: Team Y has the best record in the league</li>
    </ul>
  </div>
 
</div>
</div>
  );
}

export default ParlayPerfecter;

