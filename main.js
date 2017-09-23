//alert("mainjs")


var iframe = document.getElementById('ifid');
var evaluatebtn = document.getElementById('evaluate');
var jsTextArea = document.getElementById('jsTextArea');
var timeoutId;

var callBackF = function (o) {

    clearTimeout(timeoutId);
    alert(o.r);
    if (cons)
        alert(o.c.join(" /n"));
}


evaluatebtn.onclick = function () {
    var doc = iframe.contentDocument;
    timeoutId = setTimeout(function () {
        alert("timeout");
        iframe.src = "";

    }, 5000);
    //console.log = function (m) {c.push(m)}
    var text = ["<script>", jsTextArea.value, "var c = [];   ", " window.parent.callBackF({r:result,c: c}); ", "</script>"].join(" ");

    doc.open();
    doc.writeln(text);
    doc.close();

};



