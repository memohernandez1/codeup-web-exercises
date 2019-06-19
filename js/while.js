// (2)

var a = 2;
while(a <= 65536){
    console.log(a);
    a += a;
}

// (3)

 var allCones = Math.floor(Math.random() * 50) + 50;
    Math.floor(Math.random() * 5) + 1;

    do {
     console.log("I have " + allCones + " left to sell" );
        var conesToSell = Math.floor(Math.random() * 7) + 1;

        if (conesToSell <= allCones) {

            console.log("I sold " + conesToSell);
            allCones = allCones - conesToSell;
     } else if (allCones === 0) {
         console.log('I can go home.');
     }
         else {
         console.log('I don\'t have ' +conesToSell+ 'cones to sell');
     }

} while(allCones !== 0);




