import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const [randomGif, setRandomGif] = useState("");
  const [loading, setLoading] = useState("false");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const { data } = await axios.get(url);
    const imageUrl = data.data.images.downsized_medium.url;
    setRandomGif(imageUrl);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    fetchData();
  }

  return (
    <div className="bg-slate-200 w-1/2 rounded-lg justify-center items-center flex flex-col  hover:shadow-md  hover:shadow-white duration-300 transition-all   gap-6 ">
      <h1 className=" bg-[#999DAA] px-[10.5rem] py-[0.75rem] rounded-md text-2xl font-bold  underline leading-normal mb-7  ">
        Random GIF
      </h1>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={randomGif}
            alt="Taken Away by aliens, trying to recover it"
            height="200"
          />
        )}
      </div>

      <div className="px-[3.5rem] py-[1rem] border-2 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500  placeholder-gray-500"></div>

      <button
        onClick={clickHandler}
        className="bg-blue-400 py-[0.85rem] px-[7rem] text-xl font-medium rounded-md hover:shadow-md hover:shadow-slate-700 duration-200 transition-all border-gray-700  border-b-4  "
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
