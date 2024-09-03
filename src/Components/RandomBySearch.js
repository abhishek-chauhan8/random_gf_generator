import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const RandomBySearch = () => {
  const [randomBySearch, setrandomBySearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [searchText, setSearchText] = useState("minions");

  async function fetchData() {
    setLoading(true);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchText}&offset=${offset}&limit=1`;
    const { data } = await axios.get(url);
    const imageUrl = data.data[0]?.images.downsized_medium.url;
    console.log(data);
    setLoading(false);
    setrandomBySearch(imageUrl);
  }

  useEffect(() => {
    fetchData();
  }, []);

  function clickHandler() {
    setOffset((prevOffset) => prevOffset + 1);
    fetchData();
  }

  function changeHandler(event) {
    setSearchText(event.target.value);
  }

  return (
    <div className="bg-slate-200 w-1/2 rounded-lg justify-center items-center  flex flex-col hover:shadow-md  hover:shadow-white duration-300 transition-all gap-6">
      <h1 className=" bg-[#999DAA] px-[7rem] py-[0.75rem] rounded-md text-2xl font-bold  underline leading-normal  mb-7  ">
        Random GIFs by Search
      </h1>

      <div>
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={randomBySearch}
            alt="Taken Away by aliens, trying to recover it"
          />
        )}
      </div>

      <input
        placeholder="Search For GIFs"
        className="w-1/3 px-[0.5rem]  py-[0.75rem] border-2 border-blue-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500  placeholder-gray-500 text-wrap  text-center placeholder:text-sm"
        onChange={changeHandler}
        value={searchText}
        id="searchText"
      ></input>

      <button
        onClick={clickHandler}
        className="bg-blue-400 py-[0.85rem] px-[7rem] text-xl font-medium rounded-md hover:shadow-md hover:shadow-slate-700 duration-200 transition-all border-gray-700  border-b-4  "
      >
        Generate
      </button>
    </div>
  );
};

export default RandomBySearch;
