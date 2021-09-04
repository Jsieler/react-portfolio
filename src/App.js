import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PortfolioContainer from "./components/PortfolioContainer.js";

const App = () => {
    return (
        <div>
            <Header></Header>
            <PortfolioContainer></PortfolioContainer>
            <Footer></Footer>
        </div>
        
    )
}

export default App;
