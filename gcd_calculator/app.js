fun1=()=>{
    var t1=document.forms.in1.value;
    var t2=document.forms.in2.value;
    var t3=gcd(t1, t2);
    function gcd(a, b) {
        while(a != b){
            if(a > b) {
                a -= b;
            }
            else {
                b -= a;
            }
        }
        return a;
  }
document.getElementById("ans1").innerHTML=` : GCD is= ${t3}`;
return false;
}