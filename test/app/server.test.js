'use strict';

const app = require('../../src/app');
// const app = require('../../src/routes/notes');
// const config = require('../../src/config/index')

const request = require('supertest');
const { expect } = require('chai');

describe('Test /notes routes', function() {
  // it('GET api/notes/all', async function(done) { 
  it('GET api/notes/all', function(done) { 
    
    request(app).get('/api/notes/all')
    // request(app).get('/all')
    // request(app).get('/foo').then(
    // request(app).get('/api/notes/all').then(
    //   (err, res) => {
   
    //             console.log('err', err)
    //             console.log('res', res)
    //   }
    // )
    .expect(200)
    .end(done);
  });
    //           it('GET /all', function(done) { 
    // request(app).get('/all')
    //    .expect(200)
    //     .end(done);
    //   });
        // .end(function(err, res) { 
  //         expect(res.statusCode).to.equal(200); 
  //         expect(res.body).to.be.an('array'); 
  //         expect(res.body).to.not.be.empty; 
  //         // console.log('err', err)
  //         // console.log('res', res)
  //         done(); 
  //       }); 
  
  it('should pass 2', () => {
    expect(1).to.equal(1);
  });
  // after()
});