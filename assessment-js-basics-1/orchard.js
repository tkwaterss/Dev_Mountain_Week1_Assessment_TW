///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE
const daysOfTheWeek = 7;
let totalAcres = 0;
//creating a for loop that iterates 7 times (days of a week)
for (let i = 0; i < daysOfTheWeek; i++) {
    totalAcres += (fujiAcres[i] + galaAcres[i] + pinkAcres[i]); //on each iteration it sums the 3 fields acres collected and adds that too total Acres
}
console.log(`The total acres collected this week is ${totalAcres}.`); // log the total collected over the week




// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE
let averageDailyAcres = totalAcres / daysOfTheWeek; //average = total/increment ie. totalAcres/daysOfTheWeek
console.log(`The average daily acres collected is ${averageDailyAcres} per day.`); //log average to console





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) { //creating a while statment that will stop when acresLeft is 0 or less
    acresLeft -= averageDailyAcres //on each iteration subtract the average daily acres from acres left
    days++; //counting the days (iterations)
}
console.log(`It took ${days} days to farm the entire Orchard`); //log the days taken to reach 0 acres left
console.log(''); //Adding space between answers

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

//creating empty arrays for each type of apple
let fujiTons = [];
let galaTons = [];
let pinkTons = [];

//Creating a for loop that will iterate for the number of days in a week
for(let i = 0; i < daysOfTheWeek; i++) {
    //for each day and each type of apple we multiply the acres farmed by the tons per acre converstion. We then add this to the end of the new array.
    fujiTons.push(fujiAcres[i] * 6.5);
    galaTons.push(galaAcres[i] * 6.5);
    pinkTons.push(pinkAcres[i] * 6.5);
}
//logging the new arrays which display the tons of apples farms per day
console.log(`This week we collected ${fujiTons} of Fuji apples listed as tons per day.`);
console.log(`This week we collected ${galaTons} of Gala apples listed as tons per day.`);
console.log(`This week we collected ${pinkTons} of Pink apples listed as tons per day.`);
console.log(''); //adding space between answers







// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

//initializing the new variables
let fujiPounds = 0;
let galaPounds = 0;
let pinkPounds = 0;

// creating a for loop to iterate through each array while converting and summing the values to achieve a total pounds for each apple type
for (let i = 0; i < daysOfTheWeek; i++) {
    fujiPounds += fujiTons[i] * 2000;
    galaPounds += galaTons[i] * 2000;
    pinkPounds += pinkTons[i] * 2000;
}
// Just a fun alternate method using the .map() function to iterate the arrays
// fujiTons.map(x => fujiPounds += x * 2000);
// galaTons.map(x => galaPounds += x * 2000);
// pinkTons.map(x => pinkPounds += x * 2000);

//logging each total
console.log(`We collected ${fujiPounds} pounds of Fuji apples this week.`);
console.log(`We collected ${galaPounds} pounds of Gala apples this week.`);
console.log(`We collected ${pinkPounds} pounds of Pink apples this week.`);
console.log(''); //adding space between answers







// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE
//multiplying total pounds by price per pound for each apple type will result in the profit for each apple type
let fujiProfit = fujiPounds * fujiPrice;
let galaProfit = galaPounds * galaPrice;
let pinkProfit = pinkPounds * pinkPrice;

//logging profit for each apple type
console.log(`We made $${fujiProfit} from selling Fuji apples this week`);
console.log(`We made $${galaProfit} from selling Gala apples this week`);
console.log(`We made $${pinkProfit} from selling Pink apples this week`);
console.log('') //adding a space between answers






// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE
//summing the three profits together
let totalProfit = fujiProfit + galaProfit + pinkProfit;

//logging total profit
console.log(`We made a total of $${totalProfit} this week!`);

console.log("I think I want to work on this farm!");