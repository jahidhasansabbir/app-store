import { useLoaderData } from "react-router";
import Slider from "../components/Slider/Slider";
import ShowApps from "../components/ShowApps/ShowApps";
import { useEffect, useState } from "react";
import Testomonials from "../components/Testomonials/Testomonials";

const Apps = () => {
  const apps = useLoaderData();
  const [data, setData] = useState([]);
  useEffect(() => {
    document.title = "Apps | AppStore";
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);
  console.log(data);
  const trendingApps = apps
    .slice()
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);
  const productivityApps = apps.filter((app) => app.category == "Productivity");
  const educationalApps = apps.filter((app) => app.category == "Education");
  const healthApps = apps.filter((app) => app.category == "Health");
  return (
    <>
      <div>
        <Slider></Slider>
      </div>
      {/* trending apps */}
      <div className="my-6 md:my-16 space-y-4">
        <h1 className="text-lg md:text-4xl font-bold ">Trending Apps</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-xl">
          {trendingApps.map((app) => (
            <ShowApps key={app.id} app={app}></ShowApps>
          ))}
        </div>
      </div>
      {/* Educational apps */}
      <div className="my-6 md:my-16 space-y-4">
        <h1 className="text-lg md:text-4xl font-bold ">Educational Apps</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-xl">
          {educationalApps.map((app) => (
            <ShowApps key={app.id} app={app}></ShowApps>
          ))}
        </div>
      </div>
      {/* Health apps */}
      <div className="my-6 md:my-16 space-y-4">
        <h1 className="text-lg md:text-4xl font-bold ">Health Apps</h1>
        <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-xl">
          {healthApps.map((app) => (
            <ShowApps key={app.id} app={app}></ShowApps>
          ))}
        </div>
      </div>
      {/* Productivity apps */}
      <div className="my-6 md:my-16 space-y-4">
        <h1 className="text-lg md:text-4xl font-bold ">Productivity Apps</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-100 rounded-xl">
          {productivityApps.map((app) => (
            <ShowApps key={app.id} app={app}></ShowApps>
          ))}
        </div>
      </div>
      {/* testimonials */}
      <div className="my-6 md:my-16 space-y-4">
        <h1 className="text-lg md:text-4xl font-bold ">Testimonials</h1>
        <div className=" space-y-4 ">
          {data.map((t) => (
            <Testomonials key={t.id} t={t}></Testomonials>
          ))}
        </div>
      </div>
    </>
  );
};

export default Apps;
