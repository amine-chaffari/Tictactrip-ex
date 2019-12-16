import React from 'react';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import './App.css';


function App() {
  return (
    <div >
      <Header />
      <div className="bg">
      <SearchBar />
      </div>
      <Footer />
    </div>
  );
}

export default App;
