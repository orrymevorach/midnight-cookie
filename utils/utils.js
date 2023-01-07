export const htmlRegex = /<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g;

export const formatDate = ({ date }) => {
  const mapToMonth = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  };
  const year = new Date(date).getFullYear();
  const month = mapToMonth[new Date(date).getMonth() + 1];
  const day = new Date(date).getDate();
  return `${month} ${day}, ${year}`;
};
