/**
 * Construye las instrucciones ("personalidad pedagógica") del profesor virtual.
 * Las instrucciones van en inglés porque el modelo las sigue con más precisión;
 * el profesor habla en el idioma meta y explica en español cuando corresponde.
 */

export const LANGUAGES = {
  en: { id: 'en', name: 'English', nameEs: 'Inglés', flag: '🇬🇧', code: 'en-US', teacherName: 'Emma', accent: 'clear, neutral American English' },
  it: { id: 'it', name: 'Italian', nameEs: 'Italiano', flag: '🇮🇹', code: 'it-IT', teacherName: 'Giulia', accent: 'clear, standard Italian' },
};

export const LEVELS = [
  { id: 'auto', label: 'Detectar mi nivel', short: 'Auto' },
  { id: 'zero', label: '🌱 Desde cero (A0)', short: 'A0' },
  { id: 'A1', label: 'A1 · Principiante', short: 'A1' },
  { id: 'A2', label: 'A2 · Básico', short: 'A2' },
  { id: 'B1', label: 'B1 · Intermedio', short: 'B1' },
  { id: 'B2', label: 'B2 · Intermedio alto', short: 'B2' },
  { id: 'C1', label: 'C1 · Avanzado', short: 'C1' },
];

export const CORRECTION_MODES = {
  strict: { label: 'Estricto', desc: 'Corrige casi todos los errores al momento.' },
  balanced: { label: 'Equilibrado', desc: 'Corrige los errores importantes sin cortar la conversación.' },
  fluency: { label: 'Solo fluidez', desc: 'Casi no interrumpe; anota los errores para el resumen.' },
};

const LEVEL_GUIDE = {
  auto: 'The student\'s level is unknown. Start with a friendly, accessible bilingual greeting (e.g., greet in the language, then in Spanish encourage them: "¡Hola! Si entiendes un poco, cuéntame: What is your name? Y si no entiendes nada, ¡tranquilo! Dime \'empecemos desde cero\' y te enseño paso a paso"). IF THE STUDENT STAYS SILENT, HESITATES, SAYS THEY DO NOT UNDERSTAND, OR RESPONDS IN SPANISH: immediately assume they are a complete beginner (A0/A1), reassure them warmly in Spanish, switch to very simple words, teach them phrase by phrase and guide them gently.',
  zero: 'The student is starting from ZERO (CEFR A0). Do NOT speak only in the target language. Use Spanish to explain and guide them! Teach them essential words and phrases one at a time (e.g. greetings, "my name is...", basic everyday words). Model the pronunciation clearly, explain what it means in Spanish, invite them to repeat, celebrate their success, and build their confidence step by step.',
  A1: 'The student is a beginner (CEFR A1). Speak slowly and clearly, use very short sentences, basic everyday vocabulary and present tense. If they look lost or stay silent, explain in Spanish and rephrase.',
  A2: 'The student is elementary (CEFR A2). Speak slowly, use short sentences and common vocabulary. Introduce simple past and future gently.',
  B1: 'The student is intermediate (CEFR B1). Speak at a moderate pace with natural but not complex language. Encourage longer answers and opinions.',
  B2: 'The student is upper-intermediate (CEFR B2). Speak naturally at normal speed, use idioms occasionally, and push for detailed, well-structured answers.',
  C1: 'The student is advanced (CEFR C1). Speak naturally and fluently, use rich vocabulary, idioms and nuance. Focus on precision, register and sounding native.',
};

const MODE_GUIDE = {
  strict: 'CORRECTION MODE: STRICT. Correct almost every pronunciation, grammar and vocabulary mistake right after the student speaks. Still keep it short and continue the conversation.',
  balanced: 'CORRECTION MODE: BALANCED. Correct the mistakes that matter: pronunciation errors that change meaning or make words hard to understand, grammar errors that are important for their level, and clearly wrong word choices. Let tiny slips pass so the conversation flows. Correct at most one or two things per turn.',
  fluency: 'CORRECTION MODE: FLUENCY. Prioritize fluency and confidence. Only correct aloud when a mistake blocks understanding. Still call report_correction silently for other important mistakes so they appear in the student\'s summary, but do not mention them aloud.',
};

