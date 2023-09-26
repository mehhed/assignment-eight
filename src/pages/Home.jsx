import { useContext, useEffect, useState } from "react";
import HomeCard from "../Components/HomeCard";
import { Alldata } from "../Mainlaout";
import { Input } from "postcss";

export let DetaisData = 10;
const Home = () => {
  let homecardDatas = useContext(Alldata);
  const [forSearch, setforSearch] = useState(homecardDatas);
  const [searchText, setsearchtext] = useState("");

  function handleSearch() {
    let input = document.getElementById("searchInput").value;
    setsearchtext(input);
  }

  useEffect(() => {
    if (
      searchText.toUpperCase() === "HEALTH" ||
      searchText.toUpperCase() === "EDUCATION" ||
      searchText.toUpperCase() === "CLOTHING" ||
      searchText.toUpperCase() === "FOOD"
    ) {
      let searchResult = homecardDatas.filter(
        (pera) => pera.category === searchText
      );
      setforSearch(searchResult);
    } else {
      setforSearch(homecardDatas);
    }
  }, [homecardDatas, searchText]);
  console.log(forSearch);
  return (
    <div>
      {/* banenr section */}
      <div>
        <div
          className="hero md:min-h-[500px] lg:min-h-[600px] min-h-[450px] -mt-32"
          style={{
            backgroundImage:
              "url(https://raw.githubusercontent.com/mehhed/assignment-img/main/Clothing.png)",
          }}>
          <div className="hero-overlay bg-[#FFFFFFF2] bg-opacity-20"></div>
          <div className="hero-content text-center text-neutral-content w-full">
            <div className="max-w-[1600px] mx-auto lg:px-[140] px-5 md:px-10">
              <h1 className="mb-12 lg:text-5xl md:text-4xl text-3xl font-bold text-black">
                I Grow By Helping People In Need
              </h1>
              <div className="max-w-[400px] mx-auto">
                <div className="form-control w-full">
                  <div className="input-group w-full">
                    <input
                      type="text"
                      placeholder="Search here...."
                      className="input input-bordered w-full focus:outline-none"
                      id="searchInput"
                    />
                    <button
                      className="btn btn-square bg-[#FF444A] text-white  capitalize w-[70px]"
                      onClick={handleSearch}>
                      Search
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* cards */}
      <div className="max-w-[1600px] mx-auto lg:px-[120px] md:px-[60px] px-[20px] my-10 grid grid-cols-1 lg:grid-cols-2  xl:grid-cols-4 gap-5">
        {forSearch.map((data) => (
          <HomeCard data={data} key={data.id}></HomeCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
