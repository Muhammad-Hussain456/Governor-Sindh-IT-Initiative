/*
Java-script assignments chapter 5, 6, 7

declare a variable for Number 'a' for example a value is 2
declare a variable for Number 'b' for example b value is a++ + ++a - --a + a--
print meassage in alert() variable a
print meassage in alert() variable b
*/

var a = 2;
var b = a++ + ++a - --a + a--;   // a++ = 2++ = 3, ++a = ++2 = 3, --a = --2 = 1, a-- = 2-- = 1 
/* only the address(copy) of 'a' is stored in 'b'. The actual value of 'a' remain same so each time when 'b' refers to 'a', 
  the copy of value stored in 'a' is stored in 'b'
*/
alert(`value of a = ${a}`);
alert(`value of b = ${b}`);