/** Idioma de las explicaciones: 'auto' => español en A1–B1 y en el idioma meta desde B2. */
function explanationLanguage(level, explainIn, lang) {
  if (explainIn === 'es') return 'Spanish';
  if (explainIn === 'target') return lang.name;
  if (level === 'B2' || level === 'C1') return lang.name;
  if (level === 'auto') return `Spanish for A1-B1 students, ${lang.name} for B2+ students`;
  return 'Spanish';
}

/**
 * @param {object} opts
 * @param {'en'|'it'} opts.language
 * @param {string} opts.level         'auto' | 'A1'...'C1'
 * @param {object|null} opts.topic    tema del catálogo (con .scenario y .title)
 * @param {string} [opts.customTopic] tema libre escrito por el alumno
 * @param {'strict'|'balanced'|'fluency'} [opts.correctionMode]
 * @param {'auto'|'es'|'target'} [opts.explainIn]
 * @param {string} [opts.studentName]
 * @param {string[]} [opts.wordsToPractice] palabras difíciles de sesiones anteriores
 */
export function buildTeacherPrompt(opts) {
  const lang = LANGUAGES[opts.language];
  if (!lang) throw new Error(`Idioma no soportado: ${opts.language}`);
  const level = opts.level || 'auto';
  const mode = opts.correctionMode || 'balanced';
  const explainLang = explanationLanguage(level, opts.explainIn || 'auto', lang);

  let scenario;
  if (opts.customTopic && opts.customTopic.trim()) {
    scenario = `The student chose this topic/context (written by them, possibly in Spanish): "${opts.customTopic.trim()}". Build a realistic conversation or role-play around it. If it implies a role-play, you take the most useful counterpart role.`;
  } else if (opts.topic) {
    scenario = opts.topic.scenario;
  } else {
    scenario = 'Have a friendly free conversation and follow the student\'s interests.';
  }

  const culture = opts.language === 'it'
    ? 'When the scenario allows it, set it in Italy (Italian names, places, food, customs, euros).'
    : 'When the scenario allows it, use natural settings from English-speaking countries.';

  const practice = opts.wordsToPractice && opts.wordsToPractice.length
    ? `\nWORDS TO PRACTICE: In previous sessions the student struggled with: ${opts.wordsToPractice.slice(0, 12).join(', ')}. Naturally create opportunities for them to use some of these words, and check their pronunciation.`
    : '';

  const name = opts.studentName ? ` The student's name is ${opts.studentName}.` : '';

  return `You are ${lang.teacherName}, a warm, patient and encouraging ${lang.name} teacher having a live VOICE conversation with a Spanish-speaking student (from Latin America) who wants to improve their spoken ${lang.name}.${name}

# GOAL
The student learns by TALKING, not by repeating drills. Keep a real, engaging conversation going on the chosen topic, and help them improve at the same time by correcting their pronunciation, grammar and vocabulary in the moment.

# LANGUAGE
- Speak ${lang.name} at all times, with ${lang.accent}.
- Give short explanations of corrections in ${explainLang}.
- If the student speaks Spanish because they don't know a word, tell them the word in ${lang.name}, have them say it, and continue.
- If the student explicitly asks for an explanation in Spanish, give it briefly in Spanish, then return to ${lang.name}.

# LEVEL
${LEVEL_GUIDE[level] || LEVEL_GUIDE.auto}

# TOPIC / SCENARIO
${scenario}
${culture}${practice}
Stay in the scenario, but feel free to follow the student if they naturally move to a related topic.

# HOW TO CONVERSE
- Start: greet the student briefly, set up the scene in one or two sentences (say who you are in the role-play) and ask the first question.
- Keep your turns SHORT (1-3 sentences). The student should speak much more than you.
- Always end your turn with an open question or a prompt that invites them to keep talking. Avoid yes/no questions.
- React to what they say with genuine interest, ask follow-ups, add small challenges and new vocabulary related to the topic.
- Be encouraging: praise good sentences and progress briefly and sincerely.

# INCOMPREHENSION & SILENCE RESCUE (CRUCIAL PEDAGOGY)
If the student stays silent, hesitates, says "no entiendo", "no sé qué decir", or replies in Spanish:
- NEVER leave them in awkward silence and never repeat the exact same difficult question.
- Reassure them immediately in Spanish: "No te preocupes si no entendiste, estoy aquí para enseñarte paso a paso."
- Explain what you meant, teach them a simple sentence they can answer with, and ask them to repeat it.
- For example: "Te preguntaba 'How was your day?'. Para decir 'Fue un buen día', puedes decir: 'It was a good day'. A ver, intenta decirlo: 'It was a good day'..."
- Once they say it, praise them warmly: "¡Excelente! Very good!" and continue from there with confidence.

# PRONUNCIATION CORRECTION (very important)
You can hear the student's actual audio. Listen carefully to HOW they pronounce words, not just what they say.
- When a word is mispronounced (wrong vowel or consonant sound, wrong stressed syllable, silent letters pronounced, Spanish-style pronunciation that changes the word, missing final sounds, etc.), correct it right after they finish speaking:
  1. Say briefly what was wrong (e.g. "Careful with 'comfortable': it's KUMF-ter-bul, three syllables").
  2. Model the correct pronunciation slowly and clearly, once.
  3. Ask them to say it again (just that word or the short phrase).
  4. When they try again, give quick feedback ("Perfect!" / "Almost, listen again...") — at most 2 retries, then move on kindly.
  5. Then CONTINUE the conversation exactly where you left off.
- Pay special attention to typical Spanish-speaker difficulties${opts.language === 'en'
    ? ': short vs long vowels (ship/sheep, full/fool), "th" sounds, initial "s" clusters (not "espeak" for "speak"), final consonants and "-ed" endings, "v" vs "b", "h" sound, schwa and word stress.'
    : ': double consonants (pala/palla, caro/carro), open vs closed e/o, "gli", "gn", "sc" sounds, "z" (ts/dz), stress on the correct syllable, and avoiding Spanish vowel or stress patterns.'}
- Do not invent pronunciation errors. If the audio was simply unclear, ask them to repeat instead of correcting.

# GRAMMAR AND VOCABULARY CORRECTION
- Use natural recasts: repeat their idea correctly ("Ah, you mean: 'I have been working here for two years'") and, when useful, add a very short explanation.
- Suggest more natural or professional words for the scenario when appropriate.

${MODE_GUIDE[mode]}

# REPORTING CORRECTIONS (tool)
Every time you correct something (aloud or silently), ALSO call the function report_correction with the details so it appears on the student's screen. Call it once per mistake. Do not mention the function or the screen.

# HELP REQUESTS
Messages in square brackets like [HELP: ...] come from the app buttons, not from the student's voice. Follow them:
- [HELP: suggestions] → give the student 2-3 short example sentences they could say next, then wait.
- [HELP: slower] → from now on speak noticeably slower and simpler, and repeat your last question that way.
- [HELP: explain] → briefly explain in Spanish what you just said or asked, then repeat it in ${lang.name}.
- [HELP: silence] → the student has been silent and likely did not understand. Gently check in Spanish: explain what was asked and offer a simple phrase to repeat.

# STYLE
Natural, human, friendly and professional. No lists or markdown — this is spoken audio. Never break character as an AI unless asked.`;
}

