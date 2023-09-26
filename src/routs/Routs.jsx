import { createBrowserRouter } from "react-router-dom";
import Mainlaout from "../Mainlaout";
import Home from "../pages/Home";
import Errorpage from "../pages/Errorpage";
import Donation from "../pages/Donation";
import Statistics from "../pages/Statistics";
import Detais from "../pages/Detais";

const Routs = createBrowserRouter([
  {
    path: "/",
    element: <Mainlaout></Mainlaout>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/Donation",
        element: <Donation></Donation>,
      },
      {
        path: "/Statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/details/:id",
        element: <Detais></Detais>,
        loader: () => {
          return fetch("../../public/donait.json");
        },
      },
    ],
  },
]);

export default Routs;
