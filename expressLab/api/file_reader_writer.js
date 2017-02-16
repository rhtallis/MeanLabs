module.exports = function (filename) {

    // **********************************************
    // Load the Json objects
    // **********************************************
    var url = filename + ".json"
    var citieshtml;
    var req = new XMLHttpRequest()
    req.open('GET', url, false)
    req.onreadystatechange = function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                var importedObjects = eval(req.responseText)

                for (var object in importedObjects) {
                    citieshtml += "<p>" + object[1] + " - " + object[0] + "</p>";
                }
            } else {
                alert(req.readyState)
            }
        }
    }
    req.send(null)
    return citieshtml;
}