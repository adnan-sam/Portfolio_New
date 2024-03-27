/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello",
  title2: "Adnan",
  logo_name: "AS",
  nickname: "adnan2001/severus",
  full_name: "Adnan Sameer",
  subTitle: "Full Stack Developer, UI/UX Designer. Always learning.",
  resumeLink:
    "https://drive.google.com/file/d/1sGfziJRtlSqvz91QlEWGdJ-u_DuTt8JY/view?usp=sharing",
  mail: "mailto:adnansameer400@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/adnan-sam",
  linkedin: "https://www.linkedin.com/in/adnan-sameer-199ba1223/",
  gmail: "adnansameer400@gmail.com",
  gitlab: " ",
  facebook: "",
  twitter: "https://twitter.com/AdnanSamee82402",
  instagram: "https://www.instagram.com/adnan_sam_/",
  leetcode: "https://leetcode.com/adnan_sam_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using ReactJS and NextJS",
        "⚡ Developing mobile applications using React Native",
        "⚡ Backend development using NodeJS and ExpressJS",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos-typescript-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3178C6",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "devicon-java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "VS Code",
          fontAwesomeClassname: "devicon-vscode",
        },
        {
          skillName: "ExpressJS",
          fontAwesomeClassname: "devicon-express",
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#1D1D1D",
            borderRadius: "50%",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "devicon-netlify",
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "devicon-vercel",
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
      ],
    },
    {
      title: "Cross-Platform App Dev",
      fileName: "CrossPlatformImg",
      skills: [
        "⚡ Actively learning and building applications using React Native",
        "⚡ Passionate about coding and developing apps that work across multiple platforms",
        "⚡ Have successfully developed and launched several cross-platform apps",
      ],
      softwareSkills: [
        {
          skillName: "React Native",
          fontAwesomeClassname: "logos-react",
          style: {
            backgroundColor: "transparent",
            color: "#61DAFB",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "logos-javascript",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "logos-typescript-icon",
          style: {
            backgroundColor: "transparent",
            color: "#3178C6",
          },
        },
        {
          skillName: "Expo",
          fontAwesomeClassname: "simple-icons:expo",
          style: {
            backgroundColor: "transparent",
            color: "#000020",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "logos-redux",
          style: {
            backgroundColor: "transparent",
            color: "#764ABC",
          },
        },
      ],
    },
    // {
    //   title: "Machine Learning & AI",
    //   fileName: "DataScienceImg",
    //   skills: [
    //     "⚡ Currently learning and exploring the Machine Learning domain",
    //     "⚡ Not having much interest but would love to work on data analysis",
    //     "⚡ Developed a machine learning final year project utilizing Convolutional Neural Networks (CNN)",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Tensorflow",
    //       fontAwesomeClassname: "logos-tensorflow",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Keras",
    //       fontAwesomeClassname: "simple-icons:keras",
    //       style: {
    //         backgroundColor: "white",
    //         color: "#D00000",
    //       },
    //     },
    //     {
    //       skillName: "PyTorch",
    //       fontAwesomeClassname: "logos-pytorch",
    //       style: {
    //         backgroundColor: "transparent",
    //       },
    //     },
    //     {
    //       skillName: "Python",
    //       fontAwesomeClassname: "ion-logo-python",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#3776AB",
    //       },
    //     },
    //     {
    //       skillName: "Pandas",
    //       fontAwesomeClassname: "simple-icons:pandas",
    //       style: {
    //         backgroundColor: "transparent",
    //         color: "#6E6E6E",
    //       },
    //     },
    //   ],
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Meghnad Saha Institute of Technology",
      subtitle: "B.Tech. in Computer Science Engineering",
      logo_path: "msit.png",
      alt_name: "MSIT",
      duration: "2020 - 2024",
      descriptions: [
        "⚡ I have studied core subjects like Data Structures, DBMS, Networking, OOPS, OS, Security, etc.",
        "⚡ I have also completed various online courses for Web Development, ML/AI, etc.",
        "⚡ I have implemented several projects based on what I've learnt under my Engineering course. ",
        "⚡ I have secured an average CGPA of 9.31.",
      ],
      website_link: "http://www.msit.edu.in/",
    },
    {
      title: "Assembly of Christ School",
      subtitle: "Computer Science",
      logo_path: "acs.png",
      alt_name: "ACS",
      duration: "2018 - 2020",
      descriptions: [
        "⚡ I have studied subjects like Computer Science, Mathematics, Physics, Chemistry, etc.",
        "⚡ I have secured 83.40% in my ISC.",
      ],
      website_link: "https://assemblyofchristschool.com/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Web Development Bootcamp",
      subtitle: "Angela Yu",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.credly.com/badges/b12fbece-07f3-47f5-9dda-cd56f49e250d/public_url",
      alt_name: "Udemy",
      color_code: "#ffc475",
    },
    {
      title: "Enhancing Soft Skills and Personality",
      subtitle: "IIT Kanpur",
      logo_path: "nptel.png",
      certificate_link:
        "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL21HS02S13840186094446",
      alt_name: "NPTEL",
      color_code: "#ffc475",
    },
    {
      title: "Crash Course on Python",
      subtitle: "Coursera",
      logo_path: "coursera.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/AH8V75ATVEL7",
      alt_name: "Coursera",
      color_code: "#ffc475",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship",
  description:
    "I've completed one internship. I've done several projects on my own and I am actively looking for some full time roles. I love building innovative projects on software as well as hardware domain.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Not yet started",
          company: "",
          company_url: "",
          logo_path: "adnan.png",
          duration: "",
          location: "",
          description:
            "Currently in my final year of B.Tech and will be soon entering into corporate life. Until then, let's enjoy the journey called life!",
          color: "#f10000",
        },
        // {
        //   title: "Full Stack Developer",
        //   company: "Quicko",
        //   company_url: "https://quicko.com/",
        //   logo_path: "quicko.jpg",
        //   duration: "June 2021 - October 2021",
        //   location: "Ahmedabad",
        //   description:
        //     "Quicko is an online tax planning, preparation & filing platform for individuals & businesses.",
        //   color: "#2962FF",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Web Developer",
          company: "BasketHunt Pvt Ltd",
          company_url: "https://www.baskethunt.com/",
          logo_path: "basketHunt.jpeg",
          duration: "January 2023 - March 2023",
          location: "",
          description: "Develop responsive websites using HTML, CSS and JS",
          color: "#56A4D3",
        },
      ],
    },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Summer of Code Mentor",
    //       company: "Sugar Labs / GSoC",
    //       company_url: "https://sugarlabs.org/",
    //       logo_path: "google_logo.png",
    //       duration: "Summer of 2017 / 18 / 20",
    //       location: " ",
    //       description:
    //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
    //       color: "#4285F4",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Web Development projects and Robotics. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "adnan.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try my best to write a blog about it.",
    link: "https://medium.com/@hrishipatel99",
    avatar_image_path: "blogs_image.svg",
  },
};

