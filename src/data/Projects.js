import profileLink from '../assets/projects/ProfileLink.png';
import taskApp from '../assets/projects/task-app.png';
import restaurantMenu from '../assets/projects/restaurant-menu.png';

import html from '../assets/skills/html.svg';
import css from '../assets/skills/css.svg';
import javascript from '../assets/skills/javascript.svg';
import react from '../assets/skills/react.svg';
import nextjs from '../assets/skills/nextjs.svg';
import tailwind from '../assets/skills/tailwind.svg';
import nodejs from '../assets/skills/nodejs.svg';
import postgresql from '../assets/skills/postgresql.svg';
import c_sharp from '../assets/skills/c-sharp.svg'
import dotnet from '../assets/skills/dotnet.svg'


export const projects = [
  {
      "title": "ProfileLink",
      "image": profileLink,
      "stack": [nextjs, tailwind, c_sharp, dotnet],
      "githubRepo": "https://github.com/orgs/ProfileLink-app/repositories",
      "siteLink": "https://profilelink.netlify.app/",
      "theme": "#850AD6",
      "color": "#FFFFFF"
  },
  {
      "title": "Task App",
      "image": taskApp,
      "stack": [react, nodejs, postgresql],
      "githubRepo": "https://github.com/simple-todo-app",
      "siteLink": "https://todo-app-dylan.netlify.app/",
      "theme": "#FFB703",
      "color": "#FFFFFF"
  },
  {
      "title": "Restaurant Menu",
      "image": restaurantMenu,
      "stack": [html, css, react, javascript],
      "githubRepo": "https://github.com/dbvker/Restaurant-Menu",
      "siteLink": "https://restaurant-menu-db.netlify.app/",
      "theme": "#4338CA",
      "color": "#FFFFFF"
  },
];