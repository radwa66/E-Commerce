import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages 
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// import components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
  }, [isDarkMode]);

  return <div className='overflow-hidden dark:bg-primary dark:text-white '>
   <Router>
    <Header >
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={toggleDarkMode}
        >
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
    </Header>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/product/:id' element={<ProductDetails />} />
    </Routes>
    <Sidebar/>
    <Footer/>
   </Router>
  </div>;
};

export default App;
