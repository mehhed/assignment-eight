import React, { useEffect, useState } from "react";
import DonaitedCard from "../Components/DonaitedCard";

const Donation = () => {
  let getLocalStore = localStorage.getItem("Donaited");
  let localString = JSON.parse(getLocalStore);
  let janinakiKortasi = localString ? localString : [];
  const [donaited, setdoniter] = useState(janinakiKortasi);

  const [showallbutton, setshowallbutton] = useState(false);

  const [showOrHidebutton, setShoworHide] = useState(false);

  useEffect(() => {
    if (donaited.length > 4) {
      setShoworHide(true);
    }
  }, [donaited.length, showOrHidebutton]);

  const handleShowallbutton = () => {
    setshowallbutton(true);
    setShoworHide(false);
  };

  return (
    <div className="max-w-[1600px] mx-auto lg:px-[120px] md:px-[60px] px-[20px] mt-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {showallbutton
          ? donaited.map((forsend) => (
              <DonaitedCard sendData={forsend} key={forsend.id}></DonaitedCard>
            ))
          : donaited
              .slice(0, 4)
              .map((forsend) => (
                <DonaitedCard
                  sendData={forsend}
                  key={forsend.id}></DonaitedCard>
              ))}
      </div>
      <div className="text-center my-5">
        {showOrHidebutton && !showallbutton && (
          <button
            className="btn bg-green-500 text-white mx-auto"
            onClick={handleShowallbutton}>
            Show alls
          </button>
        )}
      </div>
    </div>
  );
};

export default Donation;
