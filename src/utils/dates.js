const REGEX_DATE = /^\d{4}-\d{2}-\d{2}$/;

export const getDatesBetweenDates = (startDate, endDate) => {
  const listDate = [];

  if (!startDate || !endDate) {
    return listDate;
  }
  
  if (!startDate.match(REGEX_DATE) && !endDate.match(REGEX_DATE)) {
    return listDate;
  }

  endDate = new Date(endDate);
  startDate = new Date(startDate);

  while (startDate < endDate){
    const strDate = startDate.toISOString().slice(0,10);
    listDate.push(strDate);
    startDate.setDate(startDate.getDate() + 1);
  };
  
  return listDate;
}
