export default function padStartZero(val) {
  return val < 10 ? `0${val}` : val;
}
