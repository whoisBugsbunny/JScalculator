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

function printline(q, r) {
    const rsdiv = document.getElementById("preres");
    rsdiv.insertAdjacentHTML('beforeend', `<p id="res1" class="result1">${q} = ${r}</p>`);
    rsdiv.scrollTop = rsdiv.scrollHeight;
}


function onenter(event) {
    ecode = event.keyCode;
    if (event.repeat) { return }
    const que = document.getElementById("question");
    const isnumber = (ecode >= 48 && ecode <= 57) || (ecode >= 96 && ecode <= 105);
    const isoperator = (([187, 189, 190, 191, 106, 107, 109, 110, 111].indexOf(ecode)) != -1);
    const isarrow = (ecode >= 37 && ecode <= 40);
    if (isnumber || isoperator || (event.key == "Enter") || ecode == 8 || isarrow) {
        if (event.key == "Enter") {
            var result;
            try {
                result = eval(que.value);
            } catch (err) {
                console.log(err.message);
                if (err.message == 'Unexpected end of input') {
                    result = eval(que.value.toString().slice(0, -1));
                } else {
                    return
                }
            }
            const res = document.getElementById("result1");
            res.innerText = result;
            printline(que.value, result);
        }
    } else {
        event.preventDefault();
    }
    // var keynum;
    // keynum = ecode;
    // console.log(keynum);
    if (ecode === 67) {
        event.preventDefault();
        que.value = '';
    }
    if (ecode === 72) {
        event.preventDefault();
        const rsdiv = document.getElementById("preres");
        rsdiv.innerHTML = '';
    }
}