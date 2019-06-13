"use strict"

console.log("Hello from external Javascript");

alert('Welcome to my Website!');

var userColor = prompt("What is your favorite color?");

alert("Great, " + userColor + " " + "is my favorite color too!");

//Problem 3(a)

var rentalPerDayDollars = prompt("What does it cost to rent a movie per day?");

var littleMermaidDays = prompt("How many days did you rent the Little Mermaid?");
var brotherBearDays = prompt("How many days did you rent Brother Bear?");
var herculesDays = prompt("How many days did you rent Hercules?");

var totalRentalCost;

totalRentalCost = (+littleMermaidDays + +brotherBearDays + +herculesDays) * rentalPerDayDollars;

alert("The total rental cost is" + " " + "$" + totalRentalCost.toFixed(2));

//Problem 3(b)

var googleHourlyRateDollars = prompt("What is the hourly rate that Google pays?");
var amazonHourlyRateDollars = prompt("What is the hourly rate that Amazon pays?");
var facebookHourlyRateDollars = prompt("What is the hourly rate that Facebook pays?");

var googleHours = prompt("How many hours did you work for Google?");
var amazonHours = prompt("How many hours did you work for Amazon?");
var facebookHours = prompt("How many hours did you work for Facebook?");

var totalPayment;

totalPayment = googleHours * googleHourlyRateDollars;
totalPayment += amazonHours * amazonHourlyRateDollars;
totalPayment += facebookHours * facebookHourlyRateDollars;

alert("Total wage earned: $" + totalPayment.toFixed(2));

//Problem 3(c)

var classIsFull = confirm("Confirm that class is full");
var classSchedulesCheck = confirm("Class schedules check out");

var studentEnrolled = !classIsFull && classSchedulesCheck;

alert("Student enrollment status: " + studentEnrolled);

//Problem 3(d)

var numberOfItems = prompt("How many items did you buy?");
var offerIsValid = confirm("Offer is valid");
var isPremiumMember = confirm("Is a premium member");

var productDiscountApplied = (isPremiumMember || Number(numberOfItems) > 2) && offerIsValid;

alert("Product discount status: " + productDiscountApplied);