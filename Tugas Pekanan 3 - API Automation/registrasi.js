import supertest from 'supertest';
import { expect } from 'chai';

const baseUrl = 'http://kasiraja-kasir-6d14e7-776927-46-250-233-198.traefik.me';

describe('POST Request - Registration', () => {

    it('should create a new resource', async function () {
        this.timeout(5000);  // Mengatur timeout menjadi 5 detik

        const response = await supertest(baseUrl)
            .post('/registration')  // Pastikan Anda mengakses endpoint yang benar
            .set('Authorization', 'Bearer eyJhbGcimi82zI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxODZkNzZkLTllZWYtNDU1OC05MmE3LWUxZWRkN2UwMmFmZCIsImNvbXBhbnlJZCI6IjNjOWEzMThmLTRkY2EtNDQ1Mi05MTg5LTViNjE2YTQwYWU0ZCIsImlhdCI6MTY3MzI3MDA0Nn0.XVv2yYm7ynXA2jJNWXYp9qedvtDcVf8GkERZLfWpT7g')  // Pastikan token valid
            .set('Content-Type', 'application/json')
            .send({
                name: 'toko kelontong',
                email: 'tokokelontong@gmail.com',
                password: '123adsfadf@',
            });

        // Debugging response
        console.log(response.status); // Debug status code
        console.log(response.body); // Debug response body

        // Periksa status response
        expect(response.status).to.equal(201); // Status yang diharapkan setelah resource dibuat
        expect(response.body).to.have.property('status', 'success');
        expect(response.body).to.have.property('message', 'Toko berhasil didaftarkan');
        expect(response.body.data).to.have.property('name', 'toko kelontong');
        expect(response.body.data).to.have.property('email', 'tokokelontong@gmail.com');
    });

});
