import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

// Public web config — safe to expose client-side. Write access to
// Firestore is restricted by security rules (see firestore.rules),
// not by keeping this config secret.
//
// This uses the same Firebase project (and the same default Firestore
// database) as apply.js, but writes into its own "clients" collection —
// kept fully separate from the "applications" collection used by the
// "Work with us" form.
const firebaseConfig = {
  apiKey: "AIzaSyDuHUxESygA933lc_SiHaF96av5vjiSDxA",
  authDomain: "intt-ai.firebaseapp.com",
  projectId: "intt-ai",
  storageBucket: "intt-ai.firebasestorage.app",
  messagingSenderId: "112155412958",
  appId: "1:112155412958:web:4d37cda28689be2d29754f",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const form = document.getElementById("client-form");
const statusEl = document.getElementById("form-status");

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    // Honeypot — bots tend to fill every field, humans never see this one.
    // Guarded with optional chaining so a stale cached copy of this page
    // (missing the field, or using an older field name) can't crash instead
    // of just skipping the check.
    if (form.elements.hp_field?.value.trim()) return;

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const company = form.company.value.trim();
    const message = form.message.value.trim();

    // Falls back to the English copy if i18n.js hasn't loaded for some reason.
    const t = (key, fallback) => (window.i18n ? window.i18n.t(key) : fallback);

    if (!name || !email || !company) {
      statusEl.textContent = t("client.statusMissing", "Please fill in your name, email, and company.");
      statusEl.className = "form-status err";
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    statusEl.textContent = t("client.statusSending", "Sending…");
    statusEl.className = "form-status";

    try {
      await addDoc(collection(db, "clients"), {
        name,
        email,
        phone,
        company,
        message,
        createdAt: serverTimestamp(),
      });
      form.reset();
      statusEl.textContent = t("client.statusThanks", "Thanks — we've got it, and we'll be in touch.");
      statusEl.className = "form-status ok";
    } catch (err) {
      console.error("Client submit failed:", err);
      statusEl.textContent = t("client.statusError", "Something went wrong. Please email info@eoailab.com instead.");
      statusEl.className = "form-status err";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
