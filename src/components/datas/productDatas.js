import resene from "../assests/images/paintingbrand/resene.jpg";
import dulux from "../assests/images/paintingbrand/dulux.jpg";
import aalto from "../assests/images/paintingbrand/aalto.jpg";
import porters from "../assests/images/paintingbrand/porters.jpg";
import sikkens from "../assests/images/paintingbrand/sikkens.jpg";
import wattyl from "../assests/images/paintingbrand/wattyl.jpg";

export const productList = [
  {
    id: "1exproduct",
    imagesource: `${resene}`,
  },
  {
    id: "2exproduct",
    imagesource: `${dulux}`,
  },
  {
    id: "3exproduct",
    imagesource: `${aalto}`,
  },
  {
    id: "4exproduct",
    imagesource: `${porters}`,
  },
  {
    id: "5exproduct",
    imagesource: `${sikkens}`,
  },
  {
    id: "6exproduct",
    imagesource: `${wattyl}`,
  },
];

export default function getImageSource() {
  return productList;
}
