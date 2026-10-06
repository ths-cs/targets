/* =====================================================================
   config.js — your personal settings for the learning targets page.
   Keep this file next to learning-targets.html in your GitHub repo.
   When the dashboard is updated, you only re-upload learning-targets.html;
   this file stays as it is, so your settings are never erased.
   ===================================================================== */
window.LT_CONFIG = {

  // 1) REQUIRED: your published Google Sheet CSV link (between the quotes).
  //    Google Sheets: File > Share > Publish to web > pick the tab > CSV > Publish.
  SHEET_CSV_URL: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSrZNdVL7fkYpz01LTWllFm2J2qOMtlDhMgTULE-ilEDaTWbofSSOoAT4tQlmjjv9N6mqY8sgTDOMAM/pub?gid=48683423&single=true&output=csv",

  // 2) The word that opens teacher mode: learning-targets.html?teacher=1
  //    Change "1" to any word you like (a casual door, not a security lock).
  TEACHER_KEY: "1",

  // 3) How often the page re-reads the sheet, in minutes.
  REFRESH_MINUTES: 5,

  // 4) Your classes. code = what you type in the sheet's Class column and in ?class=CODE
  CLASSES: [
    { code: "GA1", name: "Graphic Art 1",        detail: "Photoshop and Illustrator" },
    { code: "GA2", name: "Graphic Art 2",        detail: "Client projects for the printshop" },
    { code: "DA1", name: "Digital Art 1",        detail: "Adobe Fresco and Illustrator" },
    { code: "FrS", name: "Freshman Success",     detail: "SEL and touch typing" },
    { code: "HSB", name: "High School & Beyond", detail: "Senior advisory · Schoolinks" }
  ]
};
