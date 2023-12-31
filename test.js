"use strict";
// question2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var nameOfFriends = "Ahsan";
console.log("Hello ".concat(nameOfFriends, ", would you like to learn some Python today?"));
// question3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var nameFormat = "Ahsan";
var toUpperCase = nameFormat.toUpperCase();
var toLowerCase = nameFormat.toLowerCase();
var toTitleCase = nameFormat.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
console.log("".concat(nameFormat, " UpperCased: ").concat(toUpperCase, " ,").concat(nameFormat, " LowerCased: ").concat(toLowerCase, ", TitleCased:").concat(toTitleCase));
// question4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
var famousPerson = "Albert Einstein";
var quote = "Learn from yesterday, live for today, hope for tomorrow..";
console.log("".concat(famousPerson, " once said : \"").concat(quote, "\""));
// question5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_Person = "William Shakespeare";
var myMessage = "To be or not to be, that is the question.";
console.log("My Message To ".concat(famous_Person, " : ").concat(myMessage));
// question6
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var strippedName = "Ahsan";
var strippedName2 = "Mohsin";
console.log("Name Is In Next Line  \n ".concat(strippedName, " \t ").concat(strippedName2, " "));
// question7
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
// question8
// You should create four lines that look like this: console.log(5 + 3)
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
// question9
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favNumber = 18;
console.log("Ahsan's Favourite Number Is ".concat(favNumber));
// question10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// program 1
// here we've first initialized the variable with type and stored string data in it.
var nameOfFriend = "Ahsan";
//  here we have printed the output with variable in the middle by using ${} syntax. 
console.log("Hello ".concat(nameOfFriend, ", would you like to learn some Python today?"));
// program 2
var nameFormatting = "Ahsan";
// in this line we converted variable into upper and lowercases
var toUpperCased = nameFormatting.toUpperCase();
var toLowerCased = nameFormatting.toLowerCase();
// we've used replace(/\b\w/b) command to select the fisrt alphabet  every letter then used function to uppercase the particular charecter.
var toTitleCased = nameFormatting.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
// here we've printed the desired outputs.
console.log("".concat(nameFormatting, " UpperCased: ").concat(toUpperCased, " ,").concat(nameFormatting, " LowerCased: ").concat(toLowerCased, ", TitleCased:").concat(toTitleCased));
// question11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var myOtherFriends = ['Ahsan', 'Ahmed', 'Mohsin', 'Ali', 'Sami', 'Hamza'];
for (var _i = 0, myOtherFriends_1 = myOtherFriends; _i < myOtherFriends_1.length; _i++) {
    var friend = myOtherFriends_1[_i];
    console.log("One Of My Friend is ".concat(friend));
}
// question12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var myFriends = ['Ahsan', 'Ahmed', 'Mohsin', 'Ali', 'Sami', 'Hamza'];
for (var _a = 0, myFriends_1 = myFriends; _a < myFriends_1.length; _a++) {
    var friend = myFriends_1[_a];
    console.log("Hello ".concat(friend, ", hope you're doing fine "));
}
// question13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var myFavTranspotation = ["airline", "train", "Jeep", "taxi", "R6 Bike"];
console.log("I would like to travel in ".concat(myFavTranspotation[0]));
console.log("I would like to travel with my friends in ".concat(myFavTranspotation[1]));
console.log("I would like to travel intercity in  ".concat(myFavTranspotation[2]));
console.log("I would like to go mall in ".concat(myFavTranspotation[3]));
console.log("I would like to travel for fun in my ".concat(myFavTranspotation[4]));
// question14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner./
var myFriendsIWantToInviteOnSecondDinner = ['Hannan', 'Mannan', 'Muhammad', 'Muzammil', 'Waseem'];
for (var _b = 0, myFriendsIWantToInviteOnSecondDinner_1 = myFriendsIWantToInviteOnSecondDinner; _b < myFriendsIWantToInviteOnSecondDinner_1.length; _b++) {
    var friend = myFriendsIWantToInviteOnSecondDinner_1[_b];
    console.log("Hello ".concat(friend, ", hope you're doing fine, would you join me on dinner on this weekend "));
}
// question15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
var myFriendsIWantToInviteOnThirdDinner = ['Hannan', 'Mannan', 'Muhammad', 'Muzammil', 'Waseem'];
console.log(" \n ".concat(myFriendsIWantToInviteOnThirdDinner[2], " will not be able to come  \n"));
myFriendsIWantToInviteOnThirdDinner.splice(2, 1);
myFriendsIWantToInviteOnThirdDinner.push("Muzammil");
for (var _c = 0, myFriendsIWantToInviteOnThirdDinner_1 = myFriendsIWantToInviteOnThirdDinner; _c < myFriendsIWantToInviteOnThirdDinner_1.length; _c++) {
    var friend = myFriendsIWantToInviteOnThirdDinner_1[_c];
    console.log("Hello ".concat(friend, ", hope you're doing fine, would you join me on dinner on this weekend "));
}
// question16
//  More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
var myFriendsIWantToInvite = ['Hannan', 'Mannan', 'Muhammad', 'Muzammil', 'Waseem'];
console.log(" \n ".concat(myFriendsIWantToInvite[2], " will not be able to come  \n"));
myFriendsIWantToInvite.splice(2, 1);
myFriendsIWantToInvite.push("Muzammil");
//   to add the guest in the begining of array
myFriendsIWantToInvite.unshift("waseem");
//   to add the guest in the begining of array
myFriendsIWantToInvite.push("muhammad");
for (var _d = 0, myFriendsIWantToInvite_1 = myFriendsIWantToInvite; _d < myFriendsIWantToInvite_1.length; _d++) {
    var friend = myFriendsIWantToInvite_1[_d];
    console.log("Hello ".concat(friend, ", hope you're doing fine, would you join me on dinner on this weekend "));
}
console.log("Hey guys, I can only invite  found the bigger table so now I can invite you'll , happy dinner :)");
// question 17
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var myCoolFriendsIWantToInvite = ['Hannan', 'Mannan', 'Muhammad', 'Muzammil', 'Waseem'];
console.log("Due to limited space we are inviting only few members");
while (myCoolFriendsIWantToInvite.length > 2) {
    var uninvitedFriend = myCoolFriendsIWantToInvite.pop();
    console.log("sorry ".concat(uninvitedFriend, " you're not invited now"));
}
for (var _e = 0, myCoolFriendsIWantToInvite_1 = myCoolFriendsIWantToInvite; _e < myCoolFriendsIWantToInvite_1.length; _e++) {
    var invitedFriend = myCoolFriendsIWantToInvite_1[_e];
    console.log("dear ".concat(invitedFriend, " , you're still invited "));
}
myCoolFriendsIWantToInvite.pop();
myCoolFriendsIWantToInvite.pop();
console.log(myCoolFriendsIWantToInvite);
// question 18
// Seeing the World: Think of at least five places in the world you’d like to visit.
var locations = ["Saudi Arabia", "Berlin", "Turkey", "America"];
console.log("OriginalOrder");
console.log(locations);
console.log("AlphabeticalOrder");
var alphabeticalOrder = __spreadArray([], locations, true).sort();
console.log(alphabeticalOrder);
console.log("OriginalOrder Again");
console.log(locations);
console.log("ReverseOrder");
var reverseAlphabeticalOrder = (__spreadArray([], locations, true).sort(function (alphabet, reverse) { return reverse.localeCompare(alphabet); }));
console.log(reverseAlphabeticalOrder);
console.log("OriginalOrder Again");
console.log(locations);
console.log("ReversedOrder");
var reversedOrder = __spreadArray([], locations, true).reverse();
console.log(reversedOrder);
console.log("ReversedAgain");
var reversedOrderAgain = __spreadArray([], reversedOrder, true).reverse();
console.log(reversedOrderAgain);
console.log("SortedOriginalError");
var sortedArray = locations.sort();
console.log(sortedArray);
// question 19
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
var mySchoolFriendsIWantToInvite = ['Hannan', 'Mannan', 'Muhammad', 'Muzammil', 'Waseem'];
while (mySchoolFriendsIWantToInvite.length > 2) {
    var uninvitedFriend = mySchoolFriendsIWantToInvite.pop();
}
var countArray = [];
for (var _f = 0, mySchoolFriendsIWantToInvite_1 = mySchoolFriendsIWantToInvite; _f < mySchoolFriendsIWantToInvite_1.length; _f++) {
    var invitedFriend = mySchoolFriendsIWantToInvite_1[_f];
    countArray.push(invitedFriend);
}
console.log(countArray.length);
// question 20
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var progrmmmingLanguages = ['c++', 'c', 'c#', 'java', 'javascript', 'ruby', 'php', 'css', 'python'];
for (var _g = 0, progrmmmingLanguages_1 = progrmmmingLanguages; _g < progrmmmingLanguages_1.length; _g++) {
    var language = progrmmmingLanguages_1[_g];
    console.log(language);
}
var newUser = {
    DBnumber: 180,
    userName: "Fauz",
    email: 'fauz@gmail.com',
    password: 123456789,
    isAdmin: true
};
console.log(newUser);
//question 21
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// storing number in string array for error
// let myFriendsIWantToInvite17: string[] = ['Hannan' , 123, 'Muhammad' , 'Muzammil' , 'Waseem']
var myFriendsIWantToInvite17 = ['Hannan', 'Muhammad', 'Muzammil', 'Waseem'];
console.log(myFriendsIWantToInvite17);
// question 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
var racingCar = 'Formula';
console.log("Is car == 'Formula'? I predict True.");
console.log(racingCar == 'subaru');
var anime = 'onePiece';
console.log("Is anime == 'subaru'? I predict True.");
console.log(anime == 'onePiece');
var bestFootballer = 'Messiii';
console.log("Is bestFootballer == 'Messiii'? I predict True.");
console.log(bestFootballer == 'Messiii');
var mySibling = 'Ahsan';
console.log("Is mySibling == 'talha'? I predict True.");
console.log(mySibling == 'talha');
var bike = 'yamahaR6';
console.log("Is bike == 'yamahaR6'? I predict True.");
console.log(bike == 'yamahaR6');
var city = 'karachi';
console.log("Is city == 'karachi'? I predict True.");
console.log(city == 'lahore');
var favColor = 'Blue';
console.log("Is favColor == 'Blue'? I predict True.");
console.log(favColor == '');
var occupation = 'programming';
console.log("Is occupation == 'programming'? I predict True.");
console.log(occupation == 'gardening');
var favCountry = 'Saudia Arabia';
console.log("Is favCountry == 'Saudia Arabia'? I predict True.");
console.log(favColor == '');
var favShow = 'Intersteller';
console.log("Is favShow == 'intersteller'? I predict True.");
console.log(favShow == 'indianaJhons');
// question 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
var num2 = 2;
console.log(num2 == 3);
var string2 = '2';
console.log(string2 == '2');
var one = 1;
console.log(one != 1);
var anotherOne = '1';
console.log(anotherOne === '1');
var word = "Ahsan";
var newWord = word.toLowerCase();
console.log(newWord === "ahsan");
console.log(11 < 12);
console.log(11 > 12);
console.log(11 >= 12);
console.log(11 <= 12);
var firstPerson = 'omerShafiq';
var secondPerson = 'omerIkram';
if (firstPerson[0] && secondPerson[0] == 'o') {
    console.log("both omer start fro 'O'");
}
if (firstPerson[0] || secondPerson[0] == 'o') {
    console.log("atleast one started from'O'");
}
if (firstPerson.length > secondPerson.length) {
    console.log("".concat(firstPerson, " name is bigger"));
}
else {
    console.log("".concat(secondPerson, " name is bigger"));
}
var myFriendsIWantToInvite1 = ['Hannan', 'Muhammad', 'Muzammil', 'Waseem'];
for (var _h = 0, myFriendsIWantToInvite1_1 = myFriendsIWantToInvite1; _h < myFriendsIWantToInvite1_1.length; _h++) {
    var searchingFriend = myFriendsIWantToInvite1_1[_h];
    if (searchingFriend === "Ahsan") {
        console.log("".concat(searchingFriend, " is present in array at index "));
    }
    else {
        console.log("Ahsan aint present ");
        break;
    }
}
// question 25;
// Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
var alienColor = "green";
if (alienColor == "green") {
    console.log("player earned 5 points");
}
var anotherAlienColor = "Red";
if (anotherAlienColor == "green") {
    console.log("player earned 5 points");
}
// question 26
// Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
var gameAlienColor = "green";
if (gameAlienColor == "green") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
var anotherGameAlienColor = "Red";
if (anotherGameAlienColor == "green") {
    console.log("player earned 5 points");
}
else {
    console.log("player earned 10 points");
}
// question 27
// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
var gameAlienColor31 = "green";
if (gameAlienColor31 == "green") {
    console.log("player earned 5 points");
}
else if (gameAlienColor31 == "yellow") {
    console.log("player earned 10 points");
}
else if (gameAlienColor31 == "red") {
    console.log("player earned 15 points");
}
var gameAlienColor32 = "yellow";
if (gameAlienColor32 == "green") {
    console.log("player earned 5 points");
}
else if (gameAlienColor32 == "yellow") {
    console.log("player earned 10 points");
}
else if (gameAlienColor32 == "red") {
    console.log("player earned 15 points");
}
var gameAlienColor33 = "red";
if (gameAlienColor33 == "green") {
    console.log("player earned 5 points");
}
else if (gameAlienColor33 == "yellow") {
    console.log("player earned 10 points");
}
else if (gameAlienColor33 == "red") {
    console.log("player earned 15 points");
}
// questiom 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, 
var person = 2;
if (person < 2) {
    console.log("person is baby");
}
else if (person >= 2 && person <= 4) {
    console.log("person is toddler");
}
else if (person >= 4 && person <= 13) {
    console.log("person is kid");
}
else if (person >= 13 && person <= 20) {
    console.log("person is teenagers");
}
else if (person >= 20 && person <= 65) {
    console.log("person is adult");
}
else if (person >= 65) {
    console.log("person is elder");
}
else {
    console.log("your given value is wrong");
}
// question 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var favFruits = ['mango', 'peach', 'pineapple', 'banana', 'apple'];
for (var _j = 0, favFruits_1 = favFruits; _j < favFruits_1.length; _j++) {
    var fruits = favFruits_1[_j];
    if (fruits == 'mango') {
        console.log('You really like mangos!');
    }
    if (fruits == 'peach') {
        console.log('You really like peach!');
    }
    if (fruits == 'pineapple') {
        console.log('You really like pineapple!');
    }
    if (fruits == 'banana') {
        console.log('You really like bananas!');
    }
    if (fruits == 'apple') {
        console.log('You really like apples!');
    }
}
// question 30
// Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usersOfSite = ['Ahsan', 'owais', 'basit', 'fauz', 'admin'];
for (var _k = 0, usersOfSite_1 = usersOfSite; _k < usersOfSite_1.length; _k++) {
    var user = usersOfSite_1[_k];
    if (user == 'admin') {
        console.log('Hello admin, would you like to see a status report?');
        break;
    }
    else if (user != 'admin') {
        console.log("Welcome ".concat(user, ", how are you"));
    }
}
