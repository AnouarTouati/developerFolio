/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Anouar Touati ",
  title: "Hi all, I'm Anouar (Anwar)",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web applications with Typescript / Reactjs /VueJS / Nodejs / Laravel and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ZWGlWTv26oGAYV-MtKo5-XDdhivyBwDx/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/anouartouati",
  linkedin: "https://www.linkedin.com/in/anouar-touati/",
  gmail: "anouar.touati.at@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO FINDS PEACE IN CREATING MENTAL MODELS THAT RELATES ALL COMPONENTS OF GIVEN TECH",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    emoji("⚡ Performant and maintainable backends in Laravel / NodeJS"),
    emoji(
      "⚡ Integration of third party services and DevOps"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Boumerdes",
      logo: require("./assets/images/boumerdesLogo.png"),
      subHeader: "Master of Science in Computer Engineering",
      duration: "September 2019 - July 2021",
      desc: "Ranked top 10%. Participated in the research of hardware acceleraton and published one paper.",
      descBullets: [
        "Advnaced digital systems in FPGA",
        "Microprocessor system design",
        "Operating Systems(scheduler, processes, thread etc..),",
        "Data Structures and Algorithms"
      ]
    },
    {
      schoolName: "University of Boumerdes",
      logo: require("./assets/images/boumerdesLogo.png"),
      subHeader: "Bachelor of Science in Electrical and Electronics Engineering",
      duration: "September 2016 - July 2019",
      desc: "Took courses from multiple disciplines: Elecronics, Electrical Engingeering, Telecommunication, Control Systems ...",
      descBullets: [
        "Computer Architecture",
        "Advanced C progamming",
        "Digital Electronics"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend", //Insert stack or technology you have experience in
      // progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend",
      // progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      // progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "ClicoSolution",
      companylogo: require("./assets/images/clicosolutionLogo.png"),
      date: "August 2021 – July 2023",
      desc: "Handle projects from conception to production. Mostly done with Laravel and VueJS. Helped intenrs with js programming and good project strucures",
    },
    {
      role: "Immigration",
      company: "Canada",
      companylogo: require("./assets/images/canadaLogo.webp"),
      date: "August 2023 – Present",
      desc: "Quit my fulltime role at Clicoslution to immigrate to Canada when the chance came. Hoping for better opportunites to grow as a dev."
    },
    {
      role: "Open Source",
      company: "Github",
      companylogo: require("./assets/images/githubLogo.jpg"),
      date: "2016 – Present",
      desc: "Creating packages and helping with projcts such as VS Code's integrated terminal. My older projects are now like diary of my journey."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/toptenderproLogo.png"),
      projectName: "TopTenderPro",
      projectDesc: "Built this B2B project from the ground up using Laravel/VueJs for TopTenders to replace their old Joomal website. Offering better exprience to their staff and 3000+ paid users in the calls for tenders and consultations business in Algeria.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://toptenderspro.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nvisionLogo.png"),
      projectName: "New Vision",
      projectDesc: "Helped fix bugs and address performance issues in this Learning Management System platform running on legacy code",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.the-nvision.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Academic Paper",
      subtitle:
        "Implementation of an AES-based real-time Video Encryption/Decryption using FPGA/HPS",
      image: require("./assets/images/ieeeLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Read on IEEE Xplore",
          url: "https://ieeexplore.ieee.org/document/9955665"
        },
        {
          name: "Project files on Github",
          url: "https://github.com/AnouarTouati/AES_Acceleration_FPGA"
        },
        {
          name: "Donwload thesis PDF",
          url: "https://github.com/AnouarTouati/AES_Acceleration_FPGA/blob/main/MasterThesis.pdf"
        }
      ]
    },
    {
      title: "Udacity Android Applications Certificate",
      subtitle:
        "Part of the one million arab coders intiative in 2017. Learned the basic of Adroid App developments",
      image: require("./assets/images/androidLogo.jpg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        // {
        //   name: "View Google Assistant Action",
        //   url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        // }
      ]
    },

    // {
    //   title: "PWA Web App Developer",
    //   subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //   image: require("./assets/images/pwaLogo.webp"),
    //   imageAlt: "PWA Logo",
    //   footerLink: [
    //     {name: "Certification", url: ""},
    //     {
    //       name: "Final Project",
    //       url: "https://pakistan-olx-1.firebaseapp.com/"
    //     }
    //   ]
    // }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "anouar.touati.at@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
