import { describe, expect, it } from '@jest/globals';
import { app } from '../index';
import request from 'supertest';

describe("Test sum endpoint", () => {
    it("Should be able to add two numbers", async () => {
        const response = await request(app).post("/sum").send({a: 1, b: 2});

        expect(response.body.sum).toBe(3);
        expect(response.status).toBe(200);
    });

    it("Should fail when sum is too big", async () => {
        const response = await request(app).post("/sum").send({a: 1001, b: 2});

        expect(response.body.message).toBe("Sum is too big");
        expect(response.status).toBe(422);
    });
});