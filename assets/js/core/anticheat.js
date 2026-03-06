// assets/js/core/anticheat.js

export function initAntiCheat() {
  // 1. Detect Tab Switching
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      alert("⚠️ WARNING: You have left the exam tab. This incident has been logged.");
      console.warn("User navigated away from the exam at:", new Date().toLocaleTimeString());
    }
  });

  // 2. Prevent Right-Click (Optional but common in e-exams)
  document.addEventListener("contextmenu", (e) => e.preventDefault());

  // 3. Detect Window Blur (clicking outside the browser)
  window.addEventListener("blur", () => {
    console.log("Exam focus lost.");
  });
}