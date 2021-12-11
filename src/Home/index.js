import React from 'react';

import FilterBar from './FilterBar'
import AppContent from './AppContent'

function Home() {
  return (
    <div className="App">
      <FilterBar />
      <AppContent />
    </div>
  );
}

export default Home;
