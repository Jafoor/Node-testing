import { describe, expect, it } from '@jest/globals';
import { app } from '../index';
import request from 'supertest';

describe("Test multiply endpoint", () => {
    it("Should be able to multiply two numbers", async () => {
        const response = await request(app).post("/multiply").send({a: 1, b: 2});

        expect(response.body.multiply).toBe(2);
        expect(response.status).toBe(200);
    });

    it("Should be able to multiply two numbers", async () => {
        const response = await request(app).post("/multiply").send({a: 0, b: 2});

        expect(response.body.multiply).toBe(0);
        expect(response.status).toBe(200);
    });
});