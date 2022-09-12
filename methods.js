


var numbers = [1, 2, 3, 4, 5]

// Para adicionar um elemento no final do Array = numbers.push(elemento).

// Para adicionar um elemento no inicio do Array = numbers.unshift(elemento).

// Para remover o ultimo elemento do Array = numbers.pop(elemento).

// Para saber a posição de um elemento dentro do Array = numbers.indexOf(Elemento Que Você Quer Saber A Posição).

/* O Map executa uma determinada função em todos os itens da lista, e retorna a lista com a função aplicada
Exemplo: Digamos que você tenha que multiplicar todos os números dentro do array por 2 */ 

let Multiplicator = numbers.map(function(NomeDaFunçao){
    return numbers * 2
})
