import React from "react";
import { getColor } from "../utils";

const StatusDisplay = ({ status }: any) => {
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
