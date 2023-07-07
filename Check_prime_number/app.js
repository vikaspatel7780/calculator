fun1=()=>{
    var t=parseInt(document.form1.in1.value);
let ans=0;
for(let i=2;i<t;i++){
    if(t%i==0){
        ans=1;
        break;
    }
}

    
    if(ans!=1){
        document.getElementById("ans1").innerHTML=t+": Is Prime Number";
        return false;
    }
    else{
        document.getElementById("ans1").innerHTML=t+": Is Not Prime Number";
        return false;
    }
}