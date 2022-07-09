const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Sarthak",
  logo_name: "sarthak.py()",
  full_name: "Sarthak",
  subTitle:
    "Full Stack Developer, AI Machine Learning, 3D Artist, Embedded Programmer.",
  resumeLink: "",
  mail: "mailto:sarthaksnh5@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/sarthaksnh5/",
  linkedin: "",
  gmail: "sarthaksnh5@gmail.com",
  facebook: "https://www.facebook.com/profile.php?id=100004811235446",
  twitter: "",
  instagram: "https://www.instagram.com/sarthak.py/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop highly interactive User Interfaces and Backend for web applications",
        "⚡ Building responsive website front end using ReactJS",
        "⚡ Creating application backend in Python, Django, Rest-Full APIs",
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
          skillName: "Bootstrap",
          fontAwesomeClassname: "simple-icons:bootstrap",
          style: {
            color: "#563d7c",
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
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#439743",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Experience hosting and managing websites",
        "⚡ Experience with Continuous Integration",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#5b77ef",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Chandigarh College of Engineering and Technology",
      subtitle: "Bachelors in Computer Science and Engineering",
      logo_path: "SRM_Logo.png",
      alt_name: "SSEC",
      duration: "2018 - 2022",
      descriptions: [
        "⚡  I hve done my Bachelors in Computer Science and Engineering.",
      ],
      website_link: "https://ccet.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Google Cloud",
      subtitle: "Google Cloud Training",
      logo_path: "google_logo.png",
      certificate_link: "",
      alt_name: "MongoDB University",
      color_code: "#2AAFED",
    },
    {
      title: "Hackathon",
      subtitle: "Backyard Hacks 2.0",
      logo_path: "hackathon1.png",
      certificate_link: "",
      alt_name: "hackathon",
      color_code: "#f47e2c",
    },
    {
      title: "Hackathon",
      subtitle: "HyperHacks",
      logo_path: "hackathon2.png",
      certificate_link: "",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I've mostly done projects on my own and I am actively looking for jobs. I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Machine Learning Intern",
          company: "Technocolabs",
          company_url: "https://technocolabs.com/",
          logo_path: "Technocolabs.jfif",
          duration: "Sept 2020 - Oct 2020",
          location: "Remote",
          description: `Analysed the changes before and after people started using sanitizers using the covid-19 dataset. Built and analysed several predictive models for defaulting user’s credit card and deployed it on a full-stack website using Flask. Made a predictive model for Blood Donation for Future Expectancy and deployed it on a fully-fledged website. Increased productivity and problem-solving technics by 20%. 
          `,
          color: "#0071C5",
        },
        {
          title: "Data Science Intern",
          company: "The Sparks Foundation",
          company_url: "https://thesparksfoundation.info/",
          logo_path: "TSF.png",
          duration: "Aug 2020 - Sept 2020",
          location: "Remote",
          description: `Developed predictive models and deployed it on a full-stack website using Flask. Used Boxplot, Heatmap and Confusion Matrix for data visualization. Deep analysis on the superstore dataset using Bar Plots, Bar Charts, Pair Plots and Joint Plots for specific regions.
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Skills",
      experiences: [
        {
          title: "Python",
          percent: 60,
          color: "#ee3c26",
        },
        {
          title: "C",
          percent: 70,
          color: "#7A7A7A",
        },
        {
          title: "React JS",
          percent: 60,
          color: "#ffc475",
        },
        {
          title: "Javascript",
          percent: 60,
          color: "#b190b0",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile_photo_2.jpeg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others.",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Mind Space",
      url: "https://www.mindspace.cf/",
      description:
        "This is Blogging website where users can create blogs, follow and unfollow other users, get summarized blog reccomendation on their dashboard and have a personalised searching mechanism.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "1",
      name: "Youtube Downloader",
      url: "https://github.com/vvHacker007/Youtube-Downloader/",
      description:
        "A desktop GUI which can be used to download youtube videos and playlist with desired quality and type on desktop.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "2",
      name: "Tune In",
      url: "https://github.com/vvHacker007/Tune-In",
      description:
        "Tune in is a collaborative music playing system where multiple guests can join a room and enjoy the song being played. Guests can pause and vote to skip the current song.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
        },
        {
          name: "Django",
          iconifyClass: "logos-django",
        },
      ],
    },
    {
      id: "3",
      name: "Event Scheduler",
      url: "https://github.com/vvHacker007/Event-Scheduler",
      description:
        "It is an all-purpose scheduler software. It is designed to monitor all the activities and give appropriate reminders for them.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Movie Reccomendation System",
      url: "https://github.com/vvHacker007/Movie-Recommendation-Systems",
      description:
        "Made three python kernels explaining and implementing the three different types of movie recommender systems.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "3",
      name: "Login Authenticator",
      url: "https://github.com/vvHacker007/Login-Authenticator",
      description: "Made a template for a Login Authenticator using Flask ",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
      ],
    },
    {
      id: "4",
      name: "Calculator",
      url: "https://github.com/vvHacker007/Calculator",
      description:
        "Made a GUI based Calculator. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "5",
      name: "Notepad",
      url: "https://github.com/vvHacker007/Notepad",
      description:
        "Made a GUI based Notepad. Also made an executable file for the project which can be downloaded and used by anyone on their personal computer.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "6",
      name: "Tetris",
      url: "https://github.com/vvHacker007/Tetris",
      description: "Made a GUI based arcade game Tetris using pygame.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "7",
      name: "Steganography",
      url: "https://github.com/vvHacker007/Steganography",
      description:
        "A CLI tool to conceal messages within a file, text, image, or video.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "OpenCV",
          iconifyClass: "logos-opencv",
        },
      ],
    },
    {
      id: "8",
      name: "Mini Paint",
      url: "https://github.com/vvHacker007/Mini-Paint",
      description: "GUI based Mini Paint Application.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "9",
      name: "Speedtest",
      url: "https://github.com/vvHacker007/Speed-test",
      description:
        "An internet speed testing application which can notify about the download speed, upload speed, and also the reaction time of the connection.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "10",
      name: "Cat Classifier",
      url: "https://github.com/vvHacker007/Cat-Classifier",
      description:
        "Binary Cat Classifier made by hard coding Neural Networks in Python without using libraries such as Tensorflow or keras.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "11",
      name: "Snake",
      url: "https://github.com/vvHacker007/Snake",
      description:
        "A snake game which covers all the basic features like score, high score and an automated speed increase simultaneously when the snake eats the food.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
      ],
    },
    {
      id: "12",
      name: "Score Predictor",
      url: "https://score-predictor-app.herokuapp.com/",
      description:
        "Predicts students score based on the number of hours the student puts in it.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "13",
      name: "Blood Donation Predictor",
      url: "https://blood-donation-predictor-app.herokuapp.com/",
      description:
        "Predicts if one is ready to donate blood based on the user's blood donation history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "14",
      name: "Credit-Card Default Predictor",
      url: "https://default-predictor-app.herokuapp.com/",
      description:
        "Predicts whether user's credit card would be defaulted or not based on the user's bank statements and history.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter Notebook",
          iconifyClass: "logos-jupyter",
        },
      ],
    },
    {
      id: "15",
      name: "Portfolio Website",
      url: "https://vvhacker007.github.io/Portfolio/",
      description: "You are stalking it right now 😉",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "ReactJS",
          iconifyClass: "logos-react",
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
  projects,
};
