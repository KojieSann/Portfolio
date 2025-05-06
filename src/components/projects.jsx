import { useEffect, useState } from "react";

const Projects = () => {
  return (
    <div className="h-auto w-screen relative overflow-hidden">
      <ProjectPage
        year="2024"
        name="Olivarez College Tagaytay"
        services="Client work"
        skills={["HTML", "CSS", "GSAP", "JavaScript"]}
      />

      <div className="top-project-gradient h-full w-full absolute left-0 top-0"></div>
      <Circles numCircles={50} animationType="rise" />
      <Circles numCircles={50} animationType="fall" />
      <div className="bottom-project-gradient h-full w-full absolute top-0 left-0"></div>
    </div>
  );
};
const ProjectPage = ({
  year = "2024",
  name = "Project name",
  services = "Client",
  skills = ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
}) => {
  return (
    <div className="w-screen h-screen bg-transparent flex items-center justify-center z-10 py-25 px-15">
      <div className="h-full w-3/9 relative">
        <div className="h-[1px] w-full bg-black"></div>
        <div className="w-full text-sm font-poppins py-5 flex">
          <p className="ml-auto">{year}</p>
        </div>
        <div className="font-josefin">
          <h1 className="text-4xl font-medium">{name}</h1>
          <p className="font-normal text-sm">{services}</p>
        </div>
        <div className="absolute bottom-0 text-sm text-[#484848] gap-0.5">
          {skills.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>

      <ProjectImage />
    </div>
  );
};

const ProjectImage = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isHovered) {
        setMousePos({ x: e.clientX, y: e.clientY });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isHovered]);

  return (
    <>
      {isHovered && <Cursor x={mousePos.x} y={mousePos.y} />}
      <a
        className="h-full w-6/9 relative cursor-none overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        href="https://www.olivarezcollegetagaytay.edu.ph/"
        target="_blank"
      >
        <div className="h-full w-full z-20 absolute top-0 -right-10">
          <img
            className="h-full w-full object-cover"
            src="./img/projects/octProject.png"
            alt=""
          />
        </div>
      </a>
    </>
  );
};

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}
const Circles = ({ numCircles = 150, animationType = "rise" }) => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    const newCircles = [];

    for (let i = 0; i < numCircles; i++) {
      const left = getRandomNumber(0, 100);
      const delay = getRandomNumber(0, 20);
      const duration = getRandomNumber(10, 80);
      const size = getRandomNumber(1, 3);

      newCircles.push({
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        width: `${size}px`,
        height: `${size}px`,
      });
    }

    setCircles(newCircles);
  }, [numCircles]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((style, idx) => (
        <div
          key={idx}
          style={{
            ...style,
            position: "absolute",
            bottom: animationType === "rise" ? "-10px" : "auto",
            top: animationType === "fall" ? "-10px" : "auto",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(247, 127, 0, 1) 0%, rgba(234, 226, 183, 0.1) 100%)",
            boxShadow: "0 0 5px 1px rgba(247,127,0,0.4)",
            animationName: animationType,
            animationTimingFunction: "linear",
            animationIterationCount: "infinite",
          }}
        />
      ))}
    </div>
  );
};

const Cursor = ({ x, y }) => {
  return (
    <div
      className="pointer-events-none absolute h-20 w-20 rounded-full z-40 flex items-center justify-center"
      style={{
        top: `${y + 15}px`,
        left: x,
        transform: "translate(-50%, -50%)",
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md bg-black opacity-5 rounded-full z-0" />
      <span className="z-10 text-white">view</span>
    </div>
  );
};

export default Projects;
