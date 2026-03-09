const courses = [
{
code: "CSE110",
name: "Programming Building Blocks",
credits: 2,
subject: "CSE",
completed: false
},
{
code: "WDD130",
name: "Web Fundamentals",
credits: 2,
subject: "WDD",
completed: true
},
{
code: "CSE111",
name: "Programming with Functions",
credits: 2,
subject: "CSE",
completed: false
},
{
code: "WDD131",
name: "Dynamic Web Fundamentals",
credits: 2,
subject: "WDD",
completed: true
},
{
code: "WDD231",
name: "Web Frontend Development",
credits: 2,
subject: "WDD",
completed: false
}
];

const courseContainer = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

function displayCourses(courseList) {

courseContainer.innerHTML = "";

courseList.forEach(course => {

const courseCard = document.createElement("div");
courseCard.textContent = course.code;

if(course.completed){
courseCard.style.backgroundColor = "#4CAF50";
courseCard.style.color = "white";
}

courseContainer.appendChild(courseCard);

});

calculateCredits(courseList);

}

function calculateCredits(courseList){

const credits = courseList.reduce((total, course) => total + course.credits, 0);

totalCredits.textContent = credits;

}

document.querySelector("#all").addEventListener("click", () => {
displayCourses(courses);
});

document.querySelector("#cse").addEventListener("click", () => {
const cseCourses = courses.filter(course => course.subject === "CSE");
displayCourses(cseCourses);
});

document.querySelector("#wdd").addEventListener("click", () => {
const wddCourses = courses.filter(course => course.subject === "WDD");
displayCourses(wddCourses);
});

displayCourses(courses);