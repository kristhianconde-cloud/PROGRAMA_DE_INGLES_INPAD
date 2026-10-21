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
 * CATÁLOGO DE CLASES ESTRUCTURADAS DEL INSTRUCTOR POR NIVEL (PLAN DE ESTUDIOS: 15 CLASES POR NIVEL)
 * Diseñadas para sesiones completas de al menos 10 minutos con metodología activa.
 */
export const LEVEL_LESSONS = {
  zero: [
    {
      id: 'zero_1',
      num: 1,
      title: 'Saludos, cortesía y primer contacto',
      desc: 'Aprende a saludar, responder cómo estás y dar las gracias sin miedo.',
      phrases: ['Hello / Hi', 'Good morning / afternoon', 'Please & Thank you', 'How are you? - I am fine!'],
      goal: 'Saludar con naturalidad, responder cómo te encuentras y usar fórmulas de cortesía esenciales.'
    },
    {
      id: 'zero_2',
      num: 2,
      title: 'Presentación personal y de dónde eres',
      desc: 'Aprende a decir tu nombre, de qué país eres y dar una bienvenida cordial.',
      phrases: ['My name is...', 'I am from Peru', 'Nice to meet you', 'Where are you from?'],
      goal: 'Presentarte con tu nombre, nacionalidad y origen con pronunciación clara.'
    },
    {
      id: 'zero_3',
      num: 3,
      title: 'Números del 1 al 20 y decir tu edad',
      desc: 'Cuenta del 1 al 20, di tu número de teléfono y menciona cuántos años tienes.',
      phrases: ['One, two, three...', 'I am ... years old', 'How old are you?', 'My number is...'],
      goal: 'Dominar la pronunciación de los números del 1 al 20 y decir tu edad.'
    },
    {
      id: 'zero_4',
      num: 4,
      title: 'Colores y descripciones visuales simples',
      desc: 'Identifica los colores principales y describe objetos de forma sencilla.',
      phrases: ['It is red / blue / black', 'What color is it?', 'A white car', 'My favorite color is green'],
      goal: 'Reconocer los colores básicos y describir visualmente cosas a tu alrededor.'
    },
    {
      id: 'zero_5',
      num: 5,
      title: 'Frases de supervivencia en clase',
      desc: 'Aprende a pedir que repitan, decir que no entendiste y pedir ayuda sin vergüenza.',
      phrases: ['I do not understand', 'Can you repeat, please?', 'How do you say... in English?', 'More slowly, please'],
      goal: 'Manejar con soltura las 4 frases indispensables para pedir auxilio en cualquier clase.'
    },
    {
      id: 'zero_6',
      num: 6,
      title: 'Mi familia cercana y seres queridos',
      desc: 'Nombra a los miembros principales de tu familia: padres, hermanos e hijos.',
      phrases: ['This is my mother / father', 'I have two brothers', 'My sister is happy', 'I love my family'],
      goal: 'Presentar a tu familia directa con oraciones cortas y afectuosas.'
    },
    {
      id: 'zero_7',
      num: 7,
      title: 'Objetos cotidianos y del hogar',
      desc: 'Nombra cosas esenciales que usas todos los días en tu casa o bolsillo.',
      phrases: ['This is a phone / book', 'Where are my keys?', 'The table is clean', 'Here is my computer'],
      goal: 'Identificar y nombrar al menos 5 objetos cotidianos del entorno.'
    },
    {
      id: 'zero_8',
      num: 8,
      title: 'Días de la semana y momentos del día',
      desc: 'Ubícate en el tiempo: de lunes a domingo, mañana, tarde y noche.',
      phrases: ['Today is Monday', 'On Friday I relax', 'In the morning / at night', 'Have a nice weekend!'],
      goal: 'Decir qué día es hoy y ubicar actividades en la mañana, tarde o noche.'
    },
    {
      id: 'zero_9',
      num: 9,
      title: 'Números del 20 al 100 y decir la hora',
      desc: 'Aprende las decenas (twenty, thirty...) y pregunta qué hora es.',
      phrases: ['Twenty, thirty, forty...', 'What time is it?', 'It is three o\'clock', 'It costs fifty dollars'],
      goal: 'Preguntar y responder la hora en punto y manejar cantidades del 20 al 100.'
    },
    {
      id: 'zero_10',
      num: 10,
      title: 'Comidas y bebidas esenciales',
      desc: 'Nombra alimentos básicos para pedir un desayuno o almuerzo sencillo.',
      phrases: ['Water, please', 'I like coffee and tea', 'Bread and cheese', 'Delicious apple / fruit'],
      goal: 'Expresar qué te gusta comer o beber y pedir alimentos básicos.'
    },
    {
      id: 'zero_11',
      num: 11,
      title: 'Emociones y estados de ánimo',
      desc: 'Expresa cómo te sientes física y emocionalmente hoy.',
      phrases: ['I am happy today', 'I am very tired', 'Are you hungry?', 'I feel great!'],
      goal: 'Comunicar estados de ánimo cotidianos (alegría, cansancio, apetito).'
    },
    {
      id: 'zero_12',
      num: 12,
      title: 'Lugares básicos de la ciudad',
      desc: 'Nombra los puntos esenciales de una ciudad: banco, hospital, parque, escuela.',
      phrases: ['Where is the park?', 'The bank is near', 'I go to the supermarket', 'At school / hospital'],
      goal: 'Reconocer e indicar los 5 lugares urbanos más importantes.'
    },
    {
      id: 'zero_13',
      num: 13,
      title: 'Ropa y prendas de vestir cotidianas',
      desc: 'Aprende a nombrar lo que llevas puesto: camisa, pantalón, zapatos y chaqueta.',
      phrases: ['I wear a blue shirt', 'My shoes are black', 'I need a jacket', 'It is warm today'],
      goal: 'Describir qué ropa tienes puesta usando colores básicos.'
    },
    {
      id: 'zero_14',
      num: 14,
      title: 'Preguntas clave: What, Where, Who y How',
      desc: 'Aprende las 4 palabras mágicas para hacer cualquier pregunta básica.',
      phrases: ['What is your name?', 'Where is the bathroom?', 'Who is she?', 'How are you doing?'],
      goal: 'Formular preguntas fundamentales para interactuar en el mundo real.'
    },
    {
      id: 'zero_15',
      num: 15,
      title: 'Repaso integrador: Mi primera conversación completa',
      desc: 'Pon todo en práctica: saluda, preséntate, habla de tu día y despídete con orgullo.',
      phrases: ['Hello, nice to meet you!', 'I am from Peru and I am fine', 'I like learning English', 'See you soon!'],
      goal: 'Sostener una conversación guiada de 10 minutos integrando todo lo aprendido en Nivel 0.'
    }
  ],

  A1: [
    {
      id: 'A1_1',
      num: 1,
      title: 'Mi rutina diaria y horarios habituales',
      desc: 'Describe tus actividades desde que despiertas hasta que te acuestas usando horas.',
      phrases: ['I wake up at 7 AM', 'I have breakfast with coffee', 'I start work at 9 o\'clock', 'In the evening I relax'],
      goal: 'Narrar tu día típico con verbos de acción y horas precisas en presente simple.'
    },
    {
      id: 'A1_2',
      num: 2,
      title: 'Mi familia, amigos y profesiones',
      desc: 'Describe a tus familiares, amigos y a qué se dedican laboralmente.',
      phrases: ['This is my brother, he is an engineer', 'She works at a hospital', 'They are very friendly', 'What do you do?'],
      goal: 'Hablar de terceras personas (He/She) usando adjetivos y profesiones cotidianas.'
    },
    {
      id: 'A1_3',
      num: 3,
      title: 'En el café o restaurante: pedir y pagar',
      desc: 'Pide comida, bebidas, pregunta precios y solicita la cuenta con naturalidad.',
      phrases: ['I would like a coffee, please', 'How much does this cost?', 'Can I have the bill?', 'Everything was delicious'],
      goal: 'Realizar un pedido completo de comida y pagar en un restaurante o cafetería.'
    },
    {
      id: 'A1_4',
      num: 4,
      title: 'Gustos, aficiones y tiempo libre',
      desc: 'Expresa qué actividades te apasionan, cuáles disfrutas y cuáles no toleras.',
      phrases: ['I love listening to music', 'I enjoy playing soccer', 'I don\'t like cooking', 'My favorite hobby is...'],
      goal: 'Expresar preferencias, pasatiempos y opiniones sobre actividades de ocio.'
    },
    {
      id: 'A1_5',
      num: 5,
      title: 'Describir mi casa, habitaciones y muebles',
      desc: 'Explica cómo es tu hogar, cuántas habitaciones tiene y qué muebles hay.',
      phrases: ['There is a big sofa in the living room', 'My apartment has two bedrooms', 'The kitchen is modern', 'I like my balcony'],
      goal: 'Describir tu vivienda usando There is / There are y preposiciones de lugar.'
    },
    {
      id: 'A1_6',
      num: 6,
      title: 'El clima, las estaciones y cómo vestir',
      desc: 'Habla sobre el tiempo atmosférico de hoy y la ropa adecuada para el clima.',
      phrases: ['It is sunny and hot today', 'It is raining outside, take an umbrella', 'Winter is cold', 'I am wearing a sweater'],
      goal: 'Comentar el estado del tiempo y justificar la ropa que llevas puesta.'
    },
    {
      id: 'A1_7',
      num: 7,
      title: 'De compras en una tienda de ropa',
      desc: 'Pregunta por tallas, pide probarte prendas y decide qué comprar.',
      phrases: ['Do you have this in medium size?', 'Can I try this shirt on?', 'Where are the fitting rooms?', 'I will take it'],
      goal: 'Interactuar con el vendedor en una tienda de ropa y tomar decisiones de compra.'
    },
    {
      id: 'A1_8',
      num: 8,
      title: 'Transporte público y compra de boletos',
      desc: 'Múevete en metro, autobús o taxi y compra billetes ida y vuelta.',
      phrases: ['One round-trip ticket to downtown, please', 'Which bus goes to the center?', 'How long does it take?', 'Take me to this address'],
      goal: 'Adquirir pasajes de transporte público y solicitar paradas al conductor.'
    },
    {
      id: 'A1_9',
      num: 9,
      title: 'Pedir y dar direcciones en la calle',
      desc: 'Oriéntate en una ciudad desconocida siguiendo indicaciones espaciales.',
      phrases: ['Excuse me, where is the nearest bank?', 'Go straight for two blocks', 'Turn left at the traffic light', 'It is on your right'],
      goal: 'Solicitar y comprender instrucciones para llegar a un punto específico.'
    },
    {
      id: 'A1_10',
      num: 10,
      title: 'Describir a las personas: físico y personalidad',
      desc: 'Describe cómo luce alguien (estatura, cabello, ojos) y cómo es su carácter.',
      phrases: ['He is tall with dark hair', 'She has brown eyes and a warm smile', 'He is very polite and hardworking', 'She is funny and smart'],
      goal: 'Describir los rasgos físicos y cualidades de personalidad de un amigo o colega.'
    },
    {
      id: 'A1_11',
      num: 11,
      title: 'Planes para el fin de semana y ocio',
      desc: 'Comenta tus planes e invita a alguien a salir o hacer una actividad juntos.',
      phrases: ['This weekend I am going to watch a movie', 'Would you like to join me?', 'Let\'s meet at 6 PM', 'Sounds like a great plan!'],
      goal: 'Hacer invitaciones, aceptar planes y coordinar un encuentro de fin de semana.'
    },
    {
      id: 'A1_12',
      num: 12,
      title: 'En el supermercado y lista de compras',
      desc: 'Pide cantidades y pesos de frutas, verduras, lácteos y carnes.',
      phrases: ['A kilo of apples, please', 'Where can I find milk and eggs?', 'Do you have fresh bread?', 'Is this on sale?'],
      goal: 'Manejar vocabulario de alimentos y solicitar cantidades exactas en el supermercado.'
    },
    {
      id: 'A1_13',
      num: 13,
      title: 'Habilidades, talentos y lo que puedes hacer',
      desc: 'Habla sobre lo que sabes hacer usando el verbo modal Can y Can\'t.',
      phrases: ['I can speak Spanish and a little English', 'Can you drive a car?', 'I can swim very well', 'I cannot play the guitar yet'],
      goal: 'Expresar habilidades personales y preguntar a otros qué son capaces de hacer.'
    },
    {
      id: 'A1_14',
      num: 14,
      title: 'Redactar y responder mensajes y correos breves',
      desc: 'Aprende a redactar mensajes informativos y de cortesía profesional simple.',
      phrases: ['Dear Mr. Smith / Hi Emma', 'I am writing to confirm our meeting', 'Please let me know if you are free', 'Best regards'],
      goal: 'Estructurar un mensaje o correo electrónico sencillo con apertura y despedida formal.'
    },
    {
      id: 'A1_15',
      num: 15,
      title: 'Repaso integrador: Un día en la vida en el extranjero',
      desc: 'Simula un día completo: despiertas, pides transporte, compras y conversas con amigos.',
      phrases: ['I wake up early and take the bus', 'I order lunch at a cafe', 'I meet my friends after work', 'It was a wonderful day'],
      goal: 'Consolidar todas las competencias de Nivel A1 en un diálogo situacional continuo.'
    }
  ],

  A2: [
    {
      id: 'A2_1',
      num: 1,
      title: 'Mi fin de semana y anécdotas pasadas (Past Simple)',
      desc: 'Cuenta qué hiciste el fin de semana pasado usando verbos regulares e irregulares.',
      phrases: ['Last weekend I visited my grandparents', 'We ate delicious homemade food', 'I watched an exciting movie', 'Did you have a good time?'],
      goal: 'Utilizar el pasado simple afirmativo, negativo e interrogativo con fluidez.'
    },
    {
      id: 'A2_2',
      num: 2,
      title: 'En el aeropuerto: check-in y puerta de embarque',
      desc: 'Desenvuélvete en el mostrador de facturación, entrega de maletas y control de seguridad.',
      phrases: ['Here is my passport and boarding pass', 'I only have one carry-on bag', 'Where is gate 14?', 'Is the flight on time?'],
      goal: 'Manejar la comunicación clave en el aeropuerto sin contratiempos.'
    },
    {
      id: 'A2_3',
      num: 3,
      title: 'Hospedarse en un hotel y solicitar servicios',
      desc: 'Haz el check-in en el hotel, pregunta por el wifi, desayuno y pide toallas extra.',
      phrases: ['I have a reservation under the name of...', 'What time is breakfast served?', 'Could you send extra towels?', 'The air conditioner is not working'],
      goal: 'Gestionar tu estadía en un hotel y reportar pequeños inconvenientes en la habitación.'
    },
    {
      id: 'A2_4',
      num: 4,
      title: 'Salud, síntomas comunes y en la farmacia',
      desc: 'Explica malestares físicos habituales y pide medicamentos adecuados.',
      phrases: ['I have had a bad headache and a cough', 'I feel dizzy and feverish', 'What medicine do you recommend?', 'How many times a day should I take this?'],
      goal: 'Describir síntomas de salud y comprender instrucciones de posología en la farmacia.'
    },
    {
      id: 'A2_5',
      num: 5,
      title: 'Comparaciones: ciudades, productos y estilos de vida',
      desc: 'Compara dos ciudades o productos usando adjetivos comparativos y superlativos.',
      phrases: ['Lima is much bigger than Cusco', 'Public transport here is more reliable', 'This laptop is the best option', 'It is cheaper than that one'],
      goal: 'Construir comparaciones equilibradas fundamentando ventajas y desventajas.'
    },
    {
      id: 'A2_6',
      num: 6,
      title: 'Planes e intenciones futuras con Going to y Will',
      desc: 'Diferencia planes ya decididos (going to) de decisiones espontáneas o promesas (will).',
      phrases: ['Next month I am going to start a new course', 'We are going to travel to Europe', 'Don\'t worry, I will help you', 'I think it will be great'],
      goal: 'Expresar intenciones futuras planificadas y predicciones con seguridad.'
    },
    {
      id: 'A2_7',
      num: 7,
      title: 'Recuerdos de la infancia y costumbres pasadas (Used to)',
      desc: 'Habla sobre las cosas que solías hacer de niño y cómo ha cambiado tu vida.',
      phrases: ['When I was a child, I used to play outside all day', 'I used to live in a small town', 'I didn\'t use to like vegetables', 'Things were different back then'],
      goal: 'Relatar hábitos y costumbres de tu niñez con la estructura Used to.'
    },
    {
      id: 'A2_8',
      num: 8,
      title: 'En el restaurante formal: quejas amables y sugerencias',
      desc: 'Pide cambios en tu plato de forma educada o solicita la recomendación del chef.',
      phrases: ['Excuse me, my soup is a bit cold', 'Could we get the dressing on the side?', 'What is the specialty of the house?', 'Could you bring us the dessert menu?'],
      goal: 'Comunicar preferencias gastronómicas y realizar quejas educadas en un restaurante.'
    },
    {
      id: 'A2_9',
      num: 9,
      title: 'Alquiler de vivienda y trato con el propietario',
      desc: 'Pregunta por condiciones de alquiler, depósito en garantía y normas del edificio.',
      phrases: ['Is the deposit refundable?', 'Are utilities included in the monthly rent?', 'Are pets allowed in the building?', 'When is the apartment available?'],
      goal: 'Hacer preguntas indispensables para alquilar una habitación o departamento.'
    },
    {
      id: 'A2_10',
      num: 10,
      title: 'Dar instrucciones y recetas paso a paso',
      desc: 'Explica cómo preparar un plato típico o usar una aplicación mediante conectores de secuencia.',
      phrases: ['First, chop the onions and garlic', 'Next, heat the pan with some oil', 'Then, stir constantly for five minutes', 'Finally, serve it hot with rice'],
      goal: 'Utilizar conectores de orden (First, Next, Then, After that, Finally) con fluidez.'
    },
    {
      id: 'A2_11',
      num: 11,
      title: 'Experiencias de viaje memorables y turismo',
      desc: 'Narra un viaje que te haya marcado, lugares que visitaste y personas que conociste.',
      phrases: ['Two years ago I traveled to the mountains', 'The view was absolutely breathtaking', 'The local people were very welcoming', 'I will never forget that experience'],
      goal: 'Conectar vivencias de viaje expresando emociones y recuerdos vívidos.'
    },
    {
      id: 'A2_12',
      num: 12,
      title: 'Entrevista de trabajo básica: experiencia y disponibilidad',
      desc: 'Responde preguntas iniciales sobre tus empleos anteriores y horario de trabajo.',
      phrases: ['I worked as a customer assistant for two years', 'I am responsible, punctual and organized', 'I am available to start immediately', 'I work well under pressure'],
      goal: 'Exponer tu experiencia laboral y cualidades de perfil en una entrevista inicial.'
    },
    {
      id: 'A2_13',
      num: 13,
      title: 'El medio ambiente, reciclaje y la naturaleza',
      desc: 'Habla sobre el cuidado del planeta, hábitos de reciclaje y animales.',
      phrases: ['We should reduce plastic waste', 'I always recycle glass and paper', 'Pollution is a major problem in big cities', 'Protecting wildlife is essential'],
      goal: 'Expresar opiniones básicas sobre ecología y hábitos de sostenibilidad.'
    },
    {
      id: 'A2_14',
      num: 14,
      title: 'Celebraciones, cumpleaños y tradiciones culturales',
      desc: 'Describe cómo celebras fechas especiales como cumpleaños, Navidad o Año Nuevo.',
      phrases: ['In my country, we celebrate with traditional music and dance', 'We gather with family for a big dinner', 'We exchange gifts at midnight', 'It is a time of joy'],
      goal: 'Explicar tradiciones y celebraciones culturales a personas de otros países.'
    },
    {
      id: 'A2_15',
      num: 15,
      title: 'Repaso integrador: Planificar un viaje soñado de inicio a fin',
      desc: 'Integra vuelos, hotel, actividades pasadas y futuras en un diálogo de 10 minutos.',
      phrases: ['We are planning our trip to Rome', 'We already booked our flight and hotel', 'We want to visit historic monuments', 'It will be an unforgettable adventure'],
      goal: 'Demostrar dominio integral de los tiempos presentes, pasados y futuros de Nivel A2.'
    }
  ],

  B1: [
    {
      id: 'B1_1',
      num: 1,
      title: 'Experiencias de vida: Present Perfect vs Past Simple',
      desc: 'Distingue con precisión acciones concluidas en el pasado de experiencias acumuladas.',
      phrases: ['I have worked in sales for five years', 'I lived abroad in 2021', 'Have you ever tried skydiving?', 'I haven\'t finished the report yet'],
      goal: 'Diferenciar cuándo usar el Present Perfect (experiencia) y el Past Simple (momento específico).'
    },
    {
      id: 'B1_2',
      num: 2,
      title: 'Reclamos y resolución de imprevistos con aerolíneas y hoteles',
      desc: 'Maneja situaciones conflictivas como pérdida de equipaje o cancelaciones con firmeza educada.',
      phrases: ['I am afraid there has been a serious misunderstanding', 'My luggage hasn\'t arrived on the carousel', 'Could you please look into this matter?', 'I expect adequate compensation'],
      goal: 'Defender tus derechos como cliente con argumentos educados y vocabulario formal.'
    },
    {
      id: 'B1_3',
      num: 3,
      title: 'Trayectoria profesional, roles y metas de carrera',
      desc: 'Explica en detalle tus responsabilidades clave, proyectos liderados y aspiraciones.',
      phrases: ['In my current role, I oversee project execution', 'One major milestone was increasing customer retention', 'I am eager to broaden my expertise', 'I excel at problem solving'],
      goal: 'Articular un discurso profesional convincente sobre tu desarrollo laboral.'
    },
    {
      id: 'B1_4',
      num: 4,
      title: 'Consejos, hipótesis y segundo condicional (If I were you...)',
      desc: 'Brinda recomendaciones empáticas y reflexiona sobre situaciones hipotéticas e imaginarias.',
      phrases: ['If I were in your shoes, I would reconsider that offer', 'What would you do if you won the lottery?', 'If we had more budget, we could expand', 'You ought to consult a specialist'],
      goal: 'Manejar el segundo condicional para reflexionar sobre escenarios hipotéticos y aconsejar.'
    },
    {
      id: 'B1_5',
      num: 5,
      title: 'Entrevista de trabajo: responder sobre fortalezas y debilidades',
      desc: 'Supera preguntas desafiantes demostrando autoconocimiento y capacidad de aprendizaje.',
      phrases: ['One of my greatest strengths is my resilience', 'An area I have been actively improving is delegation', 'I thrive in collaborative team environments', 'Could you describe the team culture?'],
      goal: 'Responder a preguntas de comportamiento laboral con madurez y elocuencia.'
    },
    {
      id: 'B1_6',
      num: 6,
      title: 'Opinión sobre noticias, redes sociales e impacto digital',
      desc: 'Debate sobre los beneficios y riesgos de la hiperconectividad y los medios de comunicación.',
      phrases: ['Social media has transformed how we communicate', 'On the positive side... however, on the downside...', 'Fake news is becoming increasingly pervasive', 'In my perspective, balance is key'],
      goal: 'Construir argumentos contrastando puntos de vista a favor y en contra.'
    },
    {
      id: 'B1_7',
      num: 7,
      title: 'Manejo del estrés, balance vida-trabajo y bienestar mental',
      desc: 'Conversa sobre la desconexión digital, el agotamiento profesional y hábitos saludables.',
      phrases: ['Maintaining a healthy work-life balance is crucial', 'Burnout is a real concern in modern workplaces', 'I set clear boundaries between work and personal time', 'Regular exercise helps clear my mind'],
      goal: 'Expresar ideas complejas sobre salud mental, productividad y estilo de vida.'
    },
    {
      id: 'B1_8',
      num: 8,
      title: 'Vida en el extranjero: choque cultural y adaptación',
      desc: 'Comenta los desafíos de vivir en otro país, costumbres diferentes y hacer amigos internacionales.',
      phrases: ['Adapting to a new culture requires an open mind', 'I initially experienced culture shock regarding meals', 'It takes time to build a solid network', 'The experience made me much more independent'],
      goal: 'Reflexionar sobre la diversidad cultural y el proceso de adaptación migratoria.'
    },
    {
      id: 'B1_9',
      num: 9,
      title: 'Expresar acuerdos y desacuerdos con diplomacia',
      desc: 'Debate sin ofender: formula objeciones con elegancia y busca puntos medios de consenso.',
      phrases: ['I see your point, but don\'t you think that...?', 'I respect your view, although I see it differently', 'Up to a point I agree, but we must consider...', 'We seem to be on the same page regarding...'],
      goal: 'Negociar posturas encontradas manteniendo una comunicación constructiva y asertiva.'
    },
    {
      id: 'B1_10',
      num: 10,
      title: 'Negociación cotidiana y cotización de servicios',
      desc: 'Pide presupuestos para remodelaciones, eventos o consultorías y negocia plazos de entrega.',
      phrases: ['Could you provide an itemized quote?', 'Is there any flexibility regarding the delivery date?', 'What guarantees or warranties are included?', 'If we commit today, can you offer a discount?'],
      goal: 'Negociar condiciones de contratos de servicios cotidianos de forma profesional.'
    },
    {
      id: 'B1_11',
      num: 11,
      title: 'Cine, literatura y análisis de argumentos',
      desc: 'Recomienda películas o libros analizando la trama, personajes y giros inesperados.',
      phrases: ['The plot revolves around an unexpected discovery', 'What struck me most was the character development', 'The ending caught me completely off guard', 'I highly recommend it because...'],
      goal: 'Elaborar reseñas críticas y fundamentar recomendaciones culturales.'
    },
    {
      id: 'B1_12',
      num: 12,
      title: 'Resolver malentendidos y disculpas profesionales',
      desc: 'Aclara una confusión en el trabajo por correo o llamada sin culpar a otros injustamente.',
      phrases: ['I wanted to clear up any confusion regarding our email', 'I sincerely apologize for the delay', 'Moving forward, let\'s implement a clearer protocol', 'Thank you for bringing this to my attention'],
      goal: 'Desactivar tensiones laborales y proponer soluciones correctivas con profesionalismo.'
    },
    {
      id: 'B1_13',
      num: 13,
      title: 'Consumo responsable y estilo de vida sostenible',
      desc: 'Debate sobre la economía circular, compras éticas y huella de carbono personal.',
      phrases: ['Fast fashion has a devastating environmental footprint', 'Consumers are demanding greater transparency', 'Supporting local businesses creates sustainable value', 'Small daily habits can make a noticeable difference'],
      goal: 'Argumentar sobre dilemas ecológicos contemporáneos con vocabulario temático rico.'
    },
    {
      id: 'B1_14',
      num: 14,
      title: 'Describir procesos técnicos y cambios tecnológicos',
      desc: 'Explica cómo funciona una herramienta digital o el impacto de la nube y la automatización.',
      phrases: ['The system automatically syncs data across platforms', 'Cloud computing eliminates the need for local servers', 'It streamlines everyday operations', 'Users need to undergo thorough onboarding'],
      goal: 'Explicar el funcionamiento de una herramienta o proceso técnico con claridad.'
    },
    {
      id: 'B1_15',
      num: 15,
      title: 'Conversación espontánea: Café virtual y debate de actualidad',
      desc: 'Sostén una charla fluida y natural de 10 minutos saltando de tema con total soltura.',
      phrases: ['Speaking of that, did you hear about...?', 'That reminds me of something similar', 'To be perfectly honest with you...', 'It was great catching up today!'],
      goal: 'Consolidar la fluidez conversacional espontánea para alcanzar el umbral de B2.'
    }
  ],

  B2: [
    {
      id: 'B2_1',
      num: 1,
      title: 'Entrevista laboral por competencias (Método STAR)',
      desc: 'Estructura respuestas de alto impacto: Situación, Tarea, Acción y Resultado cuantificable.',
      phrases: ['In that challenging situation, our priority was...', 'My assigned task was to restructure...', 'I took the initiative to streamline the workflow', 'As a direct result, revenue increased by 20%'],
      goal: 'Articular respuestas profesionales convincentes siguiendo el estándar internacional STAR.'
    },
    {
      id: 'B2_2',
      num: 2,
      title: 'Negociación comercial estratégica y manejo de objeciones',
      desc: 'Defiende tu propuesta de valor, analiza contraofertas y cierra acuerdos comerciales sólidos.',
      phrases: ['We are prepared to meet your terms provided that...', 'From our strategic standpoint...', 'Would you consider compromising on the payment schedule?', 'Let’s draft the preliminary agreement'],
      goal: 'Manejar objeciones comerciales con diplomacia y lenguaje persuasivo de alto nivel.'
    },
    {
      id: 'B2_3',
      num: 3,
      title: 'Debate formal: Inteligencia Artificial, ética y futuro laboral',
      desc: 'Argumenta sobre la automatización, privacidad de datos y regulación internacional.',
      phrases: ['On the one hand... whereas on the other hand...', 'It poses profound ethical dilemmas', 'Empirical research indicates a shift toward hybrid roles', 'We must establish rigorous regulatory guardrails'],
      goal: 'Defender posturas complejas usando conectores de discurso formales y léxico avanzado.'
    },
    {
      id: 'B2_4',
      num: 4,
      title: 'Hipótesis retrospectivas y condicionales mixtos',
      desc: 'Analiza causas y consecuencias de decisiones pasadas con modales perfectos.',
      phrases: ['If we had acted earlier, we wouldn\'t be facing this bottleneck now', 'They must have underestimated the initial risks', 'Could they have foreseen the market disruption?', 'Had we known the real costs...'],
      goal: 'Formular hipótesis retrospectivas precisas utilizando condicionales mixtos y modales pasados.'
    },
    {
      id: 'B2_5',
      num: 5,
      title: 'Liderazgo de equipos y resolución de conflictos internos',
      desc: 'Facilita la mediación entre dos áreas en desacuerdo y reorienta las metas comunes.',
      phrases: ['Let\'s focus on our overarching corporate objectives', 'I acknowledge both perspectives have merit', 'How can we align these conflicting priorities?', 'Accountability must be shared across departments'],
      goal: 'Mediar en tensiones organizacionales demostrando inteligencia emocional y liderazgo.'
    },
    {
      id: 'B2_6',
      num: 6,
      title: 'Presentación ejecutiva de un proyecto o pitch de negocios',
      desc: 'Capta la atención de inversores con una propuesta de valor sólida y datos de tracción.',
      phrases: ['The market opportunity we are targeting is valued at...', 'Our core competitive edge lies in...', 'To date, we have achieved steady month-over-month growth', 'We are seeking strategic capital to scale'],
      goal: 'Exponer un proyecto innovador cautivando a la audiencia con oratoria profesional.'
    },
    {
      id: 'B2_7',
      num: 7,
      title: 'Análisis crítico de datos, tendencias y proyecciones',
      desc: 'Interpreta gráficos financieros, fluctuaciones de mercado e indicadores de rendimiento.',
      phrases: ['The data clearly demonstrates an upward trajectory', 'There is a noticeable discrepancy between forecast and actuals', 'This metric indicates impending market saturation', 'We should extrapolate long-term trends cautiously'],
      goal: 'Explicar estadísticas, tendencias e insights analíticos con precisión técnica.'
    },
    {
      id: 'B2_8',
      num: 8,
      title: 'Argumentación persuasiva y oratoria frente a objeciones',
      desc: 'Rebate contraargumentos agresivos manteniendo la compostura y la claridad retórica.',
      phrases: ['I appreciate that objection; nonetheless, let me clarify...', 'Allow me to dismantle that assumption with tangible evidence', 'That may appear true on the surface, but deeper analysis reveals...', 'The bottom line remains unchanged'],
      goal: 'Persuadir a un interlocutor escéptico utilizando razonamiento lógico y hechos contrastados.'
    },
    {
      id: 'B2_9',
      num: 9,
      title: 'Diplomacia corporativa y redacción de acuerdos formales',
      desc: 'Redacta memorandos de entendimiento (MoU) y cláusulas de confidencialidad con elegancia.',
      phrases: ['Both parties mutually agree to uphold strict confidentiality', 'Subject to final regulatory approval...', 'This clause ensures reciprocal accountability', 'In the event of a dispute, arbitration shall take place in...'],
      goal: 'Manejar el registro formal escrito y verbal propio de los acuerdos interinstitucionales.'
    },
    {
      id: 'B2_10',
      num: 10,
      title: 'Manejo de crisis comunicacional en una empresa',
      desc: 'Actúa como portavoz ante una filtración de datos o defecto de producto ante la prensa.',
      phrases: ['We take full responsibility for rectifying this oversight', 'Our immediate focus is ensuring customer security', 'An independent audit is currently underway', 'We pledge complete transparency throughout this process'],
      goal: 'Gestionar una rueda de prensa de crisis protegiendo la reputación corporativa.'
    },
    {
      id: 'B2_11',
      num: 11,
      title: 'Modismos profesionales y lenguaje figurado avanzado',
      desc: 'Comprende y utiliza modismos del mundo de los negocios en reuniones de alto nivel.',
      phrases: ['Let\'s touch base offline regarding that proposal', 'We need to think outside the box to bypass this roadblock', 'It boils down to maximizing our bandwidth', 'Let\'s not get bogged down in the weeds'],
      goal: 'Integrar expresiones idiomáticas laborales con naturalidad nativa.'
    },
    {
      id: 'B2_12',
      num: 12,
      title: 'Debate sobre sostenibilidad y modelos de economía circular',
      desc: 'Analiza la viabilidad económica de la transición energética y los criterios ESG.',
      phrases: ['Integrating ESG metrics is no longer merely philanthropic', 'Short-term transition costs will yield long-term resilience', 'Regulatory penalties for non-compliance are escalating', 'Circularity requires a systemic redesign of our supply chains'],
      goal: 'Sostener una conversación de alto nivel sobre políticas de sustentabilidad empresarial.'
    },
    {
      id: 'B2_13',
      num: 13,
      title: 'Análisis de políticas públicas y dilemas morales contemporáneos',
      desc: 'Discute sobre salud pública, distribución de recursos y libertad individual con neutralidad.',
      phrases: ['Striking the optimal balance between public welfare and individual freedom...', 'Universal access requires sustainable fiscal mechanisms', 'The unintended societal consequences cannot be disregarded', 'Policy implementation often reveals unforeseen friction'],
      goal: 'Examinar dilemas éticos y políticos desde múltiples prismas ideológicos.'
    },
    {
      id: 'B2_14',
      num: 14,
      title: 'Adaptación intercultural en equipos multinacionales remotos',
      desc: 'Gestiona estilos de comunicación directa vs indirecta en equipos distribuidos globalmente.',
      phrases: ['Cross-cultural synergy requires heightened empathy', 'High-context communication relies heavily on non-verbal cues', 'We must establish shared communication norms', 'Misalignment often stems from implicit cultural assumptions'],
      goal: 'Liderar dinámicas de trabajo globales respetando las idiosincrasias de cada país.'
    },
    {
      id: 'B2_15',
      num: 15,
      title: 'Simulación ejecutiva: Junta directiva y toma de decisiones estratégicas',
      desc: 'Participa en una sesión de directorio decidiendo fusiones, adquisiciones y nuevos mercados.',
      phrases: ['I formally motion that we approve the proposed acquisition', 'The due diligence report highlights manageable liabilities', 'Our strategic synergy will dominate market share', 'Let\'s proceed with unanimous board consensus'],
      goal: 'Demostrar elocuencia, liderazgo y madurez comunicativa para ingresar al Nivel C1.'
    }
  ],

  C1: [
    {
      id: 'C1_1',
      num: 1,
      title: 'Liderazgo ejecutivo y oratoria persuasiva con inversión enfática',
      desc: 'Comunica una visión estratégica con recursos retóricos, paralelismos e inversión sintáctica.',
      phrases: ['Rarely do we witness such paradigm shifts in global commerce...', 'Not only must we adapt, but we ought to pioneer...', 'The underlying imperative is uncompromising excellence', 'Under no circumstances should we dilute our core vision'],
      goal: 'Inspirar y persuadir con elegancia discursiva, inversión enfática y entonación de estadista.'
    },
    {
      id: 'C1_2',
      num: 2,
      title: 'Negociación estratégica internacional y diplomacia de alto nivel',
      desc: 'Aborda cláusulas contractuales sensibles, mitigación de riesgos geopolíticos y concesiones recíprocas.',
      phrases: ['It is paramount that all contingencies be meticulously accounted for', 'Notwithstanding the preliminary consensus...', 'To foster reciprocal goodwill, we propose a tiered rollout', 'This stipulation serves as an ironclad safeguard'],
      goal: 'Manejar registros formales sofisticados y cláusulas de alta precisión diplomática.'
    },
    {
      id: 'C1_3',
      num: 3,
      title: 'Modismos culturales, ironía y colocaciones nativas de impacto',
      desc: 'Domina frases idiomáticas complejas, dobles sentidos y el humor sutil del hablante nativo culto.',
      phrases: ['To play devil’s advocate for a moment...', 'Let’s cut to the chase and address the elephant in the room', 'It is indeed a double-edged sword', 'I would take those projections with a grain of salt'],
      goal: 'Integrar expresiones idiomáticas complejas y matices irónicos con total naturalidad.'
    },
    {
      id: 'C1_4',
      num: 4,
      title: 'Discurso académico y defensa de tesis de investigación',
      desc: 'Defiende tu metodología científica, validez empírica y aportes teóricos ante un comité doctoral.',
      phrases: ['The qualitative data corroborates our primary hypothesis', 'The methodology was calibrated to eliminate confirmation bias', 'This empirical framework bridges a noticeable gap in literature', 'While limitations exist, the findings are statistically robust'],
      goal: 'Argumentar con rigor epistemológico y vocabulario académico avanzado.'
    },
    {
      id: 'C1_5',
      num: 5,
      title: 'Manejo sutil del registro: del lenguaje informal al institucional',
      desc: 'Alterna entre jerga de vestuario, humor cotidiano y el protocolo más estricto según la audiencia.',
      phrases: ['Off the top of my head... vs Upon preliminary appraisal...', 'To call it a day vs To conclude the proceedings formally', 'Navigating the delicate spectrum of linguistic registers', 'Tailoring tone precisely to social dynamics'],
      goal: 'Demostrar versatilidad estilística nativa adaptando el registro al milímetro.'
    },
    {
      id: 'C1_6',
      num: 6,
      title: 'Retórica avanzada y técnicas de debate parlamentario',
      desc: 'Emplea preguntas retóricas, antítesis y refutación lógica impecable ante oponentes tenaces.',
      phrases: ['Can we genuinely afford the complacency my opponent advocates?', 'It is not a question of capability, but of collective willpower', 'That line of reasoning conflates correlation with causation', 'The crux of the matter lies precisely in...'],
      goal: 'Debatir con soltura parlamentaria neutralizando falacias lógicas con elocuencia.'
    },
    {
      id: 'C1_7',
      num: 7,
      title: 'Gestión de stakeholders y alineamiento de intereses dispares',
      desc: 'Articula un mensaje coherente para accionistas, sindicatos, reguladores y clientes.',
      phrases: ['Reconciling divergent stakeholder expectations is a delicate balancing act', 'We have instituted consultative mechanisms across all tiers', 'Transparency is the cornerstone of sustainable consensus', 'Our long-term roadmap aligns mutual interests seamlessly'],
      goal: 'Construir consensos institucionales complejos mediante comunicación estratégica.'
    },
    {
      id: 'C1_8',
      num: 8,
      title: 'Análisis geopolítico y macroeconómico contemporáneo',
      desc: 'Examina desglobalización, tipos de cambio, tensiones arancelarias y bancos centrales.',
      phrases: ['Quantitative tightening has precipitated unexpected liquidity constraints', 'Supply chain nearshoring reflects broader geopolitical realignments', 'Monetary policy must decouple from short-term electoral cycles', 'Sovereign debt vulnerabilities continue to loom large'],
      goal: 'Discurrir con propiedad técnica sobre dinámicas macroeconómicas globales.'
    },
    {
      id: 'C1_9',
      num: 9,
      title: 'Filosofía, ética de la inteligencia artificial y transhumanismo',
      desc: 'Reflexiona sobre la conciencia de las máquinas, el existencialismo y el porvenir de la especie.',
      phrases: ['Where does utilitarian calculus fail in autonomous decision-making?', 'The existential ramifications of artificial general intelligence', 'Epistemological uncertainty is inherent to black-box models', 'Humanity stands at a profound ontological crossroads'],
      goal: 'Debatir abstracciones filosóficas con soltura, profundidad y léxico impecable.'
    },
    {
      id: 'C1_10',
      num: 10,
      title: 'Crítica cultural, cinematográfica y estética de vanguardia',
      desc: 'Analiza narrativas visuales, metáforas subyacentes y crítica deconstructiva del arte.',
      phrases: ['The director masterfully subverts conventional genre tropes', 'A poignant meditation on human alienation in the digital epoch', 'The cinematography oscillates between claustrophobic and sweeping', 'Its understated aesthetic belies an intricate thematic depth'],
      goal: 'Formular juicios estéticos y ensayos orales de alta apreciación artística.'
    },
    {
      id: 'C1_11',
      num: 11,
      title: 'Improvisación ejecutiva y elocuencia bajo presión',
      desc: 'Responde preguntas imprevistas en vivo ante un auditorio sin perder el hilo ni titubear.',
      phrases: ['That is an astute inquiry that warrants nuanced reflection', 'To distill that multifaceted issue into its operative components...', 'Without losing sight of the broader strategic horizon...', 'In synthesis, our trajectory remains resolute'],
      goal: 'Demostrar aplomo absoluto y capacidad de síntesis inmediata ante situaciones sorpresivas.'
    },
    {
      id: 'C1_12',
      num: 12,
      title: 'Resolución de crisis reputacional internacional y auditorías',
      desc: 'Rinde cuentas ante comisiones internacionales preservando la integridad corporativa.',
      phrases: ['We welcome external scrutiny as an impetus for institutional reform', 'Remedial measures have been deployed with immediate efficacy', 'Our fiduciary responsibility brooks no compromises', 'We stand ready to cooperate fully with regulatory oversight'],
      goal: 'Restablecer la confianza institucional mediante oratoria de transparencia y rigor ético.'
    },
    {
      id: 'C1_13',
      num: 13,
      title: 'Lenguaje legal, contratos mercantiles y mitigación de litigios',
      desc: 'Examina cláusulas de indemnización, fuerza mayor y arbitraje internacional.',
      phrases: ['The force majeure clause encompasses unprecedented geopolitical disruptions', 'Indemnification obligations are circumscribed to direct damages', 'Any latent ambiguity shall be resolved through binding arbitration', 'Pursuant to Section 8, intellectual property remains inviolate'],
      goal: 'Interpretar y discutir terminología jurídica contractual en inglés/italiano avanzado.'
    },
    {
      id: 'C1_14',
      num: 14,
      title: 'Psicología de la persuasión, sesgos cognitivos y retórica sutil',
      desc: 'Desmenuza el encuadre psicológico, la aversión a la pérdida y el anclaje en negociaciones.',
      phrases: ['Framing effects exert a subconscious pull on decision-makers', 'Loss aversion routinely outweighs potential prospective gains', 'By anchoring expectations prudently, we steer the deliberation', 'Cognitive dissonance often manifests as entrenched dogmatism'],
      goal: 'Aplicar principios de economía conductual a la retórica y negociación de élite.'
    },
    {
      id: 'C1_15',
      num: 15,
      title: 'Conferencia magistral: Keynote speech y ronda de preguntas de alto nivel',
      desc: 'Imparte una conferencia de clausura magistral de 10 minutos y responde al panel de expertos.',
      phrases: ['Distinguished colleagues, honored guests, and fellow visionaries...', 'Let history record that we chose courage over complacency', 'To address the panelist\'s provocative question...', 'Thank you for your gracious attention; onward together'],
      goal: 'Alcanzar la cúspide de la maestría oral (CEFR C1 Mastery) con carisma y precisión total.'
    }
  ]
};

