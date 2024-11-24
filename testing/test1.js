import supertest from "supertest";
import { expect } from "chai";

const baseUrl = "https://restful-booker.herokuapp.com";

describe("Get All Booking", () => {
    it("Positive - success get all booking", async () => {
        const response = await supertest(baseUrl).get("/booking");

        // Assertion dengan chai
        expect(response.status).to.equal(200);
    });
});
