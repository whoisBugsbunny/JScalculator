var ref;

function auto() {
    var au = document.getElementById("auto");
    var btn = document.getElementById("submit");
    if (au.checked == true) {
        btn.style.display = "none";
        ref = setInterval(calculate, 500);
    } else {
        btn.style.display = "inline";
        clearInterval(ref);
    }
}

function calculate() {
    var x = parseFloat(document.getElementById("num1").value);
    var y = parseFloat(document.getElementById("num2").value);
    var op = parseFloat(document.getElementById("operation").value);
    if (op == 1) {
        var z = x + y;
    } else if (op == 2) {
        var z = x - y;
    } else if (op == 3) {
        var z = x * y;
    } else if (op == 4) {
        var z = x / y;
    } else if (op == 5) {
        var z = Math.pow(x, y);
    } else {
        alert("something went wrong refresh the page!");
    }
    document.getElementById("result").innerHTML = z;
}

// main calculate
var a = 0;
var b = 0;
var c = 0;
var tem = 0;
var op = '';
var que1 = '';
var once = true;

function maincal() {
    que1 = document.getElementById("question").value;
    var res = document.getElementById("result1");
    var arr = que1.split("");
    arr.push("end");
    for (let i = 0; i < arr.length; i++) {

        if (!(parseInt(arr[i]) | parseFloat(arr[i]) | arr[i] == "0")) {
            a = parseFloat(arr.slice(tem, i).join(''));
            tem = i + 1;
            if (!op == '') {
                if (op == "+") {
                    c = b + a;
                    b = c;
                }
                if (op == "-") {
                    c = b - a;
                }
                if (op == "*") {
                    c = b * a;
                }
                if (op == "/") {
                    c = b / a;
                }
                if (op == "^") {
                    c = Math.pow(b, a);
                }
            } else {
                c = a;
            }
            if (arr[i] == "+") {
                op = '+';
            }
            if (arr[i] == "-") {
                op = '-';
            }
            if (arr[i] == "*") {
                op = '*';
            }
            if (arr[i] == "/") {
                op = '/';
            }
            if (arr[i] == "^") {
                op = '^';
            }

            if (once == true) {
                b = a;
                once = false;
            } else {
                b = c;
            }

        }
    }

    que1 == "" ? res.innerHTML = "0" : isNaN(c) ? res.innerHTML = op : res.innerHTML = c;
    tem = 0;
    op = '';
}

setInterval(maincal, 500);

function printline() {
    document.getElementById("res5").innerHTML = document.getElementById("res4").innerHTML;
    document.getElementById("res4").innerHTML = document.getElementById("res3").innerHTML;
    document.getElementById("res3").innerHTML = document.getElementById("res2").innerHTML;
    document.getElementById("res2").innerHTML = document.getElementById("res1").innerHTML;
    document.getElementById("res1").innerHTML = que1 + " = " + c;
}

function onenter(event) {
    var x = event.key;
    if (x == "Enter") {
        maincal();
        printline();
    }
}