const COMPANY = {
  title: "The Book of Beastslayers",
  tagline: "A tally of Faith and Fury"
};

const BEASTSLAYERS = [

  { name: "Valmont",
    epithet: ["The Unbroken"],
    paragraphs: [
      "Born in Garamont, Dole, now known as Valmont, left the peasantry in awe with his quick wit and proficiency in combat.",
      "His wittiness and fast tongue landed him in trouble with the order of the lake, undergoing several accounts of penitence and trials. With the passing of his lord Bertelis of Garamont, no-one was left to protect him. Being told he was unwanted by the entire realm, from the dukedom of Aquitaine to the archers of the kingdom, Valmont had no hope.",
      "Until, Bohemond of Bastogne offered to accommodate him with open arms, seeing potential for growth and respecting his proficiency in combat. From this day, Valmont swore his loyalty to Bohemond, doing anything for both his lord and the dukedom.",
      "Won the Bretonnian brawl alongside the rest of Bastogne's finest.",
      "Proving his dedication through months of progressing through the ranks in standard time despite his prowess, Valmont joined the cavalry as a mounted sergeant, demonstrating his potence fighting on horseback.",
      "Soon after, he undertook the Beastslayer trial to further prove his loyalty to Bohemond. Passing with flying colours, as expected. Valmont entered the Beastslayers of Bastogne."
    ]
  },

  { name: "Matthieu",
    epithet: ["La Vipère"],
    paragraphs: [
      "Born in the marshes of Rachard, Matthieu rose through the ranks and became the youngest sergeant of Garamont. He migrated to Bastogne following the death of his lord Bertelis of Garamont.",
      "Won the first tournament of Bastogne despite his young age, becoming the first champion of Bastogne.",
      "Was a part of the Bastogne brawl team, winning the brawl in their first season.",
      "Promoted to mounted sergeant, where he displayed great aptitude for mounted combat.",
      "Undertook the Beastslayer trial, passing and becoming an Avant-Garde in the Beastslayers, pursuing his dreams of being a squire to lord Bohemond of Bastogne."
    ]
  },

  { name: "Venturin",
    epithet: ["L'Élu"],
    paragraphs: [
      "Born in the swamps of Moussillon, a renowned fighter previously known as Theodore, migrated to Bastogne, changing his name, after hearing rumours of a scheme to take his life.",
      "This only fuelled him to train and fight more relentlessly than before.",
      "Working his way through the ranks, his prowess was soon recognised by Lord Bohemond de Bastogne. After passing the Beastslayer trial, Venturin was welcomed into the Beastslayers and became an “Avant-Garde”.",
      "He was victorious at the Bastogne tournament, which granted him entry to the Tournament d'Automne, where he would fight the other champions of Bretonnia. He flawlessly won the autumn tournament and became Champion d'Automne.",
      "For his flawless victory, he was given the moniker – l'Élu, or “The Chosen One”. Bestowed upon him by his lord Bohemond de Bastogne.",
      "He won the Bastogne tournament for the second time in a row, entering the Tournament de Hivernal, the winter tournament, remaining undefeated.",
      "Defeated Micheu of Aquitaine unwaveringly in the grand tournament, becoming the first grand champion of the Bretonnian peasantry – Champion de Bretonnie.",
      "Shortly after this, Venturin was elevated to the rank of “Tueur de Bêtes” in the Beastslayers.",
      "After many years of service to Bohemond and the Beastslayers, Venturin honourably departed from the Beastslayers to pledge both his loyalty and his sword to Anara de Garamont, becoming her squire – the Sword of Garamont."
    ]
  },

  { name: "Berenguie",
    paragraphs: [
      "Hailing from the marshland of Rachard, Berenguie came to be one of the first sergeants of the late Bertelis de Garamont. Following his death, he relocated to the fruitful lands of Bastogne.",
      "Berenguie showed great aptitude for both leadership and combat, thriving in large battles and melee, rather than chasing glory in duels.",
      "Demonstrating these valuable attributes, Berenguie became one of the first Beastslayers of Bastogne. Promoted to “Avant-Garde”.",
      "He won the Bretonnian brawl with the likes of fellow Beastslayers such as Bardin, Valmont and Matthieu “la Vipère”.",
      "Led the Beastslayers to glory, keeping the standards high in the Beastslayers, training them, making sure they remained fit and worthy of their position, introduced the maintenance trials.",
      "Promoted to “Tueur de Bêtes”.",
      "The first Beastslayer to be promoted to “Pacificateur”.",
      "After many years of service, Berenguie honourably departed from the Beastslayers to pledge his loyalty to Anara of Garamont, and live out the rest of his days fighting for the White Dragon."
    ]
  }

];

