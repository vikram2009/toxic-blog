export default function handler(req, res) {
  const whatisjs = {
    title: "What Is JavaScript",
    content:
      "JavaScript Is a High Level Programming Langauge  . JavaScript Is called as the King of Frontend . JavaScript is the language of the web, it is used to make the web look alive by adding motion to it. To be more precise, it’s a programming language that let’s you implement complex and beautiful things/design on web pages. When you notice a web page doing more than just sit there and gawk at you, you can bet that the web page is using JavaScript. ",
    author: "Vikram Srinivas",
    slug: "whatisjs",
  };

  const Github = {
    title: "Github",
    content: "",
    author: "Vikram Srinivas",
    slug: "Github",
  };

  const Websites = {
    title: "Websites",
    content: "",
    author: "Vikram Srinivas",
    slug: "Websites",
  };
  const bestjsframeworks = {
    title: "Best JavaScript Frameworks",
    content:
      "Frontend :- AngularJS & ReactJS  ,  Backend :- NodeJS ,   Frontend && Backend :- NextJS",
    author: "Vikram Srinivas",
    slug: "bestjsframeworks",
  };

  if (req.query.slug === "whatisjs") {
    res.status(200).json(whatisjs);
  } else if (req.query.slug === "bestjsframeworks") {
    res.status(200).json(bestjsframeworks);
  } else if (req.query.slug === "Github") {
    res.status(200).json(Github);
  } else if (req.query.slug === "Websites") {
    res.status(200).json(Websites);
  }
}