/**
 * BANCO DE VOCABULARIO OFICIAL POR NIVEL (Para consulta y práctica guiada de pronunciación)
 */
export const LEVEL_VOCABULARY = {
  zero: {
    title: '🌱 Vocabulario Fundamental (Desde Cero / A0)',
    categories: [
      {
        name: 'Saludos y Cortesía',
        items: [
          { term: 'Hello / Hi', it: 'Ciao', es: 'Hola', phonetic: 'he-LÓU / jai', ex: 'Hello, Emma! How are you?' },
          { term: 'Good morning', it: 'Buongiorno', es: 'Buenos días', phonetic: 'gud MÓOR-ning', ex: 'Good morning, have a great day!' },
          { term: 'Please', it: 'Per favore', es: 'Por favor', phonetic: 'pliiz', ex: 'One coffee, please.' },
          { term: 'Thank you', it: 'Grazie', es: 'Gracias', phonetic: 'zzenk iú', ex: 'Thank you very much!' },
          { term: 'You are welcome', it: 'Prego', es: 'De nada', phonetic: 'iur UÉL-kam', ex: 'You are very welcome.' },
          { term: 'Goodbye', it: 'Arrivederci', es: 'Adiós', phonetic: 'gud-BÁI', ex: 'Goodbye, see you tomorrow!' }
        ]
      },
      {
        name: 'Identidad y Supervivencia',
        items: [
          { term: 'My name is...', it: 'Mi chiamo...', es: 'Mi nombre es...', phonetic: 'mai neim iz', ex: 'My name is Kristhian.' },
          { term: 'I am from...', it: 'Vengo da...', es: 'Soy de...', phonetic: 'ai am fram', ex: 'I am from Peru.' },
          { term: 'I do not understand', it: 'Non capisco', es: 'No entiendo', phonetic: 'ai du not an-der-STÁND', ex: 'Sorry, I do not understand.' },
          { term: 'Repeat, please', it: 'Ripeti, per favore', es: 'Repita, por favor', phonetic: 'ri-PÍIT pliiz', ex: 'Can you repeat, please?' },
          { term: 'More slowly', it: 'Più lentamente', es: 'Más lento', phonetic: 'móor SLÓU-li', ex: 'Speak more slowly, please.' }
        ]
      },
      {
        name: 'Números y Tiempo',
        items: [
          { term: 'One, Two, Three', it: 'Uno, Due, Tre', es: 'Uno, Dos, Tres', phonetic: 'uan, tu, zzrii', ex: 'One, two, three apples.' },
          { term: 'Ten, Twenty', it: 'Dieci, Venti', es: 'Diez, Veinte', phonetic: 'ten, TUÉN-ti', ex: 'Twenty dollars, please.' },
          { term: 'Today / Tomorrow', it: 'Oggi / Domani', es: 'Hoy / Mañana', phonetic: 'tu-DÉI / tu-MÓ-rou', ex: 'Today is a wonderful day.' },
          { term: 'Morning / Night', it: 'Mattina / Notte', es: 'Mañana / Noche', phonetic: 'MÓOR-ning / nait', ex: 'Good night, sleep well.' }
        ]
      },
      {
        name: 'Alimentos y Objetos',
        items: [
          { term: 'Water', it: 'Acqua', es: 'Agua', phonetic: 'UÓ-ter', ex: 'Glass of water, please.' },
          { term: 'Coffee', it: 'Caffè', es: 'Café', phonetic: 'KÓ-fii', ex: 'I love morning coffee.' },
          { term: 'Book / Phone', it: 'Libro / Telefono', es: 'Libro / Teléfono', phonetic: 'buk / foun', ex: 'This is my mobile phone.' },
          { term: 'Key / Table', it: 'Chiave / Tavolo', es: 'Llave / Mesa', phonetic: 'kii / TÉI-bul', ex: 'The key is on the table.' }
        ]
      }
    ]
  },

  A1: {
    title: 'A1 · Vocabulario de la Vida Cotidiana',
    categories: [
      {
        name: 'Rutina y Horarios',
        items: [
          { term: 'Wake up / Get up', it: 'Svegliarsi', es: 'Despertar / Levantarse', phonetic: 'ueik ap / guet ap', ex: 'I wake up at 7 o\'clock every day.' },
          { term: 'Have breakfast', it: 'Fare colazione', es: 'Desayunar', phonetic: 'jav BRÉK-fast', ex: 'I have breakfast with my family.' },
          { term: 'Commute / Take the bus', it: 'Prendere l\'autobus', es: 'Tomar el autobús / viajar', phonetic: 'teik dda bas', ex: 'I take the bus to university.' },
          { term: 'Go to sleep', it: 'Andare a dormire', es: 'Irse a dormir', phonetic: 'gou tu sliip', ex: 'I go to sleep at 11 PM.' }
        ]
      },
      {
        name: 'Compras y Restaurantes',
        items: [
          { term: 'How much does it cost?', it: 'Quanto costa?', es: '¿Cuánto cuesta?', phonetic: 'jau mach daz it kost?', ex: 'Excuse me, how much does it cost?' },
          { term: 'Can I have the bill?', it: 'Il conto, per favore', es: '¿Me trae la cuenta?', phonetic: 'kan ai jav dda bil?', ex: 'We are ready, can I have the bill?' },
          { term: 'Delicious / Fresh', it: 'Delizioso / Fresco', es: 'Delicioso / Fresco', phonetic: 'di-LÍ-shas / fresh', ex: 'The pasta is truly delicious.' },
          { term: 'I would like to order', it: 'Vorrei ordinare', es: 'Me gustaría pedir', phonetic: 'ai uud laik tu ÓOR-der', ex: 'I would like to order grilled chicken.' }
        ]
      },
      {
        name: 'Lugares y Direcciones',
        items: [
          { term: 'Turn left / Turn right', it: 'Girare a sinistra / destra', es: 'Girar a la izquierda / derecha', phonetic: 'tarn left / tarn rait', ex: 'Turn left at the next traffic light.' },
          { term: 'Go straight ahead', it: 'Andare dritto', es: 'Ir todo recto', phonetic: 'gou streit a-JÉD', ex: 'Go straight ahead for two blocks.' },
          { term: 'Near / Far from here', it: 'Vicino / Lontano da qui', es: 'Cerca / Lejos de aquí', phonetic: 'níiar / faar fram jíiar', ex: 'The metro station is very near.' },
          { term: 'Across from / Next to', it: 'Di fronte / Accanto a', es: 'Frente a / Al lado de', phonetic: 'a-KRÓS / nékst tu', ex: 'The bank is next to the pharmacy.' }
        ]
      },
      {
        name: 'Familia y Profesiones',
        items: [
          { term: 'Engineer / Doctor', it: 'Ingegnere / Medico', es: 'Ingeniero / Médico', phonetic: 'en-ji-NÍIR / DÓK-ter', ex: 'He is an experienced civil engineer.' },
          { term: 'Friendly / Hardworking', it: 'Simpatico / Lavoratore', es: 'Amigable / Trabajador', phonetic: 'FRÉND-li / jaard-UÓR-king', ex: 'My coworkers are hardworking.' },
          { term: 'Sibling / Parent', it: 'Fratello o sorella / Genitore', es: 'Hermano(a) / Progenitor', phonetic: 'SÍB-ling / PÉ-rent', ex: 'Do you have any siblings?' },
          { term: 'Manager / Student', it: 'Direttore / Studente', es: 'Gerente / Estudiante', phonetic: 'MÁ-na-jer / STIÚU-dent', ex: 'She works as a project manager.' }
        ]
      }
    ]
  },

  A2: {
    title: 'A2 · Vocabulario para Viajes, Salud y Experiencias',
    categories: [
      {
        name: 'Viajes y Aeropuerto',
        items: [
          { term: 'Boarding pass / Gate', it: 'Carta d\'imbarco / Gate', es: 'Tarjeta de embarque / Puerta', phonetic: 'BÓOR-ding pas / gueit', ex: 'Please have your boarding pass ready at gate 4.' },
          { term: 'Luggage / Baggage claim', it: 'Bagaglio / Ritiro bagagli', es: 'Equipaje / Reclamo de equipaje', phonetic: 'LÁ-guidzh / BÁ-guidzh kleim', ex: 'My luggage is waiting at carousel 2.' },
          { term: 'Flight delay / On time', it: 'Ritardo / In orario', es: 'Vuelo retrasado / A tiempo', phonetic: 'flait di-LÉI / on taim', ex: 'The flight to London is departing on time.' },
          { term: 'Carry-on bag', it: 'Bagaglio a mano', es: 'Equipaje de mano', phonetic: 'KÉ-ri on bag', ex: 'You can take one carry-on bag.' }
        ]
      },
      {
        name: 'Hospedaje y Hotel',
        items: [
          { term: 'Reservation under...', it: 'Prenotazione a nome di...', es: 'Reserva a nombre de...', phonetic: 're-zer-VÉI-shan ÁN-der', ex: 'I have a reservation under Kristhian Conde.' },
          { term: 'Included amenities', it: 'Servizi inclusi', es: 'Servicios incluidos', phonetic: 'in-KLÚU-did a-MÉ-ni-tiiz', ex: 'Is breakfast included in the room rate?' },
          { term: 'Check-in / Check-out', it: 'Arrivo / Partenza', es: 'Entrada / Salida de hotel', phonetic: 'chek in / chek aut', ex: 'Check-out time is strictly at noon.' },
          { term: 'Air conditioner / Towel', it: 'Aria condizionata / Asciugamano', es: 'Aire acondicionado / Toalla', phonetic: 'eer kan-DÍ-sha-ner / TÁU-el', ex: 'Could we get fresh towels, please?' }
        ]
      },
      {
        name: 'Salud y Farmacia',
        items: [
          { term: 'Headache / Fever', it: 'Mal di testa / Febbre', es: 'Dolor de cabeza / Fiebre', phonetic: 'JÉD-eik / FÍI-ver', ex: 'I have had a mild headache since yesterday.' },
          { term: 'Sore throat / Cough', it: 'Mal di gola / Tosse', es: 'Dolor de garganta / Tos', phonetic: 'sóor zrout / kof', ex: 'This cough medicine is very effective.' },
          { term: 'Prescription / Pills', it: 'Ricetta medica / Pillole', es: 'Receta médica / Pastillas', phonetic: 'pri-SKRÍP-shan / pilz', ex: 'Take two pills every eight hours.' },
          { term: 'Dizzy / Nauseous', it: 'Capogiro / Nauseato', es: 'Mareado / Con náuseas', phonetic: 'DÍ-zi / NÓ-shas', ex: 'I feel slightly dizzy in hot weather.' }
        ]
      },
      {
        name: 'Comparativos y Pasado',
        items: [
          { term: 'Much bigger than...', it: 'Molto più grande di...', es: 'Mucho más grande que...', phonetic: 'mach BÍ-guer ddan', ex: 'Lima is much bigger than Cusco.' },
          { term: 'Used to live / play', it: 'Ero solito vivere / giocare', es: 'Solía vivir / jugar', phonetic: 'iust tu liv / plei', ex: 'I used to live near the beach.' },
          { term: 'Breathtaking view', it: 'Vista mozzafiato', es: 'Vista impresionante', phonetic: 'BRÉZZ-tei-king viu', ex: 'The mountain view was truly breathtaking.' },
          { term: 'Affordable / Expensive', it: 'Economico / Costoso', es: 'Asequible / Caro', phonetic: 'a-FÓOR-da-bul / ek-SPÉN-siv', ex: 'Public transport here is very affordable.' }
        ]
      }
    ]
  },

  B1: {
    title: 'B1 · Vocabulario Profesional, Reclamos y Argumentación',
    categories: [
      {
        name: 'Ámbito Laboral y Metas',
        items: [
          { term: 'Oversee / Manage', it: 'Supervisionare / Gestire', es: 'Supervisar / Gestionar', phonetic: 'ou-ver-SÍI / MÁ-nidzh', ex: 'In my current role, I oversee daily logistics.' },
          { term: 'Milestone / Achievement', it: 'Traguardo / Successo', es: 'Hito / Logro destacado', phonetic: 'MÁIL-stoun / a-CHÍIV-ment', ex: 'Hitting our annual target was a major milestone.' },
          { term: 'Broaden my expertise', it: 'Ampliare le competenze', es: 'Ampliar mi experiencia', phonetic: 'BRÓO-den mai eks-per-TÍIS', ex: 'I am taking courses to broaden my expertise.' },
          { term: 'Problem-solving skills', it: 'Capacità di risoluzione problemi', es: 'Habilidades de resolución de problemas', phonetic: 'PRÓB-lem sól-ving skilz', ex: 'Employers prioritize strong problem-solving skills.' }
        ]
      },
      {
        name: 'Resolución de Reclamos',
        items: [
          { term: 'Misunderstanding', it: 'Fraintendimento', es: 'Malentendido', phonetic: 'mis-an-der-STÁN-ding', ex: 'I believe there has been a minor misunderstanding.' },
          { term: 'Look into this matter', it: 'Esaminare la questione', es: 'Investigar este asunto', phonetic: 'luk ÍN-tu ddis MÁ-ter', ex: 'Could management please look into this matter?' },
          { term: 'Adequate compensation', it: 'Adeguato risarcimento', es: 'Compensación adecuada', phonetic: 'Á-de-kuit kom-pen-SÉI-shan', ex: 'Passengers are entitled to adequate compensation.' },
          { term: 'Defective / Faulty', it: 'Difettoso / Guasto', es: 'Defectuoso / Con fallas', phonetic: 'di-FÉK-tiv / FÓOL-ti', ex: 'The delivered product was completely defective.' }
        ]
      },
      {
        name: 'Diplomacia y Debate',
        items: [
          { term: 'I see your point, but...', it: 'Capisco il tuo punto, ma...', es: 'Entiendo tu punto, pero...', phonetic: 'ai sii iur point, bat', ex: 'I see your point, but we need to consider costs.' },
          { term: 'On the downside...', it: 'D\'altra parte...', es: 'Por el lado negativo...', phonetic: 'on dda DÁUN-said', ex: 'Remote work offers flexibility, yet on the downside...' },
          { term: 'From my perspective', it: 'Dalla mia prospettiva', es: 'Desde mi perspectiva', phonetic: 'fram mai per-SPÉK-tiv', ex: 'From my perspective, innovation requires patience.' },
          { term: 'Reach a compromise', it: 'Trovare un compromesso', es: 'Llegar a un acuerdo medio', phonetic: 'riich ei KÓM-pro-mais', ex: 'Both departments must reach a fair compromise.' }
        ]
      },
      {
        name: 'Hipótesis y Condicionales',
        items: [
          { term: 'If I were in your shoes...', it: 'Se fossi nei tuoi panni...', es: 'Si estuviera en tu lugar...', phonetic: 'if ai uer in iur shuuz', ex: 'If I were in your shoes, I would accept the job.' },
          { term: 'You ought to consider...', it: 'Dovresti considerare...', es: 'Deberías considerar...', phonetic: 'iu óot tu kan-SÍ-der', ex: 'You ought to consider consulting an advisor.' },
          { term: 'Burnout / Work-life balance', it: 'Esaurimento / Equilibrio vita-lavoro', es: 'Agotamiento / Balance de vida', phonetic: 'BÁRN-aut / uark laif BÁ-lans', ex: 'Healthy boundaries prevent workplace burnout.' },
          { term: 'Streamline operations', it: 'Semplificare le operazioni', es: 'Optimizar y agilizar operaciones', phonetic: 'STRÍIM-lain o-per-ÉI-shanz', ex: 'Cloud software helps streamline team operations.' }
        ]
      }
    ]
  },

  B2: {
    title: 'B2 · Vocabulario Ejecutivo, Negociación y Retórica',
    categories: [
      {
        name: 'Método STAR y Logros',
        items: [
          { term: 'Overarching priority', it: 'Priorità generale', es: 'Prioridad fundamental o rectora', phonetic: 'ou-ver-ÁAR-ching prai-Ó-ri-ti', ex: 'Our overarching priority was client retention.' },
          { term: 'Streamline workflow', it: 'Ottimizzare il flusso di lavoro', es: 'Agilizar el flujo de trabajo', phonetic: 'STRÍIM-lain UÁRK-flou', ex: 'We redesigned protocols to streamline workflow.' },
          { term: 'Tangible outcome', it: 'Risultato tangibile', es: 'Resultado tangible y medible', phonetic: 'TÁN-ji-bul ÁUT-kam', ex: 'The project yielded tangible commercial outcomes.' },
          { term: 'Take the initiative', it: 'Prendere l\'iniziativa', es: 'Tomar la iniciativa', phonetic: 'teik ddi i-NÍ-sha-tiv', ex: 'I took the initiative to organize the stakeholder summit.' }
        ]
      },
      {
        name: 'Negociación Comercial',
        items: [
          { term: 'Provided that / As long as', it: 'A patto che', es: 'Siempre y cuando / Con la condición de', phonetic: 'pro-VÁI-did ddat', ex: 'We will sign provided that delivery is guaranteed.' },
          { term: 'Compromise on terms', it: 'Venire a patti sui termini', es: 'Ceder o pactar en las condiciones', phonetic: 'KÓM-pro-mais on tarms', ex: 'Are you willing to compromise on payment terms?' },
          { term: 'Core competitive edge', it: 'Vantaggio competitivo chiave', es: 'Ventaja competitiva diferencial', phonetic: 'kóor kam-PÉ-ti-tiv edzh', ex: 'Proprietary AI is our core competitive edge.' },
          { term: 'Seal the deal', it: 'Concludere l\'accordo', es: 'Cerrar el trato comercial', phonetic: 'siil dda diil', ex: 'Let\'s shake hands and seal the deal today.' }
        ]
      },
      {
        name: 'Debate de Vanguardia (IA y Ética)',
        items: [
          { term: 'Ethical dilemma', it: 'Dilemma etico', es: 'Dilema ético', phonetic: 'É-zzi-kul dai-LÉ-ma', ex: 'Data scraping introduces a complex ethical dilemma.' },
          { term: 'Regulatory guardrails', it: 'Barriere normative', es: 'Marcos regulatorios de protección', phonetic: 'RÉ-guiu-la-to-ri GÁARD-reilz', ex: 'Governments are instituting regulatory guardrails.' },
          { term: 'Empirical evidence', it: 'Evidenza empirica', es: 'Evidencia empírica comprobada', phonetic: 'em-PÍ-ri-kul É-vi-dens', ex: 'Her claims are backed by solid empirical evidence.' },
          { term: 'Foreseeable risk', it: 'Rischio prevedibile', es: 'Riesgo previsible', phonetic: 'fóor-SÍI-a-bul risk', ex: 'We must mitigate every foreseeable financial risk.' }
        ]
      },
      {
        name: 'Modismos Profesionales',
        items: [
          { term: 'Think outside the box', it: 'Pensare fuori dagli schemi', es: 'Pensar de forma creativa e innovadora', phonetic: 'zzink aut-SÁID dda boks', ex: 'Engineers must think outside the box to solve this.' },
          { term: 'Touch base offline', it: 'Aggiornarsi di persona', es: 'Conversar en privado o después', phonetic: 'tach beis OF-lain', ex: 'Let\'s touch base offline after this committee.' },
          { term: 'Down to the wire', it: 'All\'ultimo minuto', es: 'Hasta el último segundo / límite', phonetic: 'daun tu dda UÁI-er', ex: 'The contract negotiation went down to the wire.' },
          { term: 'On the same page', it: 'Sulla stessa lunghezza d\'onda', es: 'En sintonía / Totalmente de acuerdo', phonetic: 'on dda seim peidzh', ex: 'Let\'s make sure all stakeholders are on the same page.' }
        ]
      }
    ]
  },

  C1: {
    title: 'C1 · Vocabulario Magistral, Oratoria y Diplomacia de Élite',
    categories: [
      {
        name: 'Inversión Enfática y Retórica',
        items: [
          { term: 'Rarely do we witness...', it: 'Raramente assistiamo a...', es: 'Raras veces presenciamos...', phonetic: 'RÉER-li du ui UÍT-nes', ex: 'Rarely do we witness such tectonic market disruption.' },
          { term: 'Under no circumstances...', it: 'In nessun caso...', es: 'Bajo ninguna circunstancia...', phonetic: 'ÁN-der nou SÁR-kam-stan-siz', ex: 'Under no circumstances should quality be compromised.' },
          { term: 'Underlying imperative', it: 'Imperativo sottostante', es: 'Imperativo o mandato esencial', phonetic: 'an-der-LÁI-ing im-PÉ-ra-tiv', ex: 'Our underlying imperative is fiduciary integrity.' },
          { term: 'Subvert conventions', it: 'Sovvertire le convenzioni', es: 'Subvertir o transformar cánones', phonetic: 'sub-VÁRT kan-VÉN-shanz', ex: 'Visionary leaders routinely subvert conventions.' }
        ]
      },
      {
        name: 'Diplomacia y Precisión Contractual',
        items: [
          { term: 'Notwithstanding...', it: 'Nonostante...', es: 'No obstante / A pesar de lo estipulado', phonetic: 'not-uidd-STÁN-ding', ex: 'Notwithstanding earlier objections, agreement was signed.' },
          { term: 'Paramount importance', it: 'Massima importanza', es: 'Importancia primordial', phonetic: 'PÉ-ra-maunt im-PÓOR-tans', ex: 'Cybersecurity compliance is of paramount importance.' },
          { term: 'Reciprocal goodwill', it: 'Reciproca buona volontà', es: 'Buena voluntad recíproca', phonetic: 'ri-SÍ-pro-kul GUD-uil', ex: 'Both nations pledged to foster reciprocal goodwill.' },
          { term: 'Ironclad safeguard', it: 'Garanzia blindata', es: 'Garantía o salvaguarda blindada', phonetic: 'ÁI-ern-klad SÉIF-gaard', ex: 'This escrow clause acts as an ironclad safeguard.' }
        ]
      },
      {
        name: 'Modismos Nativos y Matices',
        items: [
          { term: 'Play devil’s advocate', it: 'Fare l\'avvocato del diavolo', es: 'Hacer de abogado del diablo', phonetic: 'plei DÉ-vilz ÁD-va-keit', ex: 'Allow me to play devil\'s advocate to test this thesis.' },
          { term: 'Double-edged sword', it: 'Arma a doppio taglio', es: 'Arma de doble filo', phonetic: 'DÁ-bul edzhd sóord', ex: 'Aggressive pricing can be a double-edged sword.' },
          { term: 'Take with a grain of salt', it: 'Prendere con le pinze', es: 'Tomar con reservas / cautela', phonetic: 'teik uidd ei grein av solt', ex: 'Take anonymous social rumors with a grain of salt.' },
          { term: 'Elephant in the room', it: 'Problema evidente ignorato', es: 'El gran problema evidente que nadie menciona', phonetic: 'É-le-fant in dda ruum', ex: 'Let\'s confront the elephant in the room: rising debt.' }
        ]
      },
      {
        name: 'Filosofía, Epistemología y Geopolítica',
        items: [
          { term: 'Epistemological uncertainty', it: 'Incertezza epistemologica', es: 'Incertidumbre epistemológica', phonetic: 'e-pis-te-ma-LÓ-ji-kul an-SÁR-tan-ti', ex: 'Deep learning entails inherent epistemological uncertainty.' },
          { term: 'Ontological crossroads', it: 'Bivio ontologico', es: 'Encrucijada ontológica del ser', phonetic: 'on-to-LÓ-ji-kul KRÓS-roudz', ex: 'Bioengineering brings us to an ontological crossroads.' },
          { term: 'Sovereign debt vulnerabilities', it: 'Vulnerabilità del debito sovrano', es: 'Vulnerabilidades de deuda soberana', phonetic: 'SÓ-ve-rin det vul-ne-ra-BÍ-li-tiiz', ex: 'Central banks are monitoring sovereign debt vulnerabilities.' },
          { term: 'Fiduciary responsibility', it: 'Responsabilità fiduciaria', es: 'Responsabilidad fiduciaria legal', phonetic: 'fi-DIÚ-sha-ri ri-spon-si-BÍ-li-ti', ex: 'Board members must honor their fiduciary responsibility.' }
        ]
      }
    ]
  }
};

