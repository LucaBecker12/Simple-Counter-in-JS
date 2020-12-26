function decrease() {
    var obj = document.getElementById("countVar");
    var number = parseInt(obj.textContent);
    obj.innerHTML = number - 1;

    write(obj, number - 1);
}

function reset() {
    var obj = document.getElementById("countVar");
    obj.innerHTML = 0;
    
    
}

function increase() {
    var obj = document.getElementById("countVar");
    var number = parseInt(obj.textContent);
    write(obj, number + 1);
}

function write(obj, number) {
    if (number > 0) {
        obj.innerHTML = (number).toString().fontcolor("green");
    } else if (number< 0) {
        obj.innerHTML = (number).toString().fontcolor("red");
    } else {
        obj.innerHTML = number;
    }
}