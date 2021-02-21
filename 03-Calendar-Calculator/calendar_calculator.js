//insert your pseudocode below
/*
*This programe is to find the number(index) of the days
* of the year
*first let our user enter the day and the month
*for example: if the day is 1st Jan it should be 1
*if the day is 31st Dec it should be 356.
*pseudocode:
*a variable day to store the day from the user but you have to change to number
*using parsInt();
*a varible month to store the specific month from the user
*a variable to store postionOfTheday

*/

//Insert your code below
var day =   parseInt(prompt("enter the number "));

var month = prompt("Enter the month");
let positionOfDay = 0;
// control the month from the user and add the day and days before

switch(month){
     
    case "Jan": 
    positionOfDay += day;
    break;

    case "Feb": 
    positionOfDay = day + 31;
    break;

    case "Mar": 
    positionOfDay = day + 59;
    break;

    case "April": 
    positionOfDay = day + 90;
    break;

    case "May": 
    positionOfDay = day + 120;
    break;

    case "Jun": 
    positionOfDay = day + 151;
    break;

    case "July": 
    positionOfDay = day + 181;
    break;

    case "Aug": 
    positionOfDay = day +212;
    break;

    case "Sept": 
    positionOfDay = day +243;
    break;

    case "Oct": 
    positionOfDay = day +273;
    break;

    case "Nov": 
    positionOfDay = day +304;
    break;

    case "Dec": 
    positionOfDay = day +334;
    break;

    default:
    window.alert("Non é corretto il giorno o il mese che hai inserito!")

}
    window.alert(positionOfDay);
