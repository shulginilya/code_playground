import { Sample } from './index';

describe("Function test cases", () => {
    it("sample function", () => {
        const sampleOutput = Sample(5);
        expect(sampleOutput).toBe(10);
    });
});
