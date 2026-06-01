// ── Firebase config ───────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCgsme2Umk-NSdTiBJplNeLNH1QD17j7do",
  authDomain: "ironlog-family.firebaseapp.com",
  projectId: "ironlog-family",
  storageBucket: "ironlog-family.firebasestorage.app",
  messagingSenderId: "877808551901",
  appId: "1:877808551901:web:b74e623dc05c32e94bd834",
};

// ── Icon system (Lucide, MIT) ─────────────────────────────────────────────────
const IC = {
  dumbbell:    '<path d="M6 5v14"/><path d="M18 5v14"/><path d="M2 9h4"/><path d="M2 15h4"/><path d="M18 9h4"/><path d="M18 15h4"/><path d="M4 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/><path d="M16 5h4a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/>',
  activity:    '<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>',
  flame:       '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  moon:        '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>',
  scale:       '<path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1z"/><path d="M7 21H17"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/>',
  egg:         '<path d="M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z"/>',
  trophy:      '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/>',
  target:      '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>',
  clock:       '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>',
  'bar-chart': '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
  'file-text': '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>',
  zap:         '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>',
  medal:       '<path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15"/><path d="M11 12 5.12 2.2"/><path d="m13 12 5.88-9.8"/><path d="M8 7h8"/><circle cx="12" cy="17" r="5"/><path d="M12 18v-2h-.5"/>',
  run:         '<path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0"/><path d="M7.7 10.7 10 8l3 1 1.4 3.5"/><path d="m6 20 3-4 2 1 2-3.5"/><path d="M6 12h2l2-4"/>',
};
function svgI(name, size=16, color='currentColor') {
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon" aria-hidden="true">${IC[name]||''}</svg>`;
}

// ── Exercises & muscle data ───────────────────────────────────────────────────
const EXERCISES = [
  'Squat','Front Squat','Hack Squat','Leg Press','Leg Extension','Leg Curl',
  'Romanian Deadlift','Bulgarian Split Squat','Lunge','Step Up','Hip Thrust',
  'Bench Press','Incline Bench Press','Decline Bench Press','Close-Grip Bench',
  'Dumbbell Press','Incline Dumbbell Press','Dumbbell Fly','Dumbbell Pullover','Cable Fly','Push Up',
  'Deadlift','Sumo Deadlift','Trap Bar Deadlift',
  'Barbell Row','Pendlay Row','Cable Row','Chest-Supported Row',
  'Pull Up','Chin Up','Lat Pulldown','Single-Arm Row','Kroc Row',
  'Overhead Press','Push Press','Dumbbell Shoulder Press','Arnold Press',
  'Lateral Raise','Front Raise','Face Pull','Rear Delt Fly',
  'Bicep Curl','Hammer Curl','Preacher Curl','EZ Bar Curl','Cable Curl','Incline Dumbbell Curl',
  'Tricep Pushdown','Skull Crusher','Overhead Tricep Extension','Dips','Diamond Push Up',
  'Calf Raise','Seated Calf Raise','Shrug','Power Clean','Plank','Ab Wheel','Crunch','Hanging Leg Raise',
];

const CARDIO_ACTIVITIES = ['Run','Bike','Swim','Row','Walk','Elliptical','Stair Climber'];

const MUSCLE_MAP = {
  'Squat':['Quads','Glutes','Hamstrings','Core'],'Front Squat':['Quads','Core'],
  'Hack Squat':['Quads','Glutes'],'Leg Press':['Quads','Glutes'],
  'Leg Extension':['Quads'],'Leg Curl':['Hamstrings'],
  'Romanian Deadlift':['Hamstrings','Glutes','Lower Back'],
  'Bulgarian Split Squat':['Quads','Glutes','Hamstrings'],
  'Lunge':['Quads','Glutes'],'Step Up':['Quads','Glutes'],'Hip Thrust':['Glutes','Hamstrings'],
  'Bench Press':['Chest','Triceps','Front Delts'],'Incline Bench Press':['Chest','Front Delts','Triceps'],
  'Decline Bench Press':['Chest','Triceps'],'Close-Grip Bench':['Triceps','Chest'],
  'Dumbbell Press':['Chest','Triceps','Front Delts'],'Incline Dumbbell Press':['Chest','Front Delts'],
  'Dumbbell Fly':['Chest'],'Cable Fly':['Chest'],'Push Up':['Chest','Triceps','Core'],
  'Deadlift':['Lower Back','Glutes','Hamstrings','Traps'],
  'Sumo Deadlift':['Glutes','Hamstrings','Lower Back'],
  'Trap Bar Deadlift':['Quads','Glutes','Hamstrings','Lower Back'],
  'Barbell Row':['Back','Biceps','Rear Delts'],'Pendlay Row':['Back','Biceps'],
  'Cable Row':['Back','Biceps'],'Chest-Supported Row':['Back','Biceps','Rear Delts'],
  'Pull Up':['Back','Biceps'],'Chin Up':['Back','Biceps'],'Lat Pulldown':['Back','Biceps'],
  'Single-Arm Row':['Back','Biceps'],'Kroc Row':['Back','Biceps'],
  'Overhead Press':['Front Delts','Triceps','Traps'],'Push Press':['Front Delts','Triceps'],
  'Dumbbell Shoulder Press':['Front Delts','Triceps'],'Arnold Press':['Front Delts','Side Delts','Triceps'],
  'Lateral Raise':['Side Delts'],'Front Raise':['Front Delts'],'Face Pull':['Rear Delts','Traps'],
  'Rear Delt Fly':['Rear Delts'],'Bicep Curl':['Biceps'],'Hammer Curl':['Biceps'],
  'Preacher Curl':['Biceps'],'EZ Bar Curl':['Biceps'],'Cable Curl':['Biceps'],
  'Tricep Pushdown':['Triceps'],'Skull Crusher':['Triceps'],
  'Overhead Tricep Extension':['Triceps'],'Dips':['Triceps','Chest'],
  'Diamond Push Up':['Triceps','Chest'],'Calf Raise':['Calves'],'Seated Calf Raise':['Calves'],
  'Shrug':['Traps'],'Power Clean':['Quads','Glutes','Traps','Lower Back'],
  'Plank':['Core'],'Ab Wheel':['Core'],'Crunch':['Core'],'Hanging Leg Raise':['Core'],
  'Dumbbell Pullover':['Back','Chest'],'Incline Dumbbell Curl':['Biceps'],
};

const MUSCLE_GROUPS = ['Chest','Front Delts','Side Delts','Rear Delts','Traps','Back','Lower Back','Biceps','Triceps','Quads','Hamstrings','Glutes','Calves','Core'];

const MUSCLE_ID_MAP = {
  'Chest':       ['chest-upper-left','chest-upper-right','chest-lower-left','chest-lower-right'],
  'Front Delts': ['shoulder-front-left','shoulder-front-right','shoulder-side-left','shoulder-side-right'],
  'Side Delts':  ['shoulder-side-left','shoulder-side-right'],
  'Rear Delts':  ['deltoid-rear-left','deltoid-rear-right'],
  'Traps':       ['traps-upper-left','traps-upper-right','traps-mid-left','traps-mid-right','traps-lower-left','traps-lower-right'],
  'Back':        ['lats-upper-left','lats-upper-right','lats-mid-left','lats-mid-right','lats-lower-left','lats-lower-right'],
  'Lower Back':  ['lower-back-erectors-left','lower-back-erectors-right','lower-back-ql-left','lower-back-ql-right'],
  'Biceps':      ['biceps-left','biceps-right'],
  'Triceps':     ['triceps-long-left','triceps-long-right','triceps-lateral-left','triceps-lateral-right'],
  'Core':        ['abs-upper-left','abs-upper-right','abs-lower-left','abs-lower-right','obliques-left','obliques-right'],
  'Glutes':      ['gluteus-maximus-left','gluteus-maximus-right','gluteus-medius-left','gluteus-medius-right'],
  'Quads':       ['quads-left','quads-right'],
  'Hamstrings':  ['hamstrings-medial-left','hamstrings-medial-right','hamstrings-lateral-left','hamstrings-lateral-right'],
  'Calves':      ['calves-gastroc-medial-left','calves-gastroc-medial-right','calves-gastroc-lateral-left','calves-gastroc-lateral-right'],
};

const COLORS = ['#6c63ff','#ec4899','#f59e0b','#22c55e','#06b6d4','#ef4444','#8b5cf6','#f97316'];

// ── Storage ───────────────────────────────────────────────────────────────────
const ls = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k,v) => localStorage.setItem(k, JSON.stringify(v)),
};
const getProfile   = () => ls.get('ironlog_profile');
const setProfile   = p  => ls.set('ironlog_profile', p);
const getLogs      = () => ls.get('ironlog_logs') || [];
const setLogs      = v  => ls.set('ironlog_logs', v);
const getTemplates = () => ls.get('ironlog_templates') || [];
const setTemplates = v  => ls.set('ironlog_templates', v);
const getGoals     = () => ls.get('ironlog_goals') || {};
const setGoals     = v  => ls.set('ironlog_goals', v);
const getHealthLog = () => ls.get('ironlog_health') || {};
const setHealthLog = v  => ls.set('ironlog_health', v);
const getHealthDay = date => { const h=getHealthLog(); return h[date]||{}; };
const saveHealthDay = (date, data) => {
  const h=getHealthLog(); h[date]={ ...(h[date]||{}), ...data }; setHealthLog(h);
};

