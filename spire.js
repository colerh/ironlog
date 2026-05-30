// ── Iron Forge: Spire of Iron ─────────────────────────────────────────────────
// Slay-the-Spire roguelike powered by IronLog workout data

const SPIRE_KEY = 'ironlog_spire';

// ── Card library ──────────────────────────────────────────────────────────────
const CARD_LIB = {
  // Starter
  'strike':         { id:'strike',         name:'Strike',          type:'attack', cost:1,  damage:6,               desc:'Deal 6 damage.',                  rarity:'starter' },
  'defend':         { id:'defend',         name:'Defend',          type:'skill',  cost:1,  block:5,                desc:'Gain 5 block.',                   rarity:'starter' },
  'bash':           { id:'bash',           name:'Bash',            type:'attack', cost:2,  damage:8,  apply:{vulnerable:2}, desc:'Deal 8 dmg. Apply 2 Vulnerable.', rarity:'starter' },
  // Push (chest/tris)
  'heavy-press':    { id:'heavy-press',    name:'Heavy Press',     type:'attack', cost:2,  damage:14,              desc:'Deal 14 damage.',                 rarity:'common',   exTag:'push' },
  'push-it':        { id:'push-it',        name:'Push It',         type:'attack', cost:1,  damage:8,               desc:'Deal 8 damage.',                  rarity:'common',   exTag:'push' },
  'iron-wall':      { id:'iron-wall',      name:'Iron Wall',       type:'skill',  cost:1,  block:8,                desc:'Gain 8 block.',                   rarity:'common',   exTag:'push' },
  'incline-blast':  { id:'incline-blast',  name:'Incline Blast',   type:'attack', cost:1,  damage:6,  hits:2,      desc:'Deal 6 damage twice.',            rarity:'uncommon', exTag:'push' },
  // Pull (back/bis)
  'lat-shield':     { id:'lat-shield',     name:'Lat Shield',      type:'skill',  cost:1,  block:9,                desc:'Gain 9 block.',                   rarity:'common',   exTag:'pull' },
  'row-hard':       { id:'row-hard',       name:'Row Hard',        type:'attack', cost:1,  damage:7,  draw:1,      desc:'Deal 7 damage. Draw 1.',          rarity:'common',   exTag:'pull' },
  'dead-row':       { id:'dead-row',       name:'Dead Row',        type:'attack', cost:2,  damage:12, block:4,     desc:'Deal 12 damage. Gain 4 block.',   rarity:'uncommon', exTag:'pull' },
  'full-pulldown':  { id:'full-pulldown',  name:'Full Pulldown',   type:'skill',  cost:1,  block:7,   draw:2,      desc:'Gain 7 block. Draw 2.',           rarity:'uncommon', exTag:'pull' },
  // Legs
  'squat-power':    { id:'squat-power',    name:'Squat Power',     type:'attack', cost:1,  damage:6,  block:4,     desc:'Deal 6 dmg. Gain 4 block.',       rarity:'common',   exTag:'legs' },
  'leg-day':        { id:'leg-day',        name:'Leg Day',         type:'skill',  cost:2,  block:14,               desc:'Gain 14 block.',                  rarity:'common',   exTag:'legs' },
  'deadlift':       { id:'deadlift',       name:'Deadlift',        type:'attack', cost:2,  damage:18,              desc:'Deal 18 damage.',                 rarity:'uncommon', exTag:'legs' },
  'leg-press-wall': { id:'leg-press-wall', name:'Leg Press',       type:'skill',  cost:1,  block:12,               desc:'Gain 12 block.',                  rarity:'uncommon', exTag:'legs' },
  'leg-drive':      { id:'leg-drive',      name:'Leg Drive',       type:'power',  cost:1,  buff:{strength:2},      desc:'Gain 2 Strength.',                rarity:'rare',     exTag:'legs' },
  // Shoulders / core
  'ohp-slam':       { id:'ohp-slam',       name:'OHP Slam',        type:'attack', cost:1,  damage:8,               desc:'Deal 8 damage.',                  rarity:'common',   exTag:'shoulders' },
  'face-pull-grd':  { id:'face-pull-grd',  name:'Face Pull Guard', type:'skill',  cost:1,  block:6,   apply:{weak:1}, desc:'Gain 6 block. Weaken enemy.',  rarity:'uncommon', exTag:'shoulders' },
  'core-brace':     { id:'core-brace',     name:'Core Brace',      type:'skill',  cost:0,  block:3,                desc:'Gain 3 block.',                   rarity:'common',   exTag:'core' },
  // Cardio
  'endurance-run':  { id:'endurance-run',  name:'Endurance Run',   type:'power',  cost:1,  buff:{dexterity:3},     desc:'Gain 3 Dexterity.',               rarity:'rare',     exTag:'cardio' },
  // Rare / Power
  'iron-will':      { id:'iron-will',      name:'Iron Will',       type:'power',  cost:1,  power:{strengthPerTurn:1}, desc:'Gain 1 Strength each turn.',   rarity:'rare' },
  'primal-rage':    { id:'primal-rage',    name:'Primal Rage',     type:'power',  cost:0,  buff:{strength:1}, selfApply:{vulnerable:1}, desc:'Gain 1 Str. Gain 1 Vulnerable.', rarity:'rare' },
  // Curses
  'fatigue':        { id:'fatigue',        name:'Fatigue',         type:'curse',  cost:-1,                         desc:'Unplayable.',                     rarity:'curse' },
  'rest-day':       { id:'rest-day',       name:'Rest Day',        type:'curse',  cost:-1, onDraw:{damage:4},      desc:'Unplayable. Lose 4 HP when drawn.',rarity:'curse' },
};

