'use strict';

const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

const server = require('../../server');

describe('Test /notes routes', () => {
  console.log(process.env.MONGODB_URI)
  it('Should get all notes', function(done) { 
    request(server)
      .get('/api/notes')
      .end(function(err, res) {
        // console.log(res)
        // console.log(err)
        expect(res.statusCode).to.equal(200);
        // expect(res.body).to.be.an('array');
        // expect(res.body).to.be.empty;
        done();
      });
  });
  // it ('should return all notes!', async () => {
    // const res = await request(server).get('/ping');
//     expect(res.status).toBe(200);
//     // expect(response.text).toBe('Pong!');
// });

it('should pass', () => {
    expect(1).to.equal(1);
  });
});