/* ------------------------------------------ */
let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0]; //المصفوفة

let all_grades_div = document.getElementById("all-grades");
let random_grade_div = document.getElementById("random-grade");
/* لا تقم بتعديل الأسطر المكتوبة بالأعلى */


/*  الجزء الأول والثاني من التمرين */
grades.pop()
grades.push("99")
// let i = 0;
// let len = grades.length;
// for (; i < len; ) {

  
// }
// document.getElementById("item").innerHTML =i;
// grades.forEach(all_grades_div.innerHTML += `<span>${item}<span>`);    

grades.forEach(item => {all_grades_div.innerHTML += `<span>${item}<span>`});

/* الجزء الثالث من التمرين */

// let randomIndex =grades.length *Math.random()
let randomIndex = Math.floor(Math.random() * grades.length)
//  let any=grades[randomIndex];

 random_grade_div.innerHTML = `<span>#${randomIndex}: ${grades[randomIndex]}<span>`
  

let course = {
  name: "UniCODE",
  track : "",
  studentsCount : 0,
  location : "Kuwait University"
}


//Change studentsCount,track property here

course.track="web"
course.studentsCount=40;

//Console log here
console.log("Hello my name is"+course.name +"im in "+ course.track +"at" + course.studentsCount)



//Create student object here
let student ={
  name: "omar",
  university:"kuniv"
}


let course1 = [ 
{
  name: "UniCODE",
  track : "one",
  location : "Kuwait University"
},
{
  name: "UniCODE",
  track : "two",
  location : "Kuwait University"
},
{
  name: "UniCODE",
  track : "three",
  location : "Kuwait University"
}
]
let UniCODEs=course1
UniCODEs.forEach(track => {console.log(track)
  
});