function getTodayStr() { return new Date().toISOString().slice(0,10); }

function fmtDate(str) {
  return new Date(str+'T12:00:00').toLocaleDateString('en-US',{weekday:'short',month:'short',day:'numeric',year:'numeric'});
}
function fmtDateShort(str) {
  return new Date(str+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'});
}

// Normalise old log format → blocks array
function getWorkoutBlocks(workout) {
  if (!workout) return [];
  if (workout.blocks) return workout.blocks;
  const blocks = [];
  if (workout.lifts && workout.lifts.length)  blocks.push({ type:'weights', lifts: workout.lifts });
  if (workout.cardio)                          blocks.push({ type:'cardio',  ...workout.cardio });
  return blocks;
}

// ── Cardio helpers ────────────────────────────────────────────────────────────
function parseTimeToSecs(str) {
  if (!str) return null;
  const p = str.split(':').map(Number);
  if (p.some(isNaN)) return null;
  return p.length===3 ? p[0]*3600+p[1]*60+p[2] : p[0]*60+(p[1]||0);
}
function fmtSecs(s) {
  return `${Math.floor(s/60)}:${Math.round(s%60).toString().padStart(2,'0')}`;
}
function getFastestMilePace(logs) {
  let best = Infinity, bestDate = null;
  logs.forEach(l => {
    getWorkoutBlocks(l.workout).forEach(b => {
      if (b.type!=='cardio' || !b.distance || !b.time) return;
      const dist = parseFloat(b.distance);
      const secs = parseTimeToSecs(b.time);
      if (!dist || !secs) return;
      const pace = secs/dist;
      if (pace < best) { best=pace; bestDate=l.date; }
    });
  });
  return isFinite(best) ? { pace:fmtSecs(best), date:bestDate } : null;
}

// ── Firebase ──────────────────────────────────────────────────────────────────
let db = null, fbUnsubscribe = null, feedUnsubscribe = null;

async function initFirebase() {
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, doc, setDoc, onSnapshot, collection, addDoc, query, orderBy, limit } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    db = getFirestore(initializeApp(FIREBASE_CONFIG));
    window._fs = { doc, setDoc, onSnapshot, collection, addDoc, query, orderBy, limit };
  } catch(e) { console.warn('Firebase:', e); }
}

async function syncLeaderboardEntry(familyCode, profile, score, workouts) {
  if (!db || !familyCode) return;
  const { doc, setDoc } = window._fs;
  try {
    await setDoc(doc(db,'leaderboards',familyCode,'members',profile.name),
      { name:profile.name, color:profile.color, score, workouts, updatedAt:Date.now() },
      { merge:true });
  } catch(e) {}
}

async function pushWorkoutToFeed(familyCode, profile, entry) {
  if (!db || !familyCode) return;
  const { collection, addDoc } = window._fs;
  const blocks = getWorkoutBlocks(entry.workout);
  if (!blocks.length) return;
  const blockSummaries = blocks.map(b => b.type==='cardio'
    ? { type:'cardio', activity:b.activity, distance:b.distance, time:b.time }
    : { type:'weights', exerciseCount: b.lifts?.length||0, exercises: b.lifts?.slice(0,3).map(l=>l.exercise)||[] }
  );
  try {
    await addDoc(collection(db,'feeds',familyCode,'events'), {
      userName:  profile.name,
      userColor: profile.color,
      date:      entry.date,
      blocks:    blockSummaries,
      stats: {
        bodyweight: entry.bodyweight,
        protein:    entry.protein,
        calories:   entry.calories,
        sleep:      entry.sleep,
      },
      savedAt: Date.now(),
    });
  } catch(e) { console.warn('Feed push:', e); }
}

function subscribeLeaderboard(familyCode, cb) {
  if (!db || !familyCode) return;
  if (fbUnsubscribe) fbUnsubscribe();
  const { collection, onSnapshot } = window._fs;
  fbUnsubscribe = onSnapshot(collection(db,'leaderboards',familyCode,'members'), snap => {
    const members=[]; snap.forEach(d=>members.push(d.data())); cb(members);
  });
}

let remoteFeedData = [];
function subscribeToFeed(familyCode, cb) {
  if (!db || !familyCode) return;
  if (feedUnsubscribe) feedUnsubscribe();
  const { collection, query, orderBy, limit, onSnapshot } = window._fs;
  const q = query(collection(db,'feeds',familyCode,'events'), orderBy('savedAt','desc'), limit(40));
  feedUnsubscribe = onSnapshot(q, snap => {
    const items=[]; snap.forEach(d=>items.push({id:d.id, ...d.data()})); cb(items);
  });
}

// ── Points ────────────────────────────────────────────────────────────────────
function calcPoints(logs, goals) {
  let score = 0;
  for (const log of logs) {
    if (getWorkoutBlocks(log.workout).length) score += 10;
    const g = goals||{};
    if (g.protein  && log.protein  >= g.protein)                                       score += 5;
    if (g.calories && log.calories >= g.calories*.9 && log.calories<=g.calories*1.1)  score += 5;
    if (g.sleep    && log.sleep    >= g.sleep)                                          score += 5;
  }
  return score;
}

// ── UI helpers ────────────────────────────────────────────────────────────────
function toast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}

function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t=>t.classList.remove('active'));
  document.getElementById('tab-'+id)?.classList.add('active');
  document.querySelectorAll('.nav-item[data-tab]').forEach(n=>
    n.classList.toggle('active', n.dataset.tab===id));
  // close menu overlay if open
  document.getElementById('menu-overlay')?.classList.remove('open');
  if (id==='home')        renderHome();
  if (id==='health')      renderHealth();
  if (id==='progress')    renderProgress();
  if (id==='muscle')      renderMuscleMap();
  if (id==='goals')       renderGoals();
  if (id==='leaderboard') renderLeaderboard();
  if (id==='history')     renderHistory();
}

function openMenu() {
  document.getElementById('menu-overlay').classList.add('open');
}

// ── Onboarding ────────────────────────────────────────────────────────────────
function renderOnboarding() {
  const box = document.getElementById('onboarding');
  let selectedColor = COLORS[0];
  box.innerHTML = `
    <div class="onboarding-box">
      <div class="logo-big">${svgI('dumbbell',48,'#6c63ff')}</div>
      <h1>Welcome to IronLog</h1>
      <p>Your personal strength &amp; health tracker.</p>
      <label>Your name</label>
      <input id="ob-name" type="text" placeholder="e.g. Alex" style="margin-bottom:16px;text-align:center">
      <label>Pick your color</label>
      <div class="color-swatches">
        ${COLORS.map((c,i)=>`<div class="color-swatch${i===0?' selected':''}" data-color="${c}" style="background:${c}"></div>`).join('')}
      </div>
      <button class="btn btn-primary" id="ob-start" style="width:100%;margin-top:4px">Get Started →</button>
    </div>`;
  box.querySelectorAll('.color-swatch').forEach(s => {
    s.addEventListener('click', () => {
      box.querySelectorAll('.color-swatch').forEach(x=>x.classList.remove('selected'));
      s.classList.add('selected'); selectedColor = s.dataset.color;
    });
  });
  document.getElementById('ob-start').addEventListener('click', () => {
    const name = document.getElementById('ob-name').value.trim();
    if (!name) { document.getElementById('ob-name').focus(); return; }
    setProfile({ name, color: selectedColor });
    box.style.display = 'none';
    initApp();
  });
}

// ── Home feed ─────────────────────────────────────────────────────────────────
function buildFeedEntry(item) {
  const blockHtml = (item.blocks||[]).map(b => {
    if (b.type==='cardio') {
      const detail = [b.activity, b.distance?b.distance+' mi':'', b.time?b.time:''].filter(Boolean).join(' · ');
      return `<div class="feed-block"><div class="feed-block-title">${svgI('activity',14,'#22c55e')} Cardio</div><div class="feed-block-detail">${detail}</div></div>`;
    }
    const exList = (b.exercises||[]).join(', ') + (b.exerciseCount>(b.exercises?.length||0) ? '…' : '');
    return `<div class="feed-block"><div class="feed-block-title">${svgI('dumbbell',14,'#6c63ff')} Weights · ${b.exerciseCount} exercise${b.exerciseCount!==1?'s':''}</div><div class="feed-block-detail">${exList}</div></div>`;
  }).join('');

  const stats = item.stats||{};
  // also pull from health log if available (for local user entries)
  const hDay = item.date ? getHealthDay(item.date) : {};
  const protein  = hDay.proteinLog?.reduce((s,v)=>s+v,0) || stats.protein;
  const calories = hDay.calorieLog?.reduce((s,v)=>s+v,0) || stats.calories;
  const bw       = hDay.bodyweight || stats.bodyweight;
  const sleep    = hDay.sleep      || stats.sleep;
  const statChips = [
    bw      ? `<span class="stat-chip">${svgI('scale',12,'#60a5fa')} ${bw} lbs</span>` : '',
    protein  ? `<span class="stat-chip">🥩 ${Math.round(protein)}g</span>` : '',
    calories ? `<span class="stat-chip">🔥 ${Math.round(calories)} cal</span>` : '',
    sleep    ? `<span class="stat-chip">${svgI('moon',12,'#818cf8')} ${sleep}h</span>` : '',
  ].filter(Boolean).join('');

  const dateStr = item.date ? fmtDateShort(item.date) : '';
  const safeUser = (item.userName||'?').replace(/</g,'&lt;');
  const initial  = (item.userName||'?')[0].toUpperCase();
  const color    = item.userColor||'#6c63ff';

  return `<div class="feed-entry">
    <div class="feed-header">
      <div class="feed-avatar" style="background:${color}" onclick="showUserProfile('${safeUser}','${color}')">${initial}</div>
      <div style="flex:1;min-width:0">
        <div class="feed-user" onclick="showUserProfile('${safeUser}','${color}')">${safeUser}</div>
        <div class="feed-date">${dateStr}</div>
      </div>
    </div>
    <div class="feed-blocks">${blockHtml}</div>
    ${statChips ? `<div class="feed-stats">${statChips}</div>` : ''}
  </div>`;
}

