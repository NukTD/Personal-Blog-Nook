import './App.css'
import Navbar from './componant/Navbar';
import HeroSection from './componant/HeroSection';
import { Footer } from './componant/Footer';
import { ArticleSection } from './componant/ArticleSection';
import { Button } from './components/ui/button';

function App() {
  return (
    <>
      
      <Navbar />
      <HeroSection/>
      <ArticleSection />
      <Footer />
      <Button>Hello World</Button>
    </>
  );
}

export default App
