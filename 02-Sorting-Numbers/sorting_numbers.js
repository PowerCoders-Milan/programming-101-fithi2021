//insert your pseudocode below
/*create a variable nums to store numbers
* set numbers to the variable
*call function ascending
*print all

*/

//insert your code below
var nums;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b);
     },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


nums = [2, 4, 7];
window.alert(nums.slice().sort(listsGetSortCompare("NUMERIC", -1)));,
