/** @jsx h */

import blog, { redirects } from "blog";

blog({
  title: "Vladyslav Silich",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./assets/avatar.jpg",
  avatarClass: "rounded-full",
  author: "Vladyslav Silich",
  // cover: "./assets/cover.jpg",
  links: [
    { title: "Email", url: "mailto:fareomg@gmail.com" },
    { title: "GitHub", url: "https://github.com/vkeyboardv" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/vladyslav-silich-39317b157/" },
    { title: "CV", url: "https://silich.dev/cv" },
  ],
  theme: "light",

  middlewares: [
    redirects({
     "/cv": "./assets/cv.pdf",
    }),
  ]
});
