const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should()

// middleware
chai.use(chaiHttp);

// api
const app = require('../index');

// testing route 1
describe('GET /api/ping', () => {
  it('should return status 200', (done) => {
    chai.request(app)
      .get('/api/ping')
      .end((err, res) => {
        res.should.have.status(200)
        res.body.should.be.a('object')
        done()
      })
  })
});

// testing route 2
describe('GET /api/post', () => {
  it('should return an object with an array of posts', (done) => {
    chai.request(app)
      .get('/api/post?tag=tech')
      .end((err, res) => {
        console.log(res.body)
        res.should.have.status(200)
        res.body.should.be.a('object')
        res.body.posts.should.be.a('array')
        res.body.posts.forEach(item => {
          item.should.have.property('author')
          item.should.have.property('authorId')
          item.should.have.property('id')
          item.should.have.property('likes')
          item.should.have.property('popularity')
          item.should.have.property('reads')
          item.should.have.property('tags')
        })
        done()
      })
  })
});
