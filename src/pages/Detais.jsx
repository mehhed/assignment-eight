import { useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Detais = () => {
  const all = useLoaderData();
  const { id } = useParams();

  const details = all.find((single) => single.id === parseFloat(id));
  const {
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = details;

  let getLocalStore = localStorage.getItem("Donaited");
  let localString = JSON.parse(getLocalStore);
  let janinakiKortasi = localString ? localString : [];
  const [bookmarkItems, setBookmarkItems] = useState(janinakiKortasi);

  // function for book mark items
  const bookMark = (bookMarkData) => {
    let newBookMark = all.find((findBokMark) => findBokMark.id == bookMarkData);
    // new new BookMark find in old read
    let find = bookmarkItems.find((findread) => findread.id === newBookMark.id);
    if (find) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You allready donaited thi's item!",
      });
    } else {
      let totalbookMark = [...bookmarkItems, newBookMark];
      //  total Bookmark send to localStorage
      const sendLocal = JSON.stringify(totalbookMark);
      localStorage.setItem("Donaited", sendLocal);
      setBookmarkItems(totalbookMark);
      Swal.fire({
        icon: "success",
        title: " Donation Successfull",
      });
    }
  };

  return (
    <div className="max-w-[1600px] lg:px-[120px] md:px-[60px] px-[20px] mx-auto my-5">
      <div>
        <div className="h-[500px] relative">
          <img src={picture} className="w-full h-full" alt="" />
          <span className="absolute bottom-0 left-0 w-full p-5 bg-black bg-opacity-50">
            <button
              className="inline-block px-6 py-4 rounded-sm text-xl font-semibold text-white"
              style={{ background: `${text_button_bg_color}` }}
              onClick={() => {
                bookMark(parseFloat(id));
              }}>
              Donate {price}
            </button>
          </span>
        </div>
        <div>
          <h1 className="text-4xl font-bold my-5">{title}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detais;