const softwareProjects = {
  data: [
    {
      name: "SnapThreads",
      url: "https://github.com/adnan-sam/Snap-Threads",
      description:
        "A combination of Threads and Snapchat in a Twitter style platform to promote open-speech.",
      image_path: "oatsnmeals_.png",
      languages: [
        {
          name: "Next.js",
          iconifyClass: "devicon-nextjs",
        },
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "TypeScript",
          iconifyClass: "devicon-typescript",
        },
        {
          name: "Node.js",
          iconifyClass: "devicon-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      name: "OatsNMeals",
      url: "https://github.com/adnan-sam/OatsnMeals",
      description:
        "A food recipe app where you can explore and save millions of different kind of food options with full instructions",
      image_path: "oatsnmeals_.png",
      languages: [
        {
          name: "React.js",
          iconifyClass: "logos-react",
        },
        {
          name: "JavaScript",
          iconifyClass: "devicon-javascript",
        },
        {
          name: "Node.js",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "Express.js",
          iconifyClass: "devicon-express",
        },
      ],
    },
    {
      name: "ChitChat App",
      url: "https://github.com/adnan-sam/RealTime-ChitChat-App",
      description:
        "A Real time chat application where you can create rooms and can talk to each other without sharing any kind of personal information.",
      image_path: "chitchat.png",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "devicon-html5",
        },
        {
          name: "CSS3",
          iconifyClass: "devicon-css3",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
      ],
    },
    {
      name: "Guessing Game",
      url: "https://github.com/adnan-sam/Guessing-Game-App",
      description:
        "GuessMe is a fun number guessing game where you have to guess a number and everytime you guess you are charged with an attempt.",
      image_path: "Guess_Me.png",
      languages: [
        {
          name: "Java",
          iconifyClass: "logos-java",
        },
        {
          name: "XML",
          iconifyClass: "devicon-xml",
        },
        {
          name: "Android",
          iconifyClass: "devicon-android",
        },
      ],
    },
  ],
};

const hardwareProjects = {
  data: [
    {
      name: "Automatic Fish Feeder",
      url:
        "https://www.youtube.com/watch?si=Q_zYh-pUx-yuUf4K&v=v8atOQmETp4&feature=youtu.be",
      description:
        "Effortlessly nourish your aquatic friends with precision and ease. The Automatic Fish Feeder ensures timely meals for your fish, adjusting portions while you're away.",
      image_path: "fishfeeder_.png",
      languages: [
        {
          name: "Arduino",
          iconifyClass: "devicon-arduino",
        },
      ],
    },
    {
      name: "Automatic Hygienic Dustbin",
      url:
        "https://www.linkedin.com/posts/adnan-sameer-199ba1223_automaticdustbin-robotics-arduino-activity-6902657366232313856-wXfg/?utm_source=share&utm_medium=member_desktop",
      description:
        "Upgrade your waste management game. Experience cleanliness and convenience with the Automatic Hygienic Dustbin, ensuring a more pleasant and germ-free environment.",
      image_path: "dustbin_.png",
      languages: [
        {
          name: "Arduino",
          iconifyClass: "devicon-arduino",
        },
      ],
    },
    {
      name: "Obstacle Avoiding Car",
      url: "",
      description:
        "Unleash innovation on wheels. The Obstacle-Avoiding Car defies barriers, intelligently steering through surroundings, evading obstacles, and propelling you into a boundary-pushing travel experience.",
      image_path: "obstacleAvoiding_.png",
      languages: [
        {
          name: "Arduino",
          iconifyClass: "devicon-arduino",
        },
      ],
    },
    {
      name: "Women Safety Device",
      url: "https://www.youtube.com/watch?v=0tD8XcEw6LI&feature=youtu.be",
      description:
        "Created a personal safety breakthrough: a budget-friendly women's safety device. When placed in a shoe, it provides a secure, switch-operated electric shock upon unwanted touch.",
      image_path: "womenSafety.png",
      languages: [
        {
          name: "Electric Shock",
          iconifyClass: "devicon-socketio",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  softwareProjects,
  hardwareProjects,
};
