import in0 from "../assests/images/interior/in0.jpg";
import ex1 from "../assests/images/exterior/ex1.jpg";
import roof1 from "../assests/images/RenovationRoof/roof1.jpg";
import Renovating1 from "../assests/images/RenovationRoof/Renovating1.jpg";
import fence from "../assests/images/fences/fence.jpg";

export const serviceData = [
  {
    id: "1",
    imgsrc: `${in0}`,
    heading: "Interior Painting",
    description:
      "When it comes to interior painting, we understand that it's more than just a new coat of paint. It's an opportunity to transform your space into a beautiful and welcoming home. Our team will work closely with you to understand your vision and preferences, and will tailor our services to meet your specific needs. We use only the best paints, finishes, and tools, ensuring that your project is completed to the highest standards.",
  },
  {
    id: "2",
    imgsrc: `${ex1}`,
    heading: "Exterior Painting",
    description:
      "The exterior of your home is the first thing people see, and it's important to make a good impression. At Exclusive Painters, we offer professional exterior painting services that will not only enhance the appearance of your home, but also protect it from the elements. Our team will carefully prepare surfaces, repair any damages, and use high-quality paints and finishes to ensure that your home looks great for years to come.",
  },
  {
    id: "3",
    imgsrc: `${roof1}`,
    heading: "Roof Painting",
    description:
      "A fresh coat of paint can do wonders for the appearance of your roof, and it's an important part of maintaining the overall integrity of your home. At Exclusive Painters, we offer professional roof painting services that will not only enhance the appearance of your roof, but also protect it from weathering and wear. Our team will carefully prepare surfaces,repair any damages, and use high-quality paints and finishes to ensure that your roof looks great and lasts for years to come.",
  },
  {
    id: "4",
    imgsrc: `${Renovating1}`,
    heading: "Renovation Painting",
    description:
      "If you are undertaking a renovation project, it's important to choose a painting company that can handle all of your needs. At Exclusive Painters, we offer professional renovation painting services that will help bring your vision to life. Our team has the skills and experience to handle all aspects of your renovation project, including painting, wallpapering,and more. We will work closely with you to ensure that your renovation project is completed to the highest standards, and that your home looks and feels exactly the way you want it to.",
  },
  {
    id: "5",
    imgsrc: `${fence}`,
    heading: "Fence Painting",
    description:
      "Fences serve an important function in protecting and defining your property, and they also add to the overall appearance of your home. At Exclusive Painters, we offer professional fence painting services that will not only enhance the appearance of your fence, but also protect it from weathering and wear. Our team will carefully prepare surfaces, repair any damages, and use high-quality paints and finishes to ensure that your fence looks great and lasts for years to come.",
  },
];
export default function getServiceData() {
  return serviceData;
}
