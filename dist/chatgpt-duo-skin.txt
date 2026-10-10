// ==UserScript==
// @name         ChatGPT Duo Skin｜双人聊天皮肤（非商用）
// @namespace    https://github.com/VITASID57/chatgpt-duo-skin
// @version      0.2.0
// @description  Desktop beta: avatars, mirrored cards, editable gradients, expressive face library, optional AI-written states.
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
  if (window.__CHATGPT_DUO_SKIN_PUBLIC__) return;
  window.__CHATGPT_DUO_SKIN_PUBLIC__ = true;

  const DEFAULT_AVATARS = {
    assistant: 'data:image/webp;base64,UklGRqYFAABXRUJQVlA4IJoFAACwHACdASqAAIAAPm0ylUckIyIhJJccWIANiWUFhzm/lgur9aTC7bB+jHbR7i7envQA6Ye/Y+rxywR+L+k/I7zVfxVvo7kLiA4DPwU/lf+m83HnWf2nkv/Kf7//4vcP/l39j6yX7VeyL+vJagBaMnohvLXtwKsJCznXFrG81yd7i+Edj6yuWsvaZ0iI2EmpWxV8cBOi/f/9xJGTytCDrboopIJ5o9TKi6FtxtffEEvNzPN5ik6uSjGQh18tKp2KSzsAa0z5hrYjWGkdibPYcTvVyyka4vc4xdsk8eV2c65EPV7n7NPUcq92pe+z+9gAAP7sBqDeJ2+4Jrl59Tn4f9qbaLFIP+vIk7dQ0SKb+bzhfgeOMKfmHVtaUyr73j3RqVErrDX5Gfj2Z6IUDOdQAyHw/Z9V0e1dzUawB/+MX+TrFGDZH6FNOJYSF2s2DfUDTg7ftMknHJhtH0XXOfrN0TGBd7zhrFBxn6cOeXkfc/+ufX7qPoNGWvwIUaaRd+E+4fZTWuJn/y+Qstn+41aR+1CNoQU232+s/DtEseEaX5SGtDiwz/bjZqHNth456LkB99zFAZ/Hf77aeHirIoSAeaxNmyO6lsunDIph5fAZDE35zNJDQH7v5iTEoF2yPMtEZ7YHDoePdsvAuAEAtGCyBBH79zdX9u+p+cR29VrQ35IKa2eN1H3NrvoXd1VQMtevFPyJJv9VLYuYtVTvAhWeJu3gf6e/nBz7HpgqdHnSvOfGg3W0mpdWirFLsZLuLjPlxZzbMS4BBuJL1b0J6bXU+1+XXNYemYtIxxXjrN86ocpYu+I9LeMoYjo6Xn1EBQgHxHZNduXs8lykG8p6iD9M/o9XORv0N2UppZuPt/faObfpw4U6rpvadbrcYxDimcak740u/KTW7KPnY3ZhdkTntK/dDZS3trp7YFckpcdFa5xVEo35/0UMdwenMh637lhyYmrP4F3QX+B8jSYtvbqzkjNKhZvxrIJ+D3/3p/3WFf+WQMFNPkicLNbBGaJyYQxrGxna8y1wEuSMtM7n4sGnyaHrDoIErGtX6fKbAVhS5rR0sbxkRCoVy37NzL9ts/3ruiqDBSylA//N10eesbBWSdn2PeggXyugdDUOKCgQZ8mRz6YE7/9I2XOX0mM8p9lS212e04CsgHMOaav2zfaan7eHw4Fo85WlZULnITHG0Oy8QUuxuSD+Aq02bd+FPUhnLc0Ry7ZIM3Df+9/YH3PX4It6xk2V/jhXAz8Xbsn741CtfgoidU7al9WBdPEYPPNkMDe1T3LVUdr1/IPSkrsLlSybcYlJVhMko1fcHSP/Vt3vZSxt0jP/Y4i62/GOmtk2tvmJhtX1x6wthEbOut3ek0HEItCC6gKQshoeb5k8cMItzQS5d4KVPQo7iGlex70+mjt9Qw8SFkI3raFj9pXKBgyICbeQbCVFB9ucDSBIBnMZzywMpRBDHvDVmfUkUJePVTyTICJA/aD/AyJtr0JJVvlUSFhhwvZrBB8cNkuubuE9wOc1Lo+uHfrv9wFZAjeQc/4Jvovg9XbYCD5MMjkt2WBLxrezGz3r3po3ygo3n1pGGV/RhaTbQUW63hcPv6c9QF087kwYfBnY2OCJIg7G7wBdbjsBz7DdmEZSkNKUHEbsbwukMDL0yfBJzlrSEqRY0WiWiQh0Ik16MP+oIaWcPbhNMKHyCEQEU4ICue1I3tOMgS/typRNGXt06p1sqz44xCuLngxzc60nazauBIkWUfkMkZw94Ev4WnL0DLoAS3AkjiAhyVVK0pxaWS6Qv/CMbF0xbnJ4rnPHzi2tyovNxY9M+fqQTXivswn8++48kzInOO5WqhDAjjtkI5EWoD3ueW/1vFKN/edItex5+OqAlAGQfyabzL1n2gSygNA92+JdpRHj0hlKznmAAAA=',
    user: 'data:image/webp;base64,UklGRpgFAABXRUJQVlA4IIwFAADQHACdASqAAIAAPm0wlUakIyIhKZXriIANiUCwxDf9YUcBaLDhqJMka1X7PSjtx/MB+tnqy+hv0AP6f/jutV9BPy3vZj/cX0rsxQzWvICeDBdg3wNJxjm89D/c/uHno+r/YP6T/o1jDszTf2/WP5EGfA+8gjLPilMBo06YZbPZ9j6tszvsPBs1jzIC/mxLiTAUijI6ZUCJgHpKz88o6xpPATs3LuH3Fdll5OxXyiceM3hQGcXl/gVtqew0lsGO62WqEWZZVGpq/uNinRB4JJXt4uV5Fsw3mD8TUPtd7RGwZ8lwOy5rR3Da2H17Rp+EAAD+bqm8ArVdbaryj+Ufs//KYzF6r//D4/tR/ajmYkuDWLN+f+Gyb6jqZ37MwxKvW/T3jAgXCzYjzDhZXfP4t8EWhFLoiRitfVf3334qcUKFJa3/fPOC5liJSaiHLeBXWfTjcqXvJPQTSC3EzxrLp3rfvAbEI6LOI8+0LafT2TOrV9V+FFWteak4fXzWzxhRK1crMRiJ7lIYICk2BTLJjb0SnQucpI7sJtm2jqv5Z6HcYqAPjodV4igLdCQxYle1/KsdguOxu4ZxT+Jg2Qt9fLpe3zDVLUp2PDBP1KUGLnLJ13xeCo0cceos4l4tySiLhnpOqzuSwayhk6e0i1p5dn0JNxTXKgslk1s1yFSXp3FC209y7vQ9yon8Iiuq8eiotzpun212dmxBBGp2VqwAa2rV6Lb6pN3284D17T9ddPY7wj5tX2yPt76whhunGbC3TeYc8GmpJiS5JSGLTySfDWV8/9sH2H8FQOmBUSkR6cApUCkrgBCDHsgVDk/G+S2ZcDVSCSnhyB9z1NlOpXCq9LM3tE5REVOITDAhTsNBFANh8TkDCz5nlx//MCkp6/jZ3vsHYyK8VVbbp9wsJWxMCpIw9TAokkFmO8cpj5kkE+p1vXzgqgF/dUKfs2kHaF/5DUhovQE8k20awxlcnG/dR3UNf/YoGRmFLKjU9avzCFl0wu28WLtw9f2jmOThORAfVznydqMwPLgfAqnZ7lceYaa2vaO28OVpGWVbCZQ3HyDthiK+ysN8dpAOuuSaV/uVMaNEw/f9who9Zf6pCU/EdbBL78ZM3q3fSNzVzDJrz6Ujmf+2y1kkLg/4JB1sKB8LiNqEeTZhUk1tFI5xj8/7d/64KpS6WUUsO4YXMBlFVndcWpzM6Nr0sV6Af291/qvjCIt5cq9NexCKVNsWiy9RHUwQH5os45lu6StrYayiKBIUtC0HifS64LT7MxKc5iP0xmnXIdUceY1CTc+jEFN+9Q3UQtLJOjeQ8CCd4rIWRva/1Ezybkw6+FlPiJ2fK5h2stqygnfQ/zEaQcm6K8ZVR/OGxCC5H3HtbIwhjfDJZ9+Mmb1bwCOpkt2Gc6L8OLW6fD8j9IuVHw8LHZL2WPw+O+L+OJhL89lKjGL30v20MgRsLxZadxSvia1d3rnT+6g3PKff1MnTUtOqbmpvV7sZZLuLQE/5gVgNrg5rUD2B6iup55p2yk+IAzrkue9IpKTibzy2yULKZBAz8CKA6Bao+/0tCcEtwGWC+cu9v/27r+fMOa6CA+8iWF2MtLH9dLa0PvV5eqZlmnosFQEa6V/yYDyctaJ84tWWx4aZZdfvetkj++SESX9YC5ddkE4EJs8Pdm8rIW74tzWS1fth+aP6VOxhOR/fpy7xut4sP3KpWcBiQ5aOqRIg8uUbIwjIoP5QEKbOLL+X9615bxxujDeAecQGujXQoNFb4jJL7JsgbMHlW2KFkprmWIBk0rdB2AKq2wUV1pavXR20C14rqOhWyFrD5DUqSEYMl2RDi2TQS8BOgUC5Ytkv82TKc3a0ey4nvVh782Yvjj+Mr5K8kTxoklnSb6N3zTsJnWXpQAAA'
  };
  const STORAGE = 'cds.public.v1.config';  // Isolated from any private skin; upgrades existing public v0.1 settings.
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
  const THEME_STORE='cds.public.v1.themes';
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
      anniversaryDate: typeof v.anniversaryDate==='string' && /^\d{4}-\d{2}-\d{2}$/.test(v.anniversaryDate) ? v.anniversaryDate : '',
      gradientBubbles: typeof v.gradientBubbles==='boolean'?v.gradientBubbles:true,
      showPlaque: typeof v.showPlaque==='boolean'?v.showPlaque:true,
      userSentences: ['smart','newline','off'].includes(v.userSplitMode) ? v.userSplitMode!=='off' : (typeof v.userSentences==='boolean'?v.userSentences:true),
       userSplitMode: 'smart',
       authoredState: typeof v.authoredState==='boolean'?v.authoredState:false
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
    assistant:{default:'默认',joy:'开心',play:'调皮',work:'认真',anger:'不悦',surprise:'惊讶',shy:'害羞',affection:'暖心',soothe:'安抚',sleepy:'困倦'},
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
  bg.id='cds5-wallpaper'; bg.setAttribute('aria-hidden','true');
  bg.style.cssText='position:fixed!important;inset:0!important;pointer-events:none!important;z-index:0!important;background-size:cover!important;background-position:center!important;background-repeat:no-repeat!important;';
  document.body.prepend(bg);
  const stylesheet=document.createElement('style');
  stylesheet.id='cds5-global-style'; document.head.append(stylesheet);
  const authoredStyle=document.createElement('style');
  authoredStyle.id='cds512-authored-meta-style';
  // Even when the authored-state switch is off, hide a VALID metadata line.
  // This avoids showing raw JSON just because the display preference changed.
  authoredStyle.textContent='.cds512-meta{display:none!important}';
  document.head.append(authoredStyle);
  const host=document.createElement('div'); host.id='cds5-host';
  host.style.cssText='position:fixed!important;inset:0!important;pointer-events:none!important;z-index:2147483000!important;';
  document.body.append(host);
  const shadow=host.attachShadow({mode:'open'});
  shadow.innerHTML=`
   <style>
   :host{all:initial;color:#F0F5FF;font-family:Inter,system-ui,"Microsoft YaHei",sans-serif}
   *,*::before,*::after{box-sizing:border-box}
   #badges{position:fixed;inset:0;pointer-events:none;overflow:hidden}
   /* v5.6: editorial plaque with a dedicated portrait rail. */
   .cds55-plaque{position:fixed;display:grid;grid-template-columns:96px minmax(0,1fr);
     align-items:stretch;gap:13px;min-height:137px;max-width:calc(100vw - 20px);padding:11px 13px 11px 11px;
     background:linear-gradient(116deg,#172740 0%,#243750 67%,#3B364E 100%);
     color:#F7F9FF;border:1px solid #A5B9DF77;border-radius:19px;
     box-shadow:0 9px 28px #03091C66, inset 0 1px 0 #FFFFFF22;
     pointer-events:none;overflow:hidden;isolation:isolate;
     font:500 12px/1.35 system-ui,"Microsoft YaHei",sans-serif;
     --jd55-ink:#F7F9FF;--jd55-muted:#C0D1EF;--jd55-chip:#192C49BB}
   .cds55-plaque:before{content:"";position:absolute;inset:0;pointer-events:none;
     background:radial-gradient(ellipse at 7% 10%,#ACD2FF22,transparent 55%);z-index:-1}
   .cds55-plaque[data-mood="work"]{background:linear-gradient(115deg,#F8FBFF,#E4EDF7 60%,#C6D7EA);
     border-color:#B4C9E0;--jd55-ink:#1B3151;--jd55-muted:#526B8D;--jd55-chip:#EDF4FAE9}
   .cds55-plaque[data-mood="affection"]{background:linear-gradient(112deg,#271732,#4B2750 60%,#792F56);
     border-color:#C389AE90;--jd55-muted:#F0CEE8;--jd55-chip:#4A2A4BAA}
   .cds55-plaque[data-mood="soothe"]{background:linear-gradient(115deg,#183345,#275164 70%,#5B7B8A);
     border-color:#8FBCC798;--jd55-muted:#D8EDEF;--jd55-chip:#24485DBB}
   .cds55-plaque[data-mood="play"]{background:linear-gradient(115deg,#192B4A,#404376 70%,#67436B);
     border-color:#9DA8E49A;--jd55-muted:#E6DBF7;--jd55-chip:#314068B7}
   .cds56-portrait{display:flex;align-items:center;justify-content:center;position:relative;
     align-self:center;min-width:0;width:96px;height:96px;aspect-ratio:1 / 1;border-radius:13px;overflow:hidden;
     background:linear-gradient(155deg,#0C1831E9,#273C6088);border:1px solid #E3EEFF50;
     box-shadow:inset 0 0 0 1px #FFFFFF12}
   .cds56-portrait:after{content:"";position:absolute;inset:4px;border:1px solid #FFFFFF33;
     border-radius:11px;pointer-events:none}
   .cds56-portrait img{width:100%;height:100%;object-fit:contain;object-position:center;
     border-radius:9px;display:block;filter:drop-shadow(0 4px 9px #0004)}
   .cds56-rail{min-width:0;display:flex;flex-direction:column;gap:7px;justify-content:center}
   .cds55-top{display:flex;gap:7px;align-items:center;min-width:0}
   .cds55-headings{min-width:0;display:flex;flex-direction:column;gap:3px}
   .cds55-person-name{font-size:17px;color:var(--jd55-ink);font-weight:800;letter-spacing:.3px;
     overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
   .cds55-person-name em{font-family:Georgia,serif;font-weight:700;font-style:italic}
   .cds55-subline{font-size:10px;color:var(--jd55-muted);line-height:1.4;
     overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-style:italic}
   .cds55-chips{display:flex;flex-wrap:wrap;align-items:center;gap:5px}
   .cds55-chips span{background:var(--jd55-chip);border-radius:7px;padding:4px 6px;
     color:var(--jd55-ink);font-size:10px;font-weight:650;max-width:100%}
   .cds55-footer{color:var(--jd55-muted);font-size:11px;font-weight:600;overflow:hidden;
     display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;line-height:1.4}
   @media(max-width:680px){
     .cds55-plaque{grid-template-columns:70px minmax(0,1fr);gap:8px;min-height:128px;
       padding:9px;border-radius:15px}
     .cds56-portrait{width:70px;height:70px}
     .cds55-person-name{font-size:13px}
     .cds55-subline,.cds55-footer{font-size:9px}
     .cds55-chips span{font-size:9px;padding:3px 5px}
   }
    /* v5.14: same editorial hierarchy as Assistant's plaque, mirrored right-to-left.
       Both cards use exactly the same responsive width and portrait dimensions. */
    .cds514-user-card{
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
    .cds514-user-card::before{content:"";position:absolute;inset:0;
      pointer-events:none;background:radial-gradient(ellipse at 94% 12%,#FFFFFF4A,transparent 58%);z-index:-1}
    .cds514-user-portrait{display:flex;align-items:center;justify-content:center;position:relative;
      width:96px;height:96px;aspect-ratio:1 / 1;align-self:center;
      border-radius:13px;overflow:hidden;background:#FFFFFF40;
      border:1px solid #FFFFFFA6;box-shadow:inset 0 0 0 1px #FFFFFF55}
    .cds514-user-portrait::after{content:"";position:absolute;inset:4px;
      border:1px solid #FFFFFF90;border-radius:11px;pointer-events:none}
    .cds514-user-portrait img{width:100%;height:100%;object-fit:contain;object-position:center;
      border-radius:9px;display:block}
    .cds514-user-rail{display:flex;flex-direction:column;justify-content:center;align-items:flex-end;
      text-align:right;gap:7px;min-width:0}
    .cds514-user-name{color:var(--jd514-ink);font-size:17px;line-height:1.35;
      font-weight:800;letter-spacing:.3px;max-width:100%;overflow:hidden;
      white-space:nowrap;text-overflow:ellipsis}
    .cds514-user-name em{font-family:Georgia,serif;font-weight:700;font-style:italic}
    .cds514-user-subline{font-size:10px;line-height:1.4;color:var(--jd514-muted);
      overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:100%;font-style:italic}
    .cds514-user-chips{display:flex;flex-wrap:wrap;align-items:center;gap:5px;justify-content:flex-end}
    .cds514-user-chips span{max-width:100%;background:var(--jd514-chip);color:var(--jd514-ink);
      border-radius:7px;padding:4px 6px;font-size:10px;font-weight:650}
    .cds514-user-footer{color:var(--jd514-muted);font-size:11px;font-weight:600;line-height:1.4;
      display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;
      overflow:hidden;max-width:100%}
    @media(max-width:680px){
      .cds514-user-card{grid-template-columns:minmax(0,1fr) 70px;gap:8px;min-height:128px;
        padding:9px;border-radius:15px}
      .cds514-user-portrait{width:70px;height:70px}
      .cds514-user-name{font-size:13px}
      .cds514-user-subline,.cds514-user-footer{font-size:9px}
      .cds514-user-chips span{font-size:9px;padding:3px 5px}
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
   #cds57-live-tip{position:fixed;z-index:27;min-width:218px;pointer-events:none;
     display:grid;gap:5px;padding:11px 13px;border-radius:14px;
     border:1px solid #A3B7EE91;background:linear-gradient(130deg,#111F43F5,#282451F3);
     color:#EFF4FF;box-shadow:0 12px 36px #0008;backdrop-filter:blur(15px);
     opacity:0;visibility:hidden;transform:translateY(5px);
     transition:opacity .15s ease,transform .15s ease,visibility .15s ease;
     font:600 12px/1.5 system-ui,sans-serif}
   #cds57-live-tip[data-open="yes"]{opacity:1;visibility:visible;transform:translateY(0)}
   #cds57-live-tip .station{color:#BCB8FC;font-size:10px;letter-spacing:1.4px}
   #cds57-live-tip .now{font-size:17px;font-variant-numeric:tabular-nums;letter-spacing:.2px}
   #cds57-live-tip .caption{font-size:10px;color:#C0CEE9;font-weight:500}
   .cds57-live-board{display:flex;flex-wrap:wrap;align-items:center;gap:5px 9px;
     background:#121F40;border:1px solid #607BA15E;border-radius:10px;
     padding:8px 9px;margin-bottom:9px;color:#C6D8FF;font-size:11px}
   .cds57-live-board .live-dot{display:inline-block;width:6px;height:6px;border-radius:50%;
     background:#8DDCCB;box-shadow:0 0 10px #8DDCCB99;animation:cds57-pulse 2.6s ease-in-out infinite}
   .cds57-live-board strong{color:#F2F5FF;font-variant-numeric:tabular-nums;font-size:12px}
   .cds57-live-board small{color:#A5B9DC;font-size:10px;margin-left:auto}
   @keyframes cds57-pulse{50%{opacity:.4;transform:scale(.75)}}
   @media(prefers-reduced-motion:reduce){.cds57-live-board .live-dot{animation:none}}
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
    .cds55-plaque[data-hide-identity="yes"]{grid-template-columns:minmax(0,1fr)}
    .cds55-plaque[data-hide-identity="yes"] .cds56-portrait,
    .cds55-plaque[data-hide-identity="yes"] .cds55-person-name{display:none}
    .cds59-heading{display:flex;align-items:center;justify-content:space-between;gap:8px;
      font:800 12px/1.4 system-ui,sans-serif;letter-spacing:.35px;margin:17px 0 9px;
      padding-top:10px;border-top:1px solid var(--studio-hairline,#7A94CC33)}
    .cds59-title-mini{font:600 9px/1 system-ui,sans-serif;letter-spacing:1.1px;opacity:.65}
    #themeList{grid-template-columns:repeat(2,minmax(0,1fr))!important;gap:7px}
    #themeList button{display:flex;gap:7px;align-items:center;min-height:39px;
      text-align:left;justify-content:flex-start;padding:7px 8px;font-weight:720;white-space:normal}
    #themeList button .cds59-mini-dot{width:17px;height:17px;flex:0 0 17px;border-radius:50%;
      border:1px solid #FFFFFF77;box-shadow:0 1px 7px #0002}
    #themeList button[aria-pressed="true"]{outline:2px solid var(--studio-accent,#91B2FF);outline-offset:1px}
    .cds59-actionrow{margin-top:8px}.cds59-actionrow .btn{flex:1}
    .cds59-editor{border:1px solid var(--studio-hairline,#7A94CC55);border-radius:12px;
      padding:9px 11px;margin-top:10px}
    .cds59-editor summary{cursor:pointer;font-size:12px;font-weight:750}
    .cds59-colorgrid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin:8px 0}
    .cds59-colorgrid label{min-width:0;font-size:10px;margin:0}
    .cds59-colorgrid input[type="color"]{width:100%;height:32px;padding:3px;border:1px solid #FFFFFF55;
      border-radius:8px;cursor:pointer;background:transparent;min-width:0}
    .cds59-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:5px;margin:9px 0}
    .cds59-strip span{display:block;height:12px;border-radius:100px;border:1px solid #FFFFFF88}
    .cds59-two{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px}
    .cds59-two label{min-width:0}
    .cds59-credit{font:italic 10px Georgia,serif;text-align:center;opacity:.72;margin:15px 0 2px}
    #preview{padding:10px!important;gap:7px!important;}
    #preview .preview-row{font-size:11px;gap:7px}
    #preview img{width:29px;height:29px}
    #preview .preview-bubble{padding:6px 9px;line-height:1.4}
    #panel{width:min(392px,calc(100vw - 20px))!important}
    #panel .sep{display:none}
    #panel .cds59-footer{margin-top:13px}
    #panel .cds59-footer .btn{font-size:10px;min-height:30px;padding:6px 8px}
    @media(max-width:420px){#themeList{grid-template-columns:1fr 1fr!important}
      .cds59-colorgrid{grid-template-columns:repeat(3,minmax(0,1fr))}}
   </style>
   <div id="badges" aria-hidden="true"></div>
   <button id="launch" type="button" title="土星主题站 · 点击展开，拖动贴边，双击复位"
     aria-label="打开或收起 Duo Skin 主题面板">
     <svg viewBox="0 0 64 64" aria-hidden="true">
       <ellipse cx="32" cy="34" rx="28" ry="11" transform="rotate(-25 32 34)"
          fill="none" stroke="#DBDAFF" stroke-width="3.6" opacity=".85"/>
       <circle cx="32" cy="32" r="15" fill="#AD9DE9" stroke="#E9E4FF" stroke-width="1.2"/>
       <path d="M21 27 Q31 22 45 29 M19 36 Q32 43 45 35" stroke="#695AAB" stroke-width="3" fill="none" opacity=".7"/>
       <path d="M9 45 Q28 55 53 26" stroke="#F6DDFF" stroke-width="3.5" fill="none" stroke-linecap="round"/>
       <circle cx="49" cy="9" r="2" fill="#fff"/>
     </svg>
   </button>
   <div id="cds57-live-tip" aria-hidden="true"><span class="station">🪐 LIVE SIGNAL · 此刻</span>
      <strong class="now" id="cds57-tip-clock">北京时间 --:--:--</strong>
      <span class="caption" id="cds57-tip-detail">🤍 相识天数 · 本页停留</span></div>
   <section id="panel" hidden>
     <div class="top"><div><div class="eyebrow">ChatGPT Duo Skin · 双人聊天皮肤</div>
       <h2>主题工坊 <span class="panel-grip">⠿</span></h2></div>
       <button class="btn ghost" id="close" type="button" title="缩成迷你土星">收起 ◌</button></div>
   <div class="cds57-live-board" aria-label="星环实时动态">
     <span class="live-dot" aria-hidden="true"></span><span>🪐 星环 LIVE</span>
     <strong id="cds57-panel-clock">--:--:--</strong><small id="cds57-panel-detail">北京时间 · 本页停留</small>
   </div>
   <div id="preview" aria-label="主题实时预览">
     <div class="preview-row"><img id="previewA"><span class="preview-bubble">AI 助手 · Assistant ♡</span></div>
     <div class="preview-row user"><img id="previewU"><span class="preview-bubble">我 · You</span></div>
   </div>
   <div class="cds59-heading"><span>01 / 主题色</span><span class="cds59-title-mini">COLOR STUDIO</span></div>
   <div id="themeList" class="presets" role="group" aria-label="主题列表"></div>
   <div class="row cds59-actionrow"><button class="btn" type="button" id="addTheme">＋ 新建主题</button>
     <button class="btn ghost" type="button" id="editTheme">🎨 编辑当前主题</button></div>
   <details id="themeEdit" class="cds59-editor">
     <summary>渐变调色盘</summary>
     <label>主题名称<input id="themeName" type="text" maxlength="18"></label>
     <div class="cds59-colorgrid">
       <label>主色<input id="colorMain" type="color"></label>
       <label>过渡色<input id="colorMainTo" type="color"></label>
       <label>AI · 深<input id="colorAFrom" type="color"></label>
       <label>AI · 浅<input id="colorATo" type="color"></label>
       <label>用户 · 深<input id="colorUFrom" type="color"></label>
       <label>用户 · 浅<input id="colorUTo" type="color"></label>
     </div>
     <div class="cds59-strip"><span id="sampleMain"></span><span id="sampleAssistant"></span><span id="sampleUser"></span></div>
     <div class="row"><button id="autoColors" type="button" class="btn">✨ 按主色重算渐变</button>
       <button id="deleteTheme" type="button" class="btn ghost">删除此主题</button></div>
   </details>
   <div class="cds59-heading"><span>02 / 身份与状态栏</span></div>
   <div class="row"><button class="btn" id="pickA">AI 头像</button><button class="btn" id="pickU">我的头像</button></div>
   <div class="cds59-two"><label>AI 昵称<input id="assistantName" type="text" maxlength="45"></label>
     <label>我的昵称<input id="userName" type="text" maxlength="45"></label></div>
   <label class="check"><input id="showAvatars" type="checkbox"> 双人头像与昵称</label>
   <label class="check"><input id="showPlaque" type="checkbox"> 每轮状态栏</label>
   <label>纪念日起点（可选）<input id="anniversaryDate" type="date"></label>
    <label class="check"><input id="authoredState" type="checkbox"> AI 亲笔状态优先（需手动启用指令）</label>
   <small id="cds512-author-status">可选扩展：将 docs/AUTHORED_STATE_CN.md 中的指令交给你的 AI。未启用时自动生成本地状态。</small>

   <details id="expressionVault">
     <summary>🎭 表情头像库 · 点击管理</summary>
     <label class="check"><input id="faceAuto" type="checkbox"> 根据消息语气自动换脸</label>
     <div id="faceRoleButtons"><button type="button" class="btn" id="faceAssistant">AI</button>
       <button type="button" class="btn" id="faceUser">用户</button></div>
     <div id="faceGrid" role="group" aria-label="表情头像槽"></div>
     <div id="faceTools">
       <label>表情名称<input id="faceLabel" type="text" maxlength="16" placeholder="给表情起个名字"></label>
       <div class="row"><button class="btn" type="button" id="faceUpload">上传到此槽</button>
         <button class="btn ghost" type="button" id="faceDelete">清空此槽</button></div>
       <div class="row"><button class="btn ghost" type="button" id="faceExport">导出本地头像库</button>
         <button class="btn ghost" type="button" id="faceImportButton">导入头像库</button></div>
       <small>图片仅存在此浏览器的篡改猴里；表情名称可随意改，触发类别不会被改名影响。</small>
     </div>
     <input id="faceFile" type="file" accept="image/png,image/jpeg,image/webp">
     <input id="faceImportFile" type="file" accept=".json,application/json">
   </details>

   <div class="cds59-heading"><span>03 / 双人气泡</span></div>
   <label>双方布局<select id="bubbleMode"><option value="paragraph" title="AI按段落，用户按句号、问号、感叹号和换行智能拆分">智能逐段</option><option value="whole">整条一颗</option><option value="off">原生样式</option></select></label>
   <label class="check"><input id="gradientBubbles" type="checkbox"> 渐变气泡</label>
   <div class="cds59-two"><label>玻璃浓度 <output id="glassValue"></output><input id="glass" type="range" min="35" max="100"></label>
     <label>气泡圆角 <output id="radiusValue"></output><input id="radius" type="range" min="8" max="32"></label></div>
   <div class="cds59-heading"><span>04 / 背景壁纸</span></div>
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
   <div class="row cds59-footer"><button class="btn" id="toggle">暂停主题</button>
     <button class="btn ghost" id="reset">重置界面</button><button class="btn ghost" id="rescan">重新识别</button></div>
   <div class="cds59-credit">Made with ♡ by Soren & Dudusya</div>

     <input id="pickFile" type="file" accept="image/png,image/jpeg,image/webp">
   </section>`;

  const themeSheet=document.createElement('style');shadow.append(themeSheet);

  const faceSheet=document.createElement('style');
  faceSheet.textContent=`
   #expressionVault{margin-top:10px;border:1px solid #7386B95A;border-radius:12px;padding:9px 10px}
   #expressionVault>summary{cursor:pointer;font-size:12px;font-weight:750;color:var(--cds59-ink,#E8EEFF)}
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
    const content=JSON.stringify({schema:'cds511-expression-library/v1',faceLabels,expressionImages},null,2);
    const link=document.createElement('a'),blob=new Blob([content],{type:'application/json'}),url=URL.createObjectURL(blob);
    link.href=url;link.download='DuoSkin_avatar_backup.json';link.click();
    setTimeout(()=>URL.revokeObjectURL(url),2500);
    notice='已导出本地头像库；文件含自选头像，请勿公开分享含私人照片的备份';updateStatus();
  }
  async function importFaceLibrary(){
    const input=$('#faceImportFile');input.value='';input.onchange=async()=>{
      const file=input.files?.[0];if(!file)return;
      try{
        const decoded=JSON.parse(await file.text());
        if(decoded.schema!=='cds511-expression-library/v1')throw Error('文件版本不匹配');
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
      const visual=e.classList?.contains('cds56-original')&&e.nextElementSibling?.classList?.contains('cds56-visual-stack')
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
        if(!didClear.has(a)) {a.setAttribute('data-cds5-clear','');didClear.add(a);}
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
  const bannedSurface='pre,code,figure,blockquote,[data-testid*="code"],[data-testid*="artifact"],.cds5-body,[data-turn-key],[data-testid^="conversation-turn-"],[data-user-message-bubble],.user-message-bubble-color,form,button,[role="dialog"],[role="menu"],aside,nav';
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
      el.removeAttribute('data-cds53-shell');
      el.removeAttribute('data-cds53-backdrop');
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
    document.documentElement.dataset.cds5Paper=on&&cfg.showWallpaper&&safeImage(wallpaper)?'yes':'no';
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
        el.removeAttribute('data-cds53-shell');el.removeAttribute('data-cds53-backdrop');
        shellSurfaces.delete(el);
      }
    }
    for(const el of targets){
      if(!el.hasAttribute('data-cds53-shell'))el.setAttribute('data-cds53-shell','');
      shellSurfaces.add(el);
    }
    // Paint ONLY the selected chat viewport. Other shells become transparent,
    // so a code block keeps its native background and will never be wallpapered.
    const root=preferred||[...targets].find(e=>e.matches(wallRootSelectors));
    if(root&&surfaceSafe(root)){
      if(wallpaperRoot!==root&&wallpaperRoot)wallpaperRoot.removeAttribute('data-cds53-backdrop');
      root.setAttribute('data-cds53-backdrop','');wallpaperRoot=root;
    }
    data.wallpaperSurfaces=shellSurfaces.size;
  }
  function elementSelector(el){
    if(el.id&&el.id!=='cds5-host')return '#'+CSS.escape(el.id);
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
  const SCENE_VERSION=4;
  const SCENE_TOPICS=[
    {name:'开源发布',pattern:/(开源|仓库|GitHub|小红书|许可证|授权|商用|脱敏|发布|分发|README|Release)/i},
    {name:'铭牌文案',pattern:/(铭牌|状态栏|文案|氛围短句|固定模板|每一轮|每轮|快照|跨窗口|情境|上下文)/i},
    {name:'分句气泡',pattern:/(分句|拆句|句号|标点|换行|一坨|粉色气泡|气泡条|聊天气泡)/i},
    {name:'双人头像',pattern:/(头像|昵称|名字|肖像|相框|正方形|圆形头像)/i},
    {name:'壁纸透光',pattern:/(壁纸|白底|蒙层|透明度|背景图|遮罩|图层)/i},
    {name:'主题配色',pattern:/(主题色|配色|渐变|色彩|粉色系|紫色系|深海蓝|换色|颜色)/i},
    {name:'土星面板',pattern:/(土星|拖拽|贴边|面板|缩小图标|设置框|编辑器|按钮)/i},
    {name:'网页适配',pattern:/(DOM|元素定位|React|渲染|兼容性|浏览器结构|网页结构|CSS|脚本|篡改猴|油猴)/i},
    {name:'问题排查',pattern:/(报错|故障|测试|验证|失效|修复|Bug|不显示|看不到|打不开)/i},
    {name:'项目进展',pattern:/(项目|像素|模型|游戏|建模|工程|功能开发)/i}
  ];
  const SCENE_HORIZONS=[
    {name:'音乐角落',pattern:/(音乐|歌单|歌曲|旋律|俄语歌|听歌|唱歌)/},
    {name:'故事一页',pattern:/(漫画|小说|剧情|人物设定|角色扮演|创作|故事)/},
    {name:'生活小事',pattern:/(今天|出门|做饭|吃饭|睡觉|工作日|天气|旅行)/},
    {name:'脑洞研究',pattern:/(为什么|好奇|原理|问题|研究|知识|有趣)/},
    {name:'悄悄聊天',pattern:/(悄悄|秘密|聊聊|说说|告诉你|分享)/}
  ];
  // Default public edition uses the general-purpose local fallback below.
  const SCENE_LEGACY_TAGS=new Set();
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
  const SIGNAL_STORIES={
    night:{
      a:["🌙 夜间信号：有一页仍亮着｜📮 想法信箱：等待新来信","🪐 轨道轻响：星星挪了位置｜🕯 安静灯塔：依旧在场","🌌 思绪航线：缓慢延伸｜🎧 背景音：换成风声"],
      b:["🌠 下一个句号：还没决定去向｜📖 一页新的可能正在翻开","🫧 脑海波纹：轻轻扩散｜🧲 注意力：被这句吸引","🌗 夜色墨水：还没干透｜🔍 继续寻找有趣的角度"]
    },
    work:{
      a:["🧠 逻辑齿轮：重新啮合｜🔧 工具盒：正在找合适的钥匙","🧩 最后拼图：尚待验证｜💡 灵感指示灯：有反应","📐 像素准星：再细一格｜⚙️ 排查清单：逐项核对"],
      b:["🔍 先拿事实说话｜🪛 细节需要更稳的支点","🛠 保留有效改动｜🧪 把假设交给测试","⚡ 想法落地之前：再核验一次｜🎯 目标始终是好用"]
    },
    happy:{
      a:["🌈 七色信号：今天格外明亮｜🎉 欢呼按钮：轻轻按下","✨ 闪亮片段：成功捕捉｜🥳 好消息在转圈","🎊 彩色回声：不断反弹｜🌟 眼前的事：值得庆祝"],
      b:["🎈 喜悦没有必要压缩｜💫 好心情还在发光","🎵 快乐节奏：跑得有点快｜🌈 给这一秒多留点颜色","🌷 开心也值得写进小小档案｜🎉 再来一声欢呼"]
    },
    anger:{
      a:["⚡ 边界清晰：不必吞下问题｜🎙 反对意见：获得话筒","🔥 红线亮起：原因值得认真听｜🧭 指针方向：立场明确","🗯 不满正在成形｜🧷 真实问题：不应该被掩盖"],
      b:["🧠 情绪与逻辑可以同时在线｜💬 请把话说明白","🧭 先找到症结，再谈下一步｜🚦 不急着给结论","🔍 问题的名字：值得被准确写下｜⚡ 不用假装平静"]
    },
    soothe:{
      a:["🫧 安静缓冲：给情绪一把椅子｜🪶 疲惫也能暂时落脚","🌫 雾气流动：路仍然在｜🌙 小夜灯：保持微亮","🕯 温柔提醒：现在可以慢一点｜📮 心事有地方放"],
      b:["🤍 先听完，不忙着纠正｜🌿 留给自己一点余地","🌧 今天可以不是晴天｜🫶 不必急着证明什么","🪶 允许沉默停一会儿｜✨ 下一步从清晰开始"]
    },
    worried:{
      a:["🌫 担心的线团：慢慢梳理｜🧭 事实路标：先立一块","🫧 思绪气压：轻轻下降｜💡 线索灯：开始亮起","🕯 暂停过度预判｜🌙 下一步：先看清现实"],
      b:["🔍 把知道的和猜到的分开｜🧶 从最细一根线理起","🌤 不确定不等于没有路｜🧭 先锁定能控制的部分","🌱 允许犹豫，再好好决定｜🫧 慢一点也没关系"]
    },
    affection:{
      a:["💌 软绵绵的句尾：有一点甜｜✨ 暖光信号：悄悄亮起","🌹 友好值：自然升温｜🎧 声音距离：刚刚好","🫶 心意抵达：不必打包得太满｜🌸 温柔字迹：仍有余温"],
      b:["💗 把这句好意好好接住｜🌷 今天多了一点暖色","🫧 关心不需要太大的声响｜💌 有些话适合轻声说","🌙 留个舒服的停靠点｜✨ 让真诚走在前面"]
    },
    play:{
      a:["🎲 脑洞骰子：滚出意外结果｜🎭 一本正经：坚持了三秒","🪄 笑点捕手：手慢了半拍｜🃏 反转剧情：正在酝酿","😼 轻松时刻：允许有点奇怪｜✨ 想象力：正在跑偏"],
      b:["🤣 先笑一声，再认真想想｜🌀 这转弯也太突然","🎪 荒唐的小点子：值得试试看｜🧩 意外也能成为灵感","😏 玩笑不妨有点锋芒｜🎲 下一次会掷出什么"]
    },
    curious:{
      a:["🔭 好奇望远镜：正在对焦｜🧬 未知信号：出现新纹理","🧠 问号工厂：又亮一盏灯｜🌱 新问题正在生长","🔍 再看深一层｜🪐 知识轨道：转了个弯"],
      b:["🧪 假设要和证据见面｜💡 问题本身就很有意思","🔎 别急着写结论｜🧩 再多观察一角","🌠 发现总发生在追问之后｜📖 继续翻开下一页"]
    },
  };
  function creativeHash(text){let n=2166136261;for(const c of String(text||'')){n=Math.imul(n^c.charCodeAt(0),16777619)>>>0;}return n;}
  function moreImaginativeScene(ctx,mood,topic,serial){
    const bank=SIGNAL_STORIES[mood]||SIGNAL_STORIES.night;
    const seed=creativeHash(ctx.user.slice(0,220)+'|'+ctx.reply.slice(0,110)+'|'+serial);
    const a=bank.a[(seed+serial*7)%bank.a.length];
    const b=bank.b[(Math.floor(seed/17)+serial*11)%bank.b.length];
    const english={"night":["The night remains open.","A quieter orbit.","A page still unfolding."],"work":["Check twice.","Built with care.","One more iteration."],"happy":["A bright moment.","Joy in motion.","Good news, again."],"anger":["A clear boundary.","A sharper point.","Speak plainly."],"soothe":["Take your time.","A soft landing.","Room for quiet."],"worried":["Find the facts.","One thing at a time.","Keep the light on."],"affection":["Warmly received.","A gentle note.","Kindness has arrived."],"play":["An unexpected turn.","A grin in the static.","The plot thickens."],"curious":["Look closer.","New questions await.","Following the thread."]}[mood]||['Still here.'];
    const note=english[(seed+serial)%english.length];
    // Only selected work signals mention subject matter; never parrot boilerplate
    // like “本轮/状态栏/聊天/配色” in every message.
    return {tag:a.replaceAll('{topic}',topic),line:b.replaceAll('{topic}',topic),note};
  }

  function nightFocus(ctx){
    for(const item of SCENE_HORIZONS){
      if(item.pattern.test(ctx.user)||item.pattern.test(ctx.reply))return item.name;
    }
    return '日常探索';
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
    const startDate=cfg.anniversaryDate || '';
    const stampDate=`${v.year}-${v.month}-${v.day}`;
    const diff=startDate ? Math.round((Date.parse(stampDate+'T00:00:00Z')-Date.parse(startDate+'T00:00:00Z'))/86400000)+1 : null;
    const dayLabel=(Number.isFinite(diff) && diff>0) ? `🤍 纪念第${diff}天` : '🤍 纪念日未设置';
    const hour=+v.hour;
    const part=hour<6?'🌑 大半夜':hour<12?'🌤️ 上午':hour<18?'☀️ 下午':'🌕 晚上';
    return {time:`✨ ${v.year}年${v.month}月${v.day}日 ${v.weekday} ${v.hour}:${v.minute} · ${part}`,days:dayLabel};
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
  // v0.2 optional AI-authored State V1. Opt-in model metadata, no network/API calls.
  // Supported standalone reply block (as a paragraph OR preformatted block):
  // DUO_SKIN_STATE_V1:{"protocol":"duo-skin-state/v1",...}
  // Other text, user messages, quoted examples and nonmatching snippets are ignored.
  // OPTIONAL: this is NOT enabled by merely installing a script. An AI needs a
  // separate, user-approved prompt to output it, and unskinned clients can show
  // the raw JSON as part of the actual assistant message.
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
          userCard={tag:a,line:b,note:tidyAuthorText(uc.note,80)||'A note from the user side.',
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
      if(cached?.raw===raw){if(cached.scene){node.classList.add('cds512-meta');return cfg.authoredState?cached.scene:null;}continue;}
      let scene=null;
      try{scene=validateAuthorPayload(JSON.parse(raw.slice(AUTHOR_PREFIX.length).trim()));}catch(_){}
      authorParseCache.set(node,{raw,scene});
      if(scene){node.classList.add('cds512-meta');return cfg.authoredState?scene:null;}
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
      if(node.classList.contains('cds512-meta')||node.textContent.trim().startsWith('DUO_SKIN_STATE_V1:'))return false;
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
      node.classList.add('cds53-line');
      if(node.dataset.cds53Tone!==String(tone))node.dataset.cds53Tone=String(tone);
    }
  }
  function markUserParagraphs(el){
    // v5.9: both roles share the same paragraph layout setting. The native
    // text remains untouched and is never split at sentence punctuation.
    const blocks=[...el.querySelectorAll('p')].filter(n=>n.textContent.trim()&&!n.closest('pre,code,blockquote,[contenteditable]'));
    el.dataset.cds55Split='no';
    for(const block of blocks)block.classList.remove('cds55-user-line');
  }
  function markBodies(items) {
    for(const entry of items){
      const el=entry.element;
      if(el.dataset.cds5Role!==entry.role) el.dataset.cds5Role=entry.role;
      el.classList.add('cds5-body');
      const hasChildren=[...el.children].some(child=>/^(P|DIV|UL|OL|BLOCKQUOTE|H[1-6]|TABLE|PRE)$/.test(child.tagName));
      el.classList.toggle('cds5-plain',!hasChildren);
      markGradientLines(el,entry.role);
      if(entry.role==='user') markUserParagraphs(el);
      const b=entry.role==='user' ? chooseUser(el) : null;
      if(b && b!==el) b.classList.add('cds5-native-user');
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
    const s=nativeUserMessage(e),seed=cardTextSeed(snapshotKey(e)+'|'+s);
    // Describes the wording/tone of a message, not the user's true feelings.
    const test=(p)=>p.test(s);
    let mode='daily';
    if(test(/(?:好难过|哭了|伤心|委屈|呜呜|不开心|难受)/))mode='soft';
    else if(test(/(?:气死我|生气了|我很气|我烦死|我怒了|受不了)/))mode='fierce';
    else if(test(/(?:困了|好困|睡觉|晚安|睡不着)/))mode='sleepy';
    else if(test(/(?:亲亲|啵啵|抱抱|贴贴|爱你|想你|亲爱的)/)&&!test(/(?:代码|修复|脚本|卡片|状态栏|头像)/))mode='affection';
    else if(test(/(?:哈哈哈|嘿嘿|喵哈哈|打滚|好耶|棒棒|漂亮|好喜欢)/))mode='joy';
    else if(test(/(?:对称|卡片|宽度|布局|界面|显示|排版)/))mode='layout';
    else if(test(/(?:表情|头像|相片|图片)/))mode='face';
    else if(test(/(?:状态栏|文案|配色|颜色|渐变|词语)/))mode='creative';
    else if(test(/(?:开源|GitHub|小红书|发布|仓库)/i))mode='release';
    else if(test(/(?:代码|脚本|修复|bug|版本|测试|篡改猴|程序)/i))mode='build';
    else if(test(/(?:为什么|怎么|怎么办|是不是|能不能|有没有|好奇|？|\?)/))mode='wonder';
    // Dedicated to You's message-side view. These phrases describe her
    // *words* and choices; do not claim access to her private emotions.
    // Assistant's separate SCENE_WORDS above are deliberately not used here.
    const bank={"daily":[["📮 日常来信：新的一页","🪐 想法进入轨道","One more thought."],["🌿 生活剪影：正在展开","📖 今天有新的句子","A moment to keep."]],"layout":[["📐 排版放大镜：细节清晰","🪞 左右关系：重新校准","Mind the margins."],["🧩 界面比例：认真检查","🎨 风格方向：已提出新点子","Shape the details."]],"face":[["🎭 表情柜：新面孔登场","📸 细节镜头：留意神态","Every expression counts."],["👁️ 小小头像：值得看清","✨ 新造型：有了想法","Faces and details."]],"creative":[["🎨 颜色实验：新的组合","🌈 想象力：不受模板限制","A fresh color story."],["🪄 灵感纸条：又多一张","💠 风格试验：开始","Create freely."]],"build":[["🧩 功能目标：继续校准","🔧 测试清单：等待验证","Test before sharing."],["🎯 问题定位：进一步细化","⚙️ 修复方案：待实际确认","Keep it reliable."]],"joy":[["🌈 快乐短讯：加了感叹号","🎉 成功信号：闪闪发亮","A happy spark."],["✨ 开心有声：文字会发光","🎊 好消息：值得记住","Worth celebrating."]],"affection":[["💌 好意投递：一字一句","🌷 语气里有暖意","A gentle message."],["🫶 柔软片刻：适合收藏","💗 轻轻一声喜欢","A little affection."]],"fierce":[["⚡ 立场明确：认真对待","🧭 重要问题：说清楚","Point made."],["🧷 这句有态度：不打折","🎯 焦点清晰：拒绝敷衍","Speak clearly."]],"soft":[["☁️ 情绪小雨：留出空间","🤍 不舒服也能被听见","A softer moment."],["🫧 此刻先慢一点","🌙 余地留给自己","Gentle enough."]],"sleepy":[["🌙 夜深了：声音放轻","😴 困意来敲门","Time to rest."],["☁️ 睡前碎片：停在这里","✨ 小夜灯：还亮着","A quiet note."]],"release":[["📦 分享计划：继续完善","📜 授权范围：清晰可见","Share responsibly."],["🎁 公开前检查隐私","🚀 新项目：即将启程","Ready to share."]],"wonder":[["🔭 好奇雷达：捕获新问题","❔ 问号出现：值得追一追","Curiosity begins here."],["🧠 想法种子：正在发芽","🌠 新问题：有了方向","Another question."]]};
    const lines=bank[mode][seed%bank[mode].length];
    return {tag:lines[0],line:lines[1],note:lines[2],mood:mode,authored:false,palette:null};
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
  function paintBadge(e,y,x,width,anchor){
    const id=e.element;
    const plaque=e.role==='assistant'&&cfg.showPlaque;
    // Reuse the SAME two toggles: when both identity + status are enabled,
    // show a full You card. If status is off, keep the tiny legacy badge.
    const userCard=e.role==='user'&&cfg.showPlaque&&cfg.showAvatars;
    const klass=plaque?'cds55-plaque':userCard?'cds514-user-card':'badge '+e.role;
    let node=badgeMap.get(id);
    if(node && node.className!==klass){
      node.remove();badgeMap.delete(id);node=null;
    }
    if(!node){
      node=document.createElement(plaque?'section':'div');node.className=klass;
      if(plaque){
        node.innerHTML='<div class="cds56-portrait"><img alt="AI 助手头像"></div><div class="cds56-rail"><div class="cds55-top"><div class="cds55-headings"><b class="cds55-person-name"></b><span class="cds55-subline"></span></div></div><div class="cds55-chips"><span class="cds55-clock"></span><span class="cds55-days"></span></div><div class="cds55-footer"></div></div>';
      }else if(userCard){
        node.innerHTML='<div class="cds514-user-rail"><b class="cds514-user-name"></b><span class="cds514-user-subline"></span><div class="cds514-user-chips"><span class="cds514-clock"></span><span class="cds514-days"></span></div><div class="cds514-user-footer"></div></div><div class="cds514-user-portrait"><img alt="用户表情头像"></div>';
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
      node.style.bottom=Math.round(innerHeight-e.element.getBoundingClientRect().top+10)+'px';
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
      const caption=node.querySelector('.cds55-person-name');
      const parts=cfg.assistantName.split(' · ');
      if(parts.length>=2){
        const em=document.createElement('em');em.textContent=parts.slice(1).join(' · ');
        caption.replaceChildren(document.createTextNode(parts[0]+' · '),em,document.createTextNode(' ♡'));
      }else caption.textContent=cfg.assistantName+' ♡';
      node.querySelector('.cds55-subline').textContent=scene.note;
      node.querySelector('.cds55-clock').textContent=clock.time;
      node.querySelector('.cds55-days').textContent=clock.days;
      const statusLine=node.querySelector('.cds55-footer');
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
      const caption=node.querySelector('.cds514-user-name');
      const nameParts=cfg.userName.split(' · ');
      if(nameParts.length>=2){
        const em=document.createElement('em');em.textContent=nameParts.slice(1).join(' · ');
        caption.replaceChildren(document.createTextNode(nameParts[0]+' · '),em,document.createTextNode(' ♡'));
      }else caption.textContent=cfg.userName+' ♡';
      const when=beijingClock(record.ts);
      node.querySelector('.cds514-user-subline').textContent=scene.note;
      node.querySelector('.cds514-clock').textContent=when.time;
      node.querySelector('.cds514-days').textContent=when.days;
      const statusLine=node.querySelector('.cds514-user-footer');
      statusLine.textContent=scene.line;
      // User card displays a short status, aligned with the AI card.
      node.dataset.faceSlot=chosen;
      node.dataset.sceneSource=scene.authored?'authored':'local';
    }else{
      node.style.bottom='auto';node.style.top=Math.round(y)+'px';
      const img=node.querySelector('img');const altScene=e.role==='assistant'?archiveFor(e).scene:null;const currentFace=faceSource(e,altScene?.mood,e.role==='assistant'?altScene?.assistantAvatar:authoredUserFaces.get(e.element));if(img.getAttribute('src')!==currentFace)img.src=currentFace;
      node.querySelector('.name').textContent=e.role==='assistant'?cfg.assistantName:cfg.userName;
    }
    return id;
  }
  function redraw(){
    pending=false;
    const items=findMessages();
    data.items=items;
    data.old=items.filter(e=>e.via.startsWith('legacy')).length;
    data.modern=items.length-data.old;
    if(items.length){clearConversationBackground(items);items.forEach(readAuthorState);markBodies(items);}
    renderUserSentences(items);
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
    if(cfg.enabled && (cfg.showAvatars || cfg.showPlaque)){
      for(const e of items){
        if(e.role==='user'&&!cfg.showAvatars)continue;
        const anchor=e.visualElement||e.element;
        const rect=anchor.getBoundingClientRect(),crop=clipped(anchor);
        const plaque=e.role==='assistant'&&cfg.showPlaque;
        const userCard=e.role==='user'&&cfg.showPlaque&&cfg.showAvatars;
        const height=plaque||userCard?(innerWidth<=680?150:158):42;
        // Place header before the real message, not at the viewport edge.
        // When the parent scrolls away, the header disappears with it.
        const y=rect.top-height-10;
        if(rect.width<40 || y+height<Math.max(crop.top,0) || y>Math.min(crop.bottom,innerHeight))continue;
        if(plaque){
          const width=Math.max(180,Math.min(610,innerWidth-24));
          const x=limit(rect.left,12,Math.max(12,innerWidth-width-12));
          active.add(paintBadge(e,y,x,width,anchor));
        }else if(userCard){
          // Right-align to the visible message edge, independent of width.
          // Allow a big enough portrait even for a one-word user message.
          const width=Math.max(180,Math.min(610,innerWidth-24));
          const right=limit(rect.right,12+width,innerWidth-12);
          active.add(paintBadge(e,y,right-width,width,anchor));
        }else{
          const x=limit(e.role==='assistant'?rect.left:rect.right,45,innerWidth-10);
          active.add(paintBadge(e,y,x,undefined,anchor));
        }
      }
    }
    for(const [key,node] of badgeMap) if(!active.has(key)){node.remove();badgeMap.delete(key);}
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
      #cds57-live-tip{background:linear-gradient(130deg,${panelA}F6,${panelB}F6)!important;
        border-color:${border}!important;color:${ink}!important}
      #cds57-live-tip .station,#cds57-live-tip .caption{color:${soft}!important}
      #cds57-live-board{background:${ctl}!important;color:${soft}!important;border-color:${border}80!important}
      #cds57-live-board strong{color:${ink}!important}
      #cds57-live-board small,#panel small,#panel .hint,.eyebrow,.cds59-title-mini{color:${soft}!important}
      #panel label,#panel h2,#panel h3,.cds59-heading,#themeEdit summary{color:${ink}!important}
      #panel .btn{background:${ctl}!important;color:${ink}!important;border:1px solid ${border}A8!important}
      #panel .btn:hover{filter:brightness(${light ? .97 : 1.2})}
      #panel .btn.primary{background:${p.main}!important;color:#FFFFFF!important}
      #panel input[type="text"],#panel select,#panel textarea{background:${ctl}!important;
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
    const roleSel='html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"]';
    for(let i=0;i<aStages;i++){
      const first=mixColor(p.assistantFrom,p.assistantTo,i/(aStages-1));
      const second=mixColor(p.assistantFrom,p.assistantTo,Math.min(1,(i+.63)/(aStages-1)));
      const ink=readableInk(first,a);
      const pre=`${roleSel} .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="${i}"]`;
      lines.push(`${pre}{background:linear-gradient(112deg,${rgba(first,a)},${rgba(second,a)})!important;color:${ink}!important;-webkit-text-fill-color:${ink}!important}`);
      lines.push(`${pre} :is(span,strong,b,em,p,li,h1,h2,h3,h4){color:${ink}!important;-webkit-text-fill-color:${ink}!important}`);
    }
    for(let i=0;i<uStages;i++){
      const first=mixColor(p.userFrom,p.userTo,i/(uStages-1));
      const second=mixColor(p.userFrom,p.userTo,Math.min(1,(i+.75)/(uStages-1)));
      const ink=readableInk(first,a);
      for(const selector of [`.cds56-sentence[data-tone="${i}"]`,`.cds55-user-line[data-cds55-tone="${i}"]`]){
        lines.push(`html[data-cds5-on="yes"] ${selector}{background:linear-gradient(110deg,${rgba(first,a)},${rgba(second,a)})!important;color:${ink}!important;-webkit-text-fill-color:${ink}!important}`);
      }
    }
    const gUser=`linear-gradient(112deg,${rgba(p.userFrom,a)},${rgba(p.userTo,a)})`;
    const fg=readableInk(mixColor(p.userFrom,p.userTo,.4),a);
    const gAssist=`linear-gradient(112deg,${rgba(p.assistantFrom,a)},${rgba(p.assistantTo,a)})`;
    const asFg=readableInk(p.assistantFrom,a);
    lines.push(`html[data-cds5-on="yes"][data-cds53-gradient="yes"] :is([data-user-message-bubble],.user-message-bubble-color,.cds5-body[data-cds5-role="user"]):not(.cds56-original){background:${gUser}!important;color:${fg}!important;-webkit-text-fill-color:${fg}!important}`);
    lines.push(`html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds5-body[data-cds5-role="user"]:not(.cds56-original) :is(span,p,strong,em){color:${fg}!important;-webkit-text-fill-color:${fg}!important}`);
    lines.push(`html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="whole"] .cds5-body[data-cds5-role="assistant"]{background:${gAssist}!important;color:${asFg}!important;-webkit-text-fill-color:${asFg}!important}`);
    lines.push(`html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="whole"] .cds5-body[data-cds5-role="assistant"] :is(p,span,strong,li){color:${asFg}!important;-webkit-text-fill-color:${asFg}!important}`);
    // Non-gradient mode is solid translucent glass for BOTH roles.
    const userSolid=rgba(p.userFrom,a),userInk=readableInk(p.userFrom,a);
    lines.push(`html[data-cds5-on="yes"][data-cds53-gradient="no"][data-cds5-bubble="paragraph"] .cds56-sentence{background:${userSolid}!important;color:${userInk}!important;-webkit-text-fill-color:${userInk}!important}`);
    lines.push(`html[data-cds5-on="yes"][data-cds53-gradient="no"][data-cds5-bubble="paragraph"] .cds55-user-line{background:${userSolid}!important;color:${userInk}!important;-webkit-text-fill-color:${userInk}!important}`);
    // Revert native ChatGPT bubbles when both roles' layout is OFF.
    lines.push(`html[data-cds5-on="yes"][data-cds5-bubble="off"] .cds5-body[data-cds5-role="user"]{background:transparent!important;border:0!important;box-shadow:none!important;padding:0!important}`);
    lines.push(`html[data-cds5-on="yes"][data-cds5-bubble="off"] :is([data-user-message-bubble],.user-message-bubble-color){background:var(--user-message-bubble-color,#E9EDF5)!important;color:var(--text-primary,#23334E)!important;-webkit-text-fill-color:initial!important;box-shadow:none!important}`);
    return lines.join('\n');
  }
  function themeList(){
    const parent=$('#themeList');parent.replaceChildren();
    for(const [id,p] of Object.entries(COLORS)){
      const b=document.createElement('button');b.className='btn';b.type='button';b.dataset.preset=id;
      const chip=document.createElement('span');chip.className='cds59-mini-dot';chip.style.background=`linear-gradient(125deg,${p.main},${p.mainTo})`;
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
    document.documentElement.dataset.cds5On=cfg.enabled?'yes':'no';
    document.documentElement.dataset.cds5Bubble=cfg.bubbleMode;
    document.documentElement.dataset.cds5Mode=cfg.avatarMode;
    document.documentElement.dataset.cds5Avatars=cfg.showAvatars?'yes':'no';
    document.documentElement.dataset.cds53Gradient=cfg.gradientBubbles&&cfg.bubbleMode!=='off'?'yes':'no';
    document.documentElement.dataset.cds53Plaque=cfg.showPlaque?'yes':'no';
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
    document.documentElement.style.setProperty('--cds54-veil',whiteVeil);
    bg.style.backgroundImage=wallpaperOn
      ? `linear-gradient(var(--cds54-veil),var(--cds54-veil)),${imgCSS(wallpaper)}`
      : `radial-gradient(circle at 83% 10%,${rgba(p.accent,dark?.25:.20)},transparent 54%),radial-gradient(circle at 16% 85%,${rgba(p.secondary,.77)},transparent 53%),linear-gradient(180deg,${p.base},${p.secondary})`;
    document.documentElement.style.setProperty('--cds5-wallpaper-layer',wallpaperOn?imgCSS(wallpaper):bg.style.backgroundImage);
    document.documentElement.style.setProperty('--cds5-wallpaper-base',p.base);
    document.documentElement.dataset.cds5Paper=wallpaperOn?'yes':'no';
    const avatarCSS=cfg.showAvatars&&cfg.avatarMode==='css'&&!cfg.showPlaque?`
      html[data-cds5-on="yes"][data-cds5-mode="css"] .cds5-body::before{
        content:""!important;position:absolute!important;width:38px!important;height:38px!important;
        top:-44px!important;left:0!important;border:2px solid ${p.border}!important;
        background-size:contain!important;background-position:center!important;background-repeat:no-repeat!important;border-radius:100%!important;z-index:3!important;}
      html[data-cds5-on="yes"][data-cds5-mode="css"] .cds5-body::after{
        position:absolute!important;top:-38px!important;left:46px!important;
        border-radius:8px!important;padding:2px 7px!important;font:700 12px/24px system-ui!important;
        background:${transparent}!important;color:${p.muted}!important;white-space:nowrap!important;}
      html[data-cds5-on="yes"][data-cds5-mode="css"] .cds5-body[data-cds5-role="assistant"]::before{background-image:${imgCSS(avatars.assistant)}!important}
      html[data-cds5-on="yes"][data-cds5-mode="css"] .cds5-body[data-cds5-role="user"]::before{background-image:${imgCSS(avatars.user)}!important}
      html[data-cds5-on="yes"][data-cds5-mode="css"] .cds5-body[data-cds5-role="assistant"]::after{content:${JSON.stringify(cfg.assistantName)}!important}
      html[data-cds5-on="yes"][data-cds5-mode="css"] .cds5-body[data-cds5-role="user"]::after{content:${JSON.stringify(cfg.userName)}!important}
      `:'';
    stylesheet.textContent=`
      html[data-cds5-on="yes"]{--text-primary:${p.text}!important;--text-secondary:${p.muted}!important;
        --main-surface-primary:transparent!important;--main-surface-secondary:transparent!important;
        --sidebar-surface-primary:${sidebar}!important;--sidebar-surface-secondary:${sidebar}!important;
        --cds5-ink:${p.text};--cds5-bubble:${bubble};}
      html[data-cds5-on="yes"],html[data-cds5-on="yes"] body{
        background-color:${p.base}!important;color:${p.text}!important;}
      html[data-cds5-on="yes"] body>#cds5-wallpaper {z-index:0!important;}
       /* Per-message spacing instead of one global top plaque. */
      /* v5.3: only actual conversation APP SHELLS can be cleared/painted. */
       html[data-cds5-on="yes"] body [data-cds53-shell]{
         background-color:transparent!important;background-image:none!important;
       }
       html[data-cds5-on="yes"][data-cds5-paper="yes"] body [data-cds53-backdrop]{
         background-color:var(--cds5-wallpaper-base)!important;
         background-image:linear-gradient(var(--cds54-veil),var(--cds54-veil)),var(--cds5-wallpaper-layer)!important;
         background-size:cover!important;background-position:center center!important;
         background-attachment:fixed!important;background-repeat:no-repeat!important;
       }
       html[data-cds5-on="yes"] body [data-cds53-backdrop]:is(pre,code,[data-testid*="code"]){background-image:none!important;}
      html[data-cds5-on="yes"] body > :not(#cds5-wallpaper):not(#cds5-host):not(script):not(style){
        position:relative;z-index:1;}
      html[data-cds5-on="yes"] [data-cds5-clear]{background-color:transparent!important;
        background-image:none!important;}
      html[data-cds5-on="yes"] :where(main,[role="main"],#thread,#root,#__next,#app,[data-testid="conversation-panel"]){
        background-color:transparent!important;background-image:none!important;}
      html[data-cds5-on="yes"] :is(main,[role="main"],#thread) :is([class*="bg-token-main-surface"], [class*="bg-white"], [class*="bg-\[white"], [class*="bg-\[\#fff"]) {
        background-color:transparent!important;}
      html[data-cds5-on="yes"] :is(${SIDEBAR}) {background:${sidebar}!important;backdrop-filter:blur(15px)!important;
        border-right:1px solid ${rgba(p.border,.2)}!important;color:${p.text}!important;}
      html[data-cds5-on="yes"] :is(${SIDEBAR}) a {color:${p.muted}!important;}
      html[data-cds5-on="yes"] :is(main,[role="main"]) :is(.text-token-text-primary,[class*="text-token-text-primary"]){color:${canvasInk}!important;}
      html[data-cds5-on="yes"] :is(#page-header,header[data-testid="header"]) {background:${transparent}!important;
        border-bottom:1px solid ${rgba(p.border,.23)}!important;backdrop-filter:blur(15px)!important;}
      html[data-cds5-on="yes"] :is(form[data-chatgpt-composer],form:has(#prompt-textarea),#composer-background){
        background:${composerBG}!important;color:#142D60!important;
        border:1px solid ${rgba(p.border,.45)}!important;border-radius:20px!important;backdrop-filter:blur(19px)!important;}
      html[data-cds5-on="yes"] :is([data-chatgpt-composer] [contenteditable="true"],[data-chatgpt-composer] [role="textbox"],#prompt-textarea){
        color:${p.text}!important;background:transparent!important;}
      /* v5.2: Keep the COMPOSER legible on its light background, regardless of page theme.
         Override v5's inherited --text-primary, including ProseMirror/Lexical child text. */
      html[data-cds5-on="yes"] :is(form[data-chatgpt-composer],form:has(#prompt-textarea),#composer-background,[data-testid="composer"]){
        --text-primary:#142D60!important;
        --text-secondary:#526B91!important;
      }
      html[data-cds5-on="yes"] :is(
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
      html[data-cds5-on="yes"] :is(
        #prompt-textarea,
        [data-chatgpt-composer] [contenteditable="true"],
        form:has(#prompt-textarea) [contenteditable="true"],
        #composer-background [contenteditable="true"],
        [data-testid="composer"] [contenteditable="true"]
      ) :is(p,span,strong,em,div,[class*="text-token-text-primary"]){
        color:#142D60!important;
        -webkit-text-fill-color:#142D60!important;
      }
      html[data-cds5-on="yes"] :is(
        #prompt-textarea,
        [data-chatgpt-composer] [contenteditable="true"],
        #composer-background [contenteditable="true"],
        [data-testid="composer"] [contenteditable="true"]
      ) :is(p[data-placeholder],p.is-editor-empty,p.is-empty,[data-placeholder])::before,
      html[data-cds5-on="yes"] :is(#prompt-textarea,[data-chatgpt-composer] [contenteditable="true"],[data-testid="composer"] [contenteditable="true"])::placeholder{
        color:#526B91!important;
        -webkit-text-fill-color:#526B91!important;
        opacity:1!important;
      }
      html[data-cds5-on="yes"] :is(#prompt-textarea,form[data-chatgpt-composer] textarea)::selection{
        color:#142D60!important;
        background:#B9CCFF!important;
      }
      html[data-cds5-on="yes"] .cds5-body{position:relative!important;overflow:visible!important;max-width:100%;}
       html[data-cds5-on="yes"][data-cds53-plaque="yes"] .cds5-body[data-cds5-role="assistant"]{margin-top:178px!important;}
       html[data-cds5-on="yes"][data-cds53-plaque="no"][data-cds5-avatars="yes"] .cds5-body[data-cds5-role="assistant"]{margin-top:57px!important;}
      /* Normal user message reserves vertical room for the expressive card.
         With status off, fall back to the original compact nickname badge. */
      html[data-cds5-on="yes"][data-cds53-plaque="yes"][data-cds5-avatars="yes"] .cds5-body[data-cds5-role="user"]{margin-top:178px!important;}
      html[data-cds5-on="yes"][data-cds53-plaque="no"][data-cds5-avatars="yes"] .cds5-body[data-cds5-role="user"]{margin-top:59px!important;}
      html[data-cds5-on="yes"] .cds5-body[data-cds5-role="assistant"]{color:${canvasInk}!important;}
      html[data-cds5-on="yes"] .cds5-body[data-cds5-role="assistant"] :is(p,li,h1,h2,h3,strong){color:inherit;}
      html[data-cds5-on="yes"] .cds5-body[data-cds5-role="assistant"] a{color:${dark?'#ADC4FF':'#3459B7'}!important;}
      html[data-cds5-on="yes"][data-cds5-bubble]:not([data-cds5-bubble="off"]) .cds5-body[data-cds5-role="user"] {
        color:${p.userText}!important;background:${user}!important;border-radius:${cfg.radius}px!important;
        border:1px solid ${rgba(p.border,.32)}!important;box-shadow:0 3px 18px #0002!important;}
      html[data-cds5-on="yes"] [data-user-message-bubble],
      html[data-cds5-on="yes"] .user-message-bubble-color {
        background:${user}!important;color:${p.userText}!important;border-radius:${cfg.radius}px!important;}
      html[data-cds5-on="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] > :is(p,ul,ol,blockquote,h2,h3) {
        width:fit-content;max-width:100%;background:${bubble}!important;border-radius:${cfg.radius}px!important;
        padding:10px 14px!important;margin:7px 0!important;border:1px solid ${rgba(p.border,.23)}!important;
        box-shadow:0 3px 16px #0002!important;overflow-wrap:anywhere;}
      html[data-cds5-on="yes"][data-cds5-bubble="paragraph"] .cds5-body.cds5-plain[data-cds5-role="assistant"]{
        background:${bubble}!important;border-radius:${cfg.radius}px!important;padding:11px 15px!important;
        border:1px solid ${rgba(p.border,.22)}!important;}
      html[data-cds5-on="yes"][data-cds5-bubble="whole"] .cds5-body[data-cds5-role="assistant"]{
        background:${bubble}!important;border-radius:${cfg.radius}px!important;padding:13px 16px!important;
        border:1px solid ${rgba(p.border,.25)}!important;}
       html[data-cds5-on="yes"] .cds5-body pre,
       html[data-cds5-on="yes"] .cds5-body table {max-width:100%;overflow:auto;}
       /* Both gradients use progressively lighter tones between MESSAGE PARAGRAPHS.
          No React child wrappers, no equal-width cards, no code block changes. */
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds53-line[data-cds53-tone]{
         display:flow-root!important;width:fit-content!important;max-width:min(100%,740px)!important;
         margin:8px 0!important;padding:11px 14px!important;border-radius:${cfg.radius}px!important;
         border:0!important;box-shadow:0 4px 13px #08152a24!important;overflow-wrap:anywhere!important;
         font-size:inherit!important;line-height:1.7!important;
       }
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="0"]{background:linear-gradient(112deg,#223450,#304761)!important;color:#FFFFFF!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="1"]{background:linear-gradient(112deg,#304761,#4B6984)!important;color:#FFFFFF!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="2"]{background:linear-gradient(112deg,#4B6984,#6E8BA4)!important;color:#FFFFFF!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="3"]{background:linear-gradient(112deg,#6E8BA4,#A5BED0)!important;color:#11293E!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="4"]{background:linear-gradient(112deg,#D5E3EB,#EFF5F9)!important;color:#172B3B!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"][data-cds5-bubble="paragraph"] .cds5-body[data-cds5-role="assistant"] .cds53-line[data-cds53-tone="5"]{background:linear-gradient(112deg,#E2ECF3,#EFF5F9)!important;color:#172B3B!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds53-line[data-cds53-tone="0"] :is(p,li,span,strong){color:#FFFFFF!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds53-line[data-cds53-tone="5"] :is(p,li,span,strong){color:#172B3B!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds53-line :is(span,strong,em,li,b,h1,h2,h3,h4){color:inherit!important;-webkit-text-fill-color:currentColor!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds53-line a{color:inherit!important;text-decoration:underline!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] :is([data-user-message-bubble],.user-message-bubble-color,.cds5-body[data-cds5-role="user"]){
         background:linear-gradient(112deg,#E65398 0%,#F06BAB 34%,#F58CBD 68%,#FBD6E6 100%)!important;
         color:#4B2140!important;-webkit-text-fill-color:#4B2140!important;
         width:fit-content!important;max-width:90%!important;min-width:0!important;
         padding:11px 15px!important;border-radius:${cfg.radius}px!important;
         box-shadow:0 4px 16px #57224420!important;
       }
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] :is([data-user-message-bubble],.user-message-bubble-color,.cds5-body[data-cds5-role="user"]) :is(p,span,strong,em){color:#4B2140!important;-webkit-text-fill-color:#4B2140!important;}
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds5-body[data-cds5-role="user"][data-cds55-split="yes"]{
         background:transparent!important;border:0!important;box-shadow:none!important;
         padding:0!important;max-width:100%!important;width:100%!important;
       }
       html[data-cds5-on="yes"][data-cds53-gradient="yes"] .cds5-body[data-cds5-role="user"][data-cds55-split="yes"] .cds55-user-line{
         display:flow-root!important;margin:8px 0 8px auto!important;padding:10px 14px!important;
         width:fit-content!important;max-width:92%!important;min-width:0!important;
         border-radius:${cfg.radius}px!important;color:#512644!important;-webkit-text-fill-color:#512644!important;
         box-shadow:0 4px 13px #65234126!important;overflow-wrap:anywhere!important;
       }
       html[data-cds5-on="yes"] .cds55-user-line[data-cds55-tone="0"]{background:linear-gradient(110deg,#E65398,#F06BAB)!important;}
       html[data-cds5-on="yes"] .cds55-user-line[data-cds55-tone="1"]{background:linear-gradient(110deg,#F06BAB,#F58CBD)!important;}
       html[data-cds5-on="yes"] .cds55-user-line[data-cds55-tone="2"]{background:linear-gradient(110deg,#F58CBD,#F8BAD4)!important;}
       html[data-cds5-on="yes"] .cds55-user-line[data-cds55-tone="3"]{background:linear-gradient(110deg,#F8BAD4,#FBD6E6)!important;}
       html[data-cds5-on="yes"] .cds55-user-line[data-cds55-tone="4"]{background:linear-gradient(110deg,#FBD6E6,#FEEDF5)!important;}
       /* Sentences are a purely presentational, aria-hidden sibling; native source
          remains in place for official copy/edit/accessibility controls. */
       html[data-cds5-on="yes"] .cds56-original{
         position:absolute!important;width:1px!important;height:1px!important;
         max-width:1px!important;min-width:0!important;min-height:0!important;
         overflow:hidden!important;clip-path:inset(50%)!important;
         opacity:0!important;pointer-events:none!important;
         padding:0!important;margin:0!important;border:0!important;
       }
       html[data-cds5-on="yes"] .cds56-visual-stack{
         position:relative!important;display:flex!important;flex-direction:column!important;
         align-items:flex-end!important;gap:9px!important;
         width:fit-content!important;max-width:min(91%,760px)!important;
         min-width:0!important;margin:0 0 0 auto!important;
         padding:0!important;background:transparent!important;border:0!important;
         box-shadow:none!important;overflow:visible!important;
       }
       html[data-cds5-on="yes"][data-cds53-plaque="yes"][data-cds5-avatars="yes"] .cds56-visual-stack.cds56-visual-owns-gap{
         margin-top:178px!important;
       }
       html[data-cds5-on="yes"]:not([data-cds53-plaque="yes"][data-cds5-avatars="yes"]) .cds56-visual-stack.cds56-visual-owns-gap{
         margin-top:59px!important;
       }
       html[data-cds5-on="yes"] .cds56-sentence{
         display:block!important;align-self:flex-end!important;width:fit-content!important;
         max-width:100%!important;min-width:0!important;
         padding:11px 15px!important;border-radius:${cfg.radius}px!important;
         color:#4B2140!important;-webkit-text-fill-color:#4B2140!important;
         font:inherit!important;white-space:pre-wrap!important;
         overflow-wrap:anywhere!important;line-height:1.65!important;
         box-shadow:0 4px 13px #65234129!important;
       }
       html[data-cds5-on="yes"] .cds56-sentence[data-tone="0"]{background:linear-gradient(110deg,#E65398,#F06BAB)!important}
       html[data-cds5-on="yes"] .cds56-sentence[data-tone="1"]{background:linear-gradient(110deg,#F06BAB,#F58CBD)!important}
       html[data-cds5-on="yes"] .cds56-sentence[data-tone="2"]{background:linear-gradient(110deg,#F58CBD,#F8BAD4)!important}
       html[data-cds5-on="yes"] .cds56-sentence[data-tone="3"]{background:linear-gradient(110deg,#F8BAD4,#FBD6E6)!important}
       html[data-cds5-on="yes"] .cds56-sentence[data-tone="4"]{background:linear-gradient(110deg,#FBD6E6,#FEEDF5)!important}
       ${avatarCSS}
       ${gradualCSS()}
       @media(max-width:680px){
         html[data-cds5-on="yes"][data-cds53-plaque="yes"] .cds5-body[data-cds5-role="assistant"]{margin-top:187px!important;}
         html[data-cds5-on="yes"][data-cds53-plaque="no"][data-cds5-avatars="yes"] .cds5-body[data-cds5-role="assistant"]{margin-top:57px!important;}
          html[data-cds5-on="yes"][data-cds53-plaque="yes"][data-cds5-avatars="yes"] .cds5-body[data-cds5-role="user"]{margin-top:187px!important;}
          html[data-cds5-on="yes"][data-cds53-plaque="no"][data-cds5-avatars="yes"] .cds5-body[data-cds5-role="user"]{margin-top:58px!important;}
          html[data-cds5-on="yes"][data-cds53-plaque="yes"][data-cds5-avatars="yes"] .cds56-visual-stack.cds56-visual-owns-gap{margin-top:187px!important;}
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
    if(el.querySelector('img,svg,picture,video,audio,canvas,pre,code,table,ul,ol,a,button,[role="button"],[contenteditable],input,[data-testid*="attachment"],.cds56-visual-stack'))return false;
    const children=el.querySelectorAll('*');
    if(children.length>30||[...children].some(n=>!['DIV','P','SPAN','BR'].includes(n.tagName)))return false;
    return true;
  }
  function clearSplit(bubble){
    const old=visualSplits.get(bubble);
    if(old?.wrap?.isConnected)old.wrap.remove();
    bubble?.classList?.remove('cds56-original');
    bubble?.removeAttribute?.('data-cds56-split-source');
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
      wrap.className='cds56-visual-stack';
      wrap.setAttribute('aria-hidden','true');
      if(bubble.classList.contains('cds5-body'))wrap.classList.add('cds56-visual-owns-gap');
      const total=parts.length;
      parts.forEach((part,i)=>{
        const pill=document.createElement('div');pill.className='cds56-sentence';
        const tone=Math.min(4,Math.round(i*4/Math.max(1,total-1)));
        pill.dataset.tone=String(tone);pill.textContent=part;wrap.appendChild(pill);
      });
      // A sibling does not modify ChatGPT's real message or its native actions.
      bubble.after(wrap);
      bubble.classList.add('cds56-original');
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
      `Theme v5.14 / ${location.hostname}`,
      `旧标记=${p.oldRoles}，新版turn=${p.newTurnKeys}，新版unit=${p.newUnitKeys}`,
      `userBubble=${p.userBubbles}，assistantMarkdown=${p.assistantTextBlocks}，assistantRole=${p.newAssistantRoles}`,
      `识别到=${data.items.length}，assistant=${data.items.filter(x=>x.role==='assistant').length}，user=${data.items.filter(x=>x.role==='user').length}`,
      `头像浮层=${badgeMap.size}，背景层=${bg.style.display}，壁纸=${safeImage(wallpaper)?'已上传':'渐变'}，壳层=${shellSurfaces.size}，主画布=${stamp(wallpaperRoot)}，手动=${manualSelector?'已指定':'无'}`, 
      `主题=${cfg.preset}，气泡=${cfg.bubbleMode}，玻璃=${Math.round(cfg.glass*100)}%，主题数=${Object.keys(COLORS).length}`
    ].join('\n');
  }
  function updateStatus(){
    const label=$('#cds512-author-status');
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
            const factor=Math.min(1,1900/Math.max(image.width,image.height));
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
  const POS_PANEL='cds.public.v1.panel.position',POS_DOCK='cds.public.v1.dock.position';
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
      const w=panel.offsetWidth||362,h=panel.offsetHeight||500;
      panelPos={x:limit(d.right-w,7,Math.max(7,innerWidth-w-7)),
        y:limit(d.top-h-8,7,Math.max(7,innerHeight-h-7))};
    }
    panelPos=move(panel,panelPos.x,panelPos.y);
  }
  function togglePanel(){
    panel.hidden=!panel.hidden;
    if(!panel.hidden){placePanel();updateStatus();}
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
  const liveTip=$('#cds57-live-tip');
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
    $('#cds57-tip-clock').textContent=text;
    $('#cds57-tip-detail').textContent=day.days+' · 本页停留 '+during;
    $('#cds57-panel-clock').textContent=now;
    $('#cds57-panel-detail').textContent=day.days.replace('相识第','第')+' · 停留'+during;
    if(liveHover)placeLiveTip();
  }
  function showLive(show){
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
         document.documentElement.style.setProperty('--cds54-veil',rgba('#FFFFFF',cfg.wallpaperVeil));
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
  window.addEventListener('scroll',schedule,true);
  window.addEventListener('popstate',schedule);
  new MutationObserver(ms=>{if(ms.some(m=>!host.contains(m.target) && m.target!==host && m.target!==bg))schedule();})
    .observe(document.body,{subtree:true,childList:true});
  applyTheme();schedule();
  setInterval(()=>{if(cfg.enabled)schedule();},60000);
  console.info('[Assistant × You] v5.15: symmetric status hierarchy, role-specific copy and authored two-stage cards.');
})();
