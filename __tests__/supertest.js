

// const server = 'http://localhost:3000';

const { app } = require('../server/server');
const supertest = require('supertest');
// const request = supertest(app);

test('Addition', () => {
    expect(1 + 1).toBe(2);
});

test('API', async () => {
    await supertest(app)
        .get('/test')
        .expect(200)
        .then(res => {
            expect(res)
        })
})

// it('gets the test endpoint', async done => {
//     const response = await request.get('/test')
//     expect(response.status).toBe(200)
//     expect(response.body.message).toBe('pass!')
//     done()
// })

/**
 * Read the docs! https://www.npmjs.com/package/supertest
 */
// describe('Route integration', () => {
//     describe('/', () => {
//         describe('GET', () => {
//             // Note that we return the evaluation of `request` here! It evaluates to
//             // a promise, so Jest knows not to say this test passes until that
//             // promise resolves. See https://jestjs.io/docs/en/asynchronous
//             it('responds with 200 status and text/html content type', () => {
//                 return request(server)
//                     .get('/')
//                     .expect('Content-Type', /text\/html/)
//                     .expect(200);
//             });
//         });
//     });


//     describe('/daily', () => {
//         describe('GET', () => {
//             it('responds with 200 status and application/json content type', () => {
//                 return request(server)
//                     .get('/api/global/daily')
//                     .expect('Content-Type', /application\/json/)
//                     .expect(200);
//             });
//         })
//     })
// })