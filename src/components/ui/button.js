
import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`transition font-medium ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