function buildRing(label, pct, value, color) {
  const p = Math.min(1, Math.max(0, pct||0));
  const dash = (p * 100).toFixed(1);
  return `<div class="activity-ring-wrap">
    <div class="ring-svg-wrap">
      <svg viewBox="0 0 36 36" class="ring-svg">
        <circle cx="18" cy="18" r="15.9" fill="none" stroke="var(--bg3)" stroke-width="3.2"/>
        <circle cx="18" cy="18" r="15.9" fill="none" stroke="${color}" stroke-width="3.2"
          stroke-dasharray="${dash} 100" stroke-linecap="round"
          transform="rotate(-90 18 18)"/>
      </svg>
      <div class="ring-center">${p>=1?'✓':Math.round(p*100)+'%'}</div>
    </div>
    <div class="ring-label">${label}</div>
    <div class="ring-value">${value}</div>
  </div>`;
}

function renderHomeRings() {
  const today = getTodayStr();
  const goals  = getGoals();
  const health = getHealthDay(today);
  const logs   = getLogs();

  const protein  = (health.proteinLog||[]).reduce((s,v)=>s+v,0);
  const calories = (health.calorieLog||[]).reduce((s,v)=>s+v,0);
  const sleep    = health.sleep || 0;
  const hasWorkout = logs.some(l=>l.date===today && getWorkoutBlocks(l.workout).length>0);

  const pGoal = goals.protein   || 150;
  const cGoal = goals.calories  || 2500;
  const sGoal = goals.sleep     || 8;

  return `<div class="activity-rings">
    ${buildRing('Protein',  protein/pGoal,  `${Math.round(protein)}/${pGoal}g`, '#22c55e')}
    ${buildRing('Calories', calories/cGoal, `${Math.round(calories)}/${cGoal}`, '#f59e0b')}
    ${buildRing('Sleep',    sleep/sGoal,    sleep?`${sleep}/${sGoal}h`:'—',    '#06b6d4')}
    ${buildRing('Workout',  hasWorkout?1:0, hasWorkout?'Done!':'Rest',          '#6c63ff')}
  </div>`;
}

function renderHome() {
  const profile = getProfile();
  const logs    = getLogs();

  // Build local feed entries from my logs (in case no family code / Firebase)
  const myEntries = logs
    .slice().sort((a,b)=>b.date.localeCompare(a.date))
    .slice(0, 20)
    .filter(l => getWorkoutBlocks(l.workout).length)
    .map(l => ({
      userName:  profile?.name||'Me',
      userColor: profile?.color||'#6c63ff',
      date:      l.date,
      blocks:    getWorkoutBlocks(l.workout).map(b => b.type==='cardio'
        ? { type:'cardio', activity:b.activity, distance:b.distance, time:b.time }
        : { type:'weights', exerciseCount:b.lifts?.length||0, exercises:b.lifts?.slice(0,3).map(x=>x.exercise)||[] }
      ),
      stats: { bodyweight:l.bodyweight, protein:l.protein, calories:l.calories, sleep:l.sleep },
      savedAt: new Date(l.date+'T12:00:00').getTime(),
    }));

  // Merge with remote feed (remote takes priority; de-dupe by userName+date)
  const seen = new Set();
  const combined = [...remoteFeedData, ...myEntries]
    .sort((a,b) => (b.savedAt||0) - (a.savedAt||0))
    .filter(item => {
      const key = `${item.userName}|${item.date}`;
      if (seen.has(key)) return false;
      seen.add(key); return true;
    });

  document.getElementById('home-rings').innerHTML = renderHomeRings();

  const container = document.getElementById('home-feed');
  if (!combined.length) {
    container.innerHTML = `<div class="empty-state">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <p>No workouts yet. Log your first session!</p>
    </div>`;
    return;
  }
  container.innerHTML = combined.map(buildFeedEntry).join('');
}

