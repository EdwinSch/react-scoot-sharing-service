import { nanoid } from "nanoid";
import { FaSquareFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import techImg from "./assets/images/our-tech.jpg";
import integrityImg from "./assets/images/our-integrity.jpg";
import communityImg from "./assets/images/our-community.jpg";

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

export const faq = [
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
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
  },
  {
    id: nanoid(),
    question: "Do I need a license to ride?",
    answer:
      "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page.",
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
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
  },
  {
    id: nanoid(),
    question: "What if I damage my Scoot?",
    answer:
      "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting.",
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
