import React from 'react';
import { Route, Routes } from 'react-router';
import Layout from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import PortfolioItem from './pages/PortfolioItem';
import NotFound from './pages/NotFound';
import './scss/main.scss';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />}>
            <Route path=':name' element={<PortfolioItem />} />
          </Route>
        </Route> 
        <Route path='/*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;