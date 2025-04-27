// import React, { useRef } from "react"; // Add useRef here
// import { Canvas } from "@react-three/fiber";
// import { useGLTF, OrbitControls } from "@react-three/drei";
// import { useFrame } from "@react-three/fiber";

// function Model({ setIsChatOpen }) {
//   const { scene } = useGLTF("/avatar.glb"); // Path to your .glb in public folder
//   const modelRef = useRef();

//   // Simple side-to-side movement
//   useFrame(() => {
//     if (modelRef.current) {
//       modelRef.current.position.x = Math.sin(Date.now() * 0.001) * 2;
//     }
//   });

//   return (
//     <primitive
//       ref={modelRef}
//       object={scene}
//       scale={1}
//       position={[0, -1, 0]}
//       onClick={() => setIsChatOpen(true)}
//       onPointerOver={(e) => (e.object.cursor = "pointer")}
//     />
//   );
// }

// function Avatar({ setIsChatOpen }) {
//   return (
//     <Canvas style={{ height: "100vh", width: "100vw" }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <Model setIsChatOpen={setIsChatOpen} />
//       <OrbitControls enableZoom={false} />
//     </Canvas>
//   );
// }

// export default Avatar;