const HERALDRY = "assets/images/heraldry.png";
const FOOTER_ART = "assets/images/footer-art.png";
const WEATHER = "assets/images/weather.png";
const LEATHER = "assets/images/leather.png";

function renderCover(){
  return `<div class="front">
      <h1 class="front-title">${COMPANY.title}</h1>
      <div class="front-tag">${COMPANY.tagline}</div>
      <img class="heraldry" src="${HERALDRY}" alt="Arms of the Duchy of Bastogne">
    </div>`;
}
function memberHeaderHTML(m, cont){
  if(cont) return '';
  const eps = m.epithet ? (Array.isArray(m.epithet)?m.epithet:[m.epithet]) : [];
  const epithet = eps.length ? `<div class="m-epithet">${eps.map(e=>'“'+e+'”').join('&ensp;&ensp;')}</div>` : '';
  return `<div class="m-head"><h2 class="m-name">${m.name}</h2>${epithet}</div>\n    <hr class="titlerule">`;
}
function proseHeaderHTML(p, cont){
  if(cont) return '';
  return `<div class="m-head"><h2 class="m-name">${p.title}</h2></div>\n    <hr class="titlerule">`;
}
function pageHTML(headerHTML, paragraphs, footerHTML, cont){
  const deeds = paragraphs.map(p=>`<p>${p}</p>`).join('');
  const cls = 'm-deeds'+(cont?' cont':'');
  return (headerHTML?headerHTML+'\n    ':'')+`<div class="${cls}">${deeds}</div>`+(footerHTML||'');
}
function renderBack(){ return `<div class="front back"><img class="heraldry heraldry-sm" src="${HERALDRY}" alt=""><div class="back-line">Bohemond's Beastslayers</div></div>`; }
function renderBlank(){ return `<div class="blankmark">⚜</div>`; }

const FRONT_PAGES = {
  company: { title: "", paragraphs: [] },
  oath: { title: "", paragraphs: [] }
};

const FOOTER_HTML = `\n    <img class="footer-art" src="${FOOTER_ART}" alt="">`;
const PAGINATION_SAFETY = 8;

function measureGeometry(){
  const rect = flipbook.getBoundingClientRect();
  if(!rect.width || !rect.height) return null;
  const pageWidth = rect.width/2, pageHeight = rect.height;
  const wrap = document.createElement('div');
  wrap.style.cssText = 'position:fixed; left:-99999px; top:0; visibility:hidden; pointer-events:none; overflow:hidden; width:'+pageWidth+'px; height:'+pageHeight+'px;';
  const inner = document.createElement('div');
  inner.className = 'page-inner';
  wrap.appendChild(inner);
  document.body.appendChild(wrap);
  const cs = getComputedStyle(inner);
  const geometry = {
    width: inner.clientWidth - (parseFloat(cs.paddingLeft)||0) - (parseFloat(cs.paddingRight)||0),
    height: inner.clientHeight - (parseFloat(cs.paddingTop)||0) - (parseFloat(cs.paddingBottom)||0)
  };
  wrap.remove();
  return geometry;
}
let measureBox = null;
function getMeasureBox(){
  if(!measureBox){
    measureBox = document.createElement('div');
    measureBox.style.cssText = 'position:absolute; visibility:hidden; pointer-events:none; left:-99999px; top:0;';
    document.body.appendChild(measureBox);
  }
  return measureBox;
}
function measureHeight(html, width, cls){
  const box = getMeasureBox();
  box.className = cls||'';
  box.style.width = width+'px';
  box.innerHTML = html;
  return box.scrollHeight;
}
function paginateEntry(headerHTMLFn, paragraphs, geometry, footerHTML){
  if(!paragraphs.length) return [{ header: headerHTMLFn(false), paragraphs: [], footer: footerHTML||'', cont:false }];
  const w = geometry.width;
  const headFirstH = measureHeight(headerHTMLFn(false), w);
  const headContH  = measureHeight(headerHTMLFn(true), w);
  const footH = footerHTML ? measureHeight(footerHTML, w) : 0;
  const budgetFirst = geometry.height - headFirstH - PAGINATION_SAFETY;
  const budgetCont  = geometry.height - headContH  - PAGINATION_SAFETY;
  const chunks = [];
  let current = [];
  let idx = 0;
  while(idx < paragraphs.length){
    const isFirst = chunks.length===0;
    const budget = isFirst ? budgetFirst : budgetCont;
    const candidate = current.concat([paragraphs[idx]]);
    const isLastParagraph = idx === paragraphs.length-1;
    const extra = (isLastParagraph && footH) ? footH : 0;
    const h = measureHeight(candidate.map(p=>'<p>'+p+'</p>').join(''), w, 'm-deeds');
    if(h + extra <= budget || current.length===0){
      current = candidate;
      idx++;
    } else {
      chunks.push(current);
      current = [];
    }
  }
  if(current.length) chunks.push(current);
  return chunks.map((paras,i)=>({
    header: headerHTMLFn(i>0),
    paragraphs: paras,
    footer: (i===chunks.length-1) ? (footerHTML||'') : '',
    cont: i>0
  }));
}

