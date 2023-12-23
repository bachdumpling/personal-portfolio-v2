import moodr1 from "./Assets/moodr1.png";
import moodr2 from "./Assets/moodr2.png";
import moodr3 from "./Assets/moodr3.png";
import spotify1 from "./Assets/spotify1.png";
import boomergram1 from "./Assets/boomergram1.png";
import boomergram2 from "./Assets/boomergram2.png";
import bachle1 from "./Assets/bachle1.png";

const projectData = [
  {
    id: "1",
    image: boomergram1,
    name: "Boomergram",
    shortDescription: "Tired of Gen Z/ Gen X vocabs? Use this app!",
    longDescription: "",
    technology: ["React", "Ruby on Rails", "JavaScript"],
    github: [],
    website: "",
    imageDescription: [boomergram1, boomergram2],
    longDescription: `Boomergram is a proposal for a new social media platform that fosters inclusive user experience for all age groups. It has a feature that automatically finds slang everywhere on the app (e.g., captions, comments, hashtags) and translates them to standard English. For example, when a user posts a picture with the caption: “I am so happy today, no cap!” the app will convert the caption to: “I am so happy today, I am being honest!” This string parsing mechanism happens in real-time on the front end as customers type in the phrases; the data will then be converted and posted to the database.`,
    github: [
      { client: "https://github.com/bachdumpling/boomergram-client" },
      { server: "https://github.com/bachdumpling/boomergram-server" },
    ],
    website: "",
    createdAt: new Date("2022, August, 20"),
  },
  {
    id: "2",
    image: bachle1,
    name: "Bach Le",
    shortDescription: "My personal portfolio",
    technology: ["React", "JavaScript", "Cloud Firestore", "Tailwind CSS"],
    imageDescription: [moodr2, moodr3],
    longDescription: "",
    github: [
      { client: "https://github.com/bachdumpling/bachle" },
      { server: "" },
    ],
    website: "https://bachle.netlify.app/",
    createdAt: new Date("2022, November, 15"),
  },
  {
    id: "4",
    image: spotify1,
    name: "Spotify Shop",
    shortDescription:
      "Engineered and tested a prospective feature for Spotify called 'Spotify Shop'",
    technology: ["Next.js", "JavaScript", "Ruby on Rails", "Tailwind CSS"],
    imageDescription: [spotify1],
    longDescription: "",
    github: [
      { client: "https://github.com/bachdumpling/spotify-shop-survey" },
      { server: "" },
    ],
    website: "https://spotify-shop-survey.vercel.app/",
    embed: `https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FqxCMtdK7IJOReyugbRKeGT%2FSpotify%3Fnode-id%3D169%253A2448%26starting-point-node-id%3D169%253A2448%26scaling%3Dscale-down`,
    createdAt: new Date("2022, November, 10"),
  },
  {
    id: "3",
    image: "",
      // "https://movingwordstranslations.com/wp-content/uploads/portfolio-skullcandy-shop.jpg",
    name: "Not Skullcandy",
    shortDescription: "E-commerce website with integrated Stripe check out",
    technology: ["React", "JavaScript", "Ruby on Rails"],
    imageDescription: [moodr2, moodr3],
    longDescription: "",
    github: [
      { client: "" },
      { server: "https://github.com/bachdumpling/notskullcandy" },
    ],
    website: "",
    createdAt: new Date("2022, July, 20"),
  },
  {
    id: "5",
    image: moodr1,
    imageDescription: [moodr2, moodr3],
    name: "Moodr",
    shortDescription: "Explore your emotions!",
    longDescription:
      "Moodr is a smart wearable device that tracks your vital information and Moodr App is an accompanied app that combines your vital information from the watch with your answers to behavioral questions to generate your possible mood.",
    technology: ["Next.js", "Ruby on Rails", "Capacitor"],
    github: [
      { client: "https://github.com/bachdumpling/moodr" },
      { server: "https://github.com/bachdumpling/moodr-api" },
    ],
    website: "https://moodr.vercel.app",
    createdAt: new Date("2023, January, 15"),
  },
];

export default projectData;
