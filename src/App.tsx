import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import { Plane, List } from 'lucide-react';
import WorldMap from './components/WorldMap';
import CountryList from './components/CountryList';
import Legend from './components/Legend';

function App() {
  const [visitedCountries, setVisitedCountries] = useState<Set<string>>(new Set());
  const [showList, setShowList] = useState(false);

  const handleCountryClick = (countryName: string) => {
    setVisitedCountries(prev => {
      const newSet = new Set(prev);
      if (newSet.has(countryName)) {
        newSet.delete(countryName);
      } else {
        newSet.add(countryName);
      }
      return newSet;
    });
  };
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-700 to-gray-900">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <a href="/" className='flex items-center'>
              <Plane className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-800 ">Países visitados </span>
              </a>
            </div>
            <button
              onClick={() => setShowList(!showList)}
              className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600"
            >
              <List className="h-8 w-8 mr-1" />
              {showList ? 'Ocultar Lista' : 'Mostrar Lista'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1">
            <WorldMap 
              visitedCountries={visitedCountries}
              onCountryClick={handleCountryClick}
            />
            <Legend />
          </div>


          {showList && (
            <CountryList 
              visitedCountries={visitedCountries}
              onCountryClick={handleCountryClick}
            />
          )}
        </div>
      </main>

      <Tooltip id="country-tooltip" />
    </div>
  );
}

export default App;