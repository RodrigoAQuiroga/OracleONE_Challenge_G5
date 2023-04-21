

function encriptar() {

    let msg = document.querySelector('.txt').value;

    let validar = /^[a-z ]*$/;

    let msgResult = validar.test(msg);

    const cifra = { a: ["ai", "a"], e: ["enter", "e"], i: ["imes", "i"], o: ["ober", "o"], u: ["ufat", "u"] }

    if (msgResult == false) {
        document.getElementById("resultadosEncriptado").innerHTML = "La oración no puede ser encriptada";
        document.getElementById("secondtextImg").innerHTML = "Recuerde que la oración a encriptar no puede contener mayusculas, números o simbolos";
    } else {

        let txto = msg.replace(/e/img, cifra.e[0]).replace(/i/img, cifra.i[0]).replace(/a/img, cifra.a[0]).replace(/o/img, cifra.o[0]).replace(/u/img, cifra.u[0]);

        document.getElementById("resultadosEncriptado").innerHTML = txto;
        document.getElementById("secondtextImg").innerHTML = "Su texto ha sido encriptado con éxito";
    }


}

function desencriptar() {

    let msg = document.querySelector('.txt').value;

    let validar = /^[a-z ]*$/;

    let msgResult = validar.test(msg);

    const cifra = { a: ["ai", "a"], e: ["enter", "e"], i: ["imes", "i"], o: ["ober", "o"], u: ["ufat", "u"] }

    if (msgResult == false) {
        document.getElementById("resultadosEncriptado").innerHTML = "La oración no puede ser desencriptada";
        document.getElementById("secondtextImg").innerHTML = "Recuerde que la oración a desencriptar no puede contener mayusculas, números o simbolos";
    } else {

        let txto = msg.replace(/enter/img, cifra.e[1]).replace(/imes/img, cifra.i[1]).replace(/ai/img, cifra.a[1]).replace(/ober/img, cifra.o[1]).replace(/ufat/img, cifra.u[1]);

        document.getElementById("resultadosEncriptado").innerHTML = txto;

        document.getElementById("secondtextImg").innerHTML = "Su texto ha sido desencriptado con éxito";

    }

}

function copiar() {


    let msg = document.querySelector('.txt').value;
    let copiado = document.getElementById("resultadosEncriptado").innerHTML;

    document.querySelector("#write").value = copiado;
    navigator.clipboard.writeText(copiado);
    alert("Se ha copiado el mensaje: " + copiado)


}