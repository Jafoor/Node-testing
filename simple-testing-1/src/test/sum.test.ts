import {describe, expect, it} from '@jest/globals';
import {sum} from '../index'; 

describe('sum', () => {
    it("Should be able to add two numbers", () => {
        expect(sum(1, 2)).toBe(3);
    });

    it("Should be able to add two negative numbers", () => {
        expect(sum(-1, -2)).toBe(-3);
    });

    it("Should be able to add two positive and negative numbers", () => {
        expect(sum(-1, 2)).toBe(1);
    });

    it("Should be able to add two negative and positive numbers", () => {
        expect(sum(1, -2)).toBe(-1);
    });

    it("Should be able to add zero", () => {
        expect(sum(0, 0)).toBe(0);
    });
});