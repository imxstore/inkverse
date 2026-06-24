const scripts = [
  "js/icons.js", 
  "js/stats.js",
  "js/list.js",
  "js/songs.js",
  "js/pages.js", 
  "js/const.js",
  "js/app.js", 
  "js/anime.js",
];
(async () => {
  for (const src of scripts) {
    await new Promise(resolve => {
      const s = document.createElement("script");
      s.src = src;
      s.onload = resolve;
      document.body.appendChild(s);
    });
  }
})();
