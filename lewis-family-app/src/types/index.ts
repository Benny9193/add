// TypeScript interfaces for Lewis Family History application

export interface FamilyMember {
  id: number;
  name: string;
  dates: string;
  generation: number;
  spouse: string | null;
  children: string[];
  birthPlace: string;
  occupation: string;
  education: string;
  militaryService: string | null;
  achievements: string[];
  biography: string;
  residences: string[];
  businessInterests: string[];
  categories: string[];
  legacy: string;
}

export interface LocationState {
  name: string;
  coordinates: [number, number];
  color: string;
}

export interface MigrationPath {
  period: string;
  path: string[];
  description: string;
  members: string[];
}

export interface LocationData {
  states: Record<string, LocationState>;
  migrationPaths: MigrationPath[];
}

export interface HistoricalPeriod {
  name: string;
  dateRange: string;
  description: string;
  nationalEvents: string[];
  familyEvents: string[];
  significance: string;
}

export interface HistoricalContext {
  periods: HistoricalPeriod[];
}

export interface Photo {
  id: string;
  filename: string;
  title: string;
  description: string;
  year: string;
  subjects: string[];
  location: string;
  type: 'portrait' | 'property' | 'event' | 'document';
}

export interface PhotoPeriod {
  name: string;
  dateRange: string;
  description: string;
  photos: Photo[];
}

export interface PhotoGalleries {
  periods: PhotoPeriod[];
  branches?: Record<string, PhotoPeriod>;
  properties?: Record<string, PhotoPeriod>;
}

export interface Property {
  id: string;
  name: string;
  built: string;
  description: string;
  significance: string;
  currentStatus: string;
  historicalImpact: string;
  imageUrl?: string;
}

export interface TimelineEvent {
  id: string;
  year: string;
  title: string;
  description: string;
  category: 'family' | 'business' | 'property' | 'achievement' | 'historical';
  relatedMembers?: number[];
}

export interface FamilyData {
  locationData: LocationData;
  historicalContext: HistoricalContext;
  photoGalleries: PhotoGalleries;
  familyMembers: FamilyMember[];
  properties: Property[];
  timelineEvents: TimelineEvent[];
}

export interface SearchFilters {
  searchTerm: string;
  generation: number | 'all';
  occupation: string | 'all';
  location: string | 'all';
  militaryService: string | 'all';
  startYear: number | null;
  endYear: number | null;
}

export interface Document {
  id: string;
  title: string;
  type: 'birth-certificate' | 'letter' | 'deed' | 'military-record' | 'photo' | 'newspaper' | 'other';
  date: string;
  description: string;
  relatedMembers: number[];
  fileUrl?: string;
  thumbnailUrl?: string;
  transcription?: string;
  tags: string[];
}

export interface ResearchSource {
  id: string;
  title: string;
  type: 'archive' | 'book' | 'website' | 'interview' | 'newspaper' | 'document';
  citation: string;
  url?: string;
  notes: string;
  reliability: 'primary' | 'secondary' | 'tertiary';
  dateAccessed?: string;
}
