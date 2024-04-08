export function dateToString(date) {
  return date.getFullYear() + '. ' + (date.getMonth() + 1) + '. ' + date.getDate();
}

export function calcDateDiff(date1, date2) {
  const diff = date1 > date2 ? date1 - date2 : date2 - date1;

  const minutes = Math.floor(diff / 1000 / 60);
  if (minutes < 2) return '1 minute ago';
  if (minutes <= 59) return `${minutes} minutes ago`;

  const hours = Math.floor(minutes / 60);
  if (hours < 2) return '1 hour ago';
  if (hours <= 23) return `${hours} hours ago`;

  const day = Math.floor(hours / 24);
  if (day < 2) return '1 day ago';
  if (day <= 30) return `${day} days ago`;

  const month = Math.floor(day / 30);
  if (month < 2) return '1 month ago';
  if (month <= 11) return `${month} months ago`;

  const year = Math.floor(month / 12);
  if (year < 2) return '1 year ago';
  return `${year} years ago`;
}
