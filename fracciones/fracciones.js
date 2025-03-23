let f1n, f1d, f2n, f2d;
let operation;
let result;
let n1 = 0;
let n2 = 0;

function generate() {
    [f1n, f1d] = randFrac(10, 20);
    [f2n, f2d] = randFrac(10, 20);

    operation = randElement([
        ["+", function (x, y) { return x + y }],
        ["-", function (x, y) { return x - y }],
        ["\\cdot", function (x, y) { return x * y }],
        ["\\div", function (x, y) { return x / y }]
    ]);

    result = operation[1](f1n / f1d, f2n / f2d);

    update()
}

function update() {
    n1 = document.getElementById("n1").valueAsNumber;
    n2 = document.getElementById("n2").valueAsNumber;

    if (!isInt(n1)) {
        n1 = "a"
    }
    if (!isInt(n2)) {
        n2 = "b"
    }

    regenerate()
}

function regenerate() {
    const equation = document.getElementById("equation");

    equation.innerHTML =
        "$$\\frac{" + f1n + "}{" + f1d + "}" +
        operation[0] +
        "\\frac{" + f2n + "}{" + f2d + "}=\\frac{" +
        n1 + "}{" + n2 + "}$$";

    MathJax.typeset();
}

const correctionProperties = [
    [
        Correction.MustBeInt
    ]
];

function verify() {
    
    if (!isInt(n1) || !isInt(n2)) {
        //correction.innerHTML = "Tienen que ser n&uacute;meros enteros";
        return "Tienen que ser numeros enteros";
    }

    if (n1 / n2 == result) {
        alert("Correcto!");
    } else {
        alert("Incorrecto!");
    }
}