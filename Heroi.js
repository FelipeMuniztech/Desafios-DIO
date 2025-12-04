// 1. Definição da Classe Genérica "Heroi"
class Heroi {
    // Método construtor para inicializar as propriedades
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo.toLowerCase(); // Armazena o tipo em minúsculas para facilitar a comparação
    }

    // 2. Definição do Método "atacar"
    atacar() {
        let ataque;

        // Estrutura de Decisão (switch) para determinar a descrição do ataque
        switch (this.tipo) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque desconhecido";
        }

        // 3. Exibição da Saída Formatada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// ----------------------------------------------------
// Exemplos de Uso (Instanciação de Objetos)
// ----------------------------------------------------

// Herói Mago
const heroiMago = new Heroi("Gandalf", 1000, "Mago");
heroiMago.atacar(); 
// Saída Esperada: o mago atacou usando magia

// Herói Guerreiro
const heroiGuerreiro = new Heroi("Conan", 35, "Guerreiro");
heroiGuerreiro.atacar();
// Saída Esperada: o guerreiro atacou usando espada

// Herói Monge
const heroiMonge = new Heroi("Li Shen", 50, "Monge");
heroiMonge.atacar();
// Saída Esperada: o monge atacou usando artes marciais

// Herói Ninja
const heroiNinja = new Heroi("Hattori", 28, "Ninja");
heroiNinja.atacar();
// Saída Esperada: o ninja atacou usando shuriken
