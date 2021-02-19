//insert your pseudocode below
/*
here
*/

//Insert your code below
var month, X, listOfMonth, day, valueOfMonth, indexOfMonth;


month = window.prompt('Enter the month');
day = Number(window.prompt('Enter the date'));

listOfMonth = 'Jan,Feb,Mar'.split(',');
valueOfMonth = '0,31,59'.split(',');
indexOfMonth = listOfMonth.indexOf(month) + 1;

X = valueOfMonth[(indexOfMonth - 1)];

console.log((X - 0) + day);