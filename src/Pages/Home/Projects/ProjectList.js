const techstack = {
  css: {
    title: "CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg",
    wid: "24px",
  },
  express: {
    title: "Express",
    img: "../../../../public/Images/express.png",
    wid: "24px",
  },
  html: {
    title: "HTML",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    wid: "24px",
  },
  javascript: {
    title: "JavaScript",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    wid: "24px",
  },
  mongodb: {
    title: "MongoDB",
    img: "../../../../public/Images/mongo.png",
    wid: "24px",
  },
  node: {
    title: "Node.js",
    img: "../../../../public/Images/node-js.png",
    wid: "24px",
  },
  react: {
    title: "React",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    wid: "24px",
  },

  tailwind: {
    title: "Tailwind CSS",
    img: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    wid: "24px",
  },
};

export const ProjectList = [
  {
    heading: "FoodBridge",
    img: "../../../../public/Images/foodbridge.png",
    title: "Join us in the fight against food waste",
    description:
      "FoodBridge is a community-driven platform designed to empower individuals and organizations to share surplus food, thereby reducing food waste and fostering community connections.",
    techStack: [
      techstack.react,
      techstack.css,
      techstack.javascript,
      techstack.tailwind,
      techstack.express,
      techstack.mongodb,
      techstack.node,
    ],
    liveLink: "https://food-bridge-96dfc.web.app/",
    gitLink: "https://github.com/moriyam-mohona/FoodBridge_Client",
  },
  {
    heading: "Property Pros",
    img: "../../../../public/Images/PropertyPros.png",
    title: "Provide Architectural Design and Construction",
    description:
      "PropertyPros is a web application for managing properties, facilitating interactions between agents and clients, and providing a platform for property listings.",
    techStack: [
      techstack.react,
      techstack.css,
      techstack.javascript,
      techstack.tailwind,
      techstack.express,
      techstack.mongodb,
      techstack.node,
    ],
    liveLink: "https://roaring-lamington-45d3b6.netlify.app/",
    gitLink: "https://github.com/moriyam-mohona/PropertyPros_Client",
  },
  {
    heading: "Travel Go",
    img: "../../../../public/Images/TravelGo.png",
    title: "Managing Tourist Spot",
    description:
      "TravelGo is a dynamic web platform highlighting tourist destinations worldwide. It showcases diverse countries and their iconic spots, offering interactive features for exploring and adding new destinations.",
    techStack: [
      techstack.react,
      techstack.javascript,
      techstack.tailwind,
      techstack.express,
      techstack.mongodb,
      techstack.node,
    ],
    liveLink: "https://tourism-management-59876.web.app/",
    gitLink: "https://github.com/moriyam-mohona/TravelGo_Client",
  },
];

const extra = [
  {
    heading: "DIAMONDLAND",
    img: "https://raw.githubusercontent.com/chaudhari014/legit-building-8885/main/banner/Screenshot%20(672).png",
    title: "CaratLane Clone",
    description:
      "Diamondland is an e-commerce website specializing in jewelry, offering customers a wide range of high-quality jewelry at affordable prices. They also provide personalized gift options for your loved ones.",
    techStack: [techstack.html, techstack.javascript, techstack.css],
    liveLink: "https://diamond-land.netlify.app/index.html",
    gitLink: "https://github.com/chaudhari014/legit-building-8885",
  },
  {
    heading: "SPENDWISER",
    img: "https://user-images.githubusercontent.com/112808279/238118882-e4441c6a-8b1e-418d-b228-7132e40a40d4.png",
    title: "Money Manager App",
    description:
      "SpendWiser is an invaluable tool for anyone looking to manage their monthly budget and keep track of their spending. With its user-friendly interface and comprehensive features, SpendWiser makes it easy to stay on top of your finances and ensure that you are meeting your financial goals.",
    techStack: [techstack.react, techstack.chartjs, techstack.redux],
    liveLink: "https://hilarious-wood-568-fw21-0275-updated1.vercel.app/",
    gitLink: "https://github.com/SumatM/SpendWiser",
  },
  {
    heading: "TEXT TO SPEECH",
    img: "https://raw.githubusercontent.com/SumatM/Text-To-Speech/main/Screenshot%20(712).png",
    title: "JavaScript Speech Synthesis",
    description:
      "WebPage that converts written text into spoken words. Utilized natural language processing techniques to analyze and interpret the text, generating synthesized speech output.",
    techStack: [techstack.html, techstack.javascript, techstack.css],
    liveLink: "https://text-to-speech-sumat.netlify.app/",
    gitLink: "https://github.com/SumatM/Text-To-Speech",
  },
];
