// document.createElement

// Criar elementos

// let paragrafo = document.createElement("p");
// paragrafo.className = "classeParagrafo";
// paragrafo.id = "idParagrafo";
// paragrafo.innerText = "Hello World!";

// inserir 
// let cabecalho = document.createElement("h2");
// cabecalho.innerText = "Olá";

// console.log(paragrafo);

// document.append
// paragrafo.append(cabecalho)
// document.body.append(paragrafo);


/* Exercício de adicionar ou remover elementos por JS
let meuNome = document.createElement("h1");
meuNome.innerText = "Fariel André";
document.body.append(meuNome);

let meuSobrenome = document.getElementById("meuSobrenome");
meuSobrenome.remove(); */

/*

// Exercício Lista de Tarefas

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
    let resultado = document.querySelector("#resultado");
    // resultado.innerText = "";
    for (let i = 0; i < tarefas.length; i++) {
        let item = document.createElement("li");
        item.innerText = tarefas[i];
        console.log(item);
        resultado.append(item);
    }
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

 */

 /*
 // Exercicio calculadora

 function calcular(operacao) {
    let numero1 = parseFloat(document.getElementById("entrada1").value); // 5.5 20.5
    let numero2 = parseFloat(document.getElementById("entrada2").value);
    let resultado;

    if (operacao === "+") {
        resultado = numero1 + numero2;
    } else if (operacao === "-") {
        resultado = numero1 - numero2;
    } else if (operacao === "*") {
        resultado = numero1 * numero2;
    } else if (operacao === "/") {
        resultado = numero1 / numero2;
    }
    // document.getElementById("resultado").innerText = "Resultado:" + resultado;
    console.log(resultado);
} */

