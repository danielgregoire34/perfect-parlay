import './index.css';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar';

function ParlayPerfecter() {
  return (
    <div className="container">
      <h1 className="title">Parlay Perfecter</h1>
      <p className="description">Find the perfect parlay for you!</p>
      <Link to="/signup" className="signup-btn">Sign Up</Link>
    </div>
  );
}

export default ParlayPerfecter;



