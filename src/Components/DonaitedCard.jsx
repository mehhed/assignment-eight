import React from "react";
import { Link } from "react-router-dom";

const DonaitedCard = ({ sendData }) => {
  const {
    id,
    title,
    category,
    text_button_bg_color,
    category_bg_color,
    card_bg_color,
    price,
    picture,
  } = sendData;
  //   console.log(sendData);
  return (
    <div>
      <div className="card card-side rounded-lg flex flex-col md:flex-row min-h-[240px] ">
        <figure>
          <img
            src={picture}
            alt="Movie"
            className="h-full md:w-[200px] w-full md:rounded-s-lg md:rounded-t-none rounded-t-lg rounded-b-none"
          />
        </figure>
        <div
          className="card-body md:rounded-e-lg rounded-b-lg"
          style={{ background: `${card_bg_color}` }}>
          <div>
            <span
              className={`p-1 rounded-sm bg-opacity-30  font-semibold inline-block px-2`}
              style={{
                background: `${category_bg_color}`,
                color: `${text_button_bg_color}`,
              }}>
              {category}
            </span>
            <h1 className="text-2xl font-semibold">{title}</h1>
            <h1
              className=" font-semibold"
              style={{ color: `${text_button_bg_color}` }}>
              {price}
            </h1>
          </div>
          {/* <p>{title}</p> */}
          <div className="card-actions">
            <Link
              className={`p-1 rounded-sm bg-opacity-30 text-[18px]  font-medium inline-block px-2`}
              style={{
                background: `${text_button_bg_color}`,
                color: `white`,
              }}>
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonaitedCard;
