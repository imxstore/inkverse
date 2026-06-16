/*----------Load Images------------*/
Object.values(pages).forEach(page => {
    const img = new Image();
    img.src = page.image;
});
/*----------row renderer------------*/
function row(cls, left, right){
    return `
        <div class="${cls} tagline">
            <span>${left}</span>
            <span>${right}</span>
        </div>
    `;
}
/*-------------link renderer-----------*/
function renderLink(attrs, title, icon){
    return `
    <a class="link" ${attrs}>
        <span>${title}</span>
        <span>${icon}</span>
    </a>`;
}
/*-----------copy text button----------------*/
 async function copyText(btn){
    try{
        await navigator.clipboard.writeText("1163437282");
        btn.innerHTML = "FFID: 1163437282 ✓";

        setTimeout(()=>{
            btn.innerHTML = "FFID: 1163437282 📋";
        },1500);
    }catch(err){
        alert("Copy failed");
    }
}
