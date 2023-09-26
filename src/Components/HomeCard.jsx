import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const HomeCard = ({ data }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = data;
  return (
    <Link to={`details/${id}`}>
      <div className="card card-compact min-h-[350px] rounded-sm ">
        <figure>
          <img className="w-full" src={picture} alt="Shoes" />
        </figure>
        <div
          className={`card-body  rounded-b-lg`}
          style={{ background: `${card_bg_color}` }}>
          <p className="flex-grow-0">
            <button
              className={`p-1 rounded-sm bg-opacity-30  font-semibold inline-block px-2`}
              style={{
                background: `${category_bg_color}`,
                color: `${text_button_bg_color}`,
              }}>
              {category}
            </button>
          </p>
          <p
            className={`text-xl font-semibold`}
            style={{ color: `${text_button_bg_color}` }}>
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};

HomeCard.propTypes = {
  data: PropTypes.object, // Expect a string
  handleDetails: PropTypes.func, // Expect a string
};

export default HomeCard;
