const button = document.getElementById("generate");

button.addEventListener("click", () => {
  const job = document.getElementById("job").value.trim();
  const background = document.getElementById("background").value.trim();

  if (!job || !background) {
    alert("Please enter both the job description and your background.");
    return;
  }

  // Local prototype: identifies common skills and technology keywords.
  const keywords = [
    "python",
    "javascript",
    "java",
    "sql",
    "excel",
    "communication",
    "leadership",
    "problem solving",
    "data analysis",
    "machine learning",
    "artificial intelligence",
    "automation",
    "project management",
    "customer service",
    "teamwork",
    "linux",
    "git"
  ];

  const combined = (job + " " + background).toLowerCase();
  const matches = keywords.filter((keyword) =>
    combined.includes(keyword)
  );

  document.getElementById("skills").innerHTML =
    matches.length
      ? matches.map((skill) => `<span class="tag">${skill}</span>`).join("")
      : "<p>No common keywords detected. Review the job description manually.</p>";

  document.getElementById("questions").innerHTML = [
    "How has your experience prepared you for this position?",
    "Describe a technical or practical problem you solved and how you approached it.",
    "Tell us about a time you learned a new tool or technology quickly.",
    "How do you communicate technical information to non-technical colleagues?"
  ]
    .map((question) => `<li>${question}</li>`)
    .join("");

  document.getElementById("letter").textContent =
`Dear Hiring Manager,

I am writing to express my interest in the position. My background includes ${background}, and I am interested in applying these skills in a professional environment.

I am particularly interested in this opportunity because the role requires practical problem-solving, continuous learning, and effective communication. I enjoy using technology to improve processes and develop useful solutions.

I would welcome the opportunity to discuss how my skills and enthusiasm could contribute to your organization.

Sincerely,
Zachary Ryan Reynolds`;

  document.getElementById("result").classList.remove("hidden");
});
