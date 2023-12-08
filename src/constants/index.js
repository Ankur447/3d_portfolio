import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web3 Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Freelancer",
    company_name: "Earthway Technolgies",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2023 - April 2023",
    points: [
      "Designed and developed Lightning Strike Counter for the Company using Arduino nano, Hall Effect Sensor,RTC module, LCD Display.",
      "I collaborated with a friend and developed the product within one week .",
      "The Product was cheaper and efficient than its previous version",
      "I am Planning to patent it in future.",
    ],
  },
  {
    title: "Freelance Website developer",
    company_name: "The Rover Rabbit",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "May 2023 - May 2023",
    points: [
      "Nothing to brag here except the fact I built this website within a day",
      "Some other sites I built as a freelancer are sriswamisamarth.co.in, mobisb.com, theroverrabbit.com",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "No Testimonials unless you give (him) some real work... ",
    name: "Jeff",
    designation: "Picture",
    company: "Jeff",
    image: "https://styles.redditmedia.com/t5_599l4z/styles/communityIcon_r7zmld18dyx71.png",
  },
  {
    testimonial:
      "Hire him or I'll commit sucide.",
    name: "Jeff",
    designation: "Another Picture",
    company: "Jeff",
    image: "https://styles.redditmedia.com/t5_599l4z/styles/communityIcon_r7zmld18dyx71.png",
  },
  {
    testimonial:
      "早上好學測現在我有n桶冰淇淋我很喜歡冰淇淋 但是 兩球組合數 比冰淇兩球組合 兩球組合數!",
    name: "John Xina",
    designation: "CTO",
    company: "Bing Chilling Enterprises",
    image:"https://ih1.redbubble.net/image.2991310218.5250/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
  },
];

const projects = [
  {
    name: "VR Haptic Glove",
    description:
      "I have built a VR Glove Controller, it enables users to interact with VR environments using hand gestures. The glove controller uses Potentiometer, IMU, and Arduino esp32 to detect the finger,hand movements and send them to a PC via BT/WIFI and provide haptic feedback to the user through the servos attached to their finger. I used Unity and C# to create a VR game that showcases the functionality of the glove controller. You can watch a video of my project here => https://sites.google.com/view/ankur-bahadure/project-page ",
    tags: [
      {
        name: "Unity VR",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
      {
        name: "C",
        color: "pink-text-gradient",
      },
      {
        name: "VR",
        color: "orange-text-gradient",
      }
    ],
    image: carrent,
    source_code_link: "https://sites.google.com/view/ankur-bahadure/project-page",
  },
  {
    name: "Thr3ebay ",
    description:
      "DApp that enables users to buy and sell products without intermediaries, ensuring transparency, security, and efficiency. I used Nextjs, React, and Thirdweb sdk to develop the Dapp and deployed it on the GOR ETH network. You can see a demo of my project here => https://thr3ebay.vercel.app/ .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "Thirdweb",
        color: "orange-text-gradient",
      },
      {
        name: "Typescript",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/Ankur447/thr3ebay",
  },
  {
    name: "Hash Blog",
    description:
      "Just a Blog web app. lets user to post Blogs using a editor. Making this app was mistake there are lots of bugs... Debugging it is too frustating I am not doin it fkit.  live link => https://hash-blog-pi.vercel.app/",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "green-text-gradient",
      },
      {
        name: "Redux Tookit",
        color: "pink-text-gradient",
      },
      {
        name: "react router",
        color: "orange-text-gradient",
      },
      {
        name: "TinyMCE",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/Ankur447/hashBlog",
  },
];

export { services, technologies, experiences, testimonials, projects };
