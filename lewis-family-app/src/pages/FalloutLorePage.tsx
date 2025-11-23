import { useState } from 'react';
import { Shield, Clock, MapPin, Users, BookOpen } from 'lucide-react';
import falloutTimeline from '../data/fallout-timeline.json';
import falloutVaults from '../data/fallout-vaults.json';
import falloutFactions from '../data/fallout-factions.json';
import type { FalloutEvent, Vault, Faction } from '../types/fallout';

type TabType = 'overview' | 'timeline' | 'vaults' | 'factions';

export function FalloutLorePage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [selectedVault, setSelectedVault] = useState<Vault | null>(null);
  const [selectedFaction, setSelectedFaction] = useState<Faction | null>(null);

  const timeline = falloutTimeline as FalloutEvent[];
  const vaults = falloutVaults as Vault[];
  const factions = falloutFactions as Faction[];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
      case 'open':
        return 'status-active';
      case 'sealed':
        return 'status-sealed';
      case 'destroyed':
      case 'defunct':
        return 'status-destroyed';
      default:
        return 'status-unknown';
    }
  };

  return (
    <div className="fallout-lore-page">
      {/* Hero Section */}
      <section className="fallout-hero">
        <div className="container">
          <div className="fallout-hero-content">
            <h1 className="fallout-title">
              <span className="fallout-logo">FALLOUT</span>
              <span className="fallout-subtitle">Post-Apocalyptic Lore Database</span>
            </h1>
            <p className="fallout-tagline">
              "War. War never changes." - Explore 200 years of post-nuclear history
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="fallout-tabs">
        <div className="container">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              <BookOpen size={20} />
              Overview
            </button>
            <button
              className={`tab-button ${activeTab === 'timeline' ? 'active' : ''}`}
              onClick={() => setActiveTab('timeline')}
            >
              <Clock size={20} />
              Timeline
            </button>
            <button
              className={`tab-button ${activeTab === 'vaults' ? 'active' : ''}`}
              onClick={() => setActiveTab('vaults')}
            >
              <Shield size={20} />
              Vaults
            </button>
            <button
              className={`tab-button ${activeTab === 'factions' ? 'active' : ''}`}
              onClick={() => setActiveTab('factions')}
            >
              <Users size={20} />
              Factions
            </button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="fallout-content">
        <div className="container">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="overview-content">
              <h2>Welcome to the Wasteland</h2>
              <p className="overview-intro">
                The Fallout universe is a retro-futuristic post-apocalyptic setting where an alternate
                history led to nuclear war in 2077, destroying civilization as we know it. This interactive
                database contains comprehensive lore about the world that emerged from the ashes.
              </p>

              <div className="overview-stats">
                <div className="stat-card">
                  <div className="stat-icon">
                    <Clock size={32} />
                  </div>
                  <div className="stat-content">
                    <h3>{timeline.length}+</h3>
                    <p>Major Historical Events</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <Shield size={32} />
                  </div>
                  <div className="stat-content">
                    <h3>{vaults.length}</h3>
                    <p>Documented Vaults</p>
                  </div>
                </div>
                <div className="stat-card">
                  <div className="stat-icon">
                    <Users size={32} />
                  </div>
                  <div className="stat-content">
                    <h3>{factions.length}</h3>
                    <p>Major Factions</p>
                  </div>
                </div>
              </div>

              <div className="overview-lore">
                <h3>The Great War</h3>
                <p>
                  On October 23, 2077, the world ended in nuclear fire. The Great War lasted just two hours,
                  but it was enough to destroy most of human civilization. Those who survived did so in
                  underground Vault-Tec vaults or by chance on the surface, facing radiation, mutations,
                  and the collapse of society.
                </p>
                <h3>The Divergence</h3>
                <p>
                  The Fallout timeline diverged from our own after World War II. The transistor was never
                  invented, leading to a distinctive retro-futuristic aesthetic based on 1950s American
                  culture. Meanwhile, nuclear technology advanced rapidly, leading to fusion power, energy
                  weapons, and ultimately, total annihilation.
                </p>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="timeline-content">
              <h2>Historical Timeline</h2>
              <div className="fallout-timeline">
                {timeline.sort((a, b) => a.year - b.year).map((event) => (
                  <div key={event.id} className={`timeline-event ${event.category}`}>
                    <div className="timeline-marker">
                      <div className="timeline-year">{event.year}</div>
                    </div>
                    <div className="timeline-details">
                      <h3>{event.title}</h3>
                      <span className="timeline-category">{event.category.replace('-', ' ')}</span>
                      <p>{event.description}</p>
                      {event.relatedFactions && event.relatedFactions.length > 0 && (
                        <div className="timeline-related">
                          <strong>Related Factions:</strong> {event.relatedFactions.join(', ')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Vaults Tab */}
          {activeTab === 'vaults' && (
            <div className="vaults-content">
              <h2>Vault-Tec Vaults</h2>
              <p className="section-intro">
                Vault-Tec vaults were advertised as shelters from nuclear war, but most were actually
                social experiments conducted by the pre-war government.
              </p>
              <div className="vaults-grid">
                {vaults.sort((a, b) => a.number - b.number).map((vault) => (
                  <div
                    key={vault.id}
                    className={`vault-card ${selectedVault?.id === vault.id ? 'selected' : ''}`}
                    onClick={() => setSelectedVault(vault.id === selectedVault?.id ? null : vault)}
                  >
                    <div className="vault-header">
                      <div className="vault-number">
                        <Shield size={24} />
                        <span>Vault {vault.number}</span>
                      </div>
                      <span className={`vault-status ${getStatusColor(vault.status)}`}>
                        {vault.status}
                      </span>
                    </div>
                    <div className="vault-info">
                      <div className="vault-location">
                        <MapPin size={16} />
                        {vault.location}
                      </div>
                      <p className="vault-experiment">
                        <strong>Experiment:</strong> {vault.experiment}
                      </p>
                      {selectedVault?.id === vault.id && (
                        <div className="vault-details">
                          <div className="vault-stat">
                            <strong>Population:</strong> {vault.population}
                          </div>
                          <div className="vault-stat">
                            <strong>Overseer:</strong> {vault.overseer}
                          </div>
                          <div className="vault-outcome">
                            <strong>Outcome:</strong>
                            <p>{vault.outcome}</p>
                          </div>
                          {vault.notableResidents && vault.notableResidents.length > 0 && (
                            <div className="vault-residents">
                              <strong>Notable Residents:</strong>
                              <ul>
                                {vault.notableResidents.map((resident) => (
                                  <li key={resident}>{resident}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Factions Tab */}
          {activeTab === 'factions' && (
            <div className="factions-content">
              <h2>Major Factions</h2>
              <p className="section-intro">
                Various groups vie for power and survival in the post-apocalyptic wasteland, each with
                their own ideology and goals.
              </p>
              <div className="factions-grid">
                {factions.map((faction) => (
                  <div
                    key={faction.id}
                    className={`faction-card ${selectedFaction?.id === faction.id ? 'selected' : ''}`}
                    onClick={() => setSelectedFaction(faction.id === selectedFaction?.id ? null : faction)}
                  >
                    <div className="faction-header">
                      <h3>{faction.name}</h3>
                      {faction.acronym && <span className="faction-acronym">{faction.acronym}</span>}
                      <span className={`faction-status ${getStatusColor(faction.status)}`}>
                        {faction.status}
                      </span>
                    </div>
                    <div className="faction-info">
                      <div className="faction-meta">
                        <div className="faction-founded">
                          <Clock size={16} />
                          Founded {faction.founded}
                        </div>
                        <div className="faction-leader">
                          <Users size={16} />
                          {faction.leader}
                        </div>
                      </div>
                      <p className="faction-description">{faction.description}</p>
                      {selectedFaction?.id === faction.id && (
                        <div className="faction-details">
                          <div className="faction-ideology">
                            <strong>Ideology:</strong> {faction.ideology}
                          </div>
                          <div className="faction-headquarters">
                            <strong>Headquarters:</strong> {faction.headquarters}
                          </div>
                          <div className="faction-goals">
                            <strong>Goals:</strong>
                            <ul>
                              {faction.goals.map((goal, idx) => (
                                <li key={idx}>{goal}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="faction-relations">
                            <div className="faction-allies">
                              <strong>Allies:</strong> {faction.allies.join(', ') || 'None'}
                            </div>
                            <div className="faction-enemies">
                              <strong>Enemies:</strong> {faction.enemies.join(', ') || 'None'}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
