import Character from '../Character.js'
export default class Magician extends Character {
    constructor(name, type, health, level) {
        super(name, type, health, level);
        this.name = 'Jim'
        this.type = 'Magician'
        this.attack = 10;
        this.defence = 40;
    }
}