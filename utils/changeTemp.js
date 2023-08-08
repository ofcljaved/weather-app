export default function changeTemp(temp, unit) {
  console.log(temp, unit);
  if (unit === "fahrenheit") {
    return Math.round((temp * 9) / 5) + 32;
  }
  return Math.round(((temp - 32) * 5) / 9);
}
