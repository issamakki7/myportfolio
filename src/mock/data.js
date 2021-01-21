import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Issa Makki | Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my portfolio!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is ',
  name: 'Issa Makki',
  subtitle: `I'm a Software Engineer`,
  cta: 'Know more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Highly motivated Computer Engineering student minoring in Data Analytics.',
  paragraphTwo:
    ' I am a Merit Scholarship grantee with a passion in Web Development and Data Science. ',
  paragraphThree:
    'I have also had the privilege to take on leadership positions which have cultivated my communication and soft skills.',
  resume:
    'https://www.linkedin.com/in/issa-makki-23bbb91a9/detail/overlay-view/urn:li:fsd_profileTreasuryMedia:(ACoAADDEDQ8BaGmDKt0wulmz0DNo-W0loLooBDg,1611243597582)/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'keeperappphoto.jpg',
    title: 'Google Keep Clone (React.js Front-end)',
    info: 'Google Keep Clone (Front-end) built using React.js with icons from Material-UI!',
    info2: '',
    url: 'https://issamakki7.github.io/keeperapp/',
    repo: 'https://github.com/issamakki7/keeperapp', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'todolist.jpg',
    title: 'To-Do List App',
    info: 'To-Do List App built using React.js!',
    info2: '',
    url: 'https://issamakki7.github.io/todolist/',
    repo: 'https://github.com/issamakki7/todolist', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'startup.jpg',
    title: 'Start-Up Landing Page',
    info: 'Startup Landing Page which sends the user to a Newsletter sign-up page! ',
    info2: '',
    url: 'https://issamakki7.github.io/startup-of-the-year/',
    repo: 'https://github.com/issamakki7/startup-of-the-year', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'robofriends.jpg',
    title: 'RoboFriends',
    info:
      'React.js App integrating an API that renders random robots on the website which can be filtered using the Search feature',
    info2: '',
    url: 'https://issamakki7.github.io/robofriends/',
    repo: 'https://github.com/issamakki7/robofriends', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'emojipedia.jpg',
    title: 'Emojipedia',
    info:
      'React.js App that displays some emojis and their corresponding meaning (Meanings derived from emojimeanings.net)',
    info2: '',
    url: 'https://issamakki7.github.io/emojipedia',
    repo: 'https://github.com/issamakki7/emojipedia', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Email me!',
  btn: `Let's Talk`,
  email: 'issa.makki@lau.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/issa-makki-23bbb91a9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/issamakki7',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