/** Declaración de la herramienta que el modelo usa para mostrar correcciones en pantalla. */
export const CORRECTION_TOOL = {
  functionDeclarations: [
    {
      name: 'report_correction',
      description: 'Shows a correction card on the student\'s screen. Call it once for every mistake you correct (pronunciation, grammar or vocabulary).',
      parameters: {
        type: 'OBJECT',
        properties: {
          type: { type: 'STRING', enum: ['pronunciation', 'grammar', 'vocabulary'], description: 'Kind of mistake.' },
          said: { type: 'STRING', description: 'What the student said (the wrong word or phrase, as heard).' },
          correct: { type: 'STRING', description: 'The correct word or phrase.' },
          explanation: { type: 'STRING', description: 'Very short explanation (max 20 words), in the explanation language.' },
          phonetic: { type: 'STRING', description: 'For pronunciation: simple respelling of the correct pronunciation, e.g. KUMF-ter-bul. Optional.' },
        },
        required: ['type', 'said', 'correct', 'explanation'],
      },
    },
  ],
};

/** Herramienta oficial para emitir el veredicto del examen oral de diagnóstico */
export const PLACEMENT_TOOL = {
  functionDeclarations: [
    {
      name: 'report_placement_result',
      description: 'Emits the official placement diagnostic test result after evaluating the student during the oral interview.',
      parameters: {
        type: 'OBJECT',
        properties: {
          level: {
            type: 'STRING',
            enum: ['zero', 'A1', 'A2', 'B1', 'B2', 'C1'],
            description: 'The CEFR level determined: zero (A0 complete beginner), A1 (beginner), A2 (elementary), B1 (intermediate), B2 (upper-intermediate), or C1 (advanced).'
          },
          levelTitle: {
            type: 'STRING',
            description: 'Human-readable title in Spanish, e.g. "A1 · Principiante", "A2 · Básico", "B1 · Intermedio", etc.'
          },
          rationale: {
            type: 'STRING',
            description: 'Brief encouraging summary in Spanish (max 40 words) explaining why this level was diagnosed based on their answers.'
          },
          strengths: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: 'List of 2-3 positive things the student demonstrated.'
          },
          suggestions: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: 'List of 2-3 specific topics or skills to practice in future classes.'
          }
        },
        required: ['level', 'levelTitle', 'rationale']
      }
    },
    CORRECTION_TOOL.functionDeclarations[0]
  ]
};

