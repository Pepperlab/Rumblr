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

describe('Search API test', () => {
    test('search based on location, time, and magnitude', () => {
        return request(server)
            .post('/api/search')
            .expect('Content-Type', /application\/json/)
            .send({
                "location": {
                    "longitude": -155.483337402344,
                    "latitude": 19.191499710083,
                    "radius": 5000
                },
                "time": {
                    "startDay": "2022-11-08",
                    "endDay": "2022-11-15"
                },
                "magnitude": {
                    "lowerLimit": 1,
                    "upperLimit": 5
                }
            })
            .expect(200)
            .then(result => {
                // console.log(result);
                const earthquake = result['_body'][0];
                expect(result && typeof earthquake === 'object');
                expect(typeof earthquake.magnitude).toEqual('number');
                expect(typeof earthquake.latitude).toEqual('number');
                expect(typeof earthquake.longitude).toEqual('number');
                expect(['string', 'object']).toContain(typeof earthquake.alert);
                expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                expect(typeof earthquake.place).toEqual('string');
                expect(typeof earthquake.time).toEqual('string');
            })
    })

    test('search based on location', () => {
        return request(server)
            .post('/api/search')
            .expect('Content-Type', /application\/json/)
            .send({
                "location": {
                    "longitude": -155.483337402344,
                    "latitude": 19.191499710083,
                    "radius": 5000
                }
            })
            .expect(200)
            .then(result => {
                // console.log(result);
                const earthquake = result['_body'][0];
                expect(result && typeof earthquake === 'object');
                expect(typeof earthquake.magnitude).toEqual('number');
                expect(typeof earthquake.latitude).toEqual('number');
                expect(typeof earthquake.longitude).toEqual('number');
                expect(['string', 'object']).toContain(typeof earthquake.alert);
                expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                expect(typeof earthquake.place).toEqual('string');
                expect(typeof earthquake.time).toEqual('string');
            })
    })

    test('search based on location without radius', () => {
        return request(server)
            .post('/api/search')
            .expect('Content-Type', /application\/json/)
            .send({
                "location": {
                    "longitude": -155.483337402344,
                    "latitude": 19.191499710083,
                }
            })
            .expect(200)
            .then(result => {
                // console.log(result);
                const earthquake = result['_body'][0];
                expect(result && typeof earthquake === 'object');
                expect(typeof earthquake.magnitude).toEqual('number');
                expect(typeof earthquake.latitude).toEqual('number');
                expect(typeof earthquake.longitude).toEqual('number');
                expect(['string', 'object']).toContain(typeof earthquake.alert);
                expect(['red', 'yellow', 'green', 'orange', null]).toContain(earthquake.alert);
                expect(typeof earthquake.place).toEqual('string');
                expect(typeof earthquake.time).toEqual('string');
            })
    })
    
    test('search with the same date as start and end will not throw an error', () => {
        return request(server)
            .post('/api/search')
            .expect('Content-Type', /application\/json/)
            .send({
                "location": {
                    "longitude": -155.483337402344,
                    "latitude": 19.191499710083,
                    "radius": 5000
                },
                "time": {
                    "startDay": "2022-11-15",
                    "endDay": "2022-11-15"
                },
                "magnitude": {
                    "lowerLimit": 1,
                    "upperLimit": 5
                }
            })
            .expect(500)
    })

    test('search based on location without radius & longitude should throw error', () => {
        return request(server)
            .post('/api/search')
            .expect('Content-Type', /application\/json/)
            .send({
                "location": {
                    "latitude": 19.191499710083,
                }
            })
            .expect(500)
    })

    test('search based on location without radius & latitude should throw error', () => {
        return request(server)
            .post('/api/search')
            .expect('Content-Type', /application\/json/)
            .send({
                "location": {
                    "longitude": 19.191499710083,
                }
            })
            .expect(500)
    })

})