const EX_CARD_MAP = {
  push:      ['heavy-press','push-it','iron-wall','incline-blast','primal-rage'],
  pull:      ['lat-shield','row-hard','dead-row','full-pulldown','face-pull-grd'],
  legs:      ['squat-power','leg-day','deadlift','leg-press-wall','leg-drive'],
  shoulders: ['ohp-slam','face-pull-grd','iron-will'],
  core:      ['core-brace','endurance-run','iron-will'],
  cardio:    ['endurance-run','core-brace','lat-shield'],
};

function exToTag(exercise) {
  const e = (exercise||'').toLowerCase();
  if (/squat|lunge|deadlift|leg |calf|glute|hip|bulgarian|rdl|hack/.test(e)) return 'legs';
  if (/row|pull|lat|curl|bicep|chin/.test(e)) return 'pull';
  if (/shoulder|delt|lateral|raise|ohp|overhead/.test(e) && !/bench/.test(e)) return 'shoulders';
  if (/plank|ab |core|crunch|hanging/.test(e)) return 'core';
  if (/run|cardio|bike|swim|walk|ellip|stair/.test(e)) return 'cardio';
  return 'push'; // bench, press, fly, tricep, dip → push
}

// ── Enemies ───────────────────────────────────────────────────────────────────
const ENEMIES = {
  'gym-rat':     { name:'Gym Rat',      maxHp:42,  icon:'🐀', actions:[{t:'atk',dmg:8},{t:'atk',dmg:8},{t:'def',blk:6}] },
  'cardio-bunny':{ name:'Cardio Bunny', maxHp:38,  icon:'🐇', actions:[{t:'atk',dmg:6},{t:'atk',dmg:6},{t:'atk',dmg:6}] },
  'the-slacker': { name:'The Slacker',  maxHp:55,  icon:'😴', actions:[{t:'atk',dmg:10},{t:'deb',apply:{weak:2}},{t:'atk',dmg:12}] },
  'iron-giant':  { name:'Iron Giant',   maxHp:80,  icon:'🦾', actions:[{t:'atk',dmg:14},{t:'def',blk:8},{t:'atk',dmg:18}] },
  'gym-bro':     { name:'The Gym Bro',  maxHp:100, icon:'💪', actions:[{t:'atk',dmg:16},{t:'atk',dmg:12},{t:'buf',buff:{strength:3}}], isElite:true },
  'cardio-karen':{ name:'Cardio Karen', maxHp:88,  icon:'🏃‍♀️', actions:[{t:'atk',dmg:10},{t:'heal',amount:10},{t:'atk',dmg:14}], isElite:true },
  'iron-tyrant': { name:'Iron Tyrant',  maxHp:250, icon:'👹', actions:[{t:'atk',dmg:20},{t:'atk',dmg:15},{t:'buf',buff:{strength:5}},{t:'atk',dmg:30}], isBoss:true },
};

// ── Relics ────────────────────────────────────────────────────────────────────
const RELICS = {
  'protein-bar':  { name:'Protein Bar',     desc:'Start each combat with 5 block.',          icon:'🍫' },
  'lifting-belt': { name:'Lifting Belt',    desc:'Gain 1 extra max energy.',                 icon:'🏋️' },
  'chalk-bag':    { name:'Chalk Bag',       desc:'First attack each combat deals +4 damage.',icon:'🧴' },
  'gym-card':     { name:'Gym Membership',  desc:'Heal 5 HP at end of each combat.',          icon:'🎫' },
  'pre-workout':  { name:'Pre-Workout Can', desc:'Draw 1 extra card each turn.',              icon:'💊' },
};

// ── Potions ───────────────────────────────────────────────────────────────────
const POTIONS = {
  'protein-shake':{ name:'Protein Shake', desc:'Heal 15 HP.',              icon:'🥛', color:'#22c55e' },
  'pre-wo':       { name:'Pre-Workout',   desc:'Gain 2 extra energy.',      icon:'⚡', color:'#f59e0b' },
  'creatine':     { name:'Creatine',      desc:'+4 Strength this combat.',  icon:'💉', color:'#6c63ff' },
  'cold-brew':    { name:'Cold Brew',     desc:'Draw 3 cards.',             icon:'☕', color:'#06b6d4' },
};

// ── Map layout ────────────────────────────────────────────────────────────────
const MAP_FLOORS = [
  ['combat','combat','event'],
  ['combat','elite','campfire'],
  ['combat','event','campfire'],
  ['combat','elite','combat'],
  ['boss','boss','boss'],
];
const NODE_ICONS = { combat:'⚔️', elite:'💀', campfire:'🔥', event:'❓', boss:'👹' };

// ── Storage ───────────────────────────────────────────────────────────────────
const getSpire    = () => ls.get(SPIRE_KEY) || { stats:{runs:0,victories:0}, run:null };
const setSpire    = v  => ls.set(SPIRE_KEY, v);
const getSpireRun = () => getSpire().run;
function setSpireRun(run) { const s=getSpire(); s.run=run; setSpire(s); }

// ── Helpers ───────────────────────────────────────────────────────────────────
function mkCard(id) { return { ...CARD_LIB[id], uid: Date.now().toString(36)+Math.random().toString(36).slice(2) }; }
function spShuffle(arr) { for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];} return arr; }
function spStr(run)  { return run.player.buffs.strength||0; }
function spDex(run)  { return run.player.buffs.dexterity||0; }

