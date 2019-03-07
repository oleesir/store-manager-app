import chai from 'chai';
import request from 'supertest';
import app from '../src';


const { expect } = chai;

describe('/GET all categories', () => {
  it('should get all categories', (done) => {
    request(app).get('/api/v1/categories')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);

        expect(res.body.data).to.be.an('array');
        done();
      });
  });
});


describe('/GET a category', () => {
  it('should get a particular category', (done) => {
    request(app).get('/api/v1/categories/2')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });


  it('should not get a category that does not exist', (done) => {
    request(app).get('/api/v1/categories/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/POST a category', () => {
  it('should post a product', (done) => {
    request(app)
      .post('/api/v1/categories')
      .send({ id: 1, name: 'ivy' })
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data.id).to.be.equal(6);
        expect(res.body.data.name).to.equal('ivy');
        done();
      });
  });
});

describe('/PUT a category', () => {
  it('should update a category', (done) => {
    request(app)
      .put('/api/v1/categories/3')
      .send({ name: 'olive' })
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data.name).to.equal('olive');
        done();
      });
  });


  it('should not update a category that does not exist', (done) => {
    request(app).put('/api/v1/categories/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/DELETE a category', () => {
  it('should delete a category', (done) => {
    request(app)
      .delete('/api/v1/categories/4')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });


  it('should not delete a category that does not exist', (done) => {
    request(app).delete('/api/v1/categories/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});
