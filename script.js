const students = {
awab: { name: "أواب إبراهيم باشري", grade: "A", courses: ["رياضيات", "فيزياء", "برمجة"] },
abi: { name: "أبي مكي الرشيد", grade: "B+", courses: ["رياضيات", "كيمياء", "تصميم"] },
leen: { name: "لين ممدوح", grade: "A-", courses: ["لغة عربية", "برمجة", "علوم"] },
luna: { name: "لنا ممدوح", grade: "B", courses: ["رياضيات", "فيزياء", "لغة إنجليزية"] }
};
function showStudent(id){
const student = students[id];
document.getElementById("student-name").innerText = student.name;
document.getElementById("student-grade").innerText = "المعدل: "+student.grade;
document.getElementById("student-courses").innerText = "المواد: "+student.courses.join(", ");
document.querySelector(".student-list").style.display="none";
document.getElementById("student-info").style.display="block";}
function goBack(){document.getElementById("student-info").style.display="none";
document.querySelector(".student-list").style.display="flex";}