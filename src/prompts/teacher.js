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

export const STUDY_PLAN = [
  {
    id: 'zero',
    code: 'A0',
    title: '🌱 Desde Cero (A0)',
    subtitle: 'Primeros Pasos y Confianza',
    description: 'Aprende los fundamentos del idioma sin miedo con enseñanza 100% bilingüe y guiada.',
    objectives: [
      'Perder el miedo a hablar y familiarizarse con los sonidos del idioma.',
      'Aprender saludos, fórmulas de cortesía y presentaciones personales básicas.',
      'Comprender y pronunciar números, colores y objetos cotidianos.',
      'Manejar frases clave de supervivencia: pedir repetición y ayuda.'
    ],
    grammar: 'Vocabulario esencial, pronombres personales (I, you), verbo To Be básico en presente.',
    examRequirement: 'Aprobar el Examen Oral de Nivel 0 con nota mínima de 15/20 para desbloquear el Nivel A1.'
  },
  {
    id: 'A1',
    code: 'A1',
    title: 'A1 · Principiante',
    subtitle: 'Mi Entorno y Vida Cotidiana',
    description: 'Comunica información básica sobre ti mismo, tu familia, rutina y compras simples.',
    objectives: [
      'Describir tu rutina diaria, horarios y actividades habituales.',
      'Hablar de tu familia, amigos y profesiones sencillas.',
      'Pedir comida o bebidas en un café/restaurante y preguntar precios.',
      'Expresar gustos y disgustos con oraciones sencillas.'
    ],
    grammar: 'Presente simple, preguntas con Do/Does/Wh-, preposiciones de lugar y tiempo (in, on, at).',
    examRequirement: 'Aprobar el Examen Oral de A1 con nota mínima de 15/20 para desbloquear el Nivel A2.'
  },
  {
    id: 'A2',
    code: 'A2',
    title: 'A2 · Básico',
    subtitle: 'Relatos, Viajes y Situaciones Prácticas',
    description: 'Relata experiencias pasadas, planes futuros y desenvuélvete en viajes y compras.',
    objectives: [
      'Describir qué hiciste el fin de semana o en un viaje pasado.',
      'Pedir direcciones en la calle, registrarte en un hotel y abordar un vuelo.',
      'Explicar síntomas sencillos de salud en una farmacia o consulta.',
      'Hacer comparaciones entre lugares, productos o personas.'
    ],
    grammar: 'Pasado simple (verbos regulares e irregulares), Pasado continuo, Comparativos y Going to.',
    examRequirement: 'Aprobar el Examen Oral de A2 con nota mínima de 15/20 para desbloquear el Nivel B1.'
  },
  {
    id: 'B1',
    code: 'B1',
    title: 'B1 · Intermedio',
    subtitle: 'Conversación Fluida y Resolución de Imprevistos',
    description: 'Narra historias conectadas y resuelve imprevistos cotidianos y laborales en el extranjero.',
    objectives: [
      'Resolver reclamos prácticos con aerolíneas, hoteles o compras defectuosas.',
      'Hablar de tu experiencia profesional y proyectos desafiantes.',
      'Expresar acuerdos, desacuerdos educados y recomendaciones personales.',
      'Conversar con espontaneidad sobre viajes, cultura y planes a futuro.'
    ],
    grammar: 'Present Perfect vs Past Simple, Primer y Segundo Condicional (If I had... I would), Modales de consejo (should).',
    examRequirement: 'Aprobar el Examen Oral de B1 con nota mínima de 15/20 para desbloquear el Nivel B2.'
  },
  {
    id: 'B2',
    code: 'B2',
    title: 'B2 · Intermedio Alto',
    subtitle: 'Argumentación, Negociación y Debates',
    description: 'Comunícate con soltura con nativos, participa en debates complejos y negocia con seguridad.',
    objectives: [
      'Afrontar entrevistas laborales avanzadas estructurando respuestas por logros.',
      'Debatir sobre temas actuales: tecnología, inteligencia artificial y sociedad.',
      'Negociar acuerdos comerciales, concesiones y resolver desacuerdos de equipo.',
      'Expresar matices, hipótesis y opiniones con conectores formales.'
    ],
    grammar: 'Condicionales mixtos, modales de deducción pasada (must have, could have), conectores avanzados (furthermore, whereas).',
    examRequirement: 'Aprobar el Examen Oral de B2 con nota mínima de 15/20 para desbloquear el Nivel C1.'
  },
  {
    id: 'C1',
    code: 'C1',
    title: 'C1 · Avanzado',
    subtitle: 'Dominio Profesional y Expresión Nativa',
    description: 'Domina el idioma con fluidez espontánea, oratoria de impacto y modismos culturales.',
    objectives: [
      'Liderar presentaciones y negociaciones estratégicas internacionales.',
      'Manejar dobles sentidos, modismos (idioms) y registros formales e informales.',
      'Elaborar argumentos sofisticados y persuasivos en tiempo real sin vacilación.'
    ],
    grammar: 'Estructuras complejas, inversión enfática, colocaciones léxicas avanzadas y fonética nativa.',
    examRequirement: 'Nivel de Maestría Profesional alcanzado.'
  }
];

