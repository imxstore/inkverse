/*-----pages------*/
const pages = {
  home: {
    image: "photo.jpg",
    title: "𝙼𝚢𝙸𝚗𝚔𝚅𝚎𝚛𝚜𝚎",
    tagline: "where ideas find ink",
    content:"", 
    links: pageLinks.homeLinks
  }, 
  anime: {
    image: "anime.jpg",
    title: "𝙼𝚢𝙸𝚗𝚔𝚅𝚎𝚛𝚜𝚎",
    tagline: "Anime Kingdom",
    content:"", 
    links: pageLinks.animeLinks
  }, 
  game: {
    image: "ff.jpg",
    title: "ᶜᴿᴬᶻᵞQUEEN✧",
    tagline:`<span onclick="copyText(this)">
        FFID: 1163437282 📋
    </span>`,
    content:"", 
    links: pageLinks.gameLinks
  }, 
  music: {
    image: "sp.jpg",
    title: "𝙼𝚢𝙸𝚗𝚔𝚅𝚎𝚛𝚜𝚎",
    tagline: "Sound Vally",
    content:Songs.trendingSongs, 
    links:pageLinks.musicLinks
  }, 
  cinema: {
    image: "sp.jpg",
    title: "𝙼𝚢𝙸𝚗𝚔𝚅𝚎𝚛𝚜𝚎",
    tagline: "Cinema District",
    content:"", 
    links:pageLinks.cinemaLinks
  }
};
