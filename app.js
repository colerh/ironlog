// ── Firebase config ──────────────────────────────────────────────────────────
// Replace with your own Firebase project credentials for family leaderboard sync.
// Get a free project at https://console.firebase.google.com/
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCgsme2Umk-NSdTiBJplNeLNH1QD17j7do",
  authDomain: "ironlog-family.firebaseapp.com",
  projectId: "ironlog-family",
  storageBucket: "ironlog-family.firebasestorage.app",
  messagingSenderId: "877808551901",
  appId: "1:877808551901:web:b74e623dc05c32e94bd834",
};

// ── Data ────────────────────────────────────────────────────────────────────
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

const COLORS = ['#6c63ff','#ec4899','#f59e0b','#22c55e','#06b6d4','#ef4444','#8b5cf6','#f97316'];

// ── Storage helpers ──────────────────────────────────────────────────────────
const ls = {
  get: k => { try { return JSON.parse(localStorage.getItem(k)); } catch { return null; } },
  set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};

function getProfile() { return ls.get('ironlog_profile'); }
function setProfile(p) { ls.set('ironlog_profile', p); }
function getLogs() { return ls.get('ironlog_logs') || []; }
function setLogs(v) { ls.set('ironlog_logs', v); }
function getTemplates() { return ls.get('ironlog_templates') || []; }
function setTemplates(v) { ls.set('ironlog_templates', v); }
function getGoals() { return ls.get('ironlog_goals') || {}; }
function setGoals(v) { ls.set('ironlog_goals', v); }

function getTodayStr() { return new Date().toISOString().slice(0, 10); }

// ── Firebase ──────────────────────────────────────────────────────────────────
let db = null;
let fbUnsubscribe = null;

async function initFirebase() {
  if (!window.firebase || FIREBASE_CONFIG.apiKey === 'YOUR_API_KEY') return;
  try {
    const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js');
    const { getFirestore, doc, setDoc, onSnapshot, collection, query, where } =
      await import('https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js');
    const app = initializeApp(FIREBASE_CONFIG);
    db = getFirestore(app);
    window._fsHelpers = { doc, setDoc, onSnapshot, collection, query, where };
  } catch (e) { console.warn('Firebase init failed', e); }
}

async function syncLeaderboardEntry(familyCode, profile, score, workouts) {
  if (!db || !familyCode) return;
  const { doc, setDoc } = window._fsHelpers;
  try {
    await setDoc(doc(db, 'leaderboards', familyCode, 'members', profile.name), {
      name: profile.name,
      color: profile.color,
      score,
      workouts,
      updatedAt: Date.now(),
    }, { merge: true });
  } catch (e) { console.warn('Sync failed', e); }
}

function subscribeLeaderboard(familyCode, cb) {
  if (!db || !familyCode) return;
  if (fbUnsubscribe) fbUnsubscribe();
  const { collection, onSnapshot } = window._fsHelpers;
  const col = collection(db, 'leaderboards', familyCode, 'members');
  fbUnsubscribe = onSnapshot(col, snap => {
    const members = [];
    snap.forEach(d => members.push(d.data()));
    cb(members);
  });
}

// ── Points calculator ────────────────────────────────────────────────────────
function calcPoints(logs, goals) {
  let score = 0;
  for (const log of logs) {
    if (log.workout && log.workout.lifts && log.workout.lifts.length) score += 10;
    const g = goals || {};
    if (g.protein && log.protein >= g.protein) score += 5;
    if (g.calories && log.calories >= g.calories * 0.9 && log.calories <= g.calories * 1.1) score += 5;
    if (g.sleep && log.sleep >= g.sleep) score += 5;
  }
  return score;
}

// ── UI helpers ───────────────────────────────────────────────────────────────
function toast(msg) {
  let el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2200);
}

function showTab(id) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    n.classList.toggle('active', n.dataset.tab === id);
  });
  if (id === 'progress') renderProgress();
  if (id === 'muscle') renderMuscleMap();
  if (id === 'goals') renderGoals();
  if (id === 'leaderboard') renderLeaderboard();
}

