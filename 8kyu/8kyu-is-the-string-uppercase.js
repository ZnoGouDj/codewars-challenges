/*
Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

Test.assertEquals('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
*/

String.prototype.isUpperCase = function () {
    return this.toString() === this.toUpperCase()
}

//another

String.prototype.isUpperCase = function () { return this == this.toUpperCase() }

//another

String.prototype.isUpperCase = function () {
    if (this.toString() == this.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}