const function1 = () => {
  var s = document.form1.input1.value;
  var regex = /[a-z0-9]+@[a-z]+.[a-z]{2,3}/;
  //  var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!s.match(regex)) {
    document.getElementById("s1").innerHTML = "Invalid Email id";
    return false;
  } else {
    document.getElementById("s1").innerHTML = "Valid Email id";
    return false;
  }
};
