import { Header } from "./components/Header.jsx";
import { Hero } from "./components/Hero.jsx";
import { Skills } from "./components/Skills.jsx";
import { Projects } from "./components/Projects.jsx";
import { Contact } from "./components/Contact.jsx";
import { Footer } from "./components/Footer.jsx";
import { ScrollTop } from "./components/ScrollTop.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ScrollTop />
    </>
  );
}
