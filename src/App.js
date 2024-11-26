import { Header } from './components/ui/header/header';
import { Home } from './components/ui/main/sections/home/home';
import { About } from './components/ui/main/sections/about/about';
import { Skills } from './components/ui/main/sections/skills/skills';
import { Work } from './components/ui/main/sections/work/work';
import { Contact } from './components/ui/main/sections/contact/contact';
import { Footer } from './components/ui/footer/footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <>
      <Header />
      <main>
        <Element name="/"><Home /></Element>
        <Element name="/about"><About /></Element>
        <Element name="/skills"><Skills /></Element>
        <Element name="/works"><Work /></Element>
        <Element name="/contact"><Contact /></Element> 
      </main>
      <Footer />
    </>
  );
}

export default App;
