import React, { Component } from "react";
import getServiceData, { serviceData } from "./datas/serviceData";
class Services extends Component {
  state = {
    datas: getServiceData(),
    length: serviceData.length,
    counter: 0,
  };

  render() {
    return (
      <section id="services">
        <div className="container">
          <div className="row ">
            <p className="serviceparagraph">
              At Exclusive Painters, we offer a wide range of painting and
              renovation services for both residential and commercial
              properties. Our team of experienced and skilled professionals is
              dedicated to delivering exceptional results and exceptional
              customer service.
            </p>

            {this.state.datas.map((data) => (
              <div
                className="row serviceCard"
                style={{ padding: "25px 0 25px 0", marginTop: "25px" }}
              >
                <div className="col-lg-6">
                  <div className="card-body">
                    <h4 className="card-title">{data.heading}</h4>
                    <p
                      className="card-text"
                      style={{ textAlign: "justify", textAlignL: "center" }}
                    >
                      {data.description}
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <img
                    style={{ width: "40rem" }}
                    src={data.imgsrc}
                    class="card-img-right img-fluid"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* <p>
            Overall, hiring an interior painting service in Central Auckland can
            be a convenient and cost-effective way to freshen up the look of
            your home or business. Be sure to do your research and choose a
            reputable and experienced painter to ensure that the job is done to
            your satisfaction.
          </p>
          <p>
            Interior painting services in Central Auckland are companies that
            provide professional painting services for the inside of buildings.
            These services can include painting walls, ceilings, trim, and other
            interior surfaces. The process of hiring an interior painting
            service typically begins with a consultation, where the painter will
            assess the scope of the project and provide an estimate of the cost
            and time required to complete the work. It is important to choose a
            reputable and experienced painter to ensure that the job is done
            properly and to your satisfaction. Before beginning the painting
            process, the painter will usually prepare the surfaces by repairing
            any damage, filling in any holes or cracks, and sanding down rough
            areas. They will then apply a primer to the surfaces to ensure that
            the paint adheres properly and to provide a consistent base for the
            final coat. Once the primer has dried, the painter will begin
            applying the paint. They may use brushes, rollers, or sprayers to
            apply the paint, depending on the size and type of the surfaces
            being painted.They will usually work from the top of the room down,
            and may use masking tape and paper to protect areas that should not
            be painted. After the paint has dried, the painter will remove any
            masking materials and clean up the work area. They may also touch up
            any areas that need it and apply a final coat of paint, if
            necessary.
          </p>
          <p>
            There are many reasons to hire professional interior painting
            services in Central Auckland. Whether you are looking to refresh the
            look of your home, increase its value, or simply want to update the
            color scheme, a professional painter can help you achieve the
            desired results. Here are some key considerations when it comes to
            hiring interior painting services in Central Auckland: Expertise: A
            professional painter has the knowledge, skills, and experience to
            complete your painting project with excellent results. They will be
            able to help you choose the right paint, finishes, and colors for
            your home, and will have the tools and equipment necessary to get
            the job done efficiently and effectively. Quality: Professional
            painters use high-quality paints and finishes that are designed to
            last and withstand wear and tear. They also have the expertise to
            properly prepare surfaces, ensuring that the paint adheres well and
            looks great for years to come. Efficiency: A professional painter
            will be able to complete your project in a timely manner, minimizing
            disruption to your daily routine. They will also be able to handle
            any necessary repairs or touch-ups, ensuring that the final result
            is flawless. Safety: Painting can be a hazardous task, particularly
            when working with ladders or high surfaces. A professional painter
            has the training and equipment to work safely, protecting themselves
            and your home. Warranty: Many professional painting companies offer
            warranties on their work, giving you peace of mind and protection
            against any potential issues that may arise. If you are considering
            hiring interior painting services in Central Auckland, it is
            important to choose a reputable company with a proven track record
            of delivering high-quality results. Look for a company that is
            licensed, insured, and has a strong reputation within the community.
            By working with a professional, you can be confident that your
            painting project will be completed to the highest standards, giving
            you a beautiful and durable finish that you can enjoy for years to
            com
          </p> 
          
          <p>
          Are you looking to give your home a fresh new look? Consider hiring professional interior painting services in Central Auckland. With their expertise, quality materials, and attention to detail, a professional painter can help you transform your space into a beautiful and welcoming home.

Here are some key benefits of hiring interior painting services in Central Auckland:

Expertise: A professional painter has the knowledge, skills, and experience to complete your painting project with excellent results. They will be able to help you choose the right paint, finishes, and colors for your home, and will have the tools and equipment necessary to get the job done efficiently and effectively.

Quality: Professional painters use high-quality paints and finishes that are designed to last and withstand wear and tear. They also have the expertise to properly prepare surfaces, ensuring that the paint adheres well and looks great for years to come.

Efficiency: A professional painter will be able to complete your project in a timely manner, minimizing disruption to your daily routine. They will also be able to handle any necessary repairs or touch-ups, ensuring that the final result is flawless.

Safety: Painting can be a hazardous task, particularly when working with ladders or high surfaces. A professional painter has the training and equipment to work safely, protecting themselves and your home.

Warranty: Many professional painting companies offer warranties on their work, giving you peace of mind and protection against any potential issues that may arise.

If you are considering hiring interior painting services in Central Auckland, it is important to choose a reputable company with a proven track record of delivering high-quality results. Look for a company that is licensed, insured, and has a strong reputation within the community. By working with a professional, you can be confident that your painting project will be completed to the highest standards, giving you a beautiful and durable finish that you can enjoy for years to come.
          </p>
          */}
        </div>
      </section>
    );
  }
}

export default Services;
