import Matthew from "../../assets/Headshots/Matthew.jpg";
import James from "../../assets/Headshots/Jamatt.jpg";
import Andy from "../../assets/Headshots/Andy.jpg";
import Brian from "../../assets/Headshots/Brian.jpg";
import George from "../../assets/Headshots/George.jpg";
import Hamza from "../../assets/Headshots/Hamza.jpg";
import Thomas from "../../assets/Headshots/Thomas.jpg";
import Alex from "../../assets/Headshots/Alex.jpeg";
import Jerry from "../../assets/Headshots/Jerry.png";

interface Member {
  imgUrl: string;
  name: string;
  position: string;
  email: string;
  linkedin: string;
}

export const leads: Member[] = [
  {
    imgUrl: Matthew,
    name: "Matthew Singer",
    position: "#Head",
    email: "matthewsxnger@gmail.com",
    linkedin: "https://www.linkedin.com/in/matthewsingerr/",
  },
  {
    imgUrl: James,
    name: "James Li",
    position: "#Head",
    email: "lijames9532@gmail.com",
    linkedin: "https://www.linkedin.com/in/james-li-a81004275/",
  },
];

export const Row2: Member[] = [
  {
    imgUrl: Andy,
    name: "Andy Duong",
    position: "#Finance",
    email: "theandelope16@gmail.com",
    linkedin: "https://www.linkedin.com/in/andy-duong-380521300/",
  },
  {
    imgUrl: Thomas,
    name: "Thomas Lenh",
    position: "#Finance",
    email: "thomaslenh@gmail.com",
    linkedin: "https://www.linkedin.com/in/thomas-lenh-38216a248/",
  },
  {
    imgUrl: George,
    name: "George Woo",
    position: "#Design",
    email: "g.woo1187@gmail.com",
    linkedin: "https://www.linkedin.com/in/george-woo-a72bb62b2/",
  },
];

export const Row3: Member[] = [
    {
      imgUrl: Hamza,
      name: "Hamza Ammar",
      position: "#Tech",
      email: "hamza.k.ammar@gmail.com",
      linkedin: "https://www.linkedin.com/in/hamza-ammar-341531240/",
    },
    {
      imgUrl: Alex,
      name: "Alex Rusu",
      position: "#Tech",
      email: "alex.rusu0720@gmail.com",
      linkedin: "https://www.linkedin.com/in/alexandru-rusu-b8518527b/",
    },
    {
      imgUrl: Jerry,
      name: "Jerry Liu",
      position: "#Logistics",
      email: "jerryliu2678@gmail.com",
      linkedin: "https://www.linkedin.com/in/jerry-liu-28464b268/",
    },
    {
      imgUrl: Brian,
      name: "Brian Tram",
      position: "#Logistics",
      email: "brian.q.tram@gmail.com",
      linkedin: "https://www.linkedin.com/in/brian-tram-bb8312276/",
    },
  ];
