/** Almacenamiento local (en el dispositivo del alumno). Nada sale a ningún servidor propio. */

const SETTINGS_KEY = 'pvi.settings';
const HISTORY_KEY = 'pvi.history';

export const VOICES = [
  { id: 'Kore', label: 'Kore · femenina, firme' },
  { id: 'Aoede', label: 'Aoede · femenina, suave' },
  { id: 'Leda', label: 'Leda · femenina, juvenil' },
  { id: 'Zephyr', label: 'Zephyr · femenina, brillante' },
  { id: 'Puck', label: 'Puck · masculina, alegre' },
  { id: 'Charon', label: 'Charon · masculina, informativa' },
  { id: 'Fenrir', label: 'Fenrir · masculina, enérgica' },
  { id: 'Orus', label: 'Orus · masculina, firme' },
];

const DEFAULTS = {
  apiKey: '',
  model: 'gemini-3.8-live',
  voice: 'Kore',
  language: 'en',
  level: 'auto',
  correctionMode: 'balanced',
  explainIn: 'auto',
  studentName: '',
  diagnosedLevel: null,
  diagnosedDate: null,
  diagnosedFeedback: null,
};

export function getSettings() {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}') };
  } catch {
    return { ...DEFAULTS };
  }
}

export function saveSettings(patch) {
  const next = { ...getSettings(), ...patch };
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(next));
  return next;
}

export function saveDiagnosedLevel(result) {
  return saveSettings({
    diagnosedLevel: result.level,
    diagnosedDate: new Date().toISOString(),
    diagnosedFeedback: result,
    level: result.level, // fija el nivel automáticamente para las próximas clases
  });
}

const EXAM_HISTORY_KEY = 'pvi.exam_history';

export function getExamHistory() {
  try {
    return JSON.parse(localStorage.getItem(EXAM_HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

export function getLastExamResult() {
  return getSettings().lastExamResult || null;
}

export function saveLevelExamResult(result) {
  const history = getExamHistory();
  const record = {
    ...result,
    date: new Date().toISOString(),
    id: 'exam_' + Date.now(),
  };
  history.unshift(record);
  localStorage.setItem(EXAM_HISTORY_KEY, JSON.stringify(history.slice(0, 50)));

  const patch = {
    lastExamResult: record,
  };

  // Si aprobó con 15 o más, asciende automáticamente al nivel meta
  if (result.passed && result.targetLevel) {
    patch.level = result.targetLevel;
    patch.diagnosedLevel = result.targetLevel;
  }

  return saveSettings(patch);
}

export function getHistory() {
  try {
    return JSON.parse(localStorage.getItem(HISTORY_KEY) || '[]');
  } catch {
    return [];
  }
}

export function addSession(session) {
  const list = getHistory();
  list.unshift(session);
  localStorage.setItem(HISTORY_KEY, JSON.stringify(list.slice(0, 200)));
}

/** Palabras con errores de pronunciación recientes (para que el profesor las retome). */
export function wordsToPractice(language, max = 12) {
  const words = [];
  for (const s of getHistory()) {
    if (s.language !== language) continue;
    for (const c of s.corrections || []) {
      if (c.type === 'pronunciation' && c.correct && !words.includes(c.correct)) words.push(c.correct);
      if (words.length >= max) return words;
    }
  }
  return words;
}
