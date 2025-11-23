import { useParams, Link } from 'react-router-dom';
import { useFamilyStore } from '../stores/familyStore';
import { ArrowLeft } from 'lucide-react';

export function MemberDetailPage() {
  const { id } = useParams<{ id: string }>();
  const getMemberById = useFamilyStore((state) => state.getMemberById);

  const member = id ? getMemberById(parseInt(id)) : undefined;

  if (!member) {
    return (
      <div className="page">
        <div className="container">
          <h1>Member Not Found</h1>
          <Link to="/family-tree" className="btn btn--outline">
            <ArrowLeft size={18} />
            Back to Family Tree
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="container">
        <Link to="/family-tree" className="back-link">
          <ArrowLeft size={18} />
          Back to Family Tree
        </Link>

        <div className="member-detail">
          <div className="member-detail-header">
            <h1>{member.name}</h1>
            <p className="member-dates">{member.dates}</p>
            <p className="member-occupation">{member.occupation}</p>
          </div>

          <div className="member-detail-grid">
            <div className="member-detail-section">
              <h2>Biography</h2>
              <p>{member.biography}</p>
            </div>

            <div className="member-detail-sidebar">
              <div className="detail-box">
                <h3>Basic Information</h3>
                <dl>
                  <dt>Generation:</dt>
                  <dd>{member.generation}</dd>
                  <dt>Birth Place:</dt>
                  <dd>{member.birthPlace}</dd>
                  {member.spouse && (
                    <>
                      <dt>Spouse:</dt>
                      <dd>{member.spouse}</dd>
                    </>
                  )}
                  <dt>Education:</dt>
                  <dd>{member.education}</dd>
                  {member.militaryService && (
                    <>
                      <dt>Military Service:</dt>
                      <dd>{member.militaryService}</dd>
                    </>
                  )}
                </dl>
              </div>

              {member.children.length > 0 && (
                <div className="detail-box">
                  <h3>Children</h3>
                  <ul>
                    {member.children.map((child, idx) => (
                      <li key={idx}>{child}</li>
                    ))}
                  </ul>
                </div>
              )}

              {member.residences.length > 0 && (
                <div className="detail-box">
                  <h3>Residences</h3>
                  <ul>
                    {member.residences.map((residence, idx) => (
                      <li key={idx}>{residence}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {member.achievements.length > 0 && (
            <div className="member-detail-section">
              <h2>Achievements</h2>
              <ul className="achievements-list">
                {member.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            </div>
          )}

          {member.businessInterests.length > 0 && (
            <div className="member-detail-section">
              <h2>Business Interests</h2>
              <div className="tags">
                {member.businessInterests.map((business, idx) => (
                  <span key={idx} className="tag">
                    {business}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="member-detail-section">
            <h2>Legacy</h2>
            <p className="legacy-text">{member.legacy}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
