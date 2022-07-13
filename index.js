function clickButton1() {
    let value1 = document.getElementById("view").value;
    value1 = value1+"1";
    document.getElementById("view").value = value1;
}
function clickButton2() {
    let value1 = document.getElementById("view").value;
    value1 = value1+"2";
    document.getElementById("view").value = value1;
}
function clickButton(number){
    document.getElementById("view").value += number;
}

function getResult() {
    let value1 = document.getElementById("view").value;
    let result = eval(value1);
    document.getElementById("view").value = result;
}