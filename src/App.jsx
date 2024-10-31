/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { OrbitControls,useGLTF,useAnimations } from "@react-three/drei";
import { useEffect } from "react";

function Model(){
  const {scene,animations} = useGLTF('model/personPack.glb')
  const {actions} = useAnimations(animations,scene)
  useEffect(() => {
    // 启动第一个动画（如果存在的话）
    const firstAnimation = Object.values(actions)[0];
    if (firstAnimation) {
      firstAnimation.play();
    }
  }, [actions]);
  return <primitive object={scene} />;
}

function App() {
  return (
    <Canvas
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <OrbitControls />
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Model />
    </Canvas>
  );
}

export default App;
