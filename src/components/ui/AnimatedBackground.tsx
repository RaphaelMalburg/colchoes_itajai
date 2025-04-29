import React from "react";

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="bg1" cx="50%" cy="40%" r="60%" fx="50%" fy="40%" gradientTransform="rotate(10)">
            <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.7" />
            <stop offset="80%" stopColor="#e0e7ef" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <ellipse cx="720" cy="400" rx="700" ry="370" fill="url(#bg1)">
          <animate attributeName="rx" values="700;750;700" dur="10s" repeatCount="indefinite" />
          <animate attributeName="ry" values="370;400;370" dur="10s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
}
