const users = [
  { id: 1, name: "Jay", score: 49 },
  { id: 2, name: "Neung", score: 50 },
  { id: 3, name: "Seagame", score: 60 },
  { id: 4, name: "Bow", score: 70 },
  { id: 5, name: "Ming", score: 80 },
];

console.log(users);
// map เพิ่ม key grade
// < 50 = 0
// < 60 = 1
// < 70 = 2
// < 80 = 3
// > 80 = 4
// [
//     { id: 1, name: "Jay", score: 49, grade: 0 },
//     { id: 2, name: "Neung", score: 50, grade: 1 },
//     { id: 3, name: "Seagame", score: 60, grade: 2 },
//     { id: 4, name: "Bow", score: 70, grade: 3 },
//     { id: 5, name: "Ming", score: 80, grade: 4 },
//   ];