// ── Onboarding ────────────────────────────────────────────────────────────────
function renderOnboarding() {
  const box = document.getElementById('onboarding');
  let selectedColor = COLORS[0];

  const swatches = COLORS.map((c, i) =>
    `<div class="color-swatch${i===0?' selected':''}" data-color="${c}" style="background:${c}"></div>`
  ).join('');

  box.innerHTML = `
    <div class="onboarding-box">
      <div class="logo-big">🏋️</div>
      <h1>Welcome to IronLog</h1>
      <p>Your personal strength & health tracker. Let's set you up.</p>
      <label>Your name</label>
      <input id="ob-name" type="text" placeholder="e.g. Alex" style="margin-bottom:20px">
      <label>Pick your color</label>
      <div class="color-swatches">${swatches}</div>
      <button class="btn btn-primary" id="ob-start" style="width:100%">Get Started</button>
    </div>`;

  box.querySelectorAll('.color-swatch').forEach(s => {
    s.addEventListener('click', () => {
      box.querySelectorAll('.color-swatch').forEach(x => x.classList.remove('selected'));
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

function buildExerciseSelect(val = '') {
  return `<select class="ex-select">${EXERCISES.map(e =>
    `<option value="${e}"${e===val?' selected':''}>${e}</option>`
  ).join('')}</select>`;
}

function addLift(exercise = '', sets = [{ weight: '', reps: '', notes: '' }]) {
  const id = 'lift-' + (++liftCount);
  const div = document.createElement('div');
  div.className = 'lift-card';
  div.id = id;
  div.innerHTML = `
    <div class="lift-header">
      ${buildExerciseSelect(exercise)}
      <button class="btn btn-ghost btn-sm btn-icon remove-lift" title="Remove lift">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="set-rows"></div>
    <button class="btn btn-ghost btn-sm add-set" style="margin-top:6px">+ Add Set</button>`;

  div.querySelector('.remove-lift').addEventListener('click', () => div.remove());
  div.querySelector('.add-set').addEventListener('click', () => addSet(div.querySelector('.set-rows')));

  const setRows = div.querySelector('.set-rows');
  sets.forEach(s => addSet(setRows, s));

  document.getElementById('lifts-container').appendChild(div);
}

function addSet(container, { weight = '', reps = '', notes = '' } = {}) {
  const n = container.children.length + 1;
  const row = document.createElement('div');
  row.className = 'set-row';
  row.innerHTML = `
    <span class="set-num">Set ${n}</span>
    <input type="number" placeholder="lbs" value="${weight}" class="set-weight" min="0">
    <input type="number" placeholder="reps" value="${reps}" class="set-reps" min="0">
    <input type="text" placeholder="note" value="${notes}" class="set-notes" style="min-width:60px">
    <button class="btn btn-ghost btn-sm btn-icon remove-set" title="Remove">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>`;
  row.querySelector('.remove-set').addEventListener('click', () => {
    row.remove();
    container.querySelectorAll('.set-num').forEach((el, i) => el.textContent = `Set ${i+1}`);
  });
  container.appendChild(row);
}

function getLiftsData() {
  return Array.from(document.querySelectorAll('.lift-card')).map(card => ({
    exercise: card.querySelector('.ex-select').value,
    sets: Array.from(card.querySelectorAll('.set-row')).map(row => ({
      weight: row.querySelector('.set-weight').value,
      reps: row.querySelector('.set-reps').value,
      notes: row.querySelector('.set-notes').value,
    }))
  }));
}

function renderLogDay() {
  const logs = getLogs();
  const today = getTodayStr();
  const existing = logs.find(l => l.date === today);
  const templates = getTemplates();

  const tabEl = document.getElementById('tab-log');
  tabEl.innerHTML = `
    <div class="top-bar">
      <h1 style="margin:0">Log Day <span style="font-size:14px;font-weight:400;color:var(--text2)">${today}</span></h1>
    </div>

    <div class="card">
      <h2>Daily Stats</h2>
      <div class="row">
        <div><label>Bodyweight (lbs)</label><input id="log-bw" type="number" placeholder="185" value="${existing?.bodyweight||''}"></div>
        <div><label>Protein (g)</label><input id="log-protein" type="number" placeholder="160" value="${existing?.protein||''}"></div>
        <div><label>Calories</label><input id="log-calories" type="number" placeholder="2400" value="${existing?.calories||''}"></div>
        <div><label>Sleep (hrs)</label><input id="log-sleep" type="number" placeholder="7.5" step="0.5" value="${existing?.sleep||''}"></div>
      </div>
    </div>

    <div class="card">
      <div class="section-header">
        <h2 style="margin:0">Workout</h2>
        <div style="display:flex;gap:8px">
          ${templates.length ? `<select id="template-select" style="width:auto">
            <option value="">Load template…</option>
            ${templates.map(t => `<option value="${t.id}">${t.name}</option>`).join('')}
          </select>` : ''}
          <button class="btn btn-ghost btn-sm" id="add-lift-btn">+ Exercise</button>
        </div>
      </div>
      <div id="lifts-container"></div>
    </div>

    <button class="btn btn-primary" id="save-log-btn" style="width:100%">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>
      Save Day
    </button>`;

  liftCount = 0;
  if (existing?.workout?.lifts?.length) {
    existing.workout.lifts.forEach(l => addLift(l.exercise, l.sets));
  }

  document.getElementById('add-lift-btn').addEventListener('click', () => addLift());

  const tSel = document.getElementById('template-select');
  if (tSel) {
    tSel.addEventListener('change', () => {
      const tid = tSel.value;
      if (!tid) return;
      const tmpl = getTemplates().find(t => t.id === tid);
      if (!tmpl) return;
      document.getElementById('lifts-container').innerHTML = '';
      liftCount = 0;
      tmpl.exercises.forEach(ex => addLift(ex, [{}]));
      tSel.value = '';
    });
  }

  document.getElementById('save-log-btn').addEventListener('click', () => {
    const logs = getLogs();
    const entry = {
      date: today,
      bodyweight: parseFloat(document.getElementById('log-bw').value) || null,
      protein: parseFloat(document.getElementById('log-protein').value) || null,
      calories: parseFloat(document.getElementById('log-calories').value) || null,
      sleep: parseFloat(document.getElementById('log-sleep').value) || null,
      workout: { lifts: getLiftsData() },
    };
    const idx = logs.findIndex(l => l.date === today);
    if (idx >= 0) logs[idx] = entry; else logs.push(entry);
    setLogs(logs);
    toast('Day saved! 💪');

    const profile = getProfile();
    if (profile) {
      const score = calcPoints(logs, getGoals());
      const workouts = logs.filter(l => l.workout?.lifts?.length).length;
      syncLeaderboardEntry(profile.familyCode, profile, score, workouts);
    }
  });
}

// ── Progress ──────────────────────────────────────────────────────────────────
let progressCharts = {};

function filterLogs(range) {
  const logs = getLogs();
  const now = new Date();
  if (range === 'week') {
    const start = new Date(now); start.setDate(now.getDate() - 6); start.setHours(0,0,0,0);
    return logs.filter(l => new Date(l.date) >= start);
  }
  if (range === 'month') {
    const start = new Date(now); start.setDate(now.getDate() - 29); start.setHours(0,0,0,0);
    return logs.filter(l => new Date(l.date) >= start);
  }
  return logs;
}

function destroyCharts() {
  Object.values(progressCharts).forEach(c => { try { c.destroy(); } catch {} });
  progressCharts = {};
}

function renderProgress() {
  destroyCharts();
  const range = document.querySelector('.toggle-btn.active[data-range]')?.dataset.range || 'week';
  const logs = filterLogs(range).sort((a,b) => a.date.localeCompare(b.date));

  const container = document.getElementById('progress-charts');
  const metrics = [
    { key: 'bodyweight', label: 'Bodyweight (lbs)', color: '#6c63ff' },
    { key: 'protein', label: 'Protein (g)', color: '#22c55e' },
    { key: 'calories', label: 'Calories', color: '#f59e0b' },
    { key: 'sleep', label: 'Sleep (hrs)', color: '#06b6d4' },
  ];

  container.innerHTML = metrics.map(m => `
    <div class="card">
      <h2>${m.label}</h2>
      <div class="chart-wrap"><canvas id="chart-${m.key}"></canvas></div>
    </div>`).join('') + `<div id="lift-charts"></div>`;

  const labels = logs.map(l => l.date.slice(5));
  const chartDefaults = {
    type: 'line',
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { mode: 'index', intersect: false } },
      scales: {
        x: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#9aa0c4', font: { family: 'DM Sans' } } },
        y: { grid: { color: 'rgba(255,255,255,.05)' }, ticks: { color: '#9aa0c4', font: { family: 'DM Sans' } } },
      },
    }
  };

  metrics.forEach(m => {
    const data = logs.map(l => l[m.key]);
    progressCharts[m.key] = new Chart(document.getElementById('chart-' + m.key), {
      ...chartDefaults,
      data: {
        labels,
        datasets: [{
          data,
          borderColor: m.color,
          backgroundColor: m.color + '22',
          tension: .35,
          fill: true,
          pointRadius: 3,
          spanGaps: true,
        }]
      },
      options: { ...chartDefaults.options }
    });
  });

  // Per-lift top weight charts
  const allExercises = new Set();
  logs.forEach(l => l.workout?.lifts?.forEach(lf => allExercises.add(lf.exercise)));

  const liftContainer = document.getElementById('lift-charts');
  allExercises.forEach(ex => {
    const points = logs
      .filter(l => l.workout?.lifts?.some(lf => lf.exercise === ex))
      .map(l => {
        const lift = l.workout.lifts.find(lf => lf.exercise === ex);
        const top = Math.max(0, ...lift.sets.map(s => parseFloat(s.weight) || 0));
        return { date: l.date.slice(5), top };
      });
    if (points.length < 1) return;

    const canvasId = 'chart-lift-' + ex.replace(/\s+/g, '-');
    liftContainer.innerHTML += `
      <div class="card">
        <h2>${ex} — Top Weight (lbs)</h2>
        <div class="chart-wrap"><canvas id="${canvasId}"></canvas></div>
      </div>`;

    setTimeout(() => {
      progressCharts[canvasId] = new Chart(document.getElementById(canvasId), {
        ...chartDefaults,
        data: {
          labels: points.map(p => p.date),
          datasets: [{
            data: points.map(p => p.top),
            borderColor: '#8b85ff',
            backgroundColor: '#8b85ff22',
            tension: .35,
            fill: true,
            pointRadius: 3,
          }]
        },
        options: { ...chartDefaults.options }
      });
    }, 0);
  });
}

// ── Goals ────────────────────────────────────────────────────────────────────
function renderGoals() {
  const goals = getGoals();
  const logs = getLogs();
  const profile = getProfile();

  // Compute current values
  const recent = logs.slice(-7);
  const avgBw = recent.filter(l=>l.bodyweight).reduce((s,l)=>s+l.bodyweight,0) /
    (recent.filter(l=>l.bodyweight).length || 1);
  const avgProtein = recent.filter(l=>l.protein).reduce((s,l)=>s+l.protein,0) /
    (recent.filter(l=>l.protein).length || 1);
  const avgCalories = recent.filter(l=>l.calories).reduce((s,l)=>s+l.calories,0) /
    (recent.filter(l=>l.calories).length || 1);
  const avgSleep = recent.filter(l=>l.sleep).reduce((s,l)=>s+l.sleep,0) /
    (recent.filter(l=>l.sleep).length || 1);

  const now = new Date(); const weekAgo = new Date(); weekAgo.setDate(now.getDate()-6);
  const workoutsThisWeek = logs.filter(l => {
    const d = new Date(l.date);
    return d >= weekAgo && l.workout?.lifts?.length;
  }).length;

  const topWeights = {};
  logs.forEach(l => l.workout?.lifts?.forEach(lf => {
    const top = Math.max(0, ...lf.sets.map(s=>parseFloat(s.weight)||0));
    if (!topWeights[lf.exercise] || top > topWeights[lf.exercise]) topWeights[lf.exercise] = top;
  }));

  const LIFT_GOALS = ['Squat','Bench Press','Deadlift','Overhead Press','Barbell Row'];

  function goalItem(label, key, current, unit='', fmt=v=>Math.round(v)) {
    const g = goals[key];
    const pct = g ? Math.min(100, (current/g)*100) : 0;
    const over = pct >= 100;
    return `
      <div class="goal-item">
        <div class="goal-item-header">
          <span>${label}</span>
          <span>${isNaN(current)||!current ? '—' : fmt(current)}${unit} / ${g ? g+unit : '—'}</span>
        </div>
        <div class="progress-bar-wrap">
          <div class="progress-bar-fill${over?' over':''}" style="width:${pct}%"></div>
        </div>
      </div>`;
  }

  document.getElementById('goals-display').innerHTML = `
    <div class="card">
      <h2>Daily Targets (7-day avg)</h2>
      ${goalItem('Bodyweight','bodyweight',avgBw,' lbs')}
      ${goalItem('Protein','protein',avgProtein,' g')}
      ${goalItem('Calories','calories',avgCalories,' cal')}
      ${goalItem('Sleep','sleep',avgSleep,' hrs',v=>v.toFixed(1))}
      ${goalItem('Workouts / week','workoutsPerWeek',workoutsThisWeek,' days')}
    </div>
    <div class="card">
      <h2>Lift Goals (all-time top)</h2>
      ${LIFT_GOALS.map(ex => goalItem(ex, ex.replace(/\s+/g,'_').toLowerCase(), topWeights[ex]||0,' lbs')).join('')}
    </div>`;

  document.getElementById('goals-form').innerHTML = `
    <div class="card">
      <h2>Set Goals</h2>
      <div class="row">
        <div><label>Bodyweight (lbs)</label><input type="number" id="g-bodyweight" value="${goals.bodyweight||''}"></div>
        <div><label>Protein (g)</label><input type="number" id="g-protein" value="${goals.protein||''}"></div>
        <div><label>Calories</label><input type="number" id="g-calories" value="${goals.calories||''}"></div>
        <div><label>Sleep (hrs)</label><input type="number" id="g-sleep" step="0.5" value="${goals.sleep||''}"></div>
        <div><label>Workouts/week</label><input type="number" id="g-workoutsPerWeek" value="${goals.workoutsPerWeek||''}"></div>
      </div>
      <hr class="divider">
      <h3>Lift Goals (lbs)</h3>
      <div class="row">
        ${LIFT_GOALS.map(ex => {
          const key = ex.replace(/\s+/g,'_').toLowerCase();
          return `<div><label>${ex}</label><input type="number" id="g-${key}" value="${goals[key]||''}"></div>`;
        }).join('')}
      </div>
      <button class="btn btn-primary" id="save-goals-btn" style="margin-top:16px">Save Goals</button>
    </div>`;

  document.getElementById('save-goals-btn').addEventListener('click', () => {
    const LIFT_KEYS = LIFT_GOALS.map(ex => ex.replace(/\s+/g,'_').toLowerCase());
    const g = {};
    ['bodyweight','protein','calories','sleep','workoutsPerWeek',...LIFT_KEYS].forEach(k => {
      const v = parseFloat(document.getElementById('g-'+k).value);
      if (!isNaN(v)) g[k] = v;
    });
    setGoals(g);
    toast('Goals saved!');
    renderGoals();
  });
}

// ── Muscle Map ────────────────────────────────────────────────────────────────
function renderMuscleMap() {
  const logs = getLogs();
  const now = new Date();
  const weekAgo = new Date(); weekAgo.setDate(now.getDate()-6); weekAgo.setHours(0,0,0,0);

  const weekLogs = logs.filter(l => new Date(l.date) >= weekAgo);
  const muscleCounts = {};
  MUSCLE_GROUPS.forEach(m => muscleCounts[m] = 0);

  weekLogs.forEach(l => {
    l.workout?.lifts?.forEach(lf => {
      (MUSCLE_MAP[lf.exercise]||[]).forEach(m => {
        if (muscleCounts[m] !== undefined) muscleCounts[m]++;
      });
    });
  });

  const grid = document.getElementById('muscle-grid');
  grid.innerHTML = MUSCLE_GROUPS.map(m => {
    const n = muscleCounts[m];
    const cls = n >= 2 ? 'hit2' : n === 1 ? 'hit1' : 'hit0';
    const badge = n >= 2 ? 'hit2' : n === 1 ? 'hit1' : 'hit0';
    return `<div class="muscle-chip ${cls}" title="${n}x this week">${m}<br><small style="opacity:.7">${n}x</small></div>`;
  }).join('');

  // 8-week heatmap
  renderHeatmap();
}

function renderHeatmap() {
  const logs = getLogs();
  const logSet = new Set(logs.filter(l=>l.workout?.lifts?.length).map(l=>l.date));
  const allLogged = new Set(logs.map(l=>l.date));

  const today = new Date(); today.setHours(0,0,0,0);
  const days = [];
  for (let i = 55; i >= 0; i--) {
    const d = new Date(today); d.setDate(today.getDate() - i);
    days.push(d.toISOString().slice(0,10));
  }

  // Pad to full weeks
  const firstDay = new Date(days[0]);
  const padStart = firstDay.getDay();
  const cells = Array(padStart).fill(null).concat(days);

  // Group by week columns
  const weeks = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i+7));

  const hm = document.getElementById('heatmap');
  hm.innerHTML = weeks.map(week => `
    <div class="heatmap-col">
      ${week.map(d => d === null
        ? `<div class="heatmap-cell" style="opacity:.1"></div>`
        : `<div class="heatmap-cell${logSet.has(d)?' active':allLogged.has(d)?' rest':''}" title="${d}"></div>`
      ).join('')}
    </div>`).join('');
}

// ── Templates ─────────────────────────────────────────────────────────────────
function renderTemplates() {
  const templates = getTemplates();
  const container = document.getElementById('templates-list');

  if (!templates.length) {
    container.innerHTML = `<div class="empty-state">
      <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      <p>No templates yet. Create one below!</p>
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
      <div class="template-exercises">
        ${t.exercises.map(e=>`<span class="ex-chip">${e}</span>`).join('')}
      </div>
    </div>`).join('');
}

window.deleteTemplate = function(id) {
  const templates = getTemplates().filter(t => t.id !== id);
  setTemplates(templates);
  renderTemplates();
  toast('Template deleted');
};

window.editTemplate = function(id) {
  const t = getTemplates().find(t => t.id === id);
  if (!t) return;
  openTemplateModal(t);
};

function openTemplateModal(existing = null) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  const exList = existing?.exercises || [];
  overlay.innerHTML = `
    <div class="modal">
      <h2>${existing ? 'Edit Template' : 'New Template'}</h2>
      <label>Template name</label>
      <input id="tmpl-name" type="text" placeholder="e.g. Push Day A" value="${existing?.name||''}" style="margin-bottom:14px">
      <label>Exercises (one per line or pick below)</label>
      <div id="tmpl-exercises" style="display:flex;flex-direction:column;gap:6px;margin-bottom:10px">
        ${exList.map((e,i) => buildTemplateExRow(e,i)).join('')}
      </div>
      <button class="btn btn-ghost btn-sm" id="tmpl-add-ex">+ Add Exercise</button>
      <div style="display:flex;gap:8px;margin-top:18px">
        <button class="btn btn-primary" id="tmpl-save" style="flex:1">Save</button>
        <button class="btn btn-ghost" id="tmpl-cancel">Cancel</button>
      </div>
    </div>`;

  overlay.querySelector('#tmpl-add-ex').addEventListener('click', () => {
    const c = overlay.querySelector('#tmpl-exercises');
    const i = c.children.length;
    const div = document.createElement('div');
    div.innerHTML = buildTemplateExRow('', i);
    c.appendChild(div.firstElementChild);
  });

  overlay.querySelector('#tmpl-cancel').addEventListener('click', () => overlay.remove());
  overlay.querySelector('#tmpl-save').addEventListener('click', () => {
    const name = overlay.querySelector('#tmpl-name').value.trim();
    if (!name) return;
    const exercises = Array.from(overlay.querySelectorAll('.tmpl-ex-select')).map(s=>s.value).filter(Boolean);
    const templates = getTemplates();
    if (existing) {
      const idx = templates.findIndex(t=>t.id===existing.id);
      if (idx>=0) templates[idx] = { ...existing, name, exercises };
    } else {
      templates.push({ id: Date.now().toString(), name, exercises });
    }
    setTemplates(templates);
    overlay.remove();
    renderTemplates();
    renderLogDay();
    toast('Template saved!');
  });

  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target===overlay) overlay.remove(); });
}

