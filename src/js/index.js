import Bowerman from './personages/Bowerman.js'
import Swordsman from './personages/Swordsman.js'
import Magician from './personages/Magician.js'
import Daemon from './personages/Daemon.js'
import Undead from './personages/Undead.js'
import Zombie from './personages/Zombie.js'
const person = new Swordsman();
console.log(person);


// const personages = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
// class Character {
//     constructor(name, type, attack, defence) {
//         this.name = this.checkName(name, type); // Важно: вызываем метод checkName
//         this.type = type;
//         this.health = 100;
//         this.level = 1;
//         this.attack = attack;
//         this.defence = defence;
//     }
//     checkName(name, type) {
//         if (typeof name !== 'string' || name.length < 2 || name.length > 10 || personages.indexOf(type) === -1) {
//             // throw new Error('Error');
//             console.log('Error');
//         } else {
//             return name;
//         }
//     }
// }

// const person = new Character(1, 'Swordsman', 10, 55);
// console.log(person);




// class Messanger {
//     constructor(name) {
//         this.name = name;
//     }
//     send(recipiend, msg) {
//         console.log(`message from' ${recipiend}: ${msg}`)
//     }
// }

// const baseMessage = new Messanger('Basic');
// console.log(baseMessage);




// const person = new Character('Bovan', 'Daemon', 19, 21);
// const person1 = new Bowman('Ivan', 'Bowman');
// const person2 = new Swordsman('Gena', 'Swordsman');
// const person3 = new Zombie('Jorik', 'Zombie');
// const person4 = new Daemon('Mark', 'Daemon');
// const person5 = new Magician('Ulla', 'Magician');
// const person6 = new Undead('Evpatiy', 'Undead');