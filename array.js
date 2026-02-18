
//find average marks
// for(let i=0;i<marks.length;i++)
// {
//     console.log(marks[0]);
// }
let marks=[16,29,33,44,76]
let total_marks=0
for(let mark of marks)//for of loop
{
    total_marks=total_marks+mark
}
console.log("average marks",total_marks/marks.length);