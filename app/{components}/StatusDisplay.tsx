import React from "react";

const StatusDisplay = ({ status }: any) => {
  const getColor = (status: string) => {
    let color = "bg-slate-700";
    switch (status.toLowerCase()) {
      case "done":
        return "bg-green-200";
      case "started":
        return "bg-yellow-200";
      case "not started":
        return "bg-red-200";
    }
    return color;
  };

  return (
    <span
      className={`inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 ${getColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default StatusDisplay;
