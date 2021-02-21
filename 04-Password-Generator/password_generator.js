//insert your pseudocode below
/*The programe should print random password.
*create a variable to store the length of the password 
*create a variable to store the char 
*create an empty string  variable to store the random password
*by looping over the charset as length of the password
*then return value


*/

//insert your code below
function generatePassword() {
    var length = 20,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789[]{}*+#,;?=()&%$£",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
window.alert(generatePassword());
