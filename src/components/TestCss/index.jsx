import React from "react";

const TestCss = () => {
  return (
    <div
      style={{
        // display: "flex",
        // alignItems: "center",
        color: "red",
        fontSize: "24px",
      }}
    >
      <span
        style={{ fontSize: "48px", fontWeight: "bold", marginRight: "4px", backgroundColor: "yellow" } }
      >
        2
      </span>
      <span style={{ marginLeft: "12px" }}>次</span>
      <span style={{ margin: "0 12px" }}>|</span>
      <span>共5次</span>
    </div>
  );
};

export default TestCss;
