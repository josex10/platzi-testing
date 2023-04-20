describe('set', () => {

    beforeAll(()=>{
        //Before All the test
    });

    afterAll(() => {
        //After All the test
    });

    beforeEach(() => {
        // Before each test
    });

    afterEach(() => {
        //after each test
    });

    test('case 1', () => {
        expect(1 + 1).toBe(2);
    });
    test('case 2', () => {
        expect(1 + 3).toBe(4);
    });

    describe('Other Set', () => {
        test('case 3', () => {
            expect(1 + 1).toBe(2);
        });
        test('case 4', () => {
            expect(1 + 3).toBe(4);
        });
    });
});