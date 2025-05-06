// import { useEffect, useRef, useState } from "react";

// const CustomCursor = () => {
//   const cursorRef = useRef(null);
//   const [hovering, setHovering] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {

//       const cursor = cursorRef.current;
//       if (cursor) {
//         cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
//       }
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//     };
//   }, []);

//   return (
//     <div>

//       <div
//         ref={cursorRef}
//         className={`pointer-events-none fixed top-0 left-0 w-24 h-24 rounded-full z-[9999] transition-transform duration-200 ease-out ${
//           hovering ? "opacity-100 mix-blend-difference" : "opacity-0"
//         }`}
//         style={{
//           backgroundColor: "white",
//           transform: "translate(-100px, -100px)",
//         }}
//       />
//     </div>
//   );
// };

// export default CustomCursor;