// ── New run ───────────────────────────────────────────────────────────────────
function newSpireRun() {
  const maxHp=80;
  return {
    active:true, floor:0, nodeIndex:null, phase:'map',
    actionIdx:0, chalked:false,
    player:{
      hp:maxHp, maxHp, block:0, buffs:{},
      potions:[], relics:[],
      deck:buildStarterDeck(), hand:[], drawPile:[], discardPile:[],
    },
    combat:null, pendingRewards:null, pendingEvent:null,
  };
}
function buildStarterDeck() {
  const d=[];
  for(let i=0;i<5;i++) d.push(mkCard('strike'));
  for(let i=0;i<4;i++) d.push(mkCard('defend'));
  d.push(mkCard('bash')); return d;
}

// ── Entry / routing ───────────────────────────────────────────────────────────
function renderSpire() {
  const spire=getSpire(), run=spire.run;
  const el=document.getElementById('tab-spire');
  if(!el) return;
  if(!run||!run.active) { renderSpireHome(el,spire.stats); return; }
  switch(run.phase){
    case 'map':     renderSpireMap(el,run);     break;
    case 'combat':  renderSpireCombat(el,run);  break;
    case 'campfire':renderSpireCampfire(el,run); break;
    case 'event':   renderSpireEvent(el,run);   break;
    case 'reward':  renderSpireReward(el,run);  break;
    case 'gameover':renderSpireGameOver(el,run); break;
    case 'victory': renderSpireVictory(el,run); break;
    default:        renderSpireMap(el,run);
  }
}

// ── Home screen ───────────────────────────────────────────────────────────────
function renderSpireHome(el, stats) {
  const workouts = getLogs().filter(l=>getWorkoutBlocks(l.workout).length).length;
  el.innerHTML=`
    <div class="top-bar"><h1 style="margin:0">⚔️ Spire of Iron</h1></div>
    <div class="spire-home">
      <div class="spire-art">⚔️</div>
      <h2 class="spire-title">SPIRE OF IRON</h2>
      <p class="spire-sub">Your workouts forge your power.<br>Climb the Spire or fall trying.</p>
      <div class="spire-stats-row">
        <div class="spire-stat"><div class="spire-sv">${stats.runs||0}</div><div class="spire-sk">Runs</div></div>
        <div class="spire-stat"><div class="spire-sv">${stats.victories||0}</div><div class="spire-sk">Victories</div></div>
        <div class="spire-stat"><div class="spire-sv">${workouts}</div><div class="spire-sk">Workouts</div></div>
      </div>
      <button class="btn spire-start-btn" onclick="spireStart()">⚔️ Begin Ascent</button>
      <p style="font-size:12px;color:var(--text2);margin-top:12px">Log a workout to earn cards &amp; advance floors</p>
    </div>`;
}
window.spireStart = () => {
  const s=getSpire(); s.stats=s.stats||{runs:0,victories:0};
  s.stats.runs=(s.stats.runs||0)+1; s.run=newSpireRun(); setSpire(s); renderSpire();
};

// ── Map screen ────────────────────────────────────────────────────────────────
function renderSpireMap(el, run) {
  const relHtml = run.player.relics.map(r=>`<span class="spire-chip" title="${RELICS[r]?.desc||r}">${RELICS[r]?.icon||'✨'}</span>`).join('');
  const potHtml = run.player.potions.map(p=>`<span class="spire-chip" style="border-color:${POTIONS[p]?.color||'#6c63ff'}" title="${POTIONS[p]?.desc||p}">${POTIONS[p]?.icon||'🧪'}</span>`).join('');

  const floorsHtml = [...MAP_FLOORS].reverse().map((nodes,ri)=>{
    const fi = MAP_FLOORS.length-1-ri;
    const cur=fi===run.floor, past=fi<run.floor;
    return `<div class="spire-floor${past?' sp-past':''}">
      <div class="spire-floor-lbl">Floor ${fi+1}${fi===4?' — BOSS':''}</div>
      <div class="spire-nodes">
        ${nodes.map((type,ni)=>`<div class="spire-node sp-${type}${cur?' sp-active':past?' sp-done':''}"
          ${cur?`onclick="spireEnterNode(${fi},${ni})"`:''}>${NODE_ICONS[type]}</div>`).join('')}
      </div>
    </div>`;
  }).join('');

  el.innerHTML=`
    <div class="top-bar"><h1 style="margin:0">⚔️ Spire</h1><span style="font-size:13px;color:var(--text2)">Floor ${run.floor+1}/5</span></div>
    <div class="spire-player-bar">
      <div style="flex:1">
        <div style="font-size:11px;color:var(--text2);margin-bottom:3px">❤️ ${run.player.hp}/${run.player.maxHp}</div>
        <div class="sp-hp-track"><div class="sp-hp-fill" style="width:${Math.max(0,run.player.hp/run.player.maxHp*100)}%"></div></div>
      </div>
      <div class="spire-chips">${relHtml}${potHtml}<span style="font-size:12px;color:var(--text2)">🃏${run.player.deck.length}</span></div>
    </div>
    <div class="spire-map">${floorsHtml}</div>
    <div class="card" style="text-align:center;font-size:13px;color:var(--text2);margin-top:10px">
      Log a workout to earn 3 card choices &amp; advance the Spire
    </div>`;
}
window.spireEnterNode = (fi, ni) => {
  const run=getSpireRun(); if(!run||fi!==run.floor) return;
  run.nodeIndex=ni;
  const type=MAP_FLOORS[fi][ni];
  if(['combat','elite','boss'].includes(type)) {
    run.phase='combat'; run.combat=spireInitCombat(run,type); startSpireCombat(run);
  } else if(type==='campfire') { run.phase='campfire';
  } else if(type==='event')    { run.phase='event'; run.pendingEvent=pickEvent(); }
  setSpireRun(run); renderSpire();
};

