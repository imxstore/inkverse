/*icons data*/

const icons = {
    favorite:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M12 3l2.7 5.5L21 9.4l-4.5 4.4L17.6 20 12 17l-5.6 3 1.1-6.2L3 9.4l6.3-.9L12 3z"/>

</svg>`, 

    project:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <rect x="3" y="3" width="7" height="7" rx="1"/>
  <rect x="14" y="3" width="7" height="7" rx="1"/>
  <rect x="3" y="14" width="7" height="7" rx="1"/>
  <rect x="14" y="14" width="7" height="7" rx="1"/>

</svg>`, 

    upcoming:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <rect x="2" y="7" width="20" height="13" rx="2"/>
  <path d="M8 3l4 4 4-4"/>

</svg>`, 
    watching:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z"/>
  <circle cx="12" cy="12" r="3"/>

</svg>`, 

    favorite:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M12 3l2.7 5.5L21 9.4l-4.5 4.4L17.6 20 12 17l-5.6 3 1.1-6.2L3 9.4l6.3-.9L12 3z"/>

</svg>`, 

    stats:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M8 4h8v4a4 4 0 0 1-8 0z"/>
  <path d="M12 12v4"/>
  <path d="M8 20h8"/>
  <path d="M16 6h3a2 2 0 0 1-2 3h-1"/>
  <path d="M8 6H5a2 2 0 0 0 2 3h1"/>

</svg>`, 
    loadout:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <rect x="5" y="6" width="14" height="14" rx="2"/>
  <path d="M9 6V4h6v2"/>
  <path d="M9 12h6"/>
  <path d="M12 9v6"/>

</svg>`, 
    profile: `<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <rect x="2" y="4" width="20" height="16" rx="2"/>

  <circle cx="9" cy="10" r="2"/>

  <path d="M6.5 15c.8-1.5 1.8-2 2.5-2s1.7.5 2.5 2"/>

  <path d="M14 9h4"/>
  <path d="M14 13h4"/>

</svg>`, 
    trending:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M3 20h18"/>
  <path d="M5 15l4-4 3 2 7-7"/>
  <path d="M16 6h3v3"/>

</svg>`, 
    myinkverse:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <path d="M12 20h9"/>
  <path d="M16.5 3.5a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4 12.5-12.5z"/>
</svg>`, 

    store:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
  <path d="M3 6h18"/>
  <path d="M16 10a4 4 0 0 1-8 0"/>
</svg>`, 

    movie: `<svg xmlns="http://www.w3.org/2000/svg" 
    width="24"  
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2"     
    stroke-linecap="round"  
    stroke-linejoin="round">
    <path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8z"/>  
    <path d="M4 8l3-4"/>  
    <path d="M9 8l3-4"/>  
    <path d="M14 8l3-4"/>  
    <path d="M19 8l1-2"/></svg>`,
    
    anime: `<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <rect x="3" y="3" width="18" height="18" rx="2"/>
  <path d="M12 3v18"/>
  <path d="M3 12h9"/>
</svg>`,

    music: `<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M12 4v12"/>
  <path d="M12 4l7-2v12"/>
  <circle cx="10" cy="18" r="2"/>
  <circle cx="17" cy="16" r="2"/>

</svg>`, 

game:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <path d="M6 12h12a4 4 0 0 1 4 4v1a3 3 0 0 1-5.12 2.12L14 16H10l-2.88 3.12A3 3 0 0 1 2 17v-1a4 4 0 0 1 4-4z"/>
  <path d="M8 10v4"/>
  <path d="M6 12h4"/>
  <circle cx="16.5" cy="11.5" r="1"/>
  <circle cx="19" cy="14" r="1"/>
</svg>`, 

youtube:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <rect x="2" y="5" width="20" height="14" rx="4"/>
  <path d="M10 9l5 3-5 3z"/>

</svg>`, 

email:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2"/>
  <path d="M3 7l9 6 9-6"/>
</svg>`, 

insta:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">
  <rect x="2" y="2" width="20" height="20" rx="5"/>
  <circle cx="12" cy="12" r="4"/>
  <circle cx="17.5" cy="6.5" r="1"/>
</svg>`, 
folder:`<svg xmlns="http://www.w3.org/2000/svg"
     width="24"
     height="24"
     viewBox="0 0 24 24"
     fill="none"
     stroke="currentColor"
     stroke-width="2"
     stroke-linecap="round"
     stroke-linejoin="round">

  <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>

</svg>`
};

