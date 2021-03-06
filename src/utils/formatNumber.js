export function formatDate(date) {
  const hour = parseInt(date.toString().slice(11, 13), 10);
  return hour > 12 ? `${(hour - 12).toString()} PM` : `${hour.toString()} AM`;
}
