export const getFormattedDate = (dateString: string): string => {
  const d = new Date(dateString);
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();

  return `${day}-${month}-${year}`;
};
