import supertest from 'supertest';
import { expect } from 'chai'; // Perbaikan di sini

const request = supertest('https://jsonplaceholder.typicode.com');

describe('First Test', () => {
  it('should return a list of users', async () => {
    const response = await request.get('/users');

    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array');
  });
});
