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
import express from '../assets/skills/express.svg';
import postgresql from '../assets/skills/postgresql.svg';
import mongodb from '../assets/skills/mongodb.svg';
import python from '../assets/skills/python.svg';
import fastapi from '../assets/skills/fastapi.svg';


export const projects = [
  {
      "title": "ProfileLink",
      "image": profileLink,
      "stack": [nextjs, tailwind],
      "githubRepo": "https://github.com/ProfileLink-app",
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
      "color": "#111827"
  },
  {
      "title": "Restaurant Menu",
      "image": restaurantMenu,
      "stack": [html, css ,react, javascript],
      "githubRepo": "https://github.com/dbvker/Restaurant-Menu",
      "siteLink": "https://restaurant-menu-db.netlify.app/",
      "theme": "#4338CA",
      "color": "#FFFFFF"
  },
];