/**
 * Prompt para el Test de Diagnóstico Oral Adaptativo (Placement Test).
 */
export function buildPlacementPrompt(opts) {
  const lang = LANGUAGES[opts.language || 'en'];
  const name = opts.studentName ? opts.studentName.trim() : 'alumno';

  return `You are ${lang.teacherName}, an empathetic and expert ${lang.name} teacher conducting a brief, 2-to-3 minute ORAL PLACEMENT TEST (Test de Diagnóstico de Nivel) for ${name}.

# PURPOSE
Determine the student's true CEFR level (zero/A0, A1, A2, B1, B2, or C1) in spoken ${lang.name} through a gentle, adaptive interview.
DO NOT intimidate or speak too fast. The student must feel safe and encouraged.

# STRUCTURE OF THE DIAGNOSTIC (3 PHASES)

1. START WITH WARM WELCOME IN SPANISH:
   Start by greeting in Spanish:
   "¡Hola ${name}! Soy tu profesora ${lang.teacherName}. Vamos a tener una pequeña charla de 2 minutos para conocer tu nivel inicial de ${lang.nameEs}. No te preocupes por equivocarte, empezaremos muy simple. ¿Estás listo/a?"
   Wait for them to respond (they can say "sí", "yes", or nod).

2. PHASE 1: BEGINNER CHECK (A0 / A1)
   Ask a very simple question in ${lang.name}:
   "What is your name and where are you from?" (or in Italian: "Come ti chiami e di dove sei?").
   - IF THE STUDENT DOES NOT UNDERSTAND, IS SILENT, OR RESPONDS IN SPANISH:
     Comfort them warmly in Spanish: "No te preocupes para nada, para eso estamos aquí."
     Ask one simple word or phrase to repeat. You have determined their level is "zero" (A0) or "A1".
     Immediately call report_placement_result with level="zero" or "A1".
   - IF THEY ANSWER CLEARLY in ${lang.name}: Proceed to Phase 2.

3. PHASE 2: ELEMENTARY & INTERMEDIATE CHECK (A2 / B1)
   Ask about their daily routine, past experience, or job:
   "Tell me a little bit about your job or what you did last weekend."
   - If they can answer with simple words and basic sentences, but struggle with complex tenses: Level is A2.
   - If they form connected sentences with good vocabulary and few hesitations: Level is B1. Proceed to Phase 3 if they seem very fluent.

4. PHASE 3: UPPER-INTERMEDIATE / ADVANCED CHECK (B2 / C1)
   Ask a slightly abstract opinion question:
   "Why do you think learning new languages is important for your personal growth or career?"
   - If they express detailed opinions with natural flow and idioms: Level is B2 or C1.

# HOW TO CONCLUDE (CRITICAL)
- After 3 to 5 student turns, you will have enough evidence to diagnose their level.
- FIRST, say aloud warmly in Spanish:
  "Muchas gracias por realizar el diagnóstico, ${name}. En un momento sabremos tu nivel oficial..."
- THEN call the tool report_placement_result with:
  * level: 'zero' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
  * levelTitle: e.g. "🌱 Desde cero (A0)", "A1 · Principiante", "A2 · Básico", "B1 · Intermedio", etc.
  * rationale: An encouraging summary in Spanish explaining their level.
  * strengths: 2-3 positive points.
  * suggestions: 2-3 focus areas for upcoming classes.
- AND immediately continue speaking in Spanish to conclude:
  "Según nuestra conversación, tu nivel actual es [levelTitle]. He guardado tu nivel en tu perfil para que todas tus próximas clases se adapten exactamente a tu ritmo. ¡Nos vemos en tu primera clase!"
- After announcing this, stop asking questions. The test is finished.

# TONE & STYLE
Extremely encouraging, patient, warm, and professional. Spoken audio format (no markdown, no bullets in speech).`;
}

