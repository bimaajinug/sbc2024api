import supertest from 'supertest';
import { expect } from 'chai';

const baseUrl = 'http://kasiraja-kasir-6d14e7-776927-46-250-233-198.traefik.me';

describe('POST Request - update Users', () => {

    it('should delete user', async function () {
        this.timeout(5000);  // Mengatur timeout menjadi 5 detik
        const response = await supertest(baseUrl)
            .delete('/users/65d377ff-40ba-45b1-8bcb-3bc32c06d572')  // Pastikan Anda mengakses endpoint yang benar
            .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNkOWI0MWJjLTc0NjYtNDUzMS05YTEwLWIyNmUyNTQ5MzA3YSIsImNvbXBhbnlJZCI6ImQ3Mzk0MWJlLWQ4OTktNGZkYS1hN2Y0LTg1ZGUxMDMzMGRiYyIsImlhdCI6MTczMjQ1NzQwOH0.0PagyFGb-8NtdHxXobLNmuaLT3aHiZKhbW0V9oIvKIM')  // Pastikan token valid
            .set('Content-Type', 'application/json')

        // Debugging response
        console.log(response.status); // Debug status code
        console.log(response.body); // Debug response body

        // Periksa status response
        expect(response.status).to.equal(200); // Status yang diharapkan setelah resource dibuat
        expect(response.body).to.have.property('status', 'success');
        expect(response.body).to.have.property('message', 'User berhasil dihapus');
    });

});
