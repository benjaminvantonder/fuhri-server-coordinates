import React from 'react';
import { Coordinate } from '../types/coordinates';
import CoordinateCard from './CoordinateCard';
import { MapPin } from 'lucide-react';

interface CoordinateListProps {
  coordinates: Coordinate[];
}

const CoordinateList: React.FC<CoordinateListProps> = ({ coordinates }) => {
  if (coordinates.length === 0) {
    return (
      <div className="text-center py-16 animate-fadeIn">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 rounded-full mb-4">
          <MapPin className="w-8 h-8 text-slate-400" />
        </div>
        <h3 className="text-lg font-medium text-slate-300 mb-2">
          No coordinates found
        </h3>
        <p className="text-slate-500 max-w-md mx-auto">
          Try adjusting your search terms or filters to find the locations you're looking for.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coordinates.map((coordinate, index) => (
        <CoordinateCard
          key={coordinate.id}
          coordinate={coordinate}
          index={index}
        />
      ))}
    </div>
  );
};

export default CoordinateList;