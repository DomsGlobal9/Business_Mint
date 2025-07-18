import React from 'react'
import Navbar from '../components/HomeComponents/Navbar';
import HeroSection from "../components/HomeComponents/HeroSection"
import WhoWeAreSection from '../components/HomeComponents/WhoWeAreSection';
import SignatureAwards from '../components/HomeComponents/SignatureAwards';
import AwardsHeroSection from '../components/HomeComponents/AwardsHeroSection';
import AwardIntro from '../components/HomeComponents/AwardIntro';
import RecognitionEvent from '../components/HomeComponents/RecognitionEvent';
import AwardCategory from '../components/HomeComponents/AwardCategory';
import Footer from '../components/HomeComponents/Footer';

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <WhoWeAreSection/>
    <SignatureAwards/>
    <AwardsHeroSection/>
    <AwardIntro/>
    <RecognitionEvent/>
    <AwardCategory/>
    </>
  )
}
export default HomePage;