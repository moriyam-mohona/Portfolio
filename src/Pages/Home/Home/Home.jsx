import About from "../About/About";
import Banner from "../Banner/Banner";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <div className="bg-base-200 px-24">
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
    </div>
  );
};

export default Home;
