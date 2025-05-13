// Handle GUC or Company login
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim().toLowerCase();
  const password = document.getElementById("password").value;

  const domain = email.split('@')[1];
  const registeredCompany = JSON.parse(localStorage.getItem('registeredCompany'));

  // Company Login
  if (registeredCompany && registeredCompany.email === email && registeredCompany.password === password) {
    window.location.href = "pages/company/dashboard.html";
    return;
  }

  // Student & Faculty Login
  if (domain === "student.guc.edu.eg") {
    localStorage.setItem("userType", "regular");
    window.location.href = "pages/student/dashboard.html";
  } else if (domain === "prostudent.guc.edu.eg") {
    localStorage.setItem("userType", "pro");
    window.location.href = "pages/student/dashboard.html";
  } else if (domain === "scad.guc.edu.eg") {
    window.location.href = "pages/faculty/dashboard.html";
  } else {
    alert("Invalid credentials or email.");
  }
});

// Register Company
function registerCompany() {
  const company = {
    name: document.getElementById("companyName").value.trim(),
    industry: document.getElementById("industry").value.trim(),
    size: document.getElementById("companySize").value,
    email: document.getElementById("companyEmail").value.trim().toLowerCase(),
    password: document.getElementById("companyPassword").value
  };

  if (!company.name || !company.industry || !company.size || !company.email || !company.password) {
    alert("Please fill in all required fields.");
    return;
  }

  localStorage.setItem("registeredCompany", JSON.stringify(company));
  alert("Company registered! You can now log in.");
  document.getElementById("companyForm").style.display = "none";
  alert("Company registered successfully!");
window.location.href = "main.html"; // or use "../main.html" if needed

}

// Toggle company form visibility
function toggleForm() {
  const form = document.getElementById("companyForm");
  form.style.display = form.style.display === "none" ? "block" : "none";
}
