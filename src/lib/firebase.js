import { initializeApp, getApps, getApp } from 'firebase/app';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
  updateProfile,
} from 'firebase/auth';

const FB_CONFIG_KEY = 'pvi.firebase_config';
const SHARED_GEMINI_KEY = 'pvi.institutional_gemini_key';

const DEFAULT_FIREBASE_CONFIG = {
  apiKey: "AIzaSyBF7oKFgPaQPfwi6RwH72CLGLGzcInAaks",
  authDomain: "programa-inpad-idiomas.firebaseapp.com",
  projectId: "programa-inpad-idiomas",
  storageBucket: "programa-inpad-idiomas.firebasestorage.app",
  messagingSenderId: "344073247026",
  appId: "1:344073247026:web:55af2da20d246256dc9f2b",
  measurementId: "G-01QKH9ET6M"
};

/**
 * Configuración por defecto o cargada desde entorno / localStorage.
 */
export function getFirebaseConfig() {
  try {
    const saved = localStorage.getItem(FB_CONFIG_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}

  if (import.meta.env.VITE_FIREBASE_API_KEY) {
    return {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
  }
  return DEFAULT_FIREBASE_CONFIG;
}

export function saveFirebaseConfig(config) {
  if (!config) {
    localStorage.removeItem(FB_CONFIG_KEY);
  } else {
    localStorage.setItem(FB_CONFIG_KEY, JSON.stringify(config));
  }
  // Re-inicializar app
  initFirebase();
}

/** Clave Gemini institucional para que los alumnos no tengan que poner clave propia */
export function getInstitutionalGeminiKey() {
  return localStorage.getItem(SHARED_GEMINI_KEY) || import.meta.env.VITE_GEMINI_API_KEY || '';
}

export function saveInstitutionalGeminiKey(key) {
  if (!key) {
    localStorage.removeItem(SHARED_GEMINI_KEY);
  } else {
    localStorage.setItem(SHARED_GEMINI_KEY, key.trim());
  }
}

let firebaseApp = null;
let firebaseAuth = null;

export function initFirebase() {
  const config = getFirebaseConfig();
  if (!config || !config.apiKey) {
    firebaseApp = null;
    firebaseAuth = null;
    return null;
  }
  try {
    firebaseApp = getApps().length ? getApp() : initializeApp(config);
    firebaseAuth = getAuth(firebaseApp);
    return firebaseAuth;
  } catch (err) {
    console.error('Error inicializando Firebase:', err);
    return null;
  }
}

export function isFirebaseReady() {
  const auth = getAuthInstance();
  return Boolean(auth);
}

export function getAuthInstance() {
  if (!firebaseAuth) {
    initFirebase();
  }
  return firebaseAuth;
}

/**
 * Registra un nuevo alumno con su correo y contraseña elegida.
 */
export async function registerWithEmail(email, password, displayName = '') {
  const auth = getAuthInstance();
  if (!auth) throw new Error('Firebase no está configurado todavía.');

  const cred = await createUserWithEmailAndPassword(auth, email.trim(), password);
  if (displayName && cred.user) {
    try {
      await updateProfile(cred.user, { displayName: displayName.trim() });
    } catch {}
  }
  return cred.user;
}

/**
 * Inicia sesión de un alumno registrado.
 */
export async function loginWithEmail(email, password) {
  const auth = getAuthInstance();
  if (!auth) throw new Error('Firebase no está configurado todavía.');

  const cred = await signInWithEmailAndPassword(auth, email.trim(), password);
  return cred.user;
}

/**
 * Inicia sesión con Google (1 clic).
 */
export async function loginWithGoogle() {
  const auth = getAuthInstance();
  if (!auth) throw new Error('Firebase no está configurado todavía.');

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const cred = await signInWithPopup(auth, provider);
  return cred.user;
}

/**
 * Envía correo para recuperar/restablecer contraseña.
 */
export async function sendPasswordReset(email) {
  const auth = getAuthInstance();
  if (!auth) throw new Error('Firebase no está configurado todavía.');

  await sendPasswordResetEmail(auth, email.trim());
}

/**
 * Cierra sesión del alumno.
 */
export async function logoutUser() {
  const auth = getAuthInstance();
  if (!auth) return;
  await signOut(auth);
}

/**
 * Escucha cambios de sesión.
 */
export function onAuthChange(callback) {
  const auth = getAuthInstance();
  if (!auth) {
    callback(null);
    return () => {};
  }
  return onAuthStateChanged(auth, callback);
}

export function getCurrentUser() {
  const auth = getAuthInstance();
  return auth?.currentUser || null;
}

/**
 * Traduce códigos de error de Firebase a mensajes amigables en español para el alumno.
 */
export function getFriendlyAuthError(err) {
  const code = err?.code || '';
  switch (code) {
    case 'auth/email-already-in-use':
      return 'Este correo electrónico ya está registrado. Si ya tienes cuenta, pulsa en "Iniciar Sesión".';
    case 'auth/invalid-email':
      return 'Por favor escribe un correo electrónico válido.';
    case 'auth/weak-password':
      return 'La contraseña debe tener al menos 6 caracteres.';
    case 'auth/user-not-found':
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'Correo o contraseña incorrectos. Verifica tus datos o restablece tu contraseña.';
    case 'auth/popup-closed-by-user':
      return 'Se cerró la ventana de inicio con Google antes de completar el acceso.';
    case 'auth/too-many-requests':
      return 'Muchos intentos fallidos. Por seguridad espera un minuto e inténtalo de nuevo.';
    case 'auth/network-request-failed':
      return 'Error de conexión. Verifica tu conexión a internet.';
    default:
      return err?.message || 'Ocurrió un error inesperado al procesar tu acceso.';
  }
}
