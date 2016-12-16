function Student(id, first, grade, age, favProject){
  this.idNumber = id;
  this.firstName = first;
  this.gradeNumber = grade;
  this.ageNumber = age;
  this.project = favProject;
}

var teamMember1 = new Student(1000, "Cody", 4, 10, "PetShop");
var teamMember2 = new Student(1000, "Jong", 5, 10, "Bears");

function printStudentInfo(student){
  return student;
}

console.log(printStudentInfo(teamMember1));
console.log(printStudentInfo(teamMember2));
