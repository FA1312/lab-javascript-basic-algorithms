/*Iteration 1: Names and Input
1.1 Create a variable `hacker1` with the driver's name.*/

let hacker1 = "Mika";

//1.2 Print `"The driver's name is XXXX"`.

console.log(`The driver's name is ${hacker1}`)

//1.3 Create a variable `hacker2` with the navigator's name.

let hacker2 = "Francesco"

//1.4 Print `"The navigator's name is YYYY"`.

console.log(`The navigator name is ${hacker2}`)
/*Iteration 2: Conditionals
2.1. Depending on which name is longer, print:
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.*/
if(hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has " + hacker1.length + "characters")
} else if (hacker1.length < hacker2.length) {
  console.log("It seems that the navigator has the longest name, it has " + hacker2.length + " characters")
} else {
  console.log("Wow, you both have equally long names, " + hacker1.length + "characters!")
}

/*Iteration 3: Loops
3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"*/

console.log(hacker1.toUpperCase().split('').join(' '));

/* or */

let new_str = "";

for (let i = 0; i < hacker1.length; i++) {
    new_str += hacker1[i].toUpperCase() + " ";
}
console.log(new_str);

/*3.2 Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ" */

console.log(hacker2.split('').reverse().join(''));


/* or */

    let rev_str = "";
    for( let i = hacker2.length-1 ;i >= 0 ;i--)
    {
      rev_str+= hacker2[i];
    }
    // return reverse string
    console.log(rev_str);


/*3.3 Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name? */

let lexic = hacker1.localeCompare(hacker2);
if ( lexic === -1 ) {
  console.log(`The driver's name goes first.`)
} else if ( lexic === 1 ) {
  console.log(`Yo, the navigator goes first definitely.`)
} else { console.log(`What?! You both got the same name?`)}


/*Bonus Time!
Bonus 1:
Go to lorem ipsum generator and:

Generate 3 paragraphs. Store the text in a variable type of string.
Make your program count the number of words in the string.
Make your program count the number of times the Latin word et appears.*/

let baconIpsum = "Bacon ipsum dolor amet chuck jowl tail picanha sirloin boudin meatloaf ground round. Shank short loin hamburger pork chop, et shankle pork loin capicola ribeye meatloaf meatball porchetta.Boudin pork belly turducken cupim shank ribeye capicola ausage venison picanha tri-tip chicken rump swine biltong. Beef ribs pork pork belly biltong jowl doner alcatra ham porchetta pig corned beef pork chop pork loin. Beef ribs rump drumstick meatloaf pig boudin ball tip andouille. et et Porchetta tri-tip frankfurter jerky. Beef ribs short loin tail, frankfurter strip steak biltong rump buffalo. Pork loin meatloaf tri-tip, corned beef frankfurter picanha jowl ground round bresaola short ribs. Tongue beef tri-tip pork loin tenderloin capicola. T-bone leberkas et swine pork chop chuck."

let prgSplit = baconIpsum.split(' ');
console.log(prgSplit.length);

let etCount = 0;
for ( let i = 0; i < prgSplit.length; i++) {
  if ( prgSplit[i] === 'et') etCount += 1;
}
console.log(etCount);

/* Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

"A man, a plan, a canal, Panama!"
"Amor, Roma"
"race car"
"stack cats"
"step on no pets"
"taco cat"
"put it up"
"Was it a car or a cat I saw?" and "No 'x' in Nixon". */

let phraseToCheck = "No 'x' in Nixon";
phraseToCheck = phraseToCheck.replace(/[^a-zA-Z0-9]/g, "");
let reverse = "";
for (let i = phraseToCheck.length - 1; i >= 0; i--) {
  reverse += phraseToCheck[i];
  reverse = reverse.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
}
if (reverse === phraseToCheck.toLowerCase()) {
  console.log("passed string is palindrome ");
} else {
  console.log("passed string is not palindrome");
}


/*Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' smiley*/