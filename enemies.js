export { Enemigo, Jefe };

class Enemigo {
    constructor(nombre, ataque, vida, tipo) {
        this.nombre = nombre;
        this.ataque = ataque;
        this.vida = vida;
        this.tipo = 'Enemigo';
    }

    presentacion() {
        return (`Apareció un ${this.nombre} hostil con ${this.ataque} de ataque y ${this.vida} de vida.`);
    }
}

const goblin = new Enemigo('Goblin', 10, 3)
const esqueleto = new Enemigo('Esqueleto', 16, 7)

console.log(goblin.presentacion())
console.log(esqueleto.presentacion())

class Jefe extends Enemigo {
    constructor(nombre, ataque, vida, habilidadEspecial, multiplicadorDeDanio = 1.5) {
        super(nombre, ataque, vida, 'Jefe');
        this.habilidadEspecial = habilidadEspecial;
        this.multiplicadorDeDanio = multiplicadorDeDanio;
    }

    presentacion() {
        return `El ${this.tipo} ${this.nombre} apareció.\n` +
            `Habilidad especial: ${this.habilidadEspecial}.\n` +
            `Tiene ${this.ataque} de ataque (con un multiplicador de x${this.multiplicadorDeDanio}) y ${this.vida} de vida.`;
    }
}

const dragon = new Jefe('Dragón', 33, 100, 'Aliento de Fuego');

console.log(dragon.presentacion());

