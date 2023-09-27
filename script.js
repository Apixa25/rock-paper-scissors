function rockpaperscissors(){
    console.log(" rock, paper, or scissors")

    let rps= prompt("enter rock, paper, or scissors");
    console.log (rps)
    let info= alert("You can only choose one")
    let rock= confirm("do you want to add a lowercase letter");
    console.log (rock)
    let paper= confirm("do you want to add a uppercase letter");
    console.log (paper)
    let scissors= confirm("do you want to add a number");
    console.log (scissors)
 
    // added the charArray variable
    var charArray = []
    // made if statements for each part of the password
    // had to add in each possible choice for the charArrays
    if (rock == true ){
     charArray += "R"
    }
    if (paper== true ){
     charArray += "P"
    } 
    if (scissors == true ){
     charArray += "S"
    }
    
    // made a password variable 
    // then put in a for loop
   var game = ""
   for (var x = 0; x < passwordLength; x++){
     console.log (charArray)
     var rannum = Math.random();
     console.log (rannum)
     var ranidx = rannum * charArray.length
     console.log (ranidx)
     var rouranidx = Math.floor(ranidx)
     game += charArray [rouranidx] 
   
   return game
   }
   
   
   // Get references to the #generate element
   var generateBtn = document.querySelector("#generate");
   
   // Write password to the #password input
   function writePassword() {
     var password = generatePassword();
     var passwordText = document.querySelector("#password");
   
     passwordText.value = password;
   
   }
   
   // Add event listener to generate button
   generateBtn.addEventListener("click", writePassword);
}