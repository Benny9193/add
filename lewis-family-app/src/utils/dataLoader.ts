import { FamilyData } from '../types';
import familyMembersData from '../data/family-members.json';
import locationData from '../data/location-data.json';
import historicalContext from '../data/historical-context.json';
import photoGalleries from '../data/photo-galleries.json';
import properties from '../data/properties.json';
import timelineEvents from '../data/timeline-events.json';

export async function loadFamilyData(): Promise<FamilyData> {
  // Simulate async loading
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        familyMembers: familyMembersData,
        locationData,
        historicalContext,
        photoGalleries,
        properties,
        timelineEvents,
      });
    }, 100);
  });
}
