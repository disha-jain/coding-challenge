var rootFilePath = "https://disha-jain.github.io/coding-challenge/data/";

console.log(rootFilePath);

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', rootFilePath+"listings.csv", true);
    request.send(null);
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            var type = request.getResponseHeader('Content-Type');
            if (type.indexOf("text") !== 1) {
                return request.responseText;
            }
        }
    }
}
var text = getText();
console.log(text);
//var array = $.csv.toObjects(text);