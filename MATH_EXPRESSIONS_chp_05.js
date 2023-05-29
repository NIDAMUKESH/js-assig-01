
document.write("<br><br>CAHPTER # 05 <br> QUESTION NUM 01");
var a = 8;
var b = 4;
var result = a + b;
document.write("<br><br> Sum of 8 and 4 is. " + result);
///////////////////

document.write("<br><br> QUESTION NUM 02");
var result = a - b;
document.write("<br><br> subtraction of 8 and 4 is. " + result);
var result = a * b;
document.write("<br><br> Multiply of 8 and 4 is. " + result);
var result = a % b;
document.write("<br><br> Modulus. of 8 and 4 is. " + result);
////////////////

document.write("<br><br> QUESTION NUM 03");
var c;
document.write("<br>Value after variable declaration is: " + c);
c = 19;
document.write("<br>Initial value: " + c);
c++;
document.write("<br>Value after increment is: " + c);
c = c + 7;
document.write("<br>Value after addition is: " + c);
c--;
document.write("<br>Value after decrement is: " + c);
c = c % 3;
document.write("<br>The remainder is: " + c);
////////////////////

document.write("<br><br> QUESTION NUM 04");
var ticket = 600;
var buy = 5;
ticket = ticket * buy;
document.write("<br><br>Total Cost to buy " + buy + " ticket to a movie is " + ticket + "PKR");
///////////////////

document.write("<br><br> QUESTION NUM 05");
document.write("<br><br>Table of 12<br>");
var table = 12;
multi = 0;
for (i = 1; i <= 10; i++) {
    var multi = i * table;
    document.write("<br>" + table + "*" + i + "=" + multi);
}
////////////////
document.write("<br><br> QUESTION NUM 06");
var Celsius=65;
f=(c*9/5)+32;
document.write("<br><br>"+Celsius + "*C is "  + f +"*F");
var Fahrenheit=87;
c=(f-32)*5/9;
document.write("<br>" + Fahrenheit + "*C is "  + c +"*F");
////////////////

document.write("<br><br> QUESTION NUM 07");
var Price1= 650;
var Price2=100;
var Ordered1= 3;
var Ordered2=7;
var charges=100;
 
document.write("<br><br>Price of item 1 is" + Price1);
document.write("<br>Quantity of 1 item is "+ Ordered1);
document.write("<br>Price of item 2 s " +Price2);
document.write("<br>Quantity of 2 item is " +Ordered2);
document.write("<br>Shipping charges is " +charges);
Price1=Price1*Ordered1;
Price2=Price2*Ordered2;
charges=charges+Price1+Price2;
document.write("<br><br>Total cost of your order is " + charges);
////////////////

document.write("<br><br> QUESTION NUM 08");
var total_marks = 980;
var marks_obtained = 804;
var percentage;
percentage=(marks_obtained*100)/total_marks;
document.write("<br><h2> MARKS SHEET</h2>");
document.write("Total Marks: " +total_marks);
document.write("<br>Obtaine Marks: " +marks_obtained);
document.write("<br>Percentage: " +percentage + "%");
///////////////////

document.write("<br><br> QUESTION NUM 09");
var num=100;
num=num+5*10/2;
document.write("<br><br> SUM + MULTIPLY + DIVIDE IN ONE EXPRESSION "+num);
/////////////

document.write("<br><br> QUESTION NUM 10");
var current_year=2023;
var birth_year=2003;
document.write("<br><h2> Age Calculator:</h2>");
document.write("Current Year is: " + current_year);
document.write("<br>Birth Year is: " + birth_year);
 birth_year=current_year-birth_year;
 document.write("<br>YOU'R age is "  + birth_year);
//////////////////////

document.write("<br><br> QUESTION NUM 11");
var radius=45;
var pia=3.142;
var circumference,Area;
circumference=2*pia*radius;
document.write("<br><h2> The Geometrizer:</h2>");
document.write("Radius of a Circle is " + radius);
document.write("<br>The circumference is " +circumference);
Area=pia*radius*radius;
document.write("<br>Area of Circle is " +Area);
/////////////////

