const gradeTable = document.getElementById("gradeTable");
const gradeTableBody = document.getElementById("gradeTableBody");

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
  const creditUnits = parseInt(document.getElementById("courseunit").value);
  const semester = document.getElementById("semester").value;

  const row = gradeTableBody.insertRow();

  row.insertCell().textContent = subjectName;
  row.insertCell().textContent = grade.toString();
  row.insertCell().textContent = creditUnits.toString();
  row.insertCell().textContent = semester;

  // Clear input fields
  document.getElementById("subjectName").value = "";
  document.getElementById("grade").value = "";
  document.getElementById("courseunit").value = "";
  document.getElementById("semester").value = "";
}

function calculateGPA() {
  const rows = Array.from(
    document.querySelectorAll("#gradeTableBody tr gradeTable")
  );

  let totalGradepoints = 0;
  let totalCreditUnits = 0;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;

    const grade = cells[1].textContent.toLowerCase();
    const creditUnits = parseInt(cells[3].textContent);

    let gradePoints = 0;

    if (grade === "a") {
      gradePoints = 5.0;
    } else if (grade === "b+") {
      gradePoints = 4.5;
    } else if (grade === "b") {
      gradePoints = 4.0;
    } else if (grade === "c+") {
      gradePoints = 3.5;
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

    const gradePoint = gradePoints * creditUnits;

    totalGradepoints += gradePoint;
    totalCreditUnits += creditUnits;
  }

  const gpa = totalGradepoints / totalCreditUnits;

  // Display GPA result
  const gpaResult = document.getElementById("gpaResult");
  gpaResult.textContent = `GPA: ${gpa.toFixed(2)}`;
}

function calculateCGPA() {
  const rows = Array.from(
    document.querySelectorAll("#gradeTableBody tr gradeTable")
  );

  let firstSemesterGradePoints = 0;
  let firstSemesterCreditUnits = 0;
  let secondSemesterGradePoints = 0;
  let secondSemesterCreditUnits = 0;

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].cells;

    const grade = cells[1].textContent.toLowerCase();
    const creditUnits = parseInt(cells[3].textContent);
    const semester = cells[4].textContent.toLowerCase();

    let gradePoints = 0;

    if (grade === "a") {
      gradePoints = 5.0;
    } else if (grade === "b+") {
      gradePoints = 4.5;
    } else if (grade === "b") {
      gradePoints = 4.0;
    } else if (grade === "c+") {
      gradePoints = 3.5;
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

    const gradePoint = gradePoints * creditUnits;

    if (semester === "first") {
      firstSemesterGradePoints += gradePoint;
      firstSemesterCreditUnits += creditUnits;
    } else if (semester === "second") {
      secondSemesterGradePoints += gradePoint;
      secondSemesterCreditUnits += creditUnits;
    }
  }

  const firstSemesterGPA = firstSemesterGradePoints / firstSemesterCreditUnits;
  const secondSemesterGPA =
    secondSemesterGradePoints / secondSemesterCreditUnits;
  const cgpa = (firstSemesterGPA + secondSemesterGPA) / 2;

  // Display CGPA result
  const cgpaResult = document.getElementById("cgpaResult");
  cgpaResult.textContent = `CGPA: ${cgpa.toFixed(2)}`;
}