// ── User profile modal ────────────────────────────────────────────────────────
window.showUserProfile = function(userName, userColor) {
  const isMe = userName === getProfile()?.name;

  // Gather stats
  let score=0, workouts=0, protein=0, sleep=0;
  if (isMe) {
    const logs = getLogs(), goals = getGoals();
    score    = calcPoints(logs, goals);
    workouts = logs.filter(l=>getWorkoutBlocks(l.workout).length).length;
    const prLogs = logs.filter(l=>l.protein);
    if (prLogs.length) protein = Math.round(prLogs.reduce((s,l)=>s+l.protein,0)/prLogs.length);
    const slLogs = logs.filter(l=>l.sleep);
    if (slLogs.length) sleep = (slLogs.reduce((s,l)=>s+l.sleep,0)/slLogs.length).toFixed(1);
  } else {
    // Pull from leaderboard data
    const entry = leaderboardData.find(m=>m.name===userName);
    if (entry) { score=entry.score; workouts=entry.workouts; }
  }

  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="user-profile-modal">
      <div class="user-profile-top">
        <div class="user-profile-avatar" style="background:${userColor}">${userName[0].toUpperCase()}</div>
        <div>
          <div class="user-profile-name">${userName}</div>
          <div class="user-profile-sub">${isMe ? 'You' : 'Family member'}</div>
        </div>
      </div>
      <div class="user-stat-grid">
        <div class="user-stat-box"><div class="user-stat-val">${score}</div><div class="user-stat-key">Total points</div></div>
        <div class="user-stat-box"><div class="user-stat-val">${workouts}</div><div class="user-stat-key">Workouts logged</div></div>
        ${isMe && protein ? `<div class="user-stat-box"><div class="user-stat-val">${protein}g</div><div class="user-stat-key">Avg protein</div></div>` : ''}
        ${isMe && sleep   ? `<div class="user-stat-box"><div class="user-stat-val">${sleep}h</div><div class="user-stat-key">Avg sleep</div></div>` : ''}
      </div>
      <button class="btn btn-ghost" style="width:100%" id="prof-close">Close</button>
    </div>`;
  overlay.querySelector('#prof-close').addEventListener('click', ()=>overlay.remove());
  overlay.addEventListener('click', e=>{ if(e.target===overlay) overlay.remove(); });
  document.body.appendChild(overlay);
};

// ── Log Day ───────────────────────────────────────────────────────────────────
let currentLogDate = getTodayStr();
let blockCount = 0;

const EXERCISES_SORTED = [...EXERCISES].sort((a,b)=>a.localeCompare(b));
function buildExSelect(val='') {
  return `<select class="ex-select">${EXERCISES_SORTED.map(e=>`<option value="${e}"${e===val?' selected':''}>${e}</option>`).join('')}</select>`;
}

function addLiftRow(container, exercise='', sets=[{}]) {
  const card = document.createElement('div');
  card.className = 'lift-card';
  card.innerHTML = `
    <div class="lift-header">
      ${buildExSelect(exercise)}
      <button class="btn btn-ghost btn-sm btn-icon remove-lift">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="set-rows"></div>
    <button class="btn btn-ghost btn-sm add-set" style="width:100%;margin-top:4px">+ Add Set</button>`;
  card.querySelector('.remove-lift').addEventListener('click', ()=>card.remove());
  card.querySelector('.add-set').addEventListener('click', ()=>addSetRow(card.querySelector('.set-rows')));
  sets.forEach(s=>addSetRow(card.querySelector('.set-rows'), s));
  container.appendChild(card);
}

function addSetRow(container, {weight='',reps='',notes=''}={}) {
  const n = container.querySelectorAll('.set-group').length+1;
  const g = document.createElement('div'); g.className='set-group';
  g.innerHTML = `
    <div class="set-row">
      <span class="set-num">S${n}</span>
      <input type="number" placeholder="lbs"  value="${weight}" class="set-weight" min="0" inputmode="decimal">
      <input type="number" placeholder="reps" value="${reps}"   class="set-reps"   min="0" inputmode="numeric">
      <button class="btn btn-ghost btn-icon btn-sm remove-set">
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <input type="text" class="set-notes-input" placeholder="Notes (optional)" value="${notes}">`;
  g.querySelector('.remove-set').addEventListener('click', ()=>{
    g.remove();
    container.querySelectorAll('.set-num').forEach((el,i)=>el.textContent=`S${i+1}`);
  });
  container.appendChild(g);
}

function addWorkoutBlock(type, existing=null) {
  const id = 'block-'+(++blockCount);
  const wrap = document.getElementById('workout-blocks');
  const div = document.createElement('div');
  div.className='workout-block'; div.id=id; div.dataset.type=type;

  if (type==='weights') {
    const templates = getTemplates();
    div.innerHTML = `
      <div class="workout-block-header">
        <span class="workout-block-label">${svgI('dumbbell',15,'#6c63ff')} Weights</span>
        <div style="display:flex;gap:6px;align-items:center">
          ${templates.length?`<select class="tmpl-sel" style="width:auto;min-width:120px">
            <option value="">Template…</option>
            ${templates.map(t=>`<option value="${t.id}">${t.name}</option>`).join('')}
          </select>`:''}
          <button class="btn btn-ghost btn-sm btn-icon remove-block">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>
      </div>
      <div class="lifts-list"></div>
      <button class="btn btn-ghost btn-sm add-ex-btn" style="width:100%;margin-top:4px">+ Exercise</button>`;

    div.querySelector('.remove-block').addEventListener('click', ()=>div.remove());
    div.querySelector('.add-ex-btn').addEventListener('click', ()=>addLiftRow(div.querySelector('.lifts-list')));
    const tSel = div.querySelector('.tmpl-sel');
    if (tSel) tSel.addEventListener('change', ()=>{
      const tmpl = getTemplates().find(t=>t.id===tSel.value);
      if (!tmpl) return;
      div.querySelector('.lifts-list').innerHTML='';
      tmpl.exercises.forEach(ex=>{
        const name = ex.exercise||ex;
        const sets = Array(ex.sets||1).fill({});
        addLiftRow(div.querySelector('.lifts-list'), name, sets);
      });
      tSel.value='';
    });

    wrap.appendChild(div);
    if (existing?.lifts?.length) existing.lifts.forEach(l=>addLiftRow(div.querySelector('.lifts-list'),l.exercise,l.sets));
    else addLiftRow(div.querySelector('.lifts-list'));

  } else {
    div.innerHTML = `
      <div class="workout-block-header">
        <span class="workout-block-label">${svgI('activity',15,'#22c55e')} Cardio</span>
        <button class="btn btn-ghost btn-sm btn-icon remove-block">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="cardio-fields">
        <div><label>Activity</label>
          <select class="cardio-activity">
            ${CARDIO_ACTIVITIES.map(a=>`<option value="${a}"${a===existing?.activity?' selected':''}>${a}</option>`).join('')}
          </select>
        </div>
        <div></div>
        <div><label>Distance (miles)</label><input type="number" class="cardio-dist" placeholder="3.1" step="0.01" min="0" inputmode="decimal" value="${existing?.distance||''}"></div>
        <div><label>Time (MM:SS)</label><input type="text" class="cardio-time" placeholder="28:30" value="${existing?.time||''}"></div>
      </div>`;
    div.querySelector('.remove-block').addEventListener('click', ()=>div.remove());
    wrap.appendChild(div);
  }
}

function collectBlocks() {
  return Array.from(document.querySelectorAll('.workout-block')).map(div => {
    if (div.dataset.type==='weights') {
      return {
        type: 'weights',
        lifts: Array.from(div.querySelectorAll('.lift-card')).map(card => ({
          exercise: card.querySelector('.ex-select').value,
          sets: Array.from(card.querySelectorAll('.set-group')).map(g=>({
            weight: g.querySelector('.set-weight').value,
            reps:   g.querySelector('.set-reps').value,
            notes:  g.querySelector('.set-notes-input').value,
          })),
        })),
      };
    } else {
      return {
        type:     'cardio',
        activity: div.querySelector('.cardio-activity')?.value,
        distance: div.querySelector('.cardio-dist')?.value,
        time:     div.querySelector('.cardio-time')?.value,
      };
    }
  });
}

function loadLogForDate(date) {
  currentLogDate = date;
  const existing = getLogs().find(l=>l.date===date);

  // Reset blocks
  document.getElementById('workout-blocks').innerHTML = '';
  blockCount = 0;

  const blocks = getWorkoutBlocks(existing?.workout);
  if (blocks.length) {
    blocks.forEach(b => addWorkoutBlock(b.type, b));
  }
}

function renderLogDay(jumpToDate) {
  currentLogDate = jumpToDate || getTodayStr();
  const tab = document.getElementById('tab-log');
  tab.innerHTML = `
    <div class="top-bar">
      <h1 style="margin:0">Log Day</h1>
      <button class="theme-toggle" id="log-theme-btn">☀️</button>
    </div>

    <div class="card" style="margin-bottom:10px">
      <label>Date</label>
      <input type="date" id="log-date" value="${currentLogDate}" max="${getTodayStr()}">
    </div>

    <div class="card">
      <h2>Workouts</h2>
      <div id="workout-blocks"></div>
      <div class="add-workout-row" style="margin-top:8px">
        <button class="btn btn-ghost btn-sm" id="add-weights-btn">+ Weights</button>
        <button class="btn btn-ghost btn-sm" id="add-cardio-btn">+ Cardio</button>
      </div>
    </div>

    <button class="btn btn-primary" id="save-log-btn" style="width:100%;margin-bottom:8px">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
      Save Day
    </button>`;

  // Theme toggle (mobile log page)
  const tb = document.getElementById('log-theme-btn');
  tb.textContent = document.documentElement.dataset.theme==='dark' ? '☀️' : '🌙';
  tb.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme==='dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('ironlog_theme', next);
    tb.textContent = next==='dark' ? '☀️' : '🌙';
    document.getElementById('sidebar-theme-btn')?.dispatchEvent(new Event('_sync'));
  });

  document.getElementById('log-date').addEventListener('change', e=>loadLogForDate(e.target.value));
  document.getElementById('add-weights-btn').addEventListener('click', ()=>addWorkoutBlock('weights'));
  document.getElementById('add-cardio-btn').addEventListener('click', ()=>addWorkoutBlock('cardio'));
  document.getElementById('save-log-btn').addEventListener('click', saveDay);

  loadLogForDate(currentLogDate);
}

function saveDay() {
  const logs = getLogs();
  const entry = {
    date:    currentLogDate,
    workout: { blocks: collectBlocks() },
  };
  const idx = logs.findIndex(l=>l.date===currentLogDate);
  if (idx>=0) logs[idx]=entry; else logs.push(entry);
  setLogs(logs);
  toast('Day saved!');

  const profile = getProfile();
  if (profile) {
    const score    = calcPoints(logs, getGoals());
    const workouts = logs.filter(l=>getWorkoutBlocks(l.workout).length).length;
    const code     = profile.familyCode;
    syncLeaderboardEntry(code, profile, score, workouts);
    if (entry.workout.blocks.length) pushWorkoutToFeed(code, profile, entry);
  }
  // refresh home if visible
  if (document.getElementById('tab-home').classList.contains('active')) renderHome();
}

// ── Progress ──────────────────────────────────────────────────────────────────
let progressCharts = {};

function filterLogs(range) {
  const logs = getLogs(), now = new Date();
  if (range==='week')  { const s=new Date(now); s.setDate(now.getDate()-6); s.setHours(0,0,0,0); return logs.filter(l=>new Date(l.date)>=s); }
  if (range==='month') { const s=new Date(now); s.setDate(now.getDate()-29); s.setHours(0,0,0,0); return logs.filter(l=>new Date(l.date)>=s); }
  return logs;
}
function destroyCharts() { Object.values(progressCharts).forEach(c=>{ try{c.destroy();}catch{} }); progressCharts={}; }

const CHART_SCALES = {
  x: { grid:{color:'rgba(128,128,180,.08)'}, ticks:{color:'#9aa0c4',font:{family:'DM Sans',size:11}} },
  y: { grid:{color:'rgba(128,128,180,.08)'}, ticks:{color:'#9aa0c4',font:{family:'DM Sans',size:11}} },
};

function makeLineChart(id, labels, data, color) {
  const el=document.getElementById(id); if(!el) return;
  progressCharts[id] = new Chart(el, {
    type:'line',
    data:{ labels, datasets:[{ data, borderColor:color, backgroundColor:color+'22', tension:.35, fill:true, pointRadius:3, spanGaps:true }] },
    options:{ responsive:true, maintainAspectRatio:false, plugins:{ legend:{display:false}, tooltip:{mode:'index',intersect:false} }, scales:CHART_SCALES },
  });
}

function renderProgress() {
  destroyCharts();
  const range = document.querySelector('.toggle-btn.active[data-range]')?.dataset.range || 'week';
  const logs  = filterLogs(range).sort((a,b)=>a.date.localeCompare(b.date));
  const labels = logs.map(l=>l.date.slice(5));
  const fastest = getFastestMilePace(getLogs());

  document.getElementById('progress-charts').innerHTML = `
    ${fastest?`<div class="card"><div class="stat-highlight">
      <div class="stat-highlight-icon">${svgI('activity',22,'#22c55e')}</div>
      <div><div class="stat-highlight-val">${fastest.pace} /mi</div>
      <div class="stat-highlight-sub">Fastest mile · ${fmtDate(fastest.date)}</div></div>
    </div></div>`:''}
    <div class="card"><h2>Bodyweight (lbs)</h2><div class="chart-wrap"><canvas id="c-bw"></canvas></div></div>
    <div class="card"><h2>Protein (g)</h2><div class="chart-wrap"><canvas id="c-pro"></canvas></div></div>
    <div class="card"><h2>Calories</h2><div class="chart-wrap"><canvas id="c-cal"></canvas></div></div>
    <div class="card"><h2>Sleep (hrs)</h2><div class="chart-wrap"><canvas id="c-slp"></canvas></div></div>
    <div id="lift-charts"></div>`;

  makeLineChart('c-bw',  labels, logs.map(l=>l.bodyweight), '#6c63ff');
  makeLineChart('c-pro', labels, logs.map(l=>l.protein),    '#22c55e');
  makeLineChart('c-cal', labels, logs.map(l=>l.calories),   '#f59e0b');
  makeLineChart('c-slp', labels, logs.map(l=>l.sleep),      '#06b6d4');

  const allEx = new Set();
  logs.forEach(l=>getWorkoutBlocks(l.workout).forEach(b=>b.lifts?.forEach(lf=>allEx.add(lf.exercise))));
  const lc = document.getElementById('lift-charts');
  allEx.forEach(ex => {
    const pts = logs.filter(l=>getWorkoutBlocks(l.workout).some(b=>b.lifts?.some(lf=>lf.exercise===ex)))
      .map(l => {
        let top=0;
        getWorkoutBlocks(l.workout).forEach(b=>b.lifts?.filter(lf=>lf.exercise===ex).forEach(lf=>{
          const t=Math.max(0,...lf.sets.map(s=>parseFloat(s.weight)||0));
          if(t>top) top=t;
        }));
        return { date:l.date.slice(5), top };
      });
    if (!pts.length) return;
    const cid='c-lift-'+ex.replace(/\W+/g,'-');
    lc.innerHTML+=`<div class="card"><h2>${ex} — Top Weight</h2><div class="chart-wrap"><canvas id="${cid}"></canvas></div></div>`;
    setTimeout(()=>makeLineChart(cid, pts.map(p=>p.date), pts.map(p=>p.top), '#8b85ff'), 0);
  });
}

// ── Goals ─────────────────────────────────────────────────────────────────────
function renderGoals() {
  const goals=getGoals(), logs=getLogs(), recent=logs.slice(-7);
  const avg=k=>{ const v=recent.filter(l=>l[k]); return v.length?v.reduce((s,l)=>s+l[k],0)/v.length:0; };
  const now=new Date(), wa=new Date(); wa.setDate(now.getDate()-6);
  const wWeek=logs.filter(l=>new Date(l.date)>=wa&&getWorkoutBlocks(l.workout).length).length;
  const topW={};
  logs.forEach(l=>getWorkoutBlocks(l.workout).forEach(b=>b.lifts?.forEach(lf=>{
    const top=Math.max(0,...lf.sets.map(s=>parseFloat(s.weight)||0));
    if(!topW[lf.exercise]||top>topW[lf.exercise]) topW[lf.exercise]=top;
  })));
  const LIFTS=['Squat','Bench Press','Deadlift','Overhead Press','Barbell Row'];
  const goalItem=(label,key,cur,unit='',fmt=v=>Math.round(v))=>{
    const g=goals[key], pct=g?Math.min(100,(cur/g)*100):0;
    return `<div class="goal-item"><div class="goal-item-header"><span>${label}</span><span>${isNaN(cur)||!cur?'—':fmt(cur)}${unit} / ${g?g+unit:'—'}</span></div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill${pct>=100?' over':''}" style="width:${pct}%"></div></div></div>`;
  };
  document.getElementById('goals-display').innerHTML=`
    <div class="card"><h2>Daily Targets (7-day avg)</h2>
      ${goalItem('Bodyweight','bodyweight',avg('bodyweight'),' lbs')}
      ${goalItem('Protein','protein',avg('protein'),' g')}
      ${goalItem('Calories','calories',avg('calories'),' cal')}
      ${goalItem('Sleep','sleep',avg('sleep'),' hrs',v=>v.toFixed(1))}
      ${goalItem('Workouts / week','workoutsPerWeek',wWeek,'')}
    </div>
    <div class="card"><h2>Lift Goals (all-time top)</h2>
      ${LIFTS.map(ex=>goalItem(ex,ex.replace(/\s+/g,'_').toLowerCase(),topW[ex]||0,' lbs')).join('')}
    </div>`;
  const LKEYS=LIFTS.map(ex=>ex.replace(/\s+/g,'_').toLowerCase());
  document.getElementById('goals-form').innerHTML=`
    <div class="card"><h2>Set Goals</h2>
      <div class="goals-grid">
        <div><label>Bodyweight</label><input type="number" id="g-bodyweight"      value="${goals.bodyweight||''}"></div>
        <div><label>Protein (g)</label><input type="number" id="g-protein"         value="${goals.protein||''}"></div>
        <div><label>Calories</label>   <input type="number" id="g-calories"        value="${goals.calories||''}"></div>
        <div><label>Sleep (hrs)</label><input type="number" id="g-sleep" step=".5" value="${goals.sleep||''}"></div>
        <div><label>Workouts/wk</label><input type="number" id="g-workoutsPerWeek" value="${goals.workoutsPerWeek||''}"></div>
      </div>
      <hr class="divider"><h3>Lift Goals (lbs)</h3>
      <div class="goals-grid">
        ${LIFTS.map(ex=>`<div><label>${ex}</label><input type="number" id="g-${ex.replace(/\s+/g,'_').toLowerCase()}" value="${goals[ex.replace(/\s+/g,'_').toLowerCase()]||''}"></div>`).join('')}
      </div>
      <button class="btn btn-primary" id="save-goals-btn" style="margin-top:14px;width:100%">Save Goals</button>
    </div>`;
  document.getElementById('save-goals-btn').addEventListener('click',()=>{
    const g={};
    ['bodyweight','protein','calories','sleep','workoutsPerWeek',...LKEYS].forEach(k=>{
      const v=parseFloat(document.getElementById('g-'+k)?.value);
      if(!isNaN(v)) g[k]=v;
    });
    setGoals(g); toast('Goals saved!'); renderGoals();
  });
}

