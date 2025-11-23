import { Link } from 'react-router-dom';
import { useFamilyStore } from '../stores/familyStore';

export function Home() {
  const familyMembers = useFamilyStore((state) => state.familyMembers);
  const properties = useFamilyStore((state) => state.properties);

  return (
    <div className="page">
      <section id="home" className="section hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="family-crest">
              <div className="crest-design">
                <div className="shield">L</div>
              </div>
            </div>
            <h1>The Lewis Family Legacy</h1>
            <p className="hero-subtitle">
              Seven generations of leadership and service in Tallahassee, Florida
            </p>
            <p className="hero-description">
              From Benjamin Cheever Lewis's arrival in 1836 to the present day, the
              Lewis family has been instrumental in shaping Tallahassee's banking,
              legal, and cultural landscape.
            </p>

            <div className="feature-highlights">
              <div className="highlight-card">
                <h4>Lewis State Bank</h4>
                <p>Founded 1856 - Florida's oldest bank</p>
              </div>
              <div className="highlight-card">
                <h4>Frank Lloyd Wright House</h4>
                <p>Completed 1954 - Only private Wright residence in Florida</p>
              </div>
              <div className="highlight-card">
                <h4>VMI Tradition</h4>
                <p>Multiple generations of Virginia Military Institute graduates</p>
              </div>
            </div>

            <div className="cta-buttons">
              <Link to="/family-tree" className="btn btn--primary">
                Explore Family Tree
              </Link>
              <Link to="/timeline" className="btn btn--outline">
                View Timeline
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">{familyMembers.length}</div>
              <div className="stat-label">Family Members Documented</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">7</div>
              <div className="stat-label">Generations</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">189</div>
              <div className="stat-label">Years in Tallahassee</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{properties.length}</div>
              <div className="stat-label">Historic Properties</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
