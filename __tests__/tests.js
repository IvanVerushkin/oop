import Character from '../src/js/Character.js'

test('name length', () => {
    const person = new Swordsman('Ivan', 'Swordsman');
    const result = person.checkName('Ivan', 'Swordsman');
    expect(result).toBe('Ivan');
});