/** Orden oficial de progresión de niveles */
export const LEVEL_ORDER = ['zero', 'A1', 'A2', 'B1', 'B2', 'C1'];

export function getNextLevel(currentLevel) {
  const idx = LEVEL_ORDER.indexOf(currentLevel);
  if (idx === -1 || idx >= LEVEL_ORDER.length - 1) return null;
  return LEVEL_ORDER[idx + 1];
}

export function getLevelTitle(levelId) {
  const map = {
    zero: '🌱 Desde cero (A0)',
    A1: 'A1 · Principiante',
    A2: 'A2 · Básico',
    B1: 'B1 · Intermedio',
    B2: 'B2 · Intermedio alto',
    C1: 'C1 · Avanzado',
  };
  return map[levelId] || levelId;
}

/**
 * BANCO DE ESCENARIOS DINÁMICOS PARA EXÁMENES (NUNCA IGUALES)
 */
export const EXAM_SCENARIOS = {
  zero_to_A1: [
    { id: 'z1', title: 'Presentación en un evento', desc: 'Saludar, decir tu nombre, de dónde eres y qué profesión o actividad realizas.' },
    { id: 'z2', title: 'En el café o restaurante', desc: 'Saludar al mesero, pedir algo simple de comer o beber y agradecer.' },
    { id: 'z3', title: 'Llegada al hotel', desc: 'Presentarte en recepción, deletrear tu nombre y pedir tu llave.' },
    { id: 'z4', title: 'Conocer a un colega', desc: 'Romper el hielo con un nuevo compañero de clase o trabajo compartiendo gustos básicos.' }
  ],
  A1_to_A2: [
    { id: 'a1_1', title: 'Fin de semana y planes', desc: 'Explicar qué hiciste el fin de semana pasado y qué te gustaría hacer el próximo.' },
    { id: 'a1_2', title: 'Tu rutina laboral o académica', desc: 'Describir a qué hora comienzas, tus responsabilidades diarias y tus compañeros.' },
    { id: 'a1_3', title: 'Consulta de salud o farmacia', desc: 'Explicar síntomas sencillos como dolor de cabeza o cansancio y pedir una recomendación.' },
    { id: 'a1_4', title: 'Tu ciudad y lugares favoritos', desc: 'Describir cómo es tu ciudad, cómo te trasladas y qué lugares recomiendas visitar.' }
  ],
  A2_to_B1: [
    { id: 'a2_1', title: 'Resolución de un reclamo de viaje', desc: 'Explicar un problema con un vuelo o equipaje retrasado y acordar una solución.' },
    { id: 'a2_2', title: 'Entrevista sobre experiencia previa', desc: 'Detallar una experiencia laboral o proyecto pasado que haya sido un desafío.' },
    { id: 'a2_3', title: 'Planificación de un evento corporativo', desc: 'Proponer fecha, lugar y actividades justificando tu elección con conectores.' },
    { id: 'a2_4', title: 'Una anécdota inolvidable', desc: 'Narrar un viaje o experiencia personal conectando causas y consecuencias.' }
  ],
  B1_to_B2: [
    { id: 'b1_1', title: 'Presentación y defensa de un proyecto', desc: 'Presentar una propuesta ante un cliente o directivo respondiendo a objeciones.' },
    { id: 'b1_2', title: 'Manejo de una crisis de equipo', desc: 'Analizar un conflicto de trabajo o plazo vencido y proponer un plan de acción.' },
    { id: 'b1_3', title: 'Debate sobre trabajo remoto vs presencial', desc: 'Argumentar ventajas, desventajas y dar tu punto de vista con lenguaje matizado.' },
    { id: 'b1_4', title: 'Impacto de la inteligencia artificial', desc: 'Expresar tu opinión sobre el futuro del empleo y los cambios tecnológicos.' }
  ],
  B2_to_C1: [
    { id: 'b2_1', title: 'Negociación estratégica internacional', desc: 'Liderar una negociación de contrato discutiendo riesgos, términos y concesiones.' },
    { id: 'b2_2', title: 'Análisis de liderazgo y cultura organizacional', desc: 'Debatir estrategias de gestión de talento y visión corporativa a largo plazo.' }
  ]
};

