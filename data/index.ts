export const navItems = [
  { name: "About", link: "#about" },
  {name: "Experience", link: "#experience"},
  // { name: "Projects", link: "#projects" },
  // { name: "Testimonials", link: "#testimonials" },
  { name: "Approach", link: "#approach" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Your Vision, My Mission",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-begin",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Flexible Hours, Global Reach",
    description: "(Spin The Globe)",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Evolving Tech for Tomorrow",
    description: "Always leveling up",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Passion and Problem-Solving, for Solutions That Elevate Your Vision.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Crafting Motion, Enhancing Experiences",
    description: "In the Works",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let’s Build Your Vision, Together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Bronx Tech Hub",
    des: "Modern website for Bronx Tech Hub, built with Next.js and styled from a custom Figma design.",
    img: "/bth.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"], // UPDATE react, next, tailwind, typescript, figma
    link: "https://BronxTechHub.org",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/zoom-clone",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "https://github.com/adrianhajdin/ai_saas_app",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://github.com/adrianhajdin/iphone",
  },
];

export const testimonials = [
  {
    quote:
      "Working with Dwayne has been an absolute pleasure. He's got this great ability to break down complex technical problems into manageable, actionable steps. Whether it's crafting a stunning portfolio site or tackling AI concepts, Dwayne consistently delivers with precision, creativity, and attention to detail.",
    name: "George Nunez",
    title: "Founder/CEO, Bronx Tech Hub",
    profile: '/george_profile.png',
    link: 'https://www.linkedin.com/in/george-nunez/',
  },
  {
    quote:
      "Dwayne's expertise was a game-changer for my business. He didn't just elevate my brand--he introduced tools that made time managment more efficient and helped me tap into new revenue opportunities. His ability to understand my vision and deliver practical, impactful solutions has been invaluable. Thanks to his work, my business operations have become smoother, and I've seen remarkable growth in customer engagement. I'm truly grateful for the lasting difference he's made.",
    name: "Yanick Dopson",
    title: "Founder/CEO, YMD Fitness",
    profile: '/yanick_profile.png',
    link: 'https://www.linkedin.com/in/yanick-dopson-46846ba7/'
  },
];

export const companies = [
  {
    id: 1,
    name: "homedepot",
    img: "/hd_logo.png",
    nameImg: "/the_home_depot.png",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "aws",
    img: "/aws_logo.png",
    nameImg: "/amazon-aws-logo-white.png",
  },
  {
    id: 4,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 5,
    name: "accenture",
    img: "/accenture_logo.png",
    nameImg: "/accenture_emblem.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Application Developer",
    desc: "Contributed to the development of a web-based platform using React.js, while engaging in discussions about innovative VR solutions during Facebook’s transition to Meta.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Engineer",
    desc: "Contributed to the development of a React-based web app for managing and optimizing retail media advertising campaigns.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 3,
    title: "Full Stack Developer",
    desc: "Developed a proprietary ad server using Go, integrating backend functionality with frontend solutions for managing sponsored product placements.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Small Business Consultant",
    desc: "Advised small businesses on product line development and profitability strategies, achieving average earnings increases of at least 30% with minimal overhead.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Dwaynew85"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/dwayne-weller/"
  },
  // {
  //   id: 3,
  //   img: "/twit.svg",
  //   link: ""
  // },
];