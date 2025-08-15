// src/components/Container.jsx
import React from "react";

export default function Container({ children, className = ""  , maxWidth}) {
  return (
    <div
      className={`mx-auto px-4 ${className}`}
      style={{
        width: "100%",
        maxWidth: maxWidth ,
      }}
    >
      {children}
    </div>
  );
}
