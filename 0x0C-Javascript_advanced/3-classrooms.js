function createClassRoom(numbersOfStudents) {
  function studentSeat(seat) {
    return function () {
      return seat;
    };
  }
  let students = [];
  for (let i = 1; i <= numbersOfStudents; i++) {
    students.push(studentSeat(i));
  }
  return students;
}

let classRoom = createClassRoom(10);

console.log(classRoom[0]());
console.log(classRoom[3]());
console.log(classRoom[9]());
