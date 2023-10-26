import { Status } from "../types";

export const formatTimeStamp = (timestamp: string) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  const date = new Date(timestamp);
  const formattedDate = date.toLocaleString("en-US", options);
  return formattedDate;
};

export const getColor = (status: string) => {
  let color = "bg-slate-700";
  switch (status.toLowerCase()) {
    case Status.DONE:
      return "bg-green-200";
    case Status.STARTED:
      return "bg-yellow-200";
    case Status.NOT_STARTED:
      return "bg-red-200";
  }
  return color;
};
