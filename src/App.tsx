import './App.css'
import Navbar from './components/Navbar/Navbar'
import logoText from "./assets/logo-text.png";
import Hero from './components/Hero/Hero';
import bannerStack from "./assets/banner-stack.png"
import type { TechCard } from './Dev/DevType';
import { Suspense } from 'react';
import Technologies from './components/Technologies/Technologies';
import Footer from './components/Footer/Footer';


const TechnologiesPromise = async (): Promise<TechCard[]> => {
  const res = await fetch("./DevStack/data.json");
  const data = await res.json();
  return data;
};


function App() {
  

  return (
    <>
      <Suspense fallback= {<h1>Loading...</h1>}>
        <Navbar logo={logoText} />
        <Hero banner={bannerStack}/>
        <Technologies technologiesPromise ={TechnologiesPromise()} />
        <Footer logo={logoText} />
      </Suspense>
    </>
  );
}

export default App;
