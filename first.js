//variable hoisting
//all var declarations are raised to the top
// var num//declaration
// console.log(num)
// num=5//initialization

if(true)
{
    //block
    let a=10
    var b=20
    const c=30
    console.log("inside block",a);
    console.log("inside block",b);
}
//console.log("outside block",a);
console.log("oustide block",b);
// console.log(c);
