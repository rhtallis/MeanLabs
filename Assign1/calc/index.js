module.exports.area = function(radius) {
    var PI = 3.14159265359;
    var area = (PI * radius * radius).toFixed(2);
    return area;
}

module.exports.perimeter = function(radius){
    var PI = 3.14159265359;
    var perimeter = (2 * PI * radius).toFixed(2);
    return perimeter;
}

module.exports.volume = function(radius){
    var PI = 3.14159265359;
    var volume = ((4 * PI * radius * radius * radius)/3).toFixed(2);
    return volume;
}
