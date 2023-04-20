const Person = require('./06-person');

describe('Set Test for Person', ()=>{

    let person;

    beforeEach(() => {
        person = new Person('Jose', 45, 1.7);
    });

    test('Should be down', () => {
        person.weight = 45;
        const imc = person.calcIMC();
        expect(imc).toBe('down');
    });
    
    test('should return normal', () => {
        person.weight = 59;
        const imc = person.calcIMC();
        expect(imc).toBe('normal');
    });
});


