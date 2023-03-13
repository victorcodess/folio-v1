export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 1,
    name: "skyWatch",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
    technologies: ["React", "CSS", "Chart.js"],
    github: "https://github.com/victorcodess/weather-forecast-website",
    demo: "https://sky-watch.vercel.app/",
    image: "/_next/image?url=%2F..%2Fpublic%2Fskywatch.png&w=1920&q=75",
    available: true,
  },
  {
    id: 2,
    name: "Alpaca image generator website",
    description:
      "An image generator website that allows users to generate, combine, and download images.",
    technologies: ["React", "CSS", "Merge Images"],
    github: "https://github.com/victorcodess/alpaca-image-generator",
    demo: "http://alpaca-image-generator-beta.vercel.app",
    image: "/_next/image?url=%2F..%2Fpublic%2Falpaca.png&w=1920&q=75",
    available: true,
  },
  {
    id: 3,
    name: "URL Shortener",
    description:
      "A website that reduces the length of your URL using Bit.ly's API",
    technologies: ["JavaScript", "CSS", "Bit.ly's API"],
    github: "https://github.com/victorcodess/url-shortener",
    demo: "https://url-shortener-nine-delta.vercel.app",
    image: "/_next/image?url=%2F..%2Fpublic%2Fshortener.png&w=1920&q=75",
    available: true,
  },
  {
    id: 4,
    name: "TMTM - Carpooling Service",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them ",
    technologies: ["Material UI", "React", "Formik"],
    github: "https://github.com/victorcodess/carpooling-service",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fcarpool.png&w=1920&q=75",
    available: false,
  },
];

export const designProjects = [
  {
    id: 1,
    name: "Hebron Statup Lab Website",
    description:
      "SkyWatch is a convenient and user-friendly tool that allows you to quickly and easily check the current weather and forecast for the next 2 days in any city.",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Fhsl.png&w=1920&q=75",
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
    image: "/_next/image?url=%2F..%2Fpublic%2Frags.png&w=1920&q=75",
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
    image: "/_next/image?url=%2F..%2Fpublic%2Fcrown.png&w=1920&q=75",
    available: false,
  },
  {
    id: 4,
    name: "Titi Mobile App",
    description:
      "TMTM helps you find people who are headed to the same location as you, so you can share a ride and split the cost with them ",
    technologies: ["UX Research", "UI Design", "Prototyping"],
    github: "",
    demo: "",
    image: "/_next/image?url=%2F..%2Fpublic%2Ftiti.png&w=1920&q=75",
    available: false,
  },
];
