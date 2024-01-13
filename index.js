
// FOR - PARA ( inicializar var controle, condiçoes, incrementos)
// WHILE - enquanto (condiçoes verdadeiras)
// DO WHILE - faça enquanto condiçoes verdadeiras

//while deve ser usado quando nao temos certeza da condicoes e
//nao precisamos executar uma vez

//do while vai ser executado pelo menos uma vez para pode validar a condiçoes

const valor = readline.questionInt("informe um numero inteiro")




const readline = require('readline-sync')
  
  for(i= 1; i <=5; i++){
      todosnomes = readline.question("informe um nome")
    console.log(todosnomes)
  }




for(i= 0; i <=10; i++){
        todosnumeros = readline.question("informe um numero")
      
      todos2 = todosnumeros % 2;  
      if (todos2 == 0) {
        par = todos2
        console.log("par:")
       }
        else{
           impar = todos2
           console.log("impar:")
        }
}

const numeroTabuada = readline.questionInt('informe o numero inteiro de uma tabuada');
let vez = 1
while( vez <=10) {
  const resultado = vez * numeroTabuada
  console.log(`${numeroTabuada} x ${vez} = ${resultado}`);
  vez++;
}

// 4 - imprimir todos os valores impares entre 1 e 100 usando for;

  for(i= 1; i <=100; i++){
    if (i % 2 > 0){
      console.log(i)
    }
  }




