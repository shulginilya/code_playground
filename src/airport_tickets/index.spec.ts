import {
    testCase1,
    testCase2,
} from './testInputs';
import { airportTickets } from './index';

describe("Air tickets algo", () => {
    it("algo test case 1", () => {
        const testCase1Output = airportTickets(testCase1.input);
        expect(testCase1Output).toBe(testCase1.output);
    });

    it("algo test case 2", () => {
        const testCase2Output = airportTickets(testCase2.input);
        expect(testCase2Output).toBe(testCase2.output);
    });
});