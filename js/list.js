/*------------modal links--------------*/
const PopLinks ={

    contactLinks:[
{
   title: "Anime Reels : 7degreeslove",
   icon: icons.insta,
   type: "url",
   target: "https://Instagram.com/7degreeslove"
},
{
   title: "Cute Lyra Reels : 7degreelove",
   icon: icons.insta,
   type: "url",
   target: "https://Instagram.com/7degreelove"
},
{
   title: "Queen Sujata",
   icon: icons.insta,
   type: "url",
   target: "https://Instagram.com/queensujata63"
},
{
   title: "contact@myinkverse.in",
   icon: icons.email,
   type: "url",
   target: "mailto:contact@myinkverse.in"
},
{
   title: "contact@imxstore.in",
   icon: icons.email,
   type: "url",
   target: "mailto:contact@imxstore.in"
}
], 

 projectLinks :[
{
   title: "InkUI",
   icon: icons.folder,
   type: "url",
   target: "https://queen-sujata.github.io/inkUI/"
},
{
   title: "Queen Octapad",
   icon: icons.folder,
   type: "url",
   target: "https://queen-sujata.github.io/queen-octapad/"
}
], 

 inkverseLinks : [
{
   title: "Anime Kingdom",
   icon: icons.anime,
   type: "page",
   target: "anime"
},
{
   title: "Gamer Arena",
   icon: icons.game,
   type: "page",
   target: "game"
},
{
   title: "Cinema District",
   icon: icons.movie,
   type: "page",
   target: "cinema"
},
{
   title: "Sound Valley",
   icon: icons.music,
   type: "page",
   target:"music"
},
{
   title: "YouTube Station",
   icon: icons.youtube,
   type: "url",
   target: "https://youtube.com/@grootytales"
}
]    
}


/*----- page links -------*/
const pageLinks = {

    homeLinks:[
{
   title: "MyInkVerse",
   icon: icons.myinkverse,
   type: "action",
   target: `showModal('MyInkVerse', PopLinks.inkverseLinks);`
},
{
   title: "My Projects",
   icon: icons.project,
   type: "action",
   target:`showModal('Projects', PopLinks.projectLinks);`
},
{
   title: "Store",
   icon: icons.store,
   type: "url",
   target: "https://imxstore.in"
},
{
   title: "Contact",
   icon: icons.email,
   type: "action",
   target:`showModal('Contacts',PopLinks.contactLinks);`
}
], 
animeLinks:[
{
   title: "Trending Anime",
   icon: icons.trending,
   type: "action",
   target: "showTrending"
},
{
   title: "Hidden Gems",
   icon: icons.favorite,
   type: "action",
  target:`showList('Hidden Gems',hiddenGems)`
},
{
   title: "Currently Watching",
   icon: icons.watching,
   type: "action",
   target: "Watching"
},
{
   title: "Upcoming Anime",
   icon: icons.upcoming,
   type: "action",
   target: "showUpcoming"
},
{
   title: "Buy Anime Dress",
   icon: icons.store,
   type: "url",
   target: "https://imxstore.in"
}
], 
cinemaLinks:[
{
   title:"Trending Dramas",
   icon: icons.trending,
   type: "action",
   target:`showList('Trending Dramas',dramaStats.trendingDramas)`
}, 
{
   title:"Trending Stars",
   icon: icons.trending,
   type: "action",
   target:`showList('Trending',dramaStats.trendingStars)`
}, 
{
   title:"My Favorites",
   icon: icons.favorite,
   type: "action",
   target:`showList('My Favorite',dramaStats.faveDramas)`
}
], 

gameLinks:[
{
   title: "profile",
   icon: icons.profile,
   type: "action",
   target: "openStats('Profile')"
},
{
   title: "Load-Out",
   icon: icons.loadout,
   type: "action",
   target: "openStats('Loadout')"
},
{
   title: "Stats",
   icon: icons.stats,
   type: "action",
   target: "openStats('Stats')"
}
], 
musicLinks:[
{
   title:"My Favorite",
   icon: icons.music,
   type: "action",
   target:`showList('My Favorites',Songs.mySongs)`
}
]
}
