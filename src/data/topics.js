/**
 * Catálogo de temas de conversación.
 * - title/desc: lo que ve el alumno (español).
 * - scenario: instrucción para el profesor virtual (en inglés, el modelo la sigue mejor).
 * Los mismos temas sirven para inglés e italiano: el profesor adapta el contexto cultural.
 */

export const CATEGORIES = [
  { id: 'trabajo', label: 'Trabajo', emoji: '💼' },
  { id: 'profesiones', label: 'Profesiones', emoji: '🧑‍⚕️' },
  { id: 'diario', label: 'Vida diaria', emoji: '🛒' },
  { id: 'viajes', label: 'Viajes', emoji: '✈️' },
  { id: 'academico', label: 'Académico', emoji: '🎓' },
  { id: 'charla', label: 'Charla libre', emoji: '💬' },
];

export const TOPICS = [
  // Trabajo
  { id: 'job-interview', cat: 'trabajo', emoji: '🤝', title: 'Entrevista de trabajo', desc: 'El profesor es el entrevistador.', scenario: 'Role-play a job interview. You are the interviewer (HR manager) and the student is the candidate. Ask about experience, strengths, weaknesses, motivation and salary expectations. Ask what job they are applying for first.' },
  { id: 'business-meeting', cat: 'trabajo', emoji: '📊', title: 'Reunión de negocios', desc: 'Discutir un proyecto con un colega.', scenario: 'Role-play a business meeting. You are a colleague discussing a project status, deadlines, problems and next steps with the student.' },
  { id: 'presentation', cat: 'trabajo', emoji: '🎤', title: 'Presentar un proyecto', desc: 'Exponer una idea y responder preguntas.', scenario: 'The student presents a project or idea to you (a manager / investor). Listen, then ask follow-up questions and challenge their arguments politely.' },
  { id: 'negotiation', cat: 'trabajo', emoji: '🤝', title: 'Negociación', desc: 'Negociar precio y condiciones.', scenario: 'Role-play a negotiation between a supplier (you) and a client (the student) about price, delivery times and conditions.' },
  { id: 'phone-call', cat: 'trabajo', emoji: '📞', title: 'Llamada telefónica', desc: 'Atender y hacer llamadas formales.', scenario: 'Role-play a formal phone call: the student calls a company to request information, schedule a meeting or make a complaint. You are the receptionist.' },
  { id: 'customer-service', cat: 'trabajo', emoji: '🎧', title: 'Atención al cliente', desc: 'El alumno atiende a un cliente molesto.', scenario: 'You are an upset customer with a problem (wrong order, delayed delivery). The student works in customer service and must solve it.' },
  { id: 'networking', cat: 'trabajo', emoji: '🍸', title: 'Networking', desc: 'Conocer profesionales en un evento.', scenario: 'Role-play small talk at a professional networking event. Introduce yourselves, talk about jobs, companies and industry trends.' },

  // Profesiones
  { id: 'immigration-officer', cat: 'profesiones', emoji: '🛂', title: 'Inspector de migraciones', desc: 'El alumno controla el ingreso de pasajeros.', scenario: 'Role-play border control / immigration. The student is an immigration officer at an airport or border checkpoint. You are an incoming foreign traveler. The student must check your passport, ask about the purpose of your visit, duration of stay, accommodation, return ticket, and financial funds. Give realistic answers and occasionally minor complications to test their professional vocabulary.' },
  { id: 'doctor-patient', cat: 'profesiones', emoji: '🩺', title: 'Médico y paciente', desc: 'El alumno es el médico.', scenario: 'You are a patient with some symptoms. The student is the doctor: they must ask questions, give a diagnosis and recommend treatment. Use realistic medical vocabulary.' },
  { id: 'patient-doctor', cat: 'profesiones', emoji: '🤒', title: 'Paciente en consulta', desc: 'El alumno es el paciente.', scenario: 'You are a doctor. The student is a patient explaining their symptoms. Ask detailed questions and give advice.' },
  { id: 'nurse', cat: 'profesiones', emoji: '💉', title: 'Enfermería', desc: 'Cuidar y explicar a un paciente.', scenario: 'You are a hospitalized patient. The student is the nurse: they explain procedures, medication schedules and check on your condition.' },
  { id: 'lawyer', cat: 'profesiones', emoji: '⚖️', title: 'Abogado', desc: 'Asesorar a un cliente.', scenario: 'You are a client with a legal problem (a contract dispute or a work issue). The student is the lawyer who asks questions and gives advice. Use basic legal vocabulary.' },
  { id: 'engineer', cat: 'profesiones', emoji: '🏗️', title: 'Ingeniería', desc: 'Explicar un problema técnico en obra.', scenario: 'You are a project manager on a construction or engineering site. Discuss a technical problem, safety issues, materials and schedules with the student, who is the engineer.' },
  { id: 'it-support', cat: 'profesiones', emoji: '💻', title: 'Tecnología / TI', desc: 'Soporte técnico o reunión de desarrollo.', scenario: 'You are a non-technical user whose computer or software is not working. The student is the IT specialist who must diagnose and explain the solution clearly.' },
  { id: 'teacher', cat: 'profesiones', emoji: '👩‍🏫', title: 'Docencia', desc: 'Explicar un tema a un estudiante.', scenario: 'You are a curious student. The student (user) is the teacher who explains a topic of their choice. Ask questions when something is not clear.' },
  { id: 'accountant', cat: 'profesiones', emoji: '📈', title: 'Contabilidad y finanzas', desc: 'Explicar estados financieros a un cliente.', scenario: 'You are a small business owner. The student is your accountant explaining taxes, expenses, budgets and financial statements.' },
  { id: 'hotel-reception', cat: 'profesiones', emoji: '🏨', title: 'Recepción de hotel', desc: 'El alumno es el recepcionista.', scenario: 'You are a hotel guest checking in, asking about services and later making a complaint. The student is the receptionist.' },
  { id: 'waiter', cat: 'profesiones', emoji: '🍽️', title: 'Mesero / restaurante', desc: 'El alumno atiende la mesa.', scenario: 'You are a customer in a restaurant. The student is the waiter: they take your order, recommend dishes and handle the bill.' },
  { id: 'tour-guide', cat: 'profesiones', emoji: '🗺️', title: 'Guía turístico', desc: 'Presentar un lugar a turistas.', scenario: 'You are a tourist. The student is a tour guide presenting a city, monument or region (they choose). Ask questions about history, food and culture.' },
  { id: 'sales', cat: 'profesiones', emoji: '🛍️', title: 'Ventas', desc: 'Vender un producto o servicio.', scenario: 'You are a potential customer. The student is a salesperson trying to sell you a product or service. Raise objections and ask questions.' },

  // Vida diaria
  { id: 'restaurant', cat: 'diario', emoji: '🍝', title: 'En el restaurante', desc: 'Pedir comida y la cuenta.', scenario: 'You are a waiter. The student is a customer ordering food and drinks, asking about the menu and paying.' },
  { id: 'shopping', cat: 'diario', emoji: '👕', title: 'De compras', desc: 'Comprar ropa, tallas, precios.', scenario: 'You are a shop assistant in a clothing store. The student is buying clothes: sizes, colors, prices, returns.' },
  { id: 'supermarket', cat: 'diario', emoji: '🛒', title: 'Supermercado y mercado', desc: 'Comprar alimentos.', scenario: 'You are a vendor at a market or supermarket. The student buys food, asks about prices, quantities and quality.' },
  { id: 'directions', cat: 'diario', emoji: '🧭', title: 'Pedir direcciones', desc: 'Orientarse en la ciudad.', scenario: 'The student is lost in a city and asks you (a local) for directions to different places. Give realistic directions.' },
  { id: 'renting', cat: 'diario', emoji: '🏠', title: 'Alquilar un departamento', desc: 'Hablar con el propietario.', scenario: 'You are a landlord. The student wants to rent an apartment: ask and answer about price, rules, location and contract.' },
  { id: 'bank', cat: 'diario', emoji: '🏦', title: 'En el banco', desc: 'Abrir una cuenta, hacer trámites.', scenario: 'You are a bank employee. The student wants to open an account, ask about a card or solve a problem.' },
  { id: 'pharmacy', cat: 'diario', emoji: '💊', title: 'Farmacia', desc: 'Pedir medicamentos y consejos.', scenario: 'You are a pharmacist. The student explains a minor health problem and asks for medicine and advice.' },
  { id: 'making-friends', cat: 'diario', emoji: '🙋', title: 'Conocer gente', desc: 'Presentarse y hacer amigos.', scenario: 'You meet the student at a party or cafe. Introduce yourselves and talk about where you are from, hobbies, family and plans.' },

  // Viajes
  { id: 'airport', cat: 'viajes', emoji: '🛫', title: 'Aeropuerto', desc: 'Check-in, migraciones, equipaje.', scenario: 'Role-play airport situations: check-in counter, security, immigration officer questions and a lost luggage desk. You play each official.' },
  { id: 'hotel-guest', cat: 'viajes', emoji: '🛎️', title: 'Hospedarse en un hotel', desc: 'El alumno es el huésped.', scenario: 'You are a hotel receptionist. The student is a guest checking in, asking about breakfast, wifi, tours and reporting a problem in the room.' },
  { id: 'transport', cat: 'viajes', emoji: '🚆', title: 'Transporte', desc: 'Tren, bus, taxi, boletos.', scenario: 'You are a ticket seller at a train/bus station or a taxi driver. The student buys tickets and asks about schedules, routes and prices.' },
  { id: 'emergency', cat: 'viajes', emoji: '🚨', title: 'Emergencias', desc: 'Pedir ayuda, policía, hospital.', scenario: 'The student has an emergency while travelling (lost passport, theft, accident). You are a police officer or emergency operator.' },
  { id: 'tourism', cat: 'viajes', emoji: '🏛️', title: 'Turismo y cultura', desc: 'Planear un viaje y visitas.', scenario: 'You are a travel agent or a local friend. Help the student plan a trip: places to visit, food, culture, budget.' },

  // Académico
  { id: 'thesis', cat: 'academico', emoji: '📚', title: 'Exponer mi tesis', desc: 'Explicar tu investigación.', scenario: 'You are a member of a thesis committee. The student explains their research (topic, objectives, method, results). Ask academic questions.' },
  { id: 'scholarship', cat: 'academico', emoji: '🏅', title: 'Entrevista de beca', desc: 'Convencer al comité.', scenario: 'You are on a scholarship committee for studying abroad. Interview the student about their goals, academic background and why they deserve it.' },
  { id: 'conference', cat: 'academico', emoji: '🎙️', title: 'Congreso / conferencia', desc: 'Presentar y debatir ideas.', scenario: 'You are an attendee at an academic conference. After the student summarizes their talk, ask questions and discuss.' },
  { id: 'university-life', cat: 'academico', emoji: '🏫', title: 'Vida universitaria', desc: 'Matrícula, cursos, compañeros.', scenario: 'You are an exchange student or university staff. Talk about courses, enrollment, schedules, campus life and exams.' },

  // Charla libre
  { id: 'free-talk', cat: 'charla', emoji: '☕', title: 'Conversación libre', desc: 'Hablar de lo que quieras.', scenario: 'Have a friendly free conversation. Start by asking the student how they are and what they would like to talk about. Follow their interests.' },
  { id: 'sports', cat: 'charla', emoji: '⚽', title: 'Deportes', desc: 'Fútbol, equipos, partidos.', scenario: 'Have a casual conversation about sports: favorite teams, recent matches, playing sports, famous athletes.' },
  { id: 'movies', cat: 'charla', emoji: '🎬', title: 'Cine y series', desc: 'Películas favoritas y recomendaciones.', scenario: 'Talk about movies and TV series: favorites, recommendations, describing plots and characters, opinions.' },
  { id: 'food-culture', cat: 'charla', emoji: '🍲', title: 'Comida y cultura', desc: 'Platos típicos y costumbres.', scenario: 'Talk about food and culture: typical dishes from the student\'s country and from your culture, recipes, traditions and festivals.' },
  { id: 'news', cat: 'charla', emoji: '📰', title: 'Actualidad y opinión', desc: 'Debatir temas de actualidad.', scenario: 'Discuss current general topics (technology, environment, education, social media). Ask for the student\'s opinion and politely debate.' },
  { id: 'hobbies', cat: 'charla', emoji: '🎸', title: 'Pasatiempos', desc: 'Música, lectura, viajes, hobbies.', scenario: 'Talk about hobbies and free time: music, reading, travel, video games, weekends.' },
];

export function getTopic(id) {
  return TOPICS.find((t) => t.id === id) || null;
}
