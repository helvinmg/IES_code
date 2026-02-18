//key-value pairs enclosed in {}
//syntax={key1:value1,key2:value2}
stud={'name':'rahul','marks':67,'feepaid':true}
console.log(stud);
//access - object[key]
console.log(stud['name']);//stud.name
//update - object[existingkey] = newvalue
stud['marks']=72
console.log("after update",stud);
//add - object[newkey] = newvalue
stud['grade']="B" 
console.log("after addition",stud);
//deletion - delete object[key]
delete stud['feepaid']
console.log("after deletion",stud);
//itertaing object using for-in loop
for(let key in stud)
{
    document.writeln(key,":",stud[key],"<br>")
}