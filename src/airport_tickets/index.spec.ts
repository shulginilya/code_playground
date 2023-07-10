import { testCase1 } from './testInputs';
import { airportTickets } from './index';

describe("Air tickets algo", () => {
    it("algo test case 1", () => {
        const testCase1Output = airportTickets(testCase1.input);
        expect(testCase1Output).toBe(testCase1.output);
    });
});