let output = document.getElementById("cal");

function Display(num) {
  output.value += num;
}
function Clear() {
  output.value = "";
}
function Delete() {
  output.value = output.value.slice(0, -1);
}

// let number = "123456789";
// console.log(number.slice(0, -1));

function calc(){
    try{
       output.value=eval(output.value);
    }
    catch(err){
        output.value="Error";
    }
}