import React from "react";

interface Spinner {
  h: string;
  w: string;
}
const Spinner = ({ h, w }: Spinner) => {
  const height = h || "h-10";
  const width = w || "w-10";
  return (
    <div
      className={`border-gray-300 ${height} ${width} animate-spin rounded-full border-4 border-t-blue-600} flex`}
    />
  );
};

export default Spinner;
