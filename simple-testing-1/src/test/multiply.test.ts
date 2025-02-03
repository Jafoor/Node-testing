import {describe, expect, it} from '@jest/globals';
import {multiply} from '../index'; 

describe('multiply', () => {
    it("Should be able to multiply two numbers", () => {
        expect(multiply(1, 2)).toBe(2);
    });

    it("Should be able to multiply two negative numbers", () => {
        expect(multiply(-1, -2)).toBe(2);
    });

    it("Should be able to multiply two positive and negative numbers", () => {
        expect(multiply(-1, 2)).toBe(-2);
    });

    it("Should be able to multiply two negative and positive numbers", () => {
        expect(multiply(1, -2)).toBe(-2);
    });

    it("Should be able to multiply zero", () => {
        expect(multiply(0, 0)).toBe(0);
    });
})