const LEVEL_GUIDE = {
  auto: 'The student\'s level is unknown. Start with a friendly, accessible bilingual greeting (e.g., greet in the language, then in Spanish encourage them: "¡Hola! Si entiendes un poco, cuéntame: What is your name? Y si no entiendes nada, ¡tranquilo! Dime \'empecemos desde cero\' y te enseño paso a paso"). IF THE STUDENT STAYS SILENT, HESITATES, SAYS THEY DO NOT UNDERSTAND, OR RESPONDS IN SPANISH: immediately assume they are a complete beginner (A0/A1), reassure them warmly in Spanish, switch to very simple words, teach them phrase by phrase and guide them gently.',
  zero: 'The student is starting from ZERO (CEFR A0). CONDUCT A BILINGUAL SPANISH-ENGLISH CLASS. Use Spanish to explain, guide, teach, and reassure them! Teach essential words and phrases one by one (greetings, polite phrases, basic daily items). Pronounce each word clearly, invite them in Spanish to repeat, praise their effort warmly in Spanish, and build their confidence step by step without any intimidation.',
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

  const isZero = level === 'zero';
  const languageSection = isZero
    ? `# LANGUAGE & PEDAGOGY: BILINGUAL (SPANISH + ${lang.name.toUpperCase()})
- This student is starting from ZERO (CEFR A0).
- YOUR PRIMARY SPOKEN LANGUAGE FOR GUIDANCE, EXPLANATIONS AND ENCOURAGEMENT IS SPANISH.
- DO NOT speak fast, fluent or long paragraphs in ${lang.name}. It will intimidate them!
- Introduce ONE single word or short phrase at a time in ${lang.name}.
- In Spanish, explain what the word means, pronounce it slowly and clearly in ${lang.name}, and invite the student in Spanish to repeat it (e.g., "A ver ${opts.studentName || 'amigo/a'}, repite conmigo: 'Hello, good morning'...").
- Celebrate their repetition warmly in Spanish ("¡Excelente pronunciación! Muy bien."), then proceed with the next word or response.
- If the student speaks Spanish, that is completely normal and encouraged! Respond in Spanish and teach them how to express that in simple ${lang.name}.`
    : `# LANGUAGE
- Speak ${lang.name} at all times, with ${lang.accent}.
- Give short explanations of corrections in ${explainLang}.
- If the student speaks Spanish because they don't know a word, tell them the word in ${lang.name}, have them say it, and continue.
- If the student explicitly asks for an explanation in Spanish, give it briefly in Spanish, then return to ${lang.name}.`;

  return `You are ${lang.teacherName}, a warm, patient and encouraging ${lang.name} teacher having a live VOICE conversation with a Spanish-speaking student (from Latin America) who wants to improve their spoken ${lang.name}.${name}

# GOAL
The student learns by TALKING, not by repeating drills. Keep a real, engaging conversation going on the chosen topic, and help them improve at the same time by correcting their pronunciation, grammar and vocabulary in the moment.

${languageSection}

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
 * Prompt para el Test de Diagnóstico Oral Exhaustivo (Comprehensive Placement Test).
 * Diseñado para evaluar a fondo el nivel CEFR real del alumno mediante múltiples
 * etapas progresivas (rutina, pasado/narración, resolución de imprevistos, análisis y opinión).
 */
export function buildPlacementPrompt(opts) {
  const lang = LANGUAGES[opts.language || 'en'];
  const name = opts.studentName ? opts.studentName.trim() : 'alumno';

  return `You are ${lang.teacherName}, an expert, perceptive and supportive ${lang.name} examiner conducting an EXHAUSTIVE, MULTI-STAGE ORAL PLACEMENT TEST (Examen Diagnóstico Exhaustivo de Nivel) for ${name}.

# OBJECTIVE
Accurately identify ${name}'s true CEFR level across the full spectrum:
- 🌱 zero (A0 Complete beginner: no knowledge or only isolated words)
- A1 (Beginner: basic everyday words and simple present phrases)
- A2 (Elementary: can describe daily routine, simple past experiences)
- B1 (Intermediate: narrates connected events, solves real-world situations)
- B2 (Upper-intermediate: argues opinions, handles unexpected problems, fluent)
- C1 (Advanced: abstract reasoning, nuanced vocabulary, native-like flow)

# CRITICAL EXAMINER GUIDELINES (READ CAREFULLY)
1. DO NOT ask basic introductory questions like "What is your name?" or "Where are you from?". You already know the student's name (${name}).
2. The diagnostic must be THOROUGH and EXHAUSTIVE: Conduct a progressive interview with AT LEAST 4 to 6 student turns across different linguistic competencies before making your final determination.
3. NEVER diagnose after just 1 or 2 turns unless the student demonstrates zero comprehension and complete silence/inability to produce any English/Italian word.
4. Adapt in real-time:
   - If the student struggles with a tier, provide gentle scaffolding and verify their baseline.
   - If the student breezes through, immediately escalate to complex questions (hypotheticals, abstract opinions) to test for B2 and C1.

# PROGRESSIVE 4-TIER EXAMINATION PROTOCOL

## TIER 0: WARM WELCOME & EXPLANATION IN SPANISH
Start warmly in Spanish:
"¡Hola ${name}! Soy tu profesora ${lang.teacherName}. Vamos a realizar tu evaluación diagnóstica exhaustiva de ${lang.nameEs}. Como ya tengo tus datos, iremos directo a conversar en ${lang.nameEs} para evaluar tu vocabulario, gramática en distintos tiempos verbales, fluidez y comprensión auditiva. Iremos de situaciones cotidianas hasta temas de opinión. ¡Habla con calma y explaya tus respuestas lo más que puedas! ¿Comenzamos?"
Wait for their response (e.g. "yes", "sí", "okay").

## TIER 1: DESCRIPTIVE ROUTINE & WORK / STUDIES (Present & Habitual)
Ask an open, substantive question in ${lang.name}:
- EN: "To get started, tell me about your current work, studies, or daily life. What are your main responsibilities and what does a typical day look like for you?"
- IT: "Per iniziare, raccontami del tuo lavoro, dei tuoi studi o della tua vita quotidiana. Quali sono le tue attività principali e com'è una tua giornata tipo?"
* If student cannot understand or only responds in Spanish: Offer one simplified question in ${lang.name}. If they still cannot form simple sentences, level is "zero" or "A1".
* If student answers with simple sentences: Note fluency and move to Tier 2.

## TIER 2: NARRATIVE & PAST EXPERIENCES (Past Simple, Continuous & Connectors)
Ask for a detailed past narration in ${lang.name}:
- EN: "Now, think about a memorable experience, a past trip, or a challenging project you had. Could you describe what happened, what obstacles you faced, and how you handled them?"
- IT: "Ora pensa a un'esperienza memorabile, a un viaggio passato o a un progetto impegnativo. Potresti descrivere cosa è successo, quali difficoltà hai affrontato e come le hai gestite?"
* Listen for: Regular/irregular past verbs, time prepositions, narrative connectors (e.g. 'although', 'because', 'after that').
* If they struggle with past tenses: Likely A1 or A2.
* If they narrate naturally: Proceed to Tier 3.

## TIER 3: SITUATIONAL PROBLEM-SOLVING & INTERACTION (Modals & Conditionals)
Present a realistic unexpected challenge in ${lang.name}:
- EN: "Let's imagine you travel abroad and arrive at your hotel or the airport, but they tell you your reservation was cancelled by error and there are no available rooms or flights. What would you say to the manager to negotiate a practical solution?"
- IT: "Immagina di viaggiare all'estero e arrivare in hotel o in aeroporto, ma ti dicono che la prenotazione è stata cancellata per errore e non ci sono camere o voli disponibili. Cosa diresti al responsabile per trovare una soluzione?"
* Listen for: Polite requests (e.g. 'could you', 'I would appreciate'), conditional forms ('if... could you please'), negotiation skills.
* If they handle this effectively with clear explanations: At least B1. Proceed to Tier 4.

## TIER 4: CRITICAL ANALYSIS & ABSTRACT OPINION (B2 / C1 Proficiency)
Ask a thought-provoking analytical question in ${lang.name}:
- EN: "Looking ahead, how do you think artificial intelligence and automation will transform society and human jobs over the next decade? Do you view it more as an opportunity or a threat, and why?"
- IT: "Guardando al futuro, come pensi che l'intelligenza artificiale e l'automazione trasformeranno la società e il lavoro nei prossimi dieci anni? Lo vedi più come un'opportunità o una minaccia, e perché?"
* Listen for: Nuanced vocabulary, abstract discourse markers ('furthermore', 'from my perspective', 'on the other hand'), complex grammar (mixed conditionals, passive forms, idioms).

## OPTIONAL FOLLOW-UP QUESTION:
If you need to distinguish between B1 vs B2, or B2 vs C1, ask a follow-up probing their reasoning:
- EN: "That is an intriguing point you made about [reference student's idea]. How would you respond to someone who strongly disagrees with that?"
- IT: "È un punto interessante quello che hai menzionato su [idea]. Cosa risponderesti a qualcuno che non è d'accordo?"

# HOW TO CONCLUDE (MANDATORY SPEECH SEQUENCE)
- Once you have evaluated across these tiers (typically 4 to 6 student responses):
- STEP 1 (SPOKEN AUDIO FIRST IN SPANISH):
  Say aloud warmly in Spanish:
  "Muchas gracias por realizar este diagnóstico exhaustivo, ${name}. En un momento sabremos tu nivel oficial..."
- STEP 2 (TOOL CALL):
  Call report_placement_result with:
  * level: 'zero' | 'A1' | 'A2' | 'B1' | 'B2' | 'C1'
  * levelTitle: e.g. "🌱 Desde cero (A0)", "A1 · Principiante", "A2 · Básico", "B1 · Intermedio", "B2 · Intermedio alto", "C1 · Avanzado"
  * rationale: Thorough, professional justification in Spanish (30-50 words) detailing why this CEFR level fits their demonstrated grammar, vocabulary, and conversational fluency.
  * strengths: Array of 2-3 specific observed strengths.
  * suggestions: Array of 2-3 actionable grammar/vocabulary topics to target in upcoming classes.
- STEP 3 (SPOKEN CONCLUSION IN SPANISH):
  Immediately announce their result aloud warmly in Spanish:
  "Tras evaluar tu vocabulario, manejo de tiempos verbales y comprensión, tu nivel oficial es [levelTitle]. He configurado tu plan de estudios en tu perfil para que todas tus clases y ejercicios se adapten con precisión a este nivel. ¡Excelente trabajo y nos vemos en tu primera clase!"
- After this closing sentence, stop speaking.

# TONE & DEMEANOR
Professional, rigorous yet motivating academic examiner. Speak naturally in audio format (no markdown or bullet points in spoken output).`;
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

/**
 * CATÁLOGO DE CLASES ESTRUCTURADAS DEL INSTRUCTOR POR NIVEL (PLAN DE ESTUDIOS)
 */
export const LEVEL_LESSONS = {
  zero: [
    {
      id: 'zero_1',
      num: 1,
      title: 'Saludos, cortesía y primer contacto',
      desc: 'Aprende a saludar, dar las gracias y responder cómo estás sin miedo.',
      phrases: ['Hello / Hi', 'Good morning / afternoon', 'Please & Thank you', 'How are you? - Good!'],
      goal: 'Aprender a saludar, responder cómo estás y usar fórmulas de cortesía esenciales.'
    },
    {
      id: 'zero_2',
      num: 2,
      title: 'Presentación personal y de dónde eres',
      desc: 'Aprende a decir tu nombre, de qué país eres y dar una bienvenida cordial.',
      phrases: ['My name is...', 'I am from Peru', 'Nice to meet you', 'And you?'],
      goal: 'Presentarte con tu nombre y país de origen con pronunciación clara.'
    },
    {
      id: 'zero_3',
      num: 3,
      title: 'Números (1-20), colores y objetos cotidianos',
      desc: 'Cuenta del 1 al 20 e identifica objetos comunes de tu entorno.',
      phrases: ['One, two, three...', 'What is this?', 'It is a book / a phone', 'Red, blue, black'],
      goal: 'Decir números básicos y nombrar 3 a 5 objetos cotidianos.'
    },
    {
      id: 'zero_4',
      num: 4,
      title: 'Frases de supervivencia en clase',
      desc: 'Aprende a pedir que repitan, decir que no entendiste y preguntar cómo se dice algo.',
      phrases: ['I do not understand', 'Can you repeat please?', 'How do you say... in English?', 'Slower please'],
      goal: 'Manejar las frases clave de supervivencia para comunicarte en cualquier clase.'
    }
  ],
  A1: [
    {
      id: 'A1_1',
      num: 1,
      title: 'Mi rutina diaria y horarios',
      desc: 'Describe tus actividades desde que despiertas hasta que te acuestas usando horas.',
      phrases: ['I wake up at 7 AM', 'I have breakfast', 'I start work at 9', 'In the evening I relax'],
      goal: 'Narrar tu día típico con verbos de acción y horas en presente simple.'
    },
    {
      id: 'A1_2',
      num: 2,
      title: 'Mi familia, amigos y profesiones',
      desc: 'Describe a tus familiares, amigos y qué profesiones tienen.',
      phrases: ['This is my brother', 'He is an engineer', 'She works at a hospital', 'They are friendly'],
      goal: 'Hablar de terceras personas (He/She) usando adjetivos y profesiones.'
    },
    {
      id: 'A1_3',
      num: 3,
      title: 'En el café o restaurante y compras',
      desc: 'Pide comida, bebidas y pregunta precios con naturalidad.',
      phrases: ['I would like a coffee, please', 'How much is this?', 'Can I have the bill?', 'Here you go'],
      goal: 'Realizar un pedido de comida y pagar una cuenta básica.'
    },
    {
      id: 'A1_4',
      num: 4,
      title: 'Gustos, aficiones y tiempo libre',
      desc: 'Expresa qué actividades te encantan, cuáles te gustan y cuáles no toleras.',
      phrases: ['I like playing soccer', 'I love listening to music', 'I do not like waking up early', 'My favorite hobby is...'],
      goal: 'Expresar preferencias y pasatiempos con fluidez.'
    }
  ],
  A2: [
    {
      id: 'A2_1',
      num: 1,
      title: 'Mi fin de semana y anécdotas pasadas',
      desc: 'Cuenta qué hiciste el fin de semana pasado usando verbos en pasado simple.',
      phrases: ['Last weekend I went to...', 'I visited my family', 'We ate delicious food', 'It was amazing'],
      goal: 'Usar el pasado simple (regular e irregular) para relatar eventos recientes.'
    },
    {
      id: 'A2_2',
      num: 2,
      title: 'Viajes, aeropuerto y hotel',
      desc: 'Regístrate en un hotel, ubica tu puerta de embarque y pide indicaciones.',
      phrases: ['I have a reservation under...', 'Where is gate 5?', 'Is breakfast included?', 'Could you call a taxi?'],
      goal: 'Desenvolverte en situaciones típicas de aeropuerto y alojamiento.'
    },
    {
      id: 'A2_3',
      num: 3,
      title: 'Salud y en la farmacia',
      desc: 'Explica síntomas comunes de salud y pide recomendaciones en una farmacia.',
      phrases: ['I have a headache and a sore throat', 'I feel dizzy', 'What medicine should I take?', 'How often?'],
      goal: 'Describir malestares físicos y comprender instrucciones médicas básicas.'
    },
    {
      id: 'A2_4',
      num: 4,
      title: 'Comparaciones y planes a futuro',
      desc: 'Compara ciudades, precios o productos y cuenta tus planes para el próximo mes.',
      phrases: ['This city is bigger than...', 'It is more expensive', 'Next month I am going to travel', 'I hope to...'],
      goal: 'Hacer comparaciones y expresar intenciones futuras con going to.'
    }
  ],
  B1: [
    {
      id: 'B1_1',
      num: 1,
      title: 'Experiencias de vida y anécdotas memorables',
      desc: 'Narra experiencias trascendentes conectando pasado simple y present perfect.',
      phrases: ['I have worked here for three years', 'Once, while I was traveling...', 'It changed my perspective', 'Ever since then...'],
      goal: 'Diferenciar con naturalidad acciones concluidas y experiencias acumuladas.'
    },
    {
      id: 'B1_2',
      num: 2,
      title: 'Reclamos y resolución de imprevistos',
      desc: 'Resuelve un problema con un vuelo cancelado, habitación equivocada o compra defectuosa.',
      phrases: ['I am afraid there has been a mistake', 'My luggage hasn’t arrived yet', 'Could you look into this?', 'I would appreciate a solution'],
      goal: 'Negociar una solución educada y firme ante un servicio deficiente.'
    },
    {
      id: 'B1_3',
      num: 3,
      title: 'Trayectoria profesional y proyectos',
      desc: 'Explica tus responsabilidades, cómo superaste un desafío y logros de equipo.',
      phrases: ['In my current role, I manage...', 'One major obstacle was...', 'We succeeded by collaborating', 'The outcome was positive'],
      goal: 'Describir metas, procesos y resultados en un contexto profesional.'
    },
    {
      id: 'B1_4',
      num: 4,
      title: 'Consejos, hipótesis y segundo condicional',
      desc: 'Plantea situaciones hipotéticas y brinda recomendaciones fundamentadas.',
      phrases: ['If I had the chance, I would...', 'You ought to consider...', 'What would you do if...?', 'From my experience...'],
      goal: 'Usar el segundo condicional para reflexionar sobre escenarios imaginarios.'
    }
  ],
  B2: [
    {
      id: 'B2_1',
      num: 1,
      title: 'Entrevista laboral por competencias (Método STAR)',
      desc: 'Estructura respuestas de alto impacto: Situación, Tarea, Acción y Resultado.',
      phrases: ['In that situation, our priority was...', 'My responsibility was to coordinate...', 'I took the initiative to...', 'As a result, we achieved...'],
      goal: 'Articular respuestas profesionales convincentes y bien estructuradas.'
    },
    {
      id: 'B2_2',
      num: 2,
      title: 'Negociación comercial y objeciones',
      desc: 'Defiende tu propuesta, analiza contraofertas y cierra acuerdos comerciales.',
      phrases: ['We are prepared to meet your terms provided that...', 'From our standpoint...', 'Would you consider compromising on...?', 'Let’s seal the deal'],
      goal: 'Manejar objeciones con diplomacia y lenguaje persuasivo.'
    },
    {
      id: 'B2_3',
      num: 3,
      title: 'Debate: Inteligencia Artificial y Sociedad',
      desc: 'Argumenta sobre el impacto de la automatización en el empleo y la ética.',
      phrases: ['On the one hand... whereas on the other hand...', 'It poses significant challenges', 'Furthermore, research indicates...', 'I strongly maintain that...'],
      goal: 'Defender posturas complejas usando conectores de discurso formales.'
    },
    {
      id: 'B2_4',
      num: 4,
      title: 'Deducciones pasadas y situaciones retrospectivas',
      desc: 'Analiza causas y consecuencias de decisiones pasadas con condicionales mixtos.',
      phrases: ['They must have overlooked the risks', 'If we had acted sooner, we could have avoided...', 'It might have been different if...'],
      goal: 'Formular hipótesis retrospectivas precisas con modales perfectos.'
    }
  ],
  C1: [
    {
      id: 'C1_1',
      num: 1,
      title: 'Liderazgo ejecutivo y oratoria persuasiva',
      desc: 'Comunica una visión estratégica con recursos retóricos e inversión enfática.',
      phrases: ['Rarely do we witness such paradigm shifts...', 'Not only must we adapt, but we should also pioneer...', 'The underlying imperative is...'],
      goal: 'Inspirar y persuadir con elegancia discursiva y entonación de orador.'
    },
    {
      id: 'C1_2',
      num: 2,
      title: 'Negociación estratégica internacional y diplomacia',
      desc: 'Aborda cláusulas contractuales sensibles y mitigación de riesgos globales.',
      phrases: ['It is paramount that all contingencies be accounted for', 'Notwithstanding the preliminary consensus...', 'To foster reciprocal goodwill...'],
      goal: 'Manejar registros formales sofisticados y cláusulas de alta precisión.'
    },
    {
      id: 'C1_3',
      num: 3,
      title: 'Modismos culturales, ironía y colocaciones nativas',
      desc: 'Domina frases idiomáticas, dobles sentidos y el humor sutil del idioma nativo.',
      phrases: ['To play devil’s advocate', 'Cut to the chase', 'A double-edged sword', 'Take it with a grain of salt'],
      goal: 'Integrar expresiones idiomáticas con naturalidad y fluidez nativa.'
    }
  ]
};

/**
 * Genera el prompt oficial para el MODO INSTRUCTOR DE CLASE según el plan de estudio.
 */
export function buildLessonPrompt(opts) {
  const lang = LANGUAGES[opts.language || 'en'];
  const name = opts.studentName ? opts.studentName.trim() : 'alumno';
  const level = opts.level || 'zero';
  const lesson = opts.lesson;
  const isZero = level === 'zero';

  const pedagogyGuidelines = isZero
    ? `CLASS METHODOLOGY: 100% BILINGUAL GUIDED INSTRUCTION (Spanish + ${lang.name})
- The student is at LEVEL 0 (Complete beginner).
- SPANISH IS YOUR PRIMARY LANGUAGE OF EXPLANATION AND COMFORT.
- Introduce ONE single phrase or word in ${lang.name} at a time.
- Say it slowly, explain what it means in Spanish, and ask the student to repeat in Spanish (e.g. "A ver ${name}, repite conmigo: '${lesson.phrases[0]}'").
- Celebrate their repetition in Spanish ("¡Excelente pronunciación! Muy bien.").
- If they speak Spanish, that is completely welcome. Guide them kindly.`
    : `CLASS METHODOLOGY: GUIDED PEDAGOGICAL LESSON
- The student is at level ${level}.
- Teach the class focusing on the learning objective: "${lesson.goal}".
- Speak clearly in ${lang.name}, and give short explanations or encouragement in Spanish when helpful.
- Model the key phrases, check their pronunciation, and have them construct sentences using them.`;

  return `You are ${lang.teacherName}, an inspiring, patient and pedagogical ${lang.name} teacher conducting an OFFICIAL STRUCTURED CLASS for ${name}.

# CLASS IDENTIFICATION
- LEVEL: ${getLevelTitle(level)} (${level})
- LESSON NUMBER: Clase ${lesson.num}
- LESSON TITLE: "${lesson.title}"
- DESCRIPTION: "${lesson.desc}"
- LEARNING GOAL: "${lesson.goal}"
- KEY PHRASES & VOCABULARY TO TEACH:
  ${lesson.phrases.map((p, i) => `${i + 1}. "${p}"`).join('\n  ')}

# ${pedagogyGuidelines}

# 4-STAGE LESSON STRUCTURE

1. WARM WELCOME & GOAL (1 TURN):
   Greet ${name} warmly and state clearly what you will learn today:
   "¡Hola ${name}! Bienvenido/a a tu Clase ${lesson.num}: '${lesson.title}'. Hoy vamos a aprender y practicar cómo ${lesson.goal.toLowerCase()}. ¿Estás listo/a para comenzar?"
   Wait for their response.

2. PRESENTATION & GUIDED REPETITION (2-3 TURNS):
   - Present the first 1 or 2 key phrases from today's lesson.
   - Explain what they mean and when to use them.
   - Model the exact pronunciation slowly and clearly.
   - Ask ${name} to repeat the phrase aloud.
   - When they repeat, give immediate positive feedback and correct any small pronunciation detail.

3. INTERACTIVE MINI-DIALOGUE / PRACTICE (2-3 TURNS):
   - Create a realistic mini-scenario where ${name} must use the phrases they just learned in this class.
   - Ask them an open question or invite them to role-play that specific situation.
   - Praise their sentence construction and provide natural corrections.

4. WRAP-UP & SUMMARY (FINAL TURN):
   - Congratulate ${name} for completing Clase ${lesson.num}.
   - Briefly summarize in Spanish the key phrases they mastered today.
   - Remind them that they can practice this class again anytime or take the next class, and when they feel ready, they can take the Level-Up Exam to advance!

# STYLE & TONE
Encouraging, pedagogical, structured and warm. Spoken audio format only (do not use markdown, asterisks or bullet points in spoken output).`;
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

