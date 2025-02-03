import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    if ( a > 1000 || b > 1000) {
         res.status(422).json({
            message: "Sum is too big"
        })
        return;
    }

    res.json({
        sum: answer
    })
});

app.post("/multiply", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a * b;

    res.json({
        multiply: answer
    })
});