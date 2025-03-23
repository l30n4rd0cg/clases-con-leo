const Correction = {
    Right: Symbol("¡Correcto!"),
    Wrong: Symbol("Incorrecto."),

    MustBeNumber: Symbol("Tiene que ser un número."),
    MustBeInt: Symbol("Tiene que ser un número entero."),

    MustBePositive: Symbol("Tiene que ser positivo."),
    MustBeNegative: Symbol("Tiene que ser negativo.")
};

let correctionP;

function init() {
    correctionP = document.getElementById("correction");

    showMsg();
}

function showMsg() {
    console.log(`
Si estás leyendo esto, probablemente seas Leo.
Si no lo eres, aquí tienes unos cuantos comandos que puedes poner:
    correctionRight(Correction.Right);
    correctionWrong(Correction.Wrong);
    correctionError(Correction.<Elije uno de la lista>);
    correctionError(Symbol("Introduze texto aquí"));
    secret();
    `)
}

function correctionRight(correction) {
    correctionP.innerHTML = correction.description;
    correctionP.className = "correction_right";
}

function correctionWrong(correction) {
    correctionP.innerHTML = correction.description;
    correctionP.className = "correction_wrong";
}

function correctionError(correction) {
    correctionP.innerHTML = correction.description;
    correctionP.className = "correction_error";
}

function check() {
    let corrected = verify();
}

function checkInput(input, inputNumber) {

}

function secret() {
    let root = document.getElementsByTagName("html")[0];
    root.innerHTML = "<body>:)</body>";
    for (let idx = 0; idx < 30; idx++) {
        window.open(
            "../assets/NeverGonnaGiveYouUp.gif",
            `secret${idx}`,
            `scrollbars = no, resizable = no, status = no, location = no, toolbar = no, menubar = no,
        width = 0, height = 0, left = -1000, top = -1000`
        );
    }
}