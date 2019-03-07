'use strict';

const app = require('../../src/app');
// const config = require('../../src/config/index')

const request = require('supertest');
const { expect } = require('chai');

describe('Test /notes routes', function() {
  // it('GET api/notes/all', async function(done) { 
    
    // request(app).get('/api/notes/all')
  //       .end(function(err, res) { 
  //         expect(res.statusCode).to.equal(200); 
  //         expect(res.body).to.be.an('array'); 
  //         expect(res.body).to.not.be.empty; 
  //         // console.log('err', err)
  //         // console.log('res', res)
  //         done(); 
  //       }); 
  // });
  it ('should return all notes!', async () => {
    const res = await request(app).get('/api/notes/all')
    res.expect(res.status).toBe(200);
    // expect(response.text).toBe('Pong!');
            done(); 
});

it('should pass 2', () => {
    expect(1).to.equal(1);
  });
  // after()
});