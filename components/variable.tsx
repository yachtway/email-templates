import React from "react";

const Variable: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    {"{{"}{children}{"}}"}
  </>
);

export default Variable;
