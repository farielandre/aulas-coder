// console.log(document);
// console.log(document.head);
// console.log(document.body);

// let H1 = document.getElementById("app");
// console.log(H1);

// let H1 = document.getElementsByClassName("app");
// console.log(H1[0].value);

// let id = document.getElementById("h1");
// console.log(id);

// let classe = document.getElementsByClassName("classe");
// console.log(classe);

// console.log(classe[0]);

// let array = document.getElementsByTagName("h5");
// console.log(array[0].innerHTML);

// let container = document.querySelectorAll("input[name=genero]");
// console.log(container[0].value);

// let titulo = document.getElementById("app");
// titulo.innerText = "Olá, mundo";

// let h2 = document.getElementsByTagName("h2");
// console.log(h2[0].innerText);

// let p = document.getElementsByClassName("paragrafo");
// console.log(p[0].innerHTML)

// 1 maneira de actions com botao
// let botao1 = document.getElementById("botao")
// botao1.addEventListener("click", function () {
//     alert("Olá");
// })

// 2 maneira de actions com botao
// let botao1 = document.getElementById("botao")
// botao1.onclick = () => {
//     alert("oi");
// }

// 3 maneira de actions com botao
// function cliqueaqui(){
//     alert("Oi")
// }

// let acaoBotao = document.getElementById("botao")
// acaoBotao.addEventListener("click", function () {
//     alert("Fariel Minozzo");
// })

// Declare um array

let tarefas = [];

// input pra inserir
function acaoEnviar() {
    let entrada = document.getElementById("entrada");
    tarefas.push(entrada.value);
    entrada.value = "";
    console.log(tarefas);
 }

 //visualizar o array

 function acaoVisualizar() {
    console.log(tarefas);
 }

// funcao limpar

function acaoLimpar() {
    tarefas = [];
    acaoVisualizar();
 }

let botaoEnviar = document.getElementById("enviar");
botaoEnviar.addEventListener("click", acaoEnviar);

let botaoVisualizar = document.getElementById("visualizar");
botaoVisualizar.addEventListener("click", acaoVisualizar);

let botaoLimpar = document.getElementById("limpar");
botaoLimpar.addEventListener("click", acaoLimpar);

