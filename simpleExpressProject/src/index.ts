import express, { Request, Response } from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req: Request, res: Response) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a + b;

  if( a > 100000 || b > 100000){
    res.status(422).json({
        error: "Number exceeds the limit of 100,000",
    })
  }

  res.json({
    answer,
  });
});

app.post("/multiple", (req: Request, res: Response) => {
  const a = req.body.a;
  const b = req.body.b;
  const answer = a * b;

  if( a > 100000 || b > 100000){
    res.status(422).json({
        error: "Number exceeds the limit of 100,000",
    })
  }


  res.json({
    answer,
  });
});
