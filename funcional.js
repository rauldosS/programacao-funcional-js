// Programação Funcional em JavaScript

/*
    Higher-Order Functions

    Funções que operam sobre outras funções ou as recebendo
    como parâmetro ou as retornando são chamadas de Higher-Order Functions.
*/

const calcular = function(operacao, valores) {
    return operacao(valores)
};

const somar = function(valores) {
    return valores.reduce((a, b) => a + b)
}

const subtrair = function(valores) {
    return valores.reduce((a, b) => a - b)
}

const multiplicar = function(valores) {
    valores.reduce((a, b) => a * b)
}

const valores = [1, 2, 3, 4]

calcular(somar, valores)
calcular(subtrair, valores)
calcular(multiplicar, valores)

/*
    Map
    
    Invoca um callback e retorna um novo array com o resultado
    desse callback aplicado em cada item do array inicial
*/

// Exemplo 01

const numbers = [1, 2, 3]

const square = function(x) {
    return x * x
}

const squaredNumbers = numbers.map(square) // [1, 4, 9]

// Exemplo 02

const estudantes = [
    { nome: 'Fábio', grade: 6 },
    { nome: 'Raul', grade: 4 },
    { nome: 'Carlos', grade: 9 }
];

const professores = [
    { nome: 'Maurício', salary: 2500 },
    { nome: 'Tiago', salary: 3700 },
    { nome: 'Herculano', salary: 1900 }
];

const Nome = function(objeto) {
    return objeto.nome
};

const Nomes = function(lista) {
    return lista.map(Nome)
};

Nomes(estudantes) // ["Anna", "John", "Maria"]
Nomes(professores) // ["Mark", "Todd", "Angela"]

/*
    Filter

    A função filter é bem semelhante ao map: ela também recebe um callback
    como parâmetro e também retorna um novo array, a única diferença é que
    filter, como o próprio nome diz, retorna um filtro dos elementos do array
    inicial baseado na função de callback.
*/

const numeros = [1, 4, 7, 10]
const MaiorQueQuatro = value => value > 4

const numerosMaiorQueQuatro = numeros.filter(MaiorQueQuatro); // [7, 10]

/*
    Reduce

    Uma das funções que mais gera dúvidas é o reduce. Ele recebe como
    parâmetro um callback e um valor inicial, com o objetivo de
    reduzir o array a um único valor.
    O cenário mais comum para explicar o reduce é uma soma:
*/

const numeros = [1, 2, 3]
const soma = (x, y) => x + y
const numerosSoma = numeros.reduce(soma, 0) // 6

/*
    Currying

    A técnica de transformar uma função com múltiplos parâmetros em
    uma sequência de funções que aceitam apenas um parâmetro é chamada
    de Currying.
*/

const saudacao = greet => name => greet + ' ' + name
const hello = saudacao('Hello')

hello('World') // Hello World
hello('Raul') // Hello Raul