// ── Combat setup ──────────────────────────────────────────────────────────────
function pickEnemy(type) {
  if(type==='boss') return 'iron-tyrant';
  if(type==='elite') return Math.random()<0.5?'gym-bro':'cardio-karen';
  const pool=['gym-rat','cardio-bunny','the-slacker','iron-giant'];
  return pool[Math.floor(Math.random()*pool.length)];
}
function spireInitCombat(run, type) {
  const eid=pickEnemy(type), def=ENEMIES[eid];
  const energy = run.player.relics.includes('lifting-belt')?4:3;
  const drawCount = run.player.relics.includes('pre-workout')?6:5;
  run.player.block = run.player.relics.includes('protein-bar')?5:0;
  run.player.buffs = {};
  run.chalked = false;
  return { enemy:{id:eid,...def,hp:def.maxHp,block:0,buffs:{}}, energy, maxEnergy:energy, drawCount, turn:1 };
}
function startSpireCombat(run) {
  run.player.drawPile=spShuffle([...run.player.deck]);
  run.player.hand=[]; run.player.discardPile=[];
  spireDraw(run);
}
function spireDraw(run) {
  const n=run.combat.drawCount;
  if(run.player.drawPile.length<n) {
    run.player.drawPile=[...run.player.drawPile,...spShuffle([...run.player.discardPile])];
    run.player.discardPile=[];
  }
  const drawn=run.player.drawPile.splice(0,n);
  run.player.hand=drawn;
  drawn.forEach(c=>{ if(c.onDraw?.damage) run.player.hp=Math.max(0,run.player.hp-c.onDraw.damage); });
}

// ── Combat render ─────────────────────────────────────────────────────────────
function renderSpireCombat(el, run) {
  if(!run.combat) { run.combat=spireInitCombat(run,MAP_FLOORS[run.floor][run.nodeIndex||0]); startSpireCombat(run); setSpireRun(run); }
  const {enemy,energy}=run.combat;
  const act=enemy.actions[run.actionIdx%enemy.actions.length];
  const intentStr={atk:`⚔️ ${act.dmg} dmg`,def:`🛡️ ${act.blk} block`,buf:'💪 Buff',deb:'☠️ Debuff',heal:`💚 Heal ${act.amount}`}[act.t]||'❓';

  const typeColor={attack:'#ef4444',skill:'#06b6d4',power:'#f59e0b',curse:'#6b7280'};
  const cardHtml=run.player.hand.map((c,i)=>{
    const canPlay=c.type!=='curse'&&(c.cost<=0||energy>=c.cost);
    const col=typeColor[c.type]||'#6c63ff';
    return `<div class="spire-card${canPlay?' sp-playable':''}" style="border-color:${col}" ${canPlay?`onclick="spirePlay(${i})"`:''}> 
      <div class="sp-cost" style="background:${col}">${c.cost<0?'X':c.cost}</div>
      <div class="sp-cname">${c.name}</div>
      <div class="sp-ctype" style="color:${col}">${c.type}</div>
      <div class="sp-cdesc">${c.desc}</div>
    </div>`;
  }).join('');

  const bufHtml=Object.entries(run.player.buffs).filter(([,v])=>v>0).map(([k,v])=>`<span class="spire-chip sp-buff">${k} ${v}</span>`).join('');
  const eBuffHtml=Object.entries(enemy.buffs||{}).filter(([,v])=>v>0).map(([k,v])=>`<span class="spire-chip sp-debuff">${k} ${v}</span>`).join('');
  const potHtml=run.player.potions.map((p,i)=>{ const pt=POTIONS[p]||{}; return `<button class="sp-pot-btn" style="border-color:${pt.color||'#fff'}" onclick="spireUsePotion(${i})" title="${pt.desc||''}">${pt.icon||'🧪'}</button>`; }).join('');

  el.innerHTML=`
    <div class="spire-combat-wrap">
      <div class="spire-combat-top">
        <div class="sp-player-col">
          <div style="font-size:11px;color:var(--text2)">YOU${run.player.block?` 🛡️${run.player.block}`:''}</div>
          <div class="sp-hp-track"><div class="sp-hp-fill" style="width:${Math.max(0,run.player.hp/run.player.maxHp*100)}%"></div></div>
          <div style="font-size:11px;color:var(--text2)">${run.player.hp}/${run.player.maxHp}</div>
          <div style="margin-top:4px">${bufHtml}</div>
        </div>
        <div class="sp-energy-badge">⚡${energy}</div>
        <div class="sp-enemy-col">
          <div class="sp-intent">${intentStr}</div>
          <div class="sp-enemy-icon">${enemy.icon}</div>
          <div style="font-size:12px;font-weight:700">${enemy.name}</div>
          <div class="sp-hp-track"><div class="sp-hp-fill" style="width:${Math.max(0,enemy.hp/enemy.maxHp*100)}%;background:#ef4444"></div></div>
          <div style="font-size:11px;color:var(--text2)">${enemy.hp}/${enemy.maxHp}${enemy.block?` 🛡️${enemy.block}`:''}</div>
          <div style="margin-top:4px">${eBuffHtml}</div>
        </div>
      </div>
      ${potHtml?`<div class="sp-pot-row">${potHtml}</div>`:''}
      <div class="spire-hand">${cardHtml}</div>
      <div class="sp-combat-footer">
        <span class="spire-chip">Draw ${run.player.drawPile.length}</span>
        <button class="btn spire-end-btn" onclick="spireEndTurn()">End Turn</button>
        <span class="spire-chip">Discard ${run.player.discardPile.length}</span>
      </div>
    </div>`;
}

