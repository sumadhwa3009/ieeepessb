// import all team images from src/assets/team
const teamImages = import.meta.glob("../assets/team/*.jpg", {
  eager: true,
  as: "url",
});

//function to get image URL by filename
const getImage = (filename) => teamImages[`../assets/team/${filename}`];

const teamData = {
  facultyAdvisor: [
    {
      name: "DR. SUMA UMESH",
      role: "Faculty Advisor",
      image: getImage("faculty.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
  ],
  executiveCommittee: [
    {
      name: "ROHAN",
      role: "Chair",
      image: getImage("chair.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "MEHAK R SHASHIDAR",
      role: "Vice Chair",
      image: getImage("vice_chair.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "MANU ATHREYA",
      role: "Secretary",
      image: getImage("secretary.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "CHETAN GOWDA",
      role: "Treasurer",
      image: getImage("treasurer.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "AJAY D BHAT",
      role: "R and D Head",
      image: getImage("r_and_d.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "SUMADHWA V",
      role: "Web Master",
      image: getImage("web_master.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "NITHIN SHETTY L",
      role: "Event Head",
      image: getImage("event_head.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
    {
      name: "BHARGAV M V",
      role: "Media Head",
      image: getImage("media.jpg"),
      socials: { linkedin: "#", instagram: "#" },
    },
  ],
};

export default teamData;
