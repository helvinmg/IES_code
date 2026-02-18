test={'a':1,'b':2,'c':3}
newobj={}
for(key in test)
{
    newobj[test[key]]=key
    //output[1]='a'
}
console.log("result=",newobj);