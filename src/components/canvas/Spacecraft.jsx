import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Spacecraft = () => {
  const Spacecraft = useGLTF("./spacecraft/scene.gltf");

  return (
    <primitive object={Spacecraft.scene} scale={0.2} position-y={0} rotation-y={0} />
  );
};

const SpacecraftCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    ><ambientLight intensity={0.2} /> 
    <pointLight position={[10, 10, 10]} />
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Spacecraft />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpacecraftCanvas;
