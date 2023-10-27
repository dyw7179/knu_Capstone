import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Header from './component/Header';
import Footer from './component/Footer';
import VideoSearch from './pages/VideoSearch/VideoSearch';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fitsearch" element={<VideoSearch />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
 