/** @jsx h */

import blog, { redirects } from "blog";

blog({
  title: "Vladyslav Silich",
  description: "🇺🇦 Help Ukraine — comebackalive.in.ua/donate",
  // header: <header>Your custom header</header>,
  // section: <section>Your custom section</section>,
  // footer: <footer>Your custom footer</footer>,
  avatar: "./assets/avatar.jpg",
  avatarClass: "rounded-full",
  author: "Vladyslav Silich",
  links: [
    { title: "Email", url: "mailto:fareomg@gmail.com" },
    { title: "GitHub", url: "https://github.com/vkeyboardv" },
    { title: "LinkedIn", url: "https://www.linkedin.com/in/vladyslav-silich-39317b157/" },
    { title: "CV", url: "https://cv.silich.dev/" },
  ],
  theme: "light",

  middlewares: [
    redirects({
     "/cv": "./assets/cv.pdf",
    }),
  ]
});
