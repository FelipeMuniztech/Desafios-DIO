// 1. Variáveis para armazenar o nome e a quantidade de XP do herói
let nomeDoHeroi = "Fênix Sombria"; // Substitua pelo nome que desejar
let xpDoHeroi = 8500; // Substitua pelo valor de XP que desejar (tente valores diferentes!)

// 2. Variável para armazenar o nível do herói
let nivel;

// 3. Estrutura de Decisão para classificar o nível com base no XP
if (xpDoHeroi < 1000) {
    nivel = "Ferro";
} else if (xpDoHeroi >= 1001 && xpDoHeroi <= 2000) {
    nivel = "Bronze";
} else if (xpDoHeroi >= 2001 && xpDoHeroi <= 5000) {
    nivel = "Prata";
} else if (xpDoHeroi >= 5001 && xpDoHeroi <= 7000) {
    nivel = "Ouro";
} else if (xpDoHeroi >= 7001 && xpDoHeroi <= 8000) {
    nivel = "Platina";
} else if (xpDoHeroi >= 8001 && xpDoHeroi <= 9000) {
    // Para o nosso exemplo com xpDoHeroi = 8500, esta condição será verdadeira.
    nivel = "Ascendente"; 
} else if (xpDoHeroi >= 9001 && xpDoHeroi <= 10000) {
    nivel = "Imortal";
} else { // Se for maior ou igual a 10.001 (a única opção restante)
    nivel = "Radiante";
}

console.log("O Herói de nome **" + nomeDoHeroi + "** está no nível de **" + nivel + "**");


