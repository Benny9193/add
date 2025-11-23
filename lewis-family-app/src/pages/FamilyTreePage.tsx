import { useFamilyStore } from '../stores/familyStore';

export function FamilyTreePage() {
  const familyMembers = useFamilyStore((state) => state.familyMembers);

  return (
    <div className="page">
      <section className="section">
        <div className="container">
          <h1>Family Tree</h1>
          <p className="section-description">
            Interactive family tree showing {familyMembers.length} documented members
            across 7 generations
          </p>

          <div className="family-tree-placeholder">
            <p>Interactive family tree component will be built here using React Flow</p>
            <p>Features:</p>
            <ul>
              <li>Zoomable and pannable tree visualization</li>
              <li>Click members for detailed profiles</li>
              <li>Relationship highlighting on hover</li>
              <li>Advanced search and filtering</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
