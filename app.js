// ── Firebase config ───────────────────────────────────────────────────────────
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCgsme2Umk-NSdTiBJplNeLNH1QD17j7do",
  authDomain: "ironlog-family.firebaseapp.com",
  projectId: "ironlog-family",
  storageBucket: "ironlog-family.firebasestorage.app",
  messagingSenderId: "877808551901",
  appId: "1:877808551901:web:b74e623dc05c32e94bd834",
};

// ── Exercise & muscle data ────────────────────────────────────────────────────
const EXERCISES = [
  'Squat','Front Squat','Hack Squat','Leg Press','Leg Extension','Leg Curl',
  'Romanian Deadlift','Bulgarian Split Squat','Lunge','Step Up','Hip Thrust',
  'Bench Press','Incline Bench Press','Decline Bench Press','Close-Grip Bench',
  'Dumbbell Press','Incline Dumbbell Press','Dumbbell Fly','Cable Fly','Push Up',
  'Deadlift','Sumo Deadlift','Trap Bar Deadlift',
  'Barbell Row','Pendlay Row','Cable Row','Chest-Supported Row',
  'Pull Up','Chin Up','Lat Pulldown','Single-Arm Row','Kroc Row',
  'Overhead Press','Push Press','Dumbbell Shoulder Press','Arnold Press',
  'Lateral Raise','Front Raise','Face Pull','Rear Delt Fly',
  'Bicep Curl','Hammer Curl','Preacher Curl','EZ Bar Curl','Cable Curl',
  'Tricep Pushdown','Skull Crusher','Overhead Tricep Extension','Dips','Diamond Push Up',
  'Calf Raise','Seated Calf Raise','Shrug','Power Clean','Plank','Ab Wheel','Crunch',
];

const CARDIO_ACTIVITIES = ['Run','Bike','Swim','Row','Walk','Elliptical','Stair Climber'];

const MUSCLE_MAP = {
  'Squat':['Quads','Glutes','Hamstrings','Core'],
  'Front Squat':['Quads','Core'],
  'Hack Squat':['Quads','Glutes'],
  'Leg Press':['Quads','Glutes'],
  'Leg Extension':['Quads'],
  'Leg Curl':['Hamstrings'],
  'Romanian Deadlift':['Hamstrings','Glutes','Lower Back'],
  'Bulgarian Split Squat':['Quads','Glutes','Hamstrings'],
  'Lunge':['Quads','Glutes'],
  'Step Up':['Quads','Glutes'],
  'Hip Thrust':['Glutes','Hamstrings'],
  'Bench Press':['Chest','Triceps','Front Delts'],
  'Incline Bench Press':['Chest','Front Delts','Triceps'],
  'Decline Bench Press':['Chest','Triceps'],
  'Close-Grip Bench':['Triceps','Chest'],
  'Dumbbell Press':['Chest','Triceps','Front Delts'],
  'Incline Dumbbell Press':['Chest','Front Delts'],
  'Dumbbell Fly':['Chest'],
  'Cable Fly':['Chest'],
  'Push Up':['Chest','Triceps','Core'],
  'Deadlift':['Lower Back','Glutes','Hamstrings','Traps'],
  'Sumo Deadlift':['Glutes','Hamstrings','Lower Back'],
  'Trap Bar Deadlift':['Quads','Glutes','Hamstrings','Lower Back'],
  'Barbell Row':['Back','Biceps','Rear Delts'],
  'Pendlay Row':['Back','Biceps'],
  'Cable Row':['Back','Biceps'],
  'Chest-Supported Row':['Back','Biceps','Rear Delts'],
  'Pull Up':['Back','Biceps'],
  'Chin Up':['Back','Biceps'],
  'Lat Pulldown':['Back','Biceps'],
  'Single-Arm Row':['Back','Biceps'],
  'Kroc Row':['Back','Biceps'],
  'Overhead Press':['Front Delts','Triceps','Traps'],
  'Push Press':['Front Delts','Triceps'],
  'Dumbbell Shoulder Press':['Front Delts','Triceps'],
  'Arnold Press':['Front Delts','Side Delts','Triceps'],
  'Lateral Raise':['Side Delts'],
  'Front Raise':['Front Delts'],
  'Face Pull':['Rear Delts','Traps'],
  'Rear Delt Fly':['Rear Delts'],
  'Bicep Curl':['Biceps'],
  'Hammer Curl':['Biceps'],
  'Preacher Curl':['Biceps'],
  'EZ Bar Curl':['Biceps'],
  'Cable Curl':['Biceps'],
  'Tricep Pushdown':['Triceps'],
  'Skull Crusher':['Triceps'],
  'Overhead Tricep Extension':['Triceps'],
  'Dips':['Triceps','Chest'],
  'Diamond Push Up':['Triceps','Chest'],
  'Calf Raise':['Calves'],
  'Seated Calf Raise':['Calves'],
  'Shrug':['Traps'],
  'Power Clean':['Quads','Glutes','Traps','Lower Back'],
  'Plank':['Core'],
  'Ab Wheel':['Core'],
  'Crunch':['Core'],
};

const MUSCLE_GROUPS = [
  'Chest','Front Delts','Side Delts','Rear Delts','Traps',
  'Back','Lower Back','Biceps','Triceps',
  'Quads','Hamstrings','Glutes','Calves','Core',
];

