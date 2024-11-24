import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import ListingPage from './pages/ListingPage';
import FeaturedPage from './pages/FeaturedPage';
import ResultsPage from './pages/ResultsPage';
import WatchlistPage from './pages/WatchlistPage';
import BidsPage from './pages/BidsPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-steel-grey">
        <Navbar />
        <div className="flex flex-1 pt-16">
          <Sidebar />
          <div className="flex-1 lg:ml-64">
            <div className="max-w-[1920px] mx-auto">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/listing/:id" element={<ListingPage />} />
                <Route path="/featured" element={<FeaturedPage />} />
                <Route path="/results" element={<ResultsPage />} />
                <Route path="/watchlist" element={<WatchlistPage />} />
                <Route path="/bids" element={<BidsPage />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;