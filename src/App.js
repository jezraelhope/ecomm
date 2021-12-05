import './App.css';
import Header from './Header';
import FilterBar from './FilterBar'
import AppContent from './AppContent'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <FilterBar />
      <AppContent />
      <Footer />
    </div>
  );
}

export default App;
