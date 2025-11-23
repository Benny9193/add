import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { FamilyTreePage } from './pages/FamilyTreePage';
import { TimelinePage } from './pages/TimelinePage';
import { MigrationMap } from './pages/MigrationMap';
import { GalleryPage } from './pages/GalleryPage';
import { MemberDetailPage } from './pages/MemberDetailPage';
import { DocumentLibraryPage } from './pages/DocumentLibraryPage';
import { ResearchPage } from './pages/ResearchPage';
import { useFamilyStore } from './stores/familyStore';
import { loadFamilyData } from './utils/dataLoader';

function App() {
  const setFamilyData = useFamilyStore((state) => state.setFamilyData);
  const setLoading = useFamilyStore((state) => state.setLoading);
  const setError = useFamilyStore((state) => state.setError);

  useEffect(() => {
    const initializeData = async () => {
      try {
        setLoading(true);
        const data = await loadFamilyData();
        setFamilyData(data);
      } catch (err) {
        setError('Failed to load family data');
        console.error('Error loading family data:', err);
      } finally {
        setLoading(false);
      }
    };

    initializeData();
  }, [setFamilyData, setLoading, setError]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/family-tree" element={<FamilyTreePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/migration-map" element={<MigrationMap />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/member/:id" element={<MemberDetailPage />} />
          <Route path="/documents" element={<DocumentLibraryPage />} />
          <Route path="/research" element={<ResearchPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
