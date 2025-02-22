// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
function sum( x, y ){
    return x + y; 
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
var resultFunction = sum( 7, 8 ) + 5; 

// Qual o valor atualizado dessa variável?
console.log(resultFunction);

// Declare uma nova variável, sem valor.
var x = 0; 

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/
function addNumber(){
    x += 3;
    return 'O valor da variável agora é ' + x;
}

// Invoque a função criada acima.
console.log(addNumber());

    
// Qual o retorno da função? (Use comentários de bloco).
/*
O valor da variável agora é 3

*\

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/
function argumentos( a, b, c ){
    if( a === undefined || b === undefined || c === undefined ){
        return "Preencha todos os valores corretamente!";
    }
return (a * b * c) + 2;   
}

// Invoque a função criada acima, passando só dois números como argumento.
console.log(argumentos( 4, 8 ))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
console.log(argumentos( 4, 8, 9 ))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
//290

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/
function ifElse( a, b, c ){
    if( a !== undefined && b === undefined && c === undefined ){
        return a;
    } else if( a !== undefined && b !== undefined && c === undefined ){
        return a + b; 
    } else if( a !== undefined && b !== undefined && c !== undefined){
        return ( a + b ) / c; 
    } else if( a === undefined && b === undefined && c === undefined){
        return false;
    } 
    return null;
} 

// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
console.log(ifElse());
console.log(ifElse(6));
console.log(ifElse( 6, 8 ));
console.log(ifElse( 6, 8, 2 ));
