//https://api.openweathermap.org/data/2.5/weather?lat=28.6542&lon=77.2373&appid=28754fda811e80b66d050314a817eefb

// https://api.openweathermap.org/data/2.5/weather?q=Delhi,IN&appid=28754fda811e80b66d050314a817eefb

export default async function fetchWeather(city, state, country) {
  const appid = process.env.API_KEY;
  console.log(appid);
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appid}&units=metric`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
    return false;
  }
}
