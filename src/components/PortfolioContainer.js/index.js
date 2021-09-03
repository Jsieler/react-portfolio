import React, { useState } from 'react';
import Nav from '../Nav';
import Resume from '../pages/Resume';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';


function PortfolioContainer() {
  const [currentPage, handlePageChange] = useState('About');
  const renderPage = () => {

    switch (currentPage) {
      case "About":
        return <About></About>
      case "Portfolio":
        return <Portfolio></Portfolio>
      case "Contact":
        return <Contact></Contact>
      case "Resume":
        return <Resume></Resume>
      default:
        return <About></About>
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          renderPage()
        }
      </div>
    </div>
  );
}

export default PortfolioContainer;