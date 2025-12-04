
 
function calcularNivel(vitorias, derrotas) {
    
    const saldoVitorias = vitorias - derrotas;

    let nivel;

    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { 
        nivel = "Imortal";
    }

    return `O Herói tem de saldo de **${saldoVitorias}** está no nível de **${nivel}**`;
}

let resultado1 = calcularNivel(15, 5); 

console.log(resultado1); 

let resultado2 = calcularNivel(95, 3);

console.log(resultado2);

let resultado3 = calcularNivel(55, 20);

console.log(resultado3);

let resultado4 = calcularNivel(105, 5);

console.log(resultado4);