function buildTemplateExRow(val, i) {
  return `<div style="display:flex;gap:6px;align-items:center">
    <select class="tmpl-ex-select" style="flex:1">${EXERCISES.map(e=>`<option value="${e}"${e===val?' selected':''}>${e}</option>`).join('')}</select>
    <button class="btn btn-ghost btn-sm btn-icon" onclick="this.closest('div').remove()">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
  </div>`;
}

// ── Leaderboard ───────────────────────────────────────────────────────────────
let leaderboardData = [];

function renderLeaderboard() {
  const profile = getProfile();
  const familyCode = profile?.familyCode || '';

  document.getElementById('lb-family-code').value = familyCode;

  const logs = getLogs();
  const goals = getGoals();
  const myScore = calcPoints(logs, goals);
  const myWorkouts = logs.filter(l=>l.workout?.lifts?.length).length;

  if (!familyCode) {
    document.getElementById('lb-list').innerHTML = `<div class="empty-state"><p>Enter a family code to sync scores across devices.</p></div>`;
    // Show local only entry
    renderLbRows([{ name: profile?.name||'You', color: profile?.color||'#6c63ff', score: myScore, workouts: myWorkouts }]);
    return;
  }

  // Always show local entry merged with remote
  const localEntry = { name: profile.name, color: profile.color, score: myScore, workouts: myWorkouts };
  const merged = [...leaderboardData.filter(m=>m.name!==profile.name), localEntry];
  renderLbRows(merged);
}

