import React from "react";
import "../index.css";

interface CRTShellProps {
  children: React.ReactNode;
}

const CRTShell: React.FC<CRTShellProps> = ({ children }) => {
  return (
    <div className="crt relative w-full h-screen flex items-center justify-center font-mono text-2xl">
      <div className="p-6 text-center glow">{children}</div>
    </div>
  );
};

export default CRTShell;
