function classify0(Burbank){
    alert("Brace yourself for beautiful weather in " + Burbank.innerText);
}
function classify1(Chicago){
    alert("The Windy City of " + Chicago.innerText);
}
function classify2(Dallas){
    alert("Home of the worst team in the NFL, " + Dallas.innerText);
}
function dismiss() { 
    var element = document.querySelector("#fury"); 
    element.remove(); 
}
function c2f(loki) {
    return Math.round(9 / 5 * loki + 32);
}

function f2c(loki) {
    return Math.round(5 / 9 * (loki - 32));
}

function tempC(element) {
    console.log(element.value);
    for(var i=1; i<9; i++) {
        var lokiSpan = document.querySelector("#loki" + i);
        var lokiVal = parseInt(lokiSpan.innerText);
        if(element.value == "°C") {
            lokiSpan.innerText = f2c(lokiVal);
        } else {
            lokiSpan.innerText = c2f(lokiVal);
        }
    }
}