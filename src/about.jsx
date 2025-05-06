import ScrambledText from "./components/ScrambledText";

const AboutMe = () => {
  return (
    <div className="lg:h-screen h-3/4 flex items-center justify-center">
      <div className="sm:w-3/4 w-5/6 text-3xl  md:5xl lg:text-6xl text-center font-josefin font-black">
        Hi! I am{" "}
        <span className="text-[#D62828]">
          <ScrambledText text="John Lester Quinagutan" />
        </span>
        . A Designer and a Developer, that can help you with your troubles... I
        think, pls hire me :&lt;
      </div>
    </div>
  );
};

export default AboutMe;
