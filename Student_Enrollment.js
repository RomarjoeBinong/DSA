// Arrays to store enrolled students for each subject
let DSA = [];
let WebDev = [];

// Main program loop
while (true) {
  // Ask the user to select a subject or exit
  let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) WebDev\n(C) Exit").toLowerCase();

  if (subjectChoice === "a") {
    // Manage DSA subject
    while (true) {
      let action = prompt("DSA:\n(A) Enroll\n(B) Unenroll\n(C) Back").toLowerCase();

      if (action === "a") {
        // Enroll in DSA
        let studentName = prompt("Enter the name of the student to enroll:");
        DSA.push(studentName);
        alert(`${studentName} has been enrolled in DSA.`);
      } else if (action === "b") {
        // Unenroll from DSA
        if (DSA.length === 0) {
          alert("No students are currently enrolled in DSA.");
        } else {
          alert(`Enrolled students in DSA: ${DSA.join(", ")}`);
          let studentName = prompt("Enter the name of the student to unenroll:");
          let index = DSA.indexOf(studentName);
          if (index !== -1) {
            DSA.splice(index, 1);
            alert(`${studentName} has been unenrolled from DSA.`);
          } else {
            alert(`${studentName} is not enrolled in DSA.`);
          }
        }
      } else if (action === "c") {
        break; // Go back to the subject menu
      } else {
        alert("Invalid choice. Try again.");
      }
    }
  } else if (subjectChoice === "b") {
    // Manage WebDev subject
    while (true) {
      let action = prompt("WebDev:\n(A) Enroll\n(B) Unenroll\n(C) Back").toLowerCase();

      if (action === "a") {
        // Enroll in WebDev
        let studentName = prompt("Enter the name of the student to enroll:");
        WebDev.push(studentName);
        alert(`${studentName} has been enrolled in WebDev.`);
      } else if (action === "b") {
        // Unenroll from WebDev
        if (WebDev.length === 0) {
          alert("No students are currently enrolled in WebDev.");
        } else {
          alert(`Enrolled students in WebDev: ${WebDev.join(", ")}`);
          let studentName = prompt("Enter the name of the student to unenroll:");
          let index = WebDev.indexOf(studentName);
          if (index !== -1) {
            WebDev.splice(index, 1);
            alert(`${studentName} has been unenrolled from WebDev.`);
          } else {
            alert(`${studentName} is not enrolled in WebDev.`);
          }
        }
      } else if (action === "c") {
        break; // Go back to the subject menu
      } else {
        alert("Invalid choice. Try again.");
      }
    }
  } else if (subjectChoice === "c") {
    // Exit the program
    alert(`Enrolled students:\nDSA: ${DSA.join(", ") || "None"}\nWebDev: ${WebDev.join(", ") || "None"}`);
    break;
  } else {
    alert("Invalid choice. Try again.");
  }
}