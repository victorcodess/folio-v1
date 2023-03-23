export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  bgColor: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "SkyWatch",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
    technologies: ["React", "CSS", "Chart.js"],
    github: "https://github.com/victorcodess/weather-forecast-website",
    demo: "https://sky-watch.vercel.app/",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fskywatch-new.webp&w=1920&q=100",
    bgColor: "#5b6c5d",
    available: true,
  },
  {
    id: 2,
    name: "Alpaca Image Generator",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["React", "CSS", "Merge Images"],
    github: "https://github.com/victorcodess/alpaca-image-generator",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Falpaca-new.webp&w=1920&q=100",
    bgColor: "#A4778B",
    available: true,
  },
  {
    id: 3,
    name: "Link Shortener",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    github: "https://github.com/victorcodess/url-shortener",
    demo: "https://url-shortener-nine-delta.vercel.app",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fshortener-new.webp&w=1920&q=100",
    bgColor: "#9E2A2B",
    available: true,
  },
  {
    id: 4,
    name: "Carpooling Service",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them; I was responsible for bulding the frontend. ",
    technologies: ["Material UI", "React", "Formik"],
    github: "https://github.com/victorcodess/carpooling-service",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcarpool-new.webp&w=1920&q=100",
    bgColor: "#5b6c5d",
    available: false,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fhsl.webp&w=1920&q=75",
    bgColor: "#9E2A2B",
    available: false,
  },
  {
    id: 2,
    name: "RAGS Scrubs Website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Frags.webp&w=1920&q=75",
    bgColor: "#A4778B",
    available: false,
  },
  {
    id: 3,
    name: "Crown Branding Agency Website",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image:
      "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Fcrown.webp&w=1920&q=75",
    bgColor: "#9E2A2B",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fprojects%2Ftiti.webp&w=1920&q=75",
    bgColor: "#9E2A2B",
    available: false,
  },
];
