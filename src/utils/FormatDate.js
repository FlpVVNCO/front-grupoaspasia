export const formattedDate = (date) =>
  new Date(date).toLocaleDateString("en-En", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
