import React from "react";

interface Props {
  label: string;
  isDark: boolean;
}

function Button({ label, isDark }: Props) {
  return (
    <button className={`btn btn-${isDark ? "dark" : "light"}`}>{label}</button>
  );
}

export default Button;