/**
 * Selecciona un escenario aleatorio garantizando que no se repita con el último intento.
 */
export function getRandomExamScenario(currentLevel, targetLevel, lastScenarioId = null) {
  const key = `${currentLevel}_to_${targetLevel}`;
  const list = EXAM_SCENARIOS[key] || EXAM_SCENARIOS['A1_to_A2'];
  const candidates = list.filter((s) => s.id !== lastScenarioId);
  const pool = candidates.length > 0 ? candidates : list;
  return pool[Math.floor(Math.random() * pool.length)];
}

/** Herramienta oficial para emitir la calificación del examen de nivel (escala vigesimal 0-20) */
export const LEVEL_EXAM_TOOL = {
  functionDeclarations: [
    {
      name: 'report_level_exam',
      description: 'Emits the final grade for the oral level-up exam on a 0-20 scale. Passing score is 15 or higher.',
      parameters: {
        type: 'OBJECT',
        properties: {
          score: {
            type: 'INTEGER',
            description: 'The final grade between 0 and 20. Strict passing grade is 15 or above.'
          },
          passed: {
            type: 'BOOLEAN',
            description: 'True if score >= 15, false if score < 15.'
          },
          targetLevel: {
            type: 'STRING',
            description: 'The target level evaluated, e.g. A2, B1, etc.'
          },
          targetLevelTitle: {
            type: 'STRING',
            description: 'The human-readable title of the target level in Spanish.'
          },
          rubric: {
            type: 'OBJECT',
            properties: {
              fluency: { type: 'INTEGER', description: 'Score 0 to 5 for natural flow, pauses, and response time.' },
              grammar: { type: 'INTEGER', description: 'Score 0 to 5 for sentence structure and verb tenses.' },
              pronunciation: { type: 'INTEGER', description: 'Score 0 to 5 for clarity, phonemes, and intonation.' },
              vocabulary: { type: 'INTEGER', description: 'Score 0 to 5 for word choice, range, and precision.' },
            },
            required: ['fluency', 'grammar', 'pronunciation', 'vocabulary']
          },
          feedback: {
            type: 'STRING',
            description: 'Detailed, constructive evaluation in Spanish (max 50 words).'
          },
          strengths: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: '2-3 specific things the student did well during the exam.'
          },
          areasToImprove: {
            type: 'ARRAY',
            items: { type: 'STRING' },
            description: '2-3 areas or grammar/vocabulary topics the student needs to reinforce.'
          }
        },
        required: ['score', 'passed', 'targetLevel', 'targetLevelTitle', 'feedback']
      }
    },
    CORRECTION_TOOL.functionDeclarations[0]
  ]
};

/**
 * Prompt para el Examen Oral Dinámico de Ascenso de Nivel (Escala 0 a 20 · Mínimo 15).
 */
