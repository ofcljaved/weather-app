export default function changeTemp(temp, unit) {
  if (unit === "fahrenheit") {
    for (const key in temp) {
      temp[key] = ((temp[key] * 9) / 5 + 32).toFixed(2);
    }
    return temp;
  }
  for (const key in temp) {
    temp[key] = (((temp[key] - 32) * 5) / 9).toFixed(2);
  }
  return temp;
}
