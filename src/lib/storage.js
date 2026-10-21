import { LEVEL_ORDER } from '../prompts/teacher.js';

const SETTINGS_KEY = 'pvi.settings';
const HISTORY_KEY = 'pvi.history';
const EXAM_HISTORY_KEY = 'pvi.exam_history';

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

/**
 * Retorna el nivel más alto que el estudiante tiene desbloqueado actualmente.
 * Si no tiene diagnóstico ni exámenes aprobados, inicia en 'zero' (A0).
 */
export function getHighestUnlockedLevel() {
  const s = getSettings();
  let maxIdx = 0; // 'zero' siempre está disponible

  // Considerar nivel diagnosticado
  if (s.diagnosedLevel && s.diagnosedLevel !== 'auto') {
    const diagIdx = LEVEL_ORDER.indexOf(s.diagnosedLevel);
    if (diagIdx > maxIdx) maxIdx = diagIdx;
  }

  // Considerar exámenes de ascenso aprobados (>= 15)
  const exams = getExamHistory();
  for (const ex of exams) {
    if (ex.passed && ex.targetLevel) {
      const exIdx = LEVEL_ORDER.indexOf(ex.targetLevel);
      if (exIdx > maxIdx) maxIdx = exIdx;
    }
  }

  return LEVEL_ORDER[maxIdx] || 'zero';
}

/**
 * Retorna la lista de todos los IDs de nivel desbloqueados (incluyendo 'auto' para diagnóstico).
 */
export function getUnlockedLevels() {
  const highest = getHighestUnlockedLevel();
  const highestIdx = LEVEL_ORDER.indexOf(highest);
  const unlocked = LEVEL_ORDER.slice(0, highestIdx + 1);
  return ['auto', ...unlocked];
}

/**
 * Comprueba si un nivel específico está desbloqueado para el alumno.
 */
export function isLevelUnlocked(levelId) {
  if (levelId === 'auto') return true; // El diagnóstico oral siempre está disponible
  const highest = getHighestUnlockedLevel();
  const targetIdx = LEVEL_ORDER.indexOf(levelId);
  const highestIdx = LEVEL_ORDER.indexOf(highest);
  if (targetIdx === -1) return false;
  return targetIdx <= highestIdx;
}

