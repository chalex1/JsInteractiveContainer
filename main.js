//alert("mainjs")


var iframe = document.getElementById('ifid');
var evaluatebtn = document.getElementById('evaluate');
var jsTextArea = document.getElementById('jsTextArea');


evaluatebtn.onclick = function(){
var doc = iframe.contentDocument;

var text = ["<script>",jsTextArea.value,"</script>"].join("");
doc.open();
doc.writeln(text);
doc.close();
};



