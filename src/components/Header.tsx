import React from 'react';
import { Map, Compass } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 border-b border-emerald-500/20 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Map className="h-8 w-8 text-emerald-400" />
              <Compass className="h-4 w-4 text-emerald-300 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">
                Minecraft World Explorer
              </h1>
              <p className="text-sm text-slate-400">
                Coordinate Database & Navigation System
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <span className="text-emerald-400 text-sm font-medium">
                v2.1.0
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;