window.spirePlay = (idx) => {
  const run=getSpireRun(); if(!run||run.phase!=='combat') return;
  const c=run.player.hand[idx]; if(!c||c.type==='curse') return;
  if(c.cost>0&&run.combat.energy<c.cost) return;
  run.combat.energy-=Math.max(0,c.cost);
  const str=spStr(run), dex=spDex(run);
  const weak=run.combat.enemy.buffs?.weak>0, vuln=run.combat.enemy.buffs?.vulnerable>0;
  if(c.damage) {
    let d=(c.damage+str)*(c.hits||1);
    if(weak) d=Math.floor(d*.75); if(vuln) d=Math.floor(d*1.5);
    if(!run.chalked&&run.player.relics.includes('chalk-bag')) { d+=4; run.chalked=true; }
    const eb=Math.min(run.combat.enemy.block,d);
    run.combat.enemy.block=Math.max(0,run.combat.enemy.block-d);
    run.combat.enemy.hp=Math.max(0,run.combat.enemy.hp-Math.max(0,d-eb));
  }
  if(c.block)  run.player.block+=c.block+dex;
  if(c.draw)   { const dr=run.player.drawPile.splice(0,c.draw); run.player.hand.push(...dr); }
  if(c.apply)  { const e=run.combat.enemy; e.buffs=e.buffs||{}; Object.entries(c.apply).forEach(([k,v])=>e.buffs[k]=(e.buffs[k]||0)+v); }
  if(c.buff)   Object.entries(c.buff).forEach(([k,v])=>run.player.buffs[k]=(run.player.buffs[k]||0)+v);
  if(c.power)  Object.entries(c.power).forEach(([k,v])=>run.player.buffs[k]=(run.player.buffs[k]||0)+v);
  if(c.selfApply) Object.entries(c.selfApply).forEach(([k,v])=>run.player.buffs[k]=(run.player.buffs[k]||0)+v);
  run.player.hand.splice(idx,1);
  if(c.type!=='power') run.player.discardPile.push(c);
  if(run.combat.enemy.hp<=0) { spireCombatWin(run); setSpireRun(run); renderSpire(); return; }
  setSpireRun(run); renderSpire();
};

window.spireEndTurn = () => {
  const run=getSpireRun(); if(!run||run.phase!=='combat') return;
  if(run.player.buffs.strengthPerTurn) run.player.buffs.strength=(run.player.buffs.strength||0)+run.player.buffs.strengthPerTurn;
  const act=run.combat.enemy.actions[run.actionIdx%run.combat.enemy.actions.length];
  run.actionIdx++;
  if(act.t==='atk') {
    let d=act.dmg+(run.combat.enemy.buffs?.strength||0);
    if(run.player.buffs?.weak>0) d=Math.floor(d*.75);
    if(run.player.buffs?.vulnerable>0) d=Math.floor(d*1.5);
    const pb=Math.min(run.player.block,d); run.player.block=Math.max(0,run.player.block-d);
    run.player.hp=Math.max(0,run.player.hp-Math.max(0,d-pb));
  } else if(act.t==='def') {
    run.combat.enemy.block=(run.combat.enemy.block||0)+act.blk;
  } else if(act.t==='buf') {
    const e=run.combat.enemy; e.buffs=e.buffs||{};
    Object.entries(act.buff).forEach(([k,v])=>e.buffs[k]=(e.buffs[k]||0)+v);
  } else if(act.t==='deb') {
    Object.entries(act.apply||{}).forEach(([k,v])=>run.player.buffs[k]=(run.player.buffs[k]||0)+v);
  } else if(act.t==='heal') {
    run.combat.enemy.hp=Math.min(run.combat.enemy.maxHp,run.combat.enemy.hp+act.amount);
  }
  ['weak','vulnerable'].forEach(d=>{
    if(run.player.buffs[d]>0) run.player.buffs[d]--;
    if(run.combat.enemy.buffs?.[d]>0) run.combat.enemy.buffs[d]--;
  });
  if(run.player.hp<=0) { run.phase='gameover'; setSpireRun(run); renderSpire(); return; }
  run.player.discardPile.push(...run.player.hand);
  run.player.hand=[]; run.player.block=0;
  run.combat.energy=run.combat.maxEnergy; run.combat.turn++;
  spireDraw(run); setSpireRun(run); renderSpire();
};

window.spireUsePotion = (i) => {
  const run=getSpireRun(); if(!run||run.phase!=='combat') return;
  const p=run.player.potions[i];
  if(p==='protein-shake') run.player.hp=Math.min(run.player.maxHp,run.player.hp+15);
  else if(p==='pre-wo')   run.combat.energy+=2;
  else if(p==='creatine') run.player.buffs.strength=(run.player.buffs.strength||0)+4;
  else if(p==='cold-brew'){ const dr=run.player.drawPile.splice(0,3); run.player.hand.push(...dr); }
  run.player.potions.splice(i,1); setSpireRun(run); renderSpire();
};

function spireCombatWin(run) {
  const type=MAP_FLOORS[run.floor][run.nodeIndex||0];
  if(type==='elite') {
    const avail=Object.keys(RELICS).filter(r=>!run.player.relics.includes(r));
    if(avail.length) run.player.relics.push(avail[Math.floor(Math.random()*avail.length)]);
  }
  if(run.player.relics.includes('gym-card')) run.player.hp=Math.min(run.player.maxHp,run.player.hp+5);
  if(run.player.potions.length<3&&Math.random()<0.4) {
    const pks=Object.keys(POTIONS); run.player.potions.push(pks[Math.floor(Math.random()*pks.length)]);
  }
  if(type==='boss') { run.phase='victory'; run.active=false; const s=getSpire(); s.stats.victories=(s.stats.victories||0)+1; s.run=run; setSpire(s); return; }
  spireAdvanceFloor(run);
}

