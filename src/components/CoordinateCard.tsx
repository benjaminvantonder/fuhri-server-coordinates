import React from 'react';
import { MapPin, Calendar, User, Tag, Globe, Flame, Eye as EndIcon } from 'lucide-react';
import { Coordinate } from '../types/coordinates';

interface CoordinateCardProps {
  coordinate: Coordinate;
  index: number;
}

const CoordinateCard: React.FC<CoordinateCardProps> = ({ coordinate, index }) => {
  const dimensionIcons = {
    overworld: <Globe className="w-4 h-4 text-green-400" />,
    nether: <Flame className="w-4 h-4 text-red-400" />,
    end: <EndIcon className="w-4 h-4 text-purple-400" />
  };

  const dimensionColors = {
    overworld: 'border-green-500/30 bg-green-500/5',
    nether: 'border-red-500/30 bg-red-500/5',
    end: 'border-purple-500/30 bg-purple-500/5'
  };

  const typeColors = {
    natural: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
    'man-made': 'bg-orange-500/10 text-orange-400 border-orange-500/30'
  };

  return (
    <div 
      className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 animate-slideInUp group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-200">
            {coordinate.name}
          </h3>
          <p className="text-sm text-slate-400 mt-1">
            {coordinate.description}
          </p>
        </div>
        <div className={`px-3 py-1 rounded-full border text-xs font-medium ${typeColors[coordinate.type]}`}>
          {coordinate.type === 'natural' ? 'Natural' : 'Man-made'}
        </div>
      </div>

      {/* Coordinates */}
      <div className={`p-4 rounded-lg border ${dimensionColors[coordinate.dimension]} mb-4`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            {dimensionIcons[coordinate.dimension]}
            <span className="text-sm font-medium text-slate-300 capitalize">
              {coordinate.dimension}
            </span>
          </div>
          <MapPin className="w-4 h-4 text-emerald-400" />
        </div>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-xs text-slate-400 mb-1">X</div>
            <div className="text-lg font-mono font-semibold text-white">
              {coordinate.x}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400 mb-1">Y</div>
            <div className="text-lg font-mono font-semibold text-white">
              {coordinate.y}
            </div>
          </div>
          <div>
            <div className="text-xs text-slate-400 mb-1">Z</div>
            <div className="text-lg font-mono font-semibold text-white">
              {coordinate.z}
            </div>
          </div>
        </div>
      </div>

      {/* Tags */}
      {coordinate.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {coordinate.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="inline-flex items-center space-x-1 px-2 py-1 bg-slate-700 text-slate-300 text-xs rounded-md"
            >
              <Tag className="w-3 h-3" />
              <span>{tag}</span>
            </span>
          ))}
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-4 border-t border-slate-700">
        {coordinate.discoveredBy && (
          <div className="flex items-center space-x-1">
            <User className="w-3 h-3" />
            <span>{coordinate.discoveredBy}</span>
          </div>
        )}
        {coordinate.dateDiscovered && (
          <div className="flex items-center space-x-1">
            <Calendar className="w-3 h-3" />
            <span>{new Date(coordinate.dateDiscovered).toLocaleDateString()}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoordinateCard;