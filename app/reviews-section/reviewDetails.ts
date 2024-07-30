import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
import alan from "../../public/alan.jpeg";
import olamide from "../../public/olamide.jpeg";
import umar from "../../public/umar.jpeg";

export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Samuel Alex",
    role: "Product Designer",
    company: "Umoja Linn",
    profileImg: alex,
    testimonial:
      "Victor is seriously one of the best frontend developers I've ever worked with. He's incredibly talented, super easy to work with, and always goes above and beyond.",
  },
  {
    name: "Jeremiah Oloyede",
    role: "Founder",
    company: "Crown Branding Agency",
    profileImg: jerry,
    testimonial:
      "Victor's work is truly outstanding, and I can't recommend him enough! He completely transformed our branding agency's website. Since launch, we've seen a significant jump in website traffic and, crucially, conversions.",
  },
  {
    name: "Mauro Reis",
    role: "CEO",
    company: "Meuclone Digital",
    profileImg: mauro,
    testimonial:
      "Outstanding professional, developed our startup's website and delivered it in a very short time and with high quality.",
  },
  {
    name: "Umar Abdullahi",
    role: "Head of Engineering",
    company: "Mono",
    profileImg: umar,
    testimonial:
      "Victor is hardworking and has great sense of ownership. He was able to contribute in engineering excellent user interfaces and user experiences at Mono. I’m confident he will be a great asset to any engineering team.",
  },
  {
    name: "Olamide Sholanke",
    role: "Senior Frontend Engineer",
    company: "Mono",
    profileImg: olamide,
    testimonial:
      "I had the pleasure of working with Victor on a frontend development project at Mono, and I highly recommend him. He consistently delivered high-quality code, and brought a proactive and creative approach to problem-solving.",
  },
  {
    name: "Alan Franciskovic",
    role: "Sales Specialist",
    company: "Croatia Osiguranje d.d",
    profileImg: alan,
    testimonial:
      "Very talented and amazing freelancer. Very easy to communicate with, pleasure to work with. Outstanding attention to detail, and works as fast as possible while also delivering amazing work.",
  },
  
];
