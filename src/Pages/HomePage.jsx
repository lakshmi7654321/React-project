import React from 'react'
import HeroSection from '../Components/Home/HeroSection'
import { items } from '../Utils/Constant'
import ExploreSection from '../Components/Home/ExploreSection';
import ExperienceSection from '../Components/Home/ExperienceSection';
import TravelSection from '../Components/Home/TravelSection';


const HomePage = () => {
  return (
    <div>
     
    <HeroSection items={items}/>
    <ExploreSection/>
    <ExperienceSection/>
    <TravelSection/>

    
    

      
    </div>
  );
};

export default HomePage;