function spireAdvanceFloor(run) {
  run.floor=Math.min(4,run.floor+1); run.nodeIndex=null;
  run.phase='map'; run.combat=null; run.actionIdx=0; run.chalked=false;
}

// ── Campfire ──────────────────────────────────────────────────────────────────
function renderSpireCampfire(el, run) {
  const healAmt=Math.floor(run.player.maxHp*.3);
  el.innerHTML=`
    <div class="top-bar"><h1 style="margin:0">🔥 Campfire</h1></div>
    <div class="spire-home">
      <div class="spire-art">🔥</div>
      <h2>Rest Stop</h2>
      <p style="color:var(--text2);margin-bottom:20px">Take a moment to recover.</p>
      <button class="btn spire-start-btn" style="margin-bottom:10px" onclick="spireCampRest()">
        💚 Rest — Heal ${healAmt} HP (${run.player.hp}/${run.player.maxHp})
      </button>
      <button class="btn btn-ghost" style="width:100%" onclick="spireCampSmith()">🔨 Smith — Upgrade a card</button>
    </div>`;
}
window.spireCampRest = () => {
  const run=getSpireRun(); const h=Math.floor(run.player.maxHp*.3);
  run.player.hp=Math.min(run.player.maxHp,run.player.hp+h);
  spireAdvanceFloor(run); setSpireRun(run); renderSpire();
};
window.spireCampSmith = () => {
  const run=getSpireRun();
  const el=document.getElementById('tab-spire');
  const upgradeable=run.player.deck.filter(c=>c.type!=='curse'&&!c.upgraded);
  const tc={attack:'#ef4444',skill:'#06b6d4',power:'#f59e0b'};
  el.innerHTML=`
    <div class="top-bar"><h1 style="margin:0">🔨 Upgrade a Card</h1></div>
    <p style="color:var(--text2);padding:0 4px;margin-bottom:12px">Pick a card to upgrade (costs reduced, values increased):</p>
    <div class="spire-hand" style="flex-wrap:wrap">
      ${upgradeable.map(c=>{const col=tc[c.type]||'#6c63ff'; return `<div class="spire-card sp-playable" style="border-color:${col}" onclick="spireUpgrade('${c.uid}')">
        <div class="sp-cost" style="background:${col}">${c.cost}</div>
        <div class="sp-cname">${c.name}</div>
        <div class="sp-ctype" style="color:${col}">${c.type}</div>
        <div class="sp-cdesc">${c.desc}</div>
      </div>`;}).join('')}
    </div>`;
};
window.spireUpgrade = (uid) => {
  const run=getSpireRun();
  const c=run.player.deck.find(x=>x.uid===uid); if(!c) return;
  if(c.damage) c.damage=Math.floor(c.damage*1.5);
  if(c.block)  c.block=Math.floor(c.block*1.5);
  if(c.cost>0) c.cost=Math.max(0,c.cost-1);
  c.name+=' +'; c.upgraded=true;
  spireAdvanceFloor(run); setSpireRun(run); renderSpire();
};

// ── Events ────────────────────────────────────────────────────────────────────
const EVENTS=[
  { title:'Mysterious Powder', desc:'A shady vendor offers an unlabeled tub.', icon:'🧪',
    choices:[{label:'+10 Max HP, add Fatigue curse',action:'hpCurse'},{label:'Pass',action:'skip'}]},
  { title:'Injured Gym-goer', desc:'Someone needs help. Give up your warmup time?', icon:'🤕',
    choices:[{label:'Help (–5 HP, gain a Relic)',action:'helpRelic'},{label:'Keep training',action:'skip'}]},
  { title:'PR Day!', desc:'You just hit a personal record.', icon:'🏆',
    choices:[{label:'Celebrate (+15 HP)',action:'heal15'},{label:'Push harder (gain Rare card)',action:'rareCard'}]},
  { title:'Blood Sacrifice', desc:'The Spire demands payment.', icon:'🩸',
    choices:[{label:'Pay (–10 HP, remove a card)',action:'payRemove'},{label:'Refuse (+1 Vulnerable next combat)',action:'refuse'}]},
];
function pickEvent() { return EVENTS[Math.floor(Math.random()*EVENTS.length)]; }
function renderSpireEvent(el, run) {
  const ev=run.pendingEvent||pickEvent();
  el.innerHTML=`
    <div class="top-bar"><h1 style="margin:0">❓ Event</h1></div>
    <div class="spire-home">
      <div class="spire-art">${ev.icon}</div>
      <h2>${ev.title}</h2>
      <p style="color:var(--text2);margin-bottom:20px">${ev.desc}</p>
      ${ev.choices.map(c=>`<button class="btn btn-ghost" style="width:100%;margin-bottom:8px;text-align:left" onclick="spireEventAct('${c.action}')">${c.label}</button>`).join('')}
    </div>`;
}
window.spireEventAct = (action) => {
  const run=getSpireRun();
  if(action==='hpCurse') { run.player.maxHp+=10; run.player.hp+=10; run.player.deck.push(mkCard('fatigue')); }
  else if(action==='helpRelic') { run.player.hp=Math.max(1,run.player.hp-5); const avail=Object.keys(RELICS).filter(r=>!run.player.relics.includes(r)); if(avail.length) run.player.relics.push(avail[Math.floor(Math.random()*avail.length)]); }
  else if(action==='heal15')   { run.player.hp=Math.min(run.player.maxHp,run.player.hp+15); }
  else if(action==='rareCard') { const rares=Object.values(CARD_LIB).filter(c=>c.rarity==='rare'); const r=rares[Math.floor(Math.random()*rares.length)]; run.player.deck.push(mkCard(r.id)); }
  else if(action==='payRemove'){ run.player.hp=Math.max(1,run.player.hp-10); run.player.deck.splice(Math.floor(Math.random()*run.player.deck.length),1); }
  else if(action==='refuse')   { run.player.buffs.vulnerable=(run.player.buffs.vulnerable||0)+1; }
  spireAdvanceFloor(run); setSpireRun(run); renderSpire();
};