function buildPageDefs(splits){
  const companyChunks = splits ? splits.company : [{ header: proseHeaderHTML(FRONT_PAGES.company,false), paragraphs: FRONT_PAGES.company.paragraphs, footer:'' }];
  const oathChunks    = splits ? splits.oath    : [{ header: proseHeaderHTML(FRONT_PAGES.oath,false), paragraphs: FRONT_PAGES.oath.paragraphs, footer: FOOTER_HTML }];
  const memberChunks  = splits ? splits.members : BEASTSLAYERS.map(m=>[{ header: memberHeaderHTML(m,false), paragraphs: m.paragraphs, footer:'' }]);

  const defs = [
    { kind:'cover', html: renderCover() },
    ...companyChunks.map(c=>({ kind:'prose', html: pageHTML(c.header,c.paragraphs,c.footer,c.cont) })),
    ...oathChunks.map(c=>({ kind:'prose', html: pageHTML(c.header,c.paragraphs,c.footer,c.cont) })),
    ...memberChunks.flatMap(chunks=>chunks.map(c=>({ kind:'member', html: pageHTML(c.header,c.paragraphs,c.footer,c.cont) })))
  ];
  if((defs.length+1)%2===1) defs.push({ kind:'blank', html: renderBlank() });
  defs.push({ kind:'back', html: renderBack() });
  return defs;
}
let PAGE_DEFS = buildPageDefs(null);
const flipbook = document.getElementById('flipbook');
const stage=document.querySelector('.stage'), bookcase=document.getElementById('bookcase');
document.getElementById('casetex').style.backgroundImage='url('+LEATHER+')';
const pageNodes = [];
function buildPages(){
  flipbook.innerHTML=''; pageNodes.length=0;
  PAGE_DEFS.forEach(def=>{
    const hard = (def.kind==='cover'||def.kind==='back');
    const el=document.createElement('div');
    el.className='page'+(hard?' page-cover':'');
    if(hard) el.setAttribute('data-density','hard');
    const tex=document.createElement('div'); tex.className='tex';
    tex.style.backgroundImage='url('+(hard?LEATHER:WEATHER)+')';
    const inner=document.createElement('div'); inner.className='page-inner'; inner.innerHTML=def.html;
    el.appendChild(tex); el.appendChild(inner);
    flipbook.appendChild(el); pageNodes.push(el);
  });
}
let pf=null;
function centerIfSingle(idx){
  const total = pf?pf.getPageCount():PAGE_DEFS.length;
  const single = (idx<=0) || (idx>=total-1);
  if(single){
    const node = (idx<=0)? pageNodes[0] : pageNodes[total-1];
    requestAnimationFrame(()=>{
      if(!node) return;
      const pr=flipbook.getBoundingClientRect(), nr=node.getBoundingClientRect();
      if(!nr.width) return;
      const off=(pr.left+pr.width/2)-(nr.left+nr.width/2);
      flipbook.style.transform='translateX('+off.toFixed(1)+'px)';
    });
    bookcase.style.opacity='0'; bookcase.classList.remove('spread');
    return;
  }
  flipbook.style.transform='';
  requestAnimationFrame(()=>{
    const sr=stage.getBoundingClientRect(), pr=flipbook.getBoundingClientRect();
    let pg=null;
    for(let i=1;i<total-1;i++){ const n=pageNodes[i]; if(n){ const r=n.getBoundingClientRect(); if(r.width){ pg=r; break; } } }
    if(!pg){ bookcase.style.opacity='0'; return; }
    const mx=20, mt=16, mb=24;
    bookcase.style.left=(pr.left-sr.left-mx)+'px';
    bookcase.style.top=(pg.top-sr.top-mt)+'px';
    bookcase.style.width=(pr.width+mx*2)+'px';
    bookcase.style.height=(pg.height+mt+mb)+'px';
    bookcase.style.opacity='1';
    bookcase.classList.add('spread');
  });
}
function initFlip(){
  buildPages();
  pf=new St.PageFlip(flipbook,{
    width:520, height:720, size:'stretch',
    minWidth:300, maxWidth:520, minHeight:415, maxHeight:720,
    showCover:true, usePortrait:false, drawShadow:true,
    flippingTime:700, maxShadowOpacity:0.5,
    useMouseEvents:true, disableFlipByClick:true, mobileScrollSupport:true
  });
  pf.loadFromHTML(flipbook.querySelectorAll('.page'));
  pf.on('flip', e=>{ centerIfSingle(e.data); });
  pf.on('changeState', e=>{
    const s=e.data;
    if(s==='read'){ centerIfSingle(pf.getCurrentPageIndex()); }
    else if(s==='flipping' || s==='user_fold'){
      playPageSound();
      flipbook.style.transform='';
    }
  });
  requestAnimationFrame(()=>centerIfSingle(pf.getCurrentPageIndex()));
  setTimeout(()=>centerIfSingle(pf.getCurrentPageIndex()), 90);
}
document.addEventListener('keydown', e=>{ if(!pf) return; if(e.key==='ArrowLeft')pf.flipPrev(); if(e.key==='ArrowRight')pf.flipNext(); });
let resizeT=null;
window.addEventListener('resize', ()=>{ clearTimeout(resizeT); resizeT=setTimeout(()=>{
  if(pf) centerIfSingle(pf.getCurrentPageIndex());
}, 200); });

