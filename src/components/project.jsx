import React, { Component } from "react";
import $ from "jquery";
import "../loader";

class Projects extends Component {
  state = {};

  componentDidMount() {
    $(function() {
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        center: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 1,
          },
          1000: {
            items: 3,
          },
        },
      });
    });
  }

  render() {
    const { datas } = this.props;
    return (
      <section id="slider" className="container-fluid mt-5 pt-5 ">
        <div className="row ">
          <h1 className="text-center pb-4">
            <b>Our Projects</b>
          </h1>

          <div className="slider position-relative">
            <div className="owl-carousel ">
              {datas.map((data) => (
                <div className="slider-card mb-3" key={data.id}>
                  <div
                    key={data.id}
                    className="d-flex justify-content-center align-items-center mb-4"
                  >
                    <img
                      src={data.intSource}
                      alt=""
                      style={{ width: "100%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
// const Projects = ({ datas }) => {
//   return (
//     <section id="slider" className="container-fluid mt-5 pt-5 ">
//       <div className="row ">
//         <h1 className="text-center pb-4">
//           <b>Our Projects</b>
//         </h1>

//         <div className="slider position-relative">
//           <div className="owl-carousel ">
//             {datas.map((data) => (
//               <div className="slider-card mb-3" key={data.id}>
//                 <div
//                   key={data.id}
//                   className="d-flex justify-content-center align-items-center mb-4"
//                 >
//                   <img src={data.intSource} alt="" style={{ width: "100%" }} />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;
