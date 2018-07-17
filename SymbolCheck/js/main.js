//variable to hold the boolean to return
var figure = false;
//variable to compare any letter to
var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
function symbolCheck(str) {
    //splits the string into an array
    var size = str.split('');
//for loop to run through the whole string
    for (var i = 0; i < size.length; i++) {
        //this starts the checking process
        if (size[i] === "+") {
            //if the first if statement is true, this for loop will check to see if a letter is next 
            for (var y = 0; y < alphabet.length; y++) {
                //this will compare the next letter to the alphabet
                if (size[i + 1] === alphabet[y]) {
                    //this will then check to see if the character after the letter is the right one
                    if (size[i + 2] === "+") {
                    figure = true;
                } else {
                    figure = false;
     
                        }

                   }


                }

            }
        }
    
}
symbolCheck("==3==+a+==+e====+w+=== = 2");
console.log(figure);
