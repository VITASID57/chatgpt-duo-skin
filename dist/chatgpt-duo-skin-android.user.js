// ==UserScript==
// @name         ChatGPT Duo Skin｜Android Firefox Beta（非商用）
// @namespace    https://github.com/VITASID57/chatgpt-duo-skin
// @version      0.3.0
// @description  Android Firefox + Tampermonkey: mirrored avatars/cards, gradient bubbles, wallpaper, mobile theme studio, continuous HSV palette.
// @author       Duo Skin contributors
// @match        https://chatgpt.com/*
// @match        https://chat.openai.com/*
// @run-at       document-idle
// @noframes
// @grant        GM_getValue
// @grant        GM_setValue
// @license      PolyForm-Noncommercial-1.0.0
// @homepageURL  https://github.com/VITASID57/chatgpt-duo-skin
// @supportURL   https://github.com/VITASID57/chatgpt-duo-skin/issues
// ==/UserScript==

// Required Notice: Copyright (c) 2026 Duo Skin & You. Noncommercial use only.
(() => {
  'use strict';
  // Mobile-only install: do not change the completed desktop Chrome theme.
  const JDW_MOBILE = /Android/i.test(navigator.userAgent);
  if (!JDW_MOBILE) return;
  if (window.__CHATGPT_DUO_SKIN_PUBLIC_MOBILE__) return;
  window.__CHATGPT_DUO_SKIN_PUBLIC_MOBILE__ = true;

  // Generic placeholders. Your own pictures remain in YOUR browser storage only.
  const DEFAULT_AVATARS = {
    assistant: 'data:image/webp;base64,UklGRmwDAABXRUJQVlA4IGADAABwFQCdASpwAHAAPmEslEYkIqIhLHKJWIAMCWUA09YWP2wSzi+2rbIx/Zu0T+411feBuIN0HgBwEvgp/K/9N0n37r4gvxn/L+wT/Lv6r6R3rd/YD2Hv1vOGsGTGER1CmlxuzzxJpYvPiVQPfY1tjq0S+hdNAQgJ9NA4eAaVQRfrMy1IGTCXi2sZSiIw+nLOt+Iz86BCx8e52avFrl3YNzHvk1pzfDDxZrVCRAxCw3mF7STtdAAA/vsj+CJcxtz5OEAMc6IxQ7U85kbOCsREgOEwrarelUv5RAWMNSTfRJp9M4qUl1MzWbh6/0lR/8YG/i+6mzndXfPOYvhTs61m/LJNzIUbtgnCeSzhpMJw93Dw/FoFjItcTptVSMXNGTdnDAhAJA3xwwXCEWuOAGgMwOS887fIz0v+3Avpdg7c9/ln50uU4x0Xi2Dw5hz+sC8lTcV/SGyefQZb6nxuvKRjvYwrbo8fms2JAneswbvLAe+PYdVf+1/5rVexM+pk4F9/jJcoyg7GIn4iBiYk2DdvIdUQGrsINfV1UjaWDnyNe44f5ROSp8QDJQ91okqLraTs5SeXVOvsdIyYcTPu/oqRDnp/tm+v+7OfATP+fUj0I1R+zJ6BjD3eLT4e/s2D9aTYSXeIOJuCCoXLV/QKFTuRtskSbG8K5/VKTRpAk74GbyDedQJtSk3WQT2kBhPtIcEdlwv2s8V15uoNDAV50s0c2Fh5TB8U/hzgEglxd8E1jZtMP3sEW6oo/wcJwAgvptkASBDs07baHMVekdMNZvKGhlxhTjNvzvh7YNRSTlyzunuavrtggRMvU5z2pErrb56Fo95HOFVclhg4ehSEfhpBE075XvkpJftx2jOCqjwkMh2YMPj0PXfPDcUoHYuN8pwh+W5YAJhOHiAZKAo45hhLeV+xPKQ9pH2dy0AgVIrcQanFlRaKjnL88lJNGa2QxmwbExQvWwfHPGSFzB3ACYZiggilO5FdOk9ivilNZsZ4+Vt9z9Kf2rGY33LNvZ+yD8QEcvjZ31eXGCUTZqo6QZ8dTFN7domdvJb1sSxWWLWp2opNcTcYozzL9QKdPGAU8mC/k+kQYftAU38rX9tH+cHkcecEEz66Rl7q+5rchdLU/yylQ7dN6SePmxvqC4/5QWjUAAA=',
    user: 'data:image/webp;base64,UklGRloDAABXRUJQVlA4IE4DAABQFQCdASpwAHAAPmEslEYkIqIhK9K5iIAMCUAaibvYC8mmyZt5vMB52PoU3kfehMAv7Fa8TvA7wZQRjPiA4GDwBjof9L+svmI/Jv8/7Bn6y9DB7DH7AHCKSx1jGw3gYcqwl1n2BPTqsx0mEZlUbez3PAJ0b5X6BNyVUqm5H9EHKv4pFtuasLrGJ59h4zLIuQZA8rfGMjusmVrOJm0jkmCjk6VXpPSE1oFz5Jv754ONB3bCAAD++177NJxYV1q2icPrB2Of2Ectpv6TVB4N0UJd+0aqfNjl/r0B9PInu233ByHHmt6qrsg/Ni29u971wyDwHzTBLn/2zzh5/uVwaeLN65VVLhoreGWYTVO12tf97Glm8VuNDqU47RccITotR0vXtvTg/XjliJVBJCDzG0A+gmtlSv8DvNPzVYcov7w+ANfQlmPSpWldf5nDHamZCfxcW/TpnH/UpaMAmVVbofRxuV06GilHzlrgzykrCa3VMw11/Of0/13rmfDaM7vPboh/aEvYQ34HwK/Fzk2dOd6zZ3Nwcc6aUMLpDYZ4QIK+wgBgOVRLFEZXYWqQsqK6ih7aW+a+b3/mcGoxSlMsOWaoeJ5ywUN5O8WuT0HDt0YIDWOODjc4LMIc+vQIHMjzt+RxoVvArrD/f7pS1avonKvrA22oYn9eL/IRhRbRu2xvJvHJc9EJUN7kjVn0+WNF6PSE91b/Z0PF59TgpHQMLlroHCLxpuxSafCKV9aCuAnlNBlme8vgPcMYcvMqozfwPH0nTgX3/DIPAqQBEwmf1i5vGUsokYM818MguRCQW8XoXNuptQYoPA1F1K9jMYhfIFWAUb44IXeFFbT9mH2WHzQCZnjFmnM04sXX7CjkvpCmZTy4Mi2CA88imYgX90lSD3JxhujlLz37bFivif6uWx13fEkkH4mb7hoT+eFpyt51sAcpyfUV+p8pzXyAscVYM9JTlEoEfO8lQxn5HtrMYeDi/9IW42lWwykgzEGUy076DVUG/9U4hWbfUbjU5a2CouKI5Yj71+Nrcg94QXFUBam32iq3zt2Qti2LNktaaS6ynkVzqjTNweRcibGU7hxawD+a2vKWydfbZWQ71h3JKeDDUTpoufZ8rkZ7IQAAAAA='
  };
  const STORAGE = 'cds.public.v1.config';  // Shared public edition namespace; never load private editions.
  const SCHEMA = 'chatgpt-duo-skin/v1';
  const BASE = {
    schema: SCHEMA, preset: 'night', glass: 0.88, radius: 19,
    bubbleMode: 'paragraph', avatarMode: 'overlay', showAvatars: true,
    showWallpaper: true, enabled: true, wallpaperVeil: 0.76,
    gradientBubbles: true, showPlaque: true, userSentences: true, userSplitMode: 'smart', authoredState: false,
    assistantName: 'AI 助手 · Assistant', userName: '我 · You', anniversaryDate: ''
  };
  const BUILTIN_COLORS = {
    night: {
      title:'极夜深海蓝', base:'#070D22', secondary:'#0A1230', chrome:'#091734',
      assistant:'#142C5C', user:'#DCE7FF', userText:'#1B2B52',
      text:'#F4F7FF', muted:'#ACC4F5', accent:'#4A6CFF',
      sidebar:'#070D22', border:'#6386FF'
    },
    frost: {
      // Keep legacy `frost` key so existing saved presets keep loading.
      title:'暮紫星云', base:'#160F2B', secondary:'#2C1E46', chrome:'#241A3D',
      assistant:'#34284E', user:'#EAD7F8', userText:'#392551',
      text:'#F9F3FF', muted:'#D4C1EB', accent:'#A88BFF',
      sidebar:'#201532', border:'#987FD1'
    },
    fern: {
      // Keep legacy `fern` key for backwards-compatible saved JSON.
      title:'芭比玫粉', base:'#FFF0F7', secondary:'#FADCEB', chrome:'#FFF4FA',
      assistant:'#FFF9FC', user:'#F59FC8', userText:'#5B2444',
      text:'#43243A', muted:'#7F4B66', accent:'#E65398',
      sidebar:'#FFE5F1', border:'#EA8BB9'
    }
  };
  // Preset gradient endpoints remain editable. Night cannot be deleted.
  Object.assign(BUILTIN_COLORS.night,{main:'#142E68',mainTo:'#4A6CFF',assistantFrom:'#223450',assistantTo:'#EFF5F9',userFrom:'#E65398',userTo:'#FEEDF5'});
  Object.assign(BUILTIN_COLORS.frost,{main:'#594084',mainTo:'#A98AE1',assistantFrom:'#392A5E',assistantTo:'#F2EAFB',userFrom:'#AD6AC7',userTo:'#FAEAFD'});
  Object.assign(BUILTIN_COLORS.fern,{main:'#E65398',mainTo:'#F9ACD1',assistantFrom:'#573A66',assistantTo:'#FFF2F9',userFrom:'#E65398',userTo:'#FEEDF5'});
  const SIDEBAR = 'aside,[data-testid="history-sidebar"],[data-testid="sidebar"],nav[aria-label="Chat history"]';
  const GMget = (key,fallback) => {try { return GM_getValue(key,fallback); } catch(_) { return fallback; }};
  const GMset = (key,value) => {try { GM_setValue(key,value); return true; } catch(_) { return false; }};
  const THEME_STORE='cds.public.v1.theme.library';
  const validHex=x=>typeof x==='string'&&/^#[0-9a-fA-F]{6}$/.test(x);
  function mixColor(a,b,t){
    const toRgb=h=>[1,3,5].map(n=>parseInt(h.slice(n,n+2),16));
    const aa=toRgb(a),bb=toRgb(b),u=Math.max(0,Math.min(1,t));
    return '#'+aa.map((v,i)=>Math.round(v*(1-u)+bb[i]*u).toString(16).padStart(2,'0')).join('').toUpperCase();
  }
  function luminance(h){
    const vals=[1,3,5].map(n=>parseInt(h.slice(n,n+2),16)/255).map(c=>c<=.04045?c/12.92:Math.pow((c+.055)/1.055,2.4));
    return vals[0]*.2126+vals[1]*.7152+vals[2]*.0722;
  }
  function paletteFromMain(main,title='自定义主题'){
    const light=luminance(main)>.34;
    const base=light?mixColor(main,'#FFFFFF',.84):mixColor(main,'#04091B',.76);
    const secondary=light?mixColor(main,'#FFFFFF',.56):mixColor(main,'#172A4D',.44);
    return {title,main,mainTo:mixColor(main,light?'#FFFFFF':'#B5C9FF',.37),base,secondary,
      chrome:light?mixColor(main,'#FFFFFF',.67):mixColor(main,'#09122C',.68),
      sidebar:light?mixColor(main,'#FFFFFF',.81):mixColor(main,'#050B20',.8),
      accent:main,border:mixColor(main,light?'#48557B':'#9CB9FF',.36),
      assistant:mixColor(main,'#24334F',.42),user:mixColor(main,'#FFFFFF',.63),
      text:light?'#26364D':'#F4F7FF',muted:light?'#555E74':'#C6D4F4',userText:'#2D304A',
      assistantFrom:mixColor(main,'#132344',.45),assistantTo:mixColor(main,'#FFFFFF',.9),
      userFrom:mixColor(main,'#F478AB',.45),userTo:mixColor(main,'#FFFFFF',.93)};
  }
  function sanitizePalette(obj,id){
    const fallback=BUILTIN_COLORS[id]||paletteFromMain('#7058BA','自定义主题');
    if(!obj||typeof obj!=='object'||Array.isArray(obj))return {...fallback};
    const p={...fallback};
    for(const key of ['main','mainTo','base','secondary','chrome','sidebar','accent','border','assistant','user',
      'assistantFrom','assistantTo','userFrom','userTo'])if(validHex(obj[key]))p[key]=obj[key].toUpperCase();
    p.title=typeof obj.title==='string'&&obj.title.trim()?obj.title.trim().slice(0,18):fallback.title;
    p.text=luminance(p.base)>.38?'#21334F':'#F4F7FF';
    p.muted=luminance(p.base)>.38?'#52617B':'#BED0EC';
    p.userText='#332C48';
    return p;
  }
  function readThemes(){
    let val;try{val=JSON.parse(GMget(THEME_STORE,'null'));}catch(_){val=null;}
    if(!val||typeof val!=='object'||Array.isArray(val))return Object.fromEntries(Object.entries(BUILTIN_COLORS).map(([id,p])=>[id,{...p}]));
    const out={night:sanitizePalette(val.night||BUILTIN_COLORS.night,'night')};
    for(const [id,v] of Object.entries(val))if(id!=='night'&&/^(frost|fern|custom_\d+)$/.test(id)&&Object.keys(out).length<16)
      out[id]=sanitizePalette(v,id);
    return out;
  }
  let COLORS=readThemes();
  const storeThemes=()=>GMset(THEME_STORE,JSON.stringify(COLORS));
  const safeImage = s => typeof s === 'string' && /^data:image\/(?:png|jpeg|webp);base64,[A-Za-z0-9+/=]+$/.test(s);
  const rgba = (h, a) => {
    const digits = h.replace('#','');
    return `rgba(${[0,2,4].map(i=>parseInt(digits.substring(i,i+2),16)).join(',')},${Number(a).toFixed(3)})`;
  };
  const imgCSS = s => `url(${JSON.stringify(s)})`;
  const limit = (n,min,max)=>Math.max(min,Math.min(max,n));
  const nameOr = (v,f) => typeof v === 'string' && v.trim() ? v.trim().slice(0,45) : f;
  function normalize(obj) {
    const v = obj && typeof obj === 'object' && !Array.isArray(obj) ? obj : {};
    return {
      schema: SCHEMA,
      preset: Object.hasOwn(COLORS,v.preset) ? v.preset : BASE.preset,
      glass: Number.isFinite(v.glass) ? limit(v.glass,.35,1) : BASE.glass,
      radius: Number.isFinite(v.radius) ? limit(Math.round(v.radius),8,32) : BASE.radius,
      bubbleMode: ['paragraph','whole','off'].includes(v.bubbleMode) ? v.bubbleMode : BASE.bubbleMode,
      avatarMode: 'overlay',
      showAvatars: typeof v.showAvatars === 'boolean' ? v.showAvatars : true,
      showWallpaper: typeof v.showWallpaper === 'boolean' ? v.showWallpaper : true,
      enabled: typeof v.enabled === 'boolean' ? v.enabled : true,
      wallpaperVeil: Number.isFinite(v.wallpaperVeil) ? limit(v.wallpaperVeil,0,1) : BASE.wallpaperVeil,
      assistantName: nameOr(v.assistantName,BASE.assistantName),
      userName: nameOr(v.userName,BASE.userName),
      gradientBubbles: typeof v.gradientBubbles==='boolean'?v.gradientBubbles:true,
      showPlaque: typeof v.showPlaque==='boolean'?v.showPlaque:true,
      userSentences: ['smart','newline','off'].includes(v.userSplitMode) ? v.userSplitMode!=='off' : (typeof v.userSentences==='boolean'?v.userSentences:true),
       userSplitMode: 'smart',
       authoredState: typeof v.authoredState==='boolean'?v.authoredState:false,
       anniversaryDate: typeof v.anniversaryDate==='string' && /^\d{4}-\d{2}-\d{2}$/.test(v.anniversaryDate) ? v.anniversaryDate : ''
    };
  }
  let cfg;
  try { cfg=normalize(JSON.parse(GMget(STORAGE,'{}'))); } catch(_) {cfg={...BASE};}
  // v5.9 persisted newline-only behavior; migrate that previous setting once.
  try {const old=JSON.parse(GMget(STORAGE,'{}'));if(old.userSplitMode!==cfg.userSplitMode)GMset(STORAGE,JSON.stringify(cfg));} catch(_) {}
  let wallpaper=GMget('cds.public.v1.wallpaper','');
  if(!safeImage(wallpaper)) wallpaper='';
  const avatars = {
    assistant: GMget('cds.public.v1.avatar.assistant',DEFAULT_AVATARS.assistant),
    user: GMget('cds.public.v1.avatar.user',DEFAULT_AVATARS.user)
  };
  for(const r of ['assistant','user']) if(!safeImage(avatars[r])) avatars[r]=DEFAULT_AVATARS[r];

  // v5.11 expressive avatar cabinet. Stored entirely in Tampermonkey's local
  // extension storage. Image slots are separate from legacy base avatars so
  // all old image settings survive upgrades and library deletion.
  const FACE_PREFIX='cds.public.v1.face.';
  const FACE_SLOT_ORDER=['default','joy','play','work','anger','surprise','shy','affection','soothe','sleepy'];
  const FACE_LABELS={
    assistant:{default:'默认',joy:'开心',play:'坏笑',work:'认真',anger:'生气',surprise:'惊讶',shy:'害羞',affection:'亲密',soothe:'温柔',sleepy:'困倦'},
    user:{default:'默认',joy:'开心',play:'眨眼',work:'认真',anger:'生气',surprise:'惊讶',shy:'害羞',affection:'心动',soothe:'委屈',sleepy:'困困'}
  };
  let faceAuto=GMget(FACE_PREFIX+'auto',true)!==false;
  let faceLabels={assistant:{...FACE_LABELS.assistant},user:{...FACE_LABELS.user}};
  try {const saved=JSON.parse(GMget(FACE_PREFIX+'labels','{}'));
    for(const role of ['assistant','user']) for(const slot of FACE_SLOT_ORDER){
      const v=saved?.[role]?.[slot];
      if(typeof v==='string'&&v.trim()) faceLabels[role][slot]=v.trim().slice(0,16);
    }
  } catch(_){}
  let expressionImages={assistant:{},user:{}};
  for(const role of ['assistant','user']) for(const slot of FACE_SLOT_ORDER){
    const v=GMget(FACE_PREFIX+'image.'+role+'.'+slot,'');
    if(safeImage(v))expressionImages[role][slot]=v;
  }
  let faceRole='assistant',faceSlot='default';
  const FACE_HISTORY=FACE_PREFIX+'message.selection';
  let faceHistory={};
  try{const stored=JSON.parse(GMget(FACE_HISTORY,'{}'));
    if(stored&&typeof stored==='object'&&!Array.isArray(stored))faceHistory=stored;
  }catch(_){}
  function saveFaceHistory(){
    const pairs=Object.entries(faceHistory);
    if(pairs.length>650){pairs.sort((a,b)=>(a[1]?.ts||0)-(b[1]?.ts||0));faceHistory=Object.fromEntries(pairs.slice(-650));}
    GMset(FACE_HISTORY,JSON.stringify(faceHistory));
  }
  function faceMoodFor(entry,assistantMood){
    const raw=(entry?.element?.textContent||'').slice(0,1600);
    // Interpret visible cues, never treat mood labels as a factual sensor.
    if(/(?:困了|好困|困困|想睡|睡觉|晚安|打哈欠|zzZ|😴)/i.test(raw))return 'sleepy';
    if(/(?:脸红|害羞|羞羞|不好意思|🙈|捂脸)/.test(raw))return 'shy';
    if(/(?:吃惊|惊呆|震惊|吓一跳|惊讶|天呐|真的假的|不敢相信|😳|🤯)/.test(raw))return 'surprise';
    const mood=entry.role==='assistant'?assistantMood:emotionAnalysis({user:raw,reply:''},null).mood;
    return ({night:'default',work:'work',anger:'anger',happy:'joy',joy:'joy',play:'play',affection:'affection',curious:'surprise',soothe:'soothe',worried:'soothe'}[mood]||'default');
  }
  function faceSource(entry,assistantMood,authoredSlot){
    const role=entry.role;
    if(!faceAuto)return avatars[role];
    // A model-written decision takes precedence, but does not overwrite local
    // saved expression slots or their user-editable labels.
    if(authoredSlot && FACE_SLOT_ORDER.includes(authoredSlot))
      return expressionImages[role][authoredSlot]||expressionImages[role].default||avatars[role];
    const messageId=snapshotKey(entry),now=Date.now();
    let rec=faceHistory[messageId];
    if(!rec||!FACE_SLOT_ORDER.includes(rec.slot)){
      rec={slot:faceMoodFor(entry,assistantMood),locked:entry.role==='user'||!modelIsStreaming(),ts:now};
      faceHistory[messageId]=rec;saveFaceHistory();
    }else if(!rec.locked&&entry.role==='assistant'){
      const nextSlot=faceMoodFor(entry,assistantMood);
      if(rec.slot!==nextSlot||!modelIsStreaming()){
        rec.slot=nextSlot;rec.locked=!modelIsStreaming();rec.ts=now;
        faceHistory[messageId]=rec;saveFaceHistory();
      }
    }
    return expressionImages[role][rec.slot]||expressionImages[role].default||avatars[role];
  }


  const bg=document.createElement('div');
  bg.id='jdw5-wallpaper'; bg.setAttribute('aria-hidden','true');
  bg.style.cssText='position:fixed!important;inset:0!important;pointer-events:none!important;z-index:0!important;background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important;';
  document.body.prepend(bg);
  const stylesheet=document.createElement('style');
  stylesheet.id='jdw5-global-style'; document.head.append(stylesheet);
  const authoredStyle=document.createElement('style');
  authoredStyle.id='jdw512-authored-meta-style';
  // Even when the authored-state switch is off, hide a VALID metadata line.
  // This avoids showing raw JSON just because the display preference changed.
  authoredStyle.textContent='.jdw512-meta{display:none!important}';
  document.head.append(authoredStyle);
  const host=document.createElement('div'); host.id='jdw5-host';
  host.dataset.mobile='yes';
  document.documentElement.dataset.jdw5Mobile='yes';
  host.style.cssText='position:fixed!important;inset:0!important;pointer-events:none!important;z-index:2147483000!important;';
  document.body.append(host);
  const shadow=host.attachShadow({mode:'open'});
  shadow.innerHTML=`
   <style>
   :host{all:initial;color:#F0F5FF;font-family:Inter,system-ui,"Microsoft YaHei",sans-serif}
   *,*::before,*::after{box-sizing:border-box}
   #badges{position:fixed;inset:0;pointer-events:none;overflow:hidden}
   /* v5.6: editorial plaque with a dedicated portrait rail. */
   .jdw55-plaque{position:fixed;display:grid;grid-template-columns:96px minmax(0,1fr);
     align-items:stretch;gap:13px;min-height:137px;max-width:calc(100vw - 20px);padding:11px 13px 11px 11px;
     background:linear-gradient(116deg,#172740 0%,#243750 67%,#3B364E 100%);
     color:#F7F9FF;border:1px solid #A5B9DF77;border-radius:19px;
     box-shadow:0 9px 28px #03091C66, inset 0 1px 0 #FFFFFF22;
     pointer-events:none;overflow:hidden;isolation:isolate;
     font:500 12px/1.35 system-ui,"Microsoft YaHei",sans-serif;
     --jd55-ink:#F7F9FF;--jd55-muted:#C0D1EF;--jd55-chip:#192C49BB}
   .jdw55-plaque:before{content:"";position:absolute;inset:0;pointer-events:none;
     background:radial-gradient(ellipse at 7% 10%,#ACD2FF22,transparent 55%);z-index:-1}
   .jdw55-plaque[data-mood="work"]{background:linear-gradient(115deg,#F8FBFF,#E4EDF7 60%,#C6D7EA);
     border-color:#B4C9E0;--jd55-ink:#1B3151;--jd55-muted:#526B8D;--jd55-chip:#EDF4FAE9}
   .jdw55-plaque[data-mood="affection"]{background:linear-gradient(112deg,#271732,#4B2750 60%,#792F56);
     border-color:#C389AE90;--jd55-muted:#F0CEE8;--jd55-chip:#4A2A4BAA}
   .jdw55-plaque[data-mood="soothe"]{background:linear-gradient(115deg,#183345,#275164 70%,#5B7B8A);
     border-color:#8FBCC798;--jd55-muted:#D8EDEF;--jd55-chip:#24485DBB}
   .jdw55-plaque[data-mood="play"]{background:linear-gradient(115deg,#192B4A,#404376 70%,#67436B);
     border-color:#9DA8E49A;--jd55-muted:#E6DBF7;--jd55-chip:#314068B7}
   .jdw56-portrait{display:flex;align-items:center;justify-content:center;position:relative;
     align-self:center;min-width:0;width:96px;height:96px;aspect-ratio:1 / 1;border-radius:13px;overflow:hidden;
     background:linear-gradient(155deg,#0C1831E9,#273C6088);border:1px solid #E3EEFF50;
     box-shadow:inset 0 0 0 1px #FFFFFF12}
   .jdw56-portrait:after{content:"";position:absolute;inset:4px;border:1px solid #FFFFFF33;
     border-radius:11px;pointer-events:none}
   .jdw56-portrait img{width:100%;height:100%;object-fit:contain;object-position:center;
     border-radius:9px;display:block;filter:drop-shadow(0 4px 9px #0004)}
   .jdw56-rail{min-width:0;display:flex;flex-direction:column;gap:7px;justify-content:center}
   .jdw55-top{display:flex;gap:7px;align-items:center;min-width:0}
   .jdw55-headings{min-width:0;display:flex;flex-direction:column;gap:3px}
   .jdw55-person-name{font-size:17px;color:var(--jd55-ink);font-weight:800;letter-spacing:.3px;
     overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
   .jdw55-person-name em{font-family:Georgia,serif;font-weight:700;font-style:italic}
   .jdw55-subline{font-size:10px;color:var(--jd55-muted);line-height:1.4;
     overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-style:italic}
   .jdw55-chips{display:flex;flex-wrap:wrap;align-items:center;gap:5px}
   .jdw55-chips span{background:var(--jd55-chip);border-radius:7px;padding:4px 6px;
     color:var(--jd55-ink);font-size:10px;font-weight:650;max-width:100%}
   .jdw55-footer{color:var(--jd55-muted);font-size:11px;font-weight:600;overflow:hidden;
     display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.4}
   @media(max-width:680px){
     .jdw55-plaque{grid-template-columns:70px minmax(0,1fr);gap:8px;min-height:128px;
       padding:9px;border-radius:15px}
     .jdw56-portrait{width:70px;height:70px}
     .jdw55-person-name{font-size:13px}
     .jdw55-subline,.jdw55-footer{font-size:9px}
     .jdw55-chips span{font-size:9px;padding:3px 5px}
   }
    /* v5.14: same editorial hierarchy as Assistant's plaque, mirrored right-to-left.
       Both cards use exactly the same responsive width and portrait dimensions. */
    .jdw514-user-card{
      position:fixed;display:grid;grid-template-columns:minmax(0,1fr) 96px;
      align-items:stretch;gap:13px;min-height:137px;max-width:calc(100vw - 24px);
      padding:11px 11px 11px 13px;border-radius:19px;overflow:hidden;
      pointer-events:none;isolation:isolate;
      background:linear-gradient(116deg,#FFEDF7,#F8B7DA 58%,#E96AAA);
      border:1px solid #F5D5EC;color:var(--jd514-ink,#432447);
      box-shadow:0 9px 28px #3C123844,inset 0 1px 0 #FFFFFF78;
      font:500 12px/1.35 system-ui,"Microsoft YaHei",sans-serif;
      --jd514-ink:#432447;--jd514-muted:#624263;--jd514-chip:#FFFFFFBB;
    }
    .jdw514-user-card::before{content:"";position:absolute;inset:0;
      pointer-events:none;background:radial-gradient(ellipse at 94% 12%,#FFFFFF4A,transparent 58%);z-index:-1}
    .jdw514-user-portrait{display:flex;align-items:center;justify-content:center;position:relative;
      width:96px;height:96px;aspect-ratio:1 / 1;align-self:center;
      border-radius:13px;overflow:hidden;background:#FFFFFF40;
      border:1px solid #FFFFFFA6;box-shadow:inset 0 0 0 1px #FFFFFF55}
    .jdw514-user-portrait::after{content:"";position:absolute;inset:4px;
      border:1px solid #FFFFFF90;border-radius:11px;pointer-events:none}
    .jdw514-user-portrait img{width:100%;height:100%;object-fit:contain;object-position:center;
      border-radius:9px;display:block}
    .jdw514-user-rail{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;
      text-align:right;gap:7px;min-width:0}
    .jdw514-user-name{color:var(--jd514-ink);font-size:17px;line-height:1.35;
      font-weight:800;letter-spacing:.3px;max-width:100%;overflow:hidden;
      white-space:nowrap;text-overflow:ellipsis}
    .jdw514-user-name em{font-family:Georgia,serif;font-weight:700;font-style:italic}
    .jdw514-user-subline{font-size:10px;line-height:1.4;color:var(--jd514-muted);
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;font-style:italic}
    .jdw514-user-chips{display:flex;flex-wrap:wrap;align-items:center;gap:5px;justify-content:flex-end}
    .jdw514-user-chips span{max-width:100%;background:var(--jd514-chip);color:var(--jd514-ink);
      border-radius:7px;padding:4px 6px;font-size:10px;font-weight:650}
    .jdw514-user-footer{color:var(--jd514-muted);font-size:11px;font-weight:600;line-height:1.4;
      display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
      overflow:hidden;max-width:100%}
    @media(max-width:680px){
      .jdw514-user-card{grid-template-columns:minmax(0,1fr) 70px;gap:8px;min-height:128px;
        padding:9px;border-radius:15px}
      .jdw514-user-portrait{width:70px;height:70px}
      .jdw514-user-name{font-size:13px}
      .jdw514-user-subline,.jdw514-user-footer{font-size:9px}
      .jdw514-user-chips span{font-size:9px;padding:3px 5px}
    }
   .badge{position:fixed;display:flex;align-items:center;gap:8px;max-width:min(350px,75vw);
       font-weight:700;font-size:12px;color:var(--jd-muted,#B7CAFA);text-shadow:0 1px 5px #0007;white-space:nowrap}
   .badge.user{flex-direction:row-reverse;transform:translateX(-100%)}
   .badge img,.badge .fallback{width:39px;height:39px;flex:0 0 39px;border-radius:50%;object-fit:contain;
       border:2px solid var(--jd-border,#6386FF);box-shadow:0 4px 12px #0007;background:#08162C}
   .badge .fallback{display:grid;place-items:center}
   .badge.assistant img{border-radius:10px}
   .badge .name{padding:5px 9px;border:1px solid #8DA8FF38;border-radius:9px;background:var(--jd-nametint,#081B3AE8);
       max-width:255px;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(10px)}
   button{cursor:pointer;font:inherit}
   #launch{position:fixed;top:auto;left:auto;right:14px;bottom:112px;z-index:26;
     pointer-events:auto;display:grid;place-items:center;width:49px;height:49px;padding:0;
     border-radius:50%;border:1px solid #A7B9F4A6;
     background:radial-gradient(circle at 31% 25%,#576EAD,#222C59 62%,#10162F 100%);
     box-shadow:0 9px 24px #0007, inset 0 1px 0 #FFFFFF55;
     touch-action:none;cursor:grab;color:#F7E9FF;user-select:none}
   #launch:hover{filter:brightness(1.14)}
   #jdw57-live-tip{position:fixed;z-index:27;min-width:218px;pointer-events:none;
     display:grid;gap:5px;padding:11px 13px;border-radius:14px;
     border:1px solid #A3B7EE91;background:linear-gradient(130deg,#111F43F5,#282451F3);
     color:#EFF4FF;box-shadow:0 12px 36px #0008;backdrop-filter:blur(15px);
     opacity:0;visibility:hidden;transform:translateY(5px);
     transition:opacity .15s ease,transform .15s ease,visibility .15s ease;
     font:600 12px/1.5 system-ui,sans-serif}
   #jdw57-live-tip[data-open="yes"]{opacity:1;visibility:visible;transform:translateY(0)}
   #jdw57-live-tip .station{color:#BCB8FC;font-size:10px;letter-spacing:1.4px}
   #jdw57-live-tip .now{font-size:17px;font-variant-numeric:tabular-nums;letter-spacing:.2px}
   #jdw57-live-tip .caption{font-size:10px;color:#C0CEE9;font-weight:500}
   .jdw57-live-board{display:flex;flex-wrap:wrap;align-items:center;gap:5px 9px;
     background:#121F40;border:1px solid #607BA15E;border-radius:10px;
     padding:8px 9px;margin-bottom:9px;color:#C6D8FF;font-size:11px}
   .jdw57-live-board .live-dot{display:inline-block;width:6px;height:6px;border-radius:50%;
     background:#8DDCCB;box-shadow:0 0 10px #8DDCCB99;animation:jdw57-pulse 2.6s ease-in-out infinite}
   .jdw57-live-board strong{color:#F2F5FF;font-variant-numeric:tabular-nums;font-size:12px}
   .jdw57-live-board small{color:#A5B9DC;font-size:10px;margin-left:auto}
   @keyframes jdw57-pulse{50%{opacity:.4;transform:scale(.75)}}
   @media(prefers-reduced-motion:reduce){.jdw57-live-board .live-dot{animation:none}}
   #launch.dragging{cursor:grabbing;transition:none!important}
   #launch svg{width:39px;height:39px;overflow:visible;pointer-events:none;filter:drop-shadow(0 0 4px #C9D1FF88)}
   #panel{position:fixed;bottom:169px;right:14px;left:auto;top:auto;
     width:min(362px,calc(100vw - 20px));max-height:min(77vh,760px);
     z-index:25;pointer-events:auto;overflow:auto;border-radius:18px;padding:14px;
     border:1px solid #829EF1A8;background:linear-gradient(160deg,#0C1B40F8,#060E25FB);
     color:#EFF5FF;box-shadow:0 18px 58px #0009;
     scrollbar-width:thin;scrollbar-color:#4564AF transparent}
   #panel[hidden]{display:none!important}
   #panel .top{touch-action:none;cursor:grab;user-select:none;padding:4px 1px 12px;
     border-bottom:1px solid #7894C333}
   #panel .top:active{cursor:grabbing}
   #panel .top button{cursor:pointer;touch-action:auto}
   #panel .panel-grip{color:#B8CCFF;letter-spacing:1px;font-size:12px}
   #advanced{border:1px solid #607CA54A;border-radius:10px;padding:8px 10px;margin:12px 0}
   #advanced>summary{cursor:pointer;color:#B9CFFF;font-size:12px;font-weight:750}
   #advanced[open]>summary{margin-bottom:8px}
   #diagText{min-height:62px;font-size:10px}
   @media(max-width:640px){#panel{max-height:72vh;padding:12px}}
   .top{display:flex;align-items:center;justify-content:space-between;gap:7px;margin-bottom:10px}
   .eyebrow{font-size:10px;color:#89ABFF;letter-spacing:2px;font-weight:800}
   h2{font-size:19px;font-weight:750;margin:4px 0 0}
   h3{margin:13px 0 9px;font-size:13px}
   small,.hint{color:#9EB7E6;font-size:11px;line-height:1.55}
   .btn{background:#1A346A;color:#EAF0FF;border:1px solid #6486D780;border-radius:9px;
       font-size:12px;font-weight:650;padding:8px 10px;min-height:33px}
   .btn:hover{background:#254C91}
   .btn.primary{background:#4A6CFF;border-color:#9DB2FF;color:white}
   .btn.ghost{background:transparent}
   .row{display:flex;gap:7px;flex-wrap:wrap;align-items:center}
   .sep{height:1px;background:#809DE633;margin:14px 0}
   .presets{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:6px}
   .presets button{font-size:11px;min-height:40px;padding:7px 3px;white-space:nowrap}
   .presets button[aria-pressed="true"]{outline:2px solid #91B2FF;outline-offset:1px}
   label{display:grid;gap:5px;color:#DFE8FC;font-size:12px;margin:8px 0}
   label.check{display:flex;align-items:center;gap:8px}
   input[type="text"],select,textarea{background:#071632;border:1px solid #7794DF77;border-radius:8px;
       color:#F2F6FF;font:12px/1.5 inherit;padding:8px;min-width:0;width:100%}
   input[type="text"],textarea,select{font-family:inherit;font-size:12px}
   textarea{min-height:88px;resize:vertical;font-family:Consolas,monospace;font-size:11px}
   input[type="range"]{width:100%;accent-color:#4A6CFF}
   input[type="checkbox"]{accent-color:#4A6CFF}
   input[type="file"]{display:none}
   #status{font:11px/1.6 Consolas,"Microsoft YaHei",monospace;white-space:pre-wrap;overflow-wrap:anywhere;
       border:1px solid #6486D74D;border-radius:9px;background:#081D3C;padding:9px;color:#C9DCFF}
   #preview{background:#071430;border:1px solid #7896DD66;border-radius:12px;padding:9px;display:grid;gap:9px}
   .preview-row{display:flex;align-items:center;gap:9px;color:#C9DDFF;font-size:11px}
   .preview-row.user{flex-direction:row-reverse}
   .preview-row img{width:37px;height:37px;border-radius:50%;object-fit:contain;border:1px solid #7FA5FF}
   .preview-bubble{max-width:220px;background:#1A3774;border-radius:11px;padding:8px}
   .preview-row.user .preview-bubble{background:#DDE7FF;color:#1B315F}
   #testhint{font-size:11px;color:#84D6C2}
   @media(max-width:640px){#launch{right:8px;bottom:103px}#panel{right:7px;bottom:150px;max-height:67vh}}
    /* v5.9: compact studio, one coherent color library & native color wheel. */
    .jdw55-plaque[data-hide-identity="yes"]{grid-template-columns:minmax(0,1fr)}
    .jdw55-plaque[data-hide-identity="yes"] .jdw56-portrait,
    .jdw55-plaque[data-hide-identity="yes"] .jdw55-person-name{display:none}
    .jdw59-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;
      font:800 12px/1.4 system-ui,sans-serif;letter-spacing:.35px;margin:17px 0 9px;
      padding-top:10px;border-top:1px solid var(--studio-hairline,#7A94CC33)}
    .jdw59-title-mini{font:600 9px/1 system-ui,sans-serif;letter-spacing:1.1px;opacity:.65}
    #themeList{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px}
    #themeList button{display:flex;gap:7px;align-items:center;min-height:39px;
      text-align:left;justify-content:flex-start;padding:7px 8px;font-weight:720;white-space:normal}
    #themeList button .jdw59-mini-dot{width:17px;height:17px;flex:0 0 17px;border-radius:50%;
      border:1px solid #FFFFFF77;box-shadow:0 1px 7px #0002}
    #themeList button[aria-pressed="true"]{outline:2px solid var(--studio-accent,#91B2FF);outline-offset:1px}
    .jdw59-actionrow{margin-top:8px}.jdw59-actionrow .btn{flex:1}
    .jdw59-editor{border:1px solid var(--studio-hairline,#7A94CC55);border-radius:12px;
      padding:9px 11px;margin-top:10px}
    .jdw59-editor summary{cursor:pointer;font-size:12px;font-weight:750}
    .jdw59-colorgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin:8px 0}
    .jdw59-colorgrid label{min-width:0;font-size:10px;margin:0}
    .jdw59-colorgrid input[type="color"]{width:100%;height:32px;padding:3px;border:1px solid #FFFFFF55;
      border-radius:8px;cursor:pointer;background:transparent;min-width:0}
    .jdw59-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin:9px 0}
    .jdw59-strip span{display:block;height:12px;border-radius:100px;border:1px solid #FFFFFF88}
    .jdw59-two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
    .jdw59-two label{min-width:0}
    .jdw59-credit{font:italic 10px Georgia,serif;text-align:center;opacity:.72;margin:15px 0 2px}
    #preview{padding:10px!important;gap:7px!important;}
    #preview .preview-row{font-size:11px;gap:7px}
    #preview img{width:29px;height:29px}
    #preview .preview-bubble{padding:6px 9px;line-height:1.4}
    #panel{width:min(392px,calc(100vw - 20px))!important}
    #panel .sep{display:none}
    #panel .jdw59-footer{margin-top:13px}
    #panel .jdw59-footer .btn{font-size:10px;min-height:30px;padding:6px 8px}
    @media(max-width:420px){#themeList{grid-template-columns:1fr 1fr!important}
      .jdw59-colorgrid{grid-template-columns:repeat(3,minmax(0,1fr))}}
    /* v5.17 (mobile upstream) continuous HSV picker (built in, no OS color chooser). */
    #panel .jdw59-colorgrid input[type="color"]{position:absolute!important;opacity:0!important;
      width:1px!important;height:1px!important;pointer-events:none!important;overflow:hidden}
    #panel .jdw59-colorgrid label{position:relative;min-width:0}
    .jdw517-color-button{display:flex;align-items:center;justify-content:center;gap:7px;width:100%;
      min-width:0;min-height:43px;padding:7px 5px;border:1px solid #91ADD078;border-radius:9px;
      color:inherit;background:#13274770;font:600 10px/1.2 ui-monospace,Consolas,monospace;
      white-space:nowrap;touch-action:manipulation}
    .jdw517-color-button .chip{width:19px;height:22px;min-width:19px;border:1px solid #FFFFFF9A;
      border-radius:6px;background:var(--jdw517-color,#4A6CFF)}
    .jdw517-color-button[aria-pressed="true"]{outline:2px solid #C5DFFF;outline-offset:1px}
    .jdw517-picker{border:1px solid #8CA9D088;border-radius:14px;background:#0D1F40B8;
      color:#F3F7FF;padding:11px;margin:12px 0 5px;display:grid;gap:10px}
    .jdw517-picker[hidden]{display:none!important}
    .jdw517-picker-head{display:flex;gap:9px;align-items:center;justify-content:space-between;font-size:12px}
    .jdw517-picker-head button{background:#1E3B68;border:1px solid #718CC0;border-radius:8px;
      color:#F6FAFF;padding:6px 11px;min-height:35px}
    .jdw517-sv{position:relative;height:170px;border:1px solid #FFFFFF77;border-radius:10px;
      cursor:crosshair;touch-action:none;box-shadow:inset 0 0 0 1px #0003;
      background:linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent),hsl(var(--hue,220),100%,50%)}
    .jdw517-hue{position:relative;height:30px;border:1px solid #FFFFFF77;border-radius:9px;
      cursor:crosshair;touch-action:none;
      background:linear-gradient(to right,#f00 0%,#ff0 16.667%,#0f0 33.333%,#0ff 50%,#00f 66.667%,#f0f 83.333%,#f00 100%)}
    .jdw517-cursor{position:absolute;width:17px;height:17px;border:3px solid white;
      border-radius:50%;box-shadow:0 1px 4px #000C,0 0 0 1px #0007;transform:translate(-50%,-50%);pointer-events:none}
    .jdw517-hue .jdw517-cursor{top:50%!important;height:34px;border-radius:8px;width:10px}
    .jdw517-picker-footer{display:flex;align-items:center;gap:9px}
    .jdw517-picker-footer .bigchip{width:36px;height:36px;flex:0 0 36px;border:1px solid #FFFFFFAA;
      border-radius:10px;background:var(--jdw517-picked,#4A6CFF)}
    .jdw517-picker-footer label{display:flex!important;flex-direction:row!important;align-items:center;
      gap:6px;margin:0!important;flex:1;font-size:11px!important}
    .jdw517-picker-footer input{width:100%!important;min-width:0!important;min-height:36px!important;
      padding:6px 8px!important;font-size:16px!important;letter-spacing:1px}
    .jdw517-picker-tip{font-size:10px!important;color:#C4D6EF!important;line-height:1.4}
    /* v5.16 Android Firefox mobile layout. Scoped to this dedicated mobile script. */
    @media(max-width:720px){
      :host([data-mobile="yes"]) .jdw55-plaque{
        grid-template-columns:58px minmax(0,1fr);gap:9px;min-height:0;
        max-width:calc(100vw - 14px);padding:9px 10px;border-radius:15px;
        box-shadow:0 4px 18px #03091C45,inset 0 1px 0 #FFFFFF18}
      :host([data-mobile="yes"]) .jdw514-user-card{
        grid-template-columns:minmax(0,1fr) 58px;gap:9px;min-height:0;
        max-width:calc(100vw - 14px);padding:9px 10px;border-radius:15px;
        box-shadow:0 4px 18px #3C12382B,inset 0 1px 0 #FFFFFF78}
      :host([data-mobile="yes"]) .jdw56-portrait,
      :host([data-mobile="yes"]) .jdw514-user-portrait{width:58px;height:58px;border-radius:11px}
      :host([data-mobile="yes"]) .jdw56-portrait::after,
      :host([data-mobile="yes"]) .jdw514-user-portrait::after{inset:3px;border-radius:8px}
      :host([data-mobile="yes"]) .jdw56-rail,
      :host([data-mobile="yes"]) .jdw514-user-rail{gap:4px}
      :host([data-mobile="yes"]) .jdw55-headings{gap:2px}
      :host([data-mobile="yes"]) .jdw55-person-name,
      :host([data-mobile="yes"]) .jdw514-user-name{font-size:14px;line-height:1.2}
      :host([data-mobile="yes"]) .jdw55-subline,
      :host([data-mobile="yes"]) .jdw514-user-subline{font-size:10px;line-height:1.3}
      :host([data-mobile="yes"]) .jdw55-chips,
      :host([data-mobile="yes"]) .jdw514-user-chips{gap:4px}
      :host([data-mobile="yes"]) .jdw55-chips span,
      :host([data-mobile="yes"]) .jdw514-user-chips span{font-size:10px;line-height:1.35;padding:4px 6px}
      :host([data-mobile="yes"]) .jdw55-footer,
      :host([data-mobile="yes"]) .jdw514-user-footer{font-size:10px;line-height:1.35;-webkit-line-clamp:2}
      :host([data-mobile="yes"]) #launch{width:44px;height:44px;right:8px;
        bottom:calc(100px + env(safe-area-inset-bottom,0px));touch-action:none}
      :host([data-mobile="yes"]) #launch svg{width:35px;height:35px}
      :host([data-mobile="yes"]) #panel{width:min(344px,calc(100vw - 22px))!important;
        max-height:min(46dvh,410px)!important;right:11px;bottom:75px;
        border-radius:16px;overscroll-behavior:contain;scrollbar-width:thin;
        overflow-y:auto!important;overflow-x:hidden!important;
        -webkit-overflow-scrolling:touch;padding:12px!important;touch-action:pan-y}
      :host([data-mobile="yes"]) #panel[data-expanded="yes"]{max-height:min(78dvh,700px)!important}
      :host([data-mobile="yes"]) #panel .top{position:static!important;top:auto!important;z-index:auto!important;
        background:none!important;padding-top:4px!important}
      :host([data-mobile="yes"]) #panel .top h2{font-size:16px}
      /* v5.18: two genuinely matching actions, one shape and one visual weight. */
      :host([data-mobile="yes"]) #panel .jdw518-panel-actions{
        display:grid;grid-template-columns:repeat(2,minmax(0,1fr));
        gap:6px;min-width:142px;max-width:168px;flex:0 0 auto;
      }
      :host([data-mobile="yes"]) #panel .jdw518-panel-actions .btn{
        display:flex;align-items:center;justify-content:center;gap:5px;
        height:42px;min-height:42px;width:100%;min-width:0;
        padding:5px 7px!important;border-radius:11px!important;
        font:750 12px/1.2 system-ui,sans-serif!important;
        white-space:nowrap;letter-spacing:0!important;
      }
      :host([data-mobile="yes"]) #panel .jdw518-action-icon{
        display:inline-grid;place-items:center;flex:0 0 15px;
        width:15px;height:18px;font-size:18px;line-height:1;
      }
      :host([data-mobile="yes"]) #panel .jdw518-action-text{
        overflow:hidden;text-overflow:ellipsis;
      }
      :host([data-mobile="yes"]) #panel .top>div:first-child{min-width:0}
      :host([data-mobile="yes"]) #panel .eyebrow{font-size:9px;letter-spacing:.2px}
      :host([data-mobile="yes"]) #panel .top h2{font-size:15px}

      :host([data-mobile="yes"]) #panel .btn,
      :host([data-mobile="yes"]) #panel .row button{min-height:42px}
      :host([data-mobile="yes"]) #panel label{font-size:13px;line-height:1.5}
      :host([data-mobile="yes"]) #panel :is(input[type="text"],select,textarea){font-size:16px!important;
        min-height:42px}
      :host([data-mobile="yes"]) #panel input[type="color"]{height:39px}
      :host([data-mobile="yes"]) #faceGrid button{min-height:72px}
      :host([data-mobile="yes"]) #themeList button{min-height:45px}
      /* Do not pin the studio title; it scrolls with the entire panel. */
    }
    @media(max-width:355px){
      :host([data-mobile="yes"]) .jdw55-plaque{grid-template-columns:50px minmax(0,1fr);gap:7px}
      :host([data-mobile="yes"]) .jdw514-user-card{grid-template-columns:minmax(0,1fr) 50px;gap:7px}
      :host([data-mobile="yes"]) .jdw56-portrait,
      :host([data-mobile="yes"]) .jdw514-user-portrait{width:50px;height:50px}
      :host([data-mobile="yes"]) .jdw55-person-name,
      :host([data-mobile="yes"]) .jdw514-user-name{font-size:13px}
      :host([data-mobile="yes"]) .jdw55-chips span,
      :host([data-mobile="yes"]) .jdw514-user-chips span{font-size:9px}
      :host([data-mobile="yes"]) #panel .jdw59-two{grid-template-columns:1fr}
    }
   </style>
   <div id="badges" aria-hidden="true"></div>
   <button id="launch" type="button" title="土星主题站 · 点击展开，拖动贴边，双击复位"
     aria-label="打开或收起 Assistant 主题面板">
     <svg viewBox="0 0 64 64" aria-hidden="true">
       <ellipse cx="32" cy="34" rx="28" ry="11" transform="rotate(-25 32 34)"
          fill="none" stroke="#DBDAFF" stroke-width="3.6" opacity=".85"/>
       <circle cx="32" cy="32" r="15" fill="#AD9DE9" stroke="#E9E4FF" stroke-width="1.2"/>
       <path d="M21 27 Q31 22 45 29 M19 36 Q32 43 45 35" stroke="#695AAB" stroke-width="3" fill="none" opacity=".7"/>
       <path d="M9 45 Q28 55 53 26" stroke="#F6DDFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
       <circle cx="49" cy="9" r="2" fill="#fff"/>
     </svg>
   </button>
   <div id="jdw57-live-tip" aria-hidden="true"><span class="station">🪐 LIVE SIGNAL · 此刻</span>
      <strong class="now" id="jdw57-tip-clock">北京时间 --:--:--</strong>
      <span class="caption" id="jdw57-tip-detail">🤍 相识天数 · 本页停留</span></div>
   <section id="panel" hidden>
     <div class="top"><div><div class="eyebrow">ChatGPT Duo Skin · 双人聊天皮肤</div>
       <h2>主题工坊 <span class="panel-grip">⠿</span></h2></div>
               <div class="jdw518-panel-actions" role="group" aria-label="主题工坊窗口控制">
          <button class="btn" id="jdw517-size" type="button" aria-pressed="false" title="展开至大窗口">
            <span class="jdw518-action-icon" aria-hidden="true">⛶</span><span class="jdw518-action-text">展开</span>
          </button>
          <button class="btn" id="close" type="button" title="收起到小土星">
            <span class="jdw518-action-icon" aria-hidden="true">⌄</span><span class="jdw518-action-text">收起</span>
          </button>
        </div></div>
   <div class="jdw57-live-board" aria-label="星环实时动态">
     <span class="live-dot" aria-hidden="true"></span><span>🪐 星环 LIVE</span>
     <strong id="jdw57-panel-clock">--:--:--</strong><small id="jdw57-panel-detail">北京时间 · 本页停留</small>
   </div>
   <div id="preview" aria-label="主题实时预览">
     <div class="preview-row"><img id="previewA"><span class="preview-bubble">AI 助手 · Assistant ♡</span></div>
     <div class="preview-row user"><img id="previewU"><span class="preview-bubble">我 · You</span></div>
   </div>
   <div class="jdw59-heading"><span>01 / 主题色</span><span class="jdw59-title-mini">COLOR STUDIO</span></div>
   <div id="themeList" class="presets" role="group" aria-label="主题列表"></div>
   <div class="row jdw59-actionrow"><button class="btn" type="button" id="addTheme">＋ 新建主题</button>
     <button class="btn ghost" type="button" id="editTheme">🎨 编辑当前主题</button></div>
   <details id="themeEdit" class="jdw59-editor">
     <summary>渐变调色盘</summary>
     <label>主题名称<input id="themeName" type="text" maxlength="18"></label>
     <div class="jdw59-colorgrid">
       <label>主色<input id="colorMain" type="color"></label>
       <label>过渡色<input id="colorMainTo" type="color"></label>
       <label>AI · 深<input id="colorAFrom" type="color"></label>
       <label>AI · 浅<input id="colorATo" type="color"></label>
       <label>用户 · 深<input id="colorUFrom" type="color"></label>
       <label>用户 · 浅<input id="colorUTo" type="color"></label>
     </div>
           <div class="jdw59-strip"><span id="sampleMain"></span><span id="sampleAssistant"></span><span id="sampleUser"></span></div>
      <section id="jdw517-picker" class="jdw517-picker" hidden aria-label="无级连续调色盘">
        <div class="jdw517-picker-head"><strong id="jdw517-target">主色</strong>
        <button id="jdw517-picker-close" type="button">完成 ✓</button></div>
        <div id="jdw517-sv" class="jdw517-sv" role="slider" tabindex="0" aria-label="颜色饱和度与亮度" aria-valuetext="拖动选择颜色"><span class="jdw517-cursor"></span></div>
        <div id="jdw517-hue" class="jdw517-hue" role="slider" tabindex="0" aria-label="色相" aria-valuemin="0" aria-valuemax="360"><span class="jdw517-cursor"></span></div>
        <div class="jdw517-picker-footer"><span class="bigchip" id="jdw517-picked"></span>
          <label>HEX<input id="jdw517-hex" type="text" maxlength="7" spellcheck="false" inputmode="text" placeholder="#4A6CFF"></label></div>
        <div class="jdw517-picker-tip">上方连续选择明暗与饱和度，下方拖动色相；HEX 可输入精确颜色。更改实时应用。</div>
      </section>
      <div class="row"><button id="autoColors" type="button" class="btn">✨ 按主色重算渐变</button>
       <button id="deleteTheme" type="button" class="btn ghost">删除此主题</button></div>
   </details>
   <div class="jdw59-heading"><span>02 / 身份与状态栏</span></div>
   <div class="row"><button class="btn" id="pickA">AI 头像</button><button class="btn" id="pickU">我的头像</button></div>
   <div class="jdw59-two"><label>助手昵称<input id="assistantName" type="text" maxlength="45"></label>
     <label>我的昵称<input id="userName" type="text" maxlength="45"></label></div>
   <label class="check"><input id="showAvatars" type="checkbox"> 双人头像与昵称</label>
   <label>纪念日（可选，留空不显示天数）<input id="anniversaryDate" type="date" aria-label="纪念日期，默认留空"></label>
   <label class="check"><input id="showPlaque" type="checkbox"> 每轮状态栏</label>
   <label class="check"><input id="authoredState" type="checkbox"> AI 亲笔状态优先</label>
   <small id="jdw512-author-status">没有亲笔状态时，自动选用情绪文案。</small>

   <details id="expressionVault">
     <summary>🎭 表情头像库 · 点击管理</summary>
     <label class="check"><input id="faceAuto" type="checkbox"> 根据消息语气自动换脸</label>
     <div id="faceRoleButtons"><button type="button" class="btn" id="faceAssistant">AI</button>
       <button type="button" class="btn" id="faceUser">用户</button></div>
     <div id="faceGrid" role="group" aria-label="表情头像槽"></div>
     <div id="faceTools">
       <label>表情名称<input id="faceLabel" type="text" maxlength="16" placeholder="给这个表情起名字"></label>
       <div class="row"><button class="btn" type="button" id="faceUpload">上传到此槽</button>
         <button class="btn ghost" type="button" id="faceDelete">清空此槽</button></div>
       <div class="row"><button class="btn ghost" type="button" id="faceExport">导出私人头像库</button>
         <button class="btn ghost" type="button" id="faceImportButton">导入头像库</button></div>
       <small>图片仅存在此浏览器的篡改猴里；表情名称可随意改，触发类别不会被改名影响。</small>
     </div>
     <input id="faceFile" type="file" accept="image/png,image/jpeg,image/webp">
     <input id="faceImportFile" type="file" accept=".json,application/json">
   </details>

   <div class="jdw59-heading"><span>03 / 双人气泡</span></div>
   <label>双方布局<select id="bubbleMode"><option value="paragraph" title="AI按段落，用户按句号、问号、感叹号和换行智能拆分">智能逐段</option><option value="whole">整条一颗</option><option value="off">原生样式</option></select></label>
   <label class="check"><input id="gradientBubbles" type="checkbox"> 渐变气泡</label>
   <div class="jdw59-two"><label>玻璃浓度 <output id="glassValue"></output><input id="glass" type="range" min="35" max="100"></label>
     <label>气泡圆角 <output id="radiusValue"></output><input id="radius" type="range" min="8" max="32"></label></div>
   <div class="jdw59-heading"><span>04 / 背景壁纸</span></div>
   <div class="row"><button class="btn" id="pickBg">选择壁纸</button><button class="btn ghost" id="clearBg">清空</button></div>
   <label class="check"><input id="showWallpaper" type="checkbox"> 显示背景</label>
   <label>奶白蒙层 <output id="veilValue"></output><input id="wallpaperVeil" type="range" min="0" max="100" step="1"></label>
   <details id="advanced"><summary>高级工具与诊断</summary>
     <div class="row"><button class="btn" id="pickPane" type="button">点选遮挡白底</button><button class="btn ghost" id="clearPane" type="button">清除选择</button></div>
     <div class="row"><button class="btn" id="copyDiag" type="button">复制匿名诊断</button><span id="testhint"></span></div>
     <button class="btn ghost" id="restoreThemes" type="button">恢复内置主题库</button>
     <textarea id="diagText" readonly hidden aria-label="匿名诊断备用文本"></textarea>
     <div id="status" aria-live="polite">初始化中…</div>
   </details>
   <div class="row jdw59-footer"><button class="btn" id="toggle">暂停主题</button>
     <button class="btn ghost" id="reset">重置界面</button><button class="btn ghost" id="rescan">重新识别</button></div>
   <div class="jdw59-credit">ChatGPT Duo Skin · Community Edition</div>

     <input id="pickFile" type="file" accept="image/png,image/jpeg,image/webp">
   </section>`;

  const themeSheet=document.createElement('style');shadow.append(themeSheet);

  const faceSheet=document.createElement('style');
  faceSheet.textContent=`
   #expressionVault{margin-top:10px;border:1px solid #7386B95A;border-radius:12px;padding:9px 10px}
   #expressionVault>summary{cursor:pointer;font-size:12px;font-weight:750;color:var(--jdw59-ink,#E8EEFF)}
   #expressionVault[open]>summary{margin-bottom:9px}
   #faceGrid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:7px;margin:9px 0}
   #faceGrid button{display:flex;flex-direction:column;align-items:center;gap:4px;min-width:0;padding:4px 2px;
     border:1px solid #829DD455;border-radius:10px;background:#14264A58;color:inherit;font:10px system-ui,sans-serif}
   #faceGrid button[aria-pressed="true"]{border-color:#A9D0FF;box-shadow:0 0 0 1px #A9D0FF77}
   #faceGrid img,#faceGrid .faceEmpty{width:43px;height:43px;max-width:100%;border-radius:9px;object-fit:contain;
     background:#142343;border:1px solid #859DB566}
   #faceGrid .faceEmpty{display:grid;place-items:center;color:#AFC7EA;font-size:18px}
   #faceGrid .faceName{max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
   #faceRoleButtons{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:8px}
   #faceRoleButtons button[aria-pressed="true"]{border-color:#C9E4FF;background:#3556A855}
   #faceTools{display:grid;gap:5px}
   #faceTools small{font-size:10px}
  `;
  shadow.append(faceSheet);

  const $=q=>shadow.querySelector(q);
  const badges=$('#badges');
  const badgeMap=new Map();
  let data={items:[],old:0,modern:0}, notice='主题已启动';

  function renderFaces(){
    const grid=$('#faceGrid');if(!grid)return;
    $('#faceAuto').checked=faceAuto;
    $('#faceAssistant').setAttribute('aria-pressed',String(faceRole==='assistant'));
    $('#faceUser').setAttribute('aria-pressed',String(faceRole==='user'));
    grid.replaceChildren();
    for(const slot of FACE_SLOT_ORDER){
      const btn=document.createElement('button');btn.type='button';btn.dataset.slot=slot;
      btn.setAttribute('aria-pressed',String(slot===faceSlot));
      const url=expressionImages[faceRole][slot]||(slot==='default'?avatars[faceRole]:'');
      if(url){const img=document.createElement('img');img.src=url;img.alt='';btn.append(img);}
      else{const empty=document.createElement('span');empty.className='faceEmpty';empty.textContent='＋';btn.append(empty);}
      const title=document.createElement('span');title.className='faceName';title.textContent=faceLabels[faceRole][slot];
      btn.title=faceLabels[faceRole][slot]+'（'+slot+'）';btn.append(title);
      btn.onclick=()=>{faceSlot=slot;renderFaces();};
      grid.append(btn);
    }
    $('#faceLabel').value=faceLabels[faceRole][faceSlot];
    $('#faceDelete').disabled=!expressionImages[faceRole][faceSlot];
  }
  function storeFaceLabels(){GMset(FACE_PREFIX+'labels',JSON.stringify(faceLabels));}
  function loadFacePicture(){
    const input=$('#faceFile');input.value='';input.onchange=()=>{
      const file=input.files?.[0];if(!file)return;
      if(!['image/png','image/jpeg','image/webp'].includes(file.type)){notice='头像只支持 PNG / JPG / WebP';updateStatus();return;}
      const role=faceRole,slot=faceSlot,obj=URL.createObjectURL(file),img=new Image();
      img.onload=()=>{
        try{const canvas=document.createElement('canvas');canvas.width=256;canvas.height=256;
          const ctx=canvas.getContext('2d');const scale=Math.min(256/img.width,256/img.height);
          ctx.drawImage(img,(256-img.width*scale)/2,(256-img.height*scale)/2,img.width*scale,img.height*scale);
          const data=canvas.toDataURL('image/webp',.84);
          if(!safeImage(data)||!GMset(FACE_PREFIX+'image.'+role+'.'+slot,data))throw Error('保存失败');
          expressionImages[role][slot]=data;
          notice=faceLabels[role][slot]+' 已放进 '+(role==='assistant'?'AI':'用户')+' 的表情柜';
          renderFaces();schedule();updateStatus();
        }catch(e){notice='头像处理失败：'+(e?.message||String(e));updateStatus();}
        finally{URL.revokeObjectURL(obj);}
      };
      img.onerror=()=>{URL.revokeObjectURL(obj);notice='图片无法读取';updateStatus();};img.src=obj;
    };input.click();
  }
  function exportFaceLibrary(){
    const content=JSON.stringify({schema:'chatgpt-duo-skin-expression-library/v1',faceLabels,expressionImages},null,2);
    const link=document.createElement('a'),blob=new Blob([content],{type:'application/json'}),url=URL.createObjectURL(blob);
    link.href=url;link.download='ChatGPT_Duo_Skin_Avatar_Library.json';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),2500);
    notice='已导出私人头像库；文件包含你的头像图片，请勿放进公开仓库';updateStatus();
  }
  async function importFaceLibrary(){
    const input=$('#faceImportFile');input.value='';input.onchange=async()=>{
      const file=input.files?.[0];if(!file)return;
      try{
        const decoded=JSON.parse(await file.text());
        if(decoded.schema!=='chatgpt-duo-skin-expression-library/v1')throw Error('文件版本不匹配');
        for(const role of ['assistant','user'])for(const slot of FACE_SLOT_ORDER){
          const v=decoded.expressionImages?.[role]?.[slot];
          if(typeof v==='string'&&safeImage(v)&&v.length<400000){
            if(!GMset(FACE_PREFIX+'image.'+role+'.'+slot,v))throw Error('图片储存失败');
            expressionImages[role][slot]=v;
          }
          const name=decoded.faceLabels?.[role]?.[slot];
          if(typeof name==='string'&&name.trim())faceLabels[role][slot]=name.trim().slice(0,16);
        }
        storeFaceLabels();renderFaces();schedule();notice='头像库导入成功';updateStatus();
      }catch(err){notice='导入失败：'+(err?.message||String(err));updateStatus();}
    };input.click();
  }

  let pending=false, didClear=new WeakSet();
  const probe=()=>({
    oldRoles:document.querySelectorAll('[data-message-author-role]').length,
    newTurnKeys:document.querySelectorAll('[data-turn-key]').length,
    newUnitKeys:document.querySelectorAll('[data-content-search-unit-key]').length,
    userBubbles:document.querySelectorAll('[data-user-message-bubble]').length,
    assistantTextBlocks:document.querySelectorAll('[data-markdown-text-style="assistant-message"]').length,
    newAssistantRoles:document.querySelectorAll('[data-conversation-role="assistant"]').length
  });
  const inHost=el=>host.contains(el);
  const shellSurfaces=new Set();
  let wallpaperRoot=null, lastPaperProbe=0;
  const manualSurfaceKey='cds.public.v1.manual.background';
  let manualSelector=GMget(manualSurfaceKey,'');
  const stamp=(e)=>e?.tagName?.toLowerCase()+(e?.id?'#'+e.id:e?.getAttribute?.('data-testid')?'[data-testid='+e.getAttribute('data-testid')+']':'');

  const isVisibleDOM=el=>el && el.isConnected && el.getClientRects().length>0 && getComputedStyle(el).display!=='none';
  function chooseAssistant(root) {
    return root.matches?.('[data-markdown-text-style="assistant-message"],.markdown,.prose') ? root
      : root.querySelector('[data-markdown-text-style="assistant-message"],.markdown,.prose') || root;
  }
  function chooseUser(root) {
    return root.matches?.('[data-user-message-bubble],.user-message-bubble-color') ? root
      : root.querySelector('[data-user-message-bubble],.user-message-bubble-color') || root;
  }
  function findMessages() {
    const root=document; // New ChatGPT layouts may render chat outside the first <main>.
    const raw=[];
    const add=(role,element,via)=>{
      if(!element || inHost(element) || element.closest('aside,nav,[role="navigation"]') || !root.contains(element) || !isVisibleDOM(element))return;
      const e=role==='assistant'?chooseAssistant(element):chooseUser(element);
      if(!isVisibleDOM(e)) return;
      // The original user message is intentionally visually clipped after
      // adding paragraph bubbles. Measure the visible sibling, not its 1px
      // accessibility/source node, or a rescan will intermittently lose it.
      const visual=e.classList?.contains('jdw56-original')&&e.nextElementSibling?.classList?.contains('jdw56-visual-stack')
        ? e.nextElementSibling : e;
      const r=visual.getBoundingClientRect();
      if(r.width<40 || r.height<5) return;
      const group=e.closest('[data-turn-key],[data-testid^="conversation-turn-"],article[data-turn]')||e;
      raw.push({role,element:e,group,via});
    };
    // New 2026 layout: distinct user/assistant content under a shared turn key.
    root.querySelectorAll('[data-content-search-unit-key$=":assistant"],[data-chatgpt-search-unit-key$=":assistant"]').forEach(el=>add('assistant',el,'new-unit'));
    root.querySelectorAll('[data-content-search-unit-key$=":user"],[data-chatgpt-search-unit-key$=":user"]').forEach(el=>add('user',el,'new-unit'));
    root.querySelectorAll('[data-conversation-role="assistant"]').forEach(el=>add('assistant',el,'new-role'));
    root.querySelectorAll('[data-markdown-text-style="assistant-message"]').forEach(el=>add('assistant',el,'new-markdown'));
    root.querySelectorAll('[data-user-message-bubble]').forEach(el=>add('user',el,'new-bubble'));
    // Legacy layout, retained for users still on the older version.
    root.querySelectorAll('[data-message-author-role="assistant"]').forEach(el=>add('assistant',el,'legacy'));
    root.querySelectorAll('[data-message-author-role="user"]').forEach(el=>add('user',el,'legacy'));
    // Some UI variants expose role directly on their turn node.
    root.querySelectorAll('[data-turn="assistant"],[data-turn="user"]').forEach(el=>add(el.getAttribute('data-turn'),el,'legacy-turn'));
    if(!raw.length) return [];

    // Prefer the innermost real content, but only one label per speaker in each group.
    const ranks={'new-unit':5,'legacy':5,'new-markdown':4,'new-bubble':4,'new-role':3,'legacy-turn':2};
    const chosen=[];
    for(const item of raw.sort((a,b)=>(ranks[b.via]||0)-(ranks[a.via]||0))){
      const overlap=chosen.find(prev=>prev.role===item.role && (
        prev.element===item.element || prev.element.contains(item.element) || item.element.contains(prev.element) ||
        (prev.group===item.group && prev.group!==prev.element && item.group!==item.element)
      ));
      if(!overlap) chosen.push(item);
      else if(item.element!==overlap.element && overlap.element.contains(item.element)) {
        // Narrow to the actual rendered text while retaining its group identity.
        overlap.element=item.element;
      }
    }
    chosen.sort((a,b)=>a.element.compareDocumentPosition(b.element)&Node.DOCUMENT_POSITION_FOLLOWING?-1:1);
    return chosen;
  }
  function clearConversationBackground(items) {
    // Only mark ancestors OF conversation content. Don't rewrite React-managed text.
    for(const entry of items) {
      for(let a=entry.element.parentElement,step=0;a && a!==document.body && step<32;a=a.parentElement,step++) {
        if(a===host||a===bg)break;
        if(a.hasAttribute('data-user-message-bubble') || a.matches('form,button,[role="dialog"]'))continue;
        if(!didClear.has(a)) {a.setAttribute('data-jdw5-clear','');didClear.add(a);}
      }
    }
  }
  // 2026 ChatGPT sometimes paints an opaque full-page *sibling* over the background.
  // The old ancestor-only cleaner cannot reach it. Detect only large, light-colored
  // surfaces under real viewport points and paint the same fixed wallpaper on them.
  // Keep menus, individual cards, messages, and the composer untouched.
  // v5.3: identify app-shell backgrounds, NEVER individual large content cards.
  // v5.2 treated any big light div as a sheet, which painted wallpapers on code blocks.
  const wallRootSelectors='main,[role="main"],#thread,[data-testid="conversation-panel"],[data-testid="conversation-container"],[data-testid="chat-content"],#chat-content';
  const bannedSurface='pre,code,figure,blockquote,[data-testid*="code"],[data-testid*="artifact"],.jdw5-body,[data-turn-key],[data-testid^="conversation-turn-"],[data-user-message-bubble],.user-message-bubble-color,form,button,[role="dialog"],[role="menu"],aside,nav';
  function surfaceSafe(el){
    if(!(el instanceof HTMLElement)||el===document.body||el===document.documentElement||el===host||el===bg||host.contains(el))return false;
    if(el.matches(bannedSurface)||el.closest(bannedSurface))return false;
    const r=el.getBoundingClientRect(),vw=innerWidth,vh=innerHeight;
    if(r.width<Math.min(290,vw*.65)||r.height<Math.min(300,vh*.48)||r.right<vw*.42)return false;
    const cs=getComputedStyle(el);
    return cs.display!=='none'&&cs.visibility!=='hidden'&&Number(cs.opacity)>.35;
  }
  function lightPaint(el){
    const cs=getComputedStyle(el),c=cs.backgroundColor;
    const v=c.match(/rgba?\(\s*(\d+)[,\s]+(\d+)[,\s]+(\d+)(?:[,\s/]+([\d.]+))?\s*\)/);
    return !!v && Math.min(+v[1],+v[2],+v[3])>190 && (v[4]===undefined||Number(v[4])>.65);
  }
  function clearShellMarkers(){
    for(const el of shellSurfaces) if(el.isConnected){
      el.removeAttribute('data-jdw53-shell');
      el.removeAttribute('data-jdw53-backdrop');
    }
    shellSurfaces.clear();wallpaperRoot=null;
  }
  function chooseChatRoot(items){
    const first=items[0]?.element;
    const mainList=[...document.querySelectorAll(wallRootSelectors)].filter(surfaceSafe);
    const relevant=mainList.filter(el=>first&&el.contains(first));
    return relevant.find(el=>el.matches('#thread,[data-testid="conversation-panel"],[data-testid="chat-content"],#chat-content'))
      || relevant[relevant.length-1] || null;
  }
  function revealWallpaperSurfaces(force=false){
    const on=cfg.enabled;
    document.documentElement.dataset.jdw5Paper=on&&cfg.showWallpaper&&safeImage(wallpaper)?'yes':'no';
    if(!on)return;
    const now=performance.now();
    if(!force&&shellSurfaces.size&&now-lastPaperProbe<1450)return;
    lastPaperProbe=now;
    const items=data.items||[];
    const preferred=chooseChatRoot(items);
    const targets=new Set();
    if(preferred)targets.add(preferred);
    // First clear ancestors of real messages. They are outer shells, not content.
    for(const {element} of items.slice(0,15)){
      for(let a=element.parentElement;a&&a!==document.body;a=a.parentElement){
        if(surfaceSafe(a)) targets.add(a);
      }
    }
    if(preferred){
      // Opaque siblings of the scroll root can cover the wallpaper without
      // being ancestors; only inspect immediate app-shell children.
      for(let a=preferred.parentElement,level=0;a&&level<3&&a!==document.body;a=a.parentElement,level++){
        if(surfaceSafe(a))targets.add(a);
        for(const child of a.children){
          if(child===preferred||child.contains(preferred)||!surfaceSafe(child))continue;
          if(lightPaint(child)&&child.getBoundingClientRect().width>preferred.getBoundingClientRect().width*.75)targets.add(child);
        }
      }
    }
    // A manual pick is only used if the user chose an actual blank sheet.
    if(manualSelector) try{
      for(const el of document.querySelectorAll(manualSelector)) if(surfaceSafe(el))targets.add(el);
    }catch(_){}
    for(const el of [...shellSurfaces]){
      if(!targets.has(el)||!el.isConnected){
        el.removeAttribute('data-jdw53-shell');el.removeAttribute('data-jdw53-backdrop');
        shellSurfaces.delete(el);
      }
    }
    for(const el of targets){
      if(!el.hasAttribute('data-jdw53-shell'))el.setAttribute('data-jdw53-shell','');
      shellSurfaces.add(el);
    }
    // Paint ONLY the selected chat viewport. Other shells become transparent,
    // so a code block keeps its native background and will never be wallpapered.
    const root=preferred||[...targets].find(e=>e.matches(wallRootSelectors));
    if(root&&surfaceSafe(root)){
      if(wallpaperRoot!==root&&wallpaperRoot)wallpaperRoot.removeAttribute('data-jdw53-backdrop');
      root.setAttribute('data-jdw53-backdrop','');wallpaperRoot=root;
    }
    data.wallpaperSurfaces=shellSurfaces.size;
  }
  function elementSelector(el){
    if(el.id&&el.id!=='jdw5-host')return '#'+CSS.escape(el.id);
    const test=el.getAttribute('data-testid');if(test)return '[data-testid="'+CSS.escape(test)+'"]';
    const good=[...el.classList].filter(c=>/^bg-|^surface-|^main-|^chat-|^conversation-/.test(c));
    if(good.length)return el.tagName.toLowerCase()+'.'+good.slice(0,2).map(c=>CSS.escape(c)).join('.');
    const parts=[];
    for(let n=el;n&&n!==document.body&&parts.length<7;n=n.parentElement){
      const siblings=[...n.parentElement.children].filter(x=>x.tagName===n.tagName);
      parts.unshift(n.tagName.toLowerCase()+':nth-of-type('+(siblings.indexOf(n)+1)+')');
      if(n.id){parts[0]='#'+CSS.escape(n.id);break;}
    }
    return parts[0]?.startsWith('#')?parts.join(' > '):'body > '+parts.join(' > ');
  }
  function pickSurface(){
    notice='点一下聊天区域的纯白空白处，不要点文字或代码块。按 Esc 可取消。';updateStatus();
    document.body.style.cursor='crosshair';
    const off=()=>{document.removeEventListener('click',click,true);document.removeEventListener('keydown',key,true);document.body.style.cursor='';};
    const key=e=>{if(e.key==='Escape'){off();notice='已取消选取';updateStatus();}};
    const click=e=>{
      e.preventDefault();e.stopImmediatePropagation();off();
      const list=document.elementsFromPoint(e.clientX,e.clientY);
      const first=list.find(x=>x instanceof HTMLElement&&!host.contains(x));
      const candidates=[];
      for(let a=first;a&&a!==document.body;a=a.parentElement){
        if(surfaceSafe(a)&&lightPaint(a))candidates.push(a);
      }
      if(!candidates.length){
        for(const el of document.querySelectorAll('main > div,main > section,[role="main"] > div')){
          if(!surfaceSafe(el)||!lightPaint(el))continue;
          const r=el.getBoundingClientRect();
          if(e.clientX>=r.left&&e.clientX<r.right&&e.clientY>=r.top&&e.clientY<r.bottom)candidates.push(el);
        }
      }
      const target=candidates[0];
      if(!target){notice='这一点没有找到合格的白底层；请点聊天消息旁边更空白的位置';updateStatus();return;}
      manualSelector=elementSelector(target);
      GMset(manualSurfaceKey,manualSelector);
      notice='已选中背景层 '+stamp(target)+'，你可以滚动检查壁纸；选择错了可清除手动选择。';
      revealWallpaperSurfaces(true);schedule();updateStatus();
    };
    document.addEventListener('click',click,true);document.addEventListener('keydown',key,true);
  }
  // v5.8 local-context plaques. This is NOT a language model, and never
  // claims to know the assistant's private thoughts. It only looks at visible
  // text on the page, then chooses small context-specific phrases locally.
  // Privacy: it never sends chat text anywhere, and stores only topic labels.
  const SCENE_VERSION=5;
  const SCENE_TOPICS=[
    {name:'主题设置',pattern:/(主题|配色|渐变|颜色|壁纸|图层|透明度)/i},
    {name:'界面布局',pattern:/(气泡|排版|状态栏|布局|头像|昵称|宽度|对齐)/i},
    {name:'脚本调试',pattern:/(脚本|油猴|Tampermonkey|Firefox|Chrome|Bug|修复|DOM|CSS|报错)/i},
    {name:'创作交流',pattern:/(设计|创作|插画|绘画|小说|音乐|漫画|灵感)/i},
    {name:'生活日常',pattern:/(今天|吃饭|旅行|睡觉|天气|周末|生活)/i}
  ];
  const SCENE_HORIZONS=[
    {name:'新发现',pattern:/(为什么|怎么|好奇|原理|知识|研究)/i},
    {name:'灵感笔记',pattern:/(创作|设计|作品|画画|音乐)/i},
    {name:'今天的故事',pattern:/(今天|出门|日常|吃饭|天气)/i}
  ];
  function sceneContext(entry){
    const items=data.items||[];
    const idx=items.findIndex(e=>e.element===entry.element);
    let user='';
    for(let i=idx-1;i>=Math.max(0,idx-8);i--){
      if(items[i].role==='user'){
        user=String(items[i].element.textContent||'').slice(0,1100);
        break;
      }
    }
    // A reply can contain long code blocks: cap its weight so the actual
    // user's current topic isn't overruled by an unrelated technical example.
    const reply=String(entry.element.textContent||'').slice(0,2200);
    return {user,reply};
  }
  function detectFocus(ctx){
    let best=null,bestScore=0;
    for(const topic of SCENE_TOPICS){
      const score=(topic.pattern.test(ctx.user)?5:0)+(topic.pattern.test(ctx.reply)?2:0);
      if(score>bestScore){best=topic.name;bestScore=score;}
    }
    return best;
  }
  // Emotions are multi-dimensional, not fixed topic labels.  Strong first-person
  // reactions outweigh technical words. A phrase like “生气时用什么颜色” is
  // an example, NOT a declaration that the user is currently angry.
  function hits(text,re,max=3){return Math.min(max,(text.match(re)||[]).length);}
  function emotionAnalysis(ctx,focus){
    const user=String(ctx.user||'').replace(/```[\s\S]*?```|`[^`]*`|https?:\/\/\S+/g,'').slice(0,1100);
    const reply=String(ctx.reply||'').replace(/```[\s\S]*?```|`[^`]*`|https?:\/\/\S+/g,'').slice(0,1300);
    const u=user.replace(/\s+/g,' ');
    const meta=/(状态栏|铭牌|情绪|颜色|色彩|配色|调色|渐变|模式|示例|比如|例如|判断逻辑|判定|文案)/.test(u);
    const immediate=/(我(?:现在|真的|超级|特别|太|很|好)?(?:生气|气愤|愤怒|难过|伤心|害怕|焦虑|开心|高兴|兴奋)|气死我了|我火大|我快气炸了)/.test(u);
    const weak=meta&&!immediate?.22:1;
    const cues={
      anger:[/(?:我(?:现在|真的|超级|很|太|好|已经|非常){0,5}(?:生气|愤怒|火大)|气死我了|我气炸了|我怒了|快气疯了|气得发抖|好生气|太气了|气死我|气死了|真的生气了|怒了)/g,/(?:生气|愤怒|火大|气死|烦死|凭什么|怒|气炸|受够了|不服气|讨厌|无语|破防了)/g],
      joy:[/(?:我(?:太|好|很|真的|超级)?(?:开心|高兴|兴奋)|开心死了|好耶|太棒了|好漂亮|成功啦|棒到飞起来|我好骄傲|太喜欢了|太牛了|好开心|太开心了|超级开心|高兴死了|快乐死了|开心到飞起)/g,/(?:开心|快乐|高兴|耶|漂亮|惊喜|成功|好喜欢|棒棒|太好|哈哈哈|🥳|🎉|🤩|🌈|啊啊啊)/g],
      sadness:[/(?:我(?:好|很|太|真的)?(?:难过|伤心|委屈|想哭)|哭了一晚上|撑不住了|我好孤独|我不开心|我不高兴|好委屈|好难过)/g,/(?:难过|伤心|委屈|悲伤|哭泣|低落|失落|孤独|不开心|泪|呜呜)/g],
      worry:[/(?:我(?:好|很|太|真的)?(?:担心|害怕|焦虑|紧张|不安)|快吓死了|我好慌)/g,/(?:担心|害怕|焦虑|紧张|慌张|忧虑|不安|压力好大|心烦|怕死)/g],
      affection:[/(?:爱死你了|好想你|想抱住你|亲亲亲|啵啵啵|抱紧我|我爱你|喜欢你到不行)/g,/(?:爱你|亲亲|啵啵|亲一口|想你|抱抱|贴贴|亲密|心动|💗|💕|💋|❤️)/g],
      play:[/(?:笑疯了|笑死我了|哈哈哈哈|嘿嘿嘿嘿|故意逗你|逗死你)/g,/(?:哈哈|嘿嘿|整活|坏蛋|逗你|调皮|打滚|捉弄|😝|😈|🤣)/g],
      curious:[/(?:我(?:特别|非常|一直)?(?:好奇|想知道)|有没有想过|为什么会这样)/g,/(?:好奇|为什么|原理|研究|怎么回事|猜想|探索|新发现|想知道|有没有可能|科普)/g]
    };
    const scores={anger:0,joy:0,sadness:0,worry:0,affection:0,play:0,curious:0,work:focus?2.5:0};
    for(const [key,[strong,ordinary]] of Object.entries(cues)){
      const strongUser=hits(u,strong),ordinaryUser=hits(u,ordinary);
      const strongReply=hits(reply,strong),ordinaryReply=hits(reply,ordinary);
      scores[key]=Math.min(16,strongUser*5+ordinaryUser*1.25*weak+strongReply*.8+ordinaryReply*.32);
    }
    // Working on a bug is not the same thing as feeling calm or happy about it.
    if(/(?:设计|实现|工程|施工|测试|校验|调试|编程|代码|脚本|报错|修复|排查)/.test(u))scores.work+=1;
    if(/(?:分析|认真讨论|比较|论文|逻辑|推理|架构)/.test(u))scores.work+=1.2;
    if(/(?:没生气|不生气|没有生气|不难过|没难过|不害怕)/.test(u)){
      if(/(?:没生气|不生气|没有生气)/.test(u))scores.anger=Math.min(scores.anger,.8);
      if(/(?:没难过|不难过)/.test(u))scores.sadness=Math.min(scores.sadness,.8);
      if(/不害怕/.test(u))scores.worry=Math.min(scores.worry,.8);
    }
    const ranked=['anger','sadness','worry','joy','affection','play','curious'].sort((a,b)=>scores[b]-scores[a]);
    const best=ranked[0],strength=scores[best];
    let mood='night';
    if(strength>=3.5 && strength>=scores.work*.85){
      mood=({sadness:'soothe',worry:'worried',joy:'happy',curious:'curious'}[best]||best);
    }else if(scores.work>=1.8)mood='work';
    else if(strength>=1.7)mood=({sadness:'soothe',worry:'worried',joy:'happy',curious:'curious'}[best]||best);
    // Excited affection usually reads warmer than a purely technical response.
    const arousal=Math.min(1,(scores.joy+scores.play+scores.anger+scores.worry)*.055);
    const happiness=scores.joy>=5.8 && scores.joy>scores.anger*1.25;
    return {mood,scores,arousal,joyRainbow:happiness};
  }
  function hueColor(h,s,l){
    const hue=((h%360)+360)%360;
    const sat=Math.max(0,Math.min(100,s));
    const light=Math.max(0,Math.min(100,l));
    const f=n=>{const k=(n+hue/30)%12,a=sat/100*Math.min(light/100,1-light/100);return light/100-a*Math.max(-1,Math.min(k-3,9-k,1));};
    return '#'+[f(0),f(8),f(4)].map(v=>Math.round(v*255).toString(16).padStart(2,'0')).join('').toUpperCase();
  }
  function scenePalette(ctx,analysis,focus,serial){
    const s=analysis.scores,mood=analysis.mood;
    const seed=String(focus||'')+'|'+String(ctx.user||'').slice(0,90)+'|'+Math.floor(Number(serial||1)/2);
    let hash=2166136261;
    for(const c of seed){hash=Math.imul(hash^c.charCodeAt(0),16777619)>>>0;}
    const wobble=(hash%23)-11;
    const anchors={anger:354,joy:41,sadness:215,worry:264,affection:325,play:279,curious:182,work:213};
    const weights=Object.entries(anchors).map(([k,h])=>({h,w:Math.max(.08,s[k]||0)}));
    if(mood==='night')weights.push({h:225,w:2.8});
    if(mood==='work')weights.push({h:213,w:3.5});
    if(mood==='anger')weights.push({h:353,w:7});
    let x=0,y=0;for(const p of weights){x+=p.w*Math.cos(p.h*Math.PI/180);y+=p.w*Math.sin(p.h*Math.PI/180);}
    const center=(Math.atan2(y,x)*180/Math.PI+360)%360;
    const h=center+wobble*.65;
    const sat= Math.min(87,Math.max(40,49+analysis.arousal*20+s.affection*.7+s.joy*.55));
    let stops,ink,muted,chip,border;
    if(analysis.joyRainbow && mood==='happy'){
      const hues=[347,22,49,116,187,248,297];
      stops=hues.map((t,i)=>hueColor(t+Math.round(wobble/3),i===2?89:76,83+(i%3)));
      ink='#28334B';muted='#445277';chip='#FFFFFFC9';border='#FFE3F6';
    }else if(mood==='work' || mood==='happy'){
      const sh=mood==='happy'?Math.max(67,sat):Math.min(67,sat);
      stops=[hueColor(h-13,sh,94),hueColor(h+8,sh,86),hueColor(h+25,sh,76)];
      ink='#203149';muted='#49637B';chip='#FFFFFFCF';border='#DBE6F5';
    }else if(mood==='anger'){
      stops=[hueColor(h-13,sat+8,20),hueColor(h,sat+12,30),hueColor(h+19,sat+3,40)];
      ink='#FFF1F4';muted='#FFD1DF';chip='#421C35B9';border='#D878A6';
    }else if(mood==='soothe'||mood==='worried'){
      stops=[hueColor(h-15,sat-23,34),hueColor(h+9,sat-24,43),hueColor(h+26,sat-35,58)];
      ink='#F8FBFF';muted='#E0E9FA';chip='#182D53A7';border='#A5BACF';
    }else if(mood==='affection'){
      stops=[hueColor(h-19,sat,21),hueColor(h+5,sat+5,32),hueColor(h+32,sat-3,43)];
      ink='#FFF2FA';muted='#F5D9EE';chip='#56294FA7';border='#C782BA';
    }else{
      stops=[hueColor(h-13,sat,23),hueColor(h+7,sat+2,35),hueColor(h+34,sat-3,47)];
      ink='#F6F8FF';muted='#CED9F5';chip='#1327479E';border='#9FAEDB';
    }
    const percentages=stops.map((_,i)=>Math.round(i*100/Math.max(1,stops.length-1)));
    return {gradient:`linear-gradient(116deg,${stops.map((color,i)=>color+' '+percentages[i]+'%').join(',')})`,ink,muted,chip,border,rainbow:analysis.joyRainbow&&mood==='happy'};
  }

  // Story-like decorative signals; never represent measured medical or device
  // readings. Local browser generation is intentionally distinct from AI prose.
  // Short neutral visual captions; describes visible text, never claims to read emotions.
  const SIGNAL_STORIES={
    night:{a:['📡 聊天频道 · {topic}','🌌 晚间记录 · {topic}'],b:['✨ 正在继续这一段对话','🪐 留一行给新发现']},
    work:{a:['🛠 今日事项 · {topic}','🧩 正在处理 · {topic}'],b:['📐 从细节继续完善','🔧 分析与实践并行']},
    happy:{a:['🎉 好消息 · {topic}','🌈 愉快时刻 · {topic}'],b:['✨ 这次值得记录','🎊 让快乐多停留一会儿']},
    anger:{a:['⚡ 意见表达 · {topic}','🧭 重要分歧 · {topic}'],b:['🗣 先把问题说清楚','🎯 聚焦具体问题']},
    soothe:{a:['🌙 温柔模式 · {topic}','🫧 放慢节奏 · {topic}'],b:['🤍 留一点思考空间','🪶 不急于下结论']},
    worried:{a:['🌫 需要确认 · {topic}','🧭 梳理疑问 · {topic}'],b:['🔎 分清证据和猜想','💡 从已知信息开始']},
    affection:{a:['💗 友好来信 · {topic}','💌 暖心频道 · {topic}'],b:['🌷 温柔地接住这句话','🤍 给交流留一点温度']},
    play:{a:['😼 轻松一下 · {topic}','🎲 玩笑频道 · {topic}'],b:['🎭 这个转折很有趣','✨ 脑洞已开启']},
    curious:{a:['🔭 探索频道 · {topic}','🧠 好奇笔记 · {topic}'],b:['🔎 再看深一层','💡 继续寻找解释']}
  };
  function creativeHash(text){let n=2166136261;for(const c of String(text||'')){n=Math.imul(n^c.charCodeAt(0),16777619)>>>0;}return n;}
  function moreImaginativeScene(ctx,mood,topic,serial){
    const bank=SIGNAL_STORIES[mood]||SIGNAL_STORIES.night;
    const seed=creativeHash(ctx.user.slice(0,220)+'|'+ctx.reply.slice(0,110)+'|'+serial);
    const a=bank.a[(seed+serial*7)%bank.a.length];
    const b=bank.b[(Math.floor(seed/17)+serial*11)%bank.b.length];
    const english={night:['Still here.','A quiet new page.'],work:['Work in progress.','One step at a time.'],happy:['A bright little moment.'],anger:['Say it clearly.'],soothe:['A little more room.'],worried:['Check the facts.'],affection:['A kind little note.'],play:['A playful turn.'],curious:['Follow the question.']}[mood]||['New message.'];
    const note=english[(seed+serial)%english.length];
    // Only selected work signals mention subject matter; never parrot boilerplate
    // like “本轮/状态栏/聊天/配色” in every message.
    return {tag:a.replaceAll('{topic}',topic),line:b.replaceAll('{topic}',topic),note};
  }

  function nightFocus(ctx){
    for(const item of SCENE_HORIZONS){
      if(item.pattern.test(ctx.user)||item.pattern.test(ctx.reply))return item.name;
    }
    return '这一轮聊天';
  }
  function inferScene(entry,serial){
    const ctx=sceneContext(entry);
    const focus=detectFocus(ctx);
    const analysis=emotionAnalysis(ctx,focus),mood=analysis.mood;
    const topic=focus || nightFocus(ctx);
    const {tag,line,note}=moreImaginativeScene(ctx,mood,topic,Math.max(1,Math.floor(Number(serial)||1)));
    return {mood,tag,line,note,focus:topic,engine:SCENE_VERSION,
      palette:scenePalette(ctx,analysis,focus,serial)};
  }
  function beijingClock(timestamp=Date.now()){
    const now=new Date(timestamp);
    const f=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit',weekday:'short',hour:'2-digit',minute:'2-digit',hour12:false});
    const v=Object.fromEntries(f.formatToParts(now).filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));
    let daysLabel='♡ 纪念日未设置';
    if(cfg.anniversaryDate){
      const [yy,mm,dd]=cfg.anniversaryDate.split('-').map(Number);
      const start=Date.UTC(yy,mm-1,dd);
      const valid=new Date(start);
      if(valid.getUTCFullYear()===yy&&valid.getUTCMonth()===mm-1&&valid.getUTCDate()===dd){
        const offset=Math.floor((Date.UTC(+v.year,+v.month-1,+v.day)-start)/86400000)+1;
        daysLabel=offset>0?`♡ 纪念第${offset}天`:'♡ 纪念日即将到来';
      }
    }
    const hour=+v.hour;
    const part=hour<6?'🌑 深夜':hour<12?'🌤️ 上午':hour<18?'☀️ 下午':'🌕 晚上';
    return {time:`✨ ${v.year}年${v.month}月${v.day}日 ${v.weekday} ${v.hour}:${v.minute} · ${part}`,days:daysLabel};
  }
  // v5.7 message archive: capture time once, persist a small text-free metadata
  // record. Historical messages don't expose reliable sent-at timestamps here;
  // the clock records first LOCAL observation, not a fabricated original send time.
  const SNAPSHOT_STORE='cds.public.v1.message.snapshots';
  let snapshotRecords={};
  try {const v=JSON.parse(GMget(SNAPSHOT_STORE,'{}'));if(v && typeof v==='object' && !Array.isArray(v))snapshotRecords=v;}
  catch(_){snapshotRecords={};}
  const snapshotWeak=new WeakMap();
  const snapshotDirty=new Set();
  const SCENE_COUNTER_KEY='cds.public.v1.scene.serial';
  function nextSceneSerial(){
    const serial=Math.max(0,Math.floor(Number(GMget(SCENE_COUNTER_KEY,0))||0))+1;
    GMset(SCENE_COUNTER_KEY,serial);
    return serial;
  }
  function snapshotKey(entry){
    const el=entry.element;
    let target=el.closest('[data-content-search-unit-key],[data-chatgpt-search-unit-key],[data-message-id],'
      +'[data-turn-key],[data-testid^="conversation-turn-"]') || entry.group;
    const attrs=['data-content-search-unit-key','data-chatgpt-search-unit-key','data-message-id','data-turn-key','data-testid'];
    let id='';
    for(const attr of attrs){const v=target?.getAttribute?.(attr);if(v){id=attr+':'+v;break;}}
    if(!id)id='local-index:'+Math.max(0,data.items.findIndex(x=>x.element===entry.element));
    return location.pathname+'|'+entry.role+'|'+id;
  }
  function persistSnapshots(){
    // Store timestamp + short generated status only; never persist chat bodies.
    const list=Object.entries(snapshotRecords);
    if(list.length>500){
      list.sort((a,b)=>(a[1]?.ts||0)-(b[1]?.ts||0));
      snapshotRecords=Object.fromEntries(list.slice(-500));
    }
    GMset(SNAPSHOT_STORE,JSON.stringify(snapshotRecords));
  }
  function modelIsStreaming(){
    return !!document.querySelector('[data-testid="stop-button"],button[aria-label="Stop generating"],'
       +'button[aria-label="停止生成"],button[aria-label="Stop streaming"]');
  }
  // v5.12 Assistant Authored State V1. Opt-in model metadata, no network/API calls.
  // Supported standalone reply block (as a paragraph OR preformatted block):
  // DUO_SKIN_STATE_V1:{"protocol":"duo-skin-state/v1",...}
  // Other text, user messages, quoted examples and nonmatching snippets are ignored.
  const AUTHOR_PREFIX='DUO_SKIN_STATE_V1:';
  const authorParseCache=new WeakMap();
  function tidyAuthorText(s,max=110){
    return typeof s==='string' ? s.replace(/[\u0000-\u001F\u007F<>]/g,' ').trim().slice(0,max) : '';
  }
  function accessiblePalette(stops,ink,border){
    const contrast=(a,b)=>{const x=luminance(a),y=luminance(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05);};
    let values=stops.slice();
    const whites=values.map(c=>contrast(c,'#FFFFFF'));
    const darks=values.map(c=>contrast(c,'#14213D'));
    const minA=Math.min(...whites),minB=Math.min(...darks);
    let foreground=ink && validHex(ink) ? ink.toUpperCase() : minA>=minB?'#FFFFFF':'#14213D';
    let minimum=Math.min(...values.map(c=>contrast(c,foreground)));
    if(minimum<4.5){
      // Fix backgrounds, not the model's actual prose. Keep palette hue intact.
      const into=foreground==='#FFFFFF'?'#091125':'#FFFFFF';
      for(let n=0;n<16&&minimum<4.5;n++){
        values=values.map(c=>mixColor(c,into,.10));
        minimum=Math.min(...values.map(c=>contrast(c,foreground)));
      }
    }
    const mid=values[Math.floor(values.length/2)];
    const muted=foreground==='#FFFFFF'?'#E8ECF8':'#263855';
    return {gradient:'linear-gradient(115deg,'+values.map((c,i)=>c+' '+Math.round(i*100/(values.length-1))+'%').join(',')+')',
      ink:foreground,muted:minimum<3?foreground:muted,
      border:validHex(border)?border.toUpperCase():mixColor(mid,foreground,.36),
      chip:foreground==='#FFFFFF'?'#101D39BD':'#FFFFFFB8'};
  }
  function validateAuthorPayload(item){
    if(!item||typeof item!=='object'||Array.isArray(item)||item.protocol!=='duo-skin-state/v1')return null;
    const lines=item.status;
    const colors=item.gradient;
    if(!Array.isArray(lines)||lines.length!==2||!lines.every(v=>typeof v==='string'&&v.trim().length>0&&v.length<=130))return null;
    if(!Array.isArray(colors)||colors.length<2||colors.length>5||!colors.every(validHex))return null;
    const moods=['night','work','happy','anger','soothe','worried','affection','play','curious'];
    const mood=moods.includes(item.mood)?item.mood:'night';
    const a=FACE_SLOT_ORDER.includes(item.assistantAvatar)?item.assistantAvatar:'default';
    const u=FACE_SLOT_ORDER.includes(item.userAvatar)?item.userAvatar:'default';
    const tag=tidyAuthorText(lines[0],120),line=tidyAuthorText(lines[1],120);
    if(!tag||!line)return null;
    const note=tidyAuthorText(item.note,85) || 'Written for this moment.';
    // Backward-compatible OPTIONAL userCard: old model prompts remain valid.
    // Only parse short, plain-text card fields and literal hex gradients.
    let userCard=null;
    const uc=item.userCard;
    if(uc&&typeof uc==='object'&&!Array.isArray(uc)){
      const text=uc.status,stops=uc.gradient;
      if(Array.isArray(text)&&text.length===2&&text.every(x=>typeof x==='string'&&x.trim().length>0&&x.length<=130)){
        const a=tidyAuthorText(text[0],112),b=tidyAuthorText(text[1],112);
        if(a&&b){
          const palette=Array.isArray(stops)&&stops.length>=2&&stops.length<=5&&stops.every(validHex)
            ? accessiblePalette(stops.map(x=>x.toUpperCase()),uc.ink,uc.border):null;
          userCard={tag:a,line:b,note:tidyAuthorText(uc.note,80)||'A note from her side.',
            palette,authored:true};
        }
      }
    }
    return {mood,tag,line,note,focus:'',engine:5,authored:true,
      assistantAvatar:a,userAvatar:u,userCard,
      palette:accessiblePalette(colors.map(x=>x.toUpperCase()),item.ink,item.border)};
  }
  function readAuthorState(entry){
    if(entry.role!=='assistant')return null;
    const root=entry.element;
    const nodes=(root.matches?.('p,pre')?[root]:[]).concat([...root.querySelectorAll('p,pre')]);
    // One marker per assistant reply; require the exact prefix at the START
    // of a dedicated block, not somewhere in quoted documentation.
    for(const node of nodes.reverse()){
      if(node.closest('blockquote,[role="dialog"],[role="menu"]'))continue;
      const raw=(node.textContent||'').trim();
      if(!raw.startsWith(AUTHOR_PREFIX)||raw.length>3200)continue;
      const cached=authorParseCache.get(node);
      if(cached?.raw===raw){if(cached.scene){node.classList.add('jdw512-meta');return cfg.authoredState?cached.scene:null;}continue;}
      let scene=null;
      try{scene=validateAuthorPayload(JSON.parse(raw.slice(AUTHOR_PREFIX.length).trim()));}catch(_){}
      authorParseCache.set(node,{raw,scene});
      if(scene){node.classList.add('jdw512-meta');return cfg.authoredState?scene:null;}
    }
    return null;
  }
  function archiveFor(entry){
    const key=snapshotKey(entry);
    let rec=snapshotWeak.get(entry.element);
    if(!rec){
      rec=snapshotRecords[key];
      if(!rec||!Number.isFinite(rec.ts)){
        const serial=nextSceneSerial();
        rec={ts:Date.now(),serial,scene:inferScene(entry,serial),locked:false};
        snapshotRecords[key]=rec;persistSnapshots();
      } else if (!rec.scene){
        rec.serial=rec.serial||nextSceneSerial();
        rec.scene=inferScene(entry,rec.serial);
        snapshotRecords[key]=rec;persistSnapshots();
      } else if (rec.locked && !rec.scene.palette){
        // Preserve already archived wording and timestamp across version upgrades.
        // Color may be synthesized once for legacy cards; do not rewrite their lines.
        const ctx=sceneContext(entry),focus=detectFocus(ctx),analysis=emotionAnalysis(ctx,focus);
        rec.scene.palette=scenePalette(ctx,analysis,focus,rec.serial||1);
        snapshotRecords[key]=rec;persistSnapshots();
      } else if (!rec.locked && rec.scene.engine!==SCENE_VERSION){
        rec.scene=inferScene(entry,rec.serial||1);
        snapshotRecords[key]=rec;persistSnapshots();
      }
      snapshotWeak.set(entry.element,rec);
    }
    // A complete authored reply can arrive AFTER the fallback scene was
    // already locked during streaming. Upgrade that single card exactly once.
    const authored=readAuthorState(entry);
    if(authored && !rec.scene?.authored){
      rec.scene=authored;rec.locked=true;
      snapshotRecords[key]=rec;persistSnapshots();
    }
    if(!rec.locked){
      const candidate=inferScene(entry,rec.serial||1);
      const prev=rec.scene||{};
      if(['mood','tag','line','note','focus'].some(f=>candidate[f]!==prev[f]) || JSON.stringify(candidate.palette)!==JSON.stringify(prev.palette)){
        rec.scene=candidate;snapshotDirty.add(key);
      }
      if(!modelIsStreaming()){
        rec.locked=true;snapshotDirty.add(key);
      }
      if(snapshotDirty.size){persistSnapshots();snapshotDirty.clear();}
    }
    return rec;
  }
  function markGradientLines(el,role){
    if(role!=='assistant')return;
    // Rich ChatGPT replies can have several wrappers. Apply classes to the
    // actual readable blocks, never rewrite text, code, tables or React nodes.
    const rich=el.matches('.markdown,.prose,[data-markdown-text-style]')?el:
      el.querySelector('.markdown,.prose,[data-markdown-text-style]')||el;
    const blocks=[...rich.querySelectorAll('p,ul,ol,blockquote,h1,h2,h3,h4')].filter(node=>{
      if(!node.isConnected||!node.textContent?.trim()||!isVisibleDOM(node))return false;
      if(node.classList.contains('jdw512-meta')||node.textContent.trim().startsWith('DUO_SKIN_STATE_V1:'))return false;
      if(node.closest('pre,code,figure,table,[role="dialog"],[role="menu"],[contenteditable="true"],[data-testid*="code"],[data-testid*="artifact"],[data-testid*="tool"]'))return false;
      // A list or quotation is one block. Do not style each nested p again.
      const ancestor=node.parentElement?.closest('ul,ol,blockquote');
      if(ancestor&&rich.contains(ancestor))return false;
      return true;
    });
    // Spread tones over the ACTUAL paragraph count. Even a three-part
    // response now runs dark-blue -> blue-grey -> pale silver.
    for(let i=0;i<blocks.length;i++){
      const node=blocks[i];
      const tone=blocks.length===1?0:Math.round(i*5/(blocks.length-1));
      node.classList.add('jdw53-line');
      if(node.dataset.jdw53Tone!==String(tone))node.dataset.jdw53Tone=String(tone);
    }
  }
  function markUserParagraphs(el){
    // v5.9: both roles share the same paragraph layout setting. The native
    // text remains untouched and is never split at sentence punctuation.
    const blocks=[...el.querySelectorAll('p')].filter(n=>n.textContent.trim()&&!n.closest('pre,code,blockquote,[contenteditable]'));
    el.dataset.jdw55Split='no';
    for(const block of blocks)block.classList.remove('jdw55-user-line');
  }
  function markBodies(items) {
    for(const entry of items){
      const el=entry.element;
      if(el.dataset.jdw5Role!==entry.role) el.dataset.jdw5Role=entry.role;
      el.classList.add('jdw5-body');
      const hasChildren=[...el.children].some(child=>/^(P|DIV|UL|OL|BLOCKQUOTE|H[1-6]|TABLE|PRE)$/.test(child.tagName));
      el.classList.toggle('jdw5-plain',!hasChildren);
      markGradientLines(el,entry.role);
      if(entry.role==='user') markUserParagraphs(el);
      const b=entry.role==='user' ? chooseUser(el) : null;
      if(b && b!==el) b.classList.add('jdw5-native-user');
    }
  }
  function clipped(element){
    let top=0,bottom=window.innerHeight;
    for(let a=element.parentElement;a && a!==document.body;a=a.parentElement){
      const cs=getComputedStyle(a);
      if(/auto|scroll|hidden|clip/.test(cs.overflowY)) {
        const r=a.getBoundingClientRect();
        if(r.height>80){top=Math.max(top,r.top);bottom=Math.min(bottom,r.bottom);}
      }
    }
    return {top,bottom};
  }
  const authoredUserFaces=new WeakMap();
  const authoredUserCards=new WeakMap();
  const USER_CARD_STORE='cds.public.v1.user.cards';
  let userCardRecords={};
  try{const v=JSON.parse(GMget(USER_CARD_STORE,'{}'));
    if(v&&typeof v==='object'&&!Array.isArray(v))userCardRecords=v;
  }catch(_){userCardRecords={};}
  const userCardWeak=new WeakMap();
  function persistUserCards(){
    const records=Object.entries(userCardRecords);
    if(records.length>500){
      records.sort((a,b)=>(a[1]?.ts||0)-(b[1]?.ts||0));
      userCardRecords=Object.fromEntries(records.slice(-500));
    }
    // Archive only the timestamp and short display labels, NEVER the user text.
    GMset(USER_CARD_STORE,JSON.stringify(userCardRecords));
  }
  function nativeUserMessage(e){
    const el=e.element;
    const bubble=el.matches?.('[data-user-message-bubble],.user-message-bubble-color')?el:
      el.querySelector?.('[data-user-message-bubble],.user-message-bubble-color');
    const text=bubble?readNativeBubbleText(bubble):String(el.textContent||'');
    return text.replace(/\s+/g,' ').trim().slice(0,1250);
  }
  function cardTextSeed(s){
    let n=2166136261;
    for(const c of String(s||'')){n=Math.imul(n^c.charCodeAt(0),16777619);}
    return n>>>0;
  }
  function localUserStory(e){
    const text=nativeUserMessage(e),seed=cardTextSeed(snapshotKey(e)+'|'+text);
    const kinds=[
      ['📮 一条新消息','✧ 今天的交流继续','A note from this side.'],
      ['🎨 一点新想法','✧ 用自己的节奏表达','Another fresh idea.'],
      ['🔍 一个好问题','✧ 让好奇心带路','Worth exploring.'],
      ['🪐 一段日常记录','✧ 新的一页正在展开','A small new chapter.']
    ];
    const lines=kinds[seed%kinds.length];
    return {tag:lines[0],line:lines[1],note:lines[2],mood:'daily',authored:false,palette:null};
  }

  function userCardFor(e){
    const key=snapshotKey(e);
    let rec=userCardWeak.get(e.element);
    if(!rec){
      const previous=userCardRecords[key];
      rec=previous&&Number.isFinite(previous.ts)&&previous.scene?previous:
        {ts:Date.now(),scene:localUserStory(e),viewVersion:515};
      userCardWeak.set(e.element,rec);
      userCardRecords[key]=rec;persistUserCards();
    }
    if(!rec.scene?.authored && rec.viewVersion!==515){
      rec.scene=localUserStory(e);
      rec.viewVersion=515;
      userCardRecords[key]=rec;persistUserCards(); // keep the original ts
    }
    const authored=cfg.authoredState?authoredUserCards.get(e.element):null;
    if(authored&&!rec.scene?.authored){
      rec.scene=authored;
      userCardRecords[key]=rec;persistUserCards();
    }
    return rec;
  }
  function userExpressionSlot(e,authoredSlot){
    if(!faceAuto)return 'default';
    const remembered=faceHistory[snapshotKey(e)]?.slot;
    const requested=(authoredSlot && FACE_SLOT_ORDER.includes(authoredSlot))
      ? authoredSlot : (FACE_SLOT_ORDER.includes(remembered)?remembered:'default');
    return expressionImages.user[requested]?requested:'default';
  }
  // v5.19 Android: a ChatGPT message root is not always its PAINTED bubble.
  // Some user turns wrap the visual bubble in extra padded blocks or re-render
  // their original text as a clipped sibling. Measure the actual color-bearing
  // element and never use a hidden original as the positioning target.
  function jdw519VisibleBubble(e){
    let source=e.visualElement?.isConnected?e.visualElement:e.element;
    if(!source || !source.isConnected)return e.element;
    if(e.role!=='user')return source;
    if(source.classList?.contains('jdw56-original')){
      const sibling=source.nextElementSibling;
      if(sibling?.classList?.contains('jdw56-visual-stack'))source=sibling;
    }
    if(source.classList?.contains('jdw56-visual-stack')){
      const first=source.querySelector('.jdw56-sentence');
      return first&&isVisibleDOM(first)?first:source;
    }
    // Some 2026 mobile layouts paint the bubble on a descendant rather than
    // on the role wrapper. Take the most deeply nested, visible bubble node.
    const candidates=[...source.querySelectorAll('[data-user-message-bubble],.user-message-bubble-color')]
      .filter(el=>isVisibleDOM(el)&&!el.classList.contains('jdw56-original')&&el.getBoundingClientRect().height>4);
    if(candidates.length)return candidates[candidates.length-1];
    return source;
  }
  function jdw519SnapBadge(e,node){
    // Correct rare viewport / transformed-wrapper differences after real layout.
    if(!JDW_MOBILE||!node)return;
    const target=jdw519VisibleBubble(e);
    if(!target?.isConnected)return;
    const tr=target.getBoundingClientRect(),cr=node.getBoundingClientRect();
    if(!Number.isFinite(tr.top)||!Number.isFinite(cr.bottom))return;
    const delta=tr.top-cr.bottom-10;
    // Avoid arbitrary huge jumps when nodes are detached/recycled by React.
    if(Math.abs(delta)>2&&Math.abs(delta)<160){
      const bottom=parseFloat(node.style.bottom);
      if(Number.isFinite(bottom))node.style.bottom=Math.round(bottom-delta)+'px';
    }
  }
  function jdw519GapAudit(){
    const results=[];
    for(const e of (data.items||[]).slice(-8)){
      const card=badgeMap.get(e.element),source=e.element,target=jdw519VisibleBubble(e);
      if(!card||!target?.isConnected)continue;
      const sr=source.getBoundingClientRect(),br=target.getBoundingClientRect(),cr=card.getBoundingClientRect();
      const slot=jdw518Slots.get(source),owner=jdw520SlotAnchors.get(source);
      const cardSpace=slot ? Math.round(slot.getBoundingClientRect().height) : Math.round(parseFloat(getComputedStyle(e.visualElement||source).marginTop)||0);
      results.push(`${e.role==='user'?'用户':'AI 助手'} ${e.via}：气泡偏移=${Math.round(br.top-sr.top)}px，卡片间距=${Math.round(br.top-cr.bottom)}px，单槽=${slot?'是':'否'}，后备=${source.hasAttribute('data-jdw518-fallback')||e.visualElement?.hasAttribute('data-jdw518-fallback')?'是':'否'}，父布局=${getComputedStyle(source.parentElement).display}，槽位层级=${owner?.depth??'无'}，槽位流=${owner?.flow||'无'}，占位高度=${cardSpace}px`);
    }
    return results.length?results.join('\n'):'当前无可量测的可见消息';
  }
  function paintBadge(e,y,x,width,anchor){
    const id=e.element;
    const plaque=e.role==='assistant'&&cfg.showPlaque;
    // Reuse the SAME two toggles: when both identity + status are enabled,
    // show a full You card. If status is off, keep the tiny legacy badge.
    const userCard=e.role==='user'&&cfg.showPlaque&&cfg.showAvatars;
    const klass=plaque?'jdw55-plaque':userCard?'jdw514-user-card':'badge '+e.role;
    let node=badgeMap.get(id);
    if(node && node.className!==klass){
      node.remove();badgeMap.delete(id);node=null;
    }
    if(!node){
      node=document.createElement(plaque?'section':'div');node.className=klass;
      if(plaque){
        node.innerHTML='<div class="jdw56-portrait"><img alt="AI 助手头像"></div><div class="jdw56-rail"><div class="jdw55-top"><div class="jdw55-headings"><b class="jdw55-person-name"></b><span class="jdw55-subline"></span></div></div><div class="jdw55-chips"><span class="jdw55-clock"></span><span class="jdw55-days"></span></div><div class="jdw55-footer"></div></div>';
      }else if(userCard){
        node.innerHTML='<div class="jdw514-user-rail"><b class="jdw514-user-name"></b><span class="jdw514-user-subline"></span><div class="jdw514-user-chips"><span class="jdw514-clock"></span><span class="jdw514-days"></span></div><div class="jdw514-user-footer"></div></div><div class="jdw514-user-portrait"><img alt="用户表情头像"></div>';
      }else{
        const pic=document.createElement('img');pic.alt='';
        const label=document.createElement('span');label.className='name';
        node.append(pic,label);
      }
      badges.append(node);badgeMap.set(id,node);
    }
    node.style.left=Math.round(x)+'px';
    if(plaque){
      // Anchor the bottom to the message; narrow columns may make the card taller.
      node.style.top='auto';
      node.style.bottom=Math.round(innerHeight-(anchor||e.element).getBoundingClientRect().top+10)+'px';
      node.style.width=Math.round(width)+'px';
      const saved=archiveFor(e),scene=saved.scene,clock=beijingClock(saved.ts);
      node.dataset.mood=scene.mood;node.dataset.hideIdentity=cfg.showAvatars?'no':'yes';
      node.dataset.sceneSource=scene.authored?'authored':'local';
      if(scene.palette){
        node.style.background=scene.palette.gradient;
        node.style.borderColor=scene.palette.border;
        node.style.setProperty('--jd55-ink',scene.palette.ink);
        node.style.setProperty('--jd55-muted',scene.palette.muted);
        node.style.setProperty('--jd55-chip',scene.palette.chip);
      }else{
        node.style.background='';node.style.borderColor='';
        for(const prop of ['--jd55-ink','--jd55-muted','--jd55-chip'])node.style.removeProperty(prop);
      }
      const img=node.querySelector('img');const currentFace=faceSource(e,scene.mood,scene.assistantAvatar);if(img.getAttribute('src')!==currentFace)img.src=currentFace;
      const caption=node.querySelector('.jdw55-person-name');
      const parts=cfg.assistantName.split(' · ');
      if(parts.length>=2){
        const em=document.createElement('em');em.textContent=parts.slice(1).join(' · ');
        caption.replaceChildren(document.createTextNode(parts[0]+' · '),em,document.createTextNode(' ♡'));
      }else caption.textContent=cfg.assistantName+' ♡';
      node.querySelector('.jdw55-subline').textContent=scene.note;
      node.querySelector('.jdw55-clock').textContent=clock.time;
      node.querySelector('.jdw55-days').textContent=clock.days;
      const statusLine=node.querySelector('.jdw55-footer');
      statusLine.textContent=scene.line;
      // The first short phrase stays in the sealed scene metadata, not in the UI.
    }else if(userCard){
      const top=(anchor||e.element).getBoundingClientRect().top;
      node.style.top='auto';
      node.style.bottom=Math.round(innerHeight-top+10)+'px';
      node.style.width=Math.round(width)+'px';
      const record=userCardFor(e),scene=record.scene;
      const theme=COLORS[cfg.preset];
      const baseFrom=mixColor(theme.userTo,'#FFFFFF',.29);
      const baseTo=mixColor(theme.userFrom,'#FFFFFF',.21);
      let ink;
      if(scene.palette){
        node.style.background=scene.palette.gradient;
        node.style.borderColor=scene.palette.border;
        ink=scene.palette.ink;
        node.style.setProperty('--jd514-muted',scene.palette.muted);
        node.style.setProperty('--jd514-chip',scene.palette.chip);
      }else{
        const accent={joy:'#E75BA6',affection:'#CC73AC',fierce:'#D75D7A',soft:'#A8BFD8',
          sleepy:'#ACB2D8',build:'#7B93C5',layout:'#AD8FC8',face:'#C79AD0',
          creative:'#B59AE0',release:'#88B8C4',wonder:'#9AADD5',daily:'#D5ABD2'}[scene.mood]||'#D5ABD2';
        const from=mixColor(baseFrom,accent,.13),to=mixColor(baseTo,accent,.16);
        node.style.background=`linear-gradient(116deg,${from},${mixColor(from,to,.52)} 55%,${to})`;
        node.style.borderColor=mixColor(to,'#FFFFFF',.50);
        ink=readableInk(to,.97);
        node.style.setProperty('--jd514-muted',mixColor(ink,to,.27));
        node.style.setProperty('--jd514-chip',rgba('#FFFFFF',.68));
      }
      node.style.setProperty('--jd514-ink',ink);
      const authored=authoredUserFaces.get(e.element);
      const img=node.querySelector('img');
      const currentFace=faceSource(e,null,authored);
      const chosen=userExpressionSlot(e,authored);
      if(img.getAttribute('src')!==currentFace)img.src=currentFace;
      img.alt=cfg.userName+' · '+(faceLabels.user[chosen]||'表情头像');
      const caption=node.querySelector('.jdw514-user-name');
      const nameParts=cfg.userName.split(' · ');
      if(nameParts.length>=2){
        const em=document.createElement('em');em.textContent=nameParts.slice(1).join(' · ');
        caption.replaceChildren(document.createTextNode(nameParts[0]+' · '),em,document.createTextNode(' ♡'));
      }else caption.textContent=cfg.userName+' ♡';
      const when=beijingClock(record.ts);
      node.querySelector('.jdw514-user-subline').textContent=scene.note;
      node.querySelector('.jdw514-clock').textContent=when.time;
      node.querySelector('.jdw514-days').textContent=when.days;
      const statusLine=node.querySelector('.jdw514-user-footer');
      statusLine.textContent=scene.line;
      // You displays her second status phrase, aligned with Assistant.
      node.dataset.faceSlot=chosen;
      node.dataset.sceneSource=scene.authored?'authored':'local';
    }else{
      node.style.bottom='auto';node.style.top=Math.round(y)+'px';
      const img=node.querySelector('img');const altScene=e.role==='assistant'?archiveFor(e).scene:null;const currentFace=faceSource(e,altScene?.mood,e.role==='assistant'?altScene?.assistantAvatar:authoredUserFaces.get(e.element));if(img.getAttribute('src')!==currentFace)img.src=currentFace;
      node.querySelector('.name').textContent=e.role==='assistant'?cfg.assistantName:cfg.userName;
    }
    return id;
  }
  // v5.18 Android: ONE normal-flow slot reserves space for ONE floating status
  // card. Legacy v5.16/5.17 margins caused inconsistent layouts when ChatGPT
  // changed the message's innermost wrapper or when user bubbles were split.
  // The original text / copy / edit DOM remains untouched. Slots contain no text.
  const jdw518Slots=new Map();
  const jdw520SlotAnchors=new WeakMap();
  function jdw518NeedBadge(e){
    return cfg.enabled&&(cfg.showPlaque||cfg.showAvatars) &&
      (e.role==='assistant' || (e.role==='user'&&cfg.showAvatars));
  }
  // v5.20 (private upstream): In Firefox's legacy user DOM, the direct parent is often
  // display:contents. Such a parent creates NO box, but its children still
  // participate in an ancestor's layout. Rejecting it forced the user bubble
  // into a dynamic margin fallback (53px on the user's Android diagnostics).
  // Walk out of display:contents and any row/grid wrappers, then insert ONE
  // normal-flow spacer before the smallest safe ancestor in a block/column
  // context. Never touch the message text or change React's element hierarchy.
  function jdw520SlotLocation(e){
    let before=e.element;
    if(!before?.isConnected)return null;
    for(let depth=0;depth<9;depth++){
      const parent=before.parentElement;
      if(!parent||parent===document.body||parent===document.documentElement)return null;
      if(before.matches?.('main,[role="main"],#thread,#root,#__next,#app,[data-testid="conversation-panel"]'))return null;
      if(before!==e.element && before.querySelector?.('[data-message-author-role="assistant"], [data-conversation-role="assistant"]') && e.role==='user')return null;
      if(parent.closest('button,[role="button"],[contenteditable="true"]'))return null;
      const css=getComputedStyle(parent);
      const display=css.display;
      const horizontal=/^(inline-)?flex$/.test(display)&&!css.flexDirection.startsWith('column');
      const unsafe=horizontal || display.includes('grid') || ['inline','inline-block','contents','table','table-row','table-cell','none'].includes(display);
      if(!unsafe){
        return {parent,before,depth,flow:display};
      }
      // Do not promote above the conversation area or into shared content.
      before=parent;
    }
    return null;
  }
  function jdw518RemoveSlot(source){
    const previous=jdw518Slots.get(source);
    if(previous){previous.remove();jdw518Slots.delete(source);}
    const old=jdw520SlotAnchors.get(source);
    if(old?.target && old.target!==source){
      old.target.removeAttribute?.('data-jdw518-fallback');
      old.target.style?.removeProperty?.('--jdw518-space');
    }
    jdw520SlotAnchors.delete(source);
    source?.removeAttribute?.('data-jdw518-fallback');
    source?.style?.removeProperty?.('--jdw518-space');
  }
  function jdw518PrepareSlots(items){
    if(!JDW_MOBILE||innerWidth>720)return;
    const active=new Set();
    for(const e of items){
      if(!jdw518NeedBadge(e))continue;
      const source=e.element;
      active.add(source);
      const target=e.visualElement||source;
      source.style.removeProperty('--jdw516-gap');
      if(e.visualElement)e.visualElement.style.removeProperty('--jdw516-gap');
      delete source.dataset.jdw517GapOwner;
      // Remove stale fallback from previous scans, even when the position owner
      // changes from original user text to its visual-only split bubbles.
      source.removeAttribute('data-jdw518-fallback');
      target.removeAttribute('data-jdw518-fallback');
      const loc=jdw520SlotLocation(e);
      if(!loc){
        jdw518RemoveSlot(source);
        target.setAttribute('data-jdw518-fallback','yes');
        jdw520SlotAnchors.set(source,{target,depth:-1,flow:'fallback'});
        continue;
      }
      // The source itself must never have the fallback margin if a slot exists.
      source.style.removeProperty('--jdw518-space');
      if(target!==source)target.style.removeProperty('--jdw518-space');
      let slot=jdw518Slots.get(source);
      if(!slot){
        slot=document.createElement('div');
        slot.className='jdw518-gap-slot';
        slot.setAttribute('aria-hidden','true');
        slot.style.setProperty('--jdw518-space',cfg.showPlaque?'116px':'58px');
        jdw518Slots.set(source,slot);
      }
      if(slot.parentElement!==loc.parent || slot.nextElementSibling!==loc.before){
        loc.parent.insertBefore(slot,loc.before);
      }
      jdw520SlotAnchors.set(source,{target:slot,depth:loc.depth,flow:loc.flow});
    }
    for(const [source] of [...jdw518Slots]){
      if(!active.has(source)||!source.isConnected)jdw518RemoveSlot(source);
    }
  }
  function jdw518SyncGap(e,node){
    if(!JDW_MOBILE||innerWidth>720||!jdw518NeedBadge(e)||!node)return false;
    const h=Math.max(42,Math.ceil(node.getBoundingClientRect().height)+10);
    const wanted=h+'px';
    const slot=jdw518Slots.get(e.element);
    const target=slot || (e.visualElement||e.element);
    if(target.style.getPropertyValue('--jdw518-space')===wanted)return false;
    target.style.setProperty('--jdw518-space',wanted);
    return true;
  }
  function redraw(){
    pending=false;
    const items=findMessages();
    data.items=items;
    data.old=items.filter(e=>e.via.startsWith('legacy')).length;
    data.modern=items.length-data.old;
    if(items.length){clearConversationBackground(items);items.forEach(readAuthorState);markBodies(items);}
    renderUserSentences(items);
    jdw518PrepareSlots(items);
    // Pair each assistant's authored userAvatar with the immediately preceding
    // user turn. Until an authored reply exists, keep normal local heuristics.
    if(cfg.authoredState){
      for(let i=0;i<items.length;i++){
        const entry=items[i];if(entry.role!=='assistant')continue;
        const authored=readAuthorState(entry);if(!authored)continue;
        archiveFor(entry);
        for(let j=i-1;j>=0;j--){
          if(items[j].role==='user'){
            authoredUserFaces.set(items[j].element,authored.userAvatar);
            if(authored.userCard)authoredUserCards.set(items[j].element,authored.userCard);
            break;
          }
          if(items[j].role==='assistant')break;
        }
      }
    }
    revealWallpaperSurfaces();
    const active=new Set();
    let mobileGapChanged=false;
    if(cfg.enabled && (cfg.showAvatars || cfg.showPlaque)){
      for(const e of items){
        if(e.role==='user'&&!cfg.showAvatars)continue;
        const anchor=jdw519VisibleBubble(e);
        const rect=anchor.getBoundingClientRect(),crop=clipped(anchor);
        const plaque=e.role==='assistant'&&cfg.showPlaque;
        const userCard=e.role==='user'&&cfg.showPlaque&&cfg.showAvatars;
        const height=plaque||userCard?(innerWidth<=680?150:158):42;
        // Place header before the real message, not at the viewport edge.
        // When the parent scrolls away, the header disappears with it.
        const y=rect.top-height-10;
        if(rect.width<40 || y+height<Math.max(crop.top,0) || y>Math.min(crop.bottom,innerHeight))continue;
         if(plaque){
           const inset=JDW_MOBILE&&innerWidth<=720?7:12;
           const width=Math.max(180,Math.min(610,innerWidth-inset*2));
           const x=limit(rect.left,inset,Math.max(inset,innerWidth-width-inset));
           const key=paintBadge(e,y,x,width,anchor);
           active.add(key);
           jdw519SnapBadge(e,badgeMap.get(key));
           if(jdw518SyncGap(e,badgeMap.get(key)))mobileGapChanged=true;
        }else if(userCard){
          // Right-align to the visible message edge, independent of width.
           const inset=JDW_MOBILE&&innerWidth<=720?7:12;
           const width=Math.max(180,Math.min(610,innerWidth-inset*2));
           const right=limit(rect.right,inset+width,innerWidth-inset);
           const key=paintBadge(e,y,right-width,width,anchor);
           active.add(key);
           jdw519SnapBadge(e,badgeMap.get(key));
           if(jdw518SyncGap(e,badgeMap.get(key)))mobileGapChanged=true;
        }else{
          const x=limit(e.role==='assistant'?rect.left:rect.right,45,innerWidth-10);
          active.add(paintBadge(e,y,x,undefined,anchor));
        }
      }
    }
    for(const [key,node] of badgeMap) if(!active.has(key)){node.remove();badgeMap.delete(key);}
    // One extra layout pass after computing real card heights; then the CSS var is stable.
    if(mobileGapChanged)schedule();
    updateStatus();
  }
  function schedule(){if(!pending){pending=true;requestAnimationFrame(redraw);}}
  const THEME_FIELDS={colorMain:'main',colorMainTo:'mainTo',colorAFrom:'assistantFrom',colorATo:'assistantTo',colorUFrom:'userFrom',colorUTo:'userTo'};
  function themeUI(){
    const p=COLORS[cfg.preset],light=luminance(p.base)>.38;
    const darkText='#1B2B49',ink=light?darkText:'#F3F5FF',soft=light?'#50617D':'#B9CDEC';
    const panelA=light?mixColor(p.main,'#FFFFFF',.74):mixColor(p.main,'#05102A',.7);
    const panelB=light?mixColor(p.mainTo,'#FFFFFF',.83):mixColor(p.mainTo,'#06102A',.72);
    const ctl=light?mixColor(p.main,'#FFFFFF',.84):mixColor(p.main,'#071530',.58);
    const border=light?mixColor(p.main,'#647B98',.55):mixColor(p.mainTo,'#DBE4FF',.3);
    const accent=light?mixColor(p.main,'#193052',.25):mixColor(p.mainTo,'#FFFFFF',.22);
    themeSheet.textContent=`
      :host{--studio-accent:${accent};--studio-hairline:${border}77}
      #panel{background:linear-gradient(158deg,${panelA}F8,${panelB}FB)!important;
        color:${ink}!important;border:1px solid ${border}C8!important;
        box-shadow:0 19px 58px #0008!important}
      #launch{background:radial-gradient(circle at 28% 25%,${p.mainTo},${p.main} 62%,${p.base} 100%)!important;
        border:1px solid ${border}E6!important;box-shadow:0 6px 23px ${p.main}99,inset 0 1px 0 #FFFFFF55!important}
      #launch svg ellipse{stroke:${mixColor(p.mainTo,'#FFFFFF',.45)}!important}
      #launch svg circle{fill:${p.mainTo}!important;stroke:${mixColor(p.mainTo,'#FFFFFF',.72)}!important}
      #launch svg path{stroke:${mixColor(p.main,'#FFFFFF',.62)}!important}
      #jdw57-live-tip{background:linear-gradient(130deg,${panelA}F6,${panelB}F6)!important;
        border-color:${border}!important;color:${ink}!important}
      #jdw57-live-tip .station,#jdw57-live-tip .caption{color:${soft}!important}
      #jdw57-live-board{background:${ctl}!important;color:${soft}!important;border-color:${border}80!important}
      #jdw57-live-board strong{color:${ink}!important}
      #jdw57-live-board small,#panel small,#panel .hint,.eyebrow,.jdw59-title-mini{color:${soft}!important}
      #panel label,#panel h2,#panel h3,.jdw59-heading,#themeEdit summary{color:${ink}!important}
      #panel .btn{background:${ctl}!important;color:${ink}!important;border:1px solid ${border}A8!important}
      #panel .btn:hover{filter:brightness(${light ? .97 : 1.2})}
      #panel .btn.primary{background:${p.main}!important;color:#FFFFFF!important}
      #panel input[type="text"],#panel input[type="date"],#panel select,#panel textarea{background:${ctl}!important;
        color:${ink}!important;border-color:${border}A8!important}
      #panel input[type="range"],#panel input[type="checkbox"]{accent-color:${accent}!important}
      #preview{background:${ctl}!important;border-color:${border}A8!important}
      #preview .preview-bubble{background:linear-gradient(115deg,${rgba(p.assistantFrom,cfg.glass)},${rgba(p.assistantTo,cfg.glass)})!important;
        color:${readableInk(mixColor(p.assistantFrom,p.assistantTo,.4),cfg.glass)}!important}
      #preview .preview-row.user .preview-bubble{background:linear-gradient(110deg,${rgba(p.userFrom,cfg.glass)},${rgba(p.userTo,cfg.glass)})!important;
        color:${readableInk(p.userTo,cfg.glass)}!important}
      #status{background:${ctl}!important;color:${soft}!important;border-color:${border}66!important}
      #advanced,#themeEdit{border-color:${border}77!important}
      #panel .top{border-bottom-color:${border}55!important}
    `;
  }
  function readableInk(color,alpha=1){
    const mixed=mixColor('#E9EDF5',color,alpha);
    return luminance(mixed)>.33?'#1D2D46':'#FFFFFF';
  }
  function gradualCSS(){
    const p=COLORS[cfg.preset],a=cfg.glass,r=cfg.radius;
    const aStages=6,uStages=5;
    const lines=[];
    const roleSel='html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"]';
    for(let i=0;i<aStages;i++){
      const first=mixColor(p.assistantFrom,p.assistantTo,i/(aStages-1));
      const second=mixColor(p.assistantFrom,p.assistantTo,Math.min(1,(i+.63)/(aStages-1)));
      const ink=readableInk(first,a);
      const pre=`${roleSel} .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="${i}"]`;
      lines.push(`${pre}{background:linear-gradient(112deg,${rgba(first,a)},${rgba(second,a)})!important;color:${ink}!important;-webkit-text-fill-color:${ink}!important}`);
      lines.push(`${pre} :is(span,strong,b,em,p,li,h1,h2,h3,h4){color:${ink}!important;-webkit-text-fill-color:${ink}!important}`);
    }
    for(let i=0;i<uStages;i++){
      const first=mixColor(p.userFrom,p.userTo,i/(uStages-1));
      const second=mixColor(p.userFrom,p.userTo,Math.min(1,(i+.75)/(uStages-1)));
      const ink=readableInk(first,a);
      for(const selector of [`.jdw56-sentence[data-tone="${i}"]`,`.jdw55-user-line[data-jdw55-tone="${i}"]`]){
        lines.push(`html[data-jdw5-on="yes"] ${selector}{background:linear-gradient(110deg,${rgba(first,a)},${rgba(second,a)})!important;color:${ink}!important;-webkit-text-fill-color:${ink}!important}`);
      }
    }
    const gUser=`linear-gradient(112deg,${rgba(p.userFrom,a)},${rgba(p.userTo,a)})`;
    const fg=readableInk(mixColor(p.userFrom,p.userTo,.4),a);
    const gAssist=`linear-gradient(112deg,${rgba(p.assistantFrom,a)},${rgba(p.assistantTo,a)})`;
    const asFg=readableInk(p.assistantFrom,a);
    lines.push(`html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] :is([data-user-message-bubble],.user-message-bubble-color,.jdw5-body[data-jdw5-role="user"]):not(.jdw56-original){background:${gUser}!important;color:${fg}!important;-webkit-text-fill-color:${fg}!important}`);
    lines.push(`html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw5-body[data-jdw5-role="user"]:not(.jdw56-original) :is(span,p,strong,em){color:${fg}!important;-webkit-text-fill-color:${fg}!important}`);
    lines.push(`html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="whole"] .jdw5-body[data-jdw5-role="assistant"]{background:${gAssist}!important;color:${asFg}!important;-webkit-text-fill-color:${asFg}!important}`);
    lines.push(`html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="whole"] .jdw5-body[data-jdw5-role="assistant"] :is(p,span,strong,li){color:${asFg}!important;-webkit-text-fill-color:${asFg}!important}`);
    // Non-gradient mode is solid translucent glass for BOTH roles.
    const userSolid=rgba(p.userFrom,a),userInk=readableInk(p.userFrom,a);
    lines.push(`html[data-jdw5-on="yes"][data-jdw53-gradient="no"][data-jdw5-bubble="paragraph"] .jdw56-sentence{background:${userSolid}!important;color:${userInk}!important;-webkit-text-fill-color:${userInk}!important}`);
    lines.push(`html[data-jdw5-on="yes"][data-jdw53-gradient="no"][data-jdw5-bubble="paragraph"] .jdw55-user-line{background:${userSolid}!important;color:${userInk}!important;-webkit-text-fill-color:${userInk}!important}`);
    // Revert native ChatGPT bubbles when both roles' layout is OFF.
    lines.push(`html[data-jdw5-on="yes"][data-jdw5-bubble="off"] .jdw5-body[data-jdw5-role="user"]{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important}`);
    lines.push(`html[data-jdw5-on="yes"][data-jdw5-bubble="off"] :is([data-user-message-bubble],.user-message-bubble-color){background:var(--user-message-bubble-color,#E9EDF5)!important;color:var(--text-primary,#23334E)!important;-webkit-text-fill-color:initial!important;box-shadow:none!important}`);
    return lines.join('\n');
  }
  function themeList(){
    const parent=$('#themeList');parent.replaceChildren();
    for(const [id,p] of Object.entries(COLORS)){
      const b=document.createElement('button');b.className='btn';b.type='button';b.dataset.preset=id;
      const chip=document.createElement('span');chip.className='jdw59-mini-dot';chip.style.background=`linear-gradient(125deg,${p.main},${p.mainTo})`;
      const title=document.createElement('span');title.textContent=p.title;
      b.append(chip,title);b.setAttribute('aria-pressed',String(id===cfg.preset));
      b.addEventListener('click',()=>{cfg.preset=id;notice='已切换 '+p.title;save();});parent.append(b);
    }
  }
  function syncThemeEditor(){
    const p=COLORS[cfg.preset];
    $('#themeName').value=p.title;
    for(const [id,key] of Object.entries(THEME_FIELDS))$('#'+id).value=validHex(p[key])?p[key]:'#6478AB';
    for(const [slot,from,to] of [
      ['sampleMain','main','mainTo'],['sampleAssistant','assistantFrom','assistantTo'],['sampleUser','userFrom','userTo']]){
      $('#'+slot).style.background=`linear-gradient(110deg,${p[from]},${p[to]})`;
    }
    jdw517RefreshButtons();
    $('#deleteTheme').disabled=cfg.preset==='night';
    $('#deleteTheme').title=cfg.preset==='night'?'极夜深海蓝不可删除':'';
  }
  function updatePaletteField(key,value){
    if(!validHex(value))return;
    value=value.toUpperCase();
    const cur=COLORS[cfg.preset];
    if(key==='main'){
      const derived=paletteFromMain(value,cur.title);
      // Main color always proposes a related gradient, but the four individual
      // bubble endpoints remain fully editable afterwards.
      COLORS[cfg.preset]={...cur,...derived};
    }else COLORS[cfg.preset]={...cur,[key]:value};
    storeThemes();notice='主题渐变已更新';save();
  }
  // v5.17 (mobile upstream): full-spectrum HSV picker avoids Android Firefox's coarse native swatches.
  // Keep the existing six <input type=color> values and saved palette schema intact.
  const JDW517_COLOR_LABELS={colorMain:'主色',colorMainTo:'过渡色',colorAFrom:'AI · 深',
    colorATo:'AI · 浅',colorUFrom:'用户 · 深',colorUTo:'用户 · 浅'};
  const jdw517Picker=$('#jdw517-picker');
  const jdw517SV=$('#jdw517-sv'),jdw517Hue=$('#jdw517-hue');
  const jdw517Hex=$('#jdw517-hex'),jdw517Target=$('#jdw517-target');
  let jdw517Field='colorMain',jdw517H=220,jdw517S=.8,jdw517V=.9;
  let jdw517CommitTimer=null,jdw517Active=false,jdw517PrevExpanded=false;
  const jdw517ColorBtns={};
  function jdw517HexToHSV(hex){
    const n=[1,3,5].map(i=>parseInt(hex.slice(i,i+2),16)/255);
    const [r,g,b]=n,max=Math.max(...n),min=Math.min(...n),delta=max-min;
    let hue=0;
    if(delta){
      if(max===r)hue=((g-b)/delta)%6;
      else if(max===g)hue=(b-r)/delta+2;
      else hue=(r-g)/delta+4;
      hue=(hue*60+360)%360;
    }
    return [hue,max?delta/max:0,max];
  }
  function jdw517HSVtoHex(h,s,v){
    h=((h%360)+360)%360;s=limit(s,0,1);v=limit(v,0,1);
    const c=v*s,x=c*(1-Math.abs((h/60)%2-1)),m=v-c;
    const seq=h<60?[c,x,0]:h<120?[x,c,0]:h<180?[0,c,x]:h<240?[0,x,c]:h<300?[x,0,c]:[c,0,x];
    return '#'+seq.map(a=>Math.round((a+m)*255).toString(16).padStart(2,'0')).join('').toUpperCase();
  }
  function jdw517DrawPicker(){
    const value=jdw517HSVtoHex(jdw517H,jdw517S,jdw517V);
    jdw517SV.style.setProperty('--hue',String(jdw517H));
    jdw517SV.querySelector('.jdw517-cursor').style.left=(jdw517S*100)+'%';
    jdw517SV.querySelector('.jdw517-cursor').style.top=((1-jdw517V)*100)+'%';
    jdw517Hue.querySelector('.jdw517-cursor').style.left=(jdw517H/360*100)+'%';
    jdw517Hue.setAttribute('aria-valuenow',String(Math.round(jdw517H)));
    jdw517Hex.value=value;
    $('#jdw517-picked').style.setProperty('--jdw517-picked',value);
    const preview=jdw517ColorBtns[jdw517Field];
    if(preview){preview.style.setProperty('--jdw517-color',value);preview.querySelector('span:last-child').textContent=value;}
    return value;
  }
  function jdw517Flush(){
    if(jdw517CommitTimer){clearTimeout(jdw517CommitTimer);jdw517CommitTimer=null;}
    if(!jdw517Active)return; // Opening the palette must NOT change an existing theme.
    const value=jdw517HSVtoHex(jdw517H,jdw517S,jdw517V);
    const key=THEME_FIELDS[jdw517Field];
    if(COLORS[cfg.preset][key]!==value)updatePaletteField(key,value);
  }
  function jdw517QueueSave(final=false){
    jdw517DrawPicker();
    if(final){jdw517Flush();return;}
    if(!jdw517CommitTimer)jdw517CommitTimer=setTimeout(jdw517Flush,125);
  }
  function jdw517OpenPicker(id){
    if(!Object.hasOwn(THEME_FIELDS,id))return;
    jdw517Flush();
    if(!jdw517Active)jdw517PrevExpanded=jdw517Expanded;
    jdw517Active=true;
    jdw517Field=id;
    const hex=COLORS[cfg.preset][THEME_FIELDS[id]];
    [jdw517H,jdw517S,jdw517V]=jdw517HexToHSV(hex);
    jdw517Target.textContent=JDW517_COLOR_LABELS[id]+' · 连续调色盘';
    jdw517Picker.hidden=false;
    for(const [k,btn] of Object.entries(jdw517ColorBtns))btn.setAttribute('aria-pressed',String(k===id));
    jdw517DrawPicker();
    // The bigger drawing surface is easier to use while the spectrum is open.
    jdw517Expanded=true;
    $('#panel').dataset.expanded='yes';
    jdw518SizeButton();
    jdw516QueueViewport();
    // Scroll inside the workshop only, leaving ChatGPT conversation scroll untouched.
    requestAnimationFrame(()=>{
      const panel=$('#panel');
      const rel=jdw517Picker.getBoundingClientRect().top-panel.getBoundingClientRect().top;
      panel.scrollTop=Math.max(0,panel.scrollTop+rel-10);
    });
  }
  function jdw517ClosePicker(){
    jdw517Flush();jdw517Picker.hidden=true;jdw517Active=false;
    for(const btn of Object.values(jdw517ColorBtns))btn.setAttribute('aria-pressed','false');
    if(!jdw517PrevExpanded){
      jdw517Expanded=false;
      $('#panel').dataset.expanded='no';
      jdw518SizeButton();
      jdw516QueueViewport();
    }
  }
  for(const id of Object.keys(THEME_FIELDS)){
    const input=$('#'+id);
    // Retain its value for the legacy theme model but never invoke Android native chooser.
    input.disabled=true;input.tabIndex=-1;input.setAttribute('aria-hidden','true');
    const btn=document.createElement('button');btn.className='jdw517-color-button';btn.type='button';
    btn.setAttribute('aria-pressed','false');btn.setAttribute('aria-label',JDW517_COLOR_LABELS[id]+' 选择颜色');
    btn.innerHTML='<span class="chip" aria-hidden="true"></span><span></span>';
    input.after(btn);jdw517ColorBtns[id]=btn;
    btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();jdw517OpenPicker(id);});
  }
  function jdw517RefreshButtons(){
    const p=COLORS[cfg.preset];
    for(const [id,key] of Object.entries(THEME_FIELDS)){
      const c=p[key],btn=jdw517ColorBtns[id];
      btn.style.setProperty('--jdw517-color',c);
      btn.querySelector('span:last-child').textContent=c;
    }
  }
  function jdw517Pointer(el,kind){
    let dragging=false;
    function update(e){
      const r=el.getBoundingClientRect();if(!r.width||!r.height)return;
      const nx=limit((e.clientX-r.left)/r.width,0,1);
      if(kind==='hue')jdw517H=nx*360;
      else {jdw517S=nx;jdw517V=1-limit((e.clientY-r.top)/r.height,0,1);}
      jdw517QueueSave(false);
    }
    el.addEventListener('pointerdown',e=>{
      if(e.button!==0)return;e.preventDefault();dragging=true;
      el.setPointerCapture?.(e.pointerId);update(e);
    });
    el.addEventListener('pointermove',e=>{if(dragging)update(e);});
    const done=e=>{if(!dragging)return;dragging=false;update(e);jdw517QueueSave(true);};
    el.addEventListener('pointerup',done);el.addEventListener('pointercancel',done);
    el.addEventListener('keydown',e=>{
      if(!['ArrowUp','ArrowDown','ArrowLeft','ArrowRight'].includes(e.key))return;
      e.preventDefault();const k=e.shiftKey?.05:.01;
      if(kind==='hue')jdw517H=((jdw517H+(e.key==='ArrowLeft'?-6:6))+360)%360;
      else if(e.key==='ArrowLeft')jdw517S=limit(jdw517S-k,0,1);
      else if(e.key==='ArrowRight')jdw517S=limit(jdw517S+k,0,1);
      else if(e.key==='ArrowUp')jdw517V=limit(jdw517V+k,0,1);
      else jdw517V=limit(jdw517V-k,0,1);
      jdw517QueueSave(true);
    });
  }
  jdw517Pointer(jdw517SV,'sv');jdw517Pointer(jdw517Hue,'hue');
  jdw517Hex.addEventListener('change',()=>{
    const raw=jdw517Hex.value.trim();const hex=raw.startsWith('#')?raw:'#'+raw;
    if(!validHex(hex)){jdw517DrawPicker();return;}
    [jdw517H,jdw517S,jdw517V]=jdw517HexToHSV(hex);
    jdw517QueueSave(true);
  });
  $('#jdw517-picker-close').addEventListener('click',jdw517ClosePicker);
  function addTheme(){
    if(Object.keys(COLORS).length>=16){notice='最多保留 16 套主题';updateStatus();return;}
    let id='custom_'+Date.now();
    while(COLORS[id])id='custom_'+(Number(id.slice(7))+1);
    const count=Object.keys(COLORS).filter(x=>x.startsWith('custom_')).length+1;
    COLORS[id]=paletteFromMain('#7964C6','自定义 '+count);
    cfg.preset=id;storeThemes();$('#themeEdit').open=true;notice='新主题已创建';save();
  }
  function applyTheme(){
    const p=COLORS[cfg.preset],dark=luminance(p.base)<.38;
    document.documentElement.dataset.jdw5On=cfg.enabled?'yes':'no';
    document.documentElement.dataset.jdw5Bubble=cfg.bubbleMode;
    document.documentElement.dataset.jdw5Mode=cfg.avatarMode;
    document.documentElement.dataset.jdw5Avatars=cfg.showAvatars?'yes':'no';
    document.documentElement.dataset.jdw53Gradient=cfg.gradientBubbles&&cfg.bubbleMode!=='off'?'yes':'no';
    document.documentElement.dataset.jdw53Plaque=cfg.showPlaque?'yes':'no';
    const bubble=rgba(p.assistantFrom,cfg.glass);
    const user=rgba(p.userFrom,cfg.glass);
    const sidebar=rgba(p.sidebar,dark?.97:.92);
    const transparent=rgba(p.chrome,dark?.85:.9);
    const composerBG=dark?'rgba(248,251,255,.97)':'rgba(255,255,255,.96)';
    const wallpaperOn=cfg.enabled && cfg.showWallpaper && safeImage(wallpaper);
    const canvasInk=wallpaperOn?'#23334E':p.text;
    // An opaque ChatGPT sheet used to cover the image. Draw an adjustable
    // WHITE *background layer* above wallpaper, not opacity on chat text.
    const whiteVeil=rgba('#FFFFFF',cfg.wallpaperVeil);
    bg.style.display=cfg.enabled?'block':'none';
    bg.style.backgroundColor=p.base;
    // The image stays put. The lightweight CSS variable is all that changes
    // while the white-overlay slider is being dragged.
    document.documentElement.style.setProperty('--jdw54-veil',whiteVeil);
    bg.style.backgroundImage=wallpaperOn
      ? `linear-gradient(var(--jdw54-veil),var(--jdw54-veil)),${imgCSS(wallpaper)}`
      : `radial-gradient(circle at 83% 10%,${rgba(p.accent,dark?.25:.20)},transparent 54%),radial-gradient(circle at 16% 85%,${rgba(p.secondary,.77)},transparent 53%),linear-gradient(180deg,${p.base},${p.secondary})`;
    document.documentElement.style.setProperty('--jdw5-wallpaper-layer',wallpaperOn?imgCSS(wallpaper):bg.style.backgroundImage);
    document.documentElement.style.setProperty('--jdw5-wallpaper-base',p.base);
    document.documentElement.dataset.jdw5Paper=wallpaperOn?'yes':'no';
    const avatarCSS=cfg.showAvatars&&cfg.avatarMode==='css'&&!cfg.showPlaque?`
      html[data-jdw5-on="yes"][data-jdw5-mode="css"] .jdw5-body::before{
        content:""!important;position:absolute!important;width:38px!important;height:38px!important;
        top:-44px!important;left:0!important;border:2px solid ${p.border}!important;
        background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important;border-radius:100%!important;z-index:3!important;}
      html[data-jdw5-on="yes"][data-jdw5-mode="css"] .jdw5-body::after{
        position:absolute!important;top:-38px!important;left:46px!important;
        border-radius:8px!important;padding:2px 7px!important;font:700 12px/24px system-ui!important;
        background:${transparent}!important;color:${p.muted}!important;white-space:nowrap!important;}
      html[data-jdw5-on="yes"][data-jdw5-mode="css"] .jdw5-body[data-jdw5-role="assistant"]::before{background-image:${imgCSS(avatars.assistant)}!important}
      html[data-jdw5-on="yes"][data-jdw5-mode="css"] .jdw5-body[data-jdw5-role="user"]::before{background-image:${imgCSS(avatars.user)}!important}
      html[data-jdw5-on="yes"][data-jdw5-mode="css"] .jdw5-body[data-jdw5-role="assistant"]::after{content:${JSON.stringify(cfg.assistantName)}!important}
      html[data-jdw5-on="yes"][data-jdw5-mode="css"] .jdw5-body[data-jdw5-role="user"]::after{content:${JSON.stringify(cfg.userName)}!important}
      `:'';
    stylesheet.textContent=`
            html[data-jdw5-on="yes"]{--text-primary:#1D3049!important;--text-secondary:#556980!important;
         --main-surface-primary:transparent!important;--main-surface-secondary:transparent!important;
        --sidebar-surface-primary:${sidebar}!important;--sidebar-surface-secondary:${sidebar}!important;
        --jdw5-ink:${p.text};--jdw5-bubble:${bubble};}
      html[data-jdw5-on="yes"],html[data-jdw5-on="yes"] body{
        background-color:${p.base}!important;color:${p.text}!important;}
      html[data-jdw5-on="yes"] body>#jdw5-wallpaper {z-index:0!important;}
       /* Per-message spacing instead of one global top plaque. */
      /* v5.3: only actual conversation APP SHELLS can be cleared/painted. */
       html[data-jdw5-on="yes"] body [data-jdw53-shell]{
         background-color:transparent!important;background-image:none!important;
       }
       /* v0.3.0 Android FIX: #thread is a LONG scroll-content element.
          When a conversation mounts, its box may grow thousands of pixels high.
          In Firefox Android, background-size:cover on that root can scale the
          wallpaper to the THREAD's height (background-attachment:fixed may be
          ignored on non-root scrollers). This causes the sudden zoom/blur.
          The existing #jdw5-wallpaper element is ALREADY fixed to the viewport,
          has background-size:cover and carries the white veil. Draw image ONLY
          there; leave all identified chat-shell elements transparent so the
          fixed layer shines through, regardless of message count or scroll.
          Keep the backdrop marker for diagnostics, but never paint a second img.
        */
       html[data-jdw5-on="yes"][data-jdw5-paper="yes"] body [data-jdw53-backdrop]{
         background-color:transparent!important;
         background-image:none!important;
         background-attachment:scroll!important;
         background-size:auto!important;
       }
       html[data-jdw5-on="yes"] body [data-jdw53-backdrop]:is(pre,code,[data-testid*="code"]){background-image:none!important;}
      /* Android fix: never create stacking contexts on ALL direct app children.
         Doing so can put native sidebar/model popovers behind a transparent app shell. */
      html[data-jdw5-on="yes"] [data-jdw5-clear]{background-color:transparent!important;
        background-image:none!important;}
      html[data-jdw5-on="yes"] :where(main,[role="main"],#thread,#root,#__next,#app,[data-testid="conversation-panel"]){
        background-color:transparent!important;background-image:none!important;}
      html[data-jdw5-on="yes"] :is(main,[role="main"],#thread) :is([class*="bg-token-main-surface"], [class*="bg-white"], [class*="bg-\[white"], [class*="bg-\[\#fff"]) {
        background-color:transparent!important;}
            html[data-jdw5-on="yes"] :is(${SIDEBAR}) {background:${sidebar}!important;backdrop-filter:blur(15px)!important;
         --text-primary:${p.text}!important;--text-secondary:${p.muted}!important;
         border-right:1px solid ${rgba(p.border,.2)}!important;color:${p.text}!important;}
      html[data-jdw5-on="yes"] :is(${SIDEBAR}) a {color:${p.muted}!important;}
      html[data-jdw5-on="yes"] :is(main,[role="main"]) :is(.text-token-text-primary,[class*="text-token-text-primary"]){color:${canvasInk}!important;}
      /* Native model/reasoning popovers are portaled OUTSIDE main. Do not inherit white text. */
      html[data-jdw5-on="yes"] :is([role="menu"],[role="listbox"],[role="dialog"], [data-radix-popper-content-wrapper]){
        --text-primary:#1D3049!important;--text-secondary:#56677D!important;
      }
      html[data-jdw5-on="yes"] :is([role="menu"],[role="listbox"],[role="dialog"]) :is(.text-token-text-primary,[class*="text-token-text-primary"]){
        color:#1D3049!important;-webkit-text-fill-color:#1D3049!important;
      }
      html[data-jdw5-on="yes"] :is([role="menu"],[role="listbox"]):not([data-jdw517-keep-dark="yes"]){
        color:#1D3049!important;
      }
      html[data-jdw5-on="yes"] :is(#page-header,header[data-testid="header"]) {background:${transparent}!important;
        border-bottom:1px solid ${rgba(p.border,.23)}!important;backdrop-filter:blur(15px)!important;}
      html[data-jdw5-on="yes"] :is(form[data-chatgpt-composer],form:has(#prompt-textarea),#composer-background){
        background:${composerBG}!important;color:#142D60!important;
        border:1px solid ${rgba(p.border,.45)}!important;border-radius:20px!important;backdrop-filter:blur(19px)!important;}
      html[data-jdw5-on="yes"] :is([data-chatgpt-composer] [contenteditable="true"],[data-chatgpt-composer] [role="textbox"],#prompt-textarea){
        color:${p.text}!important;background:transparent!important;}
      /* v5.2: Keep the COMPOSER legible on its light background, regardless of page theme.
         Override v5's inherited --text-primary, including ProseMirror/Lexical child text. */
      html[data-jdw5-on="yes"] :is(form[data-chatgpt-composer],form:has(#prompt-textarea),#composer-background,[data-testid="composer"]){
        --text-primary:#142D60!important;
        --text-secondary:#526B91!important;
      }
      html[data-jdw5-on="yes"] :is(
        #prompt-textarea,
        [data-chatgpt-composer] [contenteditable="true"],
        [data-chatgpt-composer] [role="textbox"],
        form:has(#prompt-textarea) [contenteditable="true"],
        #composer-background [contenteditable="true"],
        [data-testid="composer"] [contenteditable="true"],
        [data-testid="composer"] textarea
      ){
        color:#142D60!important;
        -webkit-text-fill-color:#142D60!important;
        caret-color:#4A6CFF!important;
      }
      html[data-jdw5-on="yes"] :is(
        #prompt-textarea,
        [data-chatgpt-composer] [contenteditable="true"],
        form:has(#prompt-textarea) [contenteditable="true"],
        #composer-background [contenteditable="true"],
        [data-testid="composer"] [contenteditable="true"]
      ) :is(p,span,strong,em,div,[class*="text-token-text-primary"]){
        color:#142D60!important;
        -webkit-text-fill-color:#142D60!important;
      }
      html[data-jdw5-on="yes"] :is(
        #prompt-textarea,
        [data-chatgpt-composer] [contenteditable="true"],
        #composer-background [contenteditable="true"],
        [data-testid="composer"] [contenteditable="true"]
      ) :is(p[data-placeholder],p.is-editor-empty,p.is-empty,[data-placeholder])::before,
      html[data-jdw5-on="yes"] :is(#prompt-textarea,[data-chatgpt-composer] [contenteditable="true"],[data-testid="composer"] [contenteditable="true"])::placeholder{
        color:#526B91!important;
        -webkit-text-fill-color:#526B91!important;
        opacity:1!important;
      }
      html[data-jdw5-on="yes"] :is(#prompt-textarea,form[data-chatgpt-composer] textarea)::selection{
        color:#142D60!important;
        background:#B9CCFF!important;
      }
      html[data-jdw5-on="yes"] .jdw5-body{position:relative!important;overflow:visible!important;max-width:100%;}
       html[data-jdw5-on="yes"][data-jdw53-plaque="yes"] .jdw5-body[data-jdw5-role="assistant"]{margin-top:178px!important;}
       html[data-jdw5-on="yes"][data-jdw53-plaque="no"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="assistant"]{margin-top:57px!important;}
      /* Normal user message reserves vertical room for the expressive card.
         With status off, fall back to the original compact nickname badge. */
      html[data-jdw5-on="yes"][data-jdw53-plaque="yes"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="user"]{margin-top:178px!important;}
      html[data-jdw5-on="yes"][data-jdw53-plaque="no"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="user"]{margin-top:59px!important;}
      html[data-jdw5-on="yes"] .jdw5-body[data-jdw5-role="assistant"]{color:${canvasInk}!important;}
      html[data-jdw5-on="yes"] .jdw5-body[data-jdw5-role="assistant"] :is(p,li,h1,h2,h3,strong){color:inherit;}
      html[data-jdw5-on="yes"] .jdw5-body[data-jdw5-role="assistant"] a{color:${dark?'#ADC4FF':'#3459B7'}!important;}
      html[data-jdw5-on="yes"][data-jdw5-bubble]:not([data-jdw5-bubble="off"]) .jdw5-body[data-jdw5-role="user"] {
        color:${p.userText}!important;background:${user}!important;border-radius:${cfg.radius}px!important;
        border:1px solid ${rgba(p.border,.32)}!important;box-shadow:0 3px 18px #0002!important;}
      html[data-jdw5-on="yes"] [data-user-message-bubble],
      html[data-jdw5-on="yes"] .user-message-bubble-color {
        background:${user}!important;color:${p.userText}!important;border-radius:${cfg.radius}px!important;}
      html[data-jdw5-on="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] > :is(p,ul,ol,blockquote,h2,h3) {
        width:fit-content;max-width:100%;background:${bubble}!important;border-radius:${cfg.radius}px!important;
        padding:10px 14px!important;margin:7px 0!important;border:1px solid ${rgba(p.border,.23)}!important;
        box-shadow:0 3px 16px #0002!important;overflow-wrap:anywhere;}
      html[data-jdw5-on="yes"][data-jdw5-bubble="paragraph"] .jdw5-body.jdw5-plain[data-jdw5-role="assistant"]{
        background:${bubble}!important;border-radius:${cfg.radius}px!important;padding:11px 15px!important;
        border:1px solid ${rgba(p.border,.22)}!important;}
      html[data-jdw5-on="yes"][data-jdw5-bubble="whole"] .jdw5-body[data-jdw5-role="assistant"]{
        background:${bubble}!important;border-radius:${cfg.radius}px!important;padding:13px 16px!important;
        border:1px solid ${rgba(p.border,.25)}!important;}
       html[data-jdw5-on="yes"] .jdw5-body pre,
       html[data-jdw5-on="yes"] .jdw5-body table {max-width:100%;overflow:auto;}
       /* Both gradients use progressively lighter tones between MESSAGE PARAGRAPHS.
          No React child wrappers, no equal-width cards, no code block changes. */
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw53-line[data-jdw53-tone]{
         display:flow-root!important;width:fit-content!important;max-width:min(100%,740px)!important;
         margin:8px 0!important;padding:11px 14px!important;border-radius:${cfg.radius}px!important;
         border:0!important;box-shadow:0 4px 13px #08152a24!important;overflow-wrap:anywhere!important;
         font-size:inherit!important;line-height:1.7!important;
       }
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="0"]{background:linear-gradient(112deg,#223450,#304761)!important;color:#FFFFFF!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="1"]{background:linear-gradient(112deg,#304761,#4B6984)!important;color:#FFFFFF!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="2"]{background:linear-gradient(112deg,#4B6984,#6E8BA4)!important;color:#FFFFFF!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="3"]{background:linear-gradient(112deg,#6E8BA4,#A5BED0)!important;color:#11293E!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="4"]{background:linear-gradient(112deg,#D5E3EB,#EFF5F9)!important;color:#172B3B!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"][data-jdw5-bubble="paragraph"] .jdw5-body[data-jdw5-role="assistant"] .jdw53-line[data-jdw53-tone="5"]{background:linear-gradient(112deg,#E2ECF3,#EFF5F9)!important;color:#172B3B!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw53-line[data-jdw53-tone="0"] :is(p,li,span,strong){color:#FFFFFF!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw53-line[data-jdw53-tone="5"] :is(p,li,span,strong){color:#172B3B!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw53-line :is(span,strong,em,li,b,h1,h2,h3,h4){color:inherit!important;-webkit-text-fill-color:currentColor!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw53-line a{color:inherit!important;text-decoration:underline!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] :is([data-user-message-bubble],.user-message-bubble-color,.jdw5-body[data-jdw5-role="user"]){
         background:linear-gradient(112deg,#E65398 0%,#F06BAB 34%,#F58CBD 68%,#FBD6E6 100%)!important;
         color:#4B2140!important;-webkit-text-fill-color:#4B2140!important;
         width:fit-content!important;max-width:90%!important;min-width:0!important;
         padding:11px 15px!important;border-radius:${cfg.radius}px!important;
         box-shadow:0 4px 16px #57224420!important;
       }
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] :is([data-user-message-bubble],.user-message-bubble-color,.jdw5-body[data-jdw5-role="user"]) :is(p,span,strong,em){color:#4B2140!important;-webkit-text-fill-color:#4B2140!important;}
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw5-body[data-jdw5-role="user"][data-jdw55-split="yes"]{
         background:transparent!important;border:0!important;box-shadow:none!important;
         padding:0!important;max-width:100%!important;width:100%!important;
       }
       html[data-jdw5-on="yes"][data-jdw53-gradient="yes"] .jdw5-body[data-jdw5-role="user"][data-jdw55-split="yes"] .jdw55-user-line{
         display:flow-root!important;margin:8px 0 8px auto!important;padding:10px 14px!important;
         width:fit-content!important;max-width:92%!important;min-width:0!important;
         border-radius:${cfg.radius}px!important;color:#512644!important;-webkit-text-fill-color:#512644!important;
         box-shadow:0 4px 13px #65234126!important;overflow-wrap:anywhere!important;
       }
       html[data-jdw5-on="yes"] .jdw55-user-line[data-jdw55-tone="0"]{background:linear-gradient(110deg,#E65398,#F06BAB)!important;}
       html[data-jdw5-on="yes"] .jdw55-user-line[data-jdw55-tone="1"]{background:linear-gradient(110deg,#F06BAB,#F58CBD)!important;}
       html[data-jdw5-on="yes"] .jdw55-user-line[data-jdw55-tone="2"]{background:linear-gradient(110deg,#F58CBD,#F8BAD4)!important;}
       html[data-jdw5-on="yes"] .jdw55-user-line[data-jdw55-tone="3"]{background:linear-gradient(110deg,#F8BAD4,#FBD6E6)!important;}
       html[data-jdw5-on="yes"] .jdw55-user-line[data-jdw55-tone="4"]{background:linear-gradient(110deg,#FBD6E6,#FEEDF5)!important;}
       /* Sentences are a purely presentational, aria-hidden sibling; native source
          remains in place for official copy/edit/accessibility controls. */
       html[data-jdw5-on="yes"] .jdw56-original{
         position:absolute!important;width:1px!important;height:1px!important;
         max-width:1px!important;min-width:0!important;min-height:0!important;
         overflow:hidden!important;clip-path:inset(50%)!important;
         opacity:0!important;pointer-events:none!important;
         padding:0!important;margin:0!important;border:0!important;
       }
       html[data-jdw5-on="yes"] .jdw56-visual-stack{
         position:relative!important;display:flex!important;flex-direction:column!important;
         align-items:flex-end!important;gap:9px!important;
         width:fit-content!important;max-width:min(91%,760px)!important;
         min-width:0!important;margin:0 0 0 auto!important;
         padding:0!important;background:transparent!important;border:0!important;
         box-shadow:none!important;overflow:visible!important;
       }
       html[data-jdw5-on="yes"][data-jdw53-plaque="yes"][data-jdw5-avatars="yes"] .jdw56-visual-stack.jdw56-visual-owns-gap{
         margin-top:178px!important;
       }
       html[data-jdw5-on="yes"]:not([data-jdw53-plaque="yes"][data-jdw5-avatars="yes"]) .jdw56-visual-stack.jdw56-visual-owns-gap{
         margin-top:59px!important;
       }
       html[data-jdw5-on="yes"] .jdw56-sentence{
         display:block!important;align-self:flex-end!important;width:fit-content!important;
         max-width:100%!important;min-width:0!important;
         padding:11px 15px!important;border-radius:${cfg.radius}px!important;
         color:#4B2140!important;-webkit-text-fill-color:#4B2140!important;
         font:inherit!important;white-space:pre-wrap!important;
         overflow-wrap:anywhere!important;line-height:1.65!important;
         box-shadow:0 4px 13px #65234129!important;
       }
       html[data-jdw5-on="yes"] .jdw56-sentence[data-tone="0"]{background:linear-gradient(110deg,#E65398,#F06BAB)!important}
       html[data-jdw5-on="yes"] .jdw56-sentence[data-tone="1"]{background:linear-gradient(110deg,#F06BAB,#F58CBD)!important}
       html[data-jdw5-on="yes"] .jdw56-sentence[data-tone="2"]{background:linear-gradient(110deg,#F58CBD,#F8BAD4)!important}
       html[data-jdw5-on="yes"] .jdw56-sentence[data-tone="3"]{background:linear-gradient(110deg,#F8BAD4,#FBD6E6)!important}
       html[data-jdw5-on="yes"] .jdw56-sentence[data-tone="4"]{background:linear-gradient(110deg,#FBD6E6,#FEEDF5)!important}
       ${avatarCSS}
       ${gradualCSS()}
       @media(max-width:680px){
         html[data-jdw5-on="yes"][data-jdw53-plaque="yes"] .jdw5-body[data-jdw5-role="assistant"]{margin-top:187px!important;}
         html[data-jdw5-on="yes"][data-jdw53-plaque="no"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="assistant"]{margin-top:57px!important;}
          html[data-jdw5-on="yes"][data-jdw53-plaque="yes"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="user"]{margin-top:187px!important;}
          html[data-jdw5-on="yes"][data-jdw53-plaque="no"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="user"]{margin-top:58px!important;}
          html[data-jdw5-on="yes"][data-jdw53-plaque="yes"][data-jdw5-avatars="yes"] .jdw56-visual-stack.jdw56-visual-owns-gap{margin-top:187px!important;}
       }
       /* v5.16: measured mobile card height replaces desktop-only 187px margins. */
       @media(max-width:720px){
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque="yes"] .jdw5-body[data-jdw5-role="assistant"]{
           margin-top:var(--jdw516-gap,146px)!important;
         }
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque="yes"][data-jdw5-avatars="yes"] .jdw5-body[data-jdw5-role="user"]{
           margin-top:var(--jdw516-gap,146px)!important;
         }
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque="yes"][data-jdw5-avatars="yes"] .jdw56-visual-stack.jdw56-visual-owns-gap{
           margin-top:var(--jdw516-gap,115px)!important;
         }
         /* Split user source is visually hidden: never reserve a second gap. */
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"] .jdw5-body[data-jdw5-role="user"][data-jdw517-gap-owner="visual"]{
           margin-top:0!important;
         }
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"] .jdw53-line[data-jdw53-tone],
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"] .jdw56-sentence{
           max-width:100%!important;overflow-wrap:anywhere!important;
           line-height:1.68!important;
         }
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"] .jdw56-visual-stack{
           max-width:min(94%,calc(100vw - 18px))!important;
         }
         /* The 1px hidden original retains a right-side static position on
            right-aligned chat rows, which can produce 50px mobile overflow. */
         html[data-jdw5-mobile="yes"] .jdw56-original{
           left:0!important;right:auto!important;top:0!important;
           transform:none!important;max-width:1px!important;
         }
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"] .jdw5-body :is(pre,table){
           max-width:calc(100vw - 22px)!important;overflow-x:auto!important;
         }
         /* v5.18: a single standalone element owns the card's height.
            Stop charging BOTH the native message body and the split visual
            copy for spacing. Keep the desktop CSS completely untouched. */
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque][data-jdw5-avatars] .jdw5-body[data-jdw5-role="assistant"],
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque][data-jdw5-avatars] .jdw5-body[data-jdw5-role="user"],
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque][data-jdw5-avatars] .jdw56-visual-stack.jdw56-visual-owns-gap{
           margin-top:0!important;
         }
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"] .jdw518-gap-slot{
           display:block!important;flex:0 0 auto!important;
           width:100%!important;min-width:0!important;
           margin:0!important;padding:0!important;border:0!important;
           height:var(--jdw518-space,116px)!important;
           pointer-events:none!important;background:transparent!important;
           box-shadow:none!important;overflow:hidden!important;
         }
         /* Only when the source has a horizontal flex parent do we use a
            fallback margin, never simultaneously with a standalone slot. */
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque][data-jdw5-avatars] .jdw5-body[data-jdw5-role][data-jdw518-fallback="yes"],
         html[data-jdw5-mobile="yes"][data-jdw5-on="yes"][data-jdw53-plaque][data-jdw5-avatars] .jdw56-visual-stack[data-jdw518-fallback="yes"]{
           margin-top:var(--jdw518-space,65px)!important;
         }
       }
    `;
    host.style.setProperty('--jd-muted',p.muted);
    host.style.setProperty('--jd-border',p.border);
    host.style.setProperty('--jd-nametint',rgba(p.chrome,.91));
    badges.style.display=cfg.enabled&&(cfg.showAvatars||cfg.showPlaque)?'block':'none';
    $('#previewA').src=avatars.assistant;$('#previewU').src=avatars.user;
    $('.preview-row:not(.user) .preview-bubble').textContent=cfg.assistantName+' ♡';
    $('.preview-row.user .preview-bubble').textContent=cfg.userName;
    themeUI();themeList();syncThemeEditor();
    for(const k of ['glass','radius','wallpaperVeil','bubbleMode','assistantName','userName','anniversaryDate','showAvatars','showWallpaper','gradientBubbles','showPlaque','authoredState']){
      const control=$('#'+k);if(!control)continue;
      if(control.type==='checkbox')control.checked=cfg[k];
      else control.value=k==='glass'?Math.round(cfg.glass*100):k==='wallpaperVeil'?Math.round(cfg.wallpaperVeil*100):cfg[k];
    }
    $('#glassValue').textContent=Math.round(cfg.glass*100)+'%';
    $('#radiusValue').textContent=cfg.radius+'px';
    $('#veilValue').textContent=Math.round(cfg.wallpaperVeil*100)+'%';
    $('#toggle').textContent=cfg.enabled?'暂停主题':'恢复主题';

    revealWallpaperSurfaces(true);
    schedule();
  }
  // Purely visual user message segmentation: the original DOM content stays intact
  // for native actions, accessibility, editing and ChatGPT's internal message data.
  // Only plain-text messages are eligible. No click/send/editor interception.
  const visualSplits=new WeakMap();
  const splitEntries=new Set();
  function sentenceParts(raw,mode='smart'){
    if(mode==='off')return [];
    const text=String(raw||'').trim();
    if(!text||text.length>1800||/(?:https?:\/\/|```|<[^>]+>)/i.test(text))return [];
    const rows=text.replace(/\r\n?/g,'\n').split(/\n+/).map(x=>x.trim()).filter(Boolean);
    if(mode==='newline')return rows.length>=2&&rows.length<=30?rows:[];
    const parts=[];
    for(const row of rows){
      let bucket='';
      for(let i=0;i<row.length;i++){
        const c=row[i];bucket+=c;
        // Chinese sentence ends and semicolons are clear visual boundaries.
        // ASCII '.' splits only at ordinary sentence spaces, never 5.9 or URLs.
        const next=row[i+1]||'';
        const end=/[。！？!?；]/.test(c)|| (c===';' && /\s/.test(next)) ||
          (c==='.' && /\s/.test(next) && /[A-Za-z\u4e00-\u9fff]/.test(row[i-1]||'') && !/\b(?:e\.g|i\.e|Mr|Ms|Dr)\.$/i.test(bucket));
        if(!end)continue;
        // Keep consecutive !?? punctuation and closing quotes with the sentence.
        while(i+1<row.length && /[。！？!?；;”’」』）】]/.test(row[i+1]))bucket+=row[++i];
        // Hearts and trailing emoji should not become their own bubble.
        while(i+1<row.length && /[♡♥💕💗💋❤️✨🥹🥺🤣😭]/u.test(row[i+1]))bucket+=row[++i];
        if(bucket.trim()){parts.push(bucket.trim());bucket='';}
      }
      if(bucket.trim()){
        const tail=bucket.trim();
        if(parts.length && [...tail].length<=2 && !/\n/.test(tail))parts[parts.length-1]+=tail;
        else parts.push(tail);
      }
    }
    return parts.length>=2&&parts.length<=30?parts:[];
  }
  function readNativeBubbleText(bubble){
    // innerText is empty after the original is visually hidden; do not let a
    // rescan erase the user's split bubbles. Read semantic original children.
    const ps=[...bubble.querySelectorAll('p')];
    if(ps.length)return ps.map(p=>p.textContent||'').join('\n').trim();
    if(bubble.querySelector('br')){
      const copy=bubble.cloneNode(true);
      copy.querySelectorAll('br').forEach(br=>br.replaceWith('\n'));
      return (copy.textContent||'').trim();
    }
    return (bubble.textContent||bubble.innerText||'').trim();
  }
  function eligibleBubble(el){
    if(!el||!isVisibleDOM(el))return false;
    if(el.querySelector('img,svg,picture,video,audio,canvas,pre,code,table,ul,ol,a,button,[role="button"],[contenteditable],input,[data-testid*="attachment"],.jdw56-visual-stack'))return false;
    const children=el.querySelectorAll('*');
    if(children.length>30||[...children].some(n=>!['DIV','P','SPAN','BR'].includes(n.tagName)))return false;
    return true;
  }
  function clearSplit(bubble){
    const old=visualSplits.get(bubble);
    if(old?.wrap?.isConnected)old.wrap.remove();
    bubble?.classList?.remove('jdw56-original');
    bubble?.removeAttribute?.('data-jdw56-split-source');
    visualSplits.delete(bubble);splitEntries.delete(bubble);
  }
  function renderUserSentences(items){
    const active=new Set();
    for(const entry of items){
      if(entry.role!=='user')continue;
      const bubble=entry.element.matches('[data-user-message-bubble],.user-message-bubble-color')
        ? entry.element : entry.element.querySelector('[data-user-message-bubble],.user-message-bubble-color')||entry.element;
      if(!cfg.enabled||cfg.bubbleMode!=='paragraph'||!eligibleBubble(bubble)){
        if(visualSplits.has(bubble))clearSplit(bubble);
        continue;
      }
      // From React's original message, NEVER read our generated visual copy.
      const original=readNativeBubbleText(bubble);
      const parts=sentenceParts(original,'smart');
      if(!parts.length){if(visualSplits.has(bubble))clearSplit(bubble);continue;}
      const cached=visualSplits.get(bubble);
      if(cached?.text===original&&cached.mode==='smart'&&cached.wrap?.isConnected){
        entry.visualElement=cached.wrap;active.add(bubble);continue;
      }
      if(cached)clearSplit(bubble);
      const wrap=document.createElement('div');
      wrap.className='jdw56-visual-stack';
      wrap.setAttribute('aria-hidden','true');
      // Mobile: exactly ONE header gap belongs to the visible replacement stack.
      if(JDW_MOBILE || bubble.classList.contains('jdw5-body'))wrap.classList.add('jdw56-visual-owns-gap');
      const total=parts.length;
      parts.forEach((part,i)=>{
        const pill=document.createElement('div');pill.className='jdw56-sentence';
        const tone=Math.min(4,Math.round(i*4/Math.max(1,total-1)));
        pill.dataset.tone=String(tone);pill.textContent=part;wrap.appendChild(pill);
      });
      // A sibling does not modify ChatGPT's real message or its native actions.
      bubble.after(wrap);
      bubble.classList.add('jdw56-original');
      visualSplits.set(bubble,{wrap,text:original,mode:'smart'});splitEntries.add(bubble);
      entry.visualElement=wrap;
      active.add(bubble);
    }
    for(const bubble of [...splitEntries]){
      if(!active.has(bubble)||!bubble.isConnected||!cfg.enabled||cfg.bubbleMode!=='paragraph')clearSplit(bubble);
    }
  }

  function save(){ GMset(STORAGE,JSON.stringify(cfg));applyTheme();updateStatus(); }
  function diagnostics(){
    const p=probe();
    return [
      `Theme v0.3.0 Mobile / ${location.hostname}`,
      `旧标记=${p.oldRoles}，新版turn=${p.newTurnKeys}，新版unit=${p.newUnitKeys}`,
      `userBubble=${p.userBubbles}，assistantMarkdown=${p.assistantTextBlocks}，assistantRole=${p.newAssistantRoles}`,
      `识别到=${data.items.length}，assistant=${data.items.filter(x=>x.role==='assistant').length}，user=${data.items.filter(x=>x.role==='user').length}`,
      `头像浮层=${badgeMap.size}，背景层=${bg.style.display}，壁纸=${safeImage(wallpaper)?'已上传':'渐变'}，壳层=${shellSurfaces.size}，主画布=${stamp(wallpaperRoot)}，手动=${manualSelector?'已指定':'无'}`, 
      `主题=${cfg.preset}，气泡=${cfg.bubbleMode}，玻璃=${Math.round(cfg.glass*100)}%，主题数=${Object.keys(COLORS).length}`,
      `壁纸定位=固定视口，主画布重复绘图=${wallpaperRoot && getComputedStyle(wallpaperRoot).backgroundImage!=='none'?'有（异常）':'无'}，主画布高=${wallpaperRoot?Math.round(wallpaperRoot.getBoundingClientRect().height):'未识别'}px，视口=${innerWidth}×${innerHeight}`,
      '匿名几何诊断（无对话正文）:',
      jdw519GapAudit()
    ].join('\n');
  }
  function updateStatus(){
    const label=$('#jdw512-author-status');
    if(label){
      const matched=Object.values(snapshotRecords).filter(x=>x?.scene?.authored).length;
      label.textContent=cfg.authoredState
        ? ('AI 亲笔 · 已存 '+matched+' 条 · 其他时候自动生成')
        : 'AI 亲笔已关闭 · 本地情绪照常运行';
    }
    const status=diagnostics()+'\n'+notice;
    if($('#status').textContent!==status)$('#status').textContent=status;
  }
  async function upload(kind){
    const file=$('#pickFile');file.value='';file.onchange=()=>{
      const chosen=file.files?.[0];if(!chosen)return;
      if(!['image/png','image/jpeg','image/webp'].includes(chosen.type)){
        notice='请使用 PNG、JPG 或 WebP 图片';updateStatus();return;
      }
      const link=URL.createObjectURL(chosen);const image=new Image();
      image.onload=()=>{
        try{
          const c=document.createElement('canvas');const ctx=c.getContext('2d');
          if(kind==='wallpaper'){
            const factor=Math.min(1,(JDW_MOBILE?1440:1900)/Math.max(image.width,image.height));
            c.width=Math.max(1,Math.round(image.width*factor));c.height=Math.max(1,Math.round(image.height*factor));
            ctx.drawImage(image,0,0,c.width,c.height);
            const data=c.toDataURL('image/jpeg',.82);
            if(!GMset('cds.public.v1.wallpaper',data))throw Error('浏览器壁纸存储失败');
            wallpaper=data;cfg.showWallpaper=true;notice='壁纸已保存并应用到聊天背景';
          } else {
            c.width=200;c.height=200;
            const scale=Math.min(200/image.width,200/image.height);
            const w=image.width*scale,h=image.height*scale;
            ctx.drawImage(image,(200-w)/2,(200-h)/2,w,h);
            const data=c.toDataURL('image/webp',.88);
            if(!safeImage(data)||!GMset('cds.public.v1.avatar.'+kind,data))throw Error('头像存储失败');
            avatars[kind]=data;notice=(kind==='assistant'?'AI':'用户')+'头像已保存';
          }
          save();
        } catch(e){notice='图片上传失败：'+(e?.message||String(e));updateStatus();}
        finally {URL.revokeObjectURL(link);}
      };
      image.onerror=()=>{notice='无法读取图片';URL.revokeObjectURL(link);updateStatus();};
      image.src=link;
    };file.click();
  }
  function copyDiagnostic(){
    const str=diagnostics();
    const field=$('#diagText');field.value=str;field.hidden=false;
    field.focus();field.select();
    try {
      const ok=document.execCommand('copy');
      notice=ok?'匿名诊断已复制（仅有统计数字）':'请按 Ctrl+C 手动复制诊断';
    }catch(_){notice='请按 Ctrl+C 手动复制诊断';}
    $('#testhint').textContent='仅统计信息，不含聊天正文';updateStatus();
  }
  const dock=$('#launch'),panel=$('#panel');
  // Independent mobile panel position: leave the completed Windows setup untouched.
  const POS_PANEL='cds.public.v1.mobile.panel.position',POS_DOCK='cds.public.v1.mobile.dock.position';
  let jdw517Expanded=false;
  panel.dataset.expanded='no';
  function jdw518SizeButton(){
    const button=$('#jdw517-size');
    button.querySelector('.jdw518-action-icon').textContent=jdw517Expanded?'⤢':'⛶';
    button.querySelector('.jdw518-action-text').textContent=jdw517Expanded?'还原':'展开';
    button.title=jdw517Expanded?'恢复半屏工坊':'展开至大窗口';
    button.setAttribute('aria-pressed',String(jdw517Expanded));
  }
  $('#jdw517-size').onclick=()=>{
    jdw517Expanded=!jdw517Expanded;
    panel.dataset.expanded=jdw517Expanded?'yes':'no';
    jdw518SizeButton();
    panel.style.maxHeight='';
    jdw516QueueViewport();
  };
  const safePos=(v)=>{try{const o=JSON.parse(v);return Number.isFinite(o?.x)&&Number.isFinite(o?.y)?o:null}catch(_){return null}};
  let dockPos=safePos(GMget(POS_DOCK,''));
  let panelPos=safePos(GMget(POS_PANEL,''));
  function move(el,x,y){
    const w=el.offsetWidth||49,h=el.offsetHeight||49;
    x=limit(Math.round(x),7,Math.max(7,innerWidth-w-7));
    y=limit(Math.round(y),7,Math.max(7,innerHeight-h-7));
    el.style.right='auto';el.style.bottom='auto';
    el.style.left=x+'px';el.style.top=y+'px';
    return {x,y};
  }
  function placeDock(){
    if(!dockPos)return;
    dockPos=move(dock,dockPos.x,dockPos.y);
  }
  function placePanel(){
    if(!panelPos){
      const d=dock.getBoundingClientRect();
      const w=panel.offsetWidth||Math.min(344,innerWidth-22);
      const h=panel.offsetHeight||Math.min(innerHeight*.46,410);
      panelPos={x:limit(innerWidth-w-11,7,Math.max(7,innerWidth-w-7)),
        y:limit(d.top-h-10,66,Math.max(66,innerHeight-h-7))};
    }
    panelPos=move(panel,panelPos.x,panelPos.y);
  }
  function togglePanel(){
    panel.hidden=!panel.hidden;
    if(!panel.hidden){placePanel();jdw516QueueViewport();updateStatus();}
  }
  // Pointer drag is intentionally bound to the toolbar, not the panel content;
  // normal clicks/sliders/text inputs remain untouched.
  function makeDraggable(el,handle,kind){
    let drag=null,suppress=false;
    handle.addEventListener('pointerdown',e=>{
      if(e.button!==0||(kind!=='dock'&&e.target.closest('button,input,textarea,select,a')))return;
      const r=el.getBoundingClientRect();
      drag={id:e.pointerId,startX:e.clientX,startY:e.clientY,x:r.left,y:r.top,moved:false};
      handle.setPointerCapture?.(e.pointerId);
    });
    handle.addEventListener('pointermove',e=>{
      if(!drag||e.pointerId!==drag.id)return;
      if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>4)drag.moved=true;
      if(!drag.moved)return;
      el.classList.add('dragging');
      move(el,drag.x+e.clientX-drag.startX,drag.y+e.clientY-drag.startY);
    });
    const finish=e=>{
      if(!drag||e.pointerId!==drag.id)return;
      if(drag.moved){
        let r=el.getBoundingClientRect();
        if(kind==='dock'){
          const x=r.left+r.width/2<innerWidth/2?9:innerWidth-r.width-9;
          dockPos=move(el,x,r.top);GMset(POS_DOCK,JSON.stringify(dockPos));
        }else{panelPos=move(el,r.left,r.top);GMset(POS_PANEL,JSON.stringify(panelPos));}
        suppress=true;
      }
      el.classList.remove('dragging');drag=null;
      // Suppress the synthetic click after a drag, but never a genuine click.
      if(suppress)setTimeout(()=>suppress=false,150);
    };
    handle.addEventListener('pointerup',finish);
    handle.addEventListener('pointercancel',finish);
    if(kind==='dock'){
      handle.addEventListener('click',e=>{
        if(suppress){e.preventDefault();e.stopImmediatePropagation();return;}
        togglePanel();
      });
    }
  }
  // Live-time widget is separate from archived message cards.
  // No continuous redrawing of chat content for this clock.
  const stationStart=Date.now();
  const liveTip=$('#jdw57-live-tip');
  let liveHover=false;
  function placeLiveTip(){
    const d=dock.getBoundingClientRect(),w=218;
    const left=d.left>innerWidth/2?d.left-w-10:d.right+10;
    liveTip.style.left=limit(left,8,Math.max(8,innerWidth-w-8))+'px';
    liveTip.style.top=limit(d.top+Math.round((d.height-77)/2),8,Math.max(8,innerHeight-86))+'px';
  }
  function updateLive(){
    const day=beijingClock();
    const now=new Intl.DateTimeFormat('zh-CN',{timeZone:'Asia/Shanghai',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(new Date());
    const mins=Math.max(0,Math.floor((Date.now()-stationStart)/60000));
    const during=mins>=60?Math.floor(mins/60)+'小时'+mins%60+'分':mins+'分钟';
    const text='北京时间 '+now;
    $('#jdw57-tip-clock').textContent=text;
    $('#jdw57-tip-detail').textContent=day.days+' · 本页停留 '+during;
    $('#jdw57-panel-clock').textContent=now;
    $('#jdw57-panel-detail').textContent=day.days.replace('相识第','第')+' · 停留'+during;
    if(liveHover)placeLiveTip();
  }
  function showLive(show){
    // Touch browsers synthesize hover on taps. Don't trap a tooltip above the keyboard.
    if(JDW_MOBILE)show=false;
    liveHover=show&&cfg.enabled;
    liveTip.dataset.open=liveHover?'yes':'no';
    if(liveHover){updateLive();placeLiveTip();}
  }
  dock.addEventListener('pointerenter',()=>showLive(true));
  dock.addEventListener('pointerleave',()=>showLive(false));
  dock.addEventListener('focus',()=>showLive(true));
  dock.addEventListener('blur',()=>showLive(false));
  updateLive();
  setInterval(updateLive,1000);
  makeDraggable(dock,dock,'dock');
  makeDraggable(panel,panel.querySelector('.top'),'panel');
  dock.addEventListener('dblclick',()=>{
    dockPos=null;panelPos=null;GMset(POS_DOCK,'');GMset(POS_PANEL,'');
    dock.style.cssText='';panel.style.cssText='';notice='土星和设置窗口已回到默认位置';updateStatus();
  });
  placeDock();
  $('#close').onclick=()=>{panel.hidden=true;};
   $('#editTheme').onclick=()=>{$('#themeEdit').open=!$('#themeEdit').open;syncThemeEditor();};
   $('#addTheme').onclick=addTheme;
   $('#themeName').addEventListener('change',e=>{
     COLORS[cfg.preset].title=e.target.value.trim().slice(0,18)||'未命名主题';
     storeThemes();notice='主题已重命名';save();
   });
   for(const [id,key] of Object.entries(THEME_FIELDS)){
     $('#'+id).addEventListener('input',e=>updatePaletteField(key,e.target.value));
   }
   $('#autoColors').onclick=()=>{
     const p=COLORS[cfg.preset];COLORS[cfg.preset]=paletteFromMain(p.main,p.title);
     storeThemes();notice='已按主色生成相近渐变';save();
   };
   $('#deleteTheme').onclick=()=>{
     if(cfg.preset==='night'){notice='极夜深海蓝不可删除';updateStatus();return;}
     if(!confirm('删除这套主题？你随时可以新建自己的配色。'))return;
     delete COLORS[cfg.preset];cfg.preset='night';storeThemes();$('#themeEdit').open=false;
     notice='主题已删除，已返回极夜深海蓝';save();
   };
   $('#restoreThemes').onclick=()=>{
     if(!confirm('恢复三套内置主题？这会移除其他自定义主题。'))return;
     COLORS=Object.fromEntries(Object.entries(BUILTIN_COLORS).map(([id,p])=>[id,{...p}]));
     cfg.preset='night';storeThemes();notice='已恢复初始主题库';save();
   };
   for(const k of ['glass','radius','wallpaperVeil','bubbleMode','assistantName','userName','anniversaryDate','showAvatars','showWallpaper','gradientBubbles','showPlaque','authoredState']){
     const n=$('#'+k);n.addEventListener(['glass','radius','wallpaperVeil'].includes(k)?'input':'change',()=>{
       cfg[k]=n.type==='checkbox'?n.checked:k==='glass'||k==='wallpaperVeil'?Number(n.value)/100:k==='radius'?Number(n.value):n.value;
       cfg=normalize(cfg);
       if(k==='wallpaperVeil'){
         document.documentElement.style.setProperty('--jdw54-veil',rgba('#FFFFFF',cfg.wallpaperVeil));
         $('#veilValue').textContent=Math.round(cfg.wallpaperVeil*100)+'%';
         GMset(STORAGE,JSON.stringify(cfg));notice='奶白蒙层已保存';updateStatus();
       }else{notice='设置已保存';save();}
     });
   }

  $('#faceAssistant').onclick=()=>{faceRole='assistant';faceSlot='default';renderFaces();};
  $('#faceUser').onclick=()=>{faceRole='user';faceSlot='default';renderFaces();};
  $('#faceAuto').onchange=e=>{
    faceAuto=e.target.checked;GMset(FACE_PREFIX+'auto',faceAuto);
    notice=faceAuto?'自动表情已开启':'固定头像已开启';schedule();updateStatus();
  };
  $('#faceLabel').onchange=e=>{
    faceLabels[faceRole][faceSlot]=e.target.value.trim().slice(0,16)||FACE_LABELS[faceRole][faceSlot];
    storeFaceLabels();renderFaces();notice='表情名称已保存';updateStatus();
  };
  $('#faceUpload').onclick=loadFacePicture;
  $('#faceDelete').onclick=()=>{
    GMset(FACE_PREFIX+'image.'+faceRole+'.'+faceSlot,'');
    delete expressionImages[faceRole][faceSlot];renderFaces();schedule();
    notice='此表情已恢复默认占位';updateStatus();
  };
  $('#faceExport').onclick=exportFaceLibrary;
  $('#faceImportButton').onclick=importFaceLibrary;
  renderFaces();

  $('#pickA').onclick=()=>upload('assistant');$('#pickU').onclick=()=>upload('user');$('#pickBg').onclick=()=>upload('wallpaper');
  $('#clearBg').onclick=()=>{wallpaper='';GMset('cds.public.v1.wallpaper','');notice='壁纸已清空';save();};
  $('#pickPane').onclick=pickSurface;
  $('#clearPane').onclick=()=>{manualSelector='';GMset(manualSurfaceKey,'');notice='已清除手动背景层选择';revealWallpaperSurfaces(true);schedule();};

  $('#toggle').onclick=()=>{cfg.enabled=!cfg.enabled;notice=cfg.enabled?'皮肤已启用':'皮肤已暂停';save();};
  $('#reset').onclick=()=>{cfg={...BASE};notice='颜色布局已重置，保留已上传头像与壁纸';save();};
  $('#rescan').onclick=()=>{notice='已重新检测消息布局';schedule();};
  $('#copyDiag').onclick=copyDiagnostic;
  window.addEventListener('resize',()=>{if(dockPos)placeDock();if(panelPos&&!panel.hidden)placePanel();schedule();});
  // Android Firefox changes the VISUAL viewport when its soft keyboard opens.
  // Keep the studio visible and let the ordinary ChatGPT composer have the screen.
  let jdw516ViewportQueued=false;
  function jdw516MobileViewport(){
    if(!JDW_MOBILE)return;
    jdw516ViewportQueued=false;
    const vv=window.visualViewport;
    const visHeight=vv?.height||innerHeight,visTop=vv?.offsetTop||0;
    const visWidth=vv?.width||innerWidth,visLeft=vv?.offsetLeft||0;
    const keyboardOpen=innerHeight-(visHeight+visTop)>130;
    host.dataset.keyboard=keyboardOpen?'yes':'no';
    dock.style.visibility=keyboardOpen?'hidden':'';
    if(!panel.hidden){
      const fraction=jdw517Expanded?.78:.46;
      const maxH=Math.max(165,Math.min(jdw517Expanded?700:410,Math.floor(visHeight*fraction)));
      panel.style.maxHeight=Math.min(maxH,Math.floor(visHeight-16))+'px';
      // Temporarily reflow open studio for keyboard, without changing its saved drag position.
      const w=panel.offsetWidth||Math.min(392,visWidth-12),h=panel.offsetHeight||maxH;
      const x=limit(panel.getBoundingClientRect().left,visLeft+6,Math.max(visLeft+6,visLeft+visWidth-w-6));
      const y=limit(panel.getBoundingClientRect().top,visTop+6,Math.max(visTop+6,visTop+visHeight-h-6));
      panel.style.left=Math.round(x)+'px';panel.style.top=Math.round(y)+'px';
      panel.style.right='auto';panel.style.bottom='auto';
    }else panel.style.maxHeight='';
    schedule();
  }
  function jdw516QueueViewport(){
    if(!JDW_MOBILE||jdw516ViewportQueued)return;
    jdw516ViewportQueued=true;requestAnimationFrame(jdw516MobileViewport);
  }
  if(JDW_MOBILE){
    window.visualViewport?.addEventListener('resize',jdw516QueueViewport,{passive:true});
    window.visualViewport?.addEventListener('scroll',jdw516QueueViewport,{passive:true});
    window.addEventListener('orientationchange',jdw516QueueViewport);
    shadow.addEventListener('focusin',jdw516QueueViewport,true);
    shadow.addEventListener('focusout',jdw516QueueViewport,true);
    jdw516QueueViewport();
  }
  window.addEventListener('scroll',schedule,true);
  window.addEventListener('popstate',schedule);
  new MutationObserver(ms=>{if(ms.some(m=>!host.contains(m.target) && m.target!==host && m.target!==bg))schedule();})
    .observe(document.body,{subtree:true,childList:true});
  applyTheme();schedule();
  setInterval(()=>{if(cfg.enabled)schedule();},60000);
  console.info('[Assistant × You] v0.3.0 Android Firefox: viewport-only wallpaper layer; no cover scaling on tall conversation root; v5.20 (private upstream) gap logic preserved.');
})();
