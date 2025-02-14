import express from "express";
import { z } from "zod";
import { prismaClient } from "./db";

export const app = express();
app.use(express.json());

const sumInput = z.object({
    a: z.number(),
    b: z.number()
})

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    const request = await prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            type: "Sum",
            result: answer
        }
    })

    res.json({
        answer,
        id: request.id
    })
});

app.post("/multiply", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return
    }

    const answer = parsedResponse.data.a * parsedResponse.data.b;

    await prismaClient.request.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            type: "Multiply",
            result: answer
        }
    })

    res.json({
        answer
    })
});

app.get("/sum", (req, res) => {
    const parsedResponse = sumInput.safeParse({
        a: Number(req.headers["a"]),
        b: Number(req.headers["b"])
    })
    
    if (!parsedResponse.success) {
        res.status(411).json({
            message: "Incorrect inputs"
        })
        return;
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    res.json({
        answer
    })
});