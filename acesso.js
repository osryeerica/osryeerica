let eFuncionario = false;
let eMaiordeidade = true;
let temConvite = false;

if (eFuncionario || (eMaiordeidade && temConvite)) {
    console.log("Acesso permitido");
} else {
    console.log("Acesso negado");
}