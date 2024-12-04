import { describe, it,  expect } from "vitest";
import request from "supertest";
import  {app} from "../index"


describe("Post/ sum", () => {
  it("should be add two positive numbers", () => {
    return request(app)
     .post("/sum")
     .send({ a: 5, b: 10 })
     .expect(200)
     .then((response) => {
       expect(response.body.sum).toBe(15);
     });
  })
  it("should be two negative numbers", () => {
    return request(app)
     .post("/sum")
     .send({ a: -5, b: -10 })
     .expect(200)
     .then((response) => {
       expect(response.body.sum).toBe(-15);
     });
  })
})
import { describe, it,  expect } from "vitest";
import request from "supertest";
import  {app} from "../index"


describe("Post/ sum", () => {
  it("should be add two positive numbers", () => {
    return request(app)
     .post("/sum")
     .send({ a: 5, b: 10 })
     .expect(200)
     .then((response) => {
       expect(response.body.sum).toBe(15);
     });
  })
  it("should be two negative numbers", () => {
    return request(app)
     .post("/sum")
     .send({ a: -5, b: -10 })
     .expect(200)
     .then((response) => {
       expect(response.body.sum).toBe(-15);
     });
  })
})