let muted=false;
const PAGE_TURN_SRC = "assets/audio/page-turn.mp3";
const pageTurnAudio = new Audio(PAGE_TURN_SRC);
function playPageSound(){ if(muted) return; try{ pageTurnAudio.currentTime=0; pageTurnAudio.play().catch(()=>{}); }catch(_){} }

let tctx=null; const lastScroll=new WeakMap();
function scrollTick(){ if(muted) return; try{
  tctx = tctx || new (window.AudioContext||window.webkitAudioContext)();
  if(tctx.state==='suspended') tctx.resume();
  const now=tctx.currentTime, o=tctx.createOscillator(), g=tctx.createGain(), lp=tctx.createBiquadFilter();
  o.type='triangle'; o.frequency.value=190;
  lp.type='lowpass'; lp.frequency.value=420; lp.Q.value=0.6;
  g.gain.setValueAtTime(0.0001,now); g.gain.exponentialRampToValueAtTime(0.03,now+0.003); g.gain.exponentialRampToValueAtTime(0.0001,now+0.07);
  o.connect(lp).connect(g).connect(tctx.destination); o.start(now); o.stop(now+0.08);
}catch(_){} }
document.addEventListener('scroll', e=>{
  const t=e.target; if(!t||!t.classList||!t.classList.contains('m-deeds')) return;
  const prev=lastScroll.get(t)||0;
  if(Math.abs(t.scrollTop-prev)>=34){ lastScroll.set(t,t.scrollTop); scrollTick(); }
}, true);

initFlip();

function waitForStableFlipbookHeight(attempt){
  attempt = attempt||0;
  return new Promise(resolve=>{
    requestAnimationFrame(()=>{
      const h1 = flipbook.getBoundingClientRect().height;
      requestAnimationFrame(()=>{
        const h2 = flipbook.getBoundingClientRect().height;
        const stable = h1===h2 && h1>=400;
        if(stable || attempt>=15) resolve(stable);
        else setTimeout(()=>waitForStableFlipbookHeight(attempt+1).then(resolve), 100);
      });
    });
  });
}
function paginateOnce(attempt){
  attempt = attempt||0;
  const fontsReady = (document.fonts && document.fonts.ready) ? document.fonts.ready : Promise.resolve();
  Promise.race([fontsReady, new Promise(r=>setTimeout(r,1500))]).then(()=>{
  waitForStableFlipbookHeight().then(()=>{
    setTimeout(()=>{
      const geometry = measureGeometry();
      if(!geometry){
        if(attempt<4) paginateOnce(attempt+1);
        return;
      }
      const splits = {
        company: paginateEntry((cont)=>proseHeaderHTML(FRONT_PAGES.company,cont), FRONT_PAGES.company.paragraphs, geometry, ''),
        oath: paginateEntry((cont)=>proseHeaderHTML(FRONT_PAGES.oath,cont), FRONT_PAGES.oath.paragraphs, geometry, FOOTER_HTML),
        members: BEASTSLAYERS.map(m=>paginateEntry((cont)=>memberHeaderHTML(m,cont), m.paragraphs, geometry, ''))
      };
      const totalChunks = splits.company.length + splits.oath.length + splits.members.reduce((a,c)=>a+c.length,0);
      const originalCount = 2 + BEASTSLAYERS.length;
      if(totalChunks === originalCount) return;
      if(pf){ pf.destroy(); pf=null; }
      if(!flipbook.isConnected){ stage.insertBefore(flipbook, bookcase.nextSibling); }
      PAGE_DEFS = buildPageDefs(splits);
      initFlip();
    }, 120);
  });
  });
}
paginateOnce();
