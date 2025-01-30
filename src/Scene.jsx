import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Scene(props) {
  const modelPath = process.env.PUBLIC_URL + "/models/scene.gltf"; // ✅ Correct path for GitHub Pages
  const { scene, animations } = useGLTF(modelPath);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play(); // Play first animation
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