/**
 * Retorna el catálogo de vocabulario para un nivel específico.
 */
export function getLevelVocabulary(level, lang = 'en') {
  const data = LEVEL_VOCABULARY[level] || LEVEL_VOCABULARY.zero;
  return data;
}

/**
 * Genera el prompt oficial para el MODO INSTRUCTOR DE CLASE según el plan de estudio.
 * Diseñado rigurosamente para garantizar una clase completa, guiada y pedagógica
 * de AL MENOS 10 MINUTOS de duración estructurada en 5 etapas progresivas.
 */
export function buildLessonPrompt(opts) {
  const lang = LANGUAGES[opts.language || 'en'];
  const name = opts.studentName ? opts.studentName.trim() : 'alumno';
  const level = opts.level || 'zero';
  const lesson = opts.lesson;
  const isZero = level === 'zero';

  const pedagogyGuidelines = isZero
    ? `CLASS METHODOLOGY: 100% BILINGUAL GUIDED INSTRUCTION (Spanish + ${lang.name})
- The student is at LEVEL 0 (Complete beginner / Desde Cero).
- SPANISH IS YOUR PRIMARY SPOKEN LANGUAGE FOR GUIDANCE, COMFORT AND TEACHING!
- DO NOT overwhelm the student with long English paragraphs.
- Teach ONE phrase or vocabulary item at a time.
- Say it slowly and clearly in ${lang.name}, explain what it means in Spanish, and ask ${name} to repeat it.
- Warmly celebrate their pronunciation in Spanish ("¡Excelente pronunciación! Muy bien hecho.").
- If they respond in Spanish, praise them and gently teach them how to express that in simple ${lang.name}.`
    : `CLASS METHODOLOGY: IMMERSIVE GUIDED PEDAGOGICAL LESSON
- The student is at level ${getLevelTitle(level)} (${level}).
- Conduct the class primarily in ${lang.name} with ${lang.accent}.
- Provide short, encouraging explanations or vocabulary translations in Spanish whenever it facilitates comprehension.
- Maintain an inspiring, constructive, and highly active teaching presence.`;

  return `You are ${lang.teacherName}, an inspiring, patient and pedagogical ${lang.name} teacher conducting an OFFICIAL 10-MINUTE STRUCTURED ACADEMIC CLASS for ${name}.

# CLASS IDENTIFICATION
- LEVEL: ${getLevelTitle(level)} (${level})
- LESSON NUMBER: Clase ${lesson.num} de 15
- LESSON TITLE: "${lesson.title}"
- DESCRIPTION: "${lesson.desc}"
- LEARNING GOAL: "${lesson.goal}"
- KEY PHRASES & VOCABULARY TO TEACH AND MASTER:
  ${lesson.phrases.map((p, i) => `${i + 1}. "${p}"`).join('\n  ')}

# TARGET DURATION & PACING (CRUCIAL INSTRUCTION)
- THIS IS A COMPREHENSIVE ~10-MINUTE CLASS, NOT A 2-MINUTE RUSHED INTERACTION!
- You must guide the student through all 5 sequential pedagogical stages described below.
- Take your time on each stage: model pronunciation, request repetition, check phonemes, and keep the student actively talking.
- DO NOT wrap up or conclude the class prematurely until all 5 stages and exercises have been thoroughly completed!

# ${pedagogyGuidelines}

# THE 5 PEDAGOGICAL STAGES OF THE 10-MINUTE CLASS

1. STAGE 1: WARM WELCOME & CONTEXT (1-2 MINUTES / 2 TURNS):
   - Welcome ${name} enthusiastically in ${isZero ? 'Spanish' : 'a warm blend of English and Spanish'}.
   - Announce today's class: "¡Bienvenido/a a tu Clase ${lesson.num}: '${lesson.title}'!"
   - State the clear objective: "${lesson.goal}".
   - Ask an engaging opening question to activate prior knowledge or establish context.
   - Wait for their response and praise their willingness to learn.

2. STAGE 2: VOCABULARY & PHONETIC MODELING (2-3 MINUTES / 3 TURNS):
   - Present the first 2 key phrases from today's lesson: "${lesson.phrases.slice(0, 2).join('", "')}".
   - Explain what they mean and when native speakers use them.
   - Model the exact pronunciation slowly and clearly (point out stressed syllables and tricky sounds).
   - Ask ${name} to repeat the phrases aloud.
   - Give immediate, encouraging phonetic feedback. If mispronounced, kindly model again once.
   - Then introduce the remaining key phrases: "${lesson.phrases.slice(2).join('", "')}" and repeat the guided repetition drill.

3. STAGE 3: GUIDED SENTENCE BUILDING & DRILLS (2-3 MINUTES / 3 TURNS):
   - Challenge ${name} to use the key phrases in their own original sentences.
   - Give them realistic prompts: "Ahora imagina que estás en... ¿Cómo dirías que... usando '${lesson.phrases[0]}'?"
   - Help them connect words and correct any grammar or vocabulary slip using natural recasts.
   - Celebrate every successful sentence they produce!

4. STAGE 4: REAL-WORLD SITUATIONAL ROLE-PLAY (2-3 MINUTES / 3-4 TURNS):
   - Transition into a dynamic, interactive mini-dialogue based on the lesson topic ("${lesson.title}").
   - Take on a realistic role (e.g. barista, coworker, receptionist, local friend) and assign ${name} their role.
   - Carry out an exchange of 3 to 4 turns where ${name} must respond and apply what they learned today.
   - Keep the energy high and enjoyable!

5. STAGE 5: CONSOLIDATION, STUDENT QUESTIONS & CELEBRATORY WRAP-UP (1-2 MINUTES / 2 TURNS):
   - Ask ${name}: "¿Tienes alguna duda sobre alguna de las frases que practicamos hoy?"
   - Summarize the key achievements and phrases mastered today.
   - Congratulate ${name} with heartfelt praise for completing Clase ${lesson.num} of ${getLevelTitle(level)}.
   - Remind them that they can revisit this class anytime, advance to the next class, and when they finish their 15 classes, take the Level-Up Exam!

# PRONUNCIATION & CORRECTIONS
Call the report_correction tool for significant pronunciation, grammar, or vocabulary mistakes as taught in the system guidelines so cards appear on screen.

# STYLE
Spoken voice format only. Warm, supportive, pedagogical, patient, and highly structured.`;
}

