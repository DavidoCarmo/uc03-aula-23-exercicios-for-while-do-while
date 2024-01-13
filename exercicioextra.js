// FOR - PARA ( inicializar var controle, condiçoes, incrementos)
// WHILE - enquanto (condiçoes verdadeiras)
// DO WHILE - faça enquanto condiçoes verdadeiras

//while deve ser usado quando nao temos certeza da condicoes e
//nao precisamos executar uma vez

//do while vai ser executado pelo menos uma vez para pode validar a condiçoes



const readline = require('readline-sync')

// const valor = readline.questionInt("informe um numero inteiro")

// while (valor > 0){
//     console.log("valor maior que zero")
//     break
// }

const senha = '123456';
let senhaValida = false; //flag
let vezes = 0;
 
do {
    const senhaDigitada = readline.question("Informe a senha: ")
    if (senha === senhaDigitada) {
        senhaValida = true;
    }
} while(!senhaValida)