export default function WeatherContent() {
  return (
    <div className="grid gap-8 content-center grid-cols-3 grid-flow-dense font-medium text-xl text-[--tertiary-text] bg-[--glass-bg] self-center px-12 py-14 rounded-3xl w-fit tracking-wider">
      <h1 className="col-start-2 col-end-4 text-center text-7xl">
        24&#8451;|F
      </h1>
      <p className="col-start-1 text-center text-7xl">&#9729;</p>
      <h2 className="col-span-full text-center text-4xl">Delhi, IN</h2>
      <div className="col-span-2">
        <p>Sunrise: 5:41AM</p>
        <p>Sunset: 18:55PM</p>
      </div>
      <div className="col-start-3 col-end-4">
        <p className="text-end">Min: 24&#8451;|F</p>
        <p className="text-end">Min: 24&#8451;|F</p>
      </div>
      <p className="col-span-full text-center">Sun 30 Apr | 20:37 PM</p>
    </div>
  );
}
