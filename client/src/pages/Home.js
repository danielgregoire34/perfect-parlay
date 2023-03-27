import { Link } from 'react-router-dom';

function Home() {
  return (
      <div className="container">
        <div className="main-content">
          <div className="my-bets-container box">
            <h2>Sports API</h2>
            <p>API for sports data</p>
            <Link to='/sports' className='sports-btn'>Sports</Link>
          </div>
          <div className="signup-container box">
            <h1 className="title">Parlay Perfecter</h1>
            <p className="description">Find the perfect parlay for you!</p>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </div>
        </div>
      </div>
  );
}

export default Home;

