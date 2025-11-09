const generateBtn = document.getElementById("generateBtn");
const resumePreview = document.getElementById("resumePreview");
const downloadBtn = document.getElementById("downloadBtn");

// === Simulated AI Generation ===
generateBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const jobTitle = document.getElementById("jobTitle").value.trim();
  const experience = document.getElementById("experience").value.trim();
  const skills = document.getElementById("skills").value.trim();

  if (!name || !email || !jobTitle) {
    alert("⚠️ Please fill in all required fields (Name, Email, Job Title).");
    return;
  }

  // Simulated "AI" generation
  const aiSummary = `An enthusiastic ${jobTitle} with a proven ability to deliver quality results under pressure. 
  Adept at problem-solving, collaboration, and continuous learning.`;

  const skillList = skills ? skills.split(",").map(s => s.trim()) : [];
  const skillHTML = skillList.length
    ? skillList.map(s => `<li>${s}</li>`).join("")
    : "<li>No skills added</li>";

  // === Resume Template ===
  resumePreview.innerHTML = `
    <h2>${name}</h2>
    <p><strong>${jobTitle}</strong></p>
    <p>Email: ${email}</p>
    <hr>
    <h3>Professional Summary</h3>
    <p>${aiSummary}</p>
    <h3>Experience</h3>
    <p>${experience || "No experience provided."}</p>
    <h3>Skills</h3>
    <ul>${skillHTML}</ul>
  `;
});

// === Download PDF ===
downloadBtn.addEventListener("click", () => {
  const element = document.getElementById("resumePreview");
  const opt = {
    margin: 0.4,
    filename: "AI_Resume.pdf",
    html2canvas: { scale: 2 },
    jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
  };
  html2pdf().set(opt).from(element).save();
});
