import React from 'react';
import '@google/model-viewer';

export default function ModelViewer() {
  return (
    <model-viewer
      src="/finalCup.glb"
      alt="3D Coffee Cup"
      auto-rotate
      camera-controls
      disable-zoom
      disable-tap
      environment-image="neutral"   // better light reflection
      exposure="1.2"                // brighten the scene
      style={{ width: '100%', height: '500px' }}
      background-color="#ffffff"
    ></model-viewer>
  );
}
