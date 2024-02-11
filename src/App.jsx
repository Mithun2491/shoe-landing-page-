import { UseState } from 'react';
import './App.Css';
import './Navigation'
import Navigation from './Navigation';
import HeroSection from './hero';
function App() {

  return (
    <>
      <div className='App'>
       <Navigation/>
       <HeroSection/>
      </div>
       
    </>
  );
};

export default App
