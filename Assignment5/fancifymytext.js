

document.getElementById("biggerButton").onclick = function () {
    document.getElementById('textArea').style.fontSize = "24pt";
    alert("Bigger!");
};

document.getElementById("fancy").onclick = function () {
    document.getElementById('textArea').style.color = "blue";
    document.getElementById('textArea').style.textDecoration = "underline";
};

document.getElementById("boring").onchange = function () {
    document.getElementById('textArea').style.color = "black";
    document.getElementById('textArea').style.textDecoration = "none";
};

document.getElementById("moo").onclick = function () {
    let textarea = document.getElementById('textArea');
    textarea.style.color = "black";
    textarea.style.textTransform = "uppercase";

    let str = textarea.value.split(".");
    let str1 = str.join("-Moo");
    textarea.value = str1;
};