function renderLbRows(members) {
  const sorted = [...members].sort((a,b)=>b.score-a.score);
  const rankLabel = ['🥇','🥈','🥉'];
  const rankClass = ['gold','silver','bronze'];

  document.getElementById('lb-list').innerHTML = sorted.map((m,i) => `
    <div class="lb-row">
      <div class="lb-rank ${rankClass[i]||''}">${rankLabel[i]||i+1}</div>
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
  renderGoals();
  renderMuscleMap();
  renderProgress();

  // Profile bar
  document.getElementById('profile-name').textContent = profile.name;
  document.getElementById('profile-avatar').style.background = profile.color;
  document.getElementById('profile-avatar').textContent = profile.name[0].toUpperCase();

  // Family code listener
  document.getElementById('lb-save-code').addEventListener('click', () => {
    const code = document.getElementById('lb-family-code').value.trim().toUpperCase();
    const p = getProfile();
    p.familyCode = code;
    setProfile(p);

    if (code && db) {
      subscribeLeaderboard(code, members => {
        leaderboardData = members;
        renderLeaderboard();
      });
      const logs = getLogs();
      syncLeaderboardEntry(code, p, calcPoints(logs, getGoals()), logs.filter(l=>l.workout?.lifts?.length).length);
    }
    renderLeaderboard();
    toast('Family code saved!');
  });

  // Load family data if code already set
  if (profile.familyCode && db) {
    subscribeLeaderboard(profile.familyCode, members => {
      leaderboardData = members;
      renderLeaderboard();
    });
  }

  showTab('log');
}

function bootstrap() {
  // Theme
  const saved = localStorage.getItem('ironlog_theme') || 'dark';
  document.documentElement.dataset.theme = saved;
  document.getElementById('theme-toggle').textContent = saved === 'dark' ? '☀️ Light' : '🌙 Dark';

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('ironlog_theme', next);
    document.getElementById('theme-toggle').textContent = next === 'dark' ? '☀️ Light' : '🌙 Dark';
  });

  // Nav
  document.querySelectorAll('.nav-item[data-tab]').forEach(n => {
    n.addEventListener('click', () => showTab(n.dataset.tab));
  });

  // Progress range toggles
  document.querySelectorAll('.toggle-btn[data-range]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn[data-range]').forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      renderProgress();
    });
  });

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
    e.preventDefault();
    deferredPrompt = e;
    document.getElementById('install-btn').style.display = 'flex';
  });
  document.getElementById('install-btn').addEventListener('click', async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') document.getElementById('install-btn').style.display = 'none';
    deferredPrompt = null;
  });

  // SW registration
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(()=>{});
  }
}

document.addEventListener('DOMContentLoaded', bootstrap);
