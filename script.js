
const app = document.querySelector("#app");

function esc(s){return s || ""}

function photoBlock(file, label){
  if(file){
    return `<div class="photo reveal"><img src="${file}" alt="${esc(label)}" loading="lazy"></div>`;
  }
  return `<div class="photo reveal"><div class="placeholder"><strong>📷 ${esc(label)}</strong><span>Espaço reservado para adicionar esta foto depois.</span></div></div>`;
}

function section(s, i){
  const id = `s-${i}`;
  if(s.type==="hero"){
    return `<section class="screen hero" id="${id}">
      <div class="inner center reveal">
        <div class="eyebrow">❤️</div>
        <h1>${s.title}</h1>
        <p class="lead italic">${s.subtitle}</p>
        <div class="big-date">${s.date}</div>
        <button class="btn" onclick="document.getElementById('s-1').scrollIntoView({behavior:'smooth'})">${s.button}</button>
      </div><div class="scroll">deslize ↓</div>
    </section>`;
  }
  if(s.type==="end"){
    return `<section class="screen final" id="${id}">
      <div class="inner center reveal"><h2>${s.title}</h2>${s.text.map(x=>`<p class="emphasis">${x}</p>`).join("")}
      <button class="btn" onclick="window.scrollTo({top:0,behavior:'smooth'})">${s.button}</button></div>
    </section>`;
  }
  if(s.type==="forever"){
    return `<section class="screen final" id="${id}"><div class="inner center reveal">
      <div class="eyebrow">${s.eyebrow}</div>${s.text.map((x,j)=>`<p class="${j===1?'emphasis':''}">${x}</p>`).join("")}
    </div></section>`;
  }
  const title = s.title ? `<h2>${s.title}</h2>` : "";
  const text = (s.text||[]).map(x=>`<p>${x}</p>`).join("");
  const quote = s.quote ? `<div class="quote reveal">${s.quote}</div>` : "";
  const emphasis = s.emphasis ? `<div class="emphasis reveal">${s.emphasis}</div>` : "";
  const words = s.words ? `<div class="word-list reveal">${s.words.map(w=>`<span class="word">${w}</span>`).join("")}</div>` : "";
  const after = s.after ? `<p class="reveal">${s.after}</p>` : "";
  const birthday = s.type==="birthday" ? " final" : "";
  return `<section class="screen${birthday}" id="${id}"><div class="inner">
    <div class="eyebrow reveal">${s.eyebrow||""}</div>
    ${title}
    <div class="content">${text}</div>
    ${quote}${emphasis}${words}${after}
    ${s.photo !== undefined ? photoBlock(s.photo,s.photoLabel) : ""}
  </div></section>`;
}

app.innerHTML = C.sections.map(section).join("");

const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{ if(e.isIntersecting) e.target.classList.add("visible") })
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

function spawnHeart(){
  const h=document.createElement("div");
  h.className="heart";
  h.textContent=Math.random()>.25?"♥":"♡";
  h.style.left=(Math.random()*100)+"vw";
  h.style.bottom=(-10-Math.random()*20)+"vh";
  h.style.fontSize=(10+Math.random()*18)+"px";
  h.style.animationDuration=(7+Math.random()*6)+"s";
  document.getElementById("hearts").appendChild(h);
  setTimeout(()=>h.remove(),14000);
}
setInterval(spawnHeart,900);