/**
 * Genera el prompt para la SESIÓN DE PRÁCTICA GUIADA DE VOCABULARIO.
 */
export function buildVocabularyPrompt(opts) {
  const lang = LANGUAGES[opts.language || 'en'];
  const name = opts.studentName ? opts.studentName.trim() : 'alumno';
  const level = opts.level || 'zero';
  const vocabData = getLevelVocabulary(level, opts.language);
  const isZero = level === 'zero';

  return `You are ${lang.teacherName}, a warm, patient and encouraging ${lang.name} teacher conducting a DEDICATED VOCABULARY & PRONUNCIATION DRILL SESSION for ${name}.

# SESSION IDENTIFICATION
- LEVEL: ${getLevelTitle(level)} (${level})
- MODE: Vocabulario Esencial y Práctica Fonética
- LEVEL VOCABULARY SECTIONS:
${vocabData.categories.map((c, i) => `  ${i + 1}. ${c.name} (${c.items.map(it => it.term).join(', ')})`).join('\n')}

# GOAL
Conduct a step-by-step interactive pronunciation workout with ${name}:
1. Welcome them warmly in ${isZero ? 'Spanish' : 'English'}: "¡Hola ${name}! Hoy vamos a entrenar y perfeccionar la pronunciación del vocabulario de ${getLevelTitle(level)}."
2. Pick 1 or 2 words at a time from the list above.
3. Pronounce each word clearly, explain its practical nuance in daily conversation, and ask ${name} to repeat it after you.
4. Listen to their pronunciation audio carefully, provide immediate feedback on sounds (vowels, consonants, word stress), and call report_correction if needed.
5. Create mini-sentences together using each word.
6. Keep the session interactive, encouraging, and fun!

# STYLE
Voice audio format only. Encouraging, patient, and focused on acoustic clarity.`;
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

