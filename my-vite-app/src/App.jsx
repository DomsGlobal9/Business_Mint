import React from "react";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Navbar";

function App() {
  return (
    <>
    <Nav/>
      <div className="pt-16"> {/* Push below fixed navbar */}
        <HeroSection />
      </div>
    </>
  );
}

export default App;
