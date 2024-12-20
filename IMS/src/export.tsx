import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: paint,
    title: "Paint Inspection",
    about:
      "IMS Coatings experience inspectors can Conduct all required testing for surface preparation and Coating application complying to SSPC, ASTM, ISO & NACE Standards, helping customers to have the maximum protection and durability for their protected steel and other constructions.",
  },
  {
    icon: construction,
    title: "Paint applications",
    about:
      "We Undertake All kind of Paint Application Contracts to provide customers multi services under one Roof. We make sure a quality product to the end user with the latest technolgy of Abrasive Blast cleaning and paint application.",
  },
  {
    icon: design,
    title: "Presentations",
    about:
      "We also conduct presentations upon customer request, about our capabilities with our worldwide products and for our customers to understand our capacities and areas where we can Implement.",
  },
  {
    icon: document,
    title: "Lectures & Trainings",
    about:
      "Lectures on Corrosion and Corrosion control - IMS Consultant with vast experience conduct lectures on Corrosion and corrosion control upon Customer request passing important information to share and what paints can do to increase Protection and train applicators to improve skills and to outcome with the best properties.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Customer Service",
    about:
      "Individual acount management , Quick order entry process",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Sales",
    about:
      "Fast and reliable system recommendations, product availability",
  },
  {
    icon: FaRegBuilding,
    title: "Support",
    about:
      "Solving your problems is what we do best, we are here for you",
  },
  {
    icon: FaSitemap,
    title: "Technical Service",
    about:
      "Superior hands - on field support, on location servicce available",
  },
];

export const clients = [
  {
    image: client1,
    name: "Alex Parker",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Constructor",
  },
  {
    image: client2,
    name: "Drew James",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Architect",
  },
  {
    image: client3,
    name: "Sam Peterson",
    about:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas gravida cursus",
    post: "Builder",
  },
];
