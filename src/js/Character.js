const personages = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
export default class Character {
    constructor(name, type, attack, defence) {
        this.name = this.name
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.attack = attack;
        this.defence = defence;
    }
    checkName(name, type) {
        if (typeof name !== 'string' || name.length < 2 || name.length > 10 || personages.indexOf(type) === -1) {
            console.log('Error')
            // throw new Error('Error');
        };
    };
    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack *= 1.2;
            this.defence *= 1.2;
            this.health = 100;
        }
        else {
            throw new Error('Нельзя повысить левел умершего');
        };
        return this;
    };
    damage(points) {
        if (this.health > 0) {
            this.health -= points * (1 - this.defence / 100);
        };
    };
};