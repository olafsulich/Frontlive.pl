const getISOStringFromPublicationDate = (date: string): string => {
  const splittedDate = date.split("-");

  return new Date(
    Number(splittedDate[2]), // Year
    Number(splittedDate[1]) - 1, // Month
    Number(splittedDate[0]) // Day
  ).toISOString();
};

export default getISOStringFromPublicationDate;
