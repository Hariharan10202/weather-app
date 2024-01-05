import { formatDistanceToNow, isToday, isYesterday } from "date-fns";

export const getTimeAgo = (timestamp: number) => {
  const distance = formatDistanceToNow(timestamp);

  if (isToday(timestamp)) {
    return distance === "less than a minute" ? "Just now" : `${distance} ago`;
  } else if (isYesterday(timestamp)) {
    return "yesterday";
  } else {
    return timestamp.toLocaleString();
  }
};
