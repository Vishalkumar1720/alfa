import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export default function Scene(props) {
  const { scene, animations } = useGLTF("/models/scene.gltf");
  const { actions } = useAnimations(animations, scene);

  React.useEffect(() => {
    if (actions && Object.keys(actions).length > 0) {
      actions[Object.keys(actions)[0]].play(); // Play first animation
    }
  }, [actions]);

  return <primitive object={scene} {...props} />;
}
