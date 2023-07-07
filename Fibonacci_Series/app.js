
fun1=()=>{
    var t=parseInt(document.form1.in1.value);
    var n1=0;
    var n2=1;
    var next1;
    var result=[];
    for(let i=0;i<t;i++){
        next1=n1+n2;
        result.push(n1);
        n1=n2;
        n2=next1;
    }
    document.getElementById("ans1").innerHTML=result;
    return false;
}