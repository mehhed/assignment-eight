import { Outlet } from "react-router-dom";
import Nav from "./navbar/Nav";
import { createContext, useEffect, useState } from "react";

export const Alldata = createContext();

const Mainlaout = () => {
  const [donaitData, setDonaitData] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mehhed/assignment-img/main/Blogdata.json"
    )
      .then((res) => res.json())
      .then((data) => setDonaitData(data));
  }, []);
  return (
    <div>
      <div className="h-screen flex flex-col">
        <div className="w-full">
          <Nav></Nav>
        </div>
        <Alldata.Provider value={donaitData}>
          <div className="flex-grow w-full">
            <Outlet></Outlet>
          </div>
        </Alldata.Provider>
      </div>
    </div>
  );
};

export default Mainlaout;
