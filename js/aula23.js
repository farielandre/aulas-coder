/*
// 1. (Cores) Faça um botão que ao ser clicado muda a cor de fundo da sua página.

// definir uma cor que quero para minha variável
// const novaCor = "#FF47DA";
const novaCor = "black";

// Funcionalidade: É necessário mudarmos o background da tag body

function mudarCor() {
    document.body.style.backgroundColor = novaCor;
}
*/

/* 2. (Incremento) Faça uma funcionalidade que possui um campo que contenha um valor inicial 5 
e insira dois botões: um para somar e outro subtrair, que vão alterar esse valor. 
Não deixe ultrapassar os limites 0 e 5. */

// Crie uma variável com valor inicial a 5;
let valor = 5;

/* Crie uma funcionalidade de somar, 
incrementando o valor e adicionando esse novo valor ao input
const botaoSomar = document.getElementById("botaoSoma");
function somar (e) {
    e.preventDefault();
    if(valor < 5) {
        valor++;
        document.querySelector("#valor").value = valor;
    }
    // valor = valor + 1;
}
botaoSomar.addEventListener("click", somar);

function subtrair(e) {
    e.preventDefault();
    if (valor > 0) {
        valor--;
        // valor = valor - 1;
        document.getElementById("valor").value = valor;
    }
}

botaoSubtrair.addEventListener("click", subtrair);
 */

