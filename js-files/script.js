document.getElementById("addSubjectBtn").addEventListener("click", addSubject);
document
  .getElementById("calculateGPABtn")
  .addEventListener("click", calculateGPA);
document
  .getElementById("calculateCGPABtn")
  .addEventListener("click", calculateCGPA);

function addSubject() {
  const subjectName = document.getElementById("subjectName").value;
  const grade = document.getElementById("grade").value;
  const score = parseFloat(document.getElementById("score").value);
  const creditUnits = parseInt(document.getElementById("courseunit").value);

  const table = document.getElementById("gradeTable");
  const row = table.insertRow();

  row.insertCell().textContent = subjectName;
  row.insertCell().textContent = grade.toString();
  row.insertCell().textContent = score.toString();
  row.insertCell().textContent = creditUnits.toString();

  // clear input fields
  document.getElementById("subjectName").value = "";
  document.getElementById("grade").value = "";
  document.getElementById("score").value = "";
  document.getElementById("courseunit").value = "";
}
function calculateGPA() {
  const rows = Array.from(document.querySelectorAll("#gradeTable tr"));

  let totalCreditUnits = 0;
  let totalGradepoints = 0;

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;

    const grade = cells[1].textContent.toLowerCase();
    const score = parseFloat(cells[2].textContent);
    const creditUnits = parseInt(cells[3].textContent);

    let gradePoints = 0;
    if (grade === "a") {
      gradePoints = 5.0;
    } else if (grade === "b") {
      gradePoints = 4.0;
    } else if (grade === "c") {
      gradePoints = 3.0;
    } else if (grade === "d") {
      gradePoints = 2.0;
    } else if (grade === "e") {
      gradePoints = 1.0;
    } else if (grade === "f") {
      gradePoints = 0.0;
    } else {
      gradePoints = "N/A";
    }

    const gradePoint = ((gradePoints * score) / 100) * creditUnits;

    totalGradepoints += gradePoint;
    totalCreditUnits += creditUnits;
  }
  const gpa = totalGradepoints / totalCreditUnits;

  //display gpa result
  const gpaResult = document.getElementById("gpaResult");
  gpaResult.textContent = `GPA: ${gpa.toFixed(2)}`;
}

function calculateCGPA() {
  const rows = Array.from(document.querySelectorAll("#gradeTable tr"));

  let totalCreditUnits = 0;
  let totalGradepoints = 0;

  for (let i = 1; i < rows.length; i++) {
    const cells = rows[i].cells;

    const grade = cells[1].textContent.toLowerCase();
    const score = parseFloat(cells[2].textContent);
    const creditUnits = parseInt(cells[3].textContent);

    let gradePoints = 0;
    if (grade === "a") {
      gradePoints = 5.0;
    } else if (grade === "b") {
      gradePoints = 4.0;
    } else if (grade === "c") {
      gradePoints = 3.0;
    } else if (grade === "d") {
      gradePoints = 2.0;
    } else if (grade === "e") {
      gradePoints = 1.0;
    } else if (grade === "f") {
      gradePoints = 0.0;
    } else {
      gradePoints = "N/A";
    }

    const gradePoint = ((gradePoints * score) / 100) * creditUnits;

    totalGradepoints += gradePoint;
    totalCreditUnits += creditUnits;
  }
  const cgpa = totalGradepoints / totalCreditUnits;

  //display gpa result
  const cgpaResult = document.getElementById("cgpaResult");
  cgpaResult.textContent = `CGPA: ${cgpa.toFixed(2)}`;
}