// Maps our muscle group names → body-muscles library IDs
const MUSCLE_ID_MAP = {
  'Chest':       ['chest-upper-left','chest-upper-right','chest-lower-left','chest-lower-right'],
  'Front Delts': ['deltoid-anterior-left','deltoid-anterior-right'],
  'Side Delts':  ['deltoid-anterior-left','deltoid-anterior-right'],
  'Rear Delts':  ['deltoid-posterior-left','deltoid-posterior-right'],
  'Traps':       ['trapezius-upper-left','trapezius-upper-right'],
  'Back':        ['latissimus-dorsi-left','latissimus-dorsi-right'],
  'Lower Back':  ['latissimus-dorsi-left','latissimus-dorsi-right'],
  'Biceps':      ['biceps-left','biceps-right'],
  'Triceps':     ['triceps-left','triceps-right'],
  'Core':        ['rectus-abdominis','obliques-left','obliques-right'],
  'Glutes':      ['gluteus-maximus-left','gluteus-maximus-right'],
  'Quads':       ['quadriceps-left','quadriceps-right'],
  'Hamstrings':  ['hamstrings-left','hamstrings-right'],
  'Calves':      ['gastrocnemius-left','gastrocnemius-right'],
};

const COLORS = ['#6c63ff','#ec4899','#f59e0b','#22c55e','#06b6d4','#ef4444','#8b5cf6','#f97316'];

// ── Storage ───────────────────────────────────────────────────────────────────
const ls = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k,v) => localStorage.setItem(k, JSON.stringify(v)),
};
const getProfile   = ()  => ls.get('ironlog_profile');
const setProfile   = p   => ls.set('ironlog_profile', p);
const getLogs      = ()  => ls.get('ironlog_logs') || [];
const setLogs      = v   => ls.set('ironlog_logs', v);
const getTemplates = ()  => ls.get('ironlog_templates') || [];
const setTemplates = v   => ls.set('ironlog_templates', v);
const getGoals     = ()  => ls.get('ironlog_goals') || {};
const setGoals     = v   => ls.set('ironlog_goals', v);

function getTodayStr() { return new Date().toISOString().slice(0,10); }

function fmtDate(str) {
  const d = new Date(str + 'T12:00:00');
  return d.toLocaleDateString('en-US', { weekday:'short', month:'short', day:'numeric', year:'numeric' });
}

// ── Cardio helpers ────────────────────────────────────────────────────────────
function parseTimeToSecs(str) {
  if (!str) return null;
  const parts = str.split(':').map(Number);
  if (parts.some(isNaN)) return null;
  if (parts.length === 2) return parts[0]*60 + parts[1];
  if (parts.length === 3) return parts[0]*3600 + parts[1]*60 + parts[2];
  return null;
}

function fmtSecs(s) {
  const m = Math.floor(s/60);
  const sec = Math.round(s%60);
  return `${m}:${sec.toString().padStart(2,'0')}`;
}

function getFastestMilePace(logs) {
  let bestSecs = Infinity, bestDate = null;
  logs.forEach(l => {
    const c = l.workout?.cardio;
    if (!c || !c.distance || !c.time) return;
    const dist = parseFloat(c.distance);
    if (!dist) return;
    const secs = parseTimeToSecs(c.time);
    if (!secs) return;
    const pace = secs / dist;
    if (pace < bestSecs) { bestSecs = pace; bestDate = l.date; }
  });
  if (!isFinite(bestSecs)) return null;
  return { pace: fmtSecs(bestSecs), date: bestDate };
}

// ── Firebase ──────────────────────────────────────────────────────────────────
let db = null, fbUnsubscribe = null;

async function initFirebase() {
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, doc, setDoc, onSnapshot, collection } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = initializeApp(FIREBASE_CONFIG);
    db = getFirestore(app);
    window._fs = { doc, setDoc, onSnapshot, collection };
  } catch(e) { console.warn('Firebase:', e); }
}

async function syncLeaderboardEntry(familyCode, profile, score, workouts) {
  if (!db || !familyCode) return;
  const { doc, setDoc } = window._fs;
  try {
    await setDoc(doc(db,'leaderboards',familyCode,'members',profile.name),
      { name:profile.name, color:profile.color, score, workouts, updatedAt:Date.now() },
      { merge:true });
  } catch(e) { console.warn('Sync:', e); }
}

function subscribeLeaderboard(familyCode, cb) {
  if (!db || !familyCode) return;
  if (fbUnsubscribe) fbUnsubscribe();
  const { collection, onSnapshot } = window._fs;
  fbUnsubscribe = onSnapshot(collection(db,'leaderboards',familyCode,'members'), snap => {
    const members = [];
    snap.forEach(d => members.push(d.data()));
    cb(members);
  });
}

