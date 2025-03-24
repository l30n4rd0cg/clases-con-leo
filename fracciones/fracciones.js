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
    const equation = document.getElementById("equation");

    equation.innerHTML =
        `$$
        \\frac{${f1n}}{${f1d}}
        ${operation[0]}
        \\frac{${f2n}}{${f2d}} = 
        \\frac{${n1}}{${n2}}
        $$`;

    MathJax.typeset();
}

const correctionProperties = [
    [
        Correction.MustBeInt
    ],
    [
        Correction.MustBeInt
    ]
];

function getInputs() {
    return [
        n1, n2
    ];
}

function verifyAnswer() {
    if (Math.abs(n1 / n2 - result) < 0.01) {
        return true;
    } else {
        return false;
    }
}