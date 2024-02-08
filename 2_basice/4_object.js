//object destructuring
course = {
    coursename: "Node.js",
    price: 999,
    CourseInstructore: "priyal"
}
const { CourseInstructore : instructore } = course
console.log("CourseInstructore", instructore);