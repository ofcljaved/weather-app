export default function WeatherContent() {
  return (
    <div className="grid gap-8 content-center grid-cols-2 grid-flow-dense font-medium text-xl text-[--tertiary-text]">
      <h1 className="col-start-2 text-center text-7xl">
        24<sup>o</sup>C|F
      </h1>
      <p className="col-start-1 text-center text-7xl">&#9729;</p>
      <h2 className="col-span-2 text-center text-4xl">Delhi, IN</h2>
      <p className="col-start-1">Sunrise: 5:41AM</p>
      <p className="col-start-1">Sunset: 18:55PM</p>
      <p className="col-start-2 text-end">
        Min: 24<sup>o</sup>C|F
      </p>
      <p className="col-start-2 text-end">
        Min: 24<sup>o</sup>C|F
      </p>
      <p className="col-span-2 text-center">Sun 30 Apr | 20:37 PM</p>
    </div>
  );
}
