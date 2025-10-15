import { Enemigo, Jefe } from './enemies.js';

const goblin = new Enemigo('Goblin', 10, 3);
const esqueleto = new Enemigo('Esqueleto', 16, 7);

console.log(goblin.presentacion());
console.log(esqueleto.presentacion());

const dragon = new Jefe('Dragón', 33, 100, 'Aliento de Fuego');

console.log(dragon.presentacion());