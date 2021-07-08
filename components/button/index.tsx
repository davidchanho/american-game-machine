import React from "react";

interface Props {
  label: string;
  isDark: boolean;
}

function Button({ label, isDark }: Props) {
  if (isDark) return <button className="btn btn-dark">{label}</button>;
  
  return <button className="btn btn-light">{label}</button>;
}

export default Button;
