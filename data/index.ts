import fourPlayerImg from "../public/img/machines/4-player.png";
import curvedControl1Img from "../public/img/machines/curved-control-1.png";
import curvedControl2Img from "../public/img/machines/curved-control-2.jpg";
import curvedControl3Img from "../public/img/machines/curved-control-3.png";
import curvedControl3bImg from "../public/img/machines/curved-control-3b.png";
import curvedImg from "../public/img/machines/curved.png";
import fishtableImg from "../public/img/machines/fish-table.png";
import standupsImg from "../public/img/machines/standups.webp";

export const products = [
  {
    id: "product-1",
    name: "Stand Ups",
    slug: "/stand-ups",
    category: "stand ups",
    type: "regular",
    src: standupsImg,
    desc: "Our stand ups machines have metal cabinets and 43 inch flat screen with touch function capabilities.",
    features: [],
  },
  {
    id: "product-2",
    name: "Curved Screen Stand Ups",
    src: curvedImg,
    slug: "/curved-stand-ups",
    category: "stand ups",
    type: "curved",
    desc: "Our stand up machines with metal cabinets got even better. 43 inch curved screen with touch function capabilities are now available.",
    features: [
      {
        id: "feature-2",
        name: "Three ways to play",
        list: [
          [
            {
              id: "controls-1",
              src: curvedControl1Img,
              desc: "Two Button Controls",
            },
          ],
          [
            {
              id: "controls-2",
              src: curvedControl2Img,
              desc: "Multi Button Controls",
            },
          ],
          [
            {
              id: "controls-3",
              src: curvedControl3Img,
              desc: "Screen Controls",
            },
            {
              id: "controls-3b",
              src: curvedControl3bImg,
              desc: "Screen Controls",
            },
          ],
        ],
      },
    ],
  },
  {
    id: "product-3",
    name: "Fish Tables",
    slug: "/fish-tables",
    category: "fish tables",
    type: "regular",
    src: fishtableImg,
    desc: "Fast paced gameplay fishing game with 68 inch horizontal screen. Up to 10 players.",
    features: [],
  },
  {
    id: "product-4",
    name: "Vertical Fish Tables",
    slug: "/fish-tables",
    category: "fish tables",
    type: "vertical",
    src: fourPlayerImg,
    desc: "The best of both worlds. The action orientated gameplay of fish table and the convenience of stand up machines. Up to 4 players.",
    features: [],
  },
];

const data = {
  companyName: "American Game Machine",
  contacts: [
    {
      id: "contact-1",
      contact: "address",
      info: ["101 E Carteret Street, Unit 107", "Greensboro, NC 27406"],
      btnLabel: "get directions",
      href: "https://www.google.com/maps/place/101+E+Carteret+St+UNIT+107,+Greensboro,+NC+27406/@36.0373818,-79.7924992,17z/data=!3m1!4b1!4m5!3m4!1s0x885319ac1d05bfdd:0x6be5d01592cda5c9!8m2!3d36.0373775!4d-79.7903105",
      rel: "",
    },
    {
      id: "contact-2",
      contact: "phone",
      info: ["(919) 971-0827"],
      btnLabel: "call us",
      href: "tel:+01-919-306-0509",
      rel: "nofollow",
    },
    {
      id: "contact-3",
      contact: "email",
      info: ["contact@empire-amusement.com"],
      btnLabel: "email us",
      href: "mailto: contact@empire-amusement.com",
      rel: "",
    },
  ],
  category: products,
};

export const { companyName, contacts, category } = data;
