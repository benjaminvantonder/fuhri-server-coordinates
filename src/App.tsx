import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import CoordinateList from './components/CoordinateList';
import { sampleCoordinates } from './data/sampleCoordinates';
import { FilterType, DimensionFilter } from './types/coordinates';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [typeFilter, setTypeFilter] = useState<FilterType>('all');
  const [dimensionFilter, setDimensionFilter] = useState<DimensionFilter>('all');

  const filteredCoordinates = useMemo(() => {
    return sampleCoordinates.filter((coordinate) => {
      const matchesSearch = searchTerm === '' || 
        coordinate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coordinate.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coordinate.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
        coordinate.discoveredBy?.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = typeFilter === 'all' || coordinate.type === typeFilter;
      const matchesDimension = dimensionFilter === 'all' || coordinate.dimension === dimensionFilter;

      return matchesSearch && matchesType && matchesDimension;
    });
  }, [searchTerm, typeFilter, dimensionFilter]);

  return (
    <div className="min-h-screen bg-slate-900">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 animate-fadeIn">
          <h2 className="text-3xl font-bold text-white mb-2">
            World Coordinates Database
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl">
            Explore and manage all discovered locations across dimensions. 
            Use the filters below to find specific coordinates, or browse through 
            all documented discoveries.
          </p>
        </div>

        <FilterPanel
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          dimensionFilter={dimensionFilter}
          setDimensionFilter={setDimensionFilter}
          totalCount={sampleCoordinates.length}
          filteredCount={filteredCoordinates.length}
        />

        <CoordinateList coordinates={filteredCoordinates} />

        {/* Instructions for manual updates */}
        <div className="mt-16 bg-slate-800 border border-slate-700 rounded-xl p-6 animate-fadeIn">
          <h3 className="text-lg font-semibold text-white mb-4">
            Adding New Coordinates
          </h3>
          <p className="text-slate-400 mb-4">
            To add new coordinates to your world database, edit the{' '}
            <code className="bg-slate-900 px-2 py-1 rounded text-emerald-400">
              src/data/sampleCoordinates.ts
            </code>{' '}
            file and add new coordinate objects following the existing format.
          </p>
          <div className="bg-slate-900 rounded-lg p-4 text-sm">
            <pre className="text-slate-300 whitespace-pre-wrap">
{`{
  id: 'unique-id',
  name: 'Location Name',
  description: 'Detailed description of the location',
  x: 0, y: 64, z: 0,
  dimension: 'overworld' | 'nether' | 'end',
  type: 'natural' | 'man-made',
  tags: ['tag1', 'tag2'],
  discoveredBy: 'Player Name',
  dateDiscovered: '2024-01-01'
}`}
            </pre>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;