export const jobDatas = [
  {
    id: "1excint",
    h1: "Interior Painting",
    desc: "If you are struggling to get an interior paint finish which can help tie together your architraves, the skirtings, the furniture, items of fine art, etc., it is time to get your home or business painted to enhance its look.",
    interiorJobs: { id: "1int", intSource: "../Images/Interior/in66.jpg" },
    interiorJobs: { id: "2int", intSource: "../Images/Interior/in6.jpg" },
    interiorJobs: { id: "3int", intSource: "../Images/Interior/in1.jpg" },
    interiorJobs: { id: "4int", intSource: "../Images/Interior/in2.jpg" },
    interiorJobs: { id: "5int", intSource: "../Images/Interior/in3.jpg" },
    interiorJobs: { id: "6int", intSource: "../Images/Interior/in4.jpg" },
    interiorJobs: { id: "7int", intSource: "../Images/Interior/in4.jpg" },
  },
  {
    id: "2excint",
    h1: "Exterior Painting",
    desc: " Have you ever thought how your home or business looks from the outside? It is time to act fast and end your frustration with the sloppy job done by uncaring painters.",
    exteriorJobs: { id: "1ext", extSource: "../Images/Exterior/ex1.jpg" },
    exteriorJobs: { id: "2ext", extSource: "../Images/Exterior/ex2.jpg" },
    exteriorJobs: { id: "3ext", extSource: "../Images/Exterior/ex22.jpg" },
    exteriorJobs: { id: "4ext", extSource: "../Images/Exterior/ex3.jpg" },
    exteriorJobs: { id: "5ext", extSource: "../Images/Exterior/ex33.jpeg" },
    exteriorJobs: { id: "6ext", extSource: "../Images/Exterior/ex6.jpg" },
    exteriorJobs: { id: "7ext", extSource: "../Images/Exterior/ex66.jpg" },
    exteriorJobs: { id: "7ext", extSource: "../Images/Exterior/ex5.jpg" },
  },
  {
    id: "3excrenoroof",
    h1: "Renovation & roof Painting",
    desc: " Is your home or commercial premise in need of renovation painting services?Do you worry at the very thought of painting the roof all by yourself? We are here to help.",

    renoroofJobs: {
      id: "1renoroof",
      renoroofSource: "../Images/Renovation&Roof/r1.jpg",
    },

    renoroofJobs: {
      id: "2renoroof",
      renoroofSourceextSource: "../Images/Renovation&Roof/r2.jpg",
    },

    renoroofJobs: {
      id: "3renoroof",
      renoroofSourceextSource: "../Images/Renovation&Roof/roof.jpg",
    },

    renoroofJobs: {
      id: "4renoroof",
      renoroofSource: "../Images/Renovation&Roof/Renovating1.jpg",
    },

    renoroofJobs: {
      id: "5renoroof",
      renoroofSource: "../Images/Renovation&Roof/Renovating.jpg",
    },

    renoroofJobs: {
      id: "6renoroof",
      renoroofSource: "../Images/Renovation&Roof/Renovating2.jpg",
    },

    renoroofJobs: {
      id: "7renoroof",
      renoroofSourceextSource: "../Images/Renovation&Roof/Renovating3.png",
    },
  },
];

export default function getJobDatas() {
  return jobDatas;
}
