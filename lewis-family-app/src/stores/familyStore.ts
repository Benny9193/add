import { create } from 'zustand';
import type {
  FamilyMember,
  SearchFilters,
  Document,
  FamilyData,
  TimelineEvent,
  Property,
} from '../types';

interface FamilyStore {
  // Data
  familyMembers: FamilyMember[];
  documents: Document[];
  timelineEvents: TimelineEvent[];
  properties: Property[];
  familyData: FamilyData | null;

  // UI State
  searchFilters: SearchFilters;
  selectedMemberId: number | null;
  isLoading: boolean;
  error: string | null;

  // Actions
  setFamilyData: (data: FamilyData) => void;
  setFamilyMembers: (members: FamilyMember[]) => void;
  setDocuments: (documents: Document[]) => void;
  setTimelineEvents: (events: TimelineEvent[]) => void;
  setProperties: (properties: Property[]) => void;
  setSearchFilters: (filters: Partial<SearchFilters>) => void;
  resetSearchFilters: () => void;
  setSelectedMember: (id: number | null) => void;
  getMemberById: (id: number) => FamilyMember | undefined;
  getFilteredMembers: () => FamilyMember[];
  searchMembers: (term: string) => FamilyMember[];
  getMembersByGeneration: (generation: number) => FamilyMember[];
  getRelatedDocuments: (memberId: number) => Document[];
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

const defaultSearchFilters: SearchFilters = {
  searchTerm: '',
  generation: 'all',
  occupation: 'all',
  location: 'all',
  militaryService: 'all',
  startYear: null,
  endYear: null,
};

export const useFamilyStore = create<FamilyStore>((set, get) => ({
  // Initial State
  familyMembers: [],
  documents: [],
  timelineEvents: [],
  properties: [],
  familyData: null,
  searchFilters: defaultSearchFilters,
  selectedMemberId: null,
  isLoading: false,
  error: null,

  // Actions
  setFamilyData: (data) =>
    set({
      familyData: data,
      familyMembers: data.familyMembers,
      timelineEvents: data.timelineEvents || [],
      properties: data.properties || [],
    }),

  setFamilyMembers: (members) => set({ familyMembers: members }),

  setDocuments: (documents) => set({ documents }),

  setTimelineEvents: (events) => set({ timelineEvents: events }),

  setProperties: (properties) => set({ properties }),

  setSearchFilters: (filters) =>
    set((state) => ({
      searchFilters: { ...state.searchFilters, ...filters },
    })),

  resetSearchFilters: () => set({ searchFilters: defaultSearchFilters }),

  setSelectedMember: (id) => set({ selectedMemberId: id }),

  getMemberById: (id) => {
    return get().familyMembers.find((member) => member.id === id);
  },

  getFilteredMembers: () => {
    const { familyMembers, searchFilters } = get();
    let filtered = [...familyMembers];

    // Filter by search term
    if (searchFilters.searchTerm) {
      const term = searchFilters.searchTerm.toLowerCase();
      filtered = filtered.filter(
        (member) =>
          member.name.toLowerCase().includes(term) ||
          member.occupation.toLowerCase().includes(term) ||
          member.biography.toLowerCase().includes(term) ||
          member.achievements.some((a) => a.toLowerCase().includes(term))
      );
    }

    // Filter by generation
    if (searchFilters.generation !== 'all') {
      filtered = filtered.filter(
        (member) => member.generation === searchFilters.generation
      );
    }

    // Filter by occupation
    if (searchFilters.occupation !== 'all') {
      filtered = filtered.filter((member) =>
        member.occupation.toLowerCase().includes(searchFilters.occupation.toLowerCase())
      );
    }

    // Filter by location
    if (searchFilters.location !== 'all') {
      filtered = filtered.filter(
        (member) =>
          member.birthPlace.toLowerCase().includes(searchFilters.location.toLowerCase()) ||
          member.residences.some((r) =>
            r.toLowerCase().includes(searchFilters.location.toLowerCase())
          )
      );
    }

    // Filter by military service
    if (searchFilters.militaryService !== 'all') {
      if (searchFilters.militaryService === 'military') {
        filtered = filtered.filter((member) => member.militaryService !== null);
      } else {
        filtered = filtered.filter((member) =>
          member.militaryService?.toLowerCase().includes(searchFilters.militaryService.toLowerCase())
        );
      }
    }

    // Filter by date range
    if (searchFilters.startYear || searchFilters.endYear) {
      filtered = filtered.filter((member) => {
        const birthYear = parseInt(member.dates.split('-')[0]);
        const deathYear = member.dates.includes('present')
          ? new Date().getFullYear()
          : parseInt(member.dates.split('-')[1]);

        if (searchFilters.startYear && birthYear < searchFilters.startYear) {
          return false;
        }
        if (searchFilters.endYear && deathYear > searchFilters.endYear) {
          return false;
        }
        return true;
      });
    }

    return filtered;
  },

  searchMembers: (term) => {
    const { familyMembers } = get();
    if (!term) return familyMembers;

    const lowerTerm = term.toLowerCase();
    return familyMembers.filter(
      (member) =>
        member.name.toLowerCase().includes(lowerTerm) ||
        member.occupation.toLowerCase().includes(lowerTerm) ||
        member.biography.toLowerCase().includes(lowerTerm) ||
        member.achievements.some((a) => a.toLowerCase().includes(lowerTerm)) ||
        member.businessInterests.some((b) => b.toLowerCase().includes(lowerTerm))
    );
  },

  getMembersByGeneration: (generation) => {
    return get().familyMembers.filter((member) => member.generation === generation);
  },

  getRelatedDocuments: (memberId) => {
    return get().documents.filter((doc) => doc.relatedMembers.includes(memberId));
  },

  setLoading: (loading) => set({ isLoading: loading }),

  setError: (error) => set({ error }),
}));