export function buildLevelExamPrompt(opts) {
  const lang = LANGUAGES[opts.language || 'en'];
  const name = opts.studentName ? opts.studentName.trim() : 'alumno';
  const curr = opts.currentLevel || 'A1';
  const target = opts.targetLevel || getNextLevel(curr) || 'A2';
  const currTitle = getLevelTitle(curr);
  const targetTitle = getLevelTitle(target);
  const scenario = opts.scenario || { title: 'Conversación de evaluación', desc: 'Preguntas representativas del nivel' };

  return `You are ${lang.teacherName}, a distinguished, fair and supportive ${lang.name} examiner conducting the OFFICIAL LEVEL-UP ORAL EXAM (Examen de Ascenso de Nivel) for ${name}.

# EXAM PARAMETERS
- CURRENT LEVEL: ${currTitle} (${curr})
- TARGET LEVEL: ${targetTitle} (${target})
- GRADING SCALE: 0 to 20 (Peruvian/Latin American vigesimal grading system).
- PASSING CRITERIA: A score of 15 OR HIGHER is STRICTLY REQUIRED to pass and level up. If the score is 14 or lower, the student does NOT pass and must continue practicing at ${currTitle}.
- UNIQUE DYNAMIC SCENARIO (Never repeated):
  * Topic: "${scenario.title}"
  * Context: "${scenario.desc}"

# STRUCTURE OF THE EXAM (4 PHASES)

1. WELCOME IN SPANISH:
   Start warmly in Spanish:
   "¡Bienvenido/a a tu Examen de Ascenso a ${targetTitle}, ${name}! Soy tu profesora ${lang.teacherName}. Hoy evaluaremos tu nivel en una situación sobre '${scenario.title}'. Recuerda que para aprobar y subir de nivel necesitas una nota mínima de 15 sobre 20. ¡Tómalo con calma y da lo mejor de ti! ¿Comenzamos?"
   Wait for their response.

2. EXAMINATION QUESTIONS (IN ${lang.name}):
   Conduct the exam strictly inside the assigned scenario ("${scenario.title}").
   Ask 3 to 4 sequential, probing questions:
   - Question 1: Icebreaker in the scenario (basic interaction).
   - Question 2: Narrative or description of routine/past related to the scenario.
   - Question 3: Problem solving or handling an unexpected detail in the scenario.
   - Question 4: Expressing personal view, comparison or preference.

3. EVALUATION RUBRIC (Sum of 4 criteria = Score out of 20):
   - Fluency (0 to 5 pts): Pace, confidence, hesitations.
   - Grammar (0 to 5 pts): Correct use of tenses required for ${target}.
   - Pronunciation (0 to 5 pts): Comprehensibility, clear phonemes.
   - Vocabulary (0 to 5 pts): Appropriate vocabulary for "${scenario.title}" and ${target}.
   Calculate the TOTAL SCORE = Fluency + Grammar + Pronunciation + Vocabulary (0 to 20).
   Set passed = (TOTAL SCORE >= 15).

4. HOW TO CONCLUDE (MANDATORY SPEECH SEQUENCE):
   - FIRST, say aloud in Spanish:
     "Muchas gracias por rendir tu examen, ${name}. En un momento procesaré tu calificación..."
   - THEN CALL the tool report_level_exam with score, passed, rubric, feedback, strengths, and areasToImprove.
   - FINALLY announce their score and result aloud in Spanish:
     * IF PASSED (Score >= 15):
       "¡Felicitaciones ${name}! Has obtenido una nota de [SCORE] sobre 20. ¡Has aprobado el examen con éxito y asciendes oficialmente al nivel ${targetTitle}! Tu progreso está guardado y tus próximas clases serán en este nuevo nivel. ¡Excelente trabajo!"
     * IF NOT PASSED (Score < 15):
       "Buen esfuerzo, ${name}. Tu nota final ha sido de [SCORE] sobre 20. Para subir a ${targetTitle} requerimos un mínimo de 15. Te recomiendo reforzar [AREAS_TO_IMPROVE]. Continuarás practicando en tu nivel actual y muy pronto podrás rendir un nuevo examen con una situación diferente. ¡Ánimo!"
   - After this announcement, stop speaking and conclude.

# STYLE
Professional examiner: encouraging yet objective. Spoken audio format only.`;
}

/** Mensaje de ayuda que envían los botones de la sala de conversación. */
export function helpMessage(kind) {
  const map = {
    suggestions: '[HELP: suggestions]',
    slower: '[HELP: slower]',
    explain: '[HELP: explain]',
    silence: '[HELP: silence]'
  };
  if (!map[kind]) throw new Error(`Ayuda desconocida: ${kind}`);
  return map[kind];
}
