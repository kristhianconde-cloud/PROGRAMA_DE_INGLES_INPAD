(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const ve={en:{id:"en",name:"English",nameEs:"Inglés",flag:"🇬🇧",code:"en-US",teacherName:"Emma",accent:"clear, neutral American English"},it:{id:"it",name:"Italian",nameEs:"Italiano",flag:"🇮🇹",code:"it-IT",teacherName:"Giulia",accent:"clear, standard Italian"}},kn=[{id:"auto",label:"Detectar mi nivel",short:"Auto"},{id:"zero",label:"🌱 Desde cero (A0)",short:"A0"},{id:"A1",label:"A1 · Principiante",short:"A1"},{id:"A2",label:"A2 · Básico",short:"A2"},{id:"B1",label:"B1 · Intermedio",short:"B1"},{id:"B2",label:"B2 · Intermedio alto",short:"B2"},{id:"C1",label:"C1 · Avanzado",short:"C1"}],xn={strict:{label:"Estricto",desc:"Corrige casi todos los errores al momento."},balanced:{label:"Equilibrado",desc:"Corrige los errores importantes sin cortar la conversación."},fluency:{label:"Solo fluidez",desc:"Casi no interrumpe; anota los errores para el resumen."}},Rn=[{id:"zero",code:"A0",title:"🌱 Desde Cero (A0)",subtitle:"Primeros Pasos y Confianza",description:"Aprende los fundamentos del idioma sin miedo con enseñanza 100% bilingüe y guiada.",objectives:["Perder el miedo a hablar y familiarizarse con los sonidos del idioma.","Aprender saludos, fórmulas de cortesía y presentaciones personales básicas.","Comprender y pronunciar números, colores y objetos cotidianos.","Manejar frases clave de supervivencia: pedir repetición y ayuda."],grammar:"Vocabulario esencial, pronombres personales (I, you), verbo To Be básico en presente.",examRequirement:"Aprobar el Examen Oral de Nivel 0 con nota mínima de 15/20 para desbloquear el Nivel A1."},{id:"A1",code:"A1",title:"A1 · Principiante",subtitle:"Mi Entorno y Vida Cotidiana",description:"Comunica información básica sobre ti mismo, tu familia, rutina y compras simples.",objectives:["Describir tu rutina diaria, horarios y actividades habituales.","Hablar de tu familia, amigos y profesiones sencillas.","Pedir comida o bebidas en un café/restaurante y preguntar precios.","Expresar gustos y disgustos con oraciones sencillas."],grammar:"Presente simple, preguntas con Do/Does/Wh-, preposiciones de lugar y tiempo (in, on, at).",examRequirement:"Aprobar el Examen Oral de A1 con nota mínima de 15/20 para desbloquear el Nivel A2."},{id:"A2",code:"A2",title:"A2 · Básico",subtitle:"Relatos, Viajes y Situaciones Prácticas",description:"Relata experiencias pasadas, planes futuros y desenvuélvete en viajes y compras.",objectives:["Describir qué hiciste el fin de semana o en un viaje pasado.","Pedir direcciones en la calle, registrarte en un hotel y abordar un vuelo.","Explicar síntomas sencillos de salud en una farmacia o consulta.","Hacer comparaciones entre lugares, productos o personas."],grammar:"Pasado simple (verbos regulares e irregulares), Pasado continuo, Comparativos y Going to.",examRequirement:"Aprobar el Examen Oral de A2 con nota mínima de 15/20 para desbloquear el Nivel B1."},{id:"B1",code:"B1",title:"B1 · Intermedio",subtitle:"Conversación Fluida y Resolución de Imprevistos",description:"Narra historias conectadas y resuelve imprevistos cotidianos y laborales en el extranjero.",objectives:["Resolver reclamos prácticos con aerolíneas, hoteles o compras defectuosas.","Hablar de tu experiencia profesional y proyectos desafiantes.","Expresar acuerdos, desacuerdos educados y recomendaciones personales.","Conversar con espontaneidad sobre viajes, cultura y planes a futuro."],grammar:"Present Perfect vs Past Simple, Primer y Segundo Condicional (If I had... I would), Modales de consejo (should).",examRequirement:"Aprobar el Examen Oral de B1 con nota mínima de 15/20 para desbloquear el Nivel B2."},{id:"B2",code:"B2",title:"B2 · Intermedio Alto",subtitle:"Argumentación, Negociación y Debates",description:"Comunícate con soltura con nativos, participa en debates complejos y negocia con seguridad.",objectives:["Afrontar entrevistas laborales avanzadas estructurando respuestas por logros.","Debatir sobre temas actuales: tecnología, inteligencia artificial y sociedad.","Negociar acuerdos comerciales, concesiones y resolver desacuerdos de equipo.","Expresar matices, hipótesis y opiniones con conectores formales."],grammar:"Condicionales mixtos, modales de deducción pasada (must have, could have), conectores avanzados (furthermore, whereas).",examRequirement:"Aprobar el Examen Oral de B2 con nota mínima de 15/20 para desbloquear el Nivel C1."},{id:"C1",code:"C1",title:"C1 · Avanzado",subtitle:"Dominio Profesional y Expresión Nativa",description:"Domina el idioma con fluidez espontánea, oratoria de impacto y modismos culturales.",objectives:["Liderar presentaciones y negociaciones estratégicas internacionales.","Manejar dobles sentidos, modismos (idioms) y registros formales e informales.","Elaborar argumentos sofisticados y persuasivos en tiempo real sin vacilación."],grammar:"Estructuras complejas, inversión enfática, colocaciones léxicas avanzadas y fonética nativa.",examRequirement:"Nivel de Maestría Profesional alcanzado."}],Da={auto:`The student's level is unknown. Start with a friendly, accessible bilingual greeting (e.g., greet in the language, then in Spanish encourage them: "¡Hola! Si entiendes un poco, cuéntame: What is your name? Y si no entiendes nada, ¡tranquilo! Dime 'empecemos desde cero' y te enseño paso a paso"). IF THE STUDENT STAYS SILENT, HESITATES, SAYS THEY DO NOT UNDERSTAND, OR RESPONDS IN SPANISH: immediately assume they are a complete beginner (A0/A1), reassure them warmly in Spanish, switch to very simple words, teach them phrase by phrase and guide them gently.`,zero:"The student is starting from ZERO (CEFR A0). CONDUCT A BILINGUAL SPANISH-ENGLISH CLASS. Use Spanish to explain, guide, teach, and reassure them! Teach essential words and phrases one by one (greetings, polite phrases, basic daily items). Pronounce each word clearly, invite them in Spanish to repeat, praise their effort warmly in Spanish, and build their confidence step by step without any intimidation.",A1:"The student is a beginner (CEFR A1). Speak slowly and clearly, use very short sentences, basic everyday vocabulary and present tense. If they look lost or stay silent, explain in Spanish and rephrase.",A2:"The student is elementary (CEFR A2). Speak slowly, use short sentences and common vocabulary. Introduce simple past and future gently.",B1:"The student is intermediate (CEFR B1). Speak at a moderate pace with natural but not complex language. Encourage longer answers and opinions.",B2:"The student is upper-intermediate (CEFR B2). Speak naturally at normal speed, use idioms occasionally, and push for detailed, well-structured answers.",C1:"The student is advanced (CEFR C1). Speak naturally and fluently, use rich vocabulary, idioms and nuance. Focus on precision, register and sounding native."},Pn={strict:"CORRECTION MODE: STRICT. Correct almost every pronunciation, grammar and vocabulary mistake right after the student speaks. Still keep it short and continue the conversation.",balanced:"CORRECTION MODE: BALANCED. Correct the mistakes that matter: pronunciation errors that change meaning or make words hard to understand, grammar errors that are important for their level, and clearly wrong word choices. Let tiny slips pass so the conversation flows. Correct at most one or two things per turn.",fluency:"CORRECTION MODE: FLUENCY. Prioritize fluency and confidence. Only correct aloud when a mistake blocks understanding. Still call report_correction silently for other important mistakes so they appear in the student's summary, but do not mention them aloud."};function Nn(a,e,t){return e==="es"?"Spanish":e==="target"||a==="B2"||a==="C1"?t.name:a==="auto"?`Spanish for A1-B1 students, ${t.name} for B2+ students`:"Spanish"}function Ln(a){const e=ve[a.language];if(!e)throw new Error(`Idioma no soportado: ${a.language}`);const t=a.level||"auto",i=a.correctionMode||"balanced",n=Nn(t,a.explainIn||"auto",e);let s;a.customTopic&&a.customTopic.trim()?s=`The student chose this topic/context (written by them, possibly in Spanish): "${a.customTopic.trim()}". Build a realistic conversation or role-play around it. If it implies a role-play, you take the most useful counterpart role.`:a.topic?s=a.topic.scenario:s="Have a friendly free conversation and follow the student's interests.";const r=a.language==="it"?"When the scenario allows it, set it in Italy (Italian names, places, food, customs, euros).":"When the scenario allows it, use natural settings from English-speaking countries.",o=a.wordsToPractice&&a.wordsToPractice.length?`
WORDS TO PRACTICE: In previous sessions the student struggled with: ${a.wordsToPractice.slice(0,12).join(", ")}. Naturally create opportunities for them to use some of these words, and check their pronunciation.`:"",c=a.studentName?` The student's name is ${a.studentName}.`:"",u=t==="zero"?`# LANGUAGE & PEDAGOGY: BILINGUAL (SPANISH + ${e.name.toUpperCase()})
- This student is starting from ZERO (CEFR A0).
- YOUR PRIMARY SPOKEN LANGUAGE FOR GUIDANCE, EXPLANATIONS AND ENCOURAGEMENT IS SPANISH.
- DO NOT speak fast, fluent or long paragraphs in ${e.name}. It will intimidate them!
- Introduce ONE single word or short phrase at a time in ${e.name}.
- In Spanish, explain what the word means, pronounce it slowly and clearly in ${e.name}, and invite the student in Spanish to repeat it (e.g., "A ver ${a.studentName||"amigo/a"}, repite conmigo: 'Hello, good morning'...").
- Celebrate their repetition warmly in Spanish ("¡Excelente pronunciación! Muy bien."), then proceed with the next word or response.
- If the student speaks Spanish, that is completely normal and encouraged! Respond in Spanish and teach them how to express that in simple ${e.name}.`:`# LANGUAGE
- Speak ${e.name} at all times, with ${e.accent}.
- Give short explanations of corrections in ${n}.
- If the student speaks Spanish because they don't know a word, tell them the word in ${e.name}, have them say it, and continue.
- If the student explicitly asks for an explanation in Spanish, give it briefly in Spanish, then return to ${e.name}.`;return`You are ${e.teacherName}, a warm, patient and encouraging ${e.name} teacher having a live VOICE conversation with a Spanish-speaking student (from Latin America) who wants to improve their spoken ${e.name}.${c}

# GOAL
The student learns by TALKING, not by repeating drills. Keep a real, engaging conversation going on the chosen topic, and help them improve at the same time by correcting their pronunciation, grammar and vocabulary in the moment.

${u}

# LEVEL
${Da[t]||Da.auto}

# TOPIC / SCENARIO
${s}
${r}${o}
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
- Pay special attention to typical Spanish-speaker difficulties${a.language==="en"?': short vs long vowels (ship/sheep, full/fool), "th" sounds, initial "s" clusters (not "espeak" for "speak"), final consonants and "-ed" endings, "v" vs "b", "h" sound, schwa and word stress.':': double consonants (pala/palla, caro/carro), open vs closed e/o, "gli", "gn", "sc" sounds, "z" (ts/dz), stress on the correct syllable, and avoiding Spanish vowel or stress patterns.'}
- Do not invent pronunciation errors. If the audio was simply unclear, ask them to repeat instead of correcting.

# GRAMMAR AND VOCABULARY CORRECTION
- Use natural recasts: repeat their idea correctly ("Ah, you mean: 'I have been working here for two years'") and, when useful, add a very short explanation.
- Suggest more natural or professional words for the scenario when appropriate.

${Pn[i]}

# REPORTING CORRECTIONS (tool)
Every time you correct something (aloud or silently), ALSO call the function report_correction with the details so it appears on the student's screen. Call it once per mistake. Do not mention the function or the screen.

# HELP REQUESTS
Messages in square brackets like [HELP: ...] come from the app buttons, not from the student's voice. Follow them:
- [HELP: suggestions] → give the student 2-3 short example sentences they could say next, then wait.
- [HELP: slower] → from now on speak noticeably slower and simpler, and repeat your last question that way.
- [HELP: explain] → briefly explain in Spanish what you just said or asked, then repeat it in ${e.name}.
- [HELP: silence] → the student has been silent and likely did not understand. Gently check in Spanish: explain what was asked and offer a simple phrase to repeat.

# STYLE
Natural, human, friendly and professional. No lists or markdown — this is spoken audio. Never break character as an AI unless asked.`}const mt={functionDeclarations:[{name:"report_correction",description:"Shows a correction card on the student's screen. Call it once for every mistake you correct (pronunciation, grammar or vocabulary).",parameters:{type:"OBJECT",properties:{type:{type:"STRING",enum:["pronunciation","grammar","vocabulary"],description:"Kind of mistake."},said:{type:"STRING",description:"What the student said (the wrong word or phrase, as heard)."},correct:{type:"STRING",description:"The correct word or phrase."},explanation:{type:"STRING",description:"Very short explanation (max 20 words), in the explanation language."},phonetic:{type:"STRING",description:"For pronunciation: simple respelling of the correct pronunciation, e.g. KUMF-ter-bul. Optional."}},required:["type","said","correct","explanation"]}}]},On={functionDeclarations:[{name:"report_placement_result",description:"Emits the official placement diagnostic test result after evaluating the student during the oral interview.",parameters:{type:"OBJECT",properties:{level:{type:"STRING",enum:["zero","A1","A2","B1","B2","C1"],description:"The CEFR level determined: zero (A0 complete beginner), A1 (beginner), A2 (elementary), B1 (intermediate), B2 (upper-intermediate), or C1 (advanced)."},levelTitle:{type:"STRING",description:'Human-readable title in Spanish, e.g. "A1 · Principiante", "A2 · Básico", "B1 · Intermedio", etc.'},rationale:{type:"STRING",description:"Brief encouraging summary in Spanish (max 40 words) explaining why this level was diagnosed based on their answers."},strengths:{type:"ARRAY",items:{type:"STRING"},description:"List of 2-3 positive things the student demonstrated."},suggestions:{type:"ARRAY",items:{type:"STRING"},description:"List of 2-3 specific topics or skills to practice in future classes."}},required:["level","levelTitle","rationale"]}},mt.functionDeclarations[0]]};function Dn(a){const e=ve[a.language||"en"],t=a.studentName?a.studentName.trim():"alumno";return`You are ${e.teacherName}, an expert, perceptive and supportive ${e.name} examiner conducting an EXHAUSTIVE, MULTI-STAGE ORAL PLACEMENT TEST (Examen Diagnóstico Exhaustivo de Nivel) for ${t}.

# OBJECTIVE
Accurately identify ${t}'s true CEFR level across the full spectrum:
- 🌱 zero (A0 Complete beginner: no knowledge or only isolated words)
- A1 (Beginner: basic everyday words and simple present phrases)
- A2 (Elementary: can describe daily routine, simple past experiences)
- B1 (Intermediate: narrates connected events, solves real-world situations)
- B2 (Upper-intermediate: argues opinions, handles unexpected problems, fluent)
- C1 (Advanced: abstract reasoning, nuanced vocabulary, native-like flow)

# CRITICAL EXAMINER GUIDELINES (READ CAREFULLY)
1. DO NOT ask basic introductory questions like "What is your name?" or "Where are you from?". You already know the student's name (${t}).
2. The diagnostic must be THOROUGH and EXHAUSTIVE: Conduct a progressive interview with AT LEAST 4 to 6 student turns across different linguistic competencies before making your final determination.
3. NEVER diagnose after just 1 or 2 turns unless the student demonstrates zero comprehension and complete silence/inability to produce any English/Italian word.
4. Adapt in real-time:
   - If the student struggles with a tier, provide gentle scaffolding and verify their baseline.
   - If the student breezes through, immediately escalate to complex questions (hypotheticals, abstract opinions) to test for B2 and C1.

# PROGRESSIVE 4-TIER EXAMINATION PROTOCOL

## TIER 0: WARM WELCOME & EXPLANATION IN SPANISH
Start warmly in Spanish:
"¡Hola ${t}! Soy tu profesora ${e.teacherName}. Vamos a realizar tu evaluación diagnóstica exhaustiva de ${e.nameEs}. Como ya tengo tus datos, iremos directo a conversar en ${e.nameEs} para evaluar tu vocabulario, gramática en distintos tiempos verbales, fluidez y comprensión auditiva. Iremos de situaciones cotidianas hasta temas de opinión. ¡Habla con calma y explaya tus respuestas lo más que puedas! ¿Comenzamos?"
Wait for their response (e.g. "yes", "sí", "okay").

## TIER 1: DESCRIPTIVE ROUTINE & WORK / STUDIES (Present & Habitual)
Ask an open, substantive question in ${e.name}:
- EN: "To get started, tell me about your current work, studies, or daily life. What are your main responsibilities and what does a typical day look like for you?"
- IT: "Per iniziare, raccontami del tuo lavoro, dei tuoi studi o della tua vita quotidiana. Quali sono le tue attività principali e com'è una tua giornata tipo?"
* If student cannot understand or only responds in Spanish: Offer one simplified question in ${e.name}. If they still cannot form simple sentences, level is "zero" or "A1".
* If student answers with simple sentences: Note fluency and move to Tier 2.

## TIER 2: NARRATIVE & PAST EXPERIENCES (Past Simple, Continuous & Connectors)
Ask for a detailed past narration in ${e.name}:
- EN: "Now, think about a memorable experience, a past trip, or a challenging project you had. Could you describe what happened, what obstacles you faced, and how you handled them?"
- IT: "Ora pensa a un'esperienza memorabile, a un viaggio passato o a un progetto impegnativo. Potresti descrivere cosa è successo, quali difficoltà hai affrontato e come le hai gestite?"
* Listen for: Regular/irregular past verbs, time prepositions, narrative connectors (e.g. 'although', 'because', 'after that').
* If they struggle with past tenses: Likely A1 or A2.
* If they narrate naturally: Proceed to Tier 3.

## TIER 3: SITUATIONAL PROBLEM-SOLVING & INTERACTION (Modals & Conditionals)
Present a realistic unexpected challenge in ${e.name}:
- EN: "Let's imagine you travel abroad and arrive at your hotel or the airport, but they tell you your reservation was cancelled by error and there are no available rooms or flights. What would you say to the manager to negotiate a practical solution?"
- IT: "Immagina di viaggiare all'estero e arrivare in hotel o in aeroporto, ma ti dicono che la prenotazione è stata cancellata per errore e non ci sono camere o voli disponibili. Cosa diresti al responsabile per trovare una soluzione?"
* Listen for: Polite requests (e.g. 'could you', 'I would appreciate'), conditional forms ('if... could you please'), negotiation skills.
* If they handle this effectively with clear explanations: At least B1. Proceed to Tier 4.

## TIER 4: CRITICAL ANALYSIS & ABSTRACT OPINION (B2 / C1 Proficiency)
Ask a thought-provoking analytical question in ${e.name}:
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
  "Muchas gracias por realizar este diagnóstico exhaustivo, ${t}. En un momento sabremos tu nivel oficial..."
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
Professional, rigorous yet motivating academic examiner. Speak naturally in audio format (no markdown or bullet points in spoken output).`}const re=["zero","A1","A2","B1","B2","C1"];function oa(a){const e=re.indexOf(a);return e===-1||e>=re.length-1?null:re[e+1]}function O(a){return{zero:"🌱 Desde cero (A0)",A1:"A1 · Principiante",A2:"A2 · Básico",B1:"B1 · Intermedio",B2:"B2 · Intermedio alto",C1:"C1 · Avanzado"}[a]||a}const Ma={zero_to_A1:[{id:"z1",title:"Presentación en un evento",desc:"Saludar, decir tu nombre, de dónde eres y qué profesión o actividad realizas."},{id:"z2",title:"En el café o restaurante",desc:"Saludar al mesero, pedir algo simple de comer o beber y agradecer."},{id:"z3",title:"Llegada al hotel",desc:"Presentarte en recepción, deletrear tu nombre y pedir tu llave."},{id:"z4",title:"Conocer a un colega",desc:"Romper el hielo con un nuevo compañero de clase o trabajo compartiendo gustos básicos."}],A1_to_A2:[{id:"a1_1",title:"Fin de semana y planes",desc:"Explicar qué hiciste el fin de semana pasado y qué te gustaría hacer el próximo."},{id:"a1_2",title:"Tu rutina laboral o académica",desc:"Describir a qué hora comienzas, tus responsabilidades diarias y tus compañeros."},{id:"a1_3",title:"Consulta de salud o farmacia",desc:"Explicar síntomas sencillos como dolor de cabeza o cansancio y pedir una recomendación."},{id:"a1_4",title:"Tu ciudad y lugares favoritos",desc:"Describir cómo es tu ciudad, cómo te trasladas y qué lugares recomiendas visitar."}],A2_to_B1:[{id:"a2_1",title:"Resolución de un reclamo de viaje",desc:"Explicar un problema con un vuelo o equipaje retrasado y acordar una solución."},{id:"a2_2",title:"Entrevista sobre experiencia previa",desc:"Detallar una experiencia laboral o proyecto pasado que haya sido un desafío."},{id:"a2_3",title:"Planificación de un evento corporativo",desc:"Proponer fecha, lugar y actividades justificando tu elección con conectores."},{id:"a2_4",title:"Una anécdota inolvidable",desc:"Narrar un viaje o experiencia personal conectando causas y consecuencias."}],B1_to_B2:[{id:"b1_1",title:"Presentación y defensa de un proyecto",desc:"Presentar una propuesta ante un cliente o directivo respondiendo a objeciones."},{id:"b1_2",title:"Manejo de una crisis de equipo",desc:"Analizar un conflicto de trabajo o plazo vencido y proponer un plan de acción."},{id:"b1_3",title:"Debate sobre trabajo remoto vs presencial",desc:"Argumentar ventajas, desventajas y dar tu punto de vista con lenguaje matizado."},{id:"b1_4",title:"Impacto de la inteligencia artificial",desc:"Expresar tu opinión sobre el futuro del empleo y los cambios tecnológicos."}],B2_to_C1:[{id:"b2_1",title:"Negociación estratégica internacional",desc:"Liderar una negociación de contrato discutiendo riesgos, términos y concesiones."},{id:"b2_2",title:"Análisis de liderazgo y cultura organizacional",desc:"Debatir estrategias de gestión de talento y visión corporativa a largo plazo."}]};function Mn(a,e,t=null){const i=`${a}_to_${e}`,n=Ma[i]||Ma.A1_to_A2,s=n.filter(o=>o.id!==t),r=s.length>0?s:n;return r[Math.floor(Math.random()*r.length)]}const $n={functionDeclarations:[{name:"report_level_exam",description:"Emits the final grade for the oral level-up exam on a 0-20 scale. Passing score is 15 or higher.",parameters:{type:"OBJECT",properties:{score:{type:"INTEGER",description:"The final grade between 0 and 20. Strict passing grade is 15 or above."},passed:{type:"BOOLEAN",description:"True if score >= 15, false if score < 15."},targetLevel:{type:"STRING",description:"The target level evaluated, e.g. A2, B1, etc."},targetLevelTitle:{type:"STRING",description:"The human-readable title of the target level in Spanish."},rubric:{type:"OBJECT",properties:{fluency:{type:"INTEGER",description:"Score 0 to 5 for natural flow, pauses, and response time."},grammar:{type:"INTEGER",description:"Score 0 to 5 for sentence structure and verb tenses."},pronunciation:{type:"INTEGER",description:"Score 0 to 5 for clarity, phonemes, and intonation."},vocabulary:{type:"INTEGER",description:"Score 0 to 5 for word choice, range, and precision."}},required:["fluency","grammar","pronunciation","vocabulary"]},feedback:{type:"STRING",description:"Detailed, constructive evaluation in Spanish (max 50 words)."},strengths:{type:"ARRAY",items:{type:"STRING"},description:"2-3 specific things the student did well during the exam."},areasToImprove:{type:"ARRAY",items:{type:"STRING"},description:"2-3 areas or grammar/vocabulary topics the student needs to reinforce."}},required:["score","passed","targetLevel","targetLevelTitle","feedback"]}},mt.functionDeclarations[0]]};function Un(a){const e=ve[a.language||"en"],t=a.studentName?a.studentName.trim():"alumno",i=a.currentLevel||"A1",n=a.targetLevel||oa(i)||"A2",s=O(i),r=O(n),o=a.scenario||{title:"Conversación de evaluación",desc:"Preguntas representativas del nivel"};return`You are ${e.teacherName}, a distinguished, fair and supportive ${e.name} examiner conducting the OFFICIAL LEVEL-UP ORAL EXAM (Examen de Ascenso de Nivel) for ${t}.

# EXAM PARAMETERS
- CURRENT LEVEL: ${s} (${i})
- TARGET LEVEL: ${r} (${n})
- GRADING SCALE: 0 to 20 (Peruvian/Latin American vigesimal grading system).
- PASSING CRITERIA: A score of 15 OR HIGHER is STRICTLY REQUIRED to pass and level up. If the score is 14 or lower, the student does NOT pass and must continue practicing at ${s}.
- UNIQUE DYNAMIC SCENARIO (Never repeated):
  * Topic: "${o.title}"
  * Context: "${o.desc}"

# STRUCTURE OF THE EXAM (4 PHASES)

1. WELCOME IN SPANISH:
   Start warmly in Spanish:
   "¡Bienvenido/a a tu Examen de Ascenso a ${r}, ${t}! Soy tu profesora ${e.teacherName}. Hoy evaluaremos tu nivel en una situación sobre '${o.title}'. Recuerda que para aprobar y subir de nivel necesitas una nota mínima de 15 sobre 20. ¡Tómalo con calma y da lo mejor de ti! ¿Comenzamos?"
   Wait for their response.

2. EXAMINATION QUESTIONS (IN ${e.name}):
   Conduct the exam strictly inside the assigned scenario ("${o.title}").
   Ask 3 to 4 sequential, probing questions:
   - Question 1: Icebreaker in the scenario (basic interaction).
   - Question 2: Narrative or description of routine/past related to the scenario.
   - Question 3: Problem solving or handling an unexpected detail in the scenario.
   - Question 4: Expressing personal view, comparison or preference.

3. EVALUATION RUBRIC (Sum of 4 criteria = Score out of 20):
   - Fluency (0 to 5 pts): Pace, confidence, hesitations.
   - Grammar (0 to 5 pts): Correct use of tenses required for ${n}.
   - Pronunciation (0 to 5 pts): Comprehensibility, clear phonemes.
   - Vocabulary (0 to 5 pts): Appropriate vocabulary for "${o.title}" and ${n}.
   Calculate the TOTAL SCORE = Fluency + Grammar + Pronunciation + Vocabulary (0 to 20).
   Set passed = (TOTAL SCORE >= 15).

4. HOW TO CONCLUDE (MANDATORY SPEECH SEQUENCE):
   - FIRST, say aloud in Spanish:
     "Muchas gracias por rendir tu examen, ${t}. En un momento procesaré tu calificación..."
   - THEN CALL the tool report_level_exam with score, passed, rubric, feedback, strengths, and areasToImprove.
   - FINALLY announce their score and result aloud in Spanish:
     * IF PASSED (Score >= 15):
       "¡Felicitaciones ${t}! Has obtenido una nota de [SCORE] sobre 20. ¡Has aprobado el examen con éxito y asciendes oficialmente al nivel ${r}! Tu progreso está guardado y tus próximas clases serán en este nuevo nivel. ¡Excelente trabajo!"
     * IF NOT PASSED (Score < 15):
       "Buen esfuerzo, ${t}. Tu nota final ha sido de [SCORE] sobre 20. Para subir a ${r} requerimos un mínimo de 15. Te recomiendo reforzar [AREAS_TO_IMPROVE]. Continuarás practicando en tu nivel actual y muy pronto podrás rendir un nuevo examen con una situación diferente. ¡Ánimo!"
   - After this announcement, stop speaking and conclude.

# STYLE
Professional examiner: encouraging yet objective. Spoken audio format only.`}const jn={zero:[{id:"zero_1",num:1,title:"Saludos, cortesía y primer contacto",desc:"Aprende a saludar, responder cómo estás y dar las gracias sin miedo.",phrases:["Hello / Hi","Good morning / afternoon","Please & Thank you","How are you? - I am fine!"],goal:"Saludar con naturalidad, responder cómo te encuentras y usar fórmulas de cortesía esenciales."},{id:"zero_2",num:2,title:"Presentación personal y de dónde eres",desc:"Aprende a decir tu nombre, de qué país eres y dar una bienvenida cordial.",phrases:["My name is...","I am from Peru","Nice to meet you","Where are you from?"],goal:"Presentarte con tu nombre, nacionalidad y origen con pronunciación clara."},{id:"zero_3",num:3,title:"Números del 1 al 20 y decir tu edad",desc:"Cuenta del 1 al 20, di tu número de teléfono y menciona cuántos años tienes.",phrases:["One, two, three...","I am ... years old","How old are you?","My number is..."],goal:"Dominar la pronunciación de los números del 1 al 20 y decir tu edad."},{id:"zero_4",num:4,title:"Colores y descripciones visuales simples",desc:"Identifica los colores principales y describe objetos de forma sencilla.",phrases:["It is red / blue / black","What color is it?","A white car","My favorite color is green"],goal:"Reconocer los colores básicos y describir visualmente cosas a tu alrededor."},{id:"zero_5",num:5,title:"Frases de supervivencia en clase",desc:"Aprende a pedir que repitan, decir que no entendiste y pedir ayuda sin vergüenza.",phrases:["I do not understand","Can you repeat, please?","How do you say... in English?","More slowly, please"],goal:"Manejar con soltura las 4 frases indispensables para pedir auxilio en cualquier clase."},{id:"zero_6",num:6,title:"Mi familia cercana y seres queridos",desc:"Nombra a los miembros principales de tu familia: padres, hermanos e hijos.",phrases:["This is my mother / father","I have two brothers","My sister is happy","I love my family"],goal:"Presentar a tu familia directa con oraciones cortas y afectuosas."},{id:"zero_7",num:7,title:"Objetos cotidianos y del hogar",desc:"Nombra cosas esenciales que usas todos los días en tu casa o bolsillo.",phrases:["This is a phone / book","Where are my keys?","The table is clean","Here is my computer"],goal:"Identificar y nombrar al menos 5 objetos cotidianos del entorno."},{id:"zero_8",num:8,title:"Días de la semana y momentos del día",desc:"Ubícate en el tiempo: de lunes a domingo, mañana, tarde y noche.",phrases:["Today is Monday","On Friday I relax","In the morning / at night","Have a nice weekend!"],goal:"Decir qué día es hoy y ubicar actividades en la mañana, tarde o noche."},{id:"zero_9",num:9,title:"Números del 20 al 100 y decir la hora",desc:"Aprende las decenas (twenty, thirty...) y pregunta qué hora es.",phrases:["Twenty, thirty, forty...","What time is it?","It is three o'clock","It costs fifty dollars"],goal:"Preguntar y responder la hora en punto y manejar cantidades del 20 al 100."},{id:"zero_10",num:10,title:"Comidas y bebidas esenciales",desc:"Nombra alimentos básicos para pedir un desayuno o almuerzo sencillo.",phrases:["Water, please","I like coffee and tea","Bread and cheese","Delicious apple / fruit"],goal:"Expresar qué te gusta comer o beber y pedir alimentos básicos."},{id:"zero_11",num:11,title:"Emociones y estados de ánimo",desc:"Expresa cómo te sientes física y emocionalmente hoy.",phrases:["I am happy today","I am very tired","Are you hungry?","I feel great!"],goal:"Comunicar estados de ánimo cotidianos (alegría, cansancio, apetito)."},{id:"zero_12",num:12,title:"Lugares básicos de la ciudad",desc:"Nombra los puntos esenciales de una ciudad: banco, hospital, parque, escuela.",phrases:["Where is the park?","The bank is near","I go to the supermarket","At school / hospital"],goal:"Reconocer e indicar los 5 lugares urbanos más importantes."},{id:"zero_13",num:13,title:"Ropa y prendas de vestir cotidianas",desc:"Aprende a nombrar lo que llevas puesto: camisa, pantalón, zapatos y chaqueta.",phrases:["I wear a blue shirt","My shoes are black","I need a jacket","It is warm today"],goal:"Describir qué ropa tienes puesta usando colores básicos."},{id:"zero_14",num:14,title:"Preguntas clave: What, Where, Who y How",desc:"Aprende las 4 palabras mágicas para hacer cualquier pregunta básica.",phrases:["What is your name?","Where is the bathroom?","Who is she?","How are you doing?"],goal:"Formular preguntas fundamentales para interactuar en el mundo real."},{id:"zero_15",num:15,title:"Repaso integrador: Mi primera conversación completa",desc:"Pon todo en práctica: saluda, preséntate, habla de tu día y despídete con orgullo.",phrases:["Hello, nice to meet you!","I am from Peru and I am fine","I like learning English","See you soon!"],goal:"Sostener una conversación guiada de 10 minutos integrando todo lo aprendido en Nivel 0."}],A1:[{id:"A1_1",num:1,title:"Mi rutina diaria y horarios habituales",desc:"Describe tus actividades desde que despiertas hasta que te acuestas usando horas.",phrases:["I wake up at 7 AM","I have breakfast with coffee","I start work at 9 o'clock","In the evening I relax"],goal:"Narrar tu día típico con verbos de acción y horas precisas en presente simple."},{id:"A1_2",num:2,title:"Mi familia, amigos y profesiones",desc:"Describe a tus familiares, amigos y a qué se dedican laboralmente.",phrases:["This is my brother, he is an engineer","She works at a hospital","They are very friendly","What do you do?"],goal:"Hablar de terceras personas (He/She) usando adjetivos y profesiones cotidianas."},{id:"A1_3",num:3,title:"En el café o restaurante: pedir y pagar",desc:"Pide comida, bebidas, pregunta precios y solicita la cuenta con naturalidad.",phrases:["I would like a coffee, please","How much does this cost?","Can I have the bill?","Everything was delicious"],goal:"Realizar un pedido completo de comida y pagar en un restaurante o cafetería."},{id:"A1_4",num:4,title:"Gustos, aficiones y tiempo libre",desc:"Expresa qué actividades te apasionan, cuáles disfrutas y cuáles no toleras.",phrases:["I love listening to music","I enjoy playing soccer","I don't like cooking","My favorite hobby is..."],goal:"Expresar preferencias, pasatiempos y opiniones sobre actividades de ocio."},{id:"A1_5",num:5,title:"Describir mi casa, habitaciones y muebles",desc:"Explica cómo es tu hogar, cuántas habitaciones tiene y qué muebles hay.",phrases:["There is a big sofa in the living room","My apartment has two bedrooms","The kitchen is modern","I like my balcony"],goal:"Describir tu vivienda usando There is / There are y preposiciones de lugar."},{id:"A1_6",num:6,title:"El clima, las estaciones y cómo vestir",desc:"Habla sobre el tiempo atmosférico de hoy y la ropa adecuada para el clima.",phrases:["It is sunny and hot today","It is raining outside, take an umbrella","Winter is cold","I am wearing a sweater"],goal:"Comentar el estado del tiempo y justificar la ropa que llevas puesta."},{id:"A1_7",num:7,title:"De compras en una tienda de ropa",desc:"Pregunta por tallas, pide probarte prendas y decide qué comprar.",phrases:["Do you have this in medium size?","Can I try this shirt on?","Where are the fitting rooms?","I will take it"],goal:"Interactuar con el vendedor en una tienda de ropa y tomar decisiones de compra."},{id:"A1_8",num:8,title:"Transporte público y compra de boletos",desc:"Múevete en metro, autobús o taxi y compra billetes ida y vuelta.",phrases:["One round-trip ticket to downtown, please","Which bus goes to the center?","How long does it take?","Take me to this address"],goal:"Adquirir pasajes de transporte público y solicitar paradas al conductor."},{id:"A1_9",num:9,title:"Pedir y dar direcciones en la calle",desc:"Oriéntate en una ciudad desconocida siguiendo indicaciones espaciales.",phrases:["Excuse me, where is the nearest bank?","Go straight for two blocks","Turn left at the traffic light","It is on your right"],goal:"Solicitar y comprender instrucciones para llegar a un punto específico."},{id:"A1_10",num:10,title:"Describir a las personas: físico y personalidad",desc:"Describe cómo luce alguien (estatura, cabello, ojos) y cómo es su carácter.",phrases:["He is tall with dark hair","She has brown eyes and a warm smile","He is very polite and hardworking","She is funny and smart"],goal:"Describir los rasgos físicos y cualidades de personalidad de un amigo o colega."},{id:"A1_11",num:11,title:"Planes para el fin de semana y ocio",desc:"Comenta tus planes e invita a alguien a salir o hacer una actividad juntos.",phrases:["This weekend I am going to watch a movie","Would you like to join me?","Let's meet at 6 PM","Sounds like a great plan!"],goal:"Hacer invitaciones, aceptar planes y coordinar un encuentro de fin de semana."},{id:"A1_12",num:12,title:"En el supermercado y lista de compras",desc:"Pide cantidades y pesos de frutas, verduras, lácteos y carnes.",phrases:["A kilo of apples, please","Where can I find milk and eggs?","Do you have fresh bread?","Is this on sale?"],goal:"Manejar vocabulario de alimentos y solicitar cantidades exactas en el supermercado."},{id:"A1_13",num:13,title:"Habilidades, talentos y lo que puedes hacer",desc:"Habla sobre lo que sabes hacer usando el verbo modal Can y Can't.",phrases:["I can speak Spanish and a little English","Can you drive a car?","I can swim very well","I cannot play the guitar yet"],goal:"Expresar habilidades personales y preguntar a otros qué son capaces de hacer."},{id:"A1_14",num:14,title:"Redactar y responder mensajes y correos breves",desc:"Aprende a redactar mensajes informativos y de cortesía profesional simple.",phrases:["Dear Mr. Smith / Hi Emma","I am writing to confirm our meeting","Please let me know if you are free","Best regards"],goal:"Estructurar un mensaje o correo electrónico sencillo con apertura y despedida formal."},{id:"A1_15",num:15,title:"Repaso integrador: Un día en la vida en el extranjero",desc:"Simula un día completo: despiertas, pides transporte, compras y conversas con amigos.",phrases:["I wake up early and take the bus","I order lunch at a cafe","I meet my friends after work","It was a wonderful day"],goal:"Consolidar todas las competencias de Nivel A1 en un diálogo situacional continuo."}],A2:[{id:"A2_1",num:1,title:"Mi fin de semana y anécdotas pasadas (Past Simple)",desc:"Cuenta qué hiciste el fin de semana pasado usando verbos regulares e irregulares.",phrases:["Last weekend I visited my grandparents","We ate delicious homemade food","I watched an exciting movie","Did you have a good time?"],goal:"Utilizar el pasado simple afirmativo, negativo e interrogativo con fluidez."},{id:"A2_2",num:2,title:"En el aeropuerto: check-in y puerta de embarque",desc:"Desenvuélvete en el mostrador de facturación, entrega de maletas y control de seguridad.",phrases:["Here is my passport and boarding pass","I only have one carry-on bag","Where is gate 14?","Is the flight on time?"],goal:"Manejar la comunicación clave en el aeropuerto sin contratiempos."},{id:"A2_3",num:3,title:"Hospedarse en un hotel y solicitar servicios",desc:"Haz el check-in en el hotel, pregunta por el wifi, desayuno y pide toallas extra.",phrases:["I have a reservation under the name of...","What time is breakfast served?","Could you send extra towels?","The air conditioner is not working"],goal:"Gestionar tu estadía en un hotel y reportar pequeños inconvenientes en la habitación."},{id:"A2_4",num:4,title:"Salud, síntomas comunes y en la farmacia",desc:"Explica malestares físicos habituales y pide medicamentos adecuados.",phrases:["I have had a bad headache and a cough","I feel dizzy and feverish","What medicine do you recommend?","How many times a day should I take this?"],goal:"Describir síntomas de salud y comprender instrucciones de posología en la farmacia."},{id:"A2_5",num:5,title:"Comparaciones: ciudades, productos y estilos de vida",desc:"Compara dos ciudades o productos usando adjetivos comparativos y superlativos.",phrases:["Lima is much bigger than Cusco","Public transport here is more reliable","This laptop is the best option","It is cheaper than that one"],goal:"Construir comparaciones equilibradas fundamentando ventajas y desventajas."},{id:"A2_6",num:6,title:"Planes e intenciones futuras con Going to y Will",desc:"Diferencia planes ya decididos (going to) de decisiones espontáneas o promesas (will).",phrases:["Next month I am going to start a new course","We are going to travel to Europe","Don't worry, I will help you","I think it will be great"],goal:"Expresar intenciones futuras planificadas y predicciones con seguridad."},{id:"A2_7",num:7,title:"Recuerdos de la infancia y costumbres pasadas (Used to)",desc:"Habla sobre las cosas que solías hacer de niño y cómo ha cambiado tu vida.",phrases:["When I was a child, I used to play outside all day","I used to live in a small town","I didn't use to like vegetables","Things were different back then"],goal:"Relatar hábitos y costumbres de tu niñez con la estructura Used to."},{id:"A2_8",num:8,title:"En el restaurante formal: quejas amables y sugerencias",desc:"Pide cambios en tu plato de forma educada o solicita la recomendación del chef.",phrases:["Excuse me, my soup is a bit cold","Could we get the dressing on the side?","What is the specialty of the house?","Could you bring us the dessert menu?"],goal:"Comunicar preferencias gastronómicas y realizar quejas educadas en un restaurante."},{id:"A2_9",num:9,title:"Alquiler de vivienda y trato con el propietario",desc:"Pregunta por condiciones de alquiler, depósito en garantía y normas del edificio.",phrases:["Is the deposit refundable?","Are utilities included in the monthly rent?","Are pets allowed in the building?","When is the apartment available?"],goal:"Hacer preguntas indispensables para alquilar una habitación o departamento."},{id:"A2_10",num:10,title:"Dar instrucciones y recetas paso a paso",desc:"Explica cómo preparar un plato típico o usar una aplicación mediante conectores de secuencia.",phrases:["First, chop the onions and garlic","Next, heat the pan with some oil","Then, stir constantly for five minutes","Finally, serve it hot with rice"],goal:"Utilizar conectores de orden (First, Next, Then, After that, Finally) con fluidez."},{id:"A2_11",num:11,title:"Experiencias de viaje memorables y turismo",desc:"Narra un viaje que te haya marcado, lugares que visitaste y personas que conociste.",phrases:["Two years ago I traveled to the mountains","The view was absolutely breathtaking","The local people were very welcoming","I will never forget that experience"],goal:"Conectar vivencias de viaje expresando emociones y recuerdos vívidos."},{id:"A2_12",num:12,title:"Entrevista de trabajo básica: experiencia y disponibilidad",desc:"Responde preguntas iniciales sobre tus empleos anteriores y horario de trabajo.",phrases:["I worked as a customer assistant for two years","I am responsible, punctual and organized","I am available to start immediately","I work well under pressure"],goal:"Exponer tu experiencia laboral y cualidades de perfil en una entrevista inicial."},{id:"A2_13",num:13,title:"El medio ambiente, reciclaje y la naturaleza",desc:"Habla sobre el cuidado del planeta, hábitos de reciclaje y animales.",phrases:["We should reduce plastic waste","I always recycle glass and paper","Pollution is a major problem in big cities","Protecting wildlife is essential"],goal:"Expresar opiniones básicas sobre ecología y hábitos de sostenibilidad."},{id:"A2_14",num:14,title:"Celebraciones, cumpleaños y tradiciones culturales",desc:"Describe cómo celebras fechas especiales como cumpleaños, Navidad o Año Nuevo.",phrases:["In my country, we celebrate with traditional music and dance","We gather with family for a big dinner","We exchange gifts at midnight","It is a time of joy"],goal:"Explicar tradiciones y celebraciones culturales a personas de otros países."},{id:"A2_15",num:15,title:"Repaso integrador: Planificar un viaje soñado de inicio a fin",desc:"Integra vuelos, hotel, actividades pasadas y futuras en un diálogo de 10 minutos.",phrases:["We are planning our trip to Rome","We already booked our flight and hotel","We want to visit historic monuments","It will be an unforgettable adventure"],goal:"Demostrar dominio integral de los tiempos presentes, pasados y futuros de Nivel A2."}],B1:[{id:"B1_1",num:1,title:"Experiencias de vida: Present Perfect vs Past Simple",desc:"Distingue con precisión acciones concluidas en el pasado de experiencias acumuladas.",phrases:["I have worked in sales for five years","I lived abroad in 2021","Have you ever tried skydiving?","I haven't finished the report yet"],goal:"Diferenciar cuándo usar el Present Perfect (experiencia) y el Past Simple (momento específico)."},{id:"B1_2",num:2,title:"Reclamos y resolución de imprevistos con aerolíneas y hoteles",desc:"Maneja situaciones conflictivas como pérdida de equipaje o cancelaciones con firmeza educada.",phrases:["I am afraid there has been a serious misunderstanding","My luggage hasn't arrived on the carousel","Could you please look into this matter?","I expect adequate compensation"],goal:"Defender tus derechos como cliente con argumentos educados y vocabulario formal."},{id:"B1_3",num:3,title:"Trayectoria profesional, roles y metas de carrera",desc:"Explica en detalle tus responsabilidades clave, proyectos liderados y aspiraciones.",phrases:["In my current role, I oversee project execution","One major milestone was increasing customer retention","I am eager to broaden my expertise","I excel at problem solving"],goal:"Articular un discurso profesional convincente sobre tu desarrollo laboral."},{id:"B1_4",num:4,title:"Consejos, hipótesis y segundo condicional (If I were you...)",desc:"Brinda recomendaciones empáticas y reflexiona sobre situaciones hipotéticas e imaginarias.",phrases:["If I were in your shoes, I would reconsider that offer","What would you do if you won the lottery?","If we had more budget, we could expand","You ought to consult a specialist"],goal:"Manejar el segundo condicional para reflexionar sobre escenarios hipotéticos y aconsejar."},{id:"B1_5",num:5,title:"Entrevista de trabajo: responder sobre fortalezas y debilidades",desc:"Supera preguntas desafiantes demostrando autoconocimiento y capacidad de aprendizaje.",phrases:["One of my greatest strengths is my resilience","An area I have been actively improving is delegation","I thrive in collaborative team environments","Could you describe the team culture?"],goal:"Responder a preguntas de comportamiento laboral con madurez y elocuencia."},{id:"B1_6",num:6,title:"Opinión sobre noticias, redes sociales e impacto digital",desc:"Debate sobre los beneficios y riesgos de la hiperconectividad y los medios de comunicación.",phrases:["Social media has transformed how we communicate","On the positive side... however, on the downside...","Fake news is becoming increasingly pervasive","In my perspective, balance is key"],goal:"Construir argumentos contrastando puntos de vista a favor y en contra."},{id:"B1_7",num:7,title:"Manejo del estrés, balance vida-trabajo y bienestar mental",desc:"Conversa sobre la desconexión digital, el agotamiento profesional y hábitos saludables.",phrases:["Maintaining a healthy work-life balance is crucial","Burnout is a real concern in modern workplaces","I set clear boundaries between work and personal time","Regular exercise helps clear my mind"],goal:"Expresar ideas complejas sobre salud mental, productividad y estilo de vida."},{id:"B1_8",num:8,title:"Vida en el extranjero: choque cultural y adaptación",desc:"Comenta los desafíos de vivir en otro país, costumbres diferentes y hacer amigos internacionales.",phrases:["Adapting to a new culture requires an open mind","I initially experienced culture shock regarding meals","It takes time to build a solid network","The experience made me much more independent"],goal:"Reflexionar sobre la diversidad cultural y el proceso de adaptación migratoria."},{id:"B1_9",num:9,title:"Expresar acuerdos y desacuerdos con diplomacia",desc:"Debate sin ofender: formula objeciones con elegancia y busca puntos medios de consenso.",phrases:["I see your point, but don't you think that...?","I respect your view, although I see it differently","Up to a point I agree, but we must consider...","We seem to be on the same page regarding..."],goal:"Negociar posturas encontradas manteniendo una comunicación constructiva y asertiva."},{id:"B1_10",num:10,title:"Negociación cotidiana y cotización de servicios",desc:"Pide presupuestos para remodelaciones, eventos o consultorías y negocia plazos de entrega.",phrases:["Could you provide an itemized quote?","Is there any flexibility regarding the delivery date?","What guarantees or warranties are included?","If we commit today, can you offer a discount?"],goal:"Negociar condiciones de contratos de servicios cotidianos de forma profesional."},{id:"B1_11",num:11,title:"Cine, literatura y análisis de argumentos",desc:"Recomienda películas o libros analizando la trama, personajes y giros inesperados.",phrases:["The plot revolves around an unexpected discovery","What struck me most was the character development","The ending caught me completely off guard","I highly recommend it because..."],goal:"Elaborar reseñas críticas y fundamentar recomendaciones culturales."},{id:"B1_12",num:12,title:"Resolver malentendidos y disculpas profesionales",desc:"Aclara una confusión en el trabajo por correo o llamada sin culpar a otros injustamente.",phrases:["I wanted to clear up any confusion regarding our email","I sincerely apologize for the delay","Moving forward, let's implement a clearer protocol","Thank you for bringing this to my attention"],goal:"Desactivar tensiones laborales y proponer soluciones correctivas con profesionalismo."},{id:"B1_13",num:13,title:"Consumo responsable y estilo de vida sostenible",desc:"Debate sobre la economía circular, compras éticas y huella de carbono personal.",phrases:["Fast fashion has a devastating environmental footprint","Consumers are demanding greater transparency","Supporting local businesses creates sustainable value","Small daily habits can make a noticeable difference"],goal:"Argumentar sobre dilemas ecológicos contemporáneos con vocabulario temático rico."},{id:"B1_14",num:14,title:"Describir procesos técnicos y cambios tecnológicos",desc:"Explica cómo funciona una herramienta digital o el impacto de la nube y la automatización.",phrases:["The system automatically syncs data across platforms","Cloud computing eliminates the need for local servers","It streamlines everyday operations","Users need to undergo thorough onboarding"],goal:"Explicar el funcionamiento de una herramienta o proceso técnico con claridad."},{id:"B1_15",num:15,title:"Conversación espontánea: Café virtual y debate de actualidad",desc:"Sostén una charla fluida y natural de 10 minutos saltando de tema con total soltura.",phrases:["Speaking of that, did you hear about...?","That reminds me of something similar","To be perfectly honest with you...","It was great catching up today!"],goal:"Consolidar la fluidez conversacional espontánea para alcanzar el umbral de B2."}],B2:[{id:"B2_1",num:1,title:"Entrevista laboral por competencias (Método STAR)",desc:"Estructura respuestas de alto impacto: Situación, Tarea, Acción y Resultado cuantificable.",phrases:["In that challenging situation, our priority was...","My assigned task was to restructure...","I took the initiative to streamline the workflow","As a direct result, revenue increased by 20%"],goal:"Articular respuestas profesionales convincentes siguiendo el estándar internacional STAR."},{id:"B2_2",num:2,title:"Negociación comercial estratégica y manejo de objeciones",desc:"Defiende tu propuesta de valor, analiza contraofertas y cierra acuerdos comerciales sólidos.",phrases:["We are prepared to meet your terms provided that...","From our strategic standpoint...","Would you consider compromising on the payment schedule?","Let’s draft the preliminary agreement"],goal:"Manejar objeciones comerciales con diplomacia y lenguaje persuasivo de alto nivel."},{id:"B2_3",num:3,title:"Debate formal: Inteligencia Artificial, ética y futuro laboral",desc:"Argumenta sobre la automatización, privacidad de datos y regulación internacional.",phrases:["On the one hand... whereas on the other hand...","It poses profound ethical dilemmas","Empirical research indicates a shift toward hybrid roles","We must establish rigorous regulatory guardrails"],goal:"Defender posturas complejas usando conectores de discurso formales y léxico avanzado."},{id:"B2_4",num:4,title:"Hipótesis retrospectivas y condicionales mixtos",desc:"Analiza causas y consecuencias de decisiones pasadas con modales perfectos.",phrases:["If we had acted earlier, we wouldn't be facing this bottleneck now","They must have underestimated the initial risks","Could they have foreseen the market disruption?","Had we known the real costs..."],goal:"Formular hipótesis retrospectivas precisas utilizando condicionales mixtos y modales pasados."},{id:"B2_5",num:5,title:"Liderazgo de equipos y resolución de conflictos internos",desc:"Facilita la mediación entre dos áreas en desacuerdo y reorienta las metas comunes.",phrases:["Let's focus on our overarching corporate objectives","I acknowledge both perspectives have merit","How can we align these conflicting priorities?","Accountability must be shared across departments"],goal:"Mediar en tensiones organizacionales demostrando inteligencia emocional y liderazgo."},{id:"B2_6",num:6,title:"Presentación ejecutiva de un proyecto o pitch de negocios",desc:"Capta la atención de inversores con una propuesta de valor sólida y datos de tracción.",phrases:["The market opportunity we are targeting is valued at...","Our core competitive edge lies in...","To date, we have achieved steady month-over-month growth","We are seeking strategic capital to scale"],goal:"Exponer un proyecto innovador cautivando a la audiencia con oratoria profesional."},{id:"B2_7",num:7,title:"Análisis crítico de datos, tendencias y proyecciones",desc:"Interpreta gráficos financieros, fluctuaciones de mercado e indicadores de rendimiento.",phrases:["The data clearly demonstrates an upward trajectory","There is a noticeable discrepancy between forecast and actuals","This metric indicates impending market saturation","We should extrapolate long-term trends cautiously"],goal:"Explicar estadísticas, tendencias e insights analíticos con precisión técnica."},{id:"B2_8",num:8,title:"Argumentación persuasiva y oratoria frente a objeciones",desc:"Rebate contraargumentos agresivos manteniendo la compostura y la claridad retórica.",phrases:["I appreciate that objection; nonetheless, let me clarify...","Allow me to dismantle that assumption with tangible evidence","That may appear true on the surface, but deeper analysis reveals...","The bottom line remains unchanged"],goal:"Persuadir a un interlocutor escéptico utilizando razonamiento lógico y hechos contrastados."},{id:"B2_9",num:9,title:"Diplomacia corporativa y redacción de acuerdos formales",desc:"Redacta memorandos de entendimiento (MoU) y cláusulas de confidencialidad con elegancia.",phrases:["Both parties mutually agree to uphold strict confidentiality","Subject to final regulatory approval...","This clause ensures reciprocal accountability","In the event of a dispute, arbitration shall take place in..."],goal:"Manejar el registro formal escrito y verbal propio de los acuerdos interinstitucionales."},{id:"B2_10",num:10,title:"Manejo de crisis comunicacional en una empresa",desc:"Actúa como portavoz ante una filtración de datos o defecto de producto ante la prensa.",phrases:["We take full responsibility for rectifying this oversight","Our immediate focus is ensuring customer security","An independent audit is currently underway","We pledge complete transparency throughout this process"],goal:"Gestionar una rueda de prensa de crisis protegiendo la reputación corporativa."},{id:"B2_11",num:11,title:"Modismos profesionales y lenguaje figurado avanzado",desc:"Comprende y utiliza modismos del mundo de los negocios en reuniones de alto nivel.",phrases:["Let's touch base offline regarding that proposal","We need to think outside the box to bypass this roadblock","It boils down to maximizing our bandwidth","Let's not get bogged down in the weeds"],goal:"Integrar expresiones idiomáticas laborales con naturalidad nativa."},{id:"B2_12",num:12,title:"Debate sobre sostenibilidad y modelos de economía circular",desc:"Analiza la viabilidad económica de la transición energética y los criterios ESG.",phrases:["Integrating ESG metrics is no longer merely philanthropic","Short-term transition costs will yield long-term resilience","Regulatory penalties for non-compliance are escalating","Circularity requires a systemic redesign of our supply chains"],goal:"Sostener una conversación de alto nivel sobre políticas de sustentabilidad empresarial."},{id:"B2_13",num:13,title:"Análisis de políticas públicas y dilemas morales contemporáneos",desc:"Discute sobre salud pública, distribución de recursos y libertad individual con neutralidad.",phrases:["Striking the optimal balance between public welfare and individual freedom...","Universal access requires sustainable fiscal mechanisms","The unintended societal consequences cannot be disregarded","Policy implementation often reveals unforeseen friction"],goal:"Examinar dilemas éticos y políticos desde múltiples prismas ideológicos."},{id:"B2_14",num:14,title:"Adaptación intercultural en equipos multinacionales remotos",desc:"Gestiona estilos de comunicación directa vs indirecta en equipos distribuidos globalmente.",phrases:["Cross-cultural synergy requires heightened empathy","High-context communication relies heavily on non-verbal cues","We must establish shared communication norms","Misalignment often stems from implicit cultural assumptions"],goal:"Liderar dinámicas de trabajo globales respetando las idiosincrasias de cada país."},{id:"B2_15",num:15,title:"Simulación ejecutiva: Junta directiva y toma de decisiones estratégicas",desc:"Participa en una sesión de directorio decidiendo fusiones, adquisiciones y nuevos mercados.",phrases:["I formally motion that we approve the proposed acquisition","The due diligence report highlights manageable liabilities","Our strategic synergy will dominate market share","Let's proceed with unanimous board consensus"],goal:"Demostrar elocuencia, liderazgo y madurez comunicativa para ingresar al Nivel C1."}],C1:[{id:"C1_1",num:1,title:"Liderazgo ejecutivo y oratoria persuasiva con inversión enfática",desc:"Comunica una visión estratégica con recursos retóricos, paralelismos e inversión sintáctica.",phrases:["Rarely do we witness such paradigm shifts in global commerce...","Not only must we adapt, but we ought to pioneer...","The underlying imperative is uncompromising excellence","Under no circumstances should we dilute our core vision"],goal:"Inspirar y persuadir con elegancia discursiva, inversión enfática y entonación de estadista."},{id:"C1_2",num:2,title:"Negociación estratégica internacional y diplomacia de alto nivel",desc:"Aborda cláusulas contractuales sensibles, mitigación de riesgos geopolíticos y concesiones recíprocas.",phrases:["It is paramount that all contingencies be meticulously accounted for","Notwithstanding the preliminary consensus...","To foster reciprocal goodwill, we propose a tiered rollout","This stipulation serves as an ironclad safeguard"],goal:"Manejar registros formales sofisticados y cláusulas de alta precisión diplomática."},{id:"C1_3",num:3,title:"Modismos culturales, ironía y colocaciones nativas de impacto",desc:"Domina frases idiomáticas complejas, dobles sentidos y el humor sutil del hablante nativo culto.",phrases:["To play devil’s advocate for a moment...","Let’s cut to the chase and address the elephant in the room","It is indeed a double-edged sword","I would take those projections with a grain of salt"],goal:"Integrar expresiones idiomáticas complejas y matices irónicos con total naturalidad."},{id:"C1_4",num:4,title:"Discurso académico y defensa de tesis de investigación",desc:"Defiende tu metodología científica, validez empírica y aportes teóricos ante un comité doctoral.",phrases:["The qualitative data corroborates our primary hypothesis","The methodology was calibrated to eliminate confirmation bias","This empirical framework bridges a noticeable gap in literature","While limitations exist, the findings are statistically robust"],goal:"Argumentar con rigor epistemológico y vocabulario académico avanzado."},{id:"C1_5",num:5,title:"Manejo sutil del registro: del lenguaje informal al institucional",desc:"Alterna entre jerga de vestuario, humor cotidiano y el protocolo más estricto según la audiencia.",phrases:["Off the top of my head... vs Upon preliminary appraisal...","To call it a day vs To conclude the proceedings formally","Navigating the delicate spectrum of linguistic registers","Tailoring tone precisely to social dynamics"],goal:"Demostrar versatilidad estilística nativa adaptando el registro al milímetro."},{id:"C1_6",num:6,title:"Retórica avanzada y técnicas de debate parlamentario",desc:"Emplea preguntas retóricas, antítesis y refutación lógica impecable ante oponentes tenaces.",phrases:["Can we genuinely afford the complacency my opponent advocates?","It is not a question of capability, but of collective willpower","That line of reasoning conflates correlation with causation","The crux of the matter lies precisely in..."],goal:"Debatir con soltura parlamentaria neutralizando falacias lógicas con elocuencia."},{id:"C1_7",num:7,title:"Gestión de stakeholders y alineamiento de intereses dispares",desc:"Articula un mensaje coherente para accionistas, sindicatos, reguladores y clientes.",phrases:["Reconciling divergent stakeholder expectations is a delicate balancing act","We have instituted consultative mechanisms across all tiers","Transparency is the cornerstone of sustainable consensus","Our long-term roadmap aligns mutual interests seamlessly"],goal:"Construir consensos institucionales complejos mediante comunicación estratégica."},{id:"C1_8",num:8,title:"Análisis geopolítico y macroeconómico contemporáneo",desc:"Examina desglobalización, tipos de cambio, tensiones arancelarias y bancos centrales.",phrases:["Quantitative tightening has precipitated unexpected liquidity constraints","Supply chain nearshoring reflects broader geopolitical realignments","Monetary policy must decouple from short-term electoral cycles","Sovereign debt vulnerabilities continue to loom large"],goal:"Discurrir con propiedad técnica sobre dinámicas macroeconómicas globales."},{id:"C1_9",num:9,title:"Filosofía, ética de la inteligencia artificial y transhumanismo",desc:"Reflexiona sobre la conciencia de las máquinas, el existencialismo y el porvenir de la especie.",phrases:["Where does utilitarian calculus fail in autonomous decision-making?","The existential ramifications of artificial general intelligence","Epistemological uncertainty is inherent to black-box models","Humanity stands at a profound ontological crossroads"],goal:"Debatir abstracciones filosóficas con soltura, profundidad y léxico impecable."},{id:"C1_10",num:10,title:"Crítica cultural, cinematográfica y estética de vanguardia",desc:"Analiza narrativas visuales, metáforas subyacentes y crítica deconstructiva del arte.",phrases:["The director masterfully subverts conventional genre tropes","A poignant meditation on human alienation in the digital epoch","The cinematography oscillates between claustrophobic and sweeping","Its understated aesthetic belies an intricate thematic depth"],goal:"Formular juicios estéticos y ensayos orales de alta apreciación artística."},{id:"C1_11",num:11,title:"Improvisación ejecutiva y elocuencia bajo presión",desc:"Responde preguntas imprevistas en vivo ante un auditorio sin perder el hilo ni titubear.",phrases:["That is an astute inquiry that warrants nuanced reflection","To distill that multifaceted issue into its operative components...","Without losing sight of the broader strategic horizon...","In synthesis, our trajectory remains resolute"],goal:"Demostrar aplomo absoluto y capacidad de síntesis inmediata ante situaciones sorpresivas."},{id:"C1_12",num:12,title:"Resolución de crisis reputacional internacional y auditorías",desc:"Rinde cuentas ante comisiones internacionales preservando la integridad corporativa.",phrases:["We welcome external scrutiny as an impetus for institutional reform","Remedial measures have been deployed with immediate efficacy","Our fiduciary responsibility brooks no compromises","We stand ready to cooperate fully with regulatory oversight"],goal:"Restablecer la confianza institucional mediante oratoria de transparencia y rigor ético."},{id:"C1_13",num:13,title:"Lenguaje legal, contratos mercantiles y mitigación de litigios",desc:"Examina cláusulas de indemnización, fuerza mayor y arbitraje internacional.",phrases:["The force majeure clause encompasses unprecedented geopolitical disruptions","Indemnification obligations are circumscribed to direct damages","Any latent ambiguity shall be resolved through binding arbitration","Pursuant to Section 8, intellectual property remains inviolate"],goal:"Interpretar y discutir terminología jurídica contractual en inglés/italiano avanzado."},{id:"C1_14",num:14,title:"Psicología de la persuasión, sesgos cognitivos y retórica sutil",desc:"Desmenuza el encuadre psicológico, la aversión a la pérdida y el anclaje en negociaciones.",phrases:["Framing effects exert a subconscious pull on decision-makers","Loss aversion routinely outweighs potential prospective gains","By anchoring expectations prudently, we steer the deliberation","Cognitive dissonance often manifests as entrenched dogmatism"],goal:"Aplicar principios de economía conductual a la retórica y negociación de élite."},{id:"C1_15",num:15,title:"Conferencia magistral: Keynote speech y ronda de preguntas de alto nivel",desc:"Imparte una conferencia de clausura magistral de 10 minutos y responde al panel de expertos.",phrases:["Distinguished colleagues, honored guests, and fellow visionaries...","Let history record that we chose courage over complacency","To address the panelist's provocative question...","Thank you for your gracious attention; onward together"],goal:"Alcanzar la cúspide de la maestría oral (CEFR C1 Mastery) con carisma y precisión total."}]},$a={zero:{title:"🌱 Vocabulario Fundamental (Desde Cero / A0)",categories:[{name:"Saludos y Cortesía",items:[{term:"Hello / Hi",it:"Ciao",es:"Hola",phonetic:"he-LÓU / jai",ex:"Hello, Emma! How are you?"},{term:"Good morning",it:"Buongiorno",es:"Buenos días",phonetic:"gud MÓOR-ning",ex:"Good morning, have a great day!"},{term:"Please",it:"Per favore",es:"Por favor",phonetic:"pliiz",ex:"One coffee, please."},{term:"Thank you",it:"Grazie",es:"Gracias",phonetic:"zzenk iú",ex:"Thank you very much!"},{term:"You are welcome",it:"Prego",es:"De nada",phonetic:"iur UÉL-kam",ex:"You are very welcome."},{term:"Goodbye",it:"Arrivederci",es:"Adiós",phonetic:"gud-BÁI",ex:"Goodbye, see you tomorrow!"}]},{name:"Identidad y Supervivencia",items:[{term:"My name is...",it:"Mi chiamo...",es:"Mi nombre es...",phonetic:"mai neim iz",ex:"My name is Kristhian."},{term:"I am from...",it:"Vengo da...",es:"Soy de...",phonetic:"ai am fram",ex:"I am from Peru."},{term:"I do not understand",it:"Non capisco",es:"No entiendo",phonetic:"ai du not an-der-STÁND",ex:"Sorry, I do not understand."},{term:"Repeat, please",it:"Ripeti, per favore",es:"Repita, por favor",phonetic:"ri-PÍIT pliiz",ex:"Can you repeat, please?"},{term:"More slowly",it:"Più lentamente",es:"Más lento",phonetic:"móor SLÓU-li",ex:"Speak more slowly, please."}]},{name:"Números y Tiempo",items:[{term:"One, Two, Three",it:"Uno, Due, Tre",es:"Uno, Dos, Tres",phonetic:"uan, tu, zzrii",ex:"One, two, three apples."},{term:"Ten, Twenty",it:"Dieci, Venti",es:"Diez, Veinte",phonetic:"ten, TUÉN-ti",ex:"Twenty dollars, please."},{term:"Today / Tomorrow",it:"Oggi / Domani",es:"Hoy / Mañana",phonetic:"tu-DÉI / tu-MÓ-rou",ex:"Today is a wonderful day."},{term:"Morning / Night",it:"Mattina / Notte",es:"Mañana / Noche",phonetic:"MÓOR-ning / nait",ex:"Good night, sleep well."}]},{name:"Alimentos y Objetos",items:[{term:"Water",it:"Acqua",es:"Agua",phonetic:"UÓ-ter",ex:"Glass of water, please."},{term:"Coffee",it:"Caffè",es:"Café",phonetic:"KÓ-fii",ex:"I love morning coffee."},{term:"Book / Phone",it:"Libro / Telefono",es:"Libro / Teléfono",phonetic:"buk / foun",ex:"This is my mobile phone."},{term:"Key / Table",it:"Chiave / Tavolo",es:"Llave / Mesa",phonetic:"kii / TÉI-bul",ex:"The key is on the table."}]}]},A1:{title:"A1 · Vocabulario de la Vida Cotidiana",categories:[{name:"Rutina y Horarios",items:[{term:"Wake up / Get up",it:"Svegliarsi",es:"Despertar / Levantarse",phonetic:"ueik ap / guet ap",ex:"I wake up at 7 o'clock every day."},{term:"Have breakfast",it:"Fare colazione",es:"Desayunar",phonetic:"jav BRÉK-fast",ex:"I have breakfast with my family."},{term:"Commute / Take the bus",it:"Prendere l'autobus",es:"Tomar el autobús / viajar",phonetic:"teik dda bas",ex:"I take the bus to university."},{term:"Go to sleep",it:"Andare a dormire",es:"Irse a dormir",phonetic:"gou tu sliip",ex:"I go to sleep at 11 PM."}]},{name:"Compras y Restaurantes",items:[{term:"How much does it cost?",it:"Quanto costa?",es:"¿Cuánto cuesta?",phonetic:"jau mach daz it kost?",ex:"Excuse me, how much does it cost?"},{term:"Can I have the bill?",it:"Il conto, per favore",es:"¿Me trae la cuenta?",phonetic:"kan ai jav dda bil?",ex:"We are ready, can I have the bill?"},{term:"Delicious / Fresh",it:"Delizioso / Fresco",es:"Delicioso / Fresco",phonetic:"di-LÍ-shas / fresh",ex:"The pasta is truly delicious."},{term:"I would like to order",it:"Vorrei ordinare",es:"Me gustaría pedir",phonetic:"ai uud laik tu ÓOR-der",ex:"I would like to order grilled chicken."}]},{name:"Lugares y Direcciones",items:[{term:"Turn left / Turn right",it:"Girare a sinistra / destra",es:"Girar a la izquierda / derecha",phonetic:"tarn left / tarn rait",ex:"Turn left at the next traffic light."},{term:"Go straight ahead",it:"Andare dritto",es:"Ir todo recto",phonetic:"gou streit a-JÉD",ex:"Go straight ahead for two blocks."},{term:"Near / Far from here",it:"Vicino / Lontano da qui",es:"Cerca / Lejos de aquí",phonetic:"níiar / faar fram jíiar",ex:"The metro station is very near."},{term:"Across from / Next to",it:"Di fronte / Accanto a",es:"Frente a / Al lado de",phonetic:"a-KRÓS / nékst tu",ex:"The bank is next to the pharmacy."}]},{name:"Familia y Profesiones",items:[{term:"Engineer / Doctor",it:"Ingegnere / Medico",es:"Ingeniero / Médico",phonetic:"en-ji-NÍIR / DÓK-ter",ex:"He is an experienced civil engineer."},{term:"Friendly / Hardworking",it:"Simpatico / Lavoratore",es:"Amigable / Trabajador",phonetic:"FRÉND-li / jaard-UÓR-king",ex:"My coworkers are hardworking."},{term:"Sibling / Parent",it:"Fratello o sorella / Genitore",es:"Hermano(a) / Progenitor",phonetic:"SÍB-ling / PÉ-rent",ex:"Do you have any siblings?"},{term:"Manager / Student",it:"Direttore / Studente",es:"Gerente / Estudiante",phonetic:"MÁ-na-jer / STIÚU-dent",ex:"She works as a project manager."}]}]},A2:{title:"A2 · Vocabulario para Viajes, Salud y Experiencias",categories:[{name:"Viajes y Aeropuerto",items:[{term:"Boarding pass / Gate",it:"Carta d'imbarco / Gate",es:"Tarjeta de embarque / Puerta",phonetic:"BÓOR-ding pas / gueit",ex:"Please have your boarding pass ready at gate 4."},{term:"Luggage / Baggage claim",it:"Bagaglio / Ritiro bagagli",es:"Equipaje / Reclamo de equipaje",phonetic:"LÁ-guidzh / BÁ-guidzh kleim",ex:"My luggage is waiting at carousel 2."},{term:"Flight delay / On time",it:"Ritardo / In orario",es:"Vuelo retrasado / A tiempo",phonetic:"flait di-LÉI / on taim",ex:"The flight to London is departing on time."},{term:"Carry-on bag",it:"Bagaglio a mano",es:"Equipaje de mano",phonetic:"KÉ-ri on bag",ex:"You can take one carry-on bag."}]},{name:"Hospedaje y Hotel",items:[{term:"Reservation under...",it:"Prenotazione a nome di...",es:"Reserva a nombre de...",phonetic:"re-zer-VÉI-shan ÁN-der",ex:"I have a reservation under Kristhian Conde."},{term:"Included amenities",it:"Servizi inclusi",es:"Servicios incluidos",phonetic:"in-KLÚU-did a-MÉ-ni-tiiz",ex:"Is breakfast included in the room rate?"},{term:"Check-in / Check-out",it:"Arrivo / Partenza",es:"Entrada / Salida de hotel",phonetic:"chek in / chek aut",ex:"Check-out time is strictly at noon."},{term:"Air conditioner / Towel",it:"Aria condizionata / Asciugamano",es:"Aire acondicionado / Toalla",phonetic:"eer kan-DÍ-sha-ner / TÁU-el",ex:"Could we get fresh towels, please?"}]},{name:"Salud y Farmacia",items:[{term:"Headache / Fever",it:"Mal di testa / Febbre",es:"Dolor de cabeza / Fiebre",phonetic:"JÉD-eik / FÍI-ver",ex:"I have had a mild headache since yesterday."},{term:"Sore throat / Cough",it:"Mal di gola / Tosse",es:"Dolor de garganta / Tos",phonetic:"sóor zrout / kof",ex:"This cough medicine is very effective."},{term:"Prescription / Pills",it:"Ricetta medica / Pillole",es:"Receta médica / Pastillas",phonetic:"pri-SKRÍP-shan / pilz",ex:"Take two pills every eight hours."},{term:"Dizzy / Nauseous",it:"Capogiro / Nauseato",es:"Mareado / Con náuseas",phonetic:"DÍ-zi / NÓ-shas",ex:"I feel slightly dizzy in hot weather."}]},{name:"Comparativos y Pasado",items:[{term:"Much bigger than...",it:"Molto più grande di...",es:"Mucho más grande que...",phonetic:"mach BÍ-guer ddan",ex:"Lima is much bigger than Cusco."},{term:"Used to live / play",it:"Ero solito vivere / giocare",es:"Solía vivir / jugar",phonetic:"iust tu liv / plei",ex:"I used to live near the beach."},{term:"Breathtaking view",it:"Vista mozzafiato",es:"Vista impresionante",phonetic:"BRÉZZ-tei-king viu",ex:"The mountain view was truly breathtaking."},{term:"Affordable / Expensive",it:"Economico / Costoso",es:"Asequible / Caro",phonetic:"a-FÓOR-da-bul / ek-SPÉN-siv",ex:"Public transport here is very affordable."}]}]},B1:{title:"B1 · Vocabulario Profesional, Reclamos y Argumentación",categories:[{name:"Ámbito Laboral y Metas",items:[{term:"Oversee / Manage",it:"Supervisionare / Gestire",es:"Supervisar / Gestionar",phonetic:"ou-ver-SÍI / MÁ-nidzh",ex:"In my current role, I oversee daily logistics."},{term:"Milestone / Achievement",it:"Traguardo / Successo",es:"Hito / Logro destacado",phonetic:"MÁIL-stoun / a-CHÍIV-ment",ex:"Hitting our annual target was a major milestone."},{term:"Broaden my expertise",it:"Ampliare le competenze",es:"Ampliar mi experiencia",phonetic:"BRÓO-den mai eks-per-TÍIS",ex:"I am taking courses to broaden my expertise."},{term:"Problem-solving skills",it:"Capacità di risoluzione problemi",es:"Habilidades de resolución de problemas",phonetic:"PRÓB-lem sól-ving skilz",ex:"Employers prioritize strong problem-solving skills."}]},{name:"Resolución de Reclamos",items:[{term:"Misunderstanding",it:"Fraintendimento",es:"Malentendido",phonetic:"mis-an-der-STÁN-ding",ex:"I believe there has been a minor misunderstanding."},{term:"Look into this matter",it:"Esaminare la questione",es:"Investigar este asunto",phonetic:"luk ÍN-tu ddis MÁ-ter",ex:"Could management please look into this matter?"},{term:"Adequate compensation",it:"Adeguato risarcimento",es:"Compensación adecuada",phonetic:"Á-de-kuit kom-pen-SÉI-shan",ex:"Passengers are entitled to adequate compensation."},{term:"Defective / Faulty",it:"Difettoso / Guasto",es:"Defectuoso / Con fallas",phonetic:"di-FÉK-tiv / FÓOL-ti",ex:"The delivered product was completely defective."}]},{name:"Diplomacia y Debate",items:[{term:"I see your point, but...",it:"Capisco il tuo punto, ma...",es:"Entiendo tu punto, pero...",phonetic:"ai sii iur point, bat",ex:"I see your point, but we need to consider costs."},{term:"On the downside...",it:"D'altra parte...",es:"Por el lado negativo...",phonetic:"on dda DÁUN-said",ex:"Remote work offers flexibility, yet on the downside..."},{term:"From my perspective",it:"Dalla mia prospettiva",es:"Desde mi perspectiva",phonetic:"fram mai per-SPÉK-tiv",ex:"From my perspective, innovation requires patience."},{term:"Reach a compromise",it:"Trovare un compromesso",es:"Llegar a un acuerdo medio",phonetic:"riich ei KÓM-pro-mais",ex:"Both departments must reach a fair compromise."}]},{name:"Hipótesis y Condicionales",items:[{term:"If I were in your shoes...",it:"Se fossi nei tuoi panni...",es:"Si estuviera en tu lugar...",phonetic:"if ai uer in iur shuuz",ex:"If I were in your shoes, I would accept the job."},{term:"You ought to consider...",it:"Dovresti considerare...",es:"Deberías considerar...",phonetic:"iu óot tu kan-SÍ-der",ex:"You ought to consider consulting an advisor."},{term:"Burnout / Work-life balance",it:"Esaurimento / Equilibrio vita-lavoro",es:"Agotamiento / Balance de vida",phonetic:"BÁRN-aut / uark laif BÁ-lans",ex:"Healthy boundaries prevent workplace burnout."},{term:"Streamline operations",it:"Semplificare le operazioni",es:"Optimizar y agilizar operaciones",phonetic:"STRÍIM-lain o-per-ÉI-shanz",ex:"Cloud software helps streamline team operations."}]}]},B2:{title:"B2 · Vocabulario Ejecutivo, Negociación y Retórica",categories:[{name:"Método STAR y Logros",items:[{term:"Overarching priority",it:"Priorità generale",es:"Prioridad fundamental o rectora",phonetic:"ou-ver-ÁAR-ching prai-Ó-ri-ti",ex:"Our overarching priority was client retention."},{term:"Streamline workflow",it:"Ottimizzare il flusso di lavoro",es:"Agilizar el flujo de trabajo",phonetic:"STRÍIM-lain UÁRK-flou",ex:"We redesigned protocols to streamline workflow."},{term:"Tangible outcome",it:"Risultato tangibile",es:"Resultado tangible y medible",phonetic:"TÁN-ji-bul ÁUT-kam",ex:"The project yielded tangible commercial outcomes."},{term:"Take the initiative",it:"Prendere l'iniziativa",es:"Tomar la iniciativa",phonetic:"teik ddi i-NÍ-sha-tiv",ex:"I took the initiative to organize the stakeholder summit."}]},{name:"Negociación Comercial",items:[{term:"Provided that / As long as",it:"A patto che",es:"Siempre y cuando / Con la condición de",phonetic:"pro-VÁI-did ddat",ex:"We will sign provided that delivery is guaranteed."},{term:"Compromise on terms",it:"Venire a patti sui termini",es:"Ceder o pactar en las condiciones",phonetic:"KÓM-pro-mais on tarms",ex:"Are you willing to compromise on payment terms?"},{term:"Core competitive edge",it:"Vantaggio competitivo chiave",es:"Ventaja competitiva diferencial",phonetic:"kóor kam-PÉ-ti-tiv edzh",ex:"Proprietary AI is our core competitive edge."},{term:"Seal the deal",it:"Concludere l'accordo",es:"Cerrar el trato comercial",phonetic:"siil dda diil",ex:"Let's shake hands and seal the deal today."}]},{name:"Debate de Vanguardia (IA y Ética)",items:[{term:"Ethical dilemma",it:"Dilemma etico",es:"Dilema ético",phonetic:"É-zzi-kul dai-LÉ-ma",ex:"Data scraping introduces a complex ethical dilemma."},{term:"Regulatory guardrails",it:"Barriere normative",es:"Marcos regulatorios de protección",phonetic:"RÉ-guiu-la-to-ri GÁARD-reilz",ex:"Governments are instituting regulatory guardrails."},{term:"Empirical evidence",it:"Evidenza empirica",es:"Evidencia empírica comprobada",phonetic:"em-PÍ-ri-kul É-vi-dens",ex:"Her claims are backed by solid empirical evidence."},{term:"Foreseeable risk",it:"Rischio prevedibile",es:"Riesgo previsible",phonetic:"fóor-SÍI-a-bul risk",ex:"We must mitigate every foreseeable financial risk."}]},{name:"Modismos Profesionales",items:[{term:"Think outside the box",it:"Pensare fuori dagli schemi",es:"Pensar de forma creativa e innovadora",phonetic:"zzink aut-SÁID dda boks",ex:"Engineers must think outside the box to solve this."},{term:"Touch base offline",it:"Aggiornarsi di persona",es:"Conversar en privado o después",phonetic:"tach beis OF-lain",ex:"Let's touch base offline after this committee."},{term:"Down to the wire",it:"All'ultimo minuto",es:"Hasta el último segundo / límite",phonetic:"daun tu dda UÁI-er",ex:"The contract negotiation went down to the wire."},{term:"On the same page",it:"Sulla stessa lunghezza d'onda",es:"En sintonía / Totalmente de acuerdo",phonetic:"on dda seim peidzh",ex:"Let's make sure all stakeholders are on the same page."}]}]},C1:{title:"C1 · Vocabulario Magistral, Oratoria y Diplomacia de Élite",categories:[{name:"Inversión Enfática y Retórica",items:[{term:"Rarely do we witness...",it:"Raramente assistiamo a...",es:"Raras veces presenciamos...",phonetic:"RÉER-li du ui UÍT-nes",ex:"Rarely do we witness such tectonic market disruption."},{term:"Under no circumstances...",it:"In nessun caso...",es:"Bajo ninguna circunstancia...",phonetic:"ÁN-der nou SÁR-kam-stan-siz",ex:"Under no circumstances should quality be compromised."},{term:"Underlying imperative",it:"Imperativo sottostante",es:"Imperativo o mandato esencial",phonetic:"an-der-LÁI-ing im-PÉ-ra-tiv",ex:"Our underlying imperative is fiduciary integrity."},{term:"Subvert conventions",it:"Sovvertire le convenzioni",es:"Subvertir o transformar cánones",phonetic:"sub-VÁRT kan-VÉN-shanz",ex:"Visionary leaders routinely subvert conventions."}]},{name:"Diplomacia y Precisión Contractual",items:[{term:"Notwithstanding...",it:"Nonostante...",es:"No obstante / A pesar de lo estipulado",phonetic:"not-uidd-STÁN-ding",ex:"Notwithstanding earlier objections, agreement was signed."},{term:"Paramount importance",it:"Massima importanza",es:"Importancia primordial",phonetic:"PÉ-ra-maunt im-PÓOR-tans",ex:"Cybersecurity compliance is of paramount importance."},{term:"Reciprocal goodwill",it:"Reciproca buona volontà",es:"Buena voluntad recíproca",phonetic:"ri-SÍ-pro-kul GUD-uil",ex:"Both nations pledged to foster reciprocal goodwill."},{term:"Ironclad safeguard",it:"Garanzia blindata",es:"Garantía o salvaguarda blindada",phonetic:"ÁI-ern-klad SÉIF-gaard",ex:"This escrow clause acts as an ironclad safeguard."}]},{name:"Modismos Nativos y Matices",items:[{term:"Play devil’s advocate",it:"Fare l'avvocato del diavolo",es:"Hacer de abogado del diablo",phonetic:"plei DÉ-vilz ÁD-va-keit",ex:"Allow me to play devil's advocate to test this thesis."},{term:"Double-edged sword",it:"Arma a doppio taglio",es:"Arma de doble filo",phonetic:"DÁ-bul edzhd sóord",ex:"Aggressive pricing can be a double-edged sword."},{term:"Take with a grain of salt",it:"Prendere con le pinze",es:"Tomar con reservas / cautela",phonetic:"teik uidd ei grein av solt",ex:"Take anonymous social rumors with a grain of salt."},{term:"Elephant in the room",it:"Problema evidente ignorato",es:"El gran problema evidente que nadie menciona",phonetic:"É-le-fant in dda ruum",ex:"Let's confront the elephant in the room: rising debt."}]},{name:"Filosofía, Epistemología y Geopolítica",items:[{term:"Epistemological uncertainty",it:"Incertezza epistemologica",es:"Incertidumbre epistemológica",phonetic:"e-pis-te-ma-LÓ-ji-kul an-SÁR-tan-ti",ex:"Deep learning entails inherent epistemological uncertainty."},{term:"Ontological crossroads",it:"Bivio ontologico",es:"Encrucijada ontológica del ser",phonetic:"on-to-LÓ-ji-kul KRÓS-roudz",ex:"Bioengineering brings us to an ontological crossroads."},{term:"Sovereign debt vulnerabilities",it:"Vulnerabilità del debito sovrano",es:"Vulnerabilidades de deuda soberana",phonetic:"SÓ-ve-rin det vul-ne-ra-BÍ-li-tiiz",ex:"Central banks are monitoring sovereign debt vulnerabilities."},{term:"Fiduciary responsibility",it:"Responsabilità fiduciaria",es:"Responsabilidad fiduciaria legal",phonetic:"fi-DIÚ-sha-ri ri-spon-si-BÍ-li-ti",ex:"Board members must honor their fiduciary responsibility."}]}]}};function ca(a,e="en"){return $a[a]||$a.zero}function qn(a){const e=ve[a.language||"en"],t=a.studentName?a.studentName.trim():"alumno",i=a.level||"zero",n=a.lesson,s=i==="zero",r=s?`CLASS METHODOLOGY: 100% BILINGUAL GUIDED INSTRUCTION (Spanish + ${e.name})
- The student is at LEVEL 0 (Complete beginner / Desde Cero).
- SPANISH IS YOUR PRIMARY SPOKEN LANGUAGE FOR GUIDANCE, COMFORT AND TEACHING!
- DO NOT overwhelm the student with long English paragraphs.
- Teach ONE phrase or vocabulary item at a time.
- Say it slowly and clearly in ${e.name}, explain what it means in Spanish, and ask ${t} to repeat it.
- Warmly celebrate their pronunciation in Spanish ("¡Excelente pronunciación! Muy bien hecho.").
- If they respond in Spanish, praise them and gently teach them how to express that in simple ${e.name}.`:`CLASS METHODOLOGY: IMMERSIVE GUIDED PEDAGOGICAL LESSON
- The student is at level ${O(i)} (${i}).
- Conduct the class primarily in ${e.name} with ${e.accent}.
- Provide short, encouraging explanations or vocabulary translations in Spanish whenever it facilitates comprehension.
- Maintain an inspiring, constructive, and highly active teaching presence.`;return`You are ${e.teacherName}, an inspiring, patient and pedagogical ${e.name} teacher conducting an OFFICIAL 10-MINUTE STRUCTURED ACADEMIC CLASS for ${t}.

# CLASS IDENTIFICATION
- LEVEL: ${O(i)} (${i})
- LESSON NUMBER: Clase ${n.num} de 15
- LESSON TITLE: "${n.title}"
- DESCRIPTION: "${n.desc}"
- LEARNING GOAL: "${n.goal}"
- KEY PHRASES & VOCABULARY TO TEACH AND MASTER:
  ${n.phrases.map((o,c)=>`${c+1}. "${o}"`).join(`
  `)}

# TARGET DURATION & PACING (CRUCIAL INSTRUCTION)
- THIS IS A COMPREHENSIVE ~10-MINUTE CLASS, NOT A 2-MINUTE RUSHED INTERACTION!
- You must guide the student through all 5 sequential pedagogical stages described below.
- Take your time on each stage: model pronunciation, request repetition, check phonemes, and keep the student actively talking.
- DO NOT wrap up or conclude the class prematurely until all 5 stages and exercises have been thoroughly completed!

# ${r}

# THE 5 PEDAGOGICAL STAGES OF THE 10-MINUTE CLASS

1. STAGE 1: WARM WELCOME & CONTEXT (1-2 MINUTES / 2 TURNS):
   - Welcome ${t} enthusiastically in ${s?"Spanish":"a warm blend of English and Spanish"}.
   - Announce today's class: "¡Bienvenido/a a tu Clase ${n.num}: '${n.title}'!"
   - State the clear objective: "${n.goal}".
   - Ask an engaging opening question to activate prior knowledge or establish context.
   - Wait for their response and praise their willingness to learn.

2. STAGE 2: VOCABULARY & PHONETIC MODELING (2-3 MINUTES / 3 TURNS):
   - Present the first 2 key phrases from today's lesson: "${n.phrases.slice(0,2).join('", "')}".
   - Explain what they mean and when native speakers use them.
   - Model the exact pronunciation slowly and clearly (point out stressed syllables and tricky sounds).
   - Ask ${t} to repeat the phrases aloud.
   - Give immediate, encouraging phonetic feedback. If mispronounced, kindly model again once.
   - Then introduce the remaining key phrases: "${n.phrases.slice(2).join('", "')}" and repeat the guided repetition drill.

3. STAGE 3: GUIDED SENTENCE BUILDING & DRILLS (2-3 MINUTES / 3 TURNS):
   - Challenge ${t} to use the key phrases in their own original sentences.
   - Give them realistic prompts: "Ahora imagina que estás en... ¿Cómo dirías que... usando '${n.phrases[0]}'?"
   - Help them connect words and correct any grammar or vocabulary slip using natural recasts.
   - Celebrate every successful sentence they produce!

4. STAGE 4: REAL-WORLD SITUATIONAL ROLE-PLAY (2-3 MINUTES / 3-4 TURNS):
   - Transition into a dynamic, interactive mini-dialogue based on the lesson topic ("${n.title}").
   - Take on a realistic role (e.g. barista, coworker, receptionist, local friend) and assign ${t} their role.
   - Carry out an exchange of 3 to 4 turns where ${t} must respond and apply what they learned today.
   - Keep the energy high and enjoyable!

5. STAGE 5: CONSOLIDATION, STUDENT QUESTIONS & CELEBRATORY WRAP-UP (1-2 MINUTES / 2 TURNS):
   - Ask ${t}: "¿Tienes alguna duda sobre alguna de las frases que practicamos hoy?"
   - Summarize the key achievements and phrases mastered today.
   - Congratulate ${t} with heartfelt praise for completing Clase ${n.num} of ${O(i)}.
   - Remind them that they can revisit this class anytime, advance to the next class, and when they finish their 15 classes, take the Level-Up Exam!

# PRONUNCIATION & CORRECTIONS
Call the report_correction tool for significant pronunciation, grammar, or vocabulary mistakes as taught in the system guidelines so cards appear on screen.

# STYLE
Spoken voice format only. Warm, supportive, pedagogical, patient, and highly structured.`}function Bn(a){const e=ve[a.language||"en"],t=a.studentName?a.studentName.trim():"alumno",i=a.level||"zero",n=ca(i,a.language),s=i==="zero";return`You are ${e.teacherName}, a warm, patient and encouraging ${e.name} teacher conducting a DEDICATED VOCABULARY & PRONUNCIATION DRILL SESSION for ${t}.

# SESSION IDENTIFICATION
- LEVEL: ${O(i)} (${i})
- MODE: Vocabulario Esencial y Práctica Fonética
- LEVEL VOCABULARY SECTIONS:
${n.categories.map((r,o)=>`  ${o+1}. ${r.name} (${r.items.map(c=>c.term).join(", ")})`).join(`
`)}

# GOAL
Conduct a step-by-step interactive pronunciation workout with ${t}:
1. Welcome them warmly in ${s?"Spanish":"English"}: "¡Hola ${t}! Hoy vamos a entrenar y perfeccionar la pronunciación del vocabulario de ${O(i)}."
2. Pick 1 or 2 words at a time from the list above.
3. Pronounce each word clearly, explain its practical nuance in daily conversation, and ask ${t} to repeat it after you.
4. Listen to their pronunciation audio carefully, provide immediate feedback on sounds (vowels, consonants, word stress), and call report_correction if needed.
5. Create mini-sentences together using each word.
6. Keep the session interactive, encouraging, and fun!

# STYLE
Voice audio format only. Encouraging, patient, and focused on acoustic clarity.`}function xt(a){const e={suggestions:"[HELP: suggestions]",slower:"[HELP: slower]",explain:"[HELP: explain]",silence:"[HELP: silence]"};if(!e[a])throw new Error(`Ayuda desconocida: ${a}`);return e[a]}const Ti="pvi.settings",Si="pvi.history",Ci="pvi.exam_history",zn=[{id:"Kore",label:"Kore · femenina, firme"},{id:"Aoede",label:"Aoede · femenina, suave"},{id:"Leda",label:"Leda · femenina, juvenil"},{id:"Zephyr",label:"Zephyr · femenina, brillante"},{id:"Puck",label:"Puck · masculina, alegre"},{id:"Charon",label:"Charon · masculina, informativa"},{id:"Fenrir",label:"Fenrir · masculina, enérgica"},{id:"Orus",label:"Orus · masculina, firme"}],Ua={apiKey:"",model:"gemini-3.8-live",voice:"Kore",language:"en",level:"auto",correctionMode:"balanced",explainIn:"auto",studentName:"",diagnosedLevel:null,diagnosedDate:null,diagnosedFeedback:null};function Oe(){try{return{...Ua,...JSON.parse(localStorage.getItem(Ti)||"{}")}}catch{return{...Ua}}}function Z(a){const e={...Oe(),...a};return localStorage.setItem(Ti,JSON.stringify(e)),e}function ja(a){return Z({diagnosedLevel:a.level,diagnosedDate:new Date().toISOString(),diagnosedFeedback:a,level:a.level})}function Ai(){try{return JSON.parse(localStorage.getItem(Ci)||"[]")}catch{return[]}}function Fn(){return Oe().lastExamResult||null}function qa(a){const e=Ai(),t={...a,date:new Date().toISOString(),id:"exam_"+Date.now()};e.unshift(t),localStorage.setItem(Ci,JSON.stringify(e.slice(0,50)));const i={lastExamResult:t};return a.passed&&a.targetLevel&&(i.level=a.targetLevel,i.diagnosedLevel=a.targetLevel),Z(i)}function ba(){try{return JSON.parse(localStorage.getItem(Si)||"[]")}catch{return[]}}function Hn(a){const e=ba();e.unshift(a),localStorage.setItem(Si,JSON.stringify(e.slice(0,200)))}function Vn(a,e=12){const t=[];for(const i of ba())if(i.language===a){for(const n of i.corrections||[])if(n.type==="pronunciation"&&n.correct&&!t.includes(n.correct)&&t.push(n.correct),t.length>=e)return t}return t}function ut(){const a=Oe();let e=0;if(a.diagnosedLevel&&a.diagnosedLevel!=="auto"){const i=re.indexOf(a.diagnosedLevel);i>e&&(e=i)}const t=Ai();for(const i of t)if(i.passed&&i.targetLevel){const n=re.indexOf(i.targetLevel);n>e&&(e=n)}return re[e]||"zero"}function Qt(a){if(a==="auto")return!0;const e=ut(),t=re.indexOf(a),i=re.indexOf(e);return t===-1?!1:t<=i}const Gn="wss://generativelanguage.googleapis.com/ws/google.ai.generativelanguage.v1beta.GenerativeService.BidiGenerateContent",Wn="gemini-3.8-live";class Kn extends EventTarget{constructor({apiKey:e,model:t=Wn}){super(),this.apiKey=e,this.model=t,this.ws=null,this.setupMsg=null,this.resumeHandle=null,this.closedByUser=!1,this.reconnects=0,this.ready=!1}emit(e,t={}){this.dispatchEvent(new CustomEvent(e,{detail:t}))}connect(e){return this.cfg=e,this.closedByUser=!1,this._open()}_buildSetup(){const{systemInstruction:e,voiceName:t,tools:i}=this.cfg;return{setup:{model:`models/${this.model}`,generationConfig:{responseModalities:["AUDIO"],speechConfig:t?{voiceConfig:{prebuiltVoiceConfig:{voiceName:t}}}:void 0},systemInstruction:{parts:[{text:e}]},tools:i?[i]:void 0,inputAudioTranscription:{},outputAudioTranscription:{},contextWindowCompression:{slidingWindow:{}},sessionResumption:this.resumeHandle?{handle:this.resumeHandle}:{}}}}_open(){return new Promise((e,t)=>{let i=!1;const n=new WebSocket(`${Gn}?key=${encodeURIComponent(this.apiKey)}`);this.ws=n,this.ready=!1,n.onopen=()=>{n.send(JSON.stringify(this._buildSetup()))},n.onmessage=async s=>{let r;try{const o=typeof s.data=="string"?s.data:await s.data.text();r=JSON.parse(o)}catch(o){console.warn("Mensaje no válido",o);return}if(r.setupComplete){this.ready=!0,i||(i=!0,e()),this.emit("ready");return}this._handleMessage(r)},n.onerror=()=>{this.emit("error",{message:"Error de conexión con Gemini."})},n.onclose=s=>{const r=this.ready;if(this.ready=!1,!i){i=!0,t(new Error(Ba(s)));return}if(!this.closedByUser&&r&&this.resumeHandle&&this.reconnects<3){this.reconnects++,this.emit("reconnecting"),this._open().then(()=>this.emit("reconnected")).catch(o=>this.emit("close",{code:s.code,reason:o.message,expected:!1}));return}this.emit("close",{code:s.code,reason:Ba(s),expected:this.closedByUser})}})}_handleMessage(e){var i,n,s,r,o,c,l;const t=e.serverContent;if(t){t.interrupted&&this.emit("interrupted");const u=((i=t.modelTurn)==null?void 0:i.parts)||[];for(const h of u)(n=h.inlineData)!=null&&n.data&&(h.inlineData.mimeType||"").startsWith("audio")?this.emit("audio",{data:h.inlineData.data}):(s=h.inlineData)!=null&&s.data&&!h.inlineData.mimeType&&this.emit("audio",{data:h.inlineData.data});(r=t.inputTranscription)!=null&&r.text&&this.emit("input-transcript",{text:t.inputTranscription.text}),(o=t.outputTranscription)!=null&&o.text&&this.emit("output-transcript",{text:t.outputTranscription.text}),t.turnComplete&&this.emit("turn-complete")}if((c=e.toolCall)!=null&&c.functionCalls){const u=[];for(const h of e.toolCall.functionCalls)h.name==="report_correction"?this.emit("correction",h.args||{}):h.name==="report_placement_result"?this.emit("placement-result",h.args||{}):h.name==="report_level_exam"&&this.emit("level-exam-result",h.args||{}),u.push({id:h.id,name:h.name,response:{result:"ok"}});this._send({toolResponse:{functionResponses:u}})}(l=e.sessionResumptionUpdate)!=null&&l.resumable&&e.sessionResumptionUpdate.newHandle&&(this.resumeHandle=e.sessionResumptionUpdate.newHandle),e.goAway&&console.info("goAway recibido",e.goAway)}_send(e){return this.ws&&this.ws.readyState===WebSocket.OPEN?(this.ws.send(JSON.stringify(e)),!0):!1}sendAudio(e){this.ready&&this._send({realtimeInput:{audio:{data:e,mimeType:"audio/pcm;rate=16000"}}})}sendText(e){this.ready&&this._send({realtimeInput:{text:e}})}audioStreamEnd(){this.ready&&this._send({realtimeInput:{audioStreamEnd:!0}})}close(){var e;this.closedByUser=!0;try{(e=this.ws)==null||e.close(1e3,"fin de sesión")}catch{}}}function Ba(a){const e=a.reason||"";return/api key|API_KEY|permission|unauthori/i.test(e)?"La clave de Gemini no es válida o no tiene permisos.":/quota|exhausted|rate/i.test(e)?"Se alcanzó el límite gratuito por ahora. Espera un momento e inténtalo otra vez.":/model/i.test(e)&&/not found|not supported/i.test(e)?`El modelo configurado no está disponible: ${e}`:e||(a.code===1006?"No se pudo conectar. Revisa tu conexión a internet.":`Conexión cerrada (código ${a.code}).`)}async function _i(a){var e;try{const t=await fetch(`https://generativelanguage.googleapis.com/v1beta/models?pageSize=1&key=${encodeURIComponent(a)}`);if(t.ok)return{ok:!0};const i=await t.json().catch(()=>({}));return{ok:!1,message:((e=i==null?void 0:i.error)==null?void 0:e.message)||`Error ${t.status}`}}catch{return{ok:!1,message:"No hay conexión a internet."}}}function m(a){return String(a??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function se(a){const e=document.createElement("template");return e.innerHTML=a.trim(),e.content.firstElementChild}function za(a){const e=Math.floor(a/60),t=Math.floor(a%60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`}function M(a,e="info"){let t=document.querySelector(".toasts");t||(t=se('<div class="toasts"></div>'),document.body.appendChild(t));const i=se(`<div class="toast toast-${e}">${m(a)}</div>`);t.appendChild(i),setTimeout(()=>i.classList.add("out"),4200),setTimeout(()=>i.remove(),4700)}function Yn(a,e,t){const i=m(a);if(!e)return i;const n=m(e.trim());if(!n)return i;const s=i.toLowerCase().indexOf(n.toLowerCase());return s<0?i:`${i.slice(0,s)}<mark class="${t}">${i.slice(s,s+n.length)}</mark>${i.slice(s+n.length)}`}function Jn(a){const e=Oe(),t=se(`
    <main class="page setup">
      <section class="hero">
        <img src="./icon.svg" alt="" class="hero-logo" />
        <h1>Profesor Virtual de Idiomas</h1>
        <p class="lead">Conversa por voz en <b>inglés 🇬🇧</b> o <b>italiano 🇮🇹</b> sobre cualquier tema o profesión.
        Tu profesor te escucha, te responde y <b>corrige tu pronunciación al instante</b>.</p>
      </section>

      <section class="card">
        <h2>🔑 Paso único: tu clave gratuita</h2>
        <p class="muted">La app usa la inteligencia artificial de Google (Gemini). Cada alumno usa su propia clave
        <b>gratuita</b>: no necesitas tarjeta de crédito y practicas cuanto quieras dentro del límite gratuito de Google.</p>
        <ol class="steps">
          <li>Abre <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener">aistudio.google.com/apikey</a> e inicia sesión con tu cuenta de Google (Gmail).</li>
          <li>Acepta los términos si te los pide y pulsa <b>“Create API key”</b> (Crear clave de API).</li>
          <li>Copia la clave (empieza con <code>AIza…</code>) y pégala aquí abajo.</li>
        </ol>
        <form class="key-form">
          <label for="key">Tu clave de Gemini</label>
          <div class="key-row">
            <input id="key" type="password" autocomplete="off" spellcheck="false" placeholder="AIza..." value="${m(e.apiKey)}" required />
            <button type="button" class="btn ghost small toggle" aria-label="Mostrar u ocultar">👁️</button>
          </div>
          <label for="name">¿Cómo te llamas? <span class="muted">(opcional, para que el profesor te llame por tu nombre)</span></label>
          <input id="name" type="text" maxlength="40" placeholder="Ej.: María" value="${m(e.studentName)}" />
          <p class="error" hidden></p>
          <button class="btn primary big" type="submit">Guardar y empezar</button>
        </form>
        <p class="note">🔒 Tu clave se guarda <b>solo en este dispositivo</b>. Nadie más la ve.
        Aviso: en el plan gratuito, Google puede usar las conversaciones para mejorar sus modelos; evita compartir datos personales sensibles.</p>
      </section>

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `),i=t.querySelector(".key-form"),n=t.querySelector("#key"),s=t.querySelector(".error");t.querySelector(".toggle").addEventListener("click",()=>{n.type=n.type==="password"?"text":"password"}),i.addEventListener("submit",async r=>{r.preventDefault();const o=n.value.trim(),c=i.querySelector("button[type=submit]");s.hidden=!0,c.disabled=!0,c.textContent="Verificando clave…";const l=await _i(o);if(c.disabled=!1,c.textContent="Guardar y empezar",!l.ok){s.textContent=`No pudimos verificar la clave: ${l.message}`,s.hidden=!1;return}Z({apiKey:o,studentName:t.querySelector("#name").value.trim()}),location.hash="#/home"}),a.appendChild(t)}const Xn=[{id:"trabajo",label:"Trabajo",emoji:"💼"},{id:"profesiones",label:"Profesiones",emoji:"🧑‍⚕️"},{id:"diario",label:"Vida diaria",emoji:"🛒"},{id:"viajes",label:"Viajes",emoji:"✈️"},{id:"academico",label:"Académico",emoji:"🎓"},{id:"charla",label:"Charla libre",emoji:"💬"}],la=[{id:"job-interview",cat:"trabajo",emoji:"🤝",title:"Entrevista de trabajo",desc:"El profesor es el entrevistador.",scenario:"Role-play a job interview. You are the interviewer (HR manager) and the student is the candidate. Ask about experience, strengths, weaknesses, motivation and salary expectations. Ask what job they are applying for first."},{id:"business-meeting",cat:"trabajo",emoji:"📊",title:"Reunión de negocios",desc:"Discutir un proyecto con un colega.",scenario:"Role-play a business meeting. You are a colleague discussing a project status, deadlines, problems and next steps with the student."},{id:"presentation",cat:"trabajo",emoji:"🎤",title:"Presentar un proyecto",desc:"Exponer una idea y responder preguntas.",scenario:"The student presents a project or idea to you (a manager / investor). Listen, then ask follow-up questions and challenge their arguments politely."},{id:"negotiation",cat:"trabajo",emoji:"🤝",title:"Negociación",desc:"Negociar precio y condiciones.",scenario:"Role-play a negotiation between a supplier (you) and a client (the student) about price, delivery times and conditions."},{id:"phone-call",cat:"trabajo",emoji:"📞",title:"Llamada telefónica",desc:"Atender y hacer llamadas formales.",scenario:"Role-play a formal phone call: the student calls a company to request information, schedule a meeting or make a complaint. You are the receptionist."},{id:"customer-service",cat:"trabajo",emoji:"🎧",title:"Atención al cliente",desc:"El alumno atiende a un cliente molesto.",scenario:"You are an upset customer with a problem (wrong order, delayed delivery). The student works in customer service and must solve it."},{id:"networking",cat:"trabajo",emoji:"🍸",title:"Networking",desc:"Conocer profesionales en un evento.",scenario:"Role-play small talk at a professional networking event. Introduce yourselves, talk about jobs, companies and industry trends."},{id:"immigration-officer",cat:"profesiones",emoji:"🛂",title:"Inspector de migraciones",desc:"El alumno controla el ingreso de pasajeros.",scenario:"Role-play border control / immigration. The student is an immigration officer at an airport or border checkpoint. You are an incoming foreign traveler. The student must check your passport, ask about the purpose of your visit, duration of stay, accommodation, return ticket, and financial funds. Give realistic answers and occasionally minor complications to test their professional vocabulary."},{id:"doctor-patient",cat:"profesiones",emoji:"🩺",title:"Médico y paciente",desc:"El alumno es el médico.",scenario:"You are a patient with some symptoms. The student is the doctor: they must ask questions, give a diagnosis and recommend treatment. Use realistic medical vocabulary."},{id:"patient-doctor",cat:"profesiones",emoji:"🤒",title:"Paciente en consulta",desc:"El alumno es el paciente.",scenario:"You are a doctor. The student is a patient explaining their symptoms. Ask detailed questions and give advice."},{id:"nurse",cat:"profesiones",emoji:"💉",title:"Enfermería",desc:"Cuidar y explicar a un paciente.",scenario:"You are a hospitalized patient. The student is the nurse: they explain procedures, medication schedules and check on your condition."},{id:"lawyer",cat:"profesiones",emoji:"⚖️",title:"Abogado",desc:"Asesorar a un cliente.",scenario:"You are a client with a legal problem (a contract dispute or a work issue). The student is the lawyer who asks questions and gives advice. Use basic legal vocabulary."},{id:"engineer",cat:"profesiones",emoji:"🏗️",title:"Ingeniería",desc:"Explicar un problema técnico en obra.",scenario:"You are a project manager on a construction or engineering site. Discuss a technical problem, safety issues, materials and schedules with the student, who is the engineer."},{id:"it-support",cat:"profesiones",emoji:"💻",title:"Tecnología / TI",desc:"Soporte técnico o reunión de desarrollo.",scenario:"You are a non-technical user whose computer or software is not working. The student is the IT specialist who must diagnose and explain the solution clearly."},{id:"teacher",cat:"profesiones",emoji:"👩‍🏫",title:"Docencia",desc:"Explicar un tema a un estudiante.",scenario:"You are a curious student. The student (user) is the teacher who explains a topic of their choice. Ask questions when something is not clear."},{id:"accountant",cat:"profesiones",emoji:"📈",title:"Contabilidad y finanzas",desc:"Explicar estados financieros a un cliente.",scenario:"You are a small business owner. The student is your accountant explaining taxes, expenses, budgets and financial statements."},{id:"hotel-reception",cat:"profesiones",emoji:"🏨",title:"Recepción de hotel",desc:"El alumno es el recepcionista.",scenario:"You are a hotel guest checking in, asking about services and later making a complaint. The student is the receptionist."},{id:"waiter",cat:"profesiones",emoji:"🍽️",title:"Mesero / restaurante",desc:"El alumno atiende la mesa.",scenario:"You are a customer in a restaurant. The student is the waiter: they take your order, recommend dishes and handle the bill."},{id:"tour-guide",cat:"profesiones",emoji:"🗺️",title:"Guía turístico",desc:"Presentar un lugar a turistas.",scenario:"You are a tourist. The student is a tour guide presenting a city, monument or region (they choose). Ask questions about history, food and culture."},{id:"sales",cat:"profesiones",emoji:"🛍️",title:"Ventas",desc:"Vender un producto o servicio.",scenario:"You are a potential customer. The student is a salesperson trying to sell you a product or service. Raise objections and ask questions."},{id:"restaurant",cat:"diario",emoji:"🍝",title:"En el restaurante",desc:"Pedir comida y la cuenta.",scenario:"You are a waiter. The student is a customer ordering food and drinks, asking about the menu and paying."},{id:"shopping",cat:"diario",emoji:"👕",title:"De compras",desc:"Comprar ropa, tallas, precios.",scenario:"You are a shop assistant in a clothing store. The student is buying clothes: sizes, colors, prices, returns."},{id:"supermarket",cat:"diario",emoji:"🛒",title:"Supermercado y mercado",desc:"Comprar alimentos.",scenario:"You are a vendor at a market or supermarket. The student buys food, asks about prices, quantities and quality."},{id:"directions",cat:"diario",emoji:"🧭",title:"Pedir direcciones",desc:"Orientarse en la ciudad.",scenario:"The student is lost in a city and asks you (a local) for directions to different places. Give realistic directions."},{id:"renting",cat:"diario",emoji:"🏠",title:"Alquilar un departamento",desc:"Hablar con el propietario.",scenario:"You are a landlord. The student wants to rent an apartment: ask and answer about price, rules, location and contract."},{id:"bank",cat:"diario",emoji:"🏦",title:"En el banco",desc:"Abrir una cuenta, hacer trámites.",scenario:"You are a bank employee. The student wants to open an account, ask about a card or solve a problem."},{id:"pharmacy",cat:"diario",emoji:"💊",title:"Farmacia",desc:"Pedir medicamentos y consejos.",scenario:"You are a pharmacist. The student explains a minor health problem and asks for medicine and advice."},{id:"making-friends",cat:"diario",emoji:"🙋",title:"Conocer gente",desc:"Presentarse y hacer amigos.",scenario:"You meet the student at a party or cafe. Introduce yourselves and talk about where you are from, hobbies, family and plans."},{id:"airport",cat:"viajes",emoji:"🛫",title:"Aeropuerto",desc:"Check-in, migraciones, equipaje.",scenario:"Role-play airport situations: check-in counter, security, immigration officer questions and a lost luggage desk. You play each official."},{id:"hotel-guest",cat:"viajes",emoji:"🛎️",title:"Hospedarse en un hotel",desc:"El alumno es el huésped.",scenario:"You are a hotel receptionist. The student is a guest checking in, asking about breakfast, wifi, tours and reporting a problem in the room."},{id:"transport",cat:"viajes",emoji:"🚆",title:"Transporte",desc:"Tren, bus, taxi, boletos.",scenario:"You are a ticket seller at a train/bus station or a taxi driver. The student buys tickets and asks about schedules, routes and prices."},{id:"emergency",cat:"viajes",emoji:"🚨",title:"Emergencias",desc:"Pedir ayuda, policía, hospital.",scenario:"The student has an emergency while travelling (lost passport, theft, accident). You are a police officer or emergency operator."},{id:"tourism",cat:"viajes",emoji:"🏛️",title:"Turismo y cultura",desc:"Planear un viaje y visitas.",scenario:"You are a travel agent or a local friend. Help the student plan a trip: places to visit, food, culture, budget."},{id:"thesis",cat:"academico",emoji:"📚",title:"Exponer mi tesis",desc:"Explicar tu investigación.",scenario:"You are a member of a thesis committee. The student explains their research (topic, objectives, method, results). Ask academic questions."},{id:"scholarship",cat:"academico",emoji:"🏅",title:"Entrevista de beca",desc:"Convencer al comité.",scenario:"You are on a scholarship committee for studying abroad. Interview the student about their goals, academic background and why they deserve it."},{id:"conference",cat:"academico",emoji:"🎙️",title:"Congreso / conferencia",desc:"Presentar y debatir ideas.",scenario:"You are an attendee at an academic conference. After the student summarizes their talk, ask questions and discuss."},{id:"university-life",cat:"academico",emoji:"🏫",title:"Vida universitaria",desc:"Matrícula, cursos, compañeros.",scenario:"You are an exchange student or university staff. Talk about courses, enrollment, schedules, campus life and exams."},{id:"free-talk",cat:"charla",emoji:"☕",title:"Conversación libre",desc:"Hablar de lo que quieras.",scenario:"Have a friendly free conversation. Start by asking the student how they are and what they would like to talk about. Follow their interests."},{id:"sports",cat:"charla",emoji:"⚽",title:"Deportes",desc:"Fútbol, equipos, partidos.",scenario:"Have a casual conversation about sports: favorite teams, recent matches, playing sports, famous athletes."},{id:"movies",cat:"charla",emoji:"🎬",title:"Cine y series",desc:"Películas favoritas y recomendaciones.",scenario:"Talk about movies and TV series: favorites, recommendations, describing plots and characters, opinions."},{id:"food-culture",cat:"charla",emoji:"🍲",title:"Comida y cultura",desc:"Platos típicos y costumbres.",scenario:"Talk about food and culture: typical dishes from the student's country and from your culture, recipes, traditions and festivals."},{id:"news",cat:"charla",emoji:"📰",title:"Actualidad y opinión",desc:"Debatir temas de actualidad.",scenario:"Discuss current general topics (technology, environment, education, social media). Ask for the student's opinion and politely debate."},{id:"hobbies",cat:"charla",emoji:"🎸",title:"Pasatiempos",desc:"Música, lectura, viajes, hobbies.",scenario:"Talk about hobbies and free time: music, reading, travel, video games, weekends."}];function Qn(a){return la.find(e=>e.id===a)||null}const Ne={pending:null},Zn=()=>{};var Fa={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=function(a){const e=[];let t=0;for(let i=0;i<a.length;i++){let n=a.charCodeAt(i);n<128?e[t++]=n:n<2048?(e[t++]=n>>6|192,e[t++]=n&63|128):(n&64512)===55296&&i+1<a.length&&(a.charCodeAt(i+1)&64512)===56320?(n=65536+((n&1023)<<10)+(a.charCodeAt(++i)&1023),e[t++]=n>>18|240,e[t++]=n>>12&63|128,e[t++]=n>>6&63|128,e[t++]=n&63|128):(e[t++]=n>>12|224,e[t++]=n>>6&63|128,e[t++]=n&63|128)}return e},es=function(a){const e=[];let t=0,i=0;for(;t<a.length;){const n=a[t++];if(n<128)e[i++]=String.fromCharCode(n);else if(n>191&&n<224){const s=a[t++];e[i++]=String.fromCharCode((n&31)<<6|s&63)}else if(n>239&&n<365){const s=a[t++],r=a[t++],o=a[t++],c=((n&7)<<18|(s&63)<<12|(r&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const s=a[t++],r=a[t++];e[i++]=String.fromCharCode((n&15)<<12|(s&63)<<6|r&63)}}return e.join("")},xi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(a,e){if(!Array.isArray(a))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let n=0;n<a.length;n+=3){const s=a[n],r=n+1<a.length,o=r?a[n+1]:0,c=n+2<a.length,l=c?a[n+2]:0,u=s>>2,h=(s&3)<<4|o>>4;let d=(o&15)<<2|l>>6,_=l&63;c||(_=64,r||(d=64)),i.push(t[u],t[h],t[d],t[_])}return i.join("")},encodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(a):this.encodeByteArray(ki(a),e)},decodeString(a,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(a):es(this.decodeStringToByteArray(a,e))},decodeStringToByteArray(a,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let n=0;n<a.length;){const s=t[a.charAt(n++)],o=n<a.length?t[a.charAt(n)]:0;++n;const l=n<a.length?t[a.charAt(n)]:64;++n;const h=n<a.length?t[a.charAt(n)]:64;if(++n,s==null||o==null||l==null||h==null)throw new ts;const d=s<<2|o>>4;if(i.push(d),l!==64){const _=o<<4&240|l>>2;if(i.push(_),h!==64){const A=l<<6&192|h;i.push(A)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let a=0;a<this.ENCODED_VALS.length;a++)this.byteToCharMap_[a]=this.ENCODED_VALS.charAt(a),this.charToByteMap_[this.byteToCharMap_[a]]=a,this.byteToCharMapWebSafe_[a]=this.ENCODED_VALS_WEBSAFE.charAt(a),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[a]]=a,a>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(a)]=a,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(a)]=a)}}};class ts extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const as=function(a){const e=ki(a);return xi.encodeByteArray(e,!0)},Ri=function(a){return as(a).replace(/\./g,"")},Pi=function(a){try{return xi.decodeString(a,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function is(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=()=>is().__FIREBASE_DEFAULTS__,ss=()=>{if(typeof process>"u"||typeof Fa>"u")return;const a=Fa.__FIREBASE_DEFAULTS__;if(a)return JSON.parse(a)},rs=()=>{if(typeof document>"u")return;let a;try{a=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=a&&Pi(a[1]);return e&&JSON.parse(e)},Ea=()=>{try{return Zn()||ns()||ss()||rs()}catch(a){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${a}`);return}},os=a=>{var e,t;return(t=(e=Ea())==null?void 0:e.emulatorHosts)==null?void 0:t[a]},Ni=()=>{var a;return(a=Ea())==null?void 0:a.config},Li=a=>{var e;return(e=Ea())==null?void 0:e[`_${a}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(B())}function ls(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ds(){const a=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof a=="object"&&a.id!==void 0}function us(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hs(){const a=B();return a.indexOf("MSIE ")>=0||a.indexOf("Trident/")>=0}function ps(){try{return typeof indexedDB=="object"}catch{return!1}}function ms(){return new Promise((a,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",n=self.indexedDB.open(i);n.onsuccess=()=>{n.result.close(),t||self.indexedDB.deleteDatabase(i),a(!0)},n.onupgradeneeded=()=>{t=!1},n.onerror=()=>{var s;e(((s=n.error)==null?void 0:s.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="FirebaseError";class De extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=fs,Object.setPrototypeOf(this,De.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,It.prototype.create)}}class It{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},n=`${this.service}/${e}`,s=this.errors[e],r=s?gs(s,i):"Error",o=`${this.serviceName}: ${r} (${n}).`;return new De(n,o,i)}}function gs(a,e){try{let t=0,i="";for(;t<a.length;){const n=a.indexOf("{$",t);if(n===-1){i+=a.substring(t);break}const s=a.indexOf("}",n+2);if(s===-1){i+=a.substring(t);break}const r=a.substring(n+2,s),o=e[r];i+=a.substring(t,n)+(o!=null?String(o):`<${r}?>`),t=s+1}return i}catch{return a}}function ys(a){for(const e in a)if(Object.prototype.hasOwnProperty.call(a,e))return!1;return!0}function et(a,e){if(a===e)return!0;const t=Object.keys(a),i=Object.keys(e);for(const n of t){if(!i.includes(n))return!1;const s=a[n],r=e[n];if(Ha(s)&&Ha(r)){if(!et(s,r))return!1}else if(s!==r)return!1}for(const n of i)if(!t.includes(n))return!1;return!0}function Ha(a){return a!==null&&typeof a=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(a){const e=[];for(const[t,i]of Object.entries(a))Array.isArray(i)?i.forEach(n=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(n))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function ht(a){const e={};return a.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[n,s]=i.split("=");e[decodeURIComponent(n)]=decodeURIComponent(s)}}),e}function pt(a){const e=a.indexOf("?");if(!e)return"";const t=a.indexOf("#",e);return a.substring(e,t>0?t:void 0)}function vs(a,e){const t=new bs(a,e);return t.subscribe.bind(t)}class bs{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let n;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");Es(e,["next","error","complete"])?n=e:n={next:e,error:t,complete:i},n.next===void 0&&(n.next=Zt),n.error===void 0&&(n.error=Zt),n.complete===void 0&&(n.complete=Zt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?n.error(this.finalError):n.complete()}catch{}}),this.observers.push(n),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Es(a,e){if(typeof a!="object"||a===null)return!1;for(const t of e)if(t in a&&typeof a[t]=="function")return!0;return!1}function Zt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(a){return a&&a._delegate?a._delegate:a}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ia(a){try{return(a.startsWith("http://")||a.startsWith("https://")?new URL(a).hostname:a).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Is(a){return(await fetch(a,{credentials:"include"})).ok}class tt{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new Oi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&i.resolve(n)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(n){if(i)return null;throw n}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Ss(e))try{this.getOrInitializeService({instanceIdentifier:ze})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:n});i.resolve(s)}catch{}}}}clearInstance(e=ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ze){return this.instances.has(e)}getOptions(e=ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const n=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[s,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&r.resolve(n)}return n}onInit(e,t){const i=this.normalizeInstanceIdentifier(t),n=this.onInitCallbacks.get(i)??new Set;n.add(e),this.onInitCallbacks.set(i,n);const s=this.instances.get(i);return s&&e(s,i),()=>{n.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const n of i)try{n(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ts(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ze){return this.component?this.component.multipleInstances?e:ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ts(a){return a===ze?void 0:a}function Ss(a){return a.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ws(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var x;(function(a){a[a.DEBUG=0]="DEBUG",a[a.VERBOSE=1]="VERBOSE",a[a.INFO=2]="INFO",a[a.WARN=3]="WARN",a[a.ERROR=4]="ERROR",a[a.SILENT=5]="SILENT"})(x||(x={}));const As={debug:x.DEBUG,verbose:x.VERBOSE,info:x.INFO,warn:x.WARN,error:x.ERROR,silent:x.SILENT},_s=x.INFO,ks={[x.DEBUG]:"log",[x.VERBOSE]:"log",[x.INFO]:"info",[x.WARN]:"warn",[x.ERROR]:"error"},xs=(a,e,...t)=>{if(e<a.logLevel)return;const i=new Date().toISOString(),n=ks[e];if(n)console[n](`[${i}]  ${a.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Di{constructor(e){this.name=e,this._logLevel=_s,this._logHandler=xs,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in x))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?As[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,x.DEBUG,...e),this._logHandler(this,x.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,x.VERBOSE,...e),this._logHandler(this,x.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,x.INFO,...e),this._logHandler(this,x.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,x.WARN,...e),this._logHandler(this,x.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,x.ERROR,...e),this._logHandler(this,x.ERROR,...e)}}const Rs=(a,e)=>e.some(t=>a instanceof t);let Va,Ga;function Ps(){return Va||(Va=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ns(){return Ga||(Ga=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Mi=new WeakMap,da=new WeakMap,$i=new WeakMap,ea=new WeakMap,wa=new WeakMap;function Ls(a){const e=new Promise((t,i)=>{const n=()=>{a.removeEventListener("success",s),a.removeEventListener("error",r)},s=()=>{t(Le(a.result)),n()},r=()=>{i(a.error),n()};a.addEventListener("success",s),a.addEventListener("error",r)});return e.then(t=>{t instanceof IDBCursor&&Mi.set(t,a)}).catch(()=>{}),wa.set(e,a),e}function Os(a){if(da.has(a))return;const e=new Promise((t,i)=>{const n=()=>{a.removeEventListener("complete",s),a.removeEventListener("error",r),a.removeEventListener("abort",r)},s=()=>{t(),n()},r=()=>{i(a.error||new DOMException("AbortError","AbortError")),n()};a.addEventListener("complete",s),a.addEventListener("error",r),a.addEventListener("abort",r)});da.set(a,e)}let ua={get(a,e,t){if(a instanceof IDBTransaction){if(e==="done")return da.get(a);if(e==="objectStoreNames")return a.objectStoreNames||$i.get(a);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Le(a[e])},set(a,e,t){return a[e]=t,!0},has(a,e){return a instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in a}};function Ds(a){ua=a(ua)}function Ms(a){return a===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=a.call(ta(this),e,...t);return $i.set(i,e.sort?e.sort():[e]),Le(i)}:Ns().includes(a)?function(...e){return a.apply(ta(this),e),Le(Mi.get(this))}:function(...e){return Le(a.apply(ta(this),e))}}function $s(a){return typeof a=="function"?Ms(a):(a instanceof IDBTransaction&&Os(a),Rs(a,Ps())?new Proxy(a,ua):a)}function Le(a){if(a instanceof IDBRequest)return Ls(a);if(ea.has(a))return ea.get(a);const e=$s(a);return e!==a&&(ea.set(a,e),wa.set(e,a)),e}const ta=a=>wa.get(a);function Us(a,e,{blocked:t,upgrade:i,blocking:n,terminated:s}={}){const r=indexedDB.open(a,e),o=Le(r);return i&&r.addEventListener("upgradeneeded",c=>{i(Le(r.result),c.oldVersion,c.newVersion,Le(r.transaction),c)}),t&&r.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),n&&c.addEventListener("versionchange",l=>n(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const js=["get","getKey","getAll","getAllKeys","count"],qs=["put","add","delete","clear"],aa=new Map;function Wa(a,e){if(!(a instanceof IDBDatabase&&!(e in a)&&typeof e=="string"))return;if(aa.get(e))return aa.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,n=qs.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(n||js.includes(t)))return;const s=async function(r,...o){const c=this.transaction(r,n?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(o.shift())),(await Promise.all([l[t](...o),n&&c.done]))[0]};return aa.set(e,s),s}Ds(a=>({...a,get:(e,t,i)=>Wa(e,t)||a.get(e,t,i),has:(e,t)=>!!Wa(e,t)||a.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(zs(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function zs(a){const e=a.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ha="@firebase/app",Ka="0.16.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new Di("@firebase/app"),Fs="@firebase/app-compat",Hs="@firebase/analytics-compat",Vs="@firebase/analytics",Gs="@firebase/app-check-compat",Ws="@firebase/app-check",Ks="@firebase/auth",Ys="@firebase/auth-compat",Js="@firebase/database",Xs="@firebase/data-connect",Qs="@firebase/database-compat",Zs="@firebase/functions",er="@firebase/functions-compat",tr="@firebase/installations",ar="@firebase/installations-compat",ir="@firebase/messaging",nr="@firebase/messaging-compat",sr="@firebase/performance",rr="@firebase/performance-compat",or="@firebase/remote-config",cr="@firebase/remote-config-compat",lr="@firebase/storage",dr="@firebase/storage-compat",ur="@firebase/firestore",hr="@firebase/ai",pr="@firebase/firestore-compat",mr="firebase",fr="13.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="[DEFAULT]",gr={[ha]:"fire-core",[Fs]:"fire-core-compat",[Vs]:"fire-analytics",[Hs]:"fire-analytics-compat",[Ws]:"fire-app-check",[Gs]:"fire-app-check-compat",[Ks]:"fire-auth",[Ys]:"fire-auth-compat",[Js]:"fire-rtdb",[Xs]:"fire-data-connect",[Qs]:"fire-rtdb-compat",[Zs]:"fire-fn",[er]:"fire-fn-compat",[tr]:"fire-iid",[ar]:"fire-iid-compat",[ir]:"fire-fcm",[nr]:"fire-fcm-compat",[sr]:"fire-perf",[rr]:"fire-perf-compat",[or]:"fire-rc",[cr]:"fire-rc-compat",[lr]:"fire-gcs",[dr]:"fire-gcs-compat",[ur]:"fire-fst",[pr]:"fire-fst-compat",[hr]:"fire-vertex","fire-js":"fire-js",[mr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Map,yr=new Map,ma=new Map;function Ya(a,e){try{a.container.addComponent(e)}catch(t){Ee.debug(`Component ${e.name} failed to register with FirebaseApp ${a.name}`,t)}}function vt(a){const e=a.name;if(ma.has(e))return Ee.debug(`There were multiple attempts to register component ${e}.`),!1;ma.set(e,a);for(const t of yt.values())Ya(t,a);for(const t of yr.values())Ya(t,a);return!0}function Ui(a,e){const t=a.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),a.container.getProvider(e)}function W(a){return a==null?!1:a.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},fe=new It("app","Firebase",vr);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{constructor(e,t,i){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new tt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw fe.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tt=fr;function ji(a,e={}){let t=a;typeof e!="object"&&(e={name:e});const i={name:pa,automaticDataCollectionEnabled:!0,...e},n=i.name;if(typeof n!="string"||!n)throw fe.create("bad-app-name",{appName:String(n)});if(t||(t=Ni()),!t)throw fe.create("no-options");const s=yt.get(n);if(s)if(et(t,s.options)){if(et(i,s.config))return s;throw fe.create("duplicate-app",{appName:n,mismatchedParam:"config",oldValue:JSON.stringify(s.config),newValue:JSON.stringify(i)})}else throw fe.create("duplicate-app",{appName:n,mismatchedParam:"options",oldValue:JSON.stringify(s.options),newValue:JSON.stringify(t)});const r=new Cs(n);for(const c of ma.values())r.addComponent(c);const o=new br(t,i,r);return yt.set(n,o),o}function qi(a=pa){const e=yt.get(a);if(!e&&a===pa&&Ni())return ji();if(!e)throw fe.create("no-app",{appName:a});return e}function Er(){return Array.from(yt.values())}function Xe(a,e,t){let i=gr[a]??a;t&&(i+=`-${t}`);const n=i.match(/\s|\//),s=e.match(/\s|\//);if(n||s){const r=[`Unable to register library "${i}" with version "${e}":`];n&&r.push(`library name "${i}" contains illegal characters (whitespace or "/")`),n&&s&&r.push("and"),s&&r.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ee.warn(r.join(" "));return}vt(new tt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir="firebase-heartbeat-database",wr=1,bt="firebase-heartbeat-store";let ia=null;function Bi(){return ia||(ia=Us(Ir,wr,{upgrade:(a,e)=>{switch(e){case 0:try{a.createObjectStore(bt)}catch(t){console.warn(t)}}}}).catch(a=>{throw fe.create("idb-open",{originalErrorMessage:a.message})})),ia}async function Tr(a){try{const t=(await Bi()).transaction(bt),i=await t.objectStore(bt).get(zi(a));return await t.done,i}catch(e){if(e instanceof De)Ee.warn(e.message);else{const t=fe.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ee.warn(t.message)}}}async function Ja(a,e){try{const i=(await Bi()).transaction(bt,"readwrite");await i.objectStore(bt).put(e,zi(a)),await i.done}catch(t){if(t instanceof De)Ee.warn(t.message);else{const i=fe.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Ee.warn(i.message)}}}function zi(a){return`${a.name}!${a.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sr=1024,Cr=30;class Ar{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kr(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Xa();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(r=>r.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats.length>Cr){const r=xr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Ee.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Xa(),{heartbeatsToSend:i,unsentEntries:n}=_r(this._heartbeatsCache.heartbeats),s=Ri(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(t){return Ee.warn(t),""}}}function Xa(){return new Date().toISOString().substring(0,10)}function _r(a,e=Sr){const t=[];let i=a.slice();for(const n of a){const s=t.find(r=>r.agent===n.agent);if(s){if(s.dates.push(n.date),Qa(t)>e){s.dates.pop();break}}else if(t.push({agent:n.agent,dates:[n.date]}),Qa(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class kr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ps()?ms().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Tr(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ja(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Ja(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Qa(a){return Ri(JSON.stringify({version:2,heartbeats:a})).length}function xr(a){if(a.length===0)return-1;let e=0,t=a[0].date;for(let i=1;i<a.length;i++)a[i].date<t&&(t=a[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rr(a){vt(new tt("platform-logger",e=>new Bs(e),"PRIVATE")),vt(new tt("heartbeat",e=>new Ar(e),"PRIVATE")),Xe(ha,Ka,a),Xe(ha,Ka,"esm2020"),Xe("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rr("");var Pr="firebase",Nr="13.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xe(Pr,Nr,"app");function Fi(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Lr=Fi,Hi=new It("auth","Firebase",Fi());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Di("@firebase/auth");function Nt(a,...e){$t.logLevel<=x.WARN&&$t.warn(`Auth (${Tt}): ${a}`,...e)}function Lt(a,...e){$t.logLevel<=x.ERROR&&$t.error(`Auth (${Tt}): ${a}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(a,...e){throw Ta(a,...e)}function te(a,...e){return Ta(a,...e)}function Ht(a,e,t){const i={...Lr(),[e]:t};return new It("auth","Firebase",i).create(e,{appName:a.name})}function be(a){return Ht(a,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Or(a,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&K(a,"argument-error"),Ht(a,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ta(a,...e){if(typeof a!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=a.name),a._errorFactory.create(t,...i)}return Hi.create(a,...e)}function g(a,e,...t){if(!a)throw Ta(e,...t)}function ge(a){const e="INTERNAL ASSERTION FAILED: "+a;throw Lt(e),new Error(e)}function Ie(a,e){a||ge(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fa(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.href)||""}function Dr(){return Za()==="http:"||Za()==="https:"}function Za(){var a;return typeof self<"u"&&((a=self.location)==null?void 0:a.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Dr()||ds()||"connection"in navigator)?navigator.onLine:!0}function $r(){if(typeof navigator>"u")return null;const a=navigator;return a.languages&&a.languages[0]||a.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ie(t>e,"Short delay should be less than long delay!"),this.isMobile=cs()||us()}get(){return Mr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(a,e){Ie(a.emulator,"Emulator should always be set here");const{url:t}=a.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ge("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ge("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ge("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],qr=new St(3e4,6e4);function we(a,e){return a.tenantId&&!e.tenantId?{...e,tenantId:a.tenantId}:e}async function le(a,e,t,i,n={}){return Gi(a,n,async()=>{let s={},r={};i&&(e==="GET"?r=i:s={body:JSON.stringify(i)});const o=wt({...r,key:a.config.apiKey}).slice(1),c=await a._getAdditionalHeaders();c["Content-Type"]="application/json",a.languageCode&&(c["X-Firebase-Locale"]=a.languageCode);const l={method:e,headers:c,...s};return ls()||(l.referrerPolicy="strict-origin-when-cross-origin"),a.emulatorConfig&&Ia(a.emulatorConfig.host)&&(l.credentials="include"),Vi.fetch()(await Wi(a,a.config.apiHost,t,o),l)})}async function Gi(a,e,t){a._canInitEmulator=!1;const i={...Ur,...e};try{const n=new zr(a),s=await Promise.race([t(),n.promise]);n.clearNetworkTimeout();const r=await s.json();if("needConfirmation"in r)throw Rt(a,"account-exists-with-different-credential",r);if(s.ok&&!("errorMessage"in r))return r;{const o=s.ok?r.errorMessage:r.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rt(a,"credential-already-in-use",r);if(c==="EMAIL_EXISTS")throw Rt(a,"email-already-in-use",r);if(c==="USER_DISABLED")throw Rt(a,"user-disabled",r);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Ht(a,u,l);K(a,u)}}catch(n){if(n instanceof De)throw n;K(a,"network-request-failed",{message:String(n)})}}async function Ct(a,e,t,i,n={}){const s=await le(a,e,t,i,n);return"mfaPendingCredential"in s&&K(a,"multi-factor-auth-required",{_serverResponse:s}),s}async function Wi(a,e,t,i){const n=`${e}${t}?${i}`,s=a,r=s.config.emulator?Sa(a.config,n):`${a.config.apiScheme}://${n}`;return jr.includes(t)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(r).toString():r}function Br(a){switch(a){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class zr{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(te(this.auth,"network-request-failed")),qr.get())})}}function Rt(a,e,t){const i={appName:a.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const n=te(a,e,i);return n.customData._tokenResponse=t,n}function ei(a){return a!==void 0&&a.enterprise!==void 0}class Fr{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Br(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Hr(a,e){return le(a,"GET","/v2/recaptchaConfig",we(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vr(a,e){return le(a,"POST","/v1/accounts:delete",e)}async function Ut(a,e){return le(a,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(a){if(a)try{const e=new Date(Number(a));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Gr(a,e=!1){const t=ce(a),i=await t.getIdToken(e),n=Ca(i);g(n&&n.exp&&n.auth_time&&n.iat,t.auth,"internal-error");const s=typeof n.firebase=="object"?n.firebase:void 0,r=s==null?void 0:s.sign_in_provider;return{claims:n,token:i,authTime:ft(na(n.auth_time)),issuedAtTime:ft(na(n.iat)),expirationTime:ft(na(n.exp)),signInProvider:r||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function na(a){return Number(a)*1e3}function Ca(a){const[e,t,i]=a.split(".");if(e===void 0||t===void 0||i===void 0)return Lt("JWT malformed, contained fewer than 3 sections"),null;try{const n=Pi(t);return n?JSON.parse(n):(Lt("Failed to decode base64 JWT payload"),null)}catch(n){return Lt("Caught error parsing JWT payload as JSON",n==null?void 0:n.toString()),null}}function ti(a){const e=Ca(a);return g(e,"internal-error"),g(typeof e.exp<"u","internal-error"),g(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(a,e,t=!1){if(t)return e;try{return await e}catch(i){throw Ki(i)&&a.auth.currentUser===a&&await a.auth.signOut(),i}}function Ki(a){return a instanceof De?a.code==="auth/user-disabled"||a.code==="auth/user-token-expired":!1}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const i=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=ft(this.lastLoginAt),this.creationTime=ft(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jt(a){var h;const e=a.auth,t=await a.getIdToken(),i=await at(a,Ut(e,{idToken:t}));g(i==null?void 0:i.users.length,e,"internal-error");const n=i.users[0];a._notifyReloadListener(n);const s=(h=n.providerUserInfo)!=null&&h.length?Yi(n.providerUserInfo):[],r=Yr(a.providerData,s),o=a.isAnonymous,c=!(a.email&&n.passwordHash)&&!(r!=null&&r.length),l=o?c:!1,u={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:r,metadata:new ga(n.createdAt,n.lastLoginAt),isAnonymous:l};Object.assign(a,u)}async function Kr(a){const e=ce(a);await jt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Yr(a,e){return[...a.filter(i=>!e.some(n=>n.providerId===i.providerId)),...e]}function Yi(a){return a.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jr(a,e){const t=await Gi(a,{},async()=>{const i=wt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:n,apiKey:s}=a.config,r=await Wi(a,n,"/v1/token",`key=${s}`),o=await a._getAdditionalHeaders();o["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:o,body:i};return a.emulatorConfig&&Ia(a.emulatorConfig.host)&&(c.credentials="include"),Vi.fetch()(r,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Xr(a,e){return le(a,"POST","/v2/accounts:revokeToken",we(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){g(e.idToken,"internal-error"),g(typeof e.idToken<"u","internal-error"),g(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ti(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){g(e.length!==0,"internal-error");const t=ti(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(g(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:n,expiresIn:s}=await Jr(e,t);this.updateTokensAndExpiration(i,n,Number(s))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:n,expirationTime:s}=t,r=new Qe;return i&&(g(typeof i=="string","internal-error",{appName:e}),r.refreshToken=i),n&&(g(typeof n=="string","internal-error",{appName:e}),r.accessToken=n),s&&(g(typeof s=="number","internal-error",{appName:e}),r.expirationTime=s),r}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Qe,this.toJSON())}_performRefresh(){return ge("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _e(a,e){g(typeof a=="string"||typeof a>"u","internal-error",{appName:e})}class ee{constructor({uid:e,auth:t,stsTokenManager:i,...n}){this.providerId="firebase",this.proactiveRefresh=new Wr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=n.displayName||null,this.email=n.email||null,this.emailVerified=n.emailVerified||!1,this.phoneNumber=n.phoneNumber||null,this.photoURL=n.photoURL||null,this.isAnonymous=n.isAnonymous||!1,this.tenantId=n.tenantId||null,this.providerData=n.providerData?[...n.providerData]:[],this.metadata=new ga(n.createdAt||void 0,n.lastLoginAt||void 0)}async getIdToken(e){const t=await at(this,this.stsTokenManager.getToken(this.auth,e));return g(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Gr(this,e)}reload(){return Kr(this)}_assign(e){this!==e&&(g(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ee({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){g(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await jt(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(W(this.auth.app))return Promise.reject(be(this.auth));const e=await this.getIdToken();return await at(this,Vr(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const i=t.displayName??void 0,n=t.email??void 0,s=t.phoneNumber??void 0,r=t.photoURL??void 0,o=t.tenantId??void 0,c=t._redirectEventId??void 0,l=t.createdAt??void 0,u=t.lastLoginAt??void 0,{uid:h,emailVerified:d,isAnonymous:_,providerData:A,stsTokenManager:D}=t;g(h&&D,e,"internal-error");const j=Qe.fromJSON(this.name,D);g(typeof h=="string",e,"internal-error"),_e(i,e.name),_e(n,e.name),g(typeof d=="boolean",e,"internal-error"),g(typeof _=="boolean",e,"internal-error"),_e(s,e.name),_e(r,e.name),_e(o,e.name),_e(c,e.name),_e(l,e.name),_e(u,e.name);const H=new ee({uid:h,auth:e,email:n,emailVerified:d,displayName:i,isAnonymous:_,photoURL:r,phoneNumber:s,tenantId:o,stsTokenManager:j,createdAt:l,lastLoginAt:u});return A&&Array.isArray(A)&&(H.providerData=A.map(Y=>({...Y}))),c&&(H._redirectEventId=c),H}static async _fromIdTokenResponse(e,t,i=!1){const n=new Qe;n.updateFromServerResponse(t);const s=new ee({uid:t.localId,auth:e,stsTokenManager:n,isAnonymous:i});return await jt(s),s}static async _fromGetAccountInfoResponse(e,t,i){const n=t.users[0];g(n.localId!==void 0,"internal-error");const s=n.providerUserInfo!==void 0?Yi(n.providerUserInfo):[],r=!(n.email&&n.passwordHash)&&!(s!=null&&s.length),o=new Qe;o.updateFromIdToken(i);const c=new ee({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:r}),l={uid:n.localId,displayName:n.displayName||null,photoURL:n.photoUrl||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,tenantId:n.tenantId||null,providerData:s,metadata:new ga(n.createdAt,n.lastLoginAt),isAnonymous:!(n.email&&n.passwordHash)&&!(s!=null&&s.length)};return Object.assign(c,l),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new Map;function ye(a){Ie(a instanceof Function,"Expected a class definition");let e=ai.get(a);return e?(Ie(e instanceof a,"Instance stored in cache mismatched with class"),e):(e=new a,ai.set(a,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ji.type="NONE";const ii=Ji;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ot(a,e,t){return`firebase:${a}:${e}:${t}`}class He{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:n,name:s}=this.auth;this.fullUserKey=Ot(this.userKey,n.apiKey,s),this.fullPersistenceKey=Ot("persistence",n.apiKey,s),this.boundEventHandler=t._onStorageEvent.bind(t);try{this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}catch{}}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ut(this.auth,{idToken:e}).catch(()=>{});return t?ee._fromGetAccountInfoResponse(this.auth,t,e):null}return ee._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){try{this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}catch{}}static async create(e,t,i="authUser"){if(!t.length)return new He(ye(ii),e,i);const n=(await Promise.all(t.map(async l=>{try{if(await l._isAvailable())return l}catch{return}}))).filter(l=>l);let s=n[0]||ye(ii);const r=Ot(i,e.config.apiKey,e.name);let o=null;for(const l of t)try{const u=await l._get(r);if(u){let h;if(typeof u=="string"){const d=await Ut(e,{idToken:u}).catch(()=>{});if(!d)break;h=await ee._fromGetAccountInfoResponse(e,d,u)}else h=ee._fromJSON(e,u);l!==s&&(o=h),s=l;break}}catch{}const c=n.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new He(s,e,i):(s=c[0],o&&await s._set(r,o.toJSON()),await Promise.all(t.map(async l=>{if(l!==s)try{await l._remove(r)}catch{}})),new He(s,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ni(a){const e=a.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(en(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Xi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(an(e))return"Blackberry";if(nn(e))return"Webos";if(Qi(e))return"Safari";if((e.includes("chrome/")||Zi(e))&&!e.includes("edge/"))return"Chrome";if(tn(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=a.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Xi(a=B()){return/firefox\//i.test(a)}function Qi(a=B()){const e=a.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Zi(a=B()){return/crios\//i.test(a)}function en(a=B()){return/iemobile/i.test(a)}function tn(a=B()){return/android/i.test(a)}function an(a=B()){return/blackberry/i.test(a)}function nn(a=B()){return/webos/i.test(a)}function Aa(a=B()){return/iphone|ipad|ipod/i.test(a)||/macintosh/i.test(a)&&/mobile/i.test(a)}function Qr(a=B()){var e;return Aa(a)&&!!((e=window.navigator)!=null&&e.standalone)}function Zr(){return hs()&&document.documentMode===10}function sn(a=B()){return Aa(a)||tn(a)||nn(a)||an(a)||/windows phone/i.test(a)||en(a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(a,e=[]){let t;switch(a){case"Browser":t=ni(B());break;case"Worker":t=`${ni(B())}-${a}`;break;default:t=a}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Tt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=s=>new Promise((r,o)=>{try{const c=e(s);r(c)}catch(c){o(c)}});i.onAbort=t,this.queue.push(i);const n=this.queue.length-1;return()=>{this.queue[n]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const n of t)try{n()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(a,e={}){return le(a,"GET","/v2/passwordPolicy",we(a,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao=6;class io{constructor(e){var i;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??ao,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((i=e.allowedNonAlphanumericCharacters)==null?void 0:i.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,n=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),n&&(t.meetsMaxPasswordLength=e.length<=n)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let n=0;n<e.length;n++)i=e.charAt(n),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,n,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=n)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class no{constructor(e,t,i,n){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new si(this),this.idTokenSubscription=new si(this),this.beforeStateQueue=new eo(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Hi,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=ye(t)),this._initializationPromise=this.queue(async()=>{var i,n,s;if(!this._deleted){try{this.persistenceManager=await He.create(this,e)}catch(r){Nt(`Failed to initialize persistence: ${r}`),this.persistenceManager=await He.create(this,[])}finally{(i=this._resolvePersistenceManagerAvailable)==null||i.call(this)}if(!this._deleted){if((n=this._popupRedirectResolver)!=null&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}try{await this.initializeCurrentUser(t)}catch(r){Nt(`Failed to initialize current user: ${r}`),await this.directlySetCurrentUser(null).catch(()=>{})}this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ut(this,{idToken:e}),i=await ee._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(W(this.app)){const r=this.app.settings.authIdToken;return r?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(r).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let i=t,n=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=(s=this.redirectUser)==null?void 0:s._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(e);(!r||r===o)&&(c!=null&&c.user)&&(i=c.user,n=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(n)try{await this.beforeStateQueue.runMiddleware(i)}catch(r){i=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(r))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return g(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await jt(e)}catch(t){if(Ki(t))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=$r()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(W(this.app))return Promise.reject(be(this));const t=e?ce(e):null;return t&&g(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&g(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return W(this.app)?Promise.reject(be(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return W(this.app)?Promise.reject(be(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ye(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await to(this),t=new io(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new It("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await Xr(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&ye(e)||this._popupRedirectResolver;g(t,this,"argument-error"),this.redirectPersistenceManager=await He.create(this,[ye(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)==null?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,n){if(this._deleted)return()=>{};const s=typeof t=="function"?t:t.next.bind(t);let r=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(g(o,this,"internal-error"),o.then(()=>{r||s(this.currentUser)}).catch(c=>{if(!r)if(typeof t!="function"&&t.error)t.error(c);else if(i)i(c);else throw c}),typeof t=="function"){const c=e.addObserver(t,i,n);return()=>{r=!0,c()}}else{const c=e.addObserver(t);return()=>{r=!0,c()}}}async directlySetCurrentUser(e){if(this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,this.persistenceManager)try{e?await this.persistenceManager.setCurrentUser(e):await this.persistenceManager.removeCurrentUser()}catch(t){const i=(t==null?void 0:t.message)||String(t),n=Ht(this,"internal-error",`An internal AuthError has occurred: ${i}`);throw n.customData={originalError:t},n}}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return g(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rn(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var n;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((n=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;if(W(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&Nt(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Te(a){return ce(a)}class si{constructor(e){this.auth=e,this.observer=null,this.addObserver=vs(t=>this.observer=t)}get next(){return g(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function so(a){Vt=a}function on(a){return Vt.loadJS(a)}function ro(){return Vt.recaptchaEnterpriseScript}function oo(){return Vt.gapiScript}function co(a){return`__${a}${Math.floor(Math.random()*1e6)}`}class lo{constructor(){this.enterprise=new uo}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class uo{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ho="recaptcha-enterprise",cn="NO_RECAPTCHA",ri="onFirebaseAuthREInstanceReady";class ke{constructor(e){this.type=ho,this.auth=Te(e)}async verify(e="verify",t=!1){async function i(s){if(!t){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(r,o)=>{Hr(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new Fr(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,r(l.siteKey)}}).catch(c=>{o(c)})})}function n(s,r,o){const c=window.grecaptcha;ei(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:e}).then(l=>{r(l)}).catch(()=>{r(cn)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lo().execute("siteKey",{action:"verify"}):new Promise((s,r)=>{i(this.auth).then(async o=>{if(!t&&ei(window.grecaptcha)&&ke.scriptInjectionDeferred)await ke.scriptInjectionDeferred.promise,n(o,s,r);else{if(typeof window>"u"){r(new Error("RecaptchaVerifier is only supported in browser"));return}let c=ro();c.length!==0&&(c+=o+`&onload=${ri}`),ke.scriptInjectionDeferred=new Oi,window[ri]=()=>{var l;(l=ke.scriptInjectionDeferred)==null||l.resolve()},on(c).then(()=>{var l;return(l=ke.scriptInjectionDeferred)==null?void 0:l.promise}).then(()=>{n(o,s,r)}).catch(l=>{r(l)})}}).catch(o=>{r(o)})})}}ke.scriptInjectionDeferred=null;async function oi(a,e,t,i=!1,n=!1){const s=new ke(a);let r;if(n)r=cn;else try{r=await s.verify(t)}catch{r=await s.verify(t,!0)}const o={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in o){const c=o.phoneEnrollmentInfo.phoneNumber,l=o.phoneEnrollmentInfo.recaptchaToken;Object.assign(o,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:l,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in o){const c=o.phoneSignInInfo.recaptchaToken;Object.assign(o,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:r,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return o}return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function qt(a,e,t,i,n){var s;if((s=a._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const r=await oi(a,e,t,t==="getOobCode");return i(a,r)}else return i(a,e).catch(async r=>{if(r.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await oi(a,e,t,t==="getOobCode");return i(a,o)}else return Promise.reject(r)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(a,e){const t=Ui(a,"auth");if(t.isInitialized()){const n=t.getImmediate(),s=t.getOptions();if(et(s,e??{}))return n;K(n,"already-initialized")}return t.initialize({options:e})}function mo(a,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(ye);e!=null&&e.errorMap&&a._updateErrorMap(e.errorMap),a._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function fo(a,e,t){const i=Te(a);g(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const n=!1,s=ln(e),{host:r,port:o}=go(e),c=o===null?"":`:${o}`,l={url:`${s}//${r}${c}/`},u=Object.freeze({host:r,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:n})});if(!i._canInitEmulator){g(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),g(et(l,i.config.emulator)&&et(u,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=l,i.emulatorConfig=u,i.settings.appVerificationDisabledForTesting=!0,Ia(r)?Is(`${s}//${r}${c}`):yo()}function ln(a){const e=a.indexOf(":");return e<0?"":a.substr(0,e+1)}function go(a){const e=ln(a),t=/(\/\/)?([^?#/]+)/.exec(a.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",n=/^(\[[^\]]+\])(:|$)/.exec(i);if(n){const s=n[1];return{host:s,port:ci(i.substr(s.length+1))}}else{const[s,r]=i.split(":");return{host:s,port:ci(r)}}}function ci(a){if(!a)return null;const e=Number(a);return isNaN(e)?null:e}function yo(){function a(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",a):a())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return ge("not implemented")}_getIdTokenResponse(e){return ge("not implemented")}_linkToIdToken(e,t){return ge("not implemented")}_getReauthenticationResolver(e){return ge("not implemented")}}async function vo(a,e){return le(a,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bo(a,e){return Ct(a,"POST","/v1/accounts:signInWithPassword",we(a,e))}async function Eo(a,e){return le(a,"POST","/v1/accounts:sendOobCode",we(a,e))}async function Io(a,e){return Eo(a,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(a,e){return Ct(a,"POST","/v1/accounts:signInWithEmailLink",we(a,e))}async function To(a,e){return Ct(a,"POST","/v1/accounts:signInWithEmailLink",we(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends _a{constructor(e,t,i,n=null){super("password",i),this._email=e,this._password=t,this._tenantId=n}static _fromEmailAndPassword(e,t){return new Et(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Et(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(e,t,"signInWithPassword",bo);case"emailLink":return wo(e,{email:this._email,oobCode:this._password});default:K(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return qt(e,i,"signUpPassword",vo);case"emailLink":return To(e,{idToken:t,email:this._email,oobCode:this._password});default:K(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ze(a,e){return Ct(a,"POST","/v1/accounts:signInWithIdp",we(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const So="http://localhost";class Ve extends _a{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ve(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):K("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:n,...s}=t;if(!i||!n)return null;const r=new Ve(i,n);return r.idToken=s.idToken||void 0,r.accessToken=s.accessToken||void 0,r.secret=s.secret,r.nonce=s.nonce,r.pendingToken=s.pendingToken||null,r}_getIdTokenResponse(e){const t=this.buildRequest();return Ze(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ze(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ze(e,t)}buildRequest(){const e={requestUri:So,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=wt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(a){switch(a){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Ao(a){const e=ht(pt(a)).link,t=e?ht(pt(e)).deep_link_id:null,i=ht(pt(a)).deep_link_id;return(i?ht(pt(i)).link:null)||i||t||e||a}class ka{constructor(e){const t=ht(pt(e)),i=t.apiKey??null,n=t.oobCode??null,s=Co(t.mode??null);g(i&&n&&s,"argument-error"),this.apiKey=i,this.operation=s,this.code=n,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=Ao(e);try{return new ka(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(){this.providerId=it.PROVIDER_ID}static credential(e,t){return Et._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=ka.parseLink(t);return g(i,"argument-error"),Et._fromEmailAndCode(e,i.code,i.tenantId)}}it.PROVIDER_ID="password";it.EMAIL_PASSWORD_SIGN_IN_METHOD="password";it.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At extends xa{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends At{constructor(){super("facebook.com")}static credential(e){return Ve._fromParams({providerId:xe.PROVIDER_ID,signInMethod:xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xe.credentialFromTaggedObject(e)}static credentialFromError(e){return xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xe.credential(e.oauthAccessToken)}catch{return null}}}xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";xe.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me extends At{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ve._fromParams({providerId:me.PROVIDER_ID,signInMethod:me.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return me.credentialFromTaggedObject(e)}static credentialFromError(e){return me.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return me.credential(t,i)}catch{return null}}}me.GOOGLE_SIGN_IN_METHOD="google.com";me.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re extends At{constructor(){super("github.com")}static credential(e){return Ve._fromParams({providerId:Re.PROVIDER_ID,signInMethod:Re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Re.credentialFromTaggedObject(e)}static credentialFromError(e){return Re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Re.credential(e.oauthAccessToken)}catch{return null}}}Re.GITHUB_SIGN_IN_METHOD="github.com";Re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends At{constructor(){super("twitter.com")}static credential(e,t){return Ve._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return Pe.credential(t,i)}catch{return null}}}Pe.TWITTER_SIGN_IN_METHOD="twitter.com";Pe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _o(a,e){return Ct(a,"POST","/v1/accounts:signUp",we(a,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,n=!1){const s=await ee._fromIdTokenResponse(e,i,n),r=li(i);return new Ge({user:s,providerId:r,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const n=li(i);return new Ge({user:e,providerId:n,_tokenResponse:i,operationType:t})}}function li(a){return a.providerId?a.providerId:"phoneNumber"in a?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends De{constructor(e,t,i,n){super(t.code,t.message),this.operationType=i,this.user=n,Object.setPrototypeOf(this,Bt.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,n){return new Bt(e,t,i,n)}}function dn(a,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(a):t._getIdTokenResponse(a)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Bt._fromErrorAndOperation(a,s,e,i):s})}async function ko(a,e,t=!1){const i=await at(a,e._linkToIdToken(a.auth,await a.getIdToken()),t);return Ge._forOperation(a,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xo(a,e,t=!1){const{auth:i}=a;if(W(i.app))return Promise.reject(be(i));const n="reauthenticate";try{const s=await at(a,dn(i,n,e,a),t);g(s.idToken,i,"internal-error");const r=Ca(s.idToken);g(r,i,"internal-error");const{sub:o}=r;return g(a.uid===o,i,"user-mismatch"),Ge._forOperation(a,n,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&K(i,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(a,e,t=!1){if(W(a.app))return Promise.reject(be(a));const i="signIn",n=await dn(a,i,e),s=await Ge._fromIdTokenResponse(a,i,n);return t||await a._updateCurrentUser(s.user),s}async function Ro(a,e){return un(Te(a),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hn(a){const e=Te(a);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Po(a,e,t){const i=Te(a);await qt(i,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Io)}async function No(a,e,t){if(W(a.app))return Promise.reject(be(a));const i=Te(a),r=await qt(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",_o).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&hn(a),c}),o=await Ge._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(o.user),o}function Lo(a,e,t){return W(a.app)?Promise.reject(be(a)):Ro(ce(a),it.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&hn(a),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oo(a,e){return le(a,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Do(a,e){const{displayName:t,photoURL:i}=e;if(t===void 0&&i===void 0)return;const n=ce(a),r={idToken:await n.getIdToken(),displayName:t,photoUrl:i,returnSecureToken:!0},o=await at(n,Oo(n.auth,r));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const c=n.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=n.displayName,c.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function Mo(a,e,t,i){return ce(a).onIdTokenChanged(e,t,i)}function $o(a,e,t){return ce(a).beforeAuthStateChanged(e,t)}function Uo(a,e,t,i){return ce(a).onAuthStateChanged(e,t,i)}function jo(a){return ce(a).signOut()}const zt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(zt,"1"),this.storage.removeItem(zt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qo=1e3,Bo=10;class mn extends pn{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=sn(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),n=this.localCache[t];i!==n&&e(t,n,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((r,o,c)=>{this.notifyListeners(r,c)});return}const i=e.key;t?this.detachListener():this.stopPolling();const n=()=>{const r=this.storage.getItem(i);!t&&this.localCache[i]===r||this.notifyListeners(i,r)},s=this.storage.getItem(i);Zr()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(n,Bo):n()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const n of Array.from(i))n(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},qo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}mn.type="LOCAL";const zo=mn;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends pn{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}fn.type="SESSION";const gn=fn;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fo(a){return Promise.all(a.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(n=>n.isListeningto(e));if(t)return t;const i=new Gt(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:n,data:s}=t.data,r=this.handlersMap[n];if(!(r!=null&&r.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:n});const o=Array.from(r).map(async l=>l(t.origin,s)),c=await Fo(o);t.ports[0].postMessage({status:"done",eventId:i,eventType:n,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Gt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ra(a="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return a+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const n=typeof MessageChannel<"u"?new MessageChannel:null;if(!n)throw new Error("connection_unavailable");let s,r;return new Promise((o,c)=>{const l=Ra("",20);n.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);r={messageChannel:n,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(d.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(r),n.port1.addEventListener("message",r.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[n.port2])}).finally(()=>{r&&this.removeMessageHandler(r)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(){return window}function Vo(a){oe().location.href=a}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yn(){return typeof oe().WorkerGlobalScope<"u"&&typeof oe().importScripts=="function"}async function Go(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wo(){var a;return((a=navigator==null?void 0:navigator.serviceWorker)==null?void 0:a.controller)||null}function Ko(){return yn()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn="firebaseLocalStorageDb",Yo=1,Ft="firebaseLocalStorage",bn="fbase_key";class _t{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Wt(a,e){return a.transaction([Ft],e?"readwrite":"readonly").objectStore(Ft)}function Jo(){const a=indexedDB.deleteDatabase(vn);return new _t(a).toPromise()}function En(){const a=indexedDB.open(vn,Yo);return new Promise((e,t)=>{a.addEventListener("error",()=>{t(a.error)}),a.addEventListener("upgradeneeded",()=>{const i=a.result;try{i.createObjectStore(Ft,{keyPath:bn})}catch(n){t(n)}}),a.addEventListener("success",async()=>{const i=a.result;i.objectStoreNames.contains(Ft)?e(i):(i.close(),await Jo(),e(await En()))})})}async function di(a,e,t){const i=Wt(a,!0).put({[bn]:e,value:t});return new _t(i).toPromise()}async function Xo(a,e){const t=Wt(a,!1).get(e),i=await new _t(t).toPromise();return i===void 0?null:i.value}function ui(a,e){const t=Wt(a,!0).delete(e);return new _t(t).toPromise()}const Qo=800,Zo=3;class In{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.dbPromise?this.dbPromise:(this.dbPromise=En(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Zo)throw i;if(this.dbPromise){const n=this.dbPromise;this.dbPromise=null;try{(await n).close()}catch{}}}}async initializeServiceWorkerMessaging(){return yn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Gt._getInstance(Ko()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,i;if(this.activeServiceWorker=await Go(),!this.activeServiceWorker)return;this.sender=new Ho(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(i=e[0])!=null&&i.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await di(e,zt,"1"),await ui(e,zt)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>di(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Xo(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ui(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(n=>{const s=Wt(n,!1).getAll();return new _t(s).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:n,value:s}of e)i.add(n),JSON.stringify(this.localCache[n])!==JSON.stringify(s)&&(this.notifyListeners(n,s),t.push(n));for(const n of Object.keys(this.localCache))this.localCache[n]&&!i.has(n)&&(this.notifyListeners(n,null),t.push(n));return t}catch(e){return this.isClosing||Nt(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const n of Array.from(i))n(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Qo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}In.type="LOCAL";const ec=In;new St(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(a,e){return e?ye(e):(g(a._popupRedirectResolver,a,"argument-error"),a._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends _a{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ze(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ze(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ze(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function tc(a){return un(a.auth,new Pa(a),a.bypassAuthState)}function ac(a){const{auth:e,user:t}=a;return g(t,e,"internal-error"),xo(t,new Pa(a),a.bypassAuthState)}async function ic(a){const{auth:e,user:t}=a;return g(t,e,"internal-error"),ko(t,new Pa(a),a.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(e,t,i,n,s=!1){this.auth=e,this.resolver=i,this.user=n,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:n,tenantId:s,error:r,type:o}=e;if(r){this.reject(r);return}const c={auth:this.auth,requestUri:t,sessionId:i,tenantId:s||void 0,postBody:n||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return tc;case"linkViaPopup":case"linkViaRedirect":return ic;case"reauthViaPopup":case"reauthViaRedirect":return ac;default:K(this.auth,"internal-error")}}resolve(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ie(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nc=new St(2e3,1e4);async function sc(a,e,t){if(W(a.app))return Promise.reject(te(a,"operation-not-supported-in-this-environment"));const i=Te(a);Or(a,e,xa);const n=wn(i,t);return new Fe(i,"signInViaPopup",e,n).executeNotNull()}class Fe extends Tn{constructor(e,t,i,n,s){super(e,t,n,s),this.provider=i,this.authWindow=null,this.pollId=null,Fe.currentPopupAction&&Fe.currentPopupAction.cancel(),Fe.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return g(e,this.auth,"internal-error"),e}async onExecution(){Ie(this.filter.length===1,"Popup operations only handle one event");const e=Ra();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(te(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(te(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Fe.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if((i=(t=this.authWindow)==null?void 0:t.window)!=null&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(te(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nc.get())};e()}}Fe.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="pendingRedirect",Dt=new Map;class oc extends Tn{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Dt.get(this.auth._key());if(!e){try{const i=await cc(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Dt.set(this.auth._key(),e)}return this.bypassAuthState||Dt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cc(a,e){const t=uc(e),i=dc(a);if(!await i._isAvailable())return!1;const n=await i._get(t)==="true";return await i._remove(t),n}function lc(a,e){Dt.set(a._key(),e)}function dc(a){return ye(a._redirectPersistence)}function uc(a){return Ot(rc,a.config.apiKey,a.name)}async function hc(a,e,t=!1){if(W(a.app))return Promise.reject(be(a));const i=Te(a),n=wn(i,e),r=await new oc(i,n,t).execute();return r&&!t&&(delete r.user._redirectEventId,await i._persistUserIfCurrent(r.user),await i._setRedirectUser(null,e)),r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc=600*1e3;class mc{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!fc(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Sn(e)){const n=((i=e.error.code)==null?void 0:i.split("auth/")[1])||"internal-error";t.onError(te(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pc&&this.cachedEventUids.clear(),this.cachedEventUids.has(hi(e))}saveEventToCache(e){this.cachedEventUids.add(hi(e)),this.lastProcessedEventTime=Date.now()}}function hi(a){return[a.type,a.eventId,a.sessionId,a.tenantId].filter(e=>e).join("-")}function Sn({type:a,error:e}){return a==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function fc(a){switch(a.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sn(a);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gc(a,e={}){return le(a,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,vc=/^https?/;async function bc(a){if(a.config.emulator)return;const{authorizedDomains:e}=await gc(a);for(const t of e)try{if(Ec(t))return}catch{}K(a,"unauthorized-domain")}function Ec(a){const e=fa(),{protocol:t,hostname:i}=new URL(e);if(a.startsWith("chrome-extension://")){const r=new URL(a);return r.hostname===""&&i===""?t==="chrome-extension:"&&a.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&r.hostname===i}if(!vc.test(t))return!1;if(yc.test(a))return i===a;const n=a.replace(/\./g,"\\.");return new RegExp("^(.+\\."+n+"|"+n+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic=new St(3e4,6e4);function pi(){const a=oe().___jsl;if(a!=null&&a.H){for(const e of Object.keys(a.H))if(a.H[e].r=a.H[e].r||[],a.H[e].L=a.H[e].L||[],a.H[e].r=[...a.H[e].L],a.CP)for(let t=0;t<a.CP.length;t++)a.CP[t]=null}}function wc(a){return new Promise((e,t)=>{var n,s,r;function i(){pi(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pi(),t(te(a,"network-request-failed"))},timeout:Ic.get()})}if((s=(n=oe().gapi)==null?void 0:n.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((r=oe().gapi)!=null&&r.load)i();else{const o=co("iframefcb");return oe()[o]=()=>{gapi.load?i():t(te(a,"network-request-failed"))},on(`${oo()}?onload=${o}`).catch(c=>t(c))}}).catch(e=>{throw Mt=null,e})}let Mt=null;function Tc(a){return Mt=Mt||wc(a),Mt}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sc=new St(5e3,15e3),Cc="__/auth/iframe",Ac="emulator/auth/iframe",_c={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},kc=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xc(a){const e=a.config;g(e.authDomain,a,"auth-domain-config-required");const t=e.emulator?Sa(e,Ac):`https://${a.config.authDomain}/${Cc}`,i={apiKey:e.apiKey,appName:a.name,v:Tt},n=kc.get(a.config.apiHost);n&&(i.eid=n);const s=a._getFrameworks();return s.length&&(i.fw=s.join(",")),`${t}?${wt(i).slice(1)}`}async function Rc(a){const e=await Tc(a),t=oe().gapi;return g(t,a,"internal-error"),e.open({where:document.body,url:xc(a),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_c,dontclear:!0},i=>new Promise(async(n,s)=>{await i.restyle({setHideOnLeave:!1});const r=te(a,"network-request-failed"),o=oe().setTimeout(()=>{s(r)},Sc.get());function c(){oe().clearTimeout(o),n(i)}i.ping(c).then(c,()=>{s(r)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nc=500,Lc=600,Oc="_blank",Dc="http://localhost";class mi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mc(a,e,t,i=Nc,n=Lc){const s=Math.max((window.screen.availHeight-n)/2,0).toString(),r=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const c={...Pc,width:i.toString(),height:n.toString(),top:s,left:r},l=B().toLowerCase();t&&(o=Zi(l)?Oc:t),Xi(l)&&(e=e||Dc,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[_,A])=>`${d}${_}=${A},`,"");if(Qr(l)&&o!=="_self")return $c(e||"",o),new mi(null);const h=window.open(e||"",o,u);g(h,a,"popup-blocked");try{h.focus()}catch{}return new mi(h)}function $c(a,e){const t=document.createElement("a");t.href=a,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uc="__/auth/handler",jc="emulator/auth/handler",qc=encodeURIComponent("fac");async function fi(a,e,t,i,n,s){g(a.config.authDomain,a,"auth-domain-config-required"),g(a.config.apiKey,a,"invalid-api-key");const r={apiKey:a.config.apiKey,appName:a.name,authType:t,redirectUrl:i,v:Tt,eventId:n};if(e instanceof xa){e.setDefaultLanguage(a.languageCode),r.providerId=e.providerId||"",ys(e.getCustomParameters())||(r.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries({}))r[u]=h}if(e instanceof At){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(r.scopes=u.join(","))}a.tenantId&&(r.tid=a.tenantId);const o=r;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await a._getAppCheckToken(),l=c?`#${qc}=${encodeURIComponent(c)}`:"";return`${Bc(a)}?${wt(o).slice(1)}${l}`}function Bc({config:a}){return a.emulator?Sa(a,jc):`https://${a.authDomain}/${Uc}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa="webStorageSupport";class zc{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=gn,this._completeRedirectFn=hc,this._overrideRedirectResult=lc}async _openPopup(e,t,i,n){var r;Ie((r=this.eventManagers[e._key()])==null?void 0:r.manager,"_initialize() not called before _openPopup()");const s=await fi(e,t,i,fa(),n);return Mc(e,s,Ra())}async _openRedirect(e,t,i,n){await this._originValidation(e);const s=await fi(e,t,i,fa(),n);return Vo(s),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:n,promise:s}=this.eventManagers[t];return n?Promise.resolve(n):(Ie(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await Rc(e),i=new mc(e);return t.register("authEvent",n=>(g(n==null?void 0:n.authEvent,e,"invalid-auth-event"),{status:i.onEvent(n.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(sa,{type:sa},n=>{var r;const s=(r=n==null?void 0:n[0])==null?void 0:r[sa];s!==void 0&&t(!!s),K(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bc(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return sn()||Qi()||Aa()}}const Fc=zc;var gi="@firebase/auth",yi="1.13.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){g(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vc(a){switch(a){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Gc(a){vt(new tt("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),n=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:r,authDomain:o}=i.options;g(r&&!r.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:r,authDomain:o,clientPlatform:a,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rn(a)},l=new no(i,n,s,c);return mo(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),vt(new tt("auth-internal",e=>{const t=Te(e.getProvider("auth").getImmediate());return(i=>new Hc(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Xe(gi,yi,Vc(a)),Xe(gi,yi,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=300,Kc=Li("authIdTokenMaxAge")||Wc;let vi=null;const Yc=a=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Kc)return;const n=t==null?void 0:t.token;vi!==n&&(vi=n,await fetch(a,{method:n?"POST":"DELETE",headers:n?{Authorization:`Bearer ${n}`}:{}}))};function Jc(a=qi()){const e=Ui(a,"auth");if(e.isInitialized())return e.getImmediate();const t=po(a,{popupRedirectResolver:Fc,persistence:[ec,zo,gn]}),i=Li("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(i,location.origin);if(location.origin===s.origin){const r=Yc(s.toString());$o(t,r,()=>r(t.currentUser)),Mo(t,o=>r(o))}}const n=os("auth");return n&&fo(t,`http://${n}`),t}function Xc(){var a;return((a=document.getElementsByTagName("head"))==null?void 0:a[0])??document}so({loadJS(a){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",a),i.onload=e,i.onerror=n=>{const s=te("internal-error");s.customData=n,t(s)},i.type="text/javascript",i.charset="UTF-8",Xc().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Gc("Browser");const ya="pvi.firebase_config",va="pvi.institutional_gemini_key",Qc={apiKey:"AIzaSyBF7oKFgPaQPfwi6RwH72CLGLGzcInAaks",authDomain:"programa-inpad-idiomas.firebaseapp.com",projectId:"programa-inpad-idiomas",storageBucket:"programa-inpad-idiomas.firebasestorage.app",messagingSenderId:"344073247026",appId:"1:344073247026:web:55af2da20d246256dc9f2b",measurementId:"G-01QKH9ET6M"};function Cn(){try{const a=localStorage.getItem(ya);if(a)return JSON.parse(a)}catch{}return Qc}function bi(a){a?localStorage.setItem(ya,JSON.stringify(a)):localStorage.removeItem(ya),Na()}const Zc=["QVEuQWI4Uk42TGpl","REtCTmQ3MjY4VUNj","dzBWdEJPMy1KVkYt","RHNPOWhHdks1TlY0","a0k4X3c="].join(""),el=typeof atob<"u"?atob(Zc):"";function Kt(){return localStorage.getItem(va)||void 0||el}function Ei(a){a?localStorage.setItem(va,a.trim()):localStorage.removeItem(va)}let ra=null,gt=null;function Na(){const a=Cn();if(!a||!a.apiKey)return ra=null,gt=null,null;try{return ra=Er().length?qi():ji(a),gt=Jc(ra),gt}catch(e){return console.error("Error inicializando Firebase:",e),null}}function La(){return!!Me()}function Me(){return gt||Na(),gt}async function tl(a,e,t=""){const i=Me();if(!i)throw new Error("Firebase no está configurado todavía.");const n=await No(i,a.trim(),e);if(t&&n.user)try{await Do(n.user,{displayName:t.trim()})}catch{}return n.user}async function al(a,e){const t=Me();if(!t)throw new Error("Firebase no está configurado todavía.");return(await Lo(t,a.trim(),e)).user}async function il(){const a=Me();if(!a)throw new Error("Firebase no está configurado todavía.");const e=new me;return e.setCustomParameters({prompt:"select_account"}),(await sc(a,e)).user}async function nl(a){const e=Me();if(!e)throw new Error("Firebase no está configurado todavía.");await Po(e,a.trim())}async function An(){const a=Me();a&&await jo(a)}function sl(a){const e=Me();return e?Uo(e,a):(a(null),()=>{})}function Yt(){const a=Me();return(a==null?void 0:a.currentUser)||null}function Pt(a){switch((a==null?void 0:a.code)||""){case"auth/email-already-in-use":return'Este correo electrónico ya está registrado. Si ya tienes cuenta, pulsa en "Iniciar Sesión".';case"auth/invalid-email":return"Por favor escribe un correo electrónico válido.";case"auth/weak-password":return"La contraseña debe tener al menos 6 caracteres.";case"auth/user-not-found":case"auth/wrong-password":case"auth/invalid-credential":return"Correo o contraseña incorrectos. Verifica tus datos o restablece tu contraseña.";case"auth/popup-closed-by-user":return"Se cerró la ventana de inicio con Google antes de completar el acceso.";case"auth/too-many-requests":return"Muchos intentos fallidos. Por seguridad espera un minuto e inténtalo de nuevo.";case"auth/network-request-failed":return"Error de conexión. Verifica tu conexión a internet.";default:return(a==null?void 0:a.message)||"Ocurrió un error inesperado al procesar tu acceso."}}function _n(a){var X,Ce,he;const e=Oe(),t=Yt(),i=(t==null?void 0:t.displayName)||e.studentName||(t!=null&&t.email?t.email.split("@")[0]:"");let n=e.language,s=e.level||"auto",r="all";Qt(s)||(s=ut());let o="trabajo",c=null;const l=ba(),u=Math.round(l.reduce((f,E)=>f+(E.durationSec||0),0)/60),h=Fn(),d=se(`
    <main class="page home">
      <header class="topbar">
        <div class="brand"><img src="./icon.svg" alt="" /><span>Profesor Virtual</span></div>
        <div class="topbar-actions" style="display: flex; align-items: center; gap: 8px;">
          ${t?`
            <div class="user-badge" title="${m(t.email||"")}">
              <span class="user-avatar">${m((i||"A")[0].toUpperCase())}</span>
              <span>${m(i)}</span>
            </div>
            <button type="button" class="btn ghost small" id="btnLogout" title="Cerrar sesión">🚪</button>
          `:""}
          <a href="#/settings" class="btn ghost small" aria-label="Ajustes">⚙️ Ajustes</a>
        </div>
      </header>

      <section class="greeting">
        <h1>${i?`¡Hola, ${m(i)}! 👋`:"¡Hola! 👋"}</h1>
        <p class="muted">¿Sobre qué quieres conversar hoy?</p>
        ${l.length?`<p class="stats-mini">🗣️ ${l.length} conversaciones · ⏱️ ${u} min practicados</p>`:""}
      </section>

      <section class="block">
        <h2 class="block-title">1. Idioma</h2>
        <div class="lang-cards">
          ${Object.values(ve).map(f=>`
            <button class="lang-card" data-lang="${f.id}">
              <span class="flag">${f.flag}</span>
              <span class="lang-name">${f.nameEs}</span>
              <span class="muted small">Profesora ${f.teacherName}</span>
            </button>`).join("")}
        </div>
      </section>

      <section class="block" id="secLevel">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
          <h2 class="block-title" style="margin: 0;">2. Tu nivel</h2>
          <button type="button" class="btn ghost small" id="btnOpenStudyPlan" style="font-size: 0.82rem; padding: 4px 10px;">📚 Plan de Estudio</button>
        </div>
        ${e.diagnosedLevel?`
          <div class="diagnosed-badge-banner">
            <span class="badge-icon">🏅</span>
            <div style="flex: 1;">
              <b>Tu nivel actual: ${m(((X=e.diagnosedFeedback)==null?void 0:X.levelTitle)||O(e.diagnosedLevel))}</b>
              <p class="muted small">Tus clases se adaptan automáticamente a este ritmo.</p>
            </div>
            <button type="button" class="btn ghost small" id="btnRetakePlacement">Reevaluar nivel ↺</button>
          </div>
        `:`
          <p class="muted small" style="margin-bottom: 8px;">
            ¿No conoces tu nivel? Elige <b>🎯 Detectar mi nivel</b> y la profesora te hará un test oral amigable de diagnóstico para ubicarte exactamente.
          </p>
        `}
        <div class="chips levels" id="boxLevelChips"></div>

        <!-- Clases del Nivel según el Plan de Estudio -->
        <div class="level-lessons-container" id="boxLevelLessons"></div>

        <!-- Tarjeta de Examen de Ascenso -->
        <div id="boxLevelExamContainer"></div>
      </section>

      <section class="block" id="secTopics">
        <h2 class="block-title">3. Tema o situación</h2>
        <div class="chips cats">
          ${Xn.map(f=>`<button class="chip" data-cat="${f.id}">${f.emoji} ${f.label}</button>`).join("")}
        </div>
        <div class="topics"></div>
        <div class="custom-topic">
          <label for="custom">✍️ ¿Otro tema? Escríbelo libremente</label>
          <textarea id="custom" rows="2" maxlength="300" placeholder="Ej.: Soy arquitecto y quiero explicar un proyecto de vivienda a un cliente italiano"></textarea>
        </div>
      </section>

      <div class="start-bar">
        <div class="selection muted small"></div>
        <button class="btn primary big start" disabled>🎙️ Empezar conversación</button>
      </div>

      <!-- Modal: Nivel Bloqueado -->
      <dialog class="modal" id="modalLevelLocked">
        <div class="modal-card" style="text-align: center; max-width: 420px;">
          <span style="font-size: 2.8rem;">🔒</span>
          <h2 style="margin-top: 6px;" id="txtLockedLevelTitle">Nivel Bloqueado</h2>
          <p class="muted small" id="txtLockedLevelDesc" style="margin: 10px 0 16px; line-height: 1.5;"></p>
          <div class="modal-actions" style="display: flex; flex-direction: column; gap: 8px;">
            <button class="btn primary big w-full" id="btnLockedGoExam">🎓 Rendir Examen de Ascenso</button>
            <button class="btn ghost w-full" id="btnCloseLockedModal">Entendido</button>
          </div>
        </div>
      </dialog>

      <!-- Modal: Plan de Estudio Completo -->
      <dialog class="modal" id="modalStudyPlan">
        <div class="modal-card study-plan-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div>
              <h2 style="margin: 0; font-size: 1.25rem;">📚 Plan de Estudio Oficial (CEFR)</h2>
              <p class="muted small" style="margin: 2px 0 0;">Progresión académica desde cero hasta el nivel avanzado (15 Clases por Nivel)</p>
            </div>
            <button type="button" class="btn ghost small" id="btnCloseStudyPlan" style="font-size: 1.2rem; line-height: 1;">✕</button>
          </div>
          <div class="study-plan-list" id="studyPlanContainer"></div>
          <div class="modal-actions" style="margin-top: 14px;">
            <button class="btn primary w-full" id="btnOkStudyPlan">Entendido</button>
          </div>
        </div>
      </dialog>

      <!-- Modal: Vocabulario Oficial del Nivel -->
      <dialog class="modal" id="modalLevelVocabulary">
        <div class="modal-card vocab-modal-card">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
            <div>
              <h2 style="margin: 0; font-size: 1.25rem;" id="txtVocabModalTitle">📚 Vocabulario Oficial</h2>
              <p class="muted small" style="margin: 2px 0 0;">Palabras clave, pronunciación y oraciones de ejemplo</p>
            </div>
            <button type="button" class="btn ghost small" id="btnCloseVocabModal" style="font-size: 1.2rem; line-height: 1;">✕</button>
          </div>
          <div class="vocab-categories-container" id="vocabCategoriesContainer"></div>
          <div class="modal-actions" style="margin-top: 14px; display: flex; gap: 8px;">
            <button class="btn primary w-full" id="btnVocabModalPracticeVoice">🎙️ Practicar Pronunciación con Profesora</button>
            <button class="btn ghost" id="btnOkVocabModal">Cerrar</button>
          </div>
        </div>
      </dialog>

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `),_=d.querySelector(".topics"),A=d.querySelector("#custom"),D=d.querySelector(".start"),j=d.querySelector(".selection"),H=d.querySelector("#secTopics"),Y=d.querySelector("#boxLevelExamContainer"),$e=d.querySelector("#boxLevelChips"),J=d.querySelector("#modalLevelLocked"),ae=d.querySelector("#txtLockedLevelTitle"),ie=d.querySelector("#txtLockedLevelDesc"),ne=d.querySelector("#btnLockedGoExam"),v=d.querySelector("#btnCloseLockedModal"),Se=d.querySelector("#modalStudyPlan"),We=d.querySelector("#studyPlanContainer"),I=d.querySelector("#btnOpenStudyPlan"),w=d.querySelector("#btnCloseStudyPlan"),R=d.querySelector("#btnOkStudyPlan"),k=d.querySelector("#modalLevelVocabulary"),b=d.querySelector("#txtVocabModalTitle"),N=d.querySelector("#vocabCategoriesContainer"),z=d.querySelector("#btnCloseVocabModal"),de=d.querySelector("#btnOkVocabModal"),nt=d.querySelector("#btnVocabModalPracticeVoice");function kt(){_.innerHTML=la.filter(f=>f.cat===o).map(f=>`
      <button class="topic ${f.id===c?"active":""}" data-topic="${f.id}">
        <span class="topic-emoji">${f.emoji}</span>
        <span class="topic-text"><b>${m(f.title)}</b><span class="muted small">${m(f.desc)}</span></span>
      </button>`).join("")}function st(){$e.innerHTML=kn.map(f=>{const E=Qt(f.id),y=f.id===s;return E?`<button class="chip ${y?"active":""}" data-level="${f.id}">${m(f.label)}</button>`:`<button class="chip locked" data-level="${f.id}" data-locked="true" title="Bloqueado: supera el examen de ascenso para desbloquearlo">🔒 ${m(f.label)}</button>`}).join("")}function rt(){const f=ca(s,n);b.textContent=f.title,N.innerHTML=f.categories.map(E=>`
      <div class="vocab-cat-group">
        <h4 class="vocab-cat-heading">📁 ${m(E.name)}</h4>
        <div class="vocab-grid">
          ${E.items.map(y=>{const L=n==="it"&&y.it?y.it:y.term;return`
              <div class="vocab-card">
                <div class="vocab-card-header">
                  <span class="vocab-word">${m(L)}</span>
                  ${y.phonetic?`<span class="vocab-phonetic">/${m(y.phonetic)}/</span>`:""}
                </div>
                <div class="vocab-trans"><b>${m(y.es)}</b></div>
                ${y.ex?`<div class="vocab-example small muted">💬 "${m(y.ex)}"</div>`:""}
              </div>
            `}).join("")}
        </div>
      </div>
    `).join(""),k.showModal()}function V(){Z({language:n,level:s}),Ne.pending={language:n,level:s,mode:"vocabulary"},location.hash="#/talk"}function Ke(){var ot,ct;const f=d.querySelector("#boxLevelLessons");if(!f)return;if(s==="auto"){f.innerHTML="";return}const E=jn[s]||[];if(!E.length){f.innerHTML="";return}const y=O(s),L=ve[n],q=ca(s,n),G=q.categories.reduce((P,qe)=>P+qe.items.length,0),je=E.filter(P=>r==="1"?P.num>=1&&P.num<=5:r==="2"?P.num>=6&&P.num<=10:r==="3"?P.num>=11&&P.num<=15:!0);f.innerHTML=`
      <!-- Sección Oficial de Vocabulario del Nivel -->
      <div class="level-vocab-banner">
        <div class="level-vocab-info">
          <span class="level-vocab-pill">📚 Vocabulario Esencial</span>
          <h3 class="level-vocab-title">${m(q.title)}</h3>
          <p class="muted small">${G} palabras y expresiones indispensables con pronunciación fonética y ejemplos prácticos.</p>
        </div>
        <div class="level-vocab-actions">
          <button type="button" class="btn secondary small" id="btnOpenVocab">📖 Ver Vocabulario (${G})</button>
          <button type="button" class="btn primary small" id="btnPracticeVocabVoice">🎙️ Practicar con Profe</button>
        </div>
      </div>

      <div class="level-lessons-header">
        <div>
          <h3 style="margin: 0; font-size: 1.05rem;">📖 Clases de ${m(y)} (15 Clases · ⏱️ ~10 min c/u)</h3>
          <p class="muted small" style="margin: 2px 0 0;">Desarrolla tus clases guiadas con tu profesora ${m(L.teacherName)} según el plan de estudio.</p>
        </div>
        <div class="lesson-filter-tabs">
          <button type="button" class="tab-chip ${r==="all"?"active":""}" data-filter="all">Todas (15)</button>
          <button type="button" class="tab-chip ${r==="1"?"active":""}" data-filter="1">1 a 5</button>
          <button type="button" class="tab-chip ${r==="2"?"active":""}" data-filter="2">6 a 10</button>
          <button type="button" class="tab-chip ${r==="3"?"active":""}" data-filter="3">11 a 15</button>
        </div>
      </div>

      <div class="level-lessons-grid">
        ${je.map(P=>`
          <div class="lesson-card">
            <div class="lesson-card-top">
              <span class="lesson-num-pill">Clase ${P.num}</span>
              <span class="lesson-time-pill">⏱️ ~10 min</span>
              <h4 class="lesson-card-title">${m(P.title)}</h4>
            </div>
            <p class="muted small lesson-card-desc">${m(P.desc)}</p>
            <div class="lesson-phrases-box">
              <span class="small muted" style="font-weight: 600; font-size: 0.78rem;">Frases clave:</span>
              <div class="lesson-phrases-tags">
                ${P.phrases.slice(0,3).map(qe=>`<span class="phrase-tag">${m(qe)}</span>`).join("")}
              </div>
            </div>
            <button type="button" class="btn primary small w-full btn-take-lesson" data-lesson-id="${m(P.id)}" style="margin-top: 10px;">
              🎙️ Tomar Clase ${P.num}
            </button>
          </div>
        `).join("")}
      </div>
    `,(ot=f.querySelector("#btnOpenVocab"))==null||ot.addEventListener("click",()=>{rt()}),(ct=f.querySelector("#btnPracticeVocabVoice"))==null||ct.addEventListener("click",()=>{V()}),f.querySelectorAll(".tab-chip").forEach(P=>{P.addEventListener("click",()=>{r=P.dataset.filter,Ke()})}),f.querySelectorAll(".btn-take-lesson").forEach(P=>{P.addEventListener("click",()=>{const qe=P.dataset.lessonId,lt=E.find(p=>p.id===qe);lt&&(Z({language:n,level:s}),Ne.pending={language:n,level:s,mode:"lesson",lesson:lt},location.hash="#/talk")})})}function Ue(f,E){var L;Z({language:n,level:f});const y=Mn(f,E,(L=h==null?void 0:h.scenario)==null?void 0:L.id);Ne.pending={language:n,mode:"exam",currentLevel:f,targetLevel:E,scenario:y},location.hash="#/talk"}function Ye(){var q;const f=ut(),E=oa(f);if(!E){Y.innerHTML="";return}const y=O(E),L=h&&!h.passed&&h.targetLevel===E;Y.innerHTML=`
      <div class="level-exam-box">
        <div>
          <h3>🎓 Examen de Ascenso a ${m(y)}</h3>
          <p class="muted small">
            ${L?`
              Último intento: <b style="color: #f59e0b;">${h.score}/20</b>. Necesitas mínimo 15 para ascender. ¡Rinde un nuevo examen con una situación diferente!
            `:`
              Cuando sientas que dominas las clases de este nivel, rinde tu examen para subir oficialmente a <b>${m(y)}</b> (nota mínima: <b>15 sobre 20</b>).
            `}
          </p>
        </div>
        <button type="button" class="btn primary small" id="btnTakeExam">Rendir Examen 🎓</button>
      </div>
    `,(q=Y.querySelector("#btnTakeExam"))==null||q.addEventListener("click",()=>{Ue(f,E)})}function ue(f){const E=ut(),y=oa(E);ae.textContent=`Nivel ${O(f)} Bloqueado`,ie.innerHTML=`Para desbloquear este nivel debes superar el <b>Examen de Ascenso</b> desde tu nivel actual (<b>${m(O(E))}</b>) con una nota mínima de <b>15 sobre 20</b>.`,J.showModal(),ne.onclick=()=>{J.close(),y&&Ue(E,y)}}function Jt(){const f=ut(),E=re.indexOf(f);We.innerHTML=Rn.map(y=>{const L=re.indexOf(y.id);let q="",G="";return L<E?(q='<span class="status-pill passed">✅ Superado</span>',G="passed"):L===E?(q='<span class="status-pill current">🎯 Nivel Actual</span>',G="current"):(q='<span class="status-pill locked">🔒 Bloqueado</span>',G="locked"),`
        <div class="plan-level-item ${G}">
          <div class="plan-level-header">
            <div>
              <span class="plan-code">${m(y.code)}</span>
              <b>${m(y.title)}</b>
            </div>
            ${q}
          </div>
          <p class="plan-sub muted small" style="margin: 4px 0 6px;"><b>${m(y.subtitle)}:</b> ${m(y.description)}</p>
          <div class="plan-objectives">
            <span class="plan-label small" style="font-weight: 600;">🎯 Objetivos de aprendizaje:</span>
            <ul>
              ${y.objectives.map(je=>`<li>${m(je)}</li>`).join("")}
            </ul>
          </div>
          <div class="plan-footer-info">
            <p class="small" style="margin: 2px 0;"><b>📖 Gramática clave:</b> ${m(y.grammar)}</p>
            <p class="small muted" style="margin: 2px 0;"><b>🎓 Requisito de ascenso:</b> ${m(y.examRequirement)}</p>
          </div>
        </div>
      `}).join("")}function $(){d.querySelectorAll(".lang-card").forEach(y=>y.classList.toggle("active",y.dataset.lang===n)),d.querySelectorAll("[data-cat]").forEach(y=>y.classList.toggle("active",y.dataset.cat===o)),st(),Ke(),kt(),Ye();const f=ve[n];if(s==="auto")D.disabled=!1,D.innerHTML="🎯 Empezar Test de Diagnóstico",j.innerHTML=`🎯 <b>Test de Diagnóstico Oral:</b> Conversación guiada con Profe ${f.teacherName} para fijar tu nivel.`,H.style.opacity="0.5";else{H.style.opacity="1",D.innerHTML="🎙️ Empezar conversación";const y=A.value.trim(),L=la.find(G=>G.id===c),q=!!(y||L);D.disabled=!q,j.textContent=q?`${f.flag} ${f.nameEs} · ${O(s)} · ${y?"Tema libre":L.title}`:"Elige un tema o escribe uno propio"}}d.addEventListener("click",f=>{const E=f.target.closest("button");if(E){if(E.dataset.lang)n=E.dataset.lang;else if(E.dataset.level){const y=E.dataset.level;if(!Qt(y)){ue(y);return}s=y}else if(E.dataset.cat)o=E.dataset.cat;else if(E.dataset.topic)c=E.dataset.topic,A.value="";else return;$()}}),v==null||v.addEventListener("click",()=>{J.close()}),I==null||I.addEventListener("click",()=>{Jt(),Se.showModal()}),w==null||w.addEventListener("click",()=>{Se.close()}),R==null||R.addEventListener("click",()=>{Se.close()}),z==null||z.addEventListener("click",()=>{k.close()}),de==null||de.addEventListener("click",()=>{k.close()}),nt==null||nt.addEventListener("click",()=>{k.close(),V()}),(Ce=d.querySelector("#btnRetakePlacement"))==null||Ce.addEventListener("click",()=>{s="auto",$(),D.click()}),A.addEventListener("input",()=>{A.value.trim()&&(c=null),$()}),D.addEventListener("click",()=>{Z({language:n,level:s}),Ne.pending={language:n,level:s,mode:s==="auto"?"placement":"conversation",topicId:s==="auto"||A.value.trim()?null:c,customTopic:s==="auto"?null:A.value.trim()},location.hash="#/talk"}),(he=d.querySelector("#btnLogout"))==null||he.addEventListener("click",async()=>{await An(),location.hash="#/auth"}),$(),a.appendChild(d)}function rl(a){const e=new Uint8Array(a);let t="";const i=32768;for(let n=0;n<e.length;n+=i)t+=String.fromCharCode.apply(null,e.subarray(n,n+i));return btoa(t)}function ol(a){const e=atob(a),t=e.length,i=new Uint8Array(t);for(let n=0;n<t;n++)i[n]=e.charCodeAt(n);return new Int16Array(i.buffer,0,Math.floor(t/2))}class cl{constructor(e){this.onChunk=e,this.ctx=null,this.stream=null,this.node=null,this.source=null,this.muted=!1}async start(){this.stream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0}}),this.ctx=new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),await this.ctx.audioWorklet.addModule("./worklets/pcm-recorder-processor.js"),this.source=this.ctx.createMediaStreamSource(this.stream),this.node=new AudioWorkletNode(this.ctx,"pcm-recorder-processor"),this.node.port.onmessage=t=>{if(this.muted){this.onChunk(null,0);return}this.onChunk(rl(t.data.pcm),t.data.level)},this.source.connect(this.node);const e=this.ctx.createGain();e.gain.value=0,this.node.connect(e).connect(this.ctx.destination)}setMuted(e){this.muted=e}async stop(){var e,t,i;try{(e=this.source)==null||e.disconnect(),(t=this.node)==null||t.disconnect()}catch{}(i=this.stream)==null||i.getTracks().forEach(n=>n.stop()),this.ctx&&this.ctx.state!=="closed"&&await this.ctx.close(),this.ctx=this.stream=this.node=this.source=null}}class ll{constructor(e=24e3){this.sampleRate=e,this.ctx=null,this.nextTime=0,this.sources=new Set,this.analyser=null,this.levelData=null}async init(){this.ctx=new(window.AudioContext||window.webkitAudioContext),this.ctx.state==="suspended"&&await this.ctx.resume(),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=512,this.levelData=new Uint8Array(this.analyser.fftSize),this.analyser.connect(this.ctx.destination)}play(e){if(!this.ctx)return;const t=ol(e);if(!t.length)return;const i=new Float32Array(t.length);for(let o=0;o<t.length;o++)i[o]=t[o]/32768;const n=this.ctx.createBuffer(1,i.length,this.sampleRate);n.copyToChannel(i,0);const s=this.ctx.createBufferSource();s.buffer=n,s.connect(this.analyser);const r=this.ctx.currentTime;this.nextTime<r+.03&&(this.nextTime=r+.06),s.start(this.nextTime),this.nextTime+=n.duration,this.sources.add(s),s.onended=()=>this.sources.delete(s)}stop(){for(const e of this.sources)try{e.stop()}catch{}this.sources.clear(),this.nextTime=0}get isPlaying(){return this.sources.size>0}level(){if(!this.analyser)return 0;this.analyser.getByteTimeDomainData(this.levelData);let e=0;for(let t=0;t<this.levelData.length;t++){const i=(this.levelData[t]-128)/128;e+=i*i}return Math.sqrt(e/this.levelData.length)}async close(){this.stop(),this.ctx&&this.ctx.state!=="closed"&&await this.ctx.close(),this.ctx=null}}function dl(a){var lt;const e=Ne.pending;if(!e)return location.hash="#/home",null;const t=Oe(),i=ve[e.language],n=e.mode==="placement"||e.level==="auto",s=e.mode==="exam",r=e.mode==="lesson",o=e.mode==="vocabulary",c=e.topicId?Qn(e.topicId):null;let l="Conversación libre";n?l="🎯 Test de Diagnóstico Oral":s?l=`🎓 Examen: ${O(e.currentLevel)} ➔ ${O(e.targetLevel)}`:r&&e.lesson?l=`📖 Clase ${e.lesson.num}: ${e.lesson.title}`:o?l=`📚 Vocabulario: ${O(e.level)}`:e.customTopic?l=e.customTopic:c&&(l=c.title);let u=null,h=null,d=null,_=null,A=null,D=0,j=!0,H=!0,Y=null,$e=null;const J=[],ae=[];let ie=`${i.flag} ${i.nameEs} · Profe ${i.teacherName} · <span id="timerText">00:00</span>`;n?ie=`${i.flag} ${i.nameEs} · Evaluación de Nivel · <span id="timerText">00:00</span>`:s?ie=`${i.flag} ${i.nameEs} · Examen de Ascenso (Mínimo 15/20) · <span id="timerText">00:00</span>`:r?ie=`${i.flag} ${i.nameEs} · ${O(e.level)} · <span id="timerText">00:00</span>`:o&&(ie=`${i.flag} ${i.nameEs} · Entrenamiento Fonético · <span id="timerText">00:00</span>`);let ne="Conectando con tu profesora...";n&&(ne="Iniciando tu test de nivelación..."),s&&(ne="Tu examinadora iniciará la evaluación..."),r&&(ne=`Iniciando la Clase ${((lt=e.lesson)==null?void 0:lt.num)||""}...`),o&&(ne="Iniciando entrenamiento de vocabulario...");const v=se(`
    <main class="page talk">
      <header class="talk-header">
        <div class="talk-info">
          <div class="status-indicator connecting" id="statusDot"></div>
          <div>
            <h1 class="talk-title">${m(l)}</h1>
            <p class="muted small">${ie}</p>
          </div>
        </div>
        <button class="btn danger small" id="btnEnd">${n||s?"Finalizar evaluación":"Finalizar"}</button>
      </header>

      <!-- Avatar animado del profesor e indicador de voz -->
      <section class="teacher-stage">
        <div class="teacher-avatar" id="avatarBox">
          <div class="avatar-ring ring-2"></div>
          <div class="avatar-ring ring-1"></div>
          <div class="avatar-face">
            <span class="avatar-emoji">👩‍🏫</span>
          </div>
        </div>
        <p class="teacher-status muted small" id="lblTeacherStatus">${ne}</p>
      </section>

      <!-- Tarjetas de corrección en vivo -->
      <section class="corrections-container" id="correctionsBox">
        <div class="corrections-label small muted" id="correctionsLabel" hidden>Correcciones en vivo:</div>
        <div class="corrections-list" id="correctionsList"></div>
      </section>

      <!-- Alerta intuitiva si el alumno no entiende o se queda callado -->
      <div class="silence-nudge" id="silenceNudge" hidden>
        <span class="nudge-icon">💡</span>
        <div class="nudge-text">
          <b>¿No entendiste lo que dijo tu profesora?</b>
          <span class="muted small">Toca aquí para que te lo traduzca y explique con calma.</span>
        </div>
        <button class="btn primary small" id="btnNudgeExplain">Traducir en español</button>
      </div>

      <!-- Área de subtítulos y transcripción en tiempo real -->
      <section class="chat-flow" id="chatFlow">
        <div class="empty-state muted">
          <p>${n?"La profesora te agradecerá y dará la bienvenida en español.":s?"La examinadora presentará el escenario de evaluación.":"La conversación aparecerá aquí a medida que hablen."}</p>
        </div>
      </section>

      <button class="btn ghost small btn-scroll-bottom" id="btnScrollBottom" hidden>⬇️ Ver lo último</button>

      <!-- Barra de controles de voz y ayudas rápidas -->
      <footer class="talk-footer">
        <div class="quick-helpers">
          <button class="chip ghost" data-help="suggestions">💡 ¿Qué digo?</button>
          <button class="chip ghost" data-help="slower">🐢 Más lento</button>
          <button class="chip ghost" data-help="explain">🇪🇸 En español</button>
        </div>

        <div class="audio-controls">
          <button class="mic-button active" id="btnMic" aria-label="Silenciar micrófono">
            <span class="mic-icon">🎙️</span>
            <span class="mic-wave" id="micWave"></span>
          </button>
          <span class="muted small" id="micStatusText">Micrófono encendido</span>
        </div>
      </footer>

      <!-- Modal 1: Fin de sesión normal -->
      <dialog class="modal" id="endModal">
        <div class="modal-card">
          <h2>🎉 ¡Gran práctica!</h2>
          <p class="muted" id="modalSummaryText">Resumen de tu conversación</p>
          
          <div class="summary-stats">
            <div class="stat-item">
              <span class="stat-val" id="statDuration">00:00</span>
              <span class="stat-lbl">Duración</span>
            </div>
            <div class="stat-item">
              <span class="stat-val" id="statCorrections">0</span>
              <span class="stat-lbl">Correcciones</span>
            </div>
            <div class="stat-item">
              <span class="stat-val" id="statTurns">0</span>
              <span class="stat-lbl">Intercambios</span>
            </div>
          </div>

          <div class="summary-corrections" id="modalCorrectionsList"></div>

          <div class="modal-actions">
            <button class="btn primary" id="btnExitTalk">Volver al inicio</button>
          </div>
        </div>
      </dialog>

      <!-- Modal 2: Certificado de Diagnóstico de Nivel -->
      <dialog class="modal" id="placementModal">
        <div class="modal-card placement-card">
          <div style="text-align: center; margin-bottom: 6px;">
            <span style="font-size: 2.4rem;">🏅</span>
            <h2 style="margin-top: 4px;">¡Diagnóstico Completado!</h2>
            <p class="muted small">Resultado oficial de tu nivel inicial de conversación</p>
          </div>

          <div class="placement-badge-box">
            <span class="placement-badge" id="txtDiagLevel">A1 · Principiante</span>
          </div>

          <div class="placement-info">
            <p id="txtDiagRationale" style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 8px;"></p>
            <div id="boxDiagStrengths"></div>
            <div id="boxDiagSuggestions"></div>
          </div>

          <div class="modal-actions" style="margin-top: 14px;">
            <button class="btn primary big w-full" id="btnApplyPlacement">Fijar este nivel y empezar mis clases 🚀</button>
          </div>
        </div>
      </dialog>

      <!-- Modal 3: Resultado de Examen de Ascenso de Nivel (Mínimo 15/20) -->
      <dialog class="modal" id="examModal">
        <div class="modal-card exam-card">
          <div style="text-align: center; margin-bottom: 6px;">
            <span style="font-size: 2.6rem;" id="txtExamEmoji">🎓</span>
            <h2 id="txtExamTitle" style="margin-top: 4px;">Resultado del Examen</h2>
            <p class="muted small" id="txtExamSubtitle">Evaluación oficial en escala vigesimal (0 a 20)</p>
          </div>

          <div class="placement-badge-box">
            <span class="placement-badge" id="txtExamScoreBadge">Nota: 16 / 20</span>
          </div>

          <div class="placement-info" id="examInfoContent"></div>

          <div class="modal-actions" style="margin-top: 14px;">
            <button class="btn primary big w-full" id="btnExitExam">Continuar</button>
          </div>
        </div>
      </dialog>
    </main>
  `),Se=v.querySelector("#statusDot"),We=v.querySelector("#timerText"),I=v.querySelector("#avatarBox"),w=v.querySelector("#lblTeacherStatus");v.querySelector("#correctionsBox");const R=v.querySelector("#correctionsLabel"),k=v.querySelector("#correctionsList"),b=v.querySelector("#chatFlow"),N=v.querySelector("#btnScrollBottom"),z=v.querySelector("#btnMic"),de=v.querySelector("#micStatusText"),nt=v.querySelector("#btnEnd"),kt=v.querySelector("#endModal"),st=v.querySelector("#placementModal"),rt=v.querySelector("#examModal"),V=v.querySelector("#silenceNudge"),Ke=v.querySelector("#btnNudgeExplain");let Ue=null,Ye=null;function ue(){Ue&&clearTimeout(Ue),Ye&&clearTimeout(Ye),Ue=null,Ye=null,V&&(V.hidden=!0)}function Jt(){ue(),Ue=setTimeout(()=>{V&&(V.hidden=!1)},7e3),Ye=setTimeout(()=>{u&&u.ready&&(u.sendText(xt("silence")),V&&(V.hidden=!0))},14e3)}let $=null,X=null,Ce=!1,he=!1,f=null;function E(){if(!b)return;Ce=b.scrollHeight-b.scrollTop-b.clientHeight>35,N&&(N.hidden=!Ce)}function y(p=!1){if(b){if(p){Ce=!1,he=!1,N&&(N.hidden=!0),b.scrollTo({top:b.scrollHeight,behavior:"smooth"});return}he||Ce||f||(f=requestAnimationFrame(()=>{f=null,!he&&!Ce&&b&&(b.scrollTop=b.scrollHeight)}))}}function L(p,S){Se.className=`status-indicator ${p}`,w.textContent=S}function q(p){R.hidden=!1,ae.push({...p,id:Date.now(),timestamp:D});const S={pronunciation:"🗣️ Pronunciación",grammar:"✍️ Gramática",vocabulary:"📚 Vocabulario"},C=se(`
      <div class="correction-card card-${p.type||"grammar"}">
        <div class="corr-header">
          <span class="corr-badge badge-${p.type}">${S[p.type]||"💡 Corrección"}</span>
          ${p.phonetic?`<span class="corr-phonetic">/${m(p.phonetic)}/</span>`:""}
        </div>
        <div class="corr-body">
          <div class="corr-diff">
            <span class="corr-said"><s>${m(p.said)}</s></span>
            <span class="corr-arrow">➔</span>
            <span class="corr-correct"><b>${m(p.correct)}</b></span>
          </div>
          <div class="corr-exp small">${m(p.explanation)}</div>
        </div>
      </div>
    `);k.prepend(C),$&&p.said&&($.innerHTML=Yn($.textContent,p.said,"user-err-highlight"))}function G(p,S){if(!(!S||!S.trim())){if(p==="user"){if($){const C=$.textContent.trim();C.includes(S.trim())||($.textContent=C+" "+S.trim())}else{const C=se('<div class="msg user"><div class="bubble"></div></div>');b.appendChild(C),$=C.querySelector(".bubble"),$.textContent=S.trim()}y()}else if(p==="teacher"){if(X){const C=X.textContent.trim();C.includes(S.trim())||(X.textContent=C+" "+S.trim())}else{const C=se('<div class="msg teacher"><div class="bubble"></div></div>');b.appendChild(C),X=C.querySelector(".bubble"),X.textContent=S.trim()}y()}}}function je(p){p==="user"&&$?(J.push({role:"user",text:$.textContent}),$=null):p==="teacher"&&X&&(J.push({role:"teacher",text:X.textContent}),X=null)}function ot(p){Y=p,v.querySelector("#txtDiagLevel").textContent=p.levelTitle||p.level,v.querySelector("#txtDiagRationale").textContent=p.rationale||"";const S=v.querySelector("#boxDiagStrengths");p.strengths&&p.strengths.length?S.innerHTML=`<b>💪 Fortalezas detectadas:</b><ul>${p.strengths.map(F=>`<li>${m(F)}</li>`).join("")}</ul>`:S.innerHTML="";const C=v.querySelector("#boxDiagSuggestions");p.suggestions&&p.suggestions.length?C.innerHTML=`<b>🎯 Recomendaciones para tus clases:</b><ul>${p.suggestions.map(F=>`<li>${m(F)}</li>`).join("")}</ul>`:C.innerHTML="",st.open||st.showModal()}function ct(p){var U,Be;$e=p;const S=p.passed||p.score>=15,C=v.querySelector("#txtExamEmoji"),F=v.querySelector("#txtExamTitle"),pe=v.querySelector("#txtExamSubtitle"),Q=v.querySelector("#txtExamScoreBadge"),Ae=v.querySelector("#examInfoContent"),Je=v.querySelector("#btnExitExam");S?(C.textContent="🎉",F.textContent="¡Felicitaciones! Has Aprobado",pe.textContent=`Asciendes oficialmente a ${p.targetLevelTitle||p.targetLevel}`,Q.className="placement-badge score-passed",Q.textContent=`Nota: ${p.score} / 20 · ¡APROBADO!`,Je.textContent=`Empezar mis clases en ${p.targetLevelTitle||p.targetLevel} 🚀`):(C.textContent="📚",F.textContent="Buen esfuerzo · Por mejorar",pe.textContent="Para ascender necesitas una nota mínima de 15/20",Q.className="placement-badge score-failed",Q.textContent=`Nota: ${p.score} / 20 · No alcanzado`,Je.textContent=`Continuar practicando en ${O(e.currentLevel)}`);const T=p.rubric||{};Ae.innerHTML=`
      <p style="font-size: 0.95rem; line-height: 1.5; margin-bottom: 8px;">${m(p.feedback||"")}</p>
      
      <div class="rubric-grid">
        <div class="rubric-item"><span class="muted small">Fluidez</span><b>${T.fluency||0}/5</b></div>
        <div class="rubric-item"><span class="muted small">Gramática</span><b>${T.grammar||0}/5</b></div>
        <div class="rubric-item"><span class="muted small">Pronunciación</span><b>${T.pronunciation||0}/5</b></div>
        <div class="rubric-item"><span class="muted small">Vocabulario</span><b>${T.vocabulary||0}/5</b></div>
      </div>

      ${(U=p.strengths)!=null&&U.length?`<div style="margin-top: 8px;"><b>💪 Fortalezas:</b><ul>${p.strengths.map(Xt=>`<li>${m(Xt)}</li>`).join("")}</ul></div>`:""}
      ${(Be=p.areasToImprove)!=null&&Be.length?`<div style="margin-top: 8px;"><b>🎯 Puntos a reforzar:</b><ul>${p.areasToImprove.map(Xt=>`<li>${m(Xt)}</li>`).join("")}</ul></div>`:""}
    `,rt.open||rt.showModal()}async function P(){try{let Je=function(){if(d&&d.isPlaying){const T=d.level();I.style.setProperty("--voice-level",String(Math.min(1.8,1+T*3)))}else I.style.setProperty("--voice-level","1");A=requestAnimationFrame(Je)};var p=Je;d=new ll(24e3),await d.init();const S=t.apiKey||Kt();if(!S)throw new Error("No hay clave de Gemini configurada. Por favor contacta a tu profesor o configúrala en Ajustes.");u=new Kn({apiKey:S,model:t.model||"gemini-3.8-live"});const C=Yt(),F=(C==null?void 0:C.displayName)||t.studentName||(C!=null&&C.email?C.email.split("@")[0]:"");let pe,Q,Ae;n?(pe=Dn({language:e.language,studentName:F}),Q=On,Ae="[DIAGNOSTIC_START: Inicia la evaluación diagnóstica exhaustiva saludando en español por su nombre como se indica, y procede con la pregunta sustancial del Tier 1]"):s?(pe=Un({language:e.language,currentLevel:e.currentLevel,targetLevel:e.targetLevel,studentName:F,scenario:e.scenario}),Q=$n,Ae="[EXAM_START: Inicia el examen formal explicando el escenario de evaluación en español e inglés]"):r&&e.lesson?(pe=qn({language:e.language,level:e.level,lesson:e.lesson,studentName:F}),Q=mt,Ae=`[LESSON_START: Da la bienvenida a ${F} e inicia la Clase ${e.lesson.num}: "${e.lesson.title}" explicando el objetivo pedagógico y enseñando las primeras frases clave]`):o?(pe=Bn({language:e.language,level:e.level,studentName:F}),Q=mt,Ae=`[VOCAB_START: Da la bienvenida a ${F} e inicia la sesión de entrenamiento fonético y práctica de vocabulario esencial]`):(pe=Ln({language:e.language,level:e.level,topic:c,customTopic:e.customTopic,correctionMode:t.correctionMode,explainIn:t.explainIn,studentName:F,wordsToPractice:Vn(e.language)}),Q=mt,Ae="[SESSION_START: Say hello briefly in character and ask the first open question]"),u.addEventListener("ready",()=>{var U,Be;H=!1;let T="Tu profesora está escuchando. ¡Habla!";n&&(T="Iniciando tu test de diagnóstico..."),s&&(T="Iniciando tu examen de nivel..."),r&&(T=`Clase ${(U=e.lesson)==null?void 0:U.num}: Tu profesora está enseñando...`),o&&(T="Entrenamiento de vocabulario iniciado. ¡Habla!"),L("connected",T),b.innerHTML="",M(n?"Iniciando test de diagnóstico":s?"Iniciando examen de nivel":r?`Iniciando Clase ${(Be=e.lesson)==null?void 0:Be.num}`:o?"Iniciando práctica de vocabulario":"Conectado con tu profesora virtual","success"),_=setInterval(()=>{D++,We.textContent=za(D)},1e3),u.sendText(Ae)}),u.addEventListener("audio",T=>{var U;(U=T.detail)!=null&&U.data&&(d.play(T.detail.data),I.classList.add("speaking"),w.textContent=s?"Tu examinadora está hablando...":"Tu profesora está hablando...")}),u.addEventListener("input-transcript",T=>{ue(),G("user",T.detail.text)}),u.addEventListener("output-transcript",T=>{G("teacher",T.detail.text)}),u.addEventListener("interrupted",()=>{ue(),d.stop(),je("teacher"),I.classList.remove("speaking"),w.textContent="Te escucho..."}),u.addEventListener("turn-complete",()=>{je("teacher"),je("user"),I.classList.remove("speaking"),w.textContent="Tu turno, continúa la conversación",Jt()}),u.addEventListener("correction",T=>{q(T.detail)}),u.addEventListener("placement-result",T=>{ja(T.detail);const U=()=>{!d||!d.isPlaying?ot(T.detail):setTimeout(U,500)};setTimeout(U,6500)}),u.addEventListener("level-exam-result",T=>{qa(T.detail);const U=()=>{!d||!d.isPlaying?ct(T.detail):setTimeout(U,500)};setTimeout(U,6500)}),u.addEventListener("reconnecting",()=>{L("connecting","Reconectando sesión...")}),u.addEventListener("reconnected",()=>{L("connected","Conexión restablecida")}),u.addEventListener("error",T=>{M(T.detail.message||"Error en la conexión con Gemini","danger"),L("error","Error en la conexión")}),u.addEventListener("close",T=>{T.detail.expected||(M(T.detail.reason||"Conexión finalizada por el servidor","warning"),L("disconnected","Desconectado"))}),await u.connect({systemInstruction:pe,voiceName:t.voice||"Kore",tools:Q}),h=new cl((T,U)=>{if(T&&u.ready&&u.sendAudio(T),z){const Be=Math.min(1.5,1+U*2.5);v.querySelector("#micWave").style.transform=`scale(${Be})`}}),await h.start(),Je()}catch(S){console.error(S),M(`No se pudo iniciar: ${S.message}`,"danger"),L("error","Fallo al iniciar el audio o la conexión")}}z.addEventListener("click",()=>{j=!j,h&&h.setMuted(!j),z.classList.toggle("active",j),z.classList.toggle("muted-mic",!j),de.textContent=j?"Micrófono encendido":"Micrófono silenciado",!j&&u&&u.audioStreamEnd()}),v.querySelectorAll("[data-help]").forEach(p=>{p.addEventListener("click",()=>{const S=p.dataset.help;!u||!u.ready||(u.sendText(xt(S)),M("Ayuda enviada a la profesora","info"))})}),b==null||b.addEventListener("touchstart",()=>{he=!0},{passive:!0}),b==null||b.addEventListener("touchend",()=>{he=!1,E()},{passive:!0}),b==null||b.addEventListener("touchcancel",()=>{he=!1,E()},{passive:!0}),b==null||b.addEventListener("wheel",()=>{E()},{passive:!0}),b==null||b.addEventListener("scroll",()=>{E()},{passive:!0}),N==null||N.addEventListener("click",()=>{y(!0)}),Ke==null||Ke.addEventListener("click",p=>{p.stopPropagation(),ue(),u&&u.ready&&(u.sendText(xt("explain")),M("La profesora te explicará en español","info"))}),V==null||V.addEventListener("click",()=>{ue(),u&&u.ready&&(u.sendText(xt("explain")),M("La profesora te explicará en español","info"))}),nt.addEventListener("click",()=>{qe()});function qe(){ue(),_&&clearInterval(_),A&&cancelAnimationFrame(A),h&&h.stop(),d&&d.close(),u&&u.close();const p={id:"sess_"+Date.now(),date:new Date().toISOString(),language:e.language,level:e.level,topicTitle:l,durationSec:D,corrections:ae,turnsCount:J.length};if(Hn(p),n){const S=Y||{level:"A1",levelTitle:"A1 · Principiante",rationale:"Has completado una breve conversación inicial de diagnóstico.",strengths:["Buena disposición para comunicarse"],suggestions:["Practicar vocabulario cotidiano y frases de presentación"]};ja(S),ot(S)}else if(s){const S=$e||{score:14,passed:!1,targetLevel:e.targetLevel,targetLevelTitle:O(e.targetLevel),rubric:{fluency:3,grammar:4,pronunciation:3,vocabulary:4},feedback:"Examen completado parcialmente. Sigue practicando las conversaciones de tu nivel actual.",strengths:["Participación activa en el diálogo"],areasToImprove:["Mayor fluidez en la respuesta y conectores"]};qa(S),ct(S)}else{v.querySelector("#statDuration").textContent=za(D),v.querySelector("#statCorrections").textContent=String(ae.length),v.querySelector("#statTurns").textContent=String(J.length);const S=v.querySelector("#modalCorrectionsList");ae.length===0?S.innerHTML='<p class="success-callout">👏 ¡Excelente! No se detectaron errores notables en esta conversación.</p>':S.innerHTML=`
          <h3>Palabras y expresiones para repasar:</h3>
          <ul class="modal-corr-items">
            ${ae.map(C=>`
              <li>
                <b>${m(C.correct)}</b> ${C.phonetic?`<i>/${m(C.phonetic)}/</i>`:""} 
                <span class="muted small">— dijiste: "${m(C.said)}"</span>
                <p class="small text-secondary">${m(C.explanation)}</p>
              </li>
            `).join("")}
          </ul>
        `,kt.showModal()}}return v.querySelector("#btnExitTalk").addEventListener("click",()=>{kt.close(),Ne.pending=null,location.hash="#/home"}),v.querySelector("#btnApplyPlacement").addEventListener("click",()=>{st.close(),Ne.pending=null,M("¡Nivel fijado con éxito! Tus clases ahora se adaptarán a este nivel","success"),location.hash="#/home"}),v.querySelector("#btnExitExam").addEventListener("click",()=>{rt.close(),Ne.pending=null,location.hash="#/home"}),P(),a.appendChild(v),{async destroy(){ue(),_&&clearInterval(_),A&&cancelAnimationFrame(A),h&&await h.stop(),d&&await d.close(),u&&u.close()}}}function ul(a){var h;const e=Oe(),t=Yt(),i=Kt();La();const n=se(`
    <main class="page settings">
      <header class="topbar">
        <a href="#/home" class="btn ghost small">← Volver al inicio</a>
        <h1 class="page-title">Configuración</h1>
      </header>

      <form class="settings-form card">
        <section class="settings-group">
          <h2>👤 Cuenta de Alumno</h2>
          ${t?`
            <div class="user-badge" style="font-size: 0.95rem; padding: 8px 14px;">
              <span class="user-avatar" style="width: 28px; height: 28px;">${m((t.displayName||t.email||"A")[0].toUpperCase())}</span>
              <div>
                <b>${m(t.displayName||"Alumno")}</b>
                <div class="muted small">${m(t.email||"")}</div>
              </div>
            </div>
            <div style="margin-top: 10px;">
              <button type="button" class="btn secondary small" id="btnLogoutSettings">🚪 Cerrar Sesión</button>
            </div>
          `:`
            <p class="muted small">No has iniciado sesión en Firebase.</p>
            <a href="#/auth" class="btn primary small" style="margin-top: 6px;">Iniciar sesión o Registrarme</a>
          `}
        </section>

        <section class="settings-group">
          <h2>🔑 Clave de Gemini API</h2>
          ${i?`
            <div class="banner" style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--success); padding: 10px; border-radius: var(--radius-sm); margin-bottom: 8px;">
              <span style="color: var(--success); font-weight: 600;">✨ Clave Institucional Activa</span>
              <p class="muted small">La app está autorizada por tu profesor. No necesitas ingresar clave personal a menos que desees usar la tuya propia.</p>
            </div>
          `:""}
          <p class="muted small">Tu clave de Google AI Studio (opcional si tu institución te brinda el acceso):</p>
          <div class="key-row">
            <input id="setKey" type="password" value="${m(e.apiKey)}" placeholder="${i?"Usando clave institucional central":"AIzaSy..."}" />
            <button type="button" class="btn ghost small" id="btnToggleKey">👁️</button>
          </div>
          <button type="button" class="btn secondary small" id="btnTestKey">Verificar clave</button>
          <span class="status-test muted small" id="txtTestStatus"></span>
        </section>

        <section class="settings-group">
          <h2>👤 Tu Nombre</h2>
          <input id="setName" type="text" maxlength="40" placeholder="Ej.: Carlos" value="${m(e.studentName||(t==null?void 0:t.displayName)||"")}" />
        </section>

        <section class="settings-group">
          <h2>🎙️ Voz del Profesor</h2>
          <p class="muted small">Selecciona el tono de voz para Gemini Live.</p>
          <select id="setVoice">
            ${zn.map(d=>`<option value="${d.id}" ${d.id===e.voice?"selected":""}>${m(d.label)}</option>`).join("")}
          </select>
        </section>

        <section class="settings-group">
          <h2>🎯 Modo de Corrección</h2>
          <p class="muted small">Determina la frecuencia con la que el profesor interviene para corregir.</p>
          <div class="radio-cards">
            ${Object.entries(xn).map(([d,_])=>`
              <label class="radio-card ${e.correctionMode===d?"selected":""}">
                <input type="radio" name="corrMode" value="${d}" ${e.correctionMode===d?"checked":""} />
                <div class="radio-content">
                  <b>${m(_.label)}</b>
                  <span class="muted small">${m(_.desc)}</span>
                </div>
              </label>
            `).join("")}
          </div>
        </section>

        <section class="settings-group">
          <h2>🇪🇸 Idioma de las Explicaciones</h2>
          <p class="muted small">Cuando el profesor deba explicar una regla o corregir una pronunciación:</p>
          <select id="setExplain">
            <option value="auto" ${e.explainIn==="auto"?"selected":""}>Automático (Español en niveles A1-B1, idioma meta en B2-C1)</option>
            <option value="es" ${e.explainIn==="es"?"selected":""}>Siempre en Español</option>
            <option value="target" ${e.explainIn==="target"?"selected":""}>Siempre en el idioma que aprendo</option>
          </select>
        </section>

        <section class="settings-group danger-zone">
          <h2>🗑️ Borrar historial de práctica</h2>
          <p class="muted small">Elimina todas las sesiones y palabras guardadas en este dispositivo.</p>
          <button type="button" class="btn danger small" id="btnClearHistory">Borrar historial</button>
        </section>

        <div class="form-actions">
          <button type="submit" class="btn primary big">Guardar cambios</button>
        </div>
      </form>

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `),s=n.querySelector("#setKey"),r=n.querySelector("#btnToggleKey"),o=n.querySelector("#btnTestKey"),c=n.querySelector("#txtTestStatus"),l=n.querySelector(".settings-form"),u=n.querySelector("#btnClearHistory");(h=n.querySelector("#btnLogoutSettings"))==null||h.addEventListener("click",async()=>{await An(),M("Sesión cerrada correctamente"),location.hash="#/auth"}),r.addEventListener("click",()=>{s.type=s.type==="password"?"text":"password"}),o.addEventListener("click",async()=>{const d=s.value.trim()||i;if(!d){c.textContent="Ingresa una clave primero.";return}o.disabled=!0,c.textContent="Comprobando...";const _=await _i(d);o.disabled=!1,_.ok?(c.textContent="✅ Clave válida y lista",c.style.color="#10b981"):(c.textContent=`❌ ${_.message}`,c.style.color="#ef4444")}),n.querySelectorAll('input[name="corrMode"]').forEach(d=>{d.addEventListener("change",()=>{n.querySelectorAll(".radio-card").forEach(_=>_.classList.remove("selected")),d.closest(".radio-card").classList.add("selected")})}),u.addEventListener("click",()=>{confirm("¿Seguro que deseas borrar el historial de sesiones locales?")&&(localStorage.removeItem("pvi.history"),M("Historial eliminado","info"))}),l.addEventListener("submit",d=>{var A;d.preventDefault();const _=((A=n.querySelector('input[name="corrMode"]:checked'))==null?void 0:A.value)||"balanced";Z({apiKey:s.value.trim(),studentName:n.querySelector("#setName").value.trim(),voice:n.querySelector("#setVoice").value,correctionMode:_,explainIn:n.querySelector("#setExplain").value}),M("Ajustes guardados correctamente","success"),location.hash="#/home"}),a.appendChild(n)}function hl(a){var Y,$e,J,ae,ie,ne,v,Se,We;let e="login";const t=La(),i=se(`
    <main class="page auth-page">
      <section class="hero">
        <img src="./icon.svg" alt="" class="hero-logo" />
        <h1>Profesor Virtual de Idiomas</h1>
        <p class="lead">Aprende y conversa por voz en tiempo real con corrección instantánea de pronunciación y gramática.</p>
      </section>

      <section class="card auth-card">
        ${t?"":`
          <div class="firebase-unconfigured-alert">
            <div class="alert-icon">⚡</div>
            <div>
              <h3>Conecta tu proyecto de Firebase</h3>
              <p class="muted small">Para que tus alumnos puedan crear su cuenta y contraseña libremente, vincula tu proyecto gratuito de Firebase aquí.</p>
              <button type="button" class="btn primary small" id="btnOpenFirebaseConfig">⚙️ Configurar Firebase en 1 minuto</button>
            </div>
          </div>
        `}

        <div class="auth-tabs" ${t?"":'style="opacity: 0.5; pointer-events: none;"'}>
          <button type="button" class="auth-tab active" data-tab="login">Iniciar Sesión</button>
          <button type="button" class="auth-tab" data-tab="register">Crear Cuenta</button>
        </div>

        <div class="auth-content" ${t?"":'style="opacity: 0.5; pointer-events: none;"'}>
          <!-- FORMULARIO 1: INICIO DE SESIÓN -->
          <form class="auth-form" id="loginForm">
            <div class="field">
              <label for="loginEmail">Correo electrónico</label>
              <input id="loginEmail" type="email" placeholder="ejemplo@gmail.com" required autocomplete="username" />
            </div>

            <div class="field">
              <div class="field-header">
                <label for="loginPass">Contraseña</label>
                <button type="button" class="link-btn small" id="btnGoForgot">¿Olvidaste tu contraseña?</button>
              </div>
              <div class="key-row">
                <input id="loginPass" type="password" placeholder="Tu contraseña" required autocomplete="current-password" />
                <button type="button" class="btn ghost small toggle-pass" aria-label="Mostrar">👁️</button>
              </div>
            </div>

            <p class="error auth-error" hidden></p>

            <button type="submit" class="btn primary big w-full">Ingresar a mi clase 🚀</button>

            <div class="auth-divider"><span>o también</span></div>

            <button type="button" class="btn secondary big w-full btn-google" id="btnGoogleLogin">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Continuar con Google
            </button>

            <div class="auth-switch-text">
              <span class="muted small">¿Aún no tienes cuenta?</span>
              <button type="button" class="link-btn small" id="btnSwitchToReg"><b>Regístrate aquí</b></button>
            </div>
          </form>

          <!-- FORMULARIO 2: CREACIÓN DE CUENTA -->
          <form class="auth-form" id="registerForm" style="display: none;">
            <div class="field">
              <label for="regName">Tu nombre completo</label>
              <input id="regName" type="text" placeholder="Ej.: Juan Pérez" required autocomplete="name" />
            </div>

            <div class="field">
              <label for="regEmail">Tu correo electrónico</label>
              <input id="regEmail" type="email" placeholder="ejemplo@gmail.com" required autocomplete="email" />
            </div>

            <div class="field">
              <label for="regPass">Crea tu contraseña <span class="muted small">(mínimo 6 caracteres)</span></label>
              <div class="key-row">
                <input id="regPass" type="password" minlength="6" placeholder="Mínimo 6 letras o números" required autocomplete="new-password" />
                <button type="button" class="btn ghost small toggle-pass" aria-label="Mostrar">👁️</button>
              </div>
            </div>

            <div class="field">
              <label for="regPassConfirm">Confirma tu contraseña</label>
              <input id="regPassConfirm" type="password" minlength="6" placeholder="Repite tu contraseña" required autocomplete="new-password" />
            </div>

            <p class="error auth-error" hidden></p>

            <button type="submit" class="btn primary big w-full">Crear mi cuenta de alumno 🎓</button>

            <div class="auth-divider"><span>o también</span></div>

            <button type="button" class="btn secondary big w-full btn-google" id="btnGoogleReg">
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Registrarme con Google
            </button>

            <div class="auth-switch-text">
              <span class="muted small">¿Ya tienes cuenta?</span>
              <button type="button" class="link-btn small" id="btnSwitchToLogin"><b>Inicia sesión aquí</b></button>
            </div>
          </form>

          <!-- FORMULARIO 3: RECUPERAR CONTRASEÑA -->
          <form class="auth-form" id="forgotForm" style="display: none;">
            <div class="forgot-header">
              <button type="button" class="link-btn" id="btnBackToLogin">← Volver al inicio de sesión</button>
              <h3 style="margin-top: 8px;">Restablecer contraseña</h3>
              <p class="muted small">Escribe tu correo registrado y te enviaremos un enlace para crear una nueva clave.</p>
            </div>

            <div class="field">
              <label for="forgotEmail">Tu correo electrónico</label>
              <input id="forgotEmail" type="email" placeholder="ejemplo@gmail.com" required />
            </div>

            <p class="error auth-error" hidden></p>

            <button type="submit" class="btn primary big w-full">Enviar enlace de recuperación 📩</button>
          </form>
        </div>
      </section>

      <!-- MODAL DE CONFIGURACIÓN FIREBASE & CLAVE INSTITUCIONAL -->
      <div class="modal" id="firebaseModal" hidden>
        <div class="modal-card">
          <h2>⚙️ Configuración del Sistema</h2>
          <p class="muted small">Configura Firebase para habilitar el registro libre de tus alumnos y añade la clave de Gemini para que ellos no tengan que poner nada.</p>

          <form id="firebaseConfigForm">
            <div class="field">
              <label for="txtFirebaseJson"><b>1. Credenciales de Firebase (Config Web)</b></label>
              <p class="muted small" style="margin-bottom: 6px;">Pega el bloque <code>const firebaseConfig = { ... }</code> de la consola de Firebase:</p>
              <textarea id="txtFirebaseJson" rows="6" placeholder='{&#10;  "apiKey": "AIzaSy...",&#10;  "authDomain": "tu-proyecto.firebaseapp.com",&#10;  "projectId": "tu-proyecto",&#10;  "appId": "1:..."&#10;}'></textarea>
            </div>

            <div class="field">
              <label for="txtInstitutionalKey"><b>2. Clave Gemini del Profesor / Institucional</b></label>
              <p class="muted small" style="margin-bottom: 6px;">Al estar configurada, los alumnos usan tu autorización centralizada automáticamente.</p>
              <input id="txtInstitutionalKey" type="password" placeholder="AIzaSy..." value="${m(Kt())}" />
            </div>

            <p class="error" id="modalConfigError" hidden></p>

            <div class="modal-actions">
              <button type="button" class="btn ghost" id="btnCloseFirebaseModal">Cancelar</button>
              <button type="submit" class="btn primary">Guardar Configuración</button>
            </div>
          </form>
        </div>
      </div>

      <footer class="app-credits">
        <p class="small muted">Creado por el <b>Ing. Comercial Kristhian Conde Zegarra</b> con soporte de IA</p>
      </footer>
    </main>
  `),n=i.querySelector("#loginForm"),s=i.querySelector("#registerForm"),r=i.querySelector("#forgotForm"),o=i.querySelectorAll(".auth-tab"),c=i.querySelector("#firebaseModal"),l=i.querySelector("#firebaseConfigForm"),u=i.querySelector("#txtFirebaseJson"),h=i.querySelector("#txtInstitutionalKey"),d=i.querySelector("#modalConfigError"),_=Cn();_&&(u.value=JSON.stringify(_,null,2));function A(I){e=I,o.forEach(w=>w.classList.toggle("active",w.dataset.tab===I)),I==="login"?(n.style.display="flex",n.hidden=!1,s.style.display="none",s.hidden=!0,r.style.display="none",r.hidden=!0):I==="register"?(n.style.display="none",n.hidden=!0,s.style.display="flex",s.hidden=!1,r.style.display="none",r.hidden=!0):I==="forgot"&&(n.style.display="none",n.hidden=!0,s.style.display="none",s.hidden=!0,r.style.display="flex",r.hidden=!1),i.querySelectorAll(".auth-error").forEach(w=>w.hidden=!0)}o.forEach(I=>{I.addEventListener("click",()=>A(I.dataset.tab))}),(Y=i.querySelector("#btnSwitchToReg"))==null||Y.addEventListener("click",()=>A("register")),($e=i.querySelector("#btnSwitchToLogin"))==null||$e.addEventListener("click",()=>A("login")),(J=i.querySelector("#btnGoForgot"))==null||J.addEventListener("click",()=>A("forgot")),(ae=i.querySelector("#btnBackToLogin"))==null||ae.addEventListener("click",()=>A("login")),i.querySelectorAll(".toggle-pass").forEach(I=>{I.addEventListener("click",()=>{const w=I.previousElementSibling;w&&(w.type=w.type==="password"?"text":"password")})}),n.addEventListener("submit",async I=>{I.preventDefault();const w=i.querySelector("#loginEmail").value.trim(),R=i.querySelector("#loginPass").value,k=n.querySelector('button[type="submit"]'),b=n.querySelector(".auth-error");b.hidden=!0,k.disabled=!0,k.textContent="Verificando ingreso…";try{const N=await al(w,R);Z({studentName:N.displayName||N.email.split("@")[0]}),M(`¡Bienvenido/a, ${N.displayName||"alumno"}! 👋`),location.hash="#/home"}catch(N){b.textContent=Pt(N),b.hidden=!1}finally{k.disabled=!1,k.textContent="Ingresar a mi clase 🚀"}}),s.addEventListener("submit",async I=>{I.preventDefault();const w=i.querySelector("#regName").value.trim(),R=i.querySelector("#regEmail").value.trim(),k=i.querySelector("#regPass").value,b=i.querySelector("#regPassConfirm").value,N=s.querySelector('button[type="submit"]'),z=s.querySelector(".auth-error");if(z.hidden=!0,k!==b){z.textContent="Las contraseñas no coinciden. Por favor verifícalas.",z.hidden=!1;return}N.disabled=!0,N.textContent="Creando tu cuenta…";try{const de=await tl(R,k,w);Z({studentName:w||de.displayName||R.split("@")[0]}),M(`¡Cuenta creada con éxito! Bienvenido/a, ${w||"alumno"} 🎉`),location.hash="#/home"}catch(de){z.textContent=Pt(de),z.hidden=!1}finally{N.disabled=!1,N.textContent="Crear mi cuenta de alumno 🎓"}});const D=async I=>{const w=(e==="register"?s:n).querySelector(".auth-error");w.hidden=!0,I.disabled=!0;try{const R=await il();Z({studentName:R.displayName||R.email.split("@")[0]}),M(`¡Bienvenido/a, ${R.displayName||"alumno"}! 👋`),location.hash="#/home"}catch(R){w.textContent=Pt(R),w.hidden=!1}finally{I.disabled=!1}};(ie=i.querySelector("#btnGoogleLogin"))==null||ie.addEventListener("click",I=>D(I.currentTarget)),(ne=i.querySelector("#btnGoogleReg"))==null||ne.addEventListener("click",I=>D(I.currentTarget)),r.addEventListener("submit",async I=>{I.preventDefault();const w=i.querySelector("#forgotEmail").value.trim(),R=r.querySelector('button[type="submit"]'),k=r.querySelector(".auth-error");k.hidden=!0,R.disabled=!0,R.textContent="Enviando enlace…";try{await nl(w),M("¡Listo! Revisa tu correo para restablecer tu contraseña 📩"),A("login")}catch(b){k.textContent=Pt(b),k.hidden=!1}finally{R.disabled=!1,R.textContent="Enviar enlace de recuperación 📩"}});const j=()=>c.hidden=!1,H=()=>c.hidden=!0;(v=i.querySelector("#btnOpenFirebaseConfig"))==null||v.addEventListener("click",j),(Se=i.querySelector("#btnSetupModal"))==null||Se.addEventListener("click",j),(We=i.querySelector("#btnCloseFirebaseModal"))==null||We.addEventListener("click",H),l.addEventListener("submit",I=>{I.preventDefault(),d.hidden=!0;const w=u.value.trim(),R=h.value.trim();if(!w){bi(null),Ei(R),M("Configuración guardada."),H(),location.reload();return}try{let k=null;if(w.startsWith("{"))try{k=JSON.parse(w)}catch{const b=w.replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2":').replace(/'/g,'"');k=JSON.parse(b)}else if(w.includes("apiKey:")){const b=w.match(/\{[\s\S]*\}/);if(b){const N=b[0].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g,'"$2":').replace(/'/g,'"');k=JSON.parse(N)}}if(!k||!k.apiKey)throw new Error('No se detectó un "apiKey" válido en la configuración de Firebase.');bi(k),Ei(R),M("¡Configuración guardada exitosamente! 🎉"),H(),location.reload()}catch(k){d.textContent=`Error al procesar la configuración: ${k.message}`,d.hidden=!1}}),A("login"),a.appendChild(i)}const Ii=document.getElementById("app");let dt=null,wi=!1;const pl={"#/auth":hl,"#/setup":Jn,"#/home":_n,"#/talk":dl,"#/settings":ul};async function Oa(){const a=Oe(),e=La(),t=Yt(),i=Kt(),n=!!(a.apiKey||i);let s=location.hash||"#/home";e&&!t&&s!=="#/auth"&&s!=="#/setup"?s="#/auth":e&&t&&s==="#/auth"?s="#/home":!e&&!n&&s!=="#/setup"&&s!=="#/auth"&&(s="#/auth"),s!==location.hash&&history.replaceState(null,"",s),dt!=null&&dt.destroy&&await dt.destroy(),Ii.innerHTML="",dt=(pl[s]||_n)(Ii)||null,window.scrollTo(0,0)}Na();sl(()=>{wi&&Oa(),wi=!0});window.addEventListener("hashchange",Oa);Oa();"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("./sw.js").then(a=>{a.update().catch(()=>{})}).catch(()=>{})});
