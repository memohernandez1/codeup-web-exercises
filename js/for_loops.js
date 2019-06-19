//Multiplication exercise

function showMultiplicationTable(input) {
     for (var i = 0; i <=10; i++) {
         console.log(i + ' x ' + input + " = " + (input * i) );
     }
 }

 console.log(showMultiplicationTable(7));


 console.log('7 x 1 = 7');
 console.log('7 x 2 = 14');
 var input = 7;
 var input = prompt("give me a number");
 for (var i = 0; i <= 10; i+=1) {
         console.log(input+ 'x'+ (input * i));
     }

// Exercise (3)

 var randomNum = Math.floor((Math.random()*200)+1);

 console.log('this is the first number: ' + randomNum);

 for (var i = 1; i <= 10; i++) {
     randomNum += 10;
     if (randomNum % 2 === 0) {
         console.log(randomNum + ' is even: ');
     }
     if (randomNum % 2 !== 0) {
         console.log(randomNum + ' is odd: ');
     }
     randomNum -= 1;
 }

// Exercise (4)

for (var i = 1; i <=9; i++) {
    console.log(i);
     var output ="";
     for (var j = 1 ; j <= i; j += 1) {
         output += i;
     }
     console.log(output);
 }


    for (var i = 1; i <= 9; i++) {
        i = i.toString();
        console.log(i.repeat(i));
    }

// Exercise (5)

for (var x = 100; x >= 5; x -= 5) {
    console.log(x);
}