// ── Workout reward (called from app.js saveDay) ───────────────────────────────
function spireOnWorkoutSaved(exercises) {
  const run=getSpireRun(); if(!run||!run.active) return;
  const tags=new Set(exercises.map(exToTag));
  const pool=new Set();
  tags.forEach(tag=>(EX_CARD_MAP[tag]||[]).forEach(id=>pool.add(id)));
  const all=Object.keys(CARD_LIB).filter(id=>!['starter','curse'].includes(CARD_LIB[id].rarity));
  while(pool.size<3) pool.add(all[Math.floor(Math.random()*all.length)]);
  const choices=spShuffle([...pool]).slice(0,3);
  const pKeys=Object.keys(POTIONS);
  run.pendingRewards={ choices, potion: Math.random()<0.4?pKeys[Math.floor(Math.random()*pKeys.length)]:null };
  run.phase='reward'; setSpireRun(run);
}

function renderSpireReward(el, run) {
  const rw=run.pendingRewards||{choices:[],potion:null};
  const tc={attack:'#ef4444',skill:'#06b6d4',power:'#f59e0b',curse:'#6b7280'};
  const rc={common:'var(--text2)',uncommon:'#22c55e',rare:'#f59e0b'};
  const potHtml=rw.potion&&POTIONS[rw.potion]?`<div style="text-align:center;margin-bottom:12px">
    <div style="font-size:11px;color:var(--text2);margin-bottom:4px">POTION DROPPED</div>
    <span class="spire-chip" style="border-color:${POTIONS[rw.potion].color};padding:4px 10px">${POTIONS[rw.potion].icon} ${POTIONS[rw.potion].name}</span>
  </div>`:'';
  el.innerHTML=`
    <div class="top-bar"><h1 style="margin:0">🏆 Workout Complete!</h1></div>
    <div style="padding:0 4px">
      ${potHtml}
      <p style="color:var(--text2);font-size:13px;margin-bottom:14px;text-align:center">Choose 1 card to add to your deck:</p>
      <div class="spire-hand" style="flex-wrap:wrap;justify-content:center">
        ${rw.choices.map(id=>{ const c=CARD_LIB[id]; if(!c) return ''; const col=tc[c.type]||'#6c63ff';
          return `<div class="spire-card sp-playable" style="border-color:${col}" onclick="spirePickCard('${id}')">
            <div class="sp-cost" style="background:${col}">${c.cost<0?'X':c.cost}</div>
            <div class="sp-cname">${c.name}</div>
            <div class="sp-ctype" style="color:${col}">${c.type}</div>
            <div class="sp-cdesc">${c.desc}</div>
            <div style="font-size:10px;color:${rc[c.rarity]||'var(--text2)'};margin-top:4px;text-transform:uppercase">${c.rarity}</div>
          </div>`;}).join('')}
      </div>
      <button class="btn btn-ghost" style="width:100%;margin-top:14px" onclick="spireSkipReward()">Skip — no card</button>
    </div>`;
}

window.spirePickCard = (id) => {
  const run=getSpireRun(); if(!run) return;
  run.player.deck.push(mkCard(id));
  if(run.pendingRewards?.potion&&run.player.potions.length<3) run.player.potions.push(run.pendingRewards.potion);
  run.pendingRewards=null;
  run.floor<4 ? spireAdvanceFloor(run) : (run.phase='map');
  setSpireRun(run); renderSpire();
};
window.spireSkipReward = () => {
  const run=getSpireRun(); if(!run) return;
  run.pendingRewards=null;
  run.floor<4 ? spireAdvanceFloor(run) : (run.phase='map');
  setSpireRun(run); renderSpire();
};

// ── Game over / Victory ───────────────────────────────────────────────────────
function renderSpireGameOver(el, run) {
  el.innerHTML=`
    <div class="spire-home">
      <div class="spire-art">💀</div>
      <h2 style="color:var(--red)">YOU FELL</h2>
      <p style="color:var(--text2);margin-bottom:4px">Fell on Floor ${run.floor+1} of 5</p>
      <p style="color:var(--text2);margin-bottom:20px">The Spire remains unconquered.</p>
      <button class="btn spire-start-btn" onclick="spireStart()">⚔️ Try Again</button>
      <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="spireEndRun()">Return to Home</button>
    </div>`;
}
function renderSpireVictory(el) {
  el.innerHTML=`
    <div class="spire-home">
      <div class="spire-art">🏆</div>
      <h2 style="color:var(--green)">VICTORY!</h2>
      <p style="color:var(--text2);margin-bottom:4px">You defeated the Iron Tyrant!</p>
      <p style="color:var(--text2);margin-bottom:20px">The Spire has been conquered.</p>
      <button class="btn spire-start-btn" onclick="spireStart()">⚔️ Run Again</button>
      <button class="btn btn-ghost" style="width:100%;margin-top:8px" onclick="spireEndRun()">Return to Home</button>
    </div>`;
}
window.spireEndRun = () => { const s=getSpire(); s.run=null; setSpire(s); renderSpire(); };

