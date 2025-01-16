import React from "react";

const SplineViewer = () => {
  return (
    <div style={{ width: "100%", height: "100%", overflow: "auto" }}>
      <iframe
        src="https://my.spline.design/dynamiciphonemockup-9ee35590da5a90055ff91b0841476232/"
        frameBorder="0"
        width="100%"
        height="100%"
        title="Spline 3D Viewer"
        style={{
          display: "block",
          border: "none",
        }}
      ></iframe>
    </div>
  );
};

export default SplineViewer;
