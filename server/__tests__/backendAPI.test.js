const express = require('express')
const request = require('supertest');
// import { toBeOneOf } from 'jest-extended';
// expect.extend({ toBeOneOf });
const server = 'http://localhost:3000';

describe('Serve frontend static file', () => {
    describe('GET', () => {
        it('responds with 200 status and text/html content type', () => {
            return request(server)
                .get('/')
                .expect('Content-Type', /text\/html/)
                .expect(200);
        });
    });
});

describe('Global API test', () => {
    describe('/daily', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                    .get('/api/global/daily')
                    .expect('Content-Type', /application\/json/)
                    .expect(200)
                    .then(result => {
                        // console.log(result['_body'][0]);
                        const earthquake = result['_body'][0];
                        expect(result && typeof earthquake === 'object');
                        expect(typeof earthquake.magnitude).toEqual('number');
                        expect(typeof earthquake.latitude).toEqual('number');
                        expect(typeof earthquake.longitude).toEqual('number');
                        expect(['string', 'object']).toContain(typeof earthquake.alert);
                        expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                        expect(typeof earthquake.place).toEqual('string');
                        expect(typeof earthquake.time).toEqual('string');
                    });
            });
        })
    });

    describe('/weekly', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                    .get('/api/global/weekly')
                    .expect('Content-Type', /application\/json/)
                    .expect(200)
                    .then(result => {
                        // console.log(result['_body'][0]);
                        const earthquake = result['_body'][0];
                        expect(result && typeof earthquake === 'object');
                        expect(typeof earthquake.magnitude).toEqual('number');
                        expect(typeof earthquake.latitude).toEqual('number');
                        expect(typeof earthquake.longitude).toEqual('number');
                        expect(['string', 'object']).toContain(typeof earthquake.alert);
                        expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                        expect(typeof earthquake.place).toEqual('string');
                        expect(typeof earthquake.time).toEqual('string');
                    });
            });
        })
    })

    describe('/monthly', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                    .get('/api/global/monthly')
                    .expect('Content-Type', /application\/json/)
                    .expect(200)
                    .then(result => {
                        // console.log(result['_body'][0]);
                        const earthquake = result['_body'][0];
                        expect(result && typeof earthquake === 'object');
                        expect(typeof earthquake.magnitude).toEqual('number');
                        expect(typeof earthquake.latitude).toEqual('number');
                        expect(typeof earthquake.longitude).toEqual('number');
                        expect(['string', 'object']).toContain(typeof earthquake.alert);
                        expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                        expect(typeof earthquake.place).toEqual('string');
                        expect(typeof earthquake.time).toEqual('string');
                    });
            });
        })
    });

    describe('/yearly', () => {
        describe('GET', () => {
            it('responds with 200 status and application/json content type', () => {
                return request(server)
                    .get('/api/global/yearly')
                    .expect('Content-Type', /application\/json/)
                    .expect(200)
                    .then(result => {
                        // console.log(result['_body'][0]);
                        const earthquake = result['_body'][0];
                        expect(result && typeof earthquake === 'object');
                        expect(typeof earthquake.magnitude).toEqual('number');
                        expect(typeof earthquake.latitude).toEqual('number');
                        expect(typeof earthquake.longitude).toEqual('number');
                        expect(['string', 'object']).toContain(typeof earthquake.alert);
                        expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                        expect(typeof earthquake.place).toEqual('string');
                        expect(typeof earthquake.time).toEqual('string');
                    });
            });
        })
    });
})