// ── Inject CSS ────────────────────────────────────────────────────────────────
(function injectSpireCSS() {
  const style = document.createElement('style');
  style.textContent = `
.spire-home { display:flex; flex-direction:column; align-items:center; padding:10px 4px; text-align:center; }
.spire-art  { font-size:64px; margin-bottom:12px; filter:drop-shadow(0 0 20px #f59e0b88); }
.spire-title { font-size:22px; font-weight:800; letter-spacing:.08em; color:var(--text); margin-bottom:8px; }
.spire-sub   { color:var(--text2); font-size:14px; margin-bottom:20px; }
.spire-stats-row { display:flex; gap:24px; margin-bottom:24px; }
.spire-stat  { display:flex; flex-direction:column; align-items:center; }
.spire-sv    { font-size:22px; font-weight:800; color:var(--accent); }
.spire-sk    { font-size:11px; color:var(--text2); text-transform:uppercase; }
.spire-start-btn { background:linear-gradient(135deg,#6c63ff,#f59e0b); color:#fff; border:none; border-radius:12px; padding:14px 28px; font-size:16px; font-weight:700; width:100%; cursor:pointer; letter-spacing:.04em; touch-action:manipulation; }
.spire-start-btn:active { opacity:.85; }

/* player bar */
.spire-player-bar { display:flex; gap:12px; align-items:center; background:var(--card); border:1px solid var(--border); border-radius:12px; padding:10px 14px; margin-bottom:12px; }
.spire-chips { display:flex; gap:6px; align-items:center; flex-wrap:wrap; }
.spire-chip  { font-size:12px; border:1px solid var(--border); border-radius:6px; padding:2px 6px; background:var(--bg3); }
.sp-buff     { border-color:var(--green)!important; color:var(--green); }
.sp-debuff   { border-color:var(--red)!important; color:var(--red); }

/* HP bar */
.sp-hp-track { height:6px; background:var(--bg3); border-radius:99px; overflow:hidden; width:100%; }
.sp-hp-fill  { height:100%; background:var(--green); border-radius:99px; transition:width .3s; }

/* Map */
.spire-map    { display:flex; flex-direction:column; gap:8px; }
.spire-floor  { background:var(--card); border:1px solid var(--border); border-radius:12px; padding:10px; }
.sp-past      { opacity:.45; }
.spire-floor-lbl { font-size:11px; color:var(--text2); text-transform:uppercase; letter-spacing:.06em; margin-bottom:8px; }
.spire-nodes  { display:flex; gap:8px; justify-content:center; }
.spire-node   { width:54px; height:54px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:22px; border:2px solid var(--border); background:var(--bg3); transition:transform .15s; }
.sp-active    { cursor:pointer; box-shadow:0 0 12px #6c63ff66; }
.sp-active:hover{ transform:scale(1.08); }
.sp-combat    { border-color:#ef444466; }
.sp-elite     { border-color:#9333ea66; }
.sp-campfire  { border-color:#f59e0b66; }
.sp-event     { border-color:#06b6d466; }
.sp-boss      { border-color:#ef444499; background:#ef444411; }
.sp-done      { opacity:.35; }

/* Combat */
.spire-combat-wrap { display:flex; flex-direction:column; height:calc(100vh - var(--nav-h) - var(--sab) - var(--sat) - 40px); }
.spire-combat-top  { display:flex; align-items:flex-start; gap:8px; background:var(--card); border:1px solid var(--border); border-radius:12px; padding:12px; margin-bottom:8px; }
.sp-player-col, .sp-enemy-col { flex:1; display:flex; flex-direction:column; gap:3px; font-size:12px; }
.sp-enemy-col  { align-items:flex-end; text-align:right; }
.sp-intent     { font-size:11px; font-weight:700; color:var(--red); margin-bottom:4px; }
.sp-enemy-icon { font-size:40px; filter:drop-shadow(0 0 10px #ef444466); }
.sp-energy-badge { font-size:16px; font-weight:800; background:var(--accent); color:#fff; border-radius:99px; width:36px; height:36px; display:flex; align-items:center; justify-content:center; flex-shrink:0; align-self:center; }
.sp-pot-row    { display:flex; gap:8px; margin-bottom:8px; }
.sp-pot-btn    { background:var(--bg3); border:2px solid var(--border); border-radius:10px; font-size:22px; width:48px; height:48px; cursor:pointer; touch-action:manipulation; }
.sp-pot-btn:active { transform:scale(.92); }

/* Hand */
.spire-hand { display:flex; gap:8px; overflow-x:auto; padding:4px 2px; flex:1; align-items:flex-end; -webkit-overflow-scrolling:touch; }
.spire-card { flex-shrink:0; width:108px; background:var(--card); border:2px solid var(--border); border-radius:12px; padding:8px; display:flex; flex-direction:column; gap:3px; transition:transform .15s,box-shadow .15s; cursor:default; }
.sp-playable { cursor:pointer; box-shadow:0 4px 16px #6c63ff44; }
.sp-playable:hover { transform:translateY(-6px); }
.sp-playable:active{ transform:translateY(-2px) scale(.97); }
.sp-cost  { width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:800; color:#fff; align-self:flex-start; }
.sp-cname { font-size:12px; font-weight:700; color:var(--text); line-height:1.2; }
.sp-ctype { font-size:10px; text-transform:uppercase; letter-spacing:.04em; }
.sp-cdesc { font-size:10px; color:var(--text2); line-height:1.3; flex:1; }

/* Footer */
.sp-combat-footer { display:flex; align-items:center; justify-content:space-between; padding:8px 2px 0; }
.spire-end-btn { background:linear-gradient(135deg,#6c63ff,#9333ea); color:#fff; border:none; border-radius:10px; padding:10px 20px; font-weight:700; cursor:pointer; touch-action:manipulation; }
.spire-end-btn:active { opacity:.85; }
  `;
  document.head.appendChild(style);
})();
