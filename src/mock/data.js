import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Maksim Kramer, Web Developer', // e.g: 'Name | Web Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Web Developer',
  name: 'Maksim Kramer',
  subtitle: 'Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.linkedin.com/in/maksimkramer/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.png',
    title: 'Atem Cap',
    info:
      'Canadian venture capital company specializing in biotech startups. Their portfolio includes more than 50 successful crops. More than $ 80M managed by the company. The site was made with the help of the simplest technologies, but in the near future it will be heavily uplifted.',
    info2: '',
    url: 'http://atemcap.com/',
    repo: 'http://atemcap.com/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.png',
    title: 'Maple Leafs Roster site',
    info:
      'A pitiful attempt to make an interesting project dedicated to my favorite ice hockey team. I spend my days crossing my fingers hoping that Reza will accept this project and let me go to the next level.',
    info2: '',
    url: '',
    repo: 'https://github.com/makskram/mapleLeafs', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.png',
    title: 'HSE Institute of Statistics',
    info:
      'A long time ago, in another galaxy, I made a small contribution to the creation of interactive elements of one of the divisions of the Higher School of Economics',
    info2: '',
    url: '',
    repo: 'https://issek.hse.ru/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'maxkram@pm.me',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
