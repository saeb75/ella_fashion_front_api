import img1 from "../assents/bigBanner/1.webp";
import img2 from "../assents/bigBanner/2.jpg";
import img3 from "../assents/bigBanner/3.jpg";
import img4 from "../assents/bigBanner/4.jpg";
import img5 from "../assents/bigBanner/5.jpg";
import { GrLocation } from "react-icons/gr";
export let homeBigBanner = [
  {
    img: img1,
    button: "shop high fashion",
  },
  {
    img: img2,
    button: "shop casualwear",
  },
  {
    img: img3,
    button: "shop formalwear",
  },
  {
    img: img4,
    button: "stores location",
    icon: (
      <GrLocation
        style={{ fontSize: "1.3rem", marginBottom: 5, marginRight: 5 }}
      />
    ),
  },
];
export let singleProductBigBanner = [
  {
    img: img5,
    button: "shop high fashion",
  },
  {
    img: img3,
    button: "shop formalwear",
  },
  {
    img: img2,
    button: "shop casualwear",
  },

  {
    img: img4,
    button: "stores location",
    icon: (
      <GrLocation
        style={{ fontSize: "1.3rem", marginBottom: 5, marginRight: 5 }}
      />
    ),
  },
];
