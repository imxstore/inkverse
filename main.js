const scripts = [
  "anime.js",
  "icons.js", 
  "stats.js",
  "list.js",
  "songs.js",
  "pages.js", 
  "const.js",
  "app.js"
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