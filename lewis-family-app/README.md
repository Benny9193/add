# Lewis Family History - React Application

A modern, comprehensive web application documenting seven generations of the Lewis family in Tallahassee, Florida (1836-Present).

## Features

### Current Implementation

- **Modern React Architecture** - Built with React 18, TypeScript, and Vite
- **Multi-Page Application** - React Router for seamless navigation
- **State Management** - Zustand for lightweight, efficient state management
- **Responsive Design** - Mobile-first CSS with comprehensive styling
- **Type Safety** - Full TypeScript implementation with strict typing

### Pages Implemented

1. **Home** - Family legacy overview with statistics and highlights
2. **Family Tree** - Interactive family tree (placeholder for React Flow implementation)
3. **Timeline** - Historical timeline of family events (placeholder)
4. **Migration Map** - Geographic visualization of family movement (placeholder)
5. **Photo Galleries** - Organized photo collections (placeholder)
6. **Member Detail** - Individual member biographies with full profiles
7. **Documents** - Document library and archives (placeholder)
8. **Research** - Sources, methodology, and citations

### Planned Features

- **Advanced Search** - Multi-filter search across all family members
- **Interactive Family Tree** - Zoomable React Flow visualization
- **Document Library** - Upload, organize, and browse family documents
- **Photo Gallery** - Interactive photo viewing with metadata
- **Timeline Component** - Three-view timeline (Family/Historical/Combined)
- **Migration Map** - SVG-based interactive map showing family migration patterns

## Project Structure

```
lewis-family-app/
├── src/
│   ├── components/
│   │   ├── layout/          # Navigation, Footer, Layout
│   │   ├── family-tree/     # Family tree components (pending)
│   │   ├── timeline/        # Timeline components (pending)
│   │   ├── gallery/         # Gallery components (pending)
│   │   ├── search/          # Search components (pending)
│   │   ├── documents/       # Document library (pending)
│   │   ├── members/         # Member cards and profiles (pending)
│   │   └── common/          # Reusable UI components
│   ├── pages/               # Page components
│   │   ├── Home.tsx
│   │   ├── FamilyTreePage.tsx
│   │   ├── TimelinePage.tsx
│   │   ├── MigrationMap.tsx
│   │   ├── GalleryPage.tsx
│   │   ├── MemberDetailPage.tsx
│   │   ├── DocumentLibraryPage.tsx
│   │   └── ResearchPage.tsx
│   ├── data/                # JSON data files
│   │   ├── family-members.json
│   │   ├── location-data.json
│   │   ├── historical-context.json
│   │   ├── photo-galleries.json
│   │   ├── properties.json
│   │   └── timeline-events.json
│   ├── stores/              # Zustand state management
│   │   └── familyStore.ts
│   ├── types/               # TypeScript interfaces
│   │   └── index.ts
│   ├── hooks/               # Custom React hooks (pending)
│   ├── utils/               # Utility functions
│   │   └── dataLoader.ts
│   ├── assets/              # Static assets
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Public assets
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript configuration
├── tsconfig.app.json        # App-specific TS config
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## Technology Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **React Router** - Client-side routing
- **Zustand** - Lightweight state management
- **React Flow** - Interactive node graphs (to be integrated)
- **Lucide React** - Modern icon library
- **date-fns** - Date manipulation utilities

## Getting Started

### Prerequisites

- Node.js 22+ (currently using v22.21.0)
- npm 11+ (currently using v11.5.2)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development Server

The app runs at `http://localhost:5173` by default.

## Data Structure

### Family Member Interface

```typescript
interface FamilyMember {
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
```

See `src/types/index.ts` for complete type definitions.

## Next Steps

### Immediate Tasks

1. **Data Migration** - Migrate family data from `app_enhanced.js` to JSON files
   - Extract 46+ family members
   - Convert location data
   - Convert historical context
   - Convert photo gallery data
   - Convert timeline events

2. **Interactive Family Tree** - Implement with React Flow
   - Node-based family tree visualization
   - Zoom and pan capabilities
   - Click for member details
   - Relationship highlighting

3. **Advanced Search** - Build comprehensive search component
   - Full-text search
   - Multi-filter support (generation, occupation, location, military, date range)
   - Real-time results
   - Search result highlighting

### Future Enhancements

- Timeline component with three viewing modes
- Interactive SVG migration map
- Photo gallery with modal viewing
- Document library with upload capability
- User authentication for family contributions
- PDF export functionality
- Print-friendly member profiles
- Image optimization and lazy loading
- Progressive Web App (PWA) support

## Development Guidelines

### Code Style

- Use functional components with hooks
- TypeScript strict mode enabled
- ESLint configured for React/TypeScript
- Follow React best practices

### State Management

- Zustand for global state
- React hooks for local component state
- Computed values via selectors

### Styling

- CSS modules or global CSS
- Design tokens for consistency
- Mobile-first responsive design
- Heritage color scheme (gold, navy, cream, blue)

## Original Project

This React app is a modern rebuild of the original static HTML/JS website located in the parent directory. The original codebase:

- Single-page application with vanilla JavaScript
- 204KB JavaScript file with 46+ family members
- 3,388 lines of CSS
- 189 years of family history documented

## License

Copyright © 2025 The Lewis Family. All rights reserved.

## Contact

For corrections, additional information, or research inquiries, please contact the family historians.

## Acknowledgments

- Leon County Historical Society
- Florida State Archives
- Virginia Military Institute Alumni Records
- Tallahassee Democrat Historical Archives
- National Register of Historic Places
