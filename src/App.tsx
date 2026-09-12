import './App.css'
import Navbar from './components/Navbar/Navbar'
import logoText from "./assets/logo-text.png";
import Hero from './components/Hero/Hero';
import bannerStack from "./assets/banner-stack.png"

function App() {
  

  return (
    <>
      <Navbar logo={logoText} />
      <Hero banner={bannerStack}/>
    </>
  )
}

export default App
