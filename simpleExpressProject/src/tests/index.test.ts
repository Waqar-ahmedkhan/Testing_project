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


    it("code should not be running ", async ()=> {
      const res = await request(app).post("/multiple").send({
        a: 100000000,
        b: 0
      })
      expect(res.statusCode).toBe(422);
      expect(res.body.error).toBe("Number exceeds the limit of 100,000");

    })


  })

  describe("post /multiple", () => { 
    it("shoudl return the multiplication of two numbers", async () => {
      const res = await request(app).post("/multiple").send({
        a: 2,
        b: 3
      })
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(6);
    })
    it("shoudl return the multiplication of negative numbers", async () => {
      const res = await request(app).post("/multiple").send({
        a: -2,
        b: -3
      })
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(6);
    })

    it("should send multiple zeros to multiple responses", async () => {
      const res = await request(app).post("/multiple").send({
        a: 0,
        b: 0
      })
      expect(res.statusCode).toBe(200);
      expect(res.body.answer).toBe(0);
    })

    it("code should not be running ", async ()=> {
      const res = await request(app).post("/multiple").send({
        a: 100000000,
        b: 0
      })
      expect(res.statusCode).toBe(422);
      expect(res.body.error).toBe("Number exceeds the limit of 100,000");

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