// ── Muscle Map ────────────────────────────────────────────────────────────────
function getMuscleSessionCounts() {
  const logs=getLogs(), now=new Date(), wa=new Date();
  wa.setDate(now.getDate()-6); wa.setHours(0,0,0,0);
  const wl=logs.filter(l=>new Date(l.date)>=wa);
  const counts={};
  MUSCLE_GROUPS.forEach(m=>counts[m]=0);
  wl.forEach(l=>{
    const dayMuscles=new Set();
    getWorkoutBlocks(l.workout).forEach(b=>b.lifts?.forEach(lf=>{
      (MUSCLE_MAP[lf.exercise]||[]).forEach(m=>dayMuscles.add(m));
    }));
    dayMuscles.forEach(m=>{ if(counts[m]!==undefined) counts[m]++; });
  });
  return counts;
}

function muscleColor(count) {
  return count>=2 ? 'var(--green)' : count===1 ? 'var(--amber)' : 'var(--bg3)';
}
function muscleOpacity(count) { return count>0 ? '0.85' : '0.35'; }

let _frontChart = null, _backChart = null;

function initBodyCharts() {
  const lib = window.BodyMuscles;
  if (!lib) return;
  const { BodyChart, ViewSide } = lib;
  if (!BodyChart || !ViewSide) return;
  const frontEl = document.getElementById('muscle-front-view');
  const backEl  = document.getElementById('muscle-back-view');
  if (!frontEl || !backEl) return;
  try {
    frontEl.innerHTML = '';
    backEl.innerHTML  = '';
    _frontChart = new BodyChart(frontEl, { view: ViewSide.FRONT, bodyState: {} });
    _backChart  = new BodyChart(backEl,  { view: ViewSide.BACK,  bodyState: {} });
  } catch(e) { console.warn('BodyChart init:', e); }
}

function buildBodyState(counts) {
  const state = {};
  MUSCLE_GROUPS.forEach(group => {
    const intensity = counts[group] >= 2 ? 8 : counts[group] === 1 ? 4 : 0;
    (MUSCLE_ID_MAP[group] || []).forEach(id => {
      if (state[id] === undefined || intensity > state[id]) {
        state[id] = { intensity, selected: false };
      }
    });
  });
  return state;
}

