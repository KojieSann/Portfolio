import HeaderMenu from "./hero";
import AboutMe from "./about";
import PinText from "./components/PinText";
import Projects from "./components/projects";
import Footer from "./components/Footer";
import Preloader from "./components/preloader";

const App = () => {
  return (
    <>
      {/* <Preloader /> */}
      <div className="relative min-h-screen">
        <div className="grid-overlay absolute top-0 left-0 w-full h-full" />
        <HeaderMenu />
        <AboutMe />
        <div className="relative ">
          <PinText />
        </div>
        <Projects />
        <Footer />
      </div>
    </>
  );
};

export default App;
