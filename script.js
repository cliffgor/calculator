console.log("i work well");
$(document).ready(function(){
  console.log("begin reading script");
  var add = function(number1, number2) {
   return number1 + number2;
  };
  var subtract = function(number1, number2) {
    return number1 - number2;
  };
  var multiply = function(number1, number2) {
    return number * nuber2;
  };
  var divide = function(number1, number2) {
    return number1 / number2;
  };
  console.log("read the functions");
  $("button#addition").click(function(event){
    event.preventDefault();
    console.log("submit works");
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1,number2);
    alert(result);
  });

});
