import React from 'react';

import FilterBar from './FilterBar'
import AppContent from './AppContent'
import Footer from './Footer'

function Home() {
  return (
    <div className="App">
      <FilterBar />
      <AppContent />
      <Footer />
    </div>
  );
}

export default Home;