// ── Points ────────────────────────────────────────────────────────────────────
function calcPoints(logs, goals) {
  let score = 0;
  for (const log of logs) {
    const hasWorkout = log.workout?.lifts?.length || log.workout?.cardio;
    if (hasWorkout) score += 10;
    const g = goals || {};
    if (g.protein  && log.protein  >= g.protein)                                        score += 5;
    if (g.calories && log.calories >= g.calories*.9 && log.calories <= g.calories*1.1)  score += 5;
    if (g.sleep    && log.sleep    >= g.sleep)                                           score += 5;
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
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-'+id).classList.add('active');
  document.querySelectorAll('.nav-item[data-tab]').forEach(n =>
    n.classList.toggle('active', n.dataset.tab === id));
  if (id === 'progress')    renderProgress();
  if (id === 'muscle')      renderMuscleMap();
  if (id === 'goals')       renderGoals();
  if (id === 'leaderboard') renderLeaderboard();
  if (id === 'history')     renderHistory();
}

// ── Onboarding ────────────────────────────────────────────────────────────────
function renderOnboarding() {
  const box = document.getElementById('onboarding');
  let selectedColor = COLORS[0];
  box.innerHTML = `
    <div class="onboarding-box">
      <div class="logo-big">🏋️</div>
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
      s.classList.add('selected');
      selectedColor = s.dataset.color;
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

// ── Log Day ───────────────────────────────────────────────────────────────────
let liftCount = 0;
let currentLogDate = getTodayStr();

function buildExerciseSelect(val='') {
  return `<select class="ex-select">${EXERCISES.map(e=>`<option value="${e}"${e===val?' selected':''}>${e}</option>`).join('')}</select>`;
}

function addLift(exercise='', sets=[{}]) {
  const id = 'lift-'+(++liftCount);
  const div = document.createElement('div');
  div.className = 'lift-card';
  div.id = id;
  div.innerHTML = `
    <div class="lift-header">
      ${buildExerciseSelect(exercise)}
      <button class="btn btn-ghost btn-sm btn-icon remove-lift">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="set-rows"></div>
    <button class="btn btn-ghost btn-sm add-set" style="margin-top:4px;width:100%">+ Add Set</button>`;
  div.querySelector('.remove-lift').addEventListener('click', () => div.remove());
  div.querySelector('.add-set').addEventListener('click', () => addSet(div.querySelector('.set-rows')));
  const setRows = div.querySelector('.set-rows');
  sets.forEach(s => addSet(setRows, s));
  document.getElementById('lifts-container').appendChild(div);
}

function addSet(container, { weight='', reps='', notes='' } = {}) {
  const n = container.querySelectorAll('.set-group').length + 1;
  const grp = document.createElement('div');
  grp.className = 'set-group';
  grp.innerHTML = `
    <div class="set-row">
      <span class="set-num">S${n}</span>
      <input type="number" placeholder="lbs"  value="${weight}" class="set-weight" min="0" inputmode="decimal">
      <input type="number" placeholder="reps" value="${reps}"   class="set-reps"   min="0" inputmode="numeric">
      <button class="btn btn-ghost btn-icon btn-sm remove-set">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <input type="text" class="set-notes-input" placeholder="Notes (optional)" value="${notes}">`;
  grp.querySelector('.remove-set').addEventListener('click', () => {
    grp.remove();
    container.querySelectorAll('.set-num').forEach((el,i) => el.textContent = `S${i+1}`);
  });
  container.appendChild(grp);
}

function getLiftsData() {
  return Array.from(document.querySelectorAll('.lift-card')).map(card => ({
    exercise: card.querySelector('.ex-select').value,
    sets: Array.from(card.querySelectorAll('.set-group')).map(g => ({
      weight: g.querySelector('.set-weight').value,
      reps:   g.querySelector('.set-reps').value,
      notes:  g.querySelector('.set-notes-input').value,
    })),
  }));
}

function loadLogForDate(date) {
  currentLogDate = date;
  const existing = getLogs().find(l => l.date === date);
  const isCardio = existing?.workout?.cardio && !existing?.workout?.lifts?.length;

  // Update workout type toggle
  document.querySelectorAll('.wt-btn').forEach(b =>
    b.classList.toggle('active', isCardio ? b.dataset.wt==='cardio' : b.dataset.wt==='weights'));

  // Reset lift container
  const lc = document.getElementById('lifts-container');
  if (lc) { lc.innerHTML = ''; liftCount = 0; }

  // Stats
  const set = (id, val) => { const el=document.getElementById(id); if(el) el.value = val||''; };
  set('log-bw',       existing?.bodyweight);
  set('log-protein',  existing?.protein);
  set('log-calories', existing?.calories);
  set('log-sleep',    existing?.sleep);

  if (isCardio) {
    showCardioFields(existing.workout.cardio);
  } else {
    showWeightsFields();
    (existing?.workout?.lifts||[]).forEach(l => addLift(l.exercise, l.sets));
  }
}

function showWeightsFields() {
  const wrap = document.getElementById('workout-fields');
  if (!wrap) return;
  const templates = getTemplates();
  wrap.innerHTML = `
    <div class="section-header" style="margin-bottom:10px">
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
        ${templates.length ? `<select id="template-select" style="width:auto;min-width:140px">
          <option value="">Load template…</option>
          ${templates.map(t=>`<option value="${t.id}">${t.name}</option>`).join('')}
        </select>` : ''}
        <button class="btn btn-ghost btn-sm" id="add-lift-btn">+ Exercise</button>
      </div>
    </div>
    <div id="lifts-container"></div>`;
  document.getElementById('add-lift-btn').addEventListener('click', () => addLift());
  const tSel = document.getElementById('template-select');
  if (tSel) {
    tSel.addEventListener('change', () => {
      const tmpl = getTemplates().find(t=>t.id===tSel.value);
      if (!tmpl) return;
      document.getElementById('lifts-container').innerHTML = '';
      liftCount = 0;
      tmpl.exercises.forEach(ex => addLift(ex,[{}]));
      tSel.value='';
    });
  }
}

function showCardioFields(existing={}) {
  const wrap = document.getElementById('workout-fields');
  if (!wrap) return;
  wrap.innerHTML = `
    <div class="cardio-fields">
      <div>
        <label>Activity</label>
        <select id="cardio-activity">
          ${CARDIO_ACTIVITIES.map(a=>`<option value="${a}"${a===existing.activity?' selected':''}>${a}</option>`).join('')}
        </select>
      </div>
      <div></div>
      <div>
        <label>Distance (miles)</label>
        <input type="number" id="cardio-distance" placeholder="3.1" step="0.01" min="0" inputmode="decimal" value="${existing.distance||''}">
      </div>
      <div>
        <label>Time (MM:SS)</label>
        <input type="text" id="cardio-time" placeholder="28:30" value="${existing.time||''}">
      </div>
    </div>`;
}

function renderLogDay(jumpToDate) {
  currentLogDate = jumpToDate || getTodayStr();
  const tabEl = document.getElementById('tab-log');
  tabEl.innerHTML = `
    <div class="top-bar">
      <h1 style="margin:0">Log Day</h1>
      <button id="theme-toggle" class="theme-toggle">☀️</button>
    </div>

    <div class="card" style="margin-bottom:10px">
      <label>Date</label>
      <input type="date" id="log-date" value="${currentLogDate}" max="${getTodayStr()}">
    </div>

    <div class="card">
      <h2>Daily Stats</h2>
      <div class="stats-grid">
        <div><label>Bodyweight (lbs)</label><input id="log-bw"       type="number" placeholder="185"  inputmode="decimal"></div>
        <div><label>Protein (g)</label>      <input id="log-protein"  type="number" placeholder="160"  inputmode="numeric"></div>
        <div><label>Calories</label>          <input id="log-calories" type="number" placeholder="2400" inputmode="numeric"></div>
        <div><label>Sleep (hrs)</label>        <input id="log-sleep"    type="number" placeholder="7.5"  inputmode="decimal" step="0.5"></div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
        <h2 style="margin:0">Workout</h2>
        <div class="workout-type-toggle">
          <button class="wt-btn active" data-wt="weights">Weights</button>
          <button class="wt-btn"        data-wt="cardio">Cardio</button>
        </div>
      </div>
      <div id="workout-fields"></div>
    </div>

    <button class="btn btn-primary" id="save-log-btn" style="width:100%;margin-bottom:8px">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
      Save Day
    </button>`;

  // Wire theme toggle (re-added to log tab on mobile)
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    const cur = document.documentElement.dataset.theme || 'dark';
    themeBtn.textContent = cur === 'dark' ? '☀️' : '🌙';
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('ironlog_theme', next);
      themeBtn.textContent = next === 'dark' ? '☀️' : '🌙';
      document.getElementById('sidebar-theme-toggle')?.dispatchEvent(new Event('_sync'));
    });
  }

  // Date picker
  document.getElementById('log-date').addEventListener('change', e => loadLogForDate(e.target.value));

  // Workout type toggle
  document.querySelectorAll('.wt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.wt-btn').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      if (btn.dataset.wt === 'cardio') showCardioFields();
      else showWeightsFields();
    });
  });

  // Save
  document.getElementById('save-log-btn').addEventListener('click', saveDay);

  // Load initial data
  loadLogForDate(currentLogDate);
}

function saveDay() {
  const isCardio = document.querySelector('.wt-btn.active')?.dataset.wt === 'cardio';
  const logs = getLogs();
  const entry = {
    date:       currentLogDate,
    bodyweight: parseFloat(document.getElementById('log-bw')?.value)       || null,
    protein:    parseFloat(document.getElementById('log-protein')?.value)   || null,
    calories:   parseFloat(document.getElementById('log-calories')?.value)  || null,
    sleep:      parseFloat(document.getElementById('log-sleep')?.value)     || null,
    workout: isCardio ? {
      cardio: {
        activity: document.getElementById('cardio-activity')?.value,
        distance: document.getElementById('cardio-distance')?.value,
        time:     document.getElementById('cardio-time')?.value,
      },
    } : {
      lifts: getLiftsData(),
    },
  };
  const idx = logs.findIndex(l=>l.date===currentLogDate);
  if (idx>=0) logs[idx]=entry; else logs.push(entry);
  setLogs(logs);
  toast('Day saved! 💪');

  const profile = getProfile();
  if (profile) {
    const score = calcPoints(logs, getGoals());
    const workouts = logs.filter(l=>l.workout?.lifts?.length||l.workout?.cardio).length;
    syncLeaderboardEntry(profile.familyCode, profile, score, workouts);
  }
}

// ── Progress ──────────────────────────────────────────────────────────────────
let progressCharts = {};

function filterLogs(range) {
  const logs = getLogs();
  const now = new Date();
  if (range==='week') {
    const s = new Date(now); s.setDate(now.getDate()-6); s.setHours(0,0,0,0);
    return logs.filter(l=>new Date(l.date)>=s);
  }
  if (range==='month') {
    const s = new Date(now); s.setDate(now.getDate()-29); s.setHours(0,0,0,0);
    return logs.filter(l=>new Date(l.date)>=s);
  }
  return logs;
}

function destroyCharts() {
  Object.values(progressCharts).forEach(c => { try { c.destroy(); } catch {} });
  progressCharts = {};
}

const chartColors = {
  x: { grid:{color:'rgba(128,128,180,.08)'}, ticks:{color:'#9aa0c4',font:{family:'DM Sans',size:11}} },
  y: { grid:{color:'rgba(128,128,180,.08)'}, ticks:{color:'#9aa0c4',font:{family:'DM Sans',size:11}} },
};

function makeLineChart(id, labels, data, color) {
  const el = document.getElementById(id);
  if (!el) return;
  progressCharts[id] = new Chart(el, {
    type: 'line',
    data: {
      labels,
      datasets: [{
        data, borderColor: color, backgroundColor: color+'22',
        tension:.35, fill:true, pointRadius:3, spanGaps:true,
      }],
    },
    options: {
      responsive:true, maintainAspectRatio:false,
      plugins:{ legend:{display:false}, tooltip:{mode:'index',intersect:false} },
      scales: chartColors,
    },
  });
}

function renderProgress() {
  destroyCharts();
  const range = document.querySelector('.toggle-btn.active[data-range]')?.dataset.range || 'week';
  const logs = filterLogs(range).sort((a,b)=>a.date.localeCompare(b.date));
  const labels = logs.map(l=>l.date.slice(5));

  const fastest = getFastestMilePace(getLogs());

  const container = document.getElementById('progress-charts');
  container.innerHTML = `
    ${fastest ? `
    <div class="card">
      <div class="stat-highlight">
        <div class="stat-highlight-icon">🏃</div>
        <div>
          <div class="stat-highlight-val">${fastest.pace} /mi</div>
          <div class="stat-highlight-sub">Fastest recorded mile pace · ${fmtDate(fastest.date)}</div>
        </div>
      </div>
    </div>` : ''}
    <div class="card"><h2>Bodyweight (lbs)</h2><div class="chart-wrap"><canvas id="chart-bw"></canvas></div></div>
    <div class="card"><h2>Protein (g)</h2><div class="chart-wrap"><canvas id="chart-protein"></canvas></div></div>
    <div class="card"><h2>Calories</h2><div class="chart-wrap"><canvas id="chart-cal"></canvas></div></div>
    <div class="card"><h2>Sleep (hrs)</h2><div class="chart-wrap"><canvas id="chart-sleep"></canvas></div></div>
    <div id="lift-charts"></div>`;

  makeLineChart('chart-bw',     labels, logs.map(l=>l.bodyweight), '#6c63ff');
  makeLineChart('chart-protein', labels, logs.map(l=>l.protein),    '#22c55e');
  makeLineChart('chart-cal',    labels, logs.map(l=>l.calories),   '#f59e0b');
  makeLineChart('chart-sleep',  labels, logs.map(l=>l.sleep),      '#06b6d4');

  // Per-lift top weight
  const allEx = new Set();
  logs.forEach(l => l.workout?.lifts?.forEach(lf=>allEx.add(lf.exercise)));
  const liftCont = document.getElementById('lift-charts');
  allEx.forEach(ex => {
    const pts = logs
      .filter(l=>l.workout?.lifts?.some(lf=>lf.exercise===ex))
      .map(l => {
        const lf = l.workout.lifts.find(x=>x.exercise===ex);
        return { date:l.date.slice(5), top: Math.max(0,...lf.sets.map(s=>parseFloat(s.weight)||0)) };
      });
    if (!pts.length) return;
    const cid = 'chart-lift-'+ex.replace(/\W+/g,'-');
    liftCont.innerHTML += `<div class="card"><h2>${ex} — Top Weight</h2><div class="chart-wrap"><canvas id="${cid}"></canvas></div></div>`;
    setTimeout(() => makeLineChart(cid, pts.map(p=>p.date), pts.map(p=>p.top), '#8b85ff'), 0);
  });
}

// ── Goals ─────────────────────────────────────────────────────────────────────
function renderGoals() {
  const goals  = getGoals();
  const logs   = getLogs();
  const recent = logs.slice(-7);

  const avg = key => {
    const vals = recent.filter(l=>l[key]);
    return vals.length ? vals.reduce((s,l)=>s+l[key],0)/vals.length : 0;
  };

  const now=new Date(), weekAgo=new Date(); weekAgo.setDate(now.getDate()-6);
  const workoutsThisWeek = logs.filter(l=>{
    const d=new Date(l.date);
    return d>=weekAgo && (l.workout?.lifts?.length||l.workout?.cardio);
  }).length;

  const topWeights = {};
  logs.forEach(l=>l.workout?.lifts?.forEach(lf=>{
    const top = Math.max(0,...lf.sets.map(s=>parseFloat(s.weight)||0));
    if (!topWeights[lf.exercise]||top>topWeights[lf.exercise]) topWeights[lf.exercise]=top;
  }));

  const LIFT_GOALS = ['Squat','Bench Press','Deadlift','Overhead Press','Barbell Row'];

  const goalItem = (label,key,current,unit='',fmt=v=>Math.round(v)) => {
    const g   = goals[key];
    const pct = g ? Math.min(100,(current/g)*100) : 0;
    return `<div class="goal-item">
      <div class="goal-item-header">
        <span>${label}</span>
        <span>${isNaN(current)||!current?'—':fmt(current)}${unit} / ${g?g+unit:'—'}</span>
      </div>
      <div class="progress-bar-wrap"><div class="progress-bar-fill${pct>=100?' over':''}" style="width:${pct}%"></div></div>
    </div>`;
  };

  document.getElementById('goals-display').innerHTML = `
    <div class="card">
      <h2>Daily Targets (7-day avg)</h2>
      ${goalItem('Bodyweight','bodyweight',avg('bodyweight'),' lbs')}
      ${goalItem('Protein','protein',avg('protein'),' g')}
      ${goalItem('Calories','calories',avg('calories'),' cal')}
      ${goalItem('Sleep','sleep',avg('sleep'),' hrs',v=>v.toFixed(1))}
      ${goalItem('Workouts / week','workoutsPerWeek',workoutsThisWeek,'')}
    </div>
    <div class="card">
      <h2>Lift Goals (all-time top)</h2>
      ${LIFT_GOALS.map(ex=>goalItem(ex,ex.replace(/\s+/g,'_').toLowerCase(),topWeights[ex]||0,' lbs')).join('')}
    </div>`;

  const LIFT_KEYS = LIFT_GOALS.map(ex=>ex.replace(/\s+/g,'_').toLowerCase());
  document.getElementById('goals-form').innerHTML = `
    <div class="card">
      <h2>Set Goals</h2>
      <div class="goals-grid">
        <div><label>Bodyweight (lbs)</label><input type="number" id="g-bodyweight"     value="${goals.bodyweight||''}"></div>
        <div><label>Protein (g)</label>      <input type="number" id="g-protein"        value="${goals.protein||''}"></div>
        <div><label>Calories</label>          <input type="number" id="g-calories"       value="${goals.calories||''}"></div>
        <div><label>Sleep (hrs)</label>        <input type="number" id="g-sleep" step=".5" value="${goals.sleep||''}"></div>
        <div><label>Workouts/week</label>      <input type="number" id="g-workoutsPerWeek" value="${goals.workoutsPerWeek||''}"></div>
      </div>
      <hr class="divider">
      <h3>Lift Goals (lbs)</h3>
      <div class="goals-grid">
        ${LIFT_GOALS.map(ex=>{
          const k=ex.replace(/\s+/g,'_').toLowerCase();
          return `<div><label>${ex}</label><input type="number" id="g-${k}" value="${goals[k]||''}"></div>`;
        }).join('')}
      </div>
      <button class="btn btn-primary" id="save-goals-btn" style="margin-top:14px;width:100%">Save Goals</button>
    </div>`;

  document.getElementById('save-goals-btn').addEventListener('click', () => {
    const g = {};
    ['bodyweight','protein','calories','sleep','workoutsPerWeek',...LIFT_KEYS].forEach(k=>{
      const v=parseFloat(document.getElementById('g-'+k).value);
      if(!isNaN(v)) g[k]=v;
    });
    setGoals(g);
    toast('Goals saved!');
    renderGoals();
  });
}

// ── Muscle Map ────────────────────────────────────────────────────────────────
let frontViewer = null, backViewer = null;
let bodyMusclesReady = false;

function initBodyViewers() {
  const lib = window.BodyMuscles;
  if (!lib || bodyMusclesReady) return;

  const frontEl = document.getElementById('muscle-front-view');
  const backEl  = document.getElementById('muscle-back-view');
  if (!frontEl || !backEl) return;

  try {
    const Ctor     = lib.default || lib;
    const ViewSide = lib.ViewSide || Ctor.ViewSide;
    frontViewer = new Ctor({ target: frontEl, props:{ side: ViewSide.FRONT } });
    backViewer  = new Ctor({ target: backEl,  props:{ side: ViewSide.BACK  } });
    bodyMusclesReady = true;
  } catch(e) {
    console.warn('body-muscles init:', e);
    // Fallback: library might use element/side instead of target/props
    try {
      const Ctor     = lib.default || lib;
      const ViewSide = lib.ViewSide || Ctor.ViewSide;
      frontViewer = new Ctor({ element: frontEl, side: ViewSide.FRONT });
      backViewer  = new Ctor({ element: backEl,  side: ViewSide.BACK  });
      bodyMusclesReady = true;
    } catch(e2) { console.warn('body-muscles fallback init:', e2); }
  }
}

function updateBodyMuscles(muscleIntensities) {
  if (!bodyMusclesReady) return;
  const entries = Object.entries(muscleIntensities).map(([id,intensity]) => ({id, intensity}));
  [frontViewer, backViewer].forEach(v => {
    if (!v) return;
    const fn = v.update || v.setMuscles || v.highlight || v.$set;
    if (typeof fn === 'function') {
      try { fn.call(v, entries); } catch {}
    }
  });
}

function getMuscleIntensities() {
  const logs    = getLogs();
  const now     = new Date();
  const weekAgo = new Date(); weekAgo.setDate(now.getDate()-6); weekAgo.setHours(0,0,0,0);
  const weekLogs = logs.filter(l=>new Date(l.date)>=weekAgo);

  // Count sessions per muscle group
  const muscleSessions = {};
  MUSCLE_GROUPS.forEach(m => muscleSessions[m] = 0);
  weekLogs.forEach(l => {
    l.workout?.lifts?.forEach(lf => {
      (MUSCLE_MAP[lf.exercise]||[]).forEach(m => {
        if (muscleSessions[m]!==undefined) muscleSessions[m]++;
      });
    });
  });

  // Convert to body-muscles IDs with intensity
  const intensities = {};
  MUSCLE_GROUPS.forEach(m => {
    const count = muscleSessions[m];
    const intensity = count===0 ? 0 : count===1 ? 4 : 8;
    (MUSCLE_ID_MAP[m]||[]).forEach(id => {
      // Take the max if a muscle ID maps from multiple groups
      if (!intensities[id] || intensity > intensities[id]) intensities[id] = intensity;
    });
  });
  return { muscleSessions, intensities };
}

function renderMuscleMap() {
  initBodyViewers();

  const { muscleSessions, intensities } = getMuscleIntensities();

  // Grid chips
  const grid = document.getElementById('muscle-grid');
  if (grid) {
    grid.innerHTML = MUSCLE_GROUPS.map(m => {
      const n = muscleSessions[m];
      const cls = n>=2?'hit2':n===1?'hit1':'hit0';
      return `<div class="muscle-chip ${cls}">${m}<br><small style="opacity:.65">${n}×</small></div>`;
    }).join('');
  }

  // Body viewers
  if (bodyMusclesReady) {
    updateBodyMuscles(intensities);
  }
}

// ── Templates ─────────────────────────────────────────────────────────────────
function renderTemplates() {
  const templates = getTemplates();
  const container = document.getElementById('templates-list');
  if (!templates.length) {
    container.innerHTML = `<div class="empty-state">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      <p>No templates yet.</p>
    </div>`;
    return;
  }
  container.innerHTML = templates.map(t => `
    <div class="template-card">
      <div class="template-card-header">
        <strong>${t.name}</strong>
        <div style="display:flex;gap:6px">
          <button class="btn btn-ghost btn-sm" onclick="editTemplate('${t.id}')">Edit</button>
          <button class="btn btn-danger btn-sm" onclick="deleteTemplate('${t.id}')">Delete</button>
        </div>
      </div>
      <div class="template-exercises">${t.exercises.map(e=>`<span class="ex-chip">${e}</span>`).join('')}</div>
    </div>`).join('');
}

window.deleteTemplate = id => {
  setTemplates(getTemplates().filter(t=>t.id!==id));
  renderTemplates();
  toast('Template deleted');
};
window.editTemplate = id => {
  const t = getTemplates().find(t=>t.id===id);
  if (t) openTemplateModal(t);
};

function openTemplateModal(existing=null) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const exList = existing?.exercises||[];
  overlay.innerHTML = `
    <div class="modal">
      <h2>${existing?'Edit':'New'} Template</h2>
      <label>Name</label>
      <input id="tmpl-name" type="text" placeholder="e.g. Push Day A" value="${existing?.name||''}" style="margin-bottom:12px">
      <label>Exercises</label>
      <div id="tmpl-exercises" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
        ${exList.map(e=>buildTemplateExRow(e)).join('')}
      </div>
      <button class="btn btn-ghost btn-sm" id="tmpl-add-ex" style="width:100%;margin-bottom:16px">+ Add Exercise</button>
      <div style="display:flex;gap:8px">
        <button class="btn btn-primary" id="tmpl-save" style="flex:1">Save</button>
        <button class="btn btn-ghost"   id="tmpl-cancel">Cancel</button>
      </div>
    </div>`;
  overlay.querySelector('#tmpl-add-ex').addEventListener('click', () => {
    const div=document.createElement('div'); div.innerHTML=buildTemplateExRow('');
    overlay.querySelector('#tmpl-exercises').appendChild(div.firstElementChild);
  });
  overlay.querySelector('#tmpl-cancel').addEventListener('click', ()=>overlay.remove());
  overlay.querySelector('#tmpl-save').addEventListener('click', () => {
    const name = overlay.querySelector('#tmpl-name').value.trim();
    if (!name) return;
    const exercises = [...overlay.querySelectorAll('.tmpl-ex-select')].map(s=>s.value).filter(Boolean);
    const templates = getTemplates();
    if (existing) {
      const idx=templates.findIndex(t=>t.id===existing.id);
      if (idx>=0) templates[idx]={...existing,name,exercises};
    } else {
      templates.push({id:Date.now().toString(),name,exercises});
    }
    setTemplates(templates);
    overlay.remove();
    renderTemplates();
    renderLogDay();
    toast('Template saved!');
  });
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e=>{ if(e.target===overlay) overlay.remove(); });
}

function buildTemplateExRow(val='') {
  return `<div style="display:flex;gap:6px;align-items:center">
    <select class="tmpl-ex-select" style="flex:1">
      ${EXERCISES.map(e=>`<option value="${e}"${e===val?' selected':''}>${e}</option>`).join('')}
    </select>
    <button class="btn btn-ghost btn-sm btn-icon" onclick="this.closest('div').remove()">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>`;
}

// ── History ───────────────────────────────────────────────────────────────────
function renderHistory() {
  const logs = getLogs().slice().sort((a,b)=>b.date.localeCompare(a.date));
  const container = document.getElementById('history-list');
  if (!logs.length) {
    container.innerHTML = `<div class="empty-state">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
      <p>No entries yet. Start logging!</p>
    </div>`;
    return;
  }
  container.innerHTML = logs.map(log => {
    const hasLifts   = log.workout?.lifts?.length;
    const hasCardio  = log.workout?.cardio;
    const workoutStr = hasCardio
      ? `🏃 ${log.workout.cardio.activity||'Cardio'}${log.workout.cardio.distance?' · '+log.workout.cardio.distance+' mi':''}`
      : hasLifts
        ? `🏋️ ${hasLifts} exercise${hasLifts>1?'s':''}`
        : '';
    return `
      <div class="history-card">
        <div class="history-header">
          <div>
            <div class="history-date">${fmtDate(log.date)}</div>
            ${workoutStr ? `<div class="history-workout">${workoutStr}</div>` : ''}
          </div>
          <button class="btn btn-ghost btn-sm" onclick="editHistoryEntry('${log.date}')">Edit</button>
        </div>
        <div class="history-chips">
          ${log.bodyweight ? `<span class="stat-chip">⚖️ ${log.bodyweight} lbs</span>` : ''}
          ${log.protein    ? `<span class="stat-chip">🥩 ${log.protein}g</span>` : ''}
          ${log.calories   ? `<span class="stat-chip">🔥 ${log.calories} cal</span>` : ''}
          ${log.sleep      ? `<span class="stat-chip">😴 ${log.sleep}h</span>` : ''}
        </div>
      </div>`;
  }).join('');
}

window.editHistoryEntry = function(date) {
  showTab('log');
  // Small delay so tab-content is active before we try to set values
  setTimeout(() => {
    const datePicker = document.getElementById('log-date');
    if (datePicker) { datePicker.value = date; loadLogForDate(date); }
  }, 30);
};

// ── Leaderboard ───────────────────────────────────────────────────────────────
let leaderboardData = [];

function renderLeaderboard() {
  const profile = getProfile();
  document.getElementById('lb-family-code').value = profile?.familyCode || '';
  const logs  = getLogs();
  const goals = getGoals();
  const myScore    = calcPoints(logs, goals);
  const myWorkouts = logs.filter(l=>l.workout?.lifts?.length||l.workout?.cardio).length;
  const localEntry = { name:profile?.name||'You', color:profile?.color||'#6c63ff', score:myScore, workouts:myWorkouts };
  const merged = [...leaderboardData.filter(m=>m.name!==profile?.name), localEntry];
  renderLbRows(merged);
}

function renderLbRows(members) {
  const sorted = [...members].sort((a,b)=>b.score-a.score);
  const ranks  = ['🥇','🥈','🥉'];
  document.getElementById('lb-list').innerHTML = sorted.map((m,i) => `
    <div class="lb-row">
      <div class="lb-rank">${ranks[i]||i+1}</div>
      <div class="lb-avatar" style="background:${m.color}">${m.name[0].toUpperCase()}</div>
      <div class="lb-info">
        <div class="lb-name">${m.name}</div>
        <div class="lb-sub">${m.workouts} workout${m.workouts===1?'':'s'}</div>
      </div>
      <div class="lb-score">${m.score} pts</div>
    </div>`).join('');
}

// ── Init ──────────────────────────────────────────────────────────────────────
function initApp() {
  const profile = getProfile();

  renderLogDay();
  renderTemplates();

  // Profile in sidebar
  const avatar = document.getElementById('profile-avatar');
  const nameEl = document.getElementById('profile-name');
  if (avatar) { avatar.style.background = profile.color; avatar.textContent = profile.name[0].toUpperCase(); }
  if (nameEl)   nameEl.textContent = profile.name;

  // Sidebar theme toggle
  const sidebarTheme = document.getElementById('sidebar-theme-toggle');
  if (sidebarTheme) {
    const applyTheme = () => {
      const cur = document.documentElement.dataset.theme || 'dark';
      sidebarTheme.textContent = cur==='dark' ? '☀️ Light' : '🌙 Dark';
    };
    applyTheme();
    sidebarTheme.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme==='dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('ironlog_theme', next);
      applyTheme();
    });
    sidebarTheme.addEventListener('_sync', applyTheme);
  }

  // Family code save
  document.getElementById('lb-save-code').addEventListener('click', () => {
    const code = document.getElementById('lb-family-code').value.trim().toUpperCase();
    const p = getProfile(); p.familyCode = code; setProfile(p);
    if (code && db) {
      subscribeLeaderboard(code, members => { leaderboardData=members; renderLeaderboard(); });
      const logs=getLogs();
      syncLeaderboardEntry(code,p,calcPoints(logs,getGoals()),logs.filter(l=>l.workout?.lifts?.length||l.workout?.cardio).length);
    }
    renderLeaderboard();
    toast('Family code saved!');
  });

  if (profile.familyCode && db) {
    subscribeLeaderboard(profile.familyCode, members => { leaderboardData=members; renderLeaderboard(); });
  }

  // body-muscles: try init after a short delay (library may still be parsing)
  setTimeout(initBodyViewers, 400);

  showTab('log');
}

function bootstrap() {
  // Theme
  const theme = localStorage.getItem('ironlog_theme') || 'dark';
  document.documentElement.dataset.theme = theme;

  // Nav items
  document.querySelectorAll('.nav-item[data-tab]').forEach(n =>
    n.addEventListener('click', () => showTab(n.dataset.tab)));

  // Progress range toggles
  document.querySelectorAll('.toggle-btn[data-range]').forEach(btn =>
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn[data-range]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderProgress();
    }));

  const profile = getProfile();
  if (!profile) {
    renderOnboarding();
  } else {
    document.getElementById('onboarding').style.display = 'none';
    initFirebase().then(() => initApp());
  }

  // PWA install prompt
  let deferredPrompt = null;
  window.addEventListener('beforeinstallprompt', e => {
    e.preventDefault(); deferredPrompt = e;
    document.getElementById('install-btn').style.display = 'flex';
  });
  document.getElementById('install-btn')?.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome==='accepted') document.getElementById('install-btn').style.display='none';
    deferredPrompt = null;
  });

  if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(()=>{});
}

document.addEventListener('DOMContentLoaded', bootstrap);