// Legacy — keep signature so no other references break
function buildBodySVG(side, counts) {
  // Map group counts to fill colors for SVG elements
  const col = groups => {
    const max = Math.max(...groups.map(g=>counts[g]||0));
    return muscleColor(max);
  };
  const op = groups => muscleOpacity(Math.max(...groups.map(g=>counts[g]||0)));

  const stroke = 'var(--border)';
  const sw = '0.6';

  if (side==='front') return `<svg viewBox="0 0 120 260" xmlns="http://www.w3.org/2000/svg">
  <!-- Body outline -->
  <path fill="var(--bg2)" stroke="${stroke}" stroke-width="${sw}" d="
    M60 4 C51 4 44 10 44 18 C44 24 47 28 51 30
    C47 32 42 36 40 42 C34 46 24 48 22 56
    C18 64 20 76 22 84 C24 90 22 96 20 106
    C18 114 20 120 24 122 L28 120
    C28 130 26 142 24 154 C22 162 22 172 26 180
    C28 184 30 190 30 198 C30 204 28 210 28 216
    C28 220 30 224 34 224 C38 224 40 220 40 216
    L42 192 C46 193 53 195 60 195
    C67 195 74 193 78 192 L80 216
    C80 220 82 224 86 224 C90 224 92 220 92 216
    C92 210 90 204 90 198 C90 190 92 184 94 180
    C98 172 98 162 96 154 C94 142 92 130 92 120 L96 122
    C100 120 102 114 100 106 C98 96 96 90 98 84
    C100 76 102 64 98 56 C96 48 86 46 80 42
    C78 36 73 32 69 30 C73 28 76 24 76 18 C76 10 69 4 60 4 Z"/>
  <!-- Head -->
  <circle cx="60" cy="16" r="12" fill="var(--bg3)" stroke="${stroke}" stroke-width="${sw}" opacity="0.5"/>
  <!-- Chest L -->
  <ellipse id="svg-chest-l" cx="49" cy="62" rx="12" ry="11"
    fill="${col(['Chest'])}" opacity="${op(['Chest'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Chest R -->
  <ellipse id="svg-chest-r" cx="71" cy="62" rx="12" ry="11"
    fill="${col(['Chest'])}" opacity="${op(['Chest'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Front Delt L -->
  <ellipse id="svg-fdelt-l" cx="33" cy="54" rx="8" ry="9"
    fill="${col(['Front Delts','Side Delts'])}" opacity="${op(['Front Delts','Side Delts'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Front Delt R -->
  <ellipse id="svg-fdelt-r" cx="87" cy="54" rx="8" ry="9"
    fill="${col(['Front Delts','Side Delts'])}" opacity="${op(['Front Delts','Side Delts'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Bicep L -->
  <rect id="svg-bi-l" x="20" y="66" width="11" height="22" rx="5"
    fill="${col(['Biceps'])}" opacity="${op(['Biceps'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Bicep R -->
  <rect id="svg-bi-r" x="89" y="66" width="11" height="22" rx="5"
    fill="${col(['Biceps'])}" opacity="${op(['Biceps'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Core -->
  <rect id="svg-core" x="50" y="76" width="20" height="30" rx="4"
    fill="${col(['Core'])}" opacity="${op(['Core'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Quad L -->
  <rect id="svg-quad-l" x="43" y="112" width="14" height="40" rx="6"
    fill="${col(['Quads'])}" opacity="${op(['Quads'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Quad R -->
  <rect id="svg-quad-r" x="63" y="112" width="14" height="40" rx="6"
    fill="${col(['Quads'])}" opacity="${op(['Quads'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Calf L front -->
  <rect id="svg-calf-l-f" x="44" y="158" width="11" height="30" rx="5"
    fill="${col(['Calves'])}" opacity="${op(['Calves'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Calf R front -->
  <rect id="svg-calf-r-f" x="65" y="158" width="11" height="30" rx="5"
    fill="${col(['Calves'])}" opacity="${op(['Calves'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Forearms (decorative) -->
  <rect x="19" y="90" width="10" height="18" rx="4" fill="var(--bg3)" opacity="0.3" stroke="${stroke}" stroke-width="${sw}"/>
  <rect x="91" y="90" width="10" height="18" rx="4" fill="var(--bg3)" opacity="0.3" stroke="${stroke}" stroke-width="${sw}"/>
</svg>`;

  return `<svg viewBox="0 0 120 260" xmlns="http://www.w3.org/2000/svg">
  <!-- Body outline (back) -->
  <path fill="var(--bg2)" stroke="${stroke}" stroke-width="${sw}" d="
    M60 4 C51 4 44 10 44 18 C44 24 47 28 51 30
    C47 32 42 36 40 42 C34 46 24 48 22 56
    C18 64 20 76 22 84 C24 90 22 96 20 106
    C18 114 20 120 24 122 L28 120
    C28 130 26 142 24 154 C22 162 22 172 26 180
    C28 184 30 190 30 198 C30 204 28 210 28 216
    C28 220 30 224 34 224 C38 224 40 220 40 216
    L42 192 C46 193 53 195 60 195
    C67 195 74 193 78 192 L80 216
    C80 220 82 224 86 224 C90 224 92 220 92 216
    C92 210 90 204 90 198 C90 190 92 184 94 180
    C98 172 98 162 96 154 C94 142 92 130 92 120 L96 122
    C100 120 102 114 100 106 C98 96 96 90 98 84
    C100 76 102 64 98 56 C96 48 86 46 80 42
    C78 36 73 32 69 30 C73 28 76 24 76 18 C76 10 69 4 60 4 Z"/>
  <!-- Head -->
  <circle cx="60" cy="16" r="12" fill="var(--bg3)" stroke="${stroke}" stroke-width="${sw}" opacity="0.5"/>
  <!-- Traps -->
  <path id="svg-trap" fill="${col(['Traps'])}" opacity="${op(['Traps'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"
    d="M51 31 C48 34 42 38 35 43 C31 46 30 50 35 54 C43 50 51 47 60 46 C69 47 77 50 85 54 C90 50 89 46 85 43 C78 38 72 34 69 31 Z"/>
  <!-- Rear Delt L -->
  <ellipse id="svg-rdelt-l" cx="33" cy="53" rx="8" ry="9"
    fill="${col(['Rear Delts'])}" opacity="${op(['Rear Delts'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Rear Delt R -->
  <ellipse id="svg-rdelt-r" cx="87" cy="53" rx="8" ry="9"
    fill="${col(['Rear Delts'])}" opacity="${op(['Rear Delts'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Lat L -->
  <path id="svg-lat-l" fill="${col(['Back'])}" opacity="${op(['Back'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"
    d="M42 56 C36 62 26 74 24 86 C28 86 38 80 44 76 C47 68 46 60 42 56 Z"/>
  <!-- Lat R -->
  <path id="svg-lat-r" fill="${col(['Back'])}" opacity="${op(['Back'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"
    d="M78 56 C84 62 94 74 96 86 C92 86 82 80 76 76 C73 68 74 60 78 56 Z"/>
  <!-- Lower Back -->
  <rect id="svg-lback" x="48" y="78" width="24" height="20" rx="4"
    fill="${col(['Lower Back','Back'])}" opacity="${op(['Lower Back'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Tricep L -->
  <rect id="svg-tri-l" x="20" y="66" width="11" height="22" rx="5"
    fill="${col(['Triceps'])}" opacity="${op(['Triceps'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Tricep R -->
  <rect id="svg-tri-r" x="89" y="66" width="11" height="22" rx="5"
    fill="${col(['Triceps'])}" opacity="${op(['Triceps'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Glute L -->
  <ellipse id="svg-glute-l" cx="47" cy="106" rx="14" ry="13"
    fill="${col(['Glutes'])}" opacity="${op(['Glutes'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Glute R -->
  <ellipse id="svg-glute-r" cx="73" cy="106" rx="14" ry="13"
    fill="${col(['Glutes'])}" opacity="${op(['Glutes'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Hamstring L -->
  <rect id="svg-ham-l" x="41" y="122" width="14" height="36" rx="6"
    fill="${col(['Hamstrings'])}" opacity="${op(['Hamstrings'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Hamstring R -->
  <rect id="svg-ham-r" x="65" y="122" width="14" height="36" rx="6"
    fill="${col(['Hamstrings'])}" opacity="${op(['Hamstrings'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Calf L back -->
  <rect id="svg-calf-l-b" x="43" y="160" width="11" height="28" rx="5"
    fill="${col(['Calves'])}" opacity="${op(['Calves'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Calf R back -->
  <rect id="svg-calf-r-b" x="66" y="160" width="11" height="28" rx="5"
    fill="${col(['Calves'])}" opacity="${op(['Calves'])}" stroke="${stroke}" stroke-width="${sw}" class="muscle-region"/>
  <!-- Forearms decorative -->
  <rect x="19" y="90" width="10" height="18" rx="4" fill="var(--bg3)" opacity="0.3" stroke="${stroke}" stroke-width="${sw}"/>
  <rect x="91" y="90" width="10" height="18" rx="4" fill="var(--bg3)" opacity="0.3" stroke="${stroke}" stroke-width="${sw}"/>
</svg>`;
}

function renderMuscleMap() {
  const counts = getMuscleSessionCounts();

  if (!_frontChart || !_backChart) initBodyCharts();
  if (_frontChart && _backChart) {
    const bodyState = buildBodyState(counts);
    _frontChart.update({ bodyState });
    _backChart.update({ bodyState });
    // Override library colors with green/yellow per design
    Object.entries(bodyState).forEach(([id, { intensity }]) => {
      const color = intensity >= 8 ? '#22c55e' : intensity >= 4 ? '#f59e0b' : null;
      if (!color) return;
      const path = _frontChart.musclePaths.get(id) || _backChart.musclePaths.get(id);
      if (path) { path.setAttribute('fill', color); path.style.fillOpacity = '1'; }
    });
  }

  document.getElementById('muscle-grid').innerHTML = MUSCLE_GROUPS.map(m => {
    const n = counts[m];
    return `<div class="muscle-chip ${n>=2?'hit2':n===1?'hit1':'hit0'}">${m}<br><small style="opacity:.65">${n}×</small></div>`;
  }).join('');
}

