
const container = document.querySelector("#course-container");

async function getCourses() {
  try {
    const response = await fetch("data/courses.json");
    const data = await response.json();

    displayCourses(data.courses);
  } catch (error) {
    console.error("Error loading courses:", error);
  }
}

function displayCourses(courses) {
  container.innerHTML = courses.map(course => `
    <div class="course-card">
      <h3>${course.title}</h3>
      <p><strong>Category:</strong> ${course.category}</p>
      <p><strong>Level:</strong> ${course.level}</p>
      <p><strong>Duration:</strong> ${course.duration}</p>
    </div>
  `).join("");
}

getCourses();
