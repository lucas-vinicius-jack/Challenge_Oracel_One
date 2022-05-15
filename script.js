const inputTexto = document.querySelector(".input-texto");
const mensagem = document.querySelector(".mensagem");

let matrizCodigo = [
    ["e","enter"],
    ["i","imes"],
    ["a","ai"],
    ["o","ober"],    
    ["u","ufat"],
];

function btnEncriptar(){
    const textoEncriptado = encriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage="none";
}


function encriptar(stringEncriptada){


    stringEncriptada = stringEncriptada.toLowerCase();

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDecriptar(){
    const textoEncriptado = decriptar(inputTexto.value);
    mensagem.value = textoEncriptado;
    mensagem.style.backgroundImage="none"
}

function decriptar(stringEncriptada){

    stringEncriptada = stringEncriptada.toLowerCase();

    for(i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][1])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }

    return stringEncriptada;

}

function btnCopiar(){
    let textoRecebido = document.getElementById("mensagem");
    textoRecebido.select();
    textoRecebido.setSelectionRange(0,99999);
    document.execCommand("copy");
}


