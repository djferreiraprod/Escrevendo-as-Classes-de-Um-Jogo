// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque = "";
        switch (this.tipo) {
            case "mago":
                ataque = "usou magia";
                break;
            case "guerreiro":
                ataque = "usou espada";
                break;
            case "monge":
                ataque = "usou artes marciais";
                break;
            case "ninja":
                ataque = "usou shuriken";
                break;
            default:
                ataque = "não sabe como atacar";
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Criar heróis
const mago = new Heroi("Merlin", 35, "mago");
const guerreiro = new Heroi("Arthur", 28, "guerreiro");
const monge = new Heroi("Lee", 30, "monge");
const ninja = new Heroi("Hanzo", 25, "ninja");

// Exemplos de ataques
mago.atacar(); // "O mago Merlin atacou usando magia"
guerreiro.atacar(); // "O guerreiro Arthur atacou usando espada"
monge.atacar(); // "O monge Lee atacou usando artes marciais"
ninja.atacar(); // "O ninja Hanzo atacou usando shuriken"