// ── Health tab ────────────────────────────────────────────────────────────────
function renderHealth() {
  const today  = getTodayStr();
  const health = getHealthDay(today);
  const goals  = getGoals();
  const pGoal  = goals.protein  || 150;
  const cGoal  = goals.calories || 2500;
  const sGoal  = goals.sleep    || 8;

  const pLog = health.proteinLog  || [];
  const cLog = health.calorieLog  || [];
  const pTotal = pLog.reduce((s,v)=>s+v,0);
  const cTotal = cLog.reduce((s,v)=>s+v,0);

  const container = document.getElementById('tab-health');
  container.innerHTML = `
    <div class="top-bar"><h1 style="margin:0">Health</h1><div style="font-size:12px;color:var(--text2)">${fmtDateShort(today)}</div></div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <h2 style="margin:0">🥩 Protein</h2>
        <span style="font-size:13px;color:var(--green);font-weight:600">${Math.round(pTotal)} / ${pGoal}g</span>
      </div>
      <div class="health-log-list" id="protein-log-list">
        ${pLog.map((v,i)=>`<div class="health-log-row"><span>${v}g</span><button class="btn btn-ghost btn-sm btn-icon" onclick="removeHealthEntry('protein',${i})"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <input type="number" id="protein-input" placeholder="e.g. 40" inputmode="numeric" style="flex:1">
        <button class="btn btn-primary btn-sm" onclick="addHealthEntry('protein')">+ Add</button>
      </div>
      <div class="health-total-bar" style="margin-top:10px">
        <div class="health-total-fill" style="width:${Math.min(100,pTotal/pGoal*100).toFixed(1)}%;background:var(--green)"></div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px">
        <h2 style="margin:0">🔥 Calories</h2>
        <span style="font-size:13px;color:var(--amber);font-weight:600">${Math.round(cTotal)} / ${cGoal}</span>
      </div>
      <div class="health-log-list" id="calorie-log-list">
        ${cLog.map((v,i)=>`<div class="health-log-row"><span>${v} cal</span><button class="btn btn-ghost btn-sm btn-icon" onclick="removeHealthEntry('calorie',${i})"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>`).join('')}
      </div>
      <div style="display:flex;gap:8px;margin-top:8px">
        <input type="number" id="calorie-input" placeholder="e.g. 500" inputmode="numeric" style="flex:1">
        <button class="btn btn-primary btn-sm" onclick="addHealthEntry('calorie')">+ Add</button>
      </div>
      <div class="health-total-bar" style="margin-top:10px">
        <div class="health-total-fill" style="width:${Math.min(100,cTotal/cGoal*100).toFixed(1)}%;background:var(--amber)"></div>
      </div>
    </div>

    <div class="card">
      <h2>Daily Metrics</h2>
      <div class="stats-grid" style="margin-top:10px">
        <div>
          <label>Bodyweight (lbs)</label>
          <input type="number" id="health-bw" placeholder="185" inputmode="decimal" value="${health.bodyweight||''}">
        </div>
        <div>
          <label>Sleep last night (hrs)</label>
          <input type="number" id="health-sleep" placeholder="${sGoal}" inputmode="decimal" step="0.5" value="${health.sleep||''}">
        </div>
      </div>
      <button class="btn btn-primary btn-sm" style="width:100%;margin-top:12px" onclick="saveHealthMetrics()">Save</button>
    </div>`;
}

window.addHealthEntry = type => {
  const today  = getTodayStr();
  const input  = document.getElementById(`${type}-input`);
  const val    = parseFloat(input.value);
  if (!val || val<=0) return;
  const health = getHealthDay(today);
  const key    = type==='protein' ? 'proteinLog' : 'calorieLog';
  health[key]  = [...(health[key]||[]), val];
  saveHealthDay(today, health);
  input.value  = '';
  renderHealth();
  // refresh home rings
  if (document.getElementById('tab-home').classList.contains('active')) renderHome();
};

window.removeHealthEntry = (type, idx) => {
  const today  = getTodayStr();
  const health = getHealthDay(today);
  const key    = type==='protein' ? 'proteinLog' : 'calorieLog';
  health[key]  = (health[key]||[]).filter((_,i)=>i!==idx);
  saveHealthDay(today, health);
  renderHealth();
  if (document.getElementById('tab-home').classList.contains('active')) renderHome();
};

window.saveHealthMetrics = () => {
  const today = getTodayStr();
  const bw    = parseFloat(document.getElementById('health-bw')?.value)    || null;
  const sleep = parseFloat(document.getElementById('health-sleep')?.value) || null;
  saveHealthDay(today, { bodyweight: bw, sleep });
  toast('Saved!');
  if (document.getElementById('tab-home').classList.contains('active')) renderHome();
};

// ── Templates ─────────────────────────────────────────────────────────────────
function renderTemplates() {
  const templates = getTemplates();
  const container = document.getElementById('templates-list');
  if (!templates.length) {
    container.innerHTML=`<div class="empty-state"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><p>No templates yet.</p></div>`;
    return;
  }
  container.innerHTML = templates.map(t=>`
    <div class="template-card">
      <div class="template-card-header">
        <strong>${t.name}</strong>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="editTemplate('${t.id}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTemplate('${t.id}')">Delete</button>
        </div>
      </div>
      <div class="template-exercises">${t.exercises.map(e=>`<span class="ex-chip">${e.exercise||e} <span style="opacity:.6;font-size:10px">${e.sets||''}${e.sets?'×':''}</span></span>`).join('')}</div>
    </div>`).join('');
}
window.deleteTemplate = id => { setTemplates(getTemplates().filter(t=>t.id!==id)); renderTemplates(); toast('Deleted'); };
window.editTemplate   = id => { const t=getTemplates().find(t=>t.id===id); if(t) openTemplateModal(t); };

function openTemplateModal(existing=null) {
  const overlay = document.createElement('div');
  overlay.className='modal-overlay';
  overlay.innerHTML=`
    <div class="modal">
      <h2>${existing?'Edit':'New'} Template</h2>
      <label>Name</label>
      <input id="tmpl-name" type="text" placeholder="Push Day A" value="${existing?.name||''}" style="margin-bottom:12px">
      <label>Exercises</label>
      <div id="tmpl-exercises" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
        ${(existing?.exercises||[]).map(e=>buildTmplRow(e)).join('')}
      </div>
      <button class="btn btn-ghost btn-sm" id="tmpl-add-ex" style="width:100%;margin-bottom:16px">+ Add Exercise</button>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" id="tmpl-save" style="flex:1">Save</button>
        <button class="btn btn-ghost"   id="tmpl-cancel">Cancel</button>
      </div>
    </div>`;
  overlay.querySelector('#tmpl-add-ex').addEventListener('click',()=>{
    const d=document.createElement('div'); d.innerHTML=buildTmplRow('');
    overlay.querySelector('#tmpl-exercises').appendChild(d.firstElementChild);
  });
  overlay.querySelector('#tmpl-cancel').addEventListener('click',()=>overlay.remove());
  overlay.querySelector('#tmpl-save').addEventListener('click',()=>{
    const name=overlay.querySelector('#tmpl-name').value.trim(); if(!name) return;
    const exercises=[...overlay.querySelectorAll('.tmpl-ex-select')].map(s=>{
      const row=s.closest('.tmpl-ex-row');
      return { exercise: s.value, sets: parseInt(row?.querySelector('.tmpl-sets-input')?.value)||3 };
    }).filter(e=>e.exercise);
    const ts=getTemplates();
    if(existing){ const i=ts.findIndex(t=>t.id===existing.id); if(i>=0) ts[i]={...existing,name,exercises}; }
    else ts.push({id:Date.now().toString(),name,exercises});
    setTemplates(ts); overlay.remove(); renderTemplates(); renderLogDay(); toast('Template saved!');
  });
  document.body.appendChild(overlay);
  overlay.addEventListener('click',e=>{ if(e.target===overlay) overlay.remove(); });
}
function buildTmplRow(ex='') {
  const val  = ex.exercise||ex||'';
  const sets = ex.sets||3;
  return `<div class="tmpl-ex-row" style="display:flex;gap:6px;align-items:center">
    <select class="tmpl-ex-select" style="flex:1">${EXERCISES_SORTED.map(e=>`<option value="${e}"${e===val?' selected':''}>${e}</option>`).join('')}</select>
    <input type="number" class="tmpl-sets-input" value="${sets}" min="1" max="10" style="width:48px;text-align:center" title="Sets">
    <span style="font-size:11px;color:var(--text2)">sets</span>
    <button class="btn btn-ghost btn-sm btn-icon" onclick="this.closest('.tmpl-ex-row').remove()">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button></div>`;
}

// ── History ───────────────────────────────────────────────────────────────────
function renderHistory() {
  const logs = getLogs().slice().sort((a,b)=>b.date.localeCompare(a.date));
  const container = document.getElementById('history-list');
  if (!logs.length) {
    container.innerHTML=`<div class="empty-state"><svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg><p>No entries yet.</p></div>`;
    return;
  }
  container.innerHTML=logs.map(log=>{
    const blocks=getWorkoutBlocks(log.workout);
    const hDay=getHealthDay(log.date);
    const protein=hDay.proteinLog?.reduce((s,v)=>s+v,0)||log.protein;
    const calories=hDay.calorieLog?.reduce((s,v)=>s+v,0)||log.calories;
    const bw=hDay.bodyweight||log.bodyweight;
    const slp=hDay.sleep||log.sleep;
    const wStr=blocks.map(b=>b.type==='cardio'?`${svgI('activity',13,'#22c55e')} ${b.activity||'Cardio'}${b.distance?' · '+b.distance+' mi':''}`:`${svgI('dumbbell',13,'#6c63ff')} ${b.lifts?.length||0} exercises`).join(' + ');
    return `<div class="history-card">
      <div class="history-header">
        <div><div class="history-date">${fmtDate(log.date)}</div>${wStr?`<div class="history-workout">${wStr}</div>`:''}</div>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="editHistoryEntry('${log.date}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteHistoryEntry('${log.date}')">Delete</button>
        </div>
      </div>
      <div class="history-chips">
        ${bw?`<span class="stat-chip">${svgI('scale',12,'#60a5fa')} ${bw} lbs</span>`:''}
        ${protein?`<span class="stat-chip">🥩 ${Math.round(protein)}g</span>`:''}
        ${calories?`<span class="stat-chip">🔥 ${Math.round(calories)} cal</span>`:''}
        ${slp?`<span class="stat-chip">${svgI('moon',12,'#818cf8')} ${slp}h</span>`:''}
      </div>
    </div>`;
  }).join('');
}
window.editHistoryEntry = date => {
  showTab('log');
  setTimeout(()=>{ const dp=document.getElementById('log-date'); if(dp){dp.value=date; loadLogForDate(date);} }, 40);
};
window.deleteHistoryEntry = date => {
  if (!confirm(`Delete workout entry for ${fmtDate(date)}?`)) return;
  const logs = getLogs().filter(l=>l.date!==date);
  setLogs(logs);
  // resync leaderboard score after deletion
  const profile=getProfile();
  if (profile?.familyCode&&db) {
    syncLeaderboardEntry(profile.familyCode,profile,calcPoints(logs,getGoals()),logs.filter(l=>getWorkoutBlocks(l.workout).length).length);
  }
  renderHistory();
  toast('Entry deleted');
};

// ── Leaderboard ───────────────────────────────────────────────────────────────
let leaderboardData = [];
function renderLeaderboard() {
  const p=getProfile();
  document.getElementById('lb-family-code').value=p?.familyCode||'';
  const logs=getLogs(), goals=getGoals();
  const myScore=calcPoints(logs,goals), myWork=logs.filter(l=>getWorkoutBlocks(l.workout).length).length;
  const local={name:p?.name||'You',color:p?.color||'#6c63ff',score:myScore,workouts:myWork};
  renderLbRows([...leaderboardData.filter(m=>m.name!==p?.name),local]);
}
function renderLbRows(members) {
  const sorted=[...members].sort((a,b)=>b.score-a.score);
  const ranks=['1','2','3'];
  document.getElementById('lb-list').innerHTML=sorted.map((m,i)=>`
    <div class="lb-row">
      <div class="lb-rank">${ranks[i]||i+1}</div>
      <div class="lb-avatar" style="background:${m.color}" onclick="showUserProfile('${m.name.replace(/'/g,"\\'")}','${m.color}')">${m.name[0].toUpperCase()}</div>
      <div class="lb-info">
        <div class="lb-name" onclick="showUserProfile('${m.name.replace(/'/g,"\\'")}','${m.color}')">${m.name}</div>
        <div class="lb-sub">${m.workouts} workout${m.workouts!==1?'s':''}</div>
      </div>
      <div class="lb-score">${m.score} pts</div>
    </div>`).join('');
}

// ── Template seeding ──────────────────────────────────────────────────────────
function seedDefaultTemplates() {
  if (ls.get('ironlog_templates_seeded')) return;
  const defaults = [
    {
      id: 'tpl-push', name: 'Push',
      exercises: [
        { exercise: 'Bench Press',               sets: 4 },
        { exercise: 'Incline Dumbbell Press',     sets: 3 },
        { exercise: 'Cable Fly',                  sets: 3 },
        { exercise: 'Lateral Raise',              sets: 4 },
        { exercise: 'Dumbbell Shoulder Press',    sets: 3 },
        { exercise: 'Tricep Pushdown',            sets: 3 },
        { exercise: 'Overhead Tricep Extension',  sets: 3 },
      ],
    },
    {
      id: 'tpl-pull', name: 'Pull',
      exercises: [
        { exercise: 'Chest-Supported Row',    sets: 4 },
        { exercise: 'Lat Pulldown',           sets: 4 },
        { exercise: 'Single-Arm Row',         sets: 3 },
        { exercise: 'Dumbbell Pullover',      sets: 3 },
        { exercise: 'Face Pull',              sets: 4 },
        { exercise: 'EZ Bar Curl',            sets: 3 },
        { exercise: 'Incline Dumbbell Curl',  sets: 3 },
        { exercise: 'Crunch',                 sets: 3 },
      ],
    },
    {
      id: 'tpl-legs', name: 'Legs',
      exercises: [],
    },
    {
      id: 'tpl-upper', name: 'Upper',
      exercises: [
        { exercise: 'Incline Bench Press',  sets: 3 },
        { exercise: 'Cable Fly',            sets: 3 },
        { exercise: 'Cable Row',            sets: 3 },
        { exercise: 'Lat Pulldown',         sets: 3 },
        { exercise: 'Lateral Raise',        sets: 4 },
        { exercise: 'Rear Delt Fly',        sets: 3 },
        { exercise: 'Hammer Curl',          sets: 3 },
        { exercise: 'Skull Crusher',        sets: 3 },
      ],
    },
    {
      id: 'tpl-lower', name: 'Lower',
      exercises: [
        { exercise: 'Leg Curl',              sets: 4 },
        { exercise: 'Romanian Deadlift',     sets: 4 },
        { exercise: 'Hack Squat',            sets: 3 },
        { exercise: 'Bulgarian Split Squat', sets: 3 },
        { exercise: 'Seated Calf Raise',     sets: 4 },
        { exercise: 'Hanging Leg Raise',     sets: 3 },
      ],
    },
  ];
  defaults[2].exercises = [
    { exercise: 'Leg Curl',             sets: 3 },
    { exercise: 'Squat',                sets: 4 },
    { exercise: 'Leg Press',            sets: 3 },
    { exercise: 'Romanian Deadlift',    sets: 3 },
    { exercise: 'Lunge',                sets: 3 },
    { exercise: 'Calf Raise',           sets: 4 },
  ];
  const existing = getTemplates();
  const existingIds = new Set(existing.map(t=>t.id));
  const toAdd = defaults.filter(t=>!existingIds.has(t.id));
  if (toAdd.length) setTemplates([...existing, ...toAdd]);
  ls.set('ironlog_templates_seeded', true);
}

// ── Init ──────────────────────────────────────────────────────────────────────
function initApp() {
  const profile = getProfile();

  seedDefaultTemplates();
  renderLogDay();
  renderTemplates();

  // Sidebar profile
  const av=document.getElementById('profile-avatar');
  const nm=document.getElementById('profile-name');
  if(av){ av.style.background=profile.color; av.textContent=profile.name[0].toUpperCase(); }
  if(nm) nm.textContent=profile.name;

  // Sidebar theme toggle
  const sBtn=document.getElementById('sidebar-theme-btn');
  if(sBtn){
    const sync=()=>{ sBtn.textContent=document.documentElement.dataset.theme==='dark'?'☀️ Light':'🌙 Dark'; };
    sync();
    sBtn.addEventListener('click',()=>{
      const next=document.documentElement.dataset.theme==='dark'?'light':'dark';
      document.documentElement.dataset.theme=next;
      localStorage.setItem('ironlog_theme',next); sync();
    });
    sBtn.addEventListener('_sync',sync);
  }

  // Leaderboard save
  document.getElementById('lb-save-code').addEventListener('click',()=>{
    const code=document.getElementById('lb-family-code').value.trim().toUpperCase();
    const p=getProfile(); p.familyCode=code; setProfile(p);
    if(code&&db){
      subscribeLeaderboard(code,members=>{ leaderboardData=members; renderLeaderboard(); });
      subscribeToFeed(code, items=>{ remoteFeedData=items; renderHome(); });
      const logs=getLogs();
      syncLeaderboardEntry(code,p,calcPoints(logs,getGoals()),logs.filter(l=>getWorkoutBlocks(l.workout).length).length);
    }
    renderLeaderboard();
    toast('Family code saved!');
  });

  if(profile.familyCode&&db){
    subscribeLeaderboard(profile.familyCode,members=>{ leaderboardData=members; renderLeaderboard(); });
    subscribeToFeed(profile.familyCode, items=>{ remoteFeedData=items; renderHome(); });
    // Push current score so new members see us immediately on join
    const logs=getLogs();
    syncLeaderboardEntry(profile.familyCode,profile,calcPoints(logs,getGoals()),logs.filter(l=>getWorkoutBlocks(l.workout).length).length);
  }

  showTab('home');
}

// ── Bootstrap ─────────────────────────────────────────────────────────────────
function bootstrap() {
  const theme=localStorage.getItem('ironlog_theme')||'dark';
  document.documentElement.dataset.theme=theme;

  // All nav items (sidebar + bottom nav)
  document.querySelectorAll('.nav-item[data-tab]').forEach(n=>
    n.addEventListener('click',()=>showTab(n.dataset.tab)));

  // Menu button
  document.getElementById('menu-btn')?.addEventListener('click', openMenu);
  document.getElementById('menu-overlay')?.addEventListener('click',e=>{
    if(e.target===document.getElementById('menu-overlay')) document.getElementById('menu-overlay').classList.remove('open');
  });
  document.querySelectorAll('.menu-item[data-tab]').forEach(m=>
    m.addEventListener('click',()=>showTab(m.dataset.tab)));

  // Progress range toggles
  document.querySelectorAll('.toggle-btn[data-range]').forEach(btn=>
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.toggle-btn[data-range]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active'); renderProgress();
    }));

  const profile=getProfile();
  if(!profile) {
    renderOnboarding();
  } else {
    document.getElementById('onboarding').style.display='none';
    initFirebase().then(()=>initApp());
  }

  // PWA
  let dp=null;
  window.addEventListener('beforeinstallprompt',e=>{ e.preventDefault(); dp=e; document.getElementById('install-btn').style.display='flex'; });
  document.getElementById('install-btn')?.addEventListener('click',async()=>{
    if(!dp) return; dp.prompt();
    const {outcome}=await dp.userChoice;
    if(outcome==='accepted') document.getElementById('install-btn').style.display='none'; dp=null;
  });

  if('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

document.addEventListener('DOMContentLoaded', bootstrap);
