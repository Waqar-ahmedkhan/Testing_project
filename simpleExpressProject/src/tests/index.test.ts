import {describe, expect,  it} from '@jest/globals';
import { app } from "../index"
import  request  from 'supertest';
  describe("post /sum", () => {
    it("shoudl return the sum", async () => {
      const res = await request(app).post("/sum").send({
        a: 1,
        b: 2
      })
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(3);
    })
    it("shoudl return the sum of negative numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: -1,
        b: -2
      })
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(-3);
    })

    it("should retrun the two zero numbers", async () => {
      const res = await request(app).post("/sum").send({
        a: 0,
        b: 0
      })
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(0);
    })

  })

// describe("POST /sum", () => {
//     it("should return the sum of two numbers", async () => {
//         const res = await request(app).post("/sum").send({
//           a: 1,
//           b: 2
//         });
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(3);
//       });

//       it("should return the sum of two negative numbers", async () => {
//         const res = await request(app).post("/sum").send({
//           a: -1,
//           b: -2
//         });
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(-3);
//       });

//       it("should return the sum of two zero number", async () => {
//         const res = await request(app).post("/sum").send({
//           a: 0,
//           b: 0
//         });
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(0);
//       });
// });
