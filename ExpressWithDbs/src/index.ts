import express, { Request, Response } from "express"


export const app = express()
app.use(express.json())


app.post('/sum', (req: Request, res: Response)=> {
  const { a, b } = req.body
  const sum = a + b

  res.json({ sum })

})


