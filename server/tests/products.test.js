import chai from 'chai';
import request from 'supertest';
import app from '../src';


const { expect } = chai;


describe('/GET all products', () => {
  it('should get all products', (done) => {
    request(app).get('/api/v1/products')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('array');
        done();
      });
  });
});

describe('/GET a product', () => {
  it('should get a particular product', (done) => {
    request(app).get('/api/v1/products/2')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });

  it('should not get a product that does not exist', (done) => {
    request(app).get('/api/v1/products/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/POST a product', () => {
  it('should post a product', (done) => {
    request(app)
      .post('/api/v1/products')
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

describe('/PUT a product', () => {
  it('should update a product', (done) => {
    request(app)
      .put('/api/v1/products/3')
      .send({ name: 'olive' })
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data.name).to.equal('olive');
        done();
      });
  });


  it('should not update a product that does not exist', (done) => {
    request(app).put('/api/v1/products/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});

describe('/DELETE a product', () => {
  it('should delete a product', (done) => {
    request(app)
      .delete('/api/v1/products/4')
      .expect(200)
      .end((err, res) => {
        console.log(res.body);
        expect(res.body.data).to.be.an('Object');
        done();
      });
  });
  2;

  it('should not delete a product that does not exist', (done) => {
    request(app).delete('/api/v1/products/20')
      .expect(404)
      .end((err, res) => {
        console.log(res.body);
        if (err) return done(err);
        done();
      });
  });
});
