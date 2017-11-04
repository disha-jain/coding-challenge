
console.log("Hello");
console.log(array);

function getText(){
    // read text from URL location
    var request = new XMLHttpRequest();
    request.open('GET', 'http://www.puzzlers.org/pub/wordlists/pocket.txt', true);
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
var array = $.csv.toObjects(text);