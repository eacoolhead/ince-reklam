// src/components/ui/button.js
import React from 'react';

export function Button({ children, className, ...props }) {
  return (
    <button className={`px-6 py-3 rounded-full text-lg ${className}`} {...props}>
      {children}
    </button>
  );
}
