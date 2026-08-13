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

const form = document.getElementById("apply-form");
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
    const linkedin = form.linkedin.value.trim();
    const position = form.position.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !position) {
      statusEl.textContent = "Please fill in your name, email, and area of interest.";
      statusEl.className = "form-status err";
      return;
    }

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.disabled = true;
    statusEl.textContent = "Sending…";
    statusEl.className = "form-status";

    try {
      await addDoc(collection(db, "applications"), {
        name,
        email,
        phone,
        linkedin,
        position,
        message,
        createdAt: serverTimestamp(),
      });
      form.reset();
      statusEl.textContent = "Thanks — we've got it, and we'll be in touch.";
      statusEl.className = "form-status ok";
    } catch (err) {
      console.error("Application submit failed:", err);
      statusEl.textContent = "Something went wrong. Please email info@eoailab.com instead.";
      statusEl.className = "form-status err";
    } finally {
      submitBtn.disabled = false;
    }
  });
}
