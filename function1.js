/*
function name()
{
body of the function
}
*/
//Definition
function test()
{
    console.log("Im working");
}
//Invoke
test()
test()
//function with paramter
function greet(user)
{
    console.log("hello",user);
}
greet("rahul")
greet()//no argument passed user will be undefined
function findpow(m,n)
{
    console.log(m**n);// ** operator - exponent operator
}
findpow(2,3)