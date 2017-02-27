module.exports = function(calc, radius){
    var calculations = require("./calc");
    var result = "";
    if ( calc == "p" ){
        console.log(calculations.perimeter(radius));
        result = calculations.perimeter(radius);
    }else if ( calc == "v" ){
            console.log(calculations.volume(radius));
            result = calculations.volume(radius);
    }else if ( calc == "a" ){
        console.log(calculations.area(radius));
        result = calculations.area(radius);
    }else{
        console.log("Please please re-run the app selecting either: ");
        console.log("p for perimeter")
        console.log("a for area")
        console.log("v for volume")
    }
    return result;
}