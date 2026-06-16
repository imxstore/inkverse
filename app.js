/* constants */
const bg = document.querySelector(".bg");
const title = document.querySelector(".title");
const tagline = document.querySelector(".tagline");
const links = document.getElementById("links");
const modal = document.getElementById("InkModal");
const modalTitle = document.getElementById("modalTitle");
const modalLinks = document.getElementById("modalLinks");
const modalText = document.getElementById("modalText");
const pageContent = document.getElementById("pageContent");


//onclick remove
document.addEventListener("click", e => {
 const page = e.target.closest("[data-page]");
 
    if(page){   
        closeModal();
        loadPage(page.dataset.page);
        return;
    }
   
});

/*-------------page load--------------*/
function loadPage(page, addHistory = true){
    const data = pages[page];
    if (!data) return;

    bg.src = data.image || "";
    title.textContent = data.title || "";
    tagline.innerHTML =
    typeof data.tagline === "function"
        ? data.tagline()
        : (data.tagline || "");

    // Page content
    if(Array.isArray(data.content)){
    pageContent.innerHTML = data.content
        .map(createLink)
        .join("");
}else{
    pageContent.innerHTML = data.content || "";
}

    // Links
    links.innerHTML = (data.links || [])
        .map(createLink)
        .join("");

    if(addHistory){
        history.pushState(
            { page },
            "",
            "#" + page
        );
    }
}

/*----------filter--------*/
function createLink(item){

    switch(item.type){

    case "page":
        return renderLink(
            `href="javascript:void(0)"
             data-page="${item.target}"`,
            item.title,
            item.icon
        );

    case "url":
        return renderLink(
            `href="${item.target}"
             target="_blank"`,
            item.title,
            item.icon
        );

 case "action":

    const action =
        item.target.includes("(")
            ? item.target
            : item.target + "()";

    return renderLink(
        `href="javascript:void(0)"
         onclick="${action}"`,
        item.title,
        item.icon
    );

    case "list":
        return row(
            "list-item",
            item.name,
            item.info || ""
        );
}

    return "";
}

/*----------------modal-----------------*/
function showModal(title, content){

    modalTitle.textContent = title;

    if(typeof content === "string"){
        modalText.innerHTML = content;
        modalLinks.innerHTML = "";
    }else{
        modalLinks.innerHTML = content
            .map(createLink)
            .join("");

        modalText.innerHTML = "";
    }

    modal.classList.add("show");
}


//close modal
function closeModal(){
    modal.classList.remove("show");
}
//close by outside click
modal.addEventListener("click",(e)=>{

    if(
        e.target === modal ||
        e.target.closest(".link")
    ){
        closeModal();
    }

});
/*----------close modal------------*/

/*----------- anime links ------------*/
function showTrending(){
    showList(
        "🔥 Trending Anime",
        trendingAnime.map((anime, i) => ({
            name: `${i + 1}. ${anime.title}`,
            info: `⭐ ${anime.score || "N/A"}`
        }))
    );
}

function Watching(){
    showModal(
    "🔥 Currently Watching",
    `
    <div class="list-item tagline">
        <span>Fairy Tale</span>
        <span>Season 7</span>
    </div>`
) ;
}

function showUpcoming(){
    showList(
        "📅 Upcoming Anime",
        upcomingAnime.map(anime => ({
            name: anime.title,
            info: anime.year || "TBA"
        }))
    );
}
/*----------closed anime links--------------*/

/*--------------browser back button-----------*/
window.addEventListener("popstate",(e)=>{
    closeModal();
    loadPage(
        e.state?.page || "home",
        false
    );
});

/*------------------List/Stats-------------*/
//show stats
function showStats(title, data){
    showModal(
        title,
        Object.entries(data)
            .map(([k,v]) => row("stat-row", k, v))
            .join("")
    );
}

function openStats(key){
    const data = statPages[key];
    if (!data) return;
    showStats(key, data);
}


//show list
function showList(title, items){
    showModal(
        title,
        items.map(item =>
            row("list-item",item.name,item.info)
        ).join("")
    );
}



/*----------------start-up---------------*/
const startPage =
    pages[location.hash.slice(1)]
        ? location.hash.slice(1)
        : "home";

history.replaceState(
    { page:startPage },
    "",
    "#" + startPage
);

loadPage(startPage, false);
