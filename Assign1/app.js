var calc = process.argv[2];
var radius = process.argv[3];

var calculations = require("./calc");


if ( calc == "p" ){
    console.log(calculations.perimeter(radius));
}else if ( calc == "v" ){
        console.log(calculations.volume(radius));
}else if ( calc == "a" ){
    console.log(calculations.area(radius));
}else{
    console.log("Please please re-run the app selecting either: ");
    console.log("p for perimeter")
    console.log("a for area")
    console.log("v for volume")
}
