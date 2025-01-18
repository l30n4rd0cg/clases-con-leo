function gcd(x,y){
    return (!y) ? x : gcd(y, x % y);
}

function randFloat(min, max) {
    return Math.random() * (max - min) + min
}

function randInt(min, max) {
    return Math.floor(randFloat(min, max))
}

function randFrac(nMax, dMax) {
    let nRes, dRes;
    
    do {
        nRes, dRes = randInt(1, nMax), randInt(2, dMax);
    } while (gcd(nRes, dRes) != 1);

    return nRes, dRes;
}

function randElement(list) {
    return list[randInt(0, list.length)]
}

function isInt(x) {
    return x == Math.floor(x)
}