function validate(){
var a = document.myform.pass.value;
var b = document.myform.confirm.value;
if (b!=a) {
    alert("Invalid Password");
    return false;

}else{
    return true;
}
}