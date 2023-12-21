//OBJETOS
/*
let carro = {
    cor: "vermelho",
    marca: "BMW",
    preco: 430000,
    modelo: "BMW IX1",
    portas: 4,
    tipo: "Elétrico",
    airbag: true
}

console.log(carro);
console.log(carro.tipo);

let fruta = {
    nome: "pêra",
    cor: "verde",
    preco: 5,
    tipo: "fruta",
}

console.log(fruta);
*/

//ARRAY

// 1 exemplo
//  0  1  2   3 - posições
// let numeros = [1, 2, 3, 4]; // 4 - quantidade

//                  0             1        2
// let filaNomes = ["Jacqueline", "Sophia", "Amanda"];
// console.log(filaNomes.length); 3 pessoas
// console.log(`Antes do método ${filaNomes}`); 

// /* length
//  filaNomes.length -- quantidade dentro do array
// */

// //push
// filaNomes.push("Vanessa");

// console.log("Depois do método \n" + filaNomes)

//pop
// filaNomes.pop();

//shift
// filaNomes.shift();

//find

// 1 forma
// let nomeEncontrado1 = filaNomes.find(function (nome) {
//     return nome === "Sophia"
// })
// // 2 forma
// function isSophia (nome) {
//     return nome == "Sophia"
// }
// let nomeEncontrado = filaNomes.find(isSophia);
// console.log(nomeEncontrado);

/*SORT
filaNomes.sort(function(a, b) {
    return a.length - b.length;
});

console.log(filaNomes);

*/

// FOR EACH

/*
let filaNomes = ["Jacqueline", "Sophia", "Amanda"];

let resultadoForEach = filaNomes.forEach(function (item) {
    return item.toUpperCase();
})

let resultadoMap = filaNomes.map(function (item) {
    return item.toUpperCase();
})

console.log(`foreach: ${resultadoForEach}`)

console.log(`map: ${resultadoMap}`);
*/

/* EXERCICIO


let Item1 = {
    nome: "Tomate",
    cor: "vermelho",
    preço: 2,
    tipo: "fruta",
};

let Item2 = {
    nome: "Alface",
    cor: "verde",
    preço: 1,
    tipo: "verdura",
};

let Item3 = {
    nome: "Beringela",
    cor: "roxo",
    preço: 3,
    tipo: "verdura",
};

let Item4 = {
    nome: "Repolho",
    cor: "verde",
    preço: 4,
    tipo: "verdura",
};

let Item5 = {
    nome: "Cenoura",
    cor: "alaranjado",
    preço: 2,
    tipo: "legume",
}

let alimento = [Item1, Item2, Item3, Item4, Item5];

console.log(alimento);

*/

// CONDICIONAIS

/*
let sorvete = "chocolate";

if (sorvete == "chocolate") {
    console.log("Eu amo sorvete de chocolate!")
} else if (sorvete == "morango") {
    console.log("Sorvete de morango é demais!");
} else {
    console.log("Eu queria um sorvete de flocos");
}

*/

// FOR 

/*
let array = ["Ana", "Bia", "Cida"];

for( let index = 0; index < array.length; index ++) {
    const element = array[index];
    console.log(element);
}*/

let Item1 = {
    nome: "Tomate",
    cor: "vermelho",
    preço: 2,
    tipo: "fruta",
};

let Item2 = {
    nome: "Alface",
    cor: "verde",
    preço: 1,
    tipo: "verdura",
};

let Item3 = {
    nome: "Beringela",
    cor: "roxo",
    preço: 3,
    tipo: "verdura",
};

let Item4 = {
    nome: "Repolho",
    cor: "verde",
    preço: 4,
    tipo: "verdura",
};

let Item5 = {
    nome: "Cenoura",
    cor: "alaranjado",
    preço: 2,
    tipo: "legume",
};

let alimento = [Item1, Item2, Item3, Item4, Item5];

function nomesAlimento(alimento) {
    let index = 0;

    while (index < nomesAlimento.length) {
        const alimento = nomesAlimento[index];

        if (alimento.tipo === "fruta") {
            console.log(alimento.nome);
        }

        index++;
    }
}
