import { nanoid } from "nanoid";
import { FaSquareFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import techImg from "./assets/images/our-tech.jpg";
import integrityImg from "./assets/images/our-integrity.jpg";
import communityImg from "./assets/images/our-community.jpg";
import locate from "./assets/icons/locate.svg";
import scooter from "./assets/icons/scooter.svg";
import ride from "./assets/icons/ride.svg";

export const navLinks = [
  {
    linkTo: "/about",
    label: "about",
  },
  {
    linkTo: "/location",
    label: "location",
  },
  {
    linkTo: "/careers",
    label: "careers",
  },
];

export const instructionsData = [
  {
    id: 1,
    icon: locate,
    heading: "Locate with app",
    text: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away.",
  },
  {
    id: 2,
    icon: scooter,
    heading: "Pick your scooter",
    text: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost.",
  },
  {
    id: 3,
    icon: ride,
    heading: "Enjoy the ride",
    text: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps.",
  },
];

export const values = [
  {
    id: 1,
    img: techImg,
    value: "Our tech",
    text: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
  },
  {
    id: 2,
    img: integrityImg,
    value: "Our integrity",
    text: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
  },
  {
    id: 3,
    img: communityImg,
    value: "Our community",
    text: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
  },
];

export const socialLinks = [
  {
    icon: <FaInstagram />,
    url: "https://www.instagram.com/",
    label: "Instagram",
  },
  {
    icon: <FaXTwitter />,
    url: "https://www.twitter.com/",
    label: "X, formerly Twitter",
  },
  {
    icon: <FaSquareFacebook />,
    url: "https://www.facebook.com/",
    label: "Facebook",
  },
];

export const faqData = [
  {
    id: nanoid(),
    question: "How do I download the app?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    id: nanoid(),
    question: "Can I find a nearby Scoots?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt interdum congue. Sed nec tempor dolor. Maecenas scelerisque consequat ultrices. Nam molestie eros a posuere vestibulum. Nunc id nulla et tellus gravida placerat sed congue risus.",
  },
  {
    id: nanoid(),
    question: "Do I need a license to ride?",
    answer:
      "Nunc convallis pretium ipsum sed fringilla. Curabitur suscipit consequat elit, at tristique ex pharetra vel. Vivamus nec velit dictum, rutrum massa quis, fermentum ligula. Cras pulvinar ipsum in nunc aliquet egestas.",
  },
  {
    id: nanoid(),
    question: "Should I wear a helmet?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    id: nanoid(),
    question: "How about the rules & regulations?",
    answer:
      "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nibh lacus, finibus et volutpat a, laoreet sed lorem. Nullam quis lacinia orci.",
  },
  {
    id: nanoid(),
    question: "What if I damage my Scoot?",
    answer:
      "Praesent in tellus rhoncus ex consectetur ultrices. Praesent nisi justo, fermentum non porttitor nec, sagittis viverra enim. . Cras vestibulum, libero eget consequat varius, purus velit pellentesque quam, nec laoreet nisi purus at purus.",
  },
];

export const jobsData = [
  {
    id: nanoid(),
    title: "General Manager",
    location: "Jakarta, Indonesia",
  },
  {
    id: nanoid(),
    title: "UI/UX Designer",
    location: "Yokohama, Japan",
  },
  {
    id: nanoid(),
    title: "Blog Content Copywriter",
    location: "New York, United States",
  },
  {
    id: nanoid(),
    title: "Graphic Designer",
    location: "New York, United States",
  },
  {
    id: nanoid(),
    title: "Fleet Supervisor",
    location: "Jakarta, Indonesia",
  },
  {
    id: nanoid(),
    title: "UX Analyst",
    location: "London, United Kingdom",
  },
];
