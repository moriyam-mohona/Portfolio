import About from "../About/About";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="bg-base-200 sm-px-3 md:px-14 lg:px-24">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Projects></Projects>
      <Contact></Contact>
    </div>
  );